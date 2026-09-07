# ISSUE 06 WORK STATE

```text
ISSUE: 06
ISSUE_START: 2026-08-31
ISSUE_END: 2026-09-06
STAGE: PUBLISHED
MANUSCRIPT_STAGE: ALL_REQUIRED_MANUSCRIPTS_COMPLETE
COVER_STORY: COMPLETE
ECONOMY: COMPLETE
POLITICS: COMPLETE
SOCIETY: COMPLETE
TECH: COMPLETE
CROSS_ARTICLE_REVIEW: COMPLETE
DEEP_DIVE: OMIT
DEEP_DIVE_TARGET: NONE
LIFE_SCENE: COMPLETE
PROLOGUE: COMPLETE
EDITOR_AFTERWORD: COMPLETE
LAYOUT: COMPLETE
IMAGES: NOT_REQUIRED
HTML: PUBLISHED
SCREEN_REVIEW: PASS
PUBLISH: COMPLETE
PUBLISHED_AT: 2026-09-07T09:00:54+09:00
ARCHIVE_PATH: archive/2026-08-31/
```

## 최종 원고

- Cover Story: `820.9조 원 예산안, 실제 나라 살림이 되기까지 남은 단계`
- Economy: `물가 3.1%, 지난해 통신비 할인을 걷어내면 무엇이 남는가`
- Politics: `공공기관 109곳 감축안, 조직도보다 먼저 옮겨야 할 자산·채무·인력`
- Society: `반복 신고 뒤의 공백을 줄인다, 아동학대 대응은 무엇이 달라지나`
- Tech: `접속키 하나에서 3,954만 계정까지, 티빙 사고에서 끊긴 보안 통제`
- LIFE SCENE: `집에 갈 수 있는지부터 다시 정해야 했다`
- PROLOGUE: `숫자가 지나간 자리에 남은 일`
- EDITOR'S AFTERWORD: `숫자보다 늦게 도착하는 것`
- DEEP DIVE: `OMIT` — 독립 질문·새 핵심 주장 3개 이상·독립 1차 자료 2개 이상을 동시에 충족하며 이번 호의 판단가치를 명확히 높이는 후보가 없어 강제하지 않음.

## PUBLISH DESK 완료

`work/2026-08-31/LAYOUT_PLAN.md`를 작성해 `COMPLETE`로 닫은 뒤 같은 턴에서 최종 HTML/CSS와 발행 반영까지 수행했다.

최종 DOM:

```text
Cover
→ Contents
→ LIFE SCENE
→ PROLOGUE
→ Cover Story
→ Economy
→ Politics
→ Society
→ Tech
→ EDITOR'S AFTERWORD
→ Sources
```

- DEEP DIVE DOM 없음.
- DATA / WATCH 별도 DOM 없음.
- `EDITOR'S PICK` 없음.
- 이미지, placeholder, 이전 회차 이미지 재사용 없음.
- 외부 JS 또는 `fetch()` 기반 기사 조립 없음.
- EDITOR'S AFTERWORD는 Sources 직전에 배치.
- 공통 Editorial Axis: `--content: 1040px`.

## 실제 화면 검수

system Chromium + Playwright로 최종 HTML/CSS를 실제 렌더링했다.

- 1440×1100: PASS — `clientWidth=scrollWidth=1440`, 주요 편집축 `x=200 / width=1040 / right=1240`.
- 1366×1000: PASS — `clientWidth=scrollWidth=1366`, 주요 편집축 `x=163 / width=1040 / right=1203`.
- 1024×1000: PASS — `clientWidth=scrollWidth=1024`, 가용 편집축 약 `942.09px`, `x≈40.95 / right≈983.05`.
- 390×844: 최초 검수에서 상단 내비게이션 가로 이탈 발견. 모바일 내비게이션을 3열 그리드로 수정한 뒤 재검수 PASS — `clientWidth=scrollWidth=390`, 편집축 `348px`, `x=21 / right=369`.

최종 재검수 결과:

- 네 화면 모두 가로 오버플로 없음.
- viewport 밖으로 이탈한 DOM 요소 0개.
- 제목·본문·정보 모듈·Sources 잘림/겹침 없음.
- 내부 앵커 누락 없음.
- `<img>` 요소 0개.
- DEEP DIVE / `EDITOR'S PICK` DOM 없음.
- 전체 페이지 시각 검수 PASS.

## 보조 구조 검사

`tools/validate_repository.py`의 현행 검사 계약은 읽고 최종 HTML 구조에 반영했다. 다만 connector 기반 실행환경에서는 저장소 전체 checkout을 확보할 수 없어 repo-wide `python tools/validate_repository.py` 실행은 하지 못했다. 이 보조 검사 미실행을 실제 Chromium 화면 검수의 대체로 취급하지 않았다.

## 발행 반영

- `archive/2026-08-31/index.html`
- `issues.json`
- `latest.json`
- `archive/index.html`
- `editorial/ISSUE_HISTORY.md`
- `work/2026-08-31/WORK_STATE.md`

최종 상태: `PUBLISHED`.
