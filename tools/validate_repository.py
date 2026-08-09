#!/usr/bin/env python3
"""Validate the active WEEKLY SIGNAL publication structure."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_DIR = ROOT / "archive"
ISSUES_FILE = ROOT / "issues.json"
LATEST_FILE = ROOT / "latest.json"
LEGACY_FILE = ROOT / "publication" / "legacy-issues.json"

DATE_DIR_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
ALLOWED_ASSET_SUFFIXES = {".webp", ".png", ".jpg", ".jpeg", ".svg"}
FORBIDDEN_ROOT_DIRS = {"drafts", "_work", "_drafts"}
PLACEHOLDER_PATTERNS = (
    "[TITLE]",
    "[DECK]",
    "[BODY]",
    "TODO",
    "TBD",
    "LOREM IPSUM",
    "기사 본문을 불러오는 중",
)
BASE_REQUIRED_IDS = {
    "top",
    "contents",
    "cover-story",
    "economy",
    "politics",
    "society",
    "tech",
    "sources",
}
LIFE_ID_ALIASES = {"life", "life-scene"}
AFTERWORD_ID_ALIASES = {"afterword", "editors-afterword"}
LEGACY_FORBIDDEN_IDS = {"editors-pick"}
LAYOUT_MODULE_CLASSES = {
    "metric-band",
    "metric-grid",
    "split-intro",
    "timeline",
    "timeline-grid",
    "comparison",
    "compare",
    "comparison-grid",
    "evidence-grid",
    "quote-break",
    "data-band",
    "fact-grid",
    "path-grid",
    "function-grid",
    "time-grid",
    "flow",
    "front-note",
    "scenario-note",
}


class IssueHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.class_names: set[str] = set()
        self.anchor_hrefs: list[str] = []
        self.stylesheet_hrefs: list[str] = []
        self.script_srcs: list[str] = []
        self.inline_style_count = 0
        self.images: list[tuple[str, str]] = []
        self._script_depth = 0
        self.script_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        element_id = values.get("id", "").strip()
        if element_id:
            self.ids.add(element_id)

        self.class_names.update(values.get("class", "").split())

        if tag == "a":
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
        elif tag == "img":
            self.images.append(
                (values.get("src", "").strip(), values.get("alt", "").strip())
            )

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._script_depth:
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
        raise ValueError(
            f"JSON 형식 오류: {path.relative_to(ROOT)} ({exc})"
        ) from exc


def normalize_issue_path(raw_path: object) -> str:
    if not isinstance(raw_path, str):
        raise ValueError("issues.json의 path는 문자열이어야 합니다.")
    normalized = raw_path.strip()
    if not re.fullmatch(r"archive/\d{4}-\d{2}-\d{2}/", normalized):
        raise ValueError(f"잘못된 회차 경로: {normalized!r}")
    return normalized


def validate_legacy_issue(issue_dir: Path, issue_start: str, errors: list[str]) -> None:
    if not (issue_dir / "index.html").is_file():
        errors.append(f"[{issue_start}] 레거시 회차 index.html이 없습니다.")


def validate_asset_ref(
    issue_dir: Path, src: str, alt: str, label: str, errors: list[str]
) -> None:
    if not src:
        errors.append(f"{label} src가 비어 있는 이미지가 있습니다.")
        return
    if not alt:
        errors.append(f"{label} 대체 텍스트가 없는 이미지: {src}")

    if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*://", src) or src.startswith("//"):
        errors.append(f"{label} 외부 이미지 URL을 직접 사용할 수 없습니다: {src}")
        return

    relative = src.removeprefix("./")
    path = Path(relative)
    if path.is_absolute() or ".." in path.parts:
        errors.append(f"{label} 잘못된 이미지 상대경로: {src}")
        return

    asset_path = issue_dir / path
    if not asset_path.is_file():
        errors.append(f"{label} 참조한 이미지 파일이 없습니다: {src}")
        return

    if asset_path.suffix.lower() not in ALLOWED_ASSET_SUFFIXES:
        errors.append(f"{label} 허용되지 않은 이미지 형식: {src}")


def validate_current_issue(
    issue_dir: Path, issue_start: str, errors: list[str]
) -> None:
    label = f"[{issue_start}]"
    index_path = issue_dir / "index.html"

    if not index_path.is_file():
        errors.append(f"{label} index.html이 없습니다.")
        return

    allowed_entries = {"index.html", "assets"}
    actual_entries = {path.name for path in issue_dir.iterdir()}
    unexpected = sorted(actual_entries - allowed_entries)
    if unexpected:
        errors.append(f"{label} 발행 폴더의 허용되지 않은 항목: {unexpected}")

    asset_dir = issue_dir / "assets"
    if "assets" in actual_entries and not asset_dir.is_dir():
        errors.append(f"{label} assets는 디렉터리여야 합니다.")

    html_bytes = index_path.read_bytes()
    if len(html_bytes) < 15_000:
        errors.append(
            f"{label} index.html이 15KB 미만입니다. 완성 회차인지 직접 확인해야 합니다."
        )

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

    missing_ids = sorted(BASE_REQUIRED_IDS - parser.ids)
    if missing_ids:
        errors.append(f"{label} 필수 섹션 id 누락: {missing_ids}")

    if not (LIFE_ID_ALIASES & parser.ids):
        errors.append(
            f"{label} LIFE SCENE 섹션 id가 없습니다. 허용: {sorted(LIFE_ID_ALIASES)}"
        )
    if "prologue" not in parser.ids:
        errors.append(f"{label} PROLOGUE 섹션 id가 없습니다.")
    if not (AFTERWORD_ID_ALIASES & parser.ids):
        errors.append(
            f"{label} EDITOR'S AFTERWORD 섹션 id가 없습니다. 허용: {sorted(AFTERWORD_ID_ALIASES)}"
        )

    forbidden_ids = sorted(LEGACY_FORBIDDEN_IDS & parser.ids)
    if forbidden_ids:
        errors.append(f"{label} 폐기된 레거시 섹션이 남아 있습니다: {forbidden_ids}")

    if parser.stylesheet_hrefs:
        errors.append(
            f"{label} 외부 CSS 파일을 사용할 수 없습니다: {parser.stylesheet_hrefs}"
        )
    if parser.script_srcs:
        errors.append(
            f"{label} 외부 또는 별도 JS 파일을 사용할 수 없습니다: {parser.script_srcs}"
        )
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
            f"{label} 서로 다른 잡지형 지면 모듈이 3개 미만입니다. 감지: "
            f"{sorted(parser.class_names & LAYOUT_MODULE_CLASSES)}"
        )

    for src, alt in parser.images:
        validate_asset_ref(issue_dir, src, alt, label, errors)

    if asset_dir.is_dir():
        used = {
            (issue_dir / Path(src.removeprefix("./"))).resolve()
            for src, _ in parser.images
            if src
            and not re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*://", src)
            and not src.startswith("//")
            and ".." not in Path(src.removeprefix("./")).parts
        }
        for path in sorted(asset_dir.rglob("*")):
            if not path.is_file():
                continue
            if path.suffix.lower() not in ALLOWED_ASSET_SUFFIXES:
                errors.append(
                    f"{label} assets/에 허용되지 않은 파일 형식: "
                    f"{path.relative_to(issue_dir).as_posix()}"
                )
            if path.resolve() not in used:
                errors.append(
                    f"{label} 사용하지 않는 정적 자산이 있습니다: "
                    f"{path.relative_to(issue_dir).as_posix()}"
                )


def validate_repository(root: Path = ROOT) -> list[str]:
    del root
    errors: list[str] = []

    for dirname in sorted(FORBIDDEN_ROOT_DIRS):
        if (ROOT / dirname).exists():
            errors.append(f"임시 작업 디렉터리가 루트에 남아 있습니다: {dirname}/")

    # work/ is the active production workspace and is intentionally allowed.
    for required_file in (ROOT / "index.html", ARCHIVE_DIR / "index.html"):
        if not required_file.is_file():
            errors.append(
                f"필수 공개 파일이 없습니다: {required_file.relative_to(ROOT)}"
            )

    try:
        issues = load_json(ISSUES_FILE)
        latest = load_json(LATEST_FILE)
        legacy_payload = load_json(LEGACY_FILE)
    except ValueError as exc:
        return errors + [str(exc)]

    if not isinstance(issues, list) or not issues:
        return errors + ["issues.json은 비어 있지 않은 배열이어야 합니다."]
    if not isinstance(latest, dict):
        return errors + ["latest.json은 객체여야 합니다."]
    if not isinstance(legacy_payload, dict) or not isinstance(
        legacy_payload.get("issues"), list
    ):
        return errors + ["publication/legacy-issues.json 형식이 잘못되었습니다."]

    legacy_starts = {
        item.get("issueStart")
        for item in legacy_payload["issues"]
        if isinstance(item, dict) and isinstance(item.get("issueStart"), str)
    }

    listed_starts: list[str] = []
    listed_dirs: set[str] = set()
    for position, item in enumerate(issues):
        if not isinstance(item, dict):
            errors.append(f"issues.json {position + 1}번째 항목은 객체여야 합니다.")
            continue

        issue_start = item.get("issueStart")
        if not isinstance(issue_start, str) or not DATE_DIR_RE.fullmatch(issue_start):
            errors.append(
                f"issues.json {position + 1}번째 issueStart가 잘못되었습니다: {issue_start!r}"
            )
            continue

        if issue_start in listed_starts:
            errors.append(f"issues.json에 중복 issueStart가 있습니다: {issue_start}")
            continue

        try:
            normalized_path = normalize_issue_path(item.get("path"))
        except ValueError as exc:
            errors.append(str(exc))
            continue

        expected_path = f"archive/{issue_start}/"
        if normalized_path != expected_path:
            errors.append(
                f"[{issue_start}] path가 issueStart와 일치하지 않습니다: {normalized_path}"
            )

        listed_starts.append(issue_start)
        listed_dirs.add(issue_start)
        issue_dir = ROOT / normalized_path

        if issue_start in legacy_starts:
            validate_legacy_issue(issue_dir, issue_start, errors)
        else:
            validate_current_issue(issue_dir, issue_start, errors)

    archive_dirs = {
        path.name
        for path in ARCHIVE_DIR.iterdir()
        if path.is_dir() and DATE_DIR_RE.fullmatch(path.name)
    }
    unlisted = sorted(archive_dirs - listed_dirs)
    if unlisted:
        errors.append(f"issues.json에 등록되지 않은 archive 회차가 있습니다: {unlisted}")

    if listed_starts:
        latest_start = latest.get("issueStart")
        if latest_start != listed_starts[0]:
            errors.append(
                "latest.json의 issueStart는 issues.json 첫 번째(최신) 회차와 일치해야 합니다: "
                f"{latest_start!r} != {listed_starts[0]!r}"
            )

        latest_path = latest.get("path")
        try:
            normalized_latest = normalize_issue_path(latest_path)
        except ValueError as exc:
            errors.append(f"latest.json: {exc}")
        else:
            expected_latest = f"archive/{listed_starts[0]}/"
            if normalized_latest != expected_latest:
                errors.append(
                    "latest.json의 path가 최신 회차와 일치하지 않습니다: "
                    f"{normalized_latest!r} != {expected_latest!r}"
                )

    return errors


def main() -> int:
    errors = validate_repository()
    if errors:
        print("WEEKLY SIGNAL repository validation: FAILED")
        for error in errors:
            print(f"- {error}")
        return 1

    print("WEEKLY SIGNAL repository validation: OK")
    print("- active work/ workspace allowed")
    print("- EDITOR'S PICK not required")
    print("- DEEP DIVE optional when editorially omitted")
    print("- images/assets optional when not used")
    return 0


if __name__ == "__main__":
    sys.exit(main())
