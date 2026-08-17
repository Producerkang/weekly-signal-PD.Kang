# ISSUE 04 WORK STATE

```text
ISSUE: 04
ISSUE_START: 2026-08-10
ISSUE_END: 2026-08-16
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
HTML: COMPLETE
SCREEN_REVIEW: COMPLETE
PUBLISH: PUBLISHED
NEXT: NONE — ISSUE 04 PUBLISHED
```

## 발행 결과

- 발행 경로: `archive/2026-08-10/`
- 제목: `문이 닫힌 뒤에 시작되는 것들`
- 최종 DOM: `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → Tech → EDITOR'S AFTERWORD → Sources`
- `DEEP_DIVE: OMIT`은 REVIEW DESK에서 근거가 기록된 정상 완료 상태이며 최종 DOM에서 제외했다.
- DATA / WATCH는 별도 섹션을 만들지 않고 기사 내부 정보 모듈로 흡수했다.
- 이미지 생성, 이미지 placeholder, 이미지 경로, 이전 회차 대표 이미지 재사용을 사용하지 않았다.
- `EDITOR'S PICK`을 만들지 않았다.

## LAYOUT

`work/2026-08-10/LAYOUT_PLAN.md` 작성 및 COMPLETE.

공통 Editorial Axis는 `1040px` 하나로 고정했다.

기사별 지면 리듬:

- Cover — 무이미지 대형 타이포그래피
- LIFE SCENE — 연속 서사 + SCENARIO NOTE
- PROLOGUE — 텍스트 중심 전환
- Cover Story — 명단공표 절차 strip
- Economy — 최저임금 metric board
- Politics — 접수 후 제도 변경 timeline
- Society — 횡단면/패널 comparison table
- Tech — 성능평가 4차원 evidence grid
- EDITOR'S AFTERWORD — 단일 축 산문 마감

## SCREEN REVIEW

실제 Chromium 렌더링으로 1440×1100, 1366×1000, 1024×1000, 390×844를 검수했다.

- 문서 가로 오버플로: 없음
- 1440/1366 Editorial Axis: 정확히 1040px
- 1024/390: 가용 폭에 맞춰 정상 축소
- 주요 섹션 좌우 기준선: 전부 동일
- 내부 앵커 누락: 없음
- Contents / 내비게이션 / DOM 순서: 일치
- DEEP DIVE DOM: 없음
- EDITOR'S PICK DOM: 없음
- `<img>` 요소: 0
- 깨진 이미지: 0
- 390px 상단 내비게이션: 3열 그리드로 정상 표시
- 표·카드·제목 오버플로: 없음

`tools/validate_repository.py`는 이 실행 환경에서 repository checkout 없이 GitHub connector로 직접 반영했기 때문에 전체 저장소 로컬 실행을 생략했다. 대신 최종 HTML을 실제 Chromium DevTools Protocol로 렌더링하고 DOM·폭·앵커·자산 검사를 수행했다. 구조 검사기는 보조 수단이고 실제 화면·편집 검수가 최종 승인 기준이라는 현행 계약에 따라 발행했다.

## 메타데이터

- `issues.json`에 Issue 04 추가
- `latest.json`을 Issue 04로 전환
- `archive/index.html` 최신 회차 메타 갱신
- `editorial/ISSUE_HISTORY.md`에 발행 결과 기록

Issue 04는 PUBLISHED 상태로 종료한다.
