# ISSUE 03 WORK STATE

```text
ISSUE: 03
ISSUE_START: 2026-08-03
ISSUE_END: 2026-08-09
STAGE: PENDING
COVER_STORY: PENDING
ECONOMY: PENDING
POLITICS: PENDING
SOCIETY: PENDING
TECH: PENDING
CROSS_ARTICLE_REVIEW: PENDING
DEEP_DIVE: PENDING
LIFE_SCENE: PENDING
PROLOGUE: PENDING
EDITOR_AFTERWORD: PENDING
LAYOUT: PENDING
IMAGES: NOT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: 2026-08-09 22:00 FRONT DESK — Cover Story → Economy
```

Issue 03은 현행 이미지 없는 5-페이즈 제작 경로를 사용한다.

예약 실행 순서:

```text
2026-08-09 22:00 FRONT DESK
Cover Story → Economy

2026-08-10 00:00 SECTION DESK
Politics → Society → Tech

2026-08-10 02:00 REVIEW DESK
CROSS-ARTICLE REVIEW → 필요한 기사 교정 → DEEP DIVE

2026-08-10 04:00 FEATURE DESK
LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD

2026-08-10 09:00 PUBLISH DESK
LAYOUT_PLAN → HTML 제작 → 화면 검수 → 발행
```

05:00 이전의 네 제작 턴은 2시간 간격이다. 07:00과 08:00에는 별도 제작 예약을 두지 않는다.

각 페이즈의 내부 작업은 반드시 직렬로 수행한다. 앞 단위가 COMPLETE되지 않으면 뒤 단위를 건너뛰어 작성하지 않는다.

09:00 PUBLISH DESK가 별도 레이아웃 예약 없이 `LAYOUT_PLAN.md`를 작성·COMPLETE한 뒤 같은 턴에서 HTML 제작, 1440 / 1366 / 1024 / 390 화면 검수, 공개 반영까지 수행한다.

이미지 생성 프롬프트, `IMAGE_PLAN.md`, `jobs/image_job.json`, 이미지 handoff는 현행 Issue 03 실행 경로에 포함하지 않는다.

각 예약 작업은 실행 시점의 GitHub `main`과 현행 `README.md`, `editorial/WEEKLY_RUNBOOK.md`, 관련 편집 계약, 이 `WORK_STATE.md`를 기준으로 진행한다.
