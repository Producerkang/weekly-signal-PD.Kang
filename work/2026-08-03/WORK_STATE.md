# ISSUE 03 WORK STATE

```text
ISSUE: 03
ISSUE_START: 2026-08-03
ISSUE_END: 2026-08-09
STAGE: PUBLISHED
MANUSCRIPT_STAGE: COMPLETE
COVER_STORY: COMPLETE
ECONOMY: COMPLETE
POLITICS: COMPLETE
SOCIETY: COMPLETE
TECH: COMPLETE
CROSS_ARTICLE_REVIEW: COMPLETE
DEEP_DIVE: COMPLETE
DEEP_DIVE_TARGET: SOCIETY
LIFE_SCENE: COMPLETE
PROLOGUE: COMPLETE
EDITOR_AFTERWORD: COMPLETE
LAYOUT: COMPLETE
IMAGES: NOT_REQUIRED
HTML: COMPLETE
SCREEN_REVIEW: COMPLETE
PUBLISH: COMPLETE
NEXT: ISSUE CLOSED
```

## FRONT DESK 완료

### Cover Story
- 상태: COMPLETE
- 주제: 2026년 8월 1일 시행된 산업안전보건법상 안전보건 현황 공시 의무
- 산출물: `01_cover/VERIFY.md`, `01_cover/FLOW.md`, `01_cover/ARTICLE.md`

### Economy
- 상태: COMPLETE
- 주제: 2026년 3회차 외국인근로자(E-9) 신규 고용허가 배정 결과와 8월 발급 개시
- 산출물: `02_economy/VERIFY.md`, `02_economy/FLOW.md`, `02_economy/ARTICLE.md`

## SECTION DESK 완료

### Politics
- 상태: COMPLETE
- 주제: 국민생각함 청소년 정책 패널과 2026년 10월 29일 시행되는 지방청소년정책위원회 청소년 대표 참여 의무화
- 산출물: `03_politics/VERIFY.md`, `03_politics/FLOW.md`, `03_politics/ARTICLE.md`

### Society
- 상태: COMPLETE
- 주제: 2026년 8월 취약채무자·불법사금융 피해자 대상 금융위기가구 기획발굴 조사
- 산출물: `04_society/VERIFY.md`, `04_society/FLOW.md`, `04_society/ARTICLE.md`

### Tech
- 상태: COMPLETE
- 주제: 2026년 고성능컴퓨팅 지원사업 GPU/NPU 추가모집 사용자 선정과 선정 이후 자원 할당·개발환경·기술지원 구조
- 산출물: `05_tech/VERIFY.md`, `05_tech/FLOW.md`, `05_tech/ARTICLE.md`

## REVIEW DESK 완료

### CROSS-ARTICLE REVIEW
- 상태: COMPLETE
- 산출물: `CROSS_ARTICLE_REVIEW.md`
- 다섯 일반 기사는 COMPLETE 유지.

### DEEP DIVE
- 상태: COMPLETE
- 연결 기사: Society
- 제목: `위기정보를 더 모으면 사각지대는 줄어드는가`
- 산출물: `06_deep_dive/VERIFY.md`, `06_deep_dive/FLOW.md`, `06_deep_dive/ARTICLE.md`

## FEATURE DESK 완료

### LIFE SCENE
- 상태: COMPLETE
- 연결 기사: Tech
- 제목: `아홉 시 반에 학습을 걸기로 했는데, 실행 버튼을 누를 곳이 아직 없었다`
- 산출물: `07_life_scene/SCENE_MAP.md`, `07_life_scene/ARTICLE.md`
- CAUSALITY PASS: PASS
- EXPLANATION LEAK PASS: PASS
- SCENARIO NOTE: COMPLETE
- LIFE SCENE REVIEW: PASS

### PROLOGUE
- 상태: COMPLETE
- 제목: `숫자 다음에 남아 있는 것들`
- 산출물: `08_prologue/PREVIEW_MAP.md`, `08_prologue/ARTICLE.md`
- PROSE RHYTHM PASS: PASS
- DEPTH CEILING PASS: PASS
- REPEATED COVERAGE PASS: PASS

### EDITOR'S AFTERWORD
- 상태: COMPLETE
- 제목: `아직 채워지지 않은 칸`
- 산출물: `09_afterword/MEMORY_TRACE.md`, `09_afterword/ARTICLE.md`
- RECAP CUT: PASS
- METHOD REPORT CUT: PASS
- AFTERTASTE PASS: PASS

## PUBLISH DESK 완료

### LAYOUT PLAN
- 상태: COMPLETE
- 산출물: `LAYOUT_PLAN.md`
- 최종 DOM: `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → DEEP DIVE → Tech → EDITOR'S AFTERWORD → Sources`
- DATA / WATCH: OMIT
- 이미지: NOT_REQUIRED
- 공통 Editorial Axis: `1040px`

### HTML
- 상태: COMPLETE
- 공개본: `archive/2026-08-03/index.html`
- 제목: `시작된 일들의 다음 장면`
- COMPLETE 원고만 사용.
- Society 연결 DEEP DIVE를 Society 바로 뒤에 배치.
- EDITOR'S AFTERWORD를 Sources 직전에 배치.
- 이미지 요소 및 이미지 자산 없음.

### SCREEN REVIEW
- 상태: COMPLETE
- 원 발행 시 Chromium 렌더링 검수: 1440px 이상 / 1366px / 1024px / 390px
- 모바일 topbar 2행 구조 재검수 PASS.
- 최종 네 화면 문서 가로 오버플로 없음.
- 내부 앵커 누락 없음.
- Contents / nav / DOM 순서 일치.

## 2026-08-10 LAYOUT MAINTENANCE

사용자 화면 검토에서 기사별 외곽 폭이 일관되지 않은 문제를 확인해 지면 규칙을 전면 통일했다.

### 변경
- 기존 다중 폭 체계 `700 / 720 / 820 / 880 / 980 / 1000 / 1080px` 폐기.
- 전체 셸 `1320px`은 배경/페이지 구조에만 사용.
- 모든 읽기 콘텐츠와 정보 모듈을 `1040px` 단일 Editorial Axis로 통일.
- LIFE 제목/서사/SCENARIO NOTE, 일반 기사 제목/Deck/본문/카드, DEEP DIVE, AFTERWORD, Sources까지 동일 좌우 기준선 적용.
- 기사별 차이는 폭이 아니라 내부 열, 카드 구조, 색면, 타이포그래피, 규칙선, 수직 리듬으로 만들도록 계약 변경.
- `editorial/LAYOUT_SYSTEM.md`, `editorial/ISSUE_QUALITY_GATE.md`, `templates/ISSUE_TEMPLATE.html`, `LAYOUT_PLAN.md`를 같은 기준으로 갱신.

### Issue 03 호환 처리
- 원 발행 HTML은 `archive/2026-08-03/base.html`에 보존.
- 현재 `archive/2026-08-03/index.html`은 원 발행 문서에 1040px 폭 계약만 적용하는 호환 로더다.
- 이 호환 로더는 Issue 03 유지보수 전용이다.
- 이후 새 회차는 템플릿에서 처음부터 단일 static HTML로 생성하며 runtime fetch/XHR 문서 조립을 사용하지 않는다.

### 향후 화면 게이트
- 1440px / 1366px에서 제목·Deck·본문·카드·주석·Sources의 좌우 기준선을 `getBoundingClientRect()`로 비교.
- 좌우 오차 각각 2px 초과 시 SCREEN REVIEW FAIL.
- full-bleed 배경은 허용하지만 내부 콘텐츠 축은 1040px에 맞춘다.

### PUBLISH
- 상태: COMPLETE
- Issue 03 원고·DOM 순서·출처는 변경하지 않음.
- 이미지 실험은 롤백되어 현행 발행본에 포함되지 않음.

Issue 03 제작·검수·발행 및 레이아웃 유지보수를 종료한다.
