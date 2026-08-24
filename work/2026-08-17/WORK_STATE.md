# ISSUE 05 WORK STATE

```text
ISSUE: 05
ISSUE_START: 2026-08-17
ISSUE_END: 2026-08-23
STAGE: PUBLISH_DESK_SCREEN_REVIEW_BLOCKED
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
HTML: READY_IN_WORK_PREVIEW
SCREEN_REVIEW: BLOCKED_BY_RUNTIME_CHROMIUM
PUBLISH: PENDING
NEXT: RESUME PUBLISH DESK — 실제 1440 / 1366 / 1024 / 390 화면 검수부터 재개
```

## 완료된 제작 단계

- Cover Story: `특별재난지역 ‘우선 선포’ 뒤, 복구의 돈과 절차는 어떻게 움직이는가` — COMPLETE
- Economy: `매도 사이드카의 5분, 주식시장에서 실제로 멈추는 것은 무엇인가` — COMPLETE
- Politics: `유죄판결이 없어도 범죄수익을 환수하는 절차가 생긴다` — COMPLETE
- Society: `학교 200m 안 집회, 이제 학교장의 판단이 경찰 절차와 연결된다` — COMPLETE
- Tech: `GPU만 늘리는 데이터센터에서 CPU·GPU·NPU를 함께 쓰는 인프라로` — COMPLETE
- CROSS-ARTICLE REVIEW — COMPLETE
- DEEP DIVE — `OMIT`, 근거 기록 완료
- LIFE SCENE: `창문을 닫은 뒤에도 수업은 계속됐다` — COMPLETE
- PROLOGUE: `멈춘 5분과, 그 뒤에 남은 일들` — COMPLETE
- EDITOR'S AFTERWORD: `끝났다는 말 뒤에 남는 시간` — COMPLETE

## PUBLISH DESK 진행

### LAYOUT PLAN

- 경로: `work/2026-08-17/LAYOUT_PLAN.md`
- 상태: COMPLETE
- 최종 DOM: `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → Tech → EDITOR'S AFTERWORD → Sources`
- DEEP DIVE는 OMIT이므로 DOM·Contents·내비게이션에서 제외
- DATA / WATCH 별도 섹션 없음
- 공통 Editorial Axis: `--content: 1040px`
- 이미지·placeholder·과월호 이미지 재사용 없음

### HTML PREVIEW

- 경로: `work/2026-08-17/PUBLISH_PREVIEW.html`
- 상태: READY
- CSS와 최소 JavaScript 내장
- 런타임 `fetch()` 없음
- 외부 script 없음
- `<img>` 없음
- `EDITOR'S PICK` 없음
- DEEP DIVE DOM 없음
- AFTERWORD 바로 뒤 Sources 배치

### 정적 구조 검사

다음 항목은 PASS했다.

- 필수 DOM id 존재
- 내부 앵커가 실제 id와 일치
- DEEP DIVE OMIT 반영
- `EDITOR'S PICK` 미존재
- 이미지 DOM 및 존재하지 않는 이미지 경로 미존재
- 외부 JavaScript 미사용
- 런타임 `fetch()` 기사 조립 미사용
- `--content: 1040px` Single Editorial Axis 적용

## SCREEN REVIEW BLOCKER

PUBLISH DESK는 실제 Chromium으로 1440×1100, 1366×1000, 1024×1000, 390×844 렌더링을 시도했다.

현재 실행환경의 `/usr/bin/chromium`이 headless 모드에서 DBus/zygote 관련 오류와 함께 종료되지 않았고 screenshot 파일을 생성하지 못했다. 기본 headless 실행과 `--headless=new`, `--no-sandbox`, `--disable-gpu`, `--disable-dev-shm-usage`, `--no-zygote`, `--single-process` 조합을 재시도했으나 동일하게 timeout됐다.

`editorial/ISSUE_QUALITY_GATE.md`는 실제 화면 검수를 필수 발행 게이트로 규정하므로, 구조 검사만으로 `PUBLISHED`를 선언하지 않는다.

## 재개 지점

다음 PUBLISH DESK 실행은 원고·LAYOUT_PLAN·HTML을 다시 만들 필요가 없다.

```text
work/2026-08-17/PUBLISH_PREVIEW.html 확인
→ 1440 / 1366 / 1024 / 390 실제 화면 렌더링
→ overflow / Editorial Axis / nav / Contents / DOM / 링크 검수
→ 문제 있으면 preview 수정·재검수
→ 통과 시 archive/2026-08-17/index.html 반영
→ issues.json / latest.json / archive/index.html / ISSUE_HISTORY.md 갱신
→ WORK_STATE PUBLISHED
```

이미지 생성·이미지 prompt·IMAGE_PLAN·image job은 현행 경로에 포함하지 않는다.
