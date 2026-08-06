#!/usr/bin/env python3
"""Build a whitelisted GitHub Pages artifact after repository validation."""

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path

from validate_repository import ROOT, validate_repository

OUTPUT_DIR = ROOT / "_site"


def copy_file(relative_path: str) -> None:
    source = ROOT / relative_path
    destination = OUTPUT_DIR / relative_path
    destination.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, destination)


def main() -> int:
    errors = validate_repository()
    if errors:
        print("Public site build blocked by validation errors:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    issues = json.loads((ROOT / "issues.json").read_text(encoding="utf-8"))

    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    OUTPUT_DIR.mkdir(parents=True)

    for root_file in ("index.html", "latest.json", "issues.json"):
        copy_file(root_file)

    copy_file("archive/index.html")

    for issue in issues:
        source_dir = ROOT / issue["path"]
        destination_dir = OUTPUT_DIR / issue["path"]
        shutil.copytree(source_dir, destination_dir)

    # Pages artifact is already final static output; do not invoke Jekyll again.
    (OUTPUT_DIR / ".nojekyll").write_text("", encoding="utf-8")

    print(f"Built public artifact at {OUTPUT_DIR.relative_to(ROOT)}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
