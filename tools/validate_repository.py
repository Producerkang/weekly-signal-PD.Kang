#!/usr/bin/env python3
"""Validate WEEKLY SIGNAL publication structure before merge or deploy."""

from __future__ import annotations

import hashlib
import json
import re
import sys
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable

from PIL import Image, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_DIR = ROOT / "archive"
ISSUES_FILE = ROOT / "issues.json"
LATEST_FILE = ROOT / "latest.json"
LEGACY_FILE = ROOT / "publication" / "legacy-issues.json"

DATE_DIR_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
ALLOWED_IMAGE_SUFFIXES = {".webp", ".png", ".jpg", ".jpeg"}
PLACEHOLDER_PATTERNS = (
    "[TITLE]",
    "[DECK]",
    "[BODY]",
    "TODO",
    "TBD",
    "LOREM IPSUM",
    "기사 본문을 불러오는 중",
)
REQUIRED_SECTION_IDS = {
    "top",
    "contents",
    "life-scene",
    "editors-pick",
    "cover-story",
    "economy",
    "politics",
    "society",
    "tech",
    "sources",
}
REQUIRED_IMAGE_SECTIONS = {
    "top",
    "life-scene",
    "cover-story",
    "economy",
    "politics",
    "society",
    "tech",
}
LAYOUT_MODULE_CLASSES = {
    "metric-band",
    "split-intro",
    "timeline",
    "comparison",
    "service-grid",
    "standard-pair",
    "evidence-grid",
    "quote-break",
    "data-band",
    "fact-grid",
    "image-spread",
    "timeline-grid",
    "comparison-grid",
}


@dataclass(frozen=True)
class ImageRef:
    src: str
    alt: str
    section_id: str


class IssueHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.images: list[ImageRef] = []
        self.anchor_hrefs: list[str] = []
        self.stylesheet_hrefs: list[str] = []
        self.script_srcs: list[str] = []
        self.inline_style_count = 0
        self.class_names: set[str] = set()
        self.section_stack: list[str] = []
        self._script_depth = 0
        self.script_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        element_id = values.get("id", "").strip()
        if element_id:
            self.ids.add(element_id)

        classes = values.get("class", "").split()
        self.class_names.update(classes)

        if tag == "section":
            self.section_stack.append(element_id)
        elif tag == "img":
            current_section = next((item for item in reversed(self.section_stack) if item), "")
            self.images.append(
                ImageRef(
                    src=values.get("src", "").strip(),
                    alt=values.get("alt", "").strip(),
                    section_id=current_section,
                )
            )
        elif tag == "a":
            self.anchor_hrefs.append(values.get("href", "").strip())
        elif tag == "link":
            rel_tokens = {token.lower() for token in values.get("rel", "").split()}
            if "stylesheet" in rel_tokens:
                self.stylesheet_hrefs.append(values.get("href", "").strip())
        elif tag == "style":
            self.inline_style_count += 1
        elif tag == "script":
            self._script_depth += 1
            src = values.get("src", "").strip()
            if src:
                self.script_srcs.append(src)

    def handle_endtag(self, tag: str) -> None:
        if tag == "section" and self.section_stack:
            self.section_stack.pop()
        elif tag == "script" and self._script_depth:
            self._script_depth -= 1

    def handle_data(self, data: str) -> None:
        if self._script_depth:
            self.script_text.append(data)


def load_json(path: Path) -> object:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        raise ValueError(f"필수 파일이 없습니다: {path.relative_to(ROOT)}") from None
    except json.JSONDecodeError as exc:
        raise ValueError(f"JSON 형식 오류: {path.relative_to(ROOT)} ({exc})") from exc


def normalize_issue_path(raw_path: object) -> str:
    if not isinstance(raw_path, str):
        raise ValueError("issues.json의 path는 문자열이어야 합니다.")
    normalized = raw_path.strip()
    if not re.fullmatch(r"archive/\d{4}-\d{2}-\d{2}/", normalized):
        raise ValueError(f"잘못된 회차 경로: {normalized!r}")
    return normalized


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def iter_asset_files(asset_dir: Path) -> Iterable[Path]:
    if not asset_dir.is_dir():
        return []
    return sorted(path for path in asset_dir.rglob("*") if path.is_file())


def validate_legacy_issue(issue_dir: Path, issue_start: str, errors: list[str]) -> None:
    index_path = issue_dir / "index.html"
    asset_dir = issue_dir / "assets"
    if not index_path.is_file():
        errors.append(f"[{issue_start}] 레거시 회차 index.html이 없습니다.")
    if not asset_dir.is_dir():
        errors.append(f"[{issue_start}] 레거시 회차 assets/가 없습니다.")


def validate_strict_issue(issue_dir: Path, issue_start: str, errors: list[str]) -> None:
    label = f"[{issue_start}]"
    entries = {path.name for path in issue_dir.iterdir()}
    if entries != {"index.html", "assets"}:
        errors.append(
            f"{label} 회차 루트에는 index.html과 assets/만 허용합니다. 현재: {sorted(entries)}"
        )

    index_path = issue_dir / "index.html"
    asset_dir = issue_dir / "assets"
    if not index_path.is_file() or not asset_dir.is_dir():
        errors.append(f"{label} index.html 또는 assets/가 없습니다.")
        return

    html_bytes = index_path.read_bytes()
    if len(html_bytes) < 60_000:
        errors.append(f"{label} index.html이 60KB 미만입니다. 완성 회차가 아닌 축소 셸일 가능성이 큽니다.")

    try:
        html = html_bytes.decode("utf-8")
    except UnicodeDecodeError:
        errors.append(f"{label} index.html은 UTF-8이어야 합니다.")
        return

    upper_html = html.upper()
    for marker in PLACEHOLDER_PATTERNS:
        if marker.upper() in upper_html:
            errors.append(f"{label} 미완성 표시가 남아 있습니다: {marker}")

    forbidden_patterns = {
        r"\bfetch\s*\(": "런타임 fetch() 기사 조립",
        r"\bXMLHttpRequest\b": "XMLHttpRequest 기사 조립",
        r"sections-\d+\.html": "분할 섹션 HTML",
        r"https://design\.canva\.ai/": "외부 Canva 이미지 URL",
        r"<iframe\b": "외부 iframe",
    }
    for pattern, description in forbidden_patterns.items():
        if re.search(pattern, html, flags=re.IGNORECASE):
            errors.append(f"{label} 금지된 구성 발견: {description}")

    parser = IssueHTMLParser()
    parser.feed(html)

    missing_ids = sorted(REQUIRED_SECTION_IDS - parser.ids)
    if missing_ids:
        errors.append(f"{label} 필수 섹션 id 누락: {missing_ids}")
    if not any(item == "deep-dive" or item.startswith("deep-dive-") for item in parser.ids):
        errors.append(f"{label} DEEP DIVE 섹션이 없습니다.")

    if parser.stylesheet_hrefs:
        errors.append(f"{label} 외부 CSS 파일을 사용할 수 없습니다: {parser.stylesheet_hrefs}")
    if parser.script_srcs:
        errors.append(f"{label} 외부 또는 별도 JS 파일을 사용할 수 없습니다: {parser.script_srcs}")
    if parser.inline_style_count == 0:
        errors.append(f"{label} 회차 CSS는 index.html 안에 내장해야 합니다.")

    script_body = "\n".join(parser.script_text)
    if re.search(r"\bfetch\s*\(|\bXMLHttpRequest\b", script_body):
        errors.append(f"{label} JavaScript로 콘텐츠를 조립할 수 없습니다.")

    for href in parser.anchor_hrefs:
        if href.startswith("#") and len(href) > 1 and href[1:] not in parser.ids:
            errors.append(f"{label} 존재하지 않는 내부 앵커 링크: {href}")

    module_count = len(parser.class_names & LAYOUT_MODULE_CLASSES)
    if module_count < 3:
        errors.append(
            f"{label} 서로 다른 잡지형 지면 모듈이 3개 미만입니다. 감지된 모듈: "
            f"{sorted(parser.class_names & LAYOUT_MODULE_CLASSES)}"
        )

    if len(parser.images) < 8:
        errors.append(f"{label} 주요 이미지가 8개 미만입니다. 현재 {len(parser.images)}개입니다.")

    used_assets: set[Path] = set()
    seen_hashes: dict[str, Path] = {}
    image_sections = {image.section_id for image in parser.images}
    missing_image_sections = sorted(REQUIRED_IMAGE_SECTIONS - image_sections)
    if missing_image_sections:
        errors.append(f"{label} 주요 섹션 이미지 누락: {missing_image_sections}")
    if not any(section == "deep-dive" or section.startswith("deep-dive-") for section in image_sections):
        errors.append(f"{label} DEEP DIVE 이미지가 없습니다.")

    for image in parser.images:
        if not image.alt:
            errors.append(f"{label} 대체 텍스트가 없는 이미지: {image.src or '(src 없음)' }")
        if not image.src.startswith("./assets/"):
            errors.append(f"{label} 이미지는 ./assets/ 상대경로만 허용합니다: {image.src}")
            continue

        relative = Path(image.src.removeprefix("./"))
        if ".." in relative.parts:
            errors.append(f"{label} 이미지 경로에 상위 디렉터리 이동이 있습니다: {image.src}")
            continue
        asset_path = issue_dir / relative
        if not asset_path.is_file():
            errors.append(f"{label} 참조한 이미지 파일이 없습니다: {image.src}")
            continue
        if asset_path.suffix.lower() not in ALLOWED_IMAGE_SUFFIXES:
            errors.append(f"{label} 허용되지 않은 이미지 형식: {image.src}")
            continue

        used_assets.add(asset_path.resolve())
        try:
            with Image.open(asset_path) as opened:
                width, height = opened.size
                opened.verify()
        except (UnidentifiedImageError, OSError) as exc:
            errors.append(f"{label} 손상되거나 읽을 수 없는 이미지: {image.src} ({exc})")
            continue

        long_side = max(width, height)
        required_long_side = 1800 if image.section_id == "top" else 1600
        if long_side < required_long_side:
            errors.append(
                f"{label} 이미지 해상도 부족: {image.src} ({width}×{height}, 장변 {required_long_side}px 필요)"
            )
        if asset_path.stat().st_size < 80 * 1024:
            errors.append(
                f"{label} 이미지 파일이 80KB 미만입니다: {image.src} "
                f"({asset_path.stat().st_size / 1024:.1f}KB)"
            )

        digest = sha256(asset_path)
        duplicate = seen_hashes.get(digest)
        if duplicate is not None and duplicate != asset_path:
            errors.append(
                f"{label} 동일 이미지 재사용 금지: {duplicate.relative_to(issue_dir)} / {asset_path.relative_to(issue_dir)}"
            )
        else:
            seen_hashes[digest] = asset_path

    all_assets = {path.resolve() for path in iter_asset_files(asset_dir)}
    unsupported = sorted(
        path.relative_to(issue_dir).as_posix()
        for path in all_assets
        if path.suffix.lower() not in ALLOWED_IMAGE_SUFFIXES
    )
    if unsupported:
        errors.append(f"{label} assets/에 이미지 외 파일 또는 금지 형식이 있습니다: {unsupported}")

    unused_assets = sorted(path.relative_to(issue_dir).as_posix() for path in all_assets - used_assets)
    if unused_assets:
        errors.append(f"{label} 사용하지 않는 이미지 자산이 있습니다: {unused_assets}")


def validate_repository(root: Path = ROOT) -> list[str]:
    del root  # Repository root is fixed from this script location.
    errors: list[str] = []

    try:
        issues = load_json(ISSUES_FILE)
        latest = load_json(LATEST_FILE)
        legacy_payload = load_json(LEGACY_FILE)
    except ValueError as exc:
        return [str(exc)]

    if not isinstance(issues, list) or not issues:
        return ["issues.json은 비어 있지 않은 배열이어야 합니다."]
    if not isinstance(latest, dict):
        return ["latest.json은 객체여야 합니다."]
    if not isinstance(legacy_payload, dict) or not isinstance(legacy_payload.get("issues"), list):
        return ["publication/legacy-issues.json 형식이 잘못되었습니다."]

    legacy_starts = {
        item.get("issueStart")
        for item in legacy_payload["issues"]
        if isinstance(item, dict) and isinstance(item.get("issueStart"), str)
    }

    normalized_issues: list[dict[str, object]] = []
    listed_dirs: set[str] = set()
    for position, item in enumerate(issues):
        if not isinstance(item, dict):
            errors.append(f"issues.json {position + 1}번째 항목은 객체여야 합니다.")
            continue
        try:
            path_value = normalize_issue_path(item.get("path"))
        except ValueError as exc:
            errors.append(str(exc))
            continue
        issue_start = item.get("issueStart")
        if not isinstance(issue_start, str) or not DATE_DIR_RE.fullmatch(issue_start):
            errors.append(f"잘못된 issueStart: {issue_start!r}")
            continue
        if path_value != f"archive/{issue_start}/":
            errors.append(f"issueStart와 path가 일치하지 않습니다: {issue_start} / {path_value}")
        if path_value in listed_dirs:
            errors.append(f"issues.json에 중복 경로가 있습니다: {path_value}")
        listed_dirs.add(path_value)
        normalized_issues.append(item)

    if normalized_issues and latest != normalized_issues[0]:
        errors.append("latest.json은 issues.json의 첫 번째 항목과 정확히 같아야 합니다.")

    actual_dirs = {
        f"archive/{path.name}/"
        for path in ARCHIVE_DIR.iterdir()
        if path.is_dir() and DATE_DIR_RE.fullmatch(path.name)
    }
    missing_dirs = sorted(listed_dirs - actual_dirs)
    extra_dirs = sorted(actual_dirs - listed_dirs)
    if missing_dirs:
        errors.append(f"발행 목록에 있으나 폴더가 없는 회차: {missing_dirs}")
    if extra_dirs:
        errors.append(
            "issues.json에 없는 날짜 폴더가 archive/에 있습니다. 초안은 main/archive/에 둘 수 없습니다: "
            f"{extra_dirs}"
        )

    for item in normalized_issues:
        issue_start = str(item["issueStart"])
        issue_dir = ROOT / str(item["path"])
        if not issue_dir.is_dir():
            continue
        if issue_start in legacy_starts:
            validate_legacy_issue(issue_dir, issue_start, errors)
        else:
            validate_strict_issue(issue_dir, issue_start, errors)

    return errors


def main() -> int:
    errors = validate_repository()
    if errors:
        print("WEEKLY SIGNAL publication validation failed:\n", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print("WEEKLY SIGNAL publication validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
