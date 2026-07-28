from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
ISSUE = ROOT / "archive" / "2026-07-20.html"
SOURCE = ROOT / "reportages.js"

INDEX_HTML = '''<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="dark"><title>WEEKLY SIGNAL — 최신호</title><style>:root{--ink:#101114;--accent:#ff4a2f}*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:var(--ink);color:#fff;font-family:"Pretendard","Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",sans-serif}main{min-height:100vh;display:grid;place-items:center;padding:28px;text-align:center}.brand{font-size:13px;font-weight:900;letter-spacing:.18em}.line{width:54px;height:3px;background:var(--accent);margin:22px auto}.status{font-family:"Noto Serif KR","Nanum Myeongjo",serif;font-size:clamp(24px,4vw,42px);line-height:1.35;margin:0 0 16px}.hint{font-size:13px;color:rgba(255,255,255,.62);margin:0}.fallback{display:none;margin-top:24px}.fallback a{color:#fff;text-underline-offset:4px}</style></head><body><main><div><div class="brand">WEEKLY SIGNAL</div><div class="line"></div><p class="status" id="status">최신호를 불러오고 있습니다.</p><p class="hint">잠시 후 최신 발행호로 이동합니다.</p><p class="fallback" id="fallback"><a href="archive/">과월호 목록에서 열기</a></p></div></main><script>(async()=>{const status=document.getElementById('status'),fallback=document.getElementById('fallback');try{const r=await fetch(`./latest.json?t=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);const latest=await r.json();if(!latest.path||!latest.path.startsWith('archive/'))throw new Error('Invalid latest path');status.textContent=latest.title||'최신호로 이동합니다.';location.replace(new URL(latest.path,location.href).href)}catch(e){status.textContent='최신호 연결을 확인할 수 없습니다.';fallback.style.display='block';console.error(e)}})();</script><noscript><style>.fallback{display:block}</style></noscript></body></html>
'''

ARCHIVE_INDEX = '''<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>과월호 | WEEKLY SIGNAL</title><style>:root{--ink:#101114;--paper:#f2eee4;--muted:#69675f;--line:#c9c2b4;--accent:#ff4a2f}*{box-sizing:border-box}body{margin:0;color:var(--ink);background:var(--paper);font-family:"Pretendard","Noto Sans KR","Apple SD Gothic Neo","Malgun Gothic",sans-serif;line-height:1.7}header{background:var(--ink);color:#fff;padding:18px clamp(18px,4vw,48px);display:flex;justify-content:space-between;align-items:center;gap:20px}header strong{letter-spacing:.14em}header a{color:#fff;text-decoration:none}main{width:min(920px,calc(100% - 36px));margin:auto;padding:clamp(60px,9vw,110px) 0}h1{font-size:clamp(42px,8vw,80px);line-height:1.05;letter-spacing:-.05em;margin:0 0 14px}.intro{color:var(--muted);margin:0 0 45px}.issue-list{list-style:none;margin:0;padding:0}.issue-list li{border-top:1px solid var(--line)}.issue-list li:last-child{border-bottom:1px solid var(--line)}.issue-list a{display:grid;grid-template-columns:140px minmax(0,1fr);gap:24px;padding:26px 4px;color:inherit;text-decoration:none}.issue-list a:hover{background:rgba(255,255,255,.45)}time{color:var(--accent);font-weight:900;font-size:13px}.title{font-size:20px;font-weight:800}.period{display:block;color:var(--muted);font-size:13px;margin-top:5px}@media(max-width:600px){.issue-list a{grid-template-columns:1fr;gap:6px}}</style></head><body><header><strong>WEEKLY SIGNAL</strong><a href="../">최신호</a></header><main><h1>과월호</h1><p class="intro">발행일별 WEEKLY SIGNAL을 다시 볼 수 있습니다.</p><ol class="issue-list"><li><a href="2026-07-20.html"><time datetime="2026-07-20">2026.07.20</time><span class="title">AI는 산업이 아니라 공급망이 됐다<span class="period">2026.07.20–07.26</span></span></a></li></ol></main></body></html>
'''

README = '''# WEEKLY SIGNAL

주간 시사 매거진을 GitHub Pages로 게시하는 저장소입니다.

## 게시 구조

- `index.html`: 고정 최신호 로더. `latest.json`을 읽어 최신 보존호로 이동합니다.
- `latest.json`: 최신 발행호의 경로·기간·표지 제목을 기록하는 포인터입니다.
- `archive/index.html`: 과월호 목록입니다.
- `archive/YYYY-MM-DD.html`: CSS·스크립트·이미지를 포함한 발행호별 완성형 HTML입니다.
- `.nojekyll`: 정적 파일을 Jekyll 변환 없이 게시합니다.

## 주간 발행 순서

1. 새 호 완성본을 `archive/YYYY-MM-DD.html`로 추가합니다.
2. `archive/index.html` 최상단에 새 호를 추가합니다.
3. `latest.json`을 새 호로 변경합니다.
4. `index.html`은 로더 구조가 바뀌지 않는 한 수정하지 않습니다.

과월호는 날짜별 완성본으로 보존되므로 이후 최신호가 바뀌어도 내용이 변하지 않습니다.
'''


def extract_reportages(source: str):
    css_match = re.search(r"const\s+css\s*=\s*`([\s\S]*?)`;\s*const\s+blocks\s*=", source)
    blocks_match = re.search(r"const\s+blocks\s*=\s*\{([\s\S]*?)\};", source)
    if not css_match or not blocks_match:
        raise RuntimeError("reportages.js 구조를 읽을 수 없습니다")
    body = blocks_match.group(1)
    blocks = {}
    for key in ("economy", "politics", "society", "tech"):
        match = re.search(rf"(?:^|,)\s*{key}\s*:\s*`([\s\S]*?)`\s*(?=,|$)", body)
        if not match:
            raise RuntimeError(f"르포 블록 누락: {key}")
        blocks[key] = match.group(1)
    return css_match.group(1), blocks


def add_to_section(html: str, section_id: str, fragment: str) -> str:
    start = re.search(rf'<section\b[^>]*\bid=["\']{re.escape(section_id)}["\'][^>]*>', html, re.I)
    if not start:
        raise RuntimeError(f"섹션 누락: {section_id}")
    end = html.find("</section>", start.end())
    if end < 0:
        raise RuntimeError(f"섹션 종료 누락: {section_id}")
    if f'id="reportage-{section_id}"' in html[start.start():end]:
        return html
    return html[:end] + fragment + html[end:]


def main():
    html = ISSUE.read_text(encoding="utf-8")
    if 'id="reportage-economy"' not in html:
        css, blocks = extract_reportages(SOURCE.read_text(encoding="utf-8"))
        html = html.replace("</head>", f"<style>\n{css}\n</style>\n</head>", 1)
        for key in ("economy", "politics", "society", "tech"):
            html = add_to_section(html, key, blocks[key])
        ISSUE.write_text(html, encoding="utf-8")

    (ROOT / "index.html").write_text(INDEX_HTML, encoding="utf-8")
    (ROOT / "latest.json").write_text(json.dumps({
        "issueStart": "2026-07-20",
        "period": "2026-07-20/2026-07-26",
        "title": "AI는 산업이 아니라 공급망이 됐다",
        "path": "archive/2026-07-20.html",
        "publishedAt": "2026-07-28T22:30:00+09:00"
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (ROOT / "archive" / "index.html").write_text(ARCHIVE_INDEX, encoding="utf-8")
    (ROOT / "README.md").write_text(README, encoding="utf-8")

    for path in (SOURCE, Path(__file__), ROOT / ".github" / "workflows" / "migrate-archive.yml"):
        if path.exists():
            path.unlink()
    for directory in (ROOT / "scripts", ROOT / ".github" / "workflows", ROOT / ".github"):
        try:
            directory.rmdir()
        except OSError:
            pass


if __name__ == "__main__":
    main()
