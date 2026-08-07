# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**다음 작업은 지면 설계다.**

01~09 원고 단계는 모두 COMPLETE다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

이제 `editorial/LAYOUT_SYSTEM.md`, `editorial/IMAGE_DIRECTION.md`, `editorial/PUBLISHING_PIPELINE.md`, `templates/TEMPLATE_CONTRACT.md`, `templates/NAVIGATION_CONTRACT.md`를 기준으로 지면 설계부터 진행한다.

지면 설계 → 이미지 제작 → HTML 제작 → 실제 화면 검수 → 저장소 구조 검사 → 비교 검수 → 최종 발행 순서를 지킨다.

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: COMPLETE
- TECH: COMPLETE
- CROSS_ARTICLE_REVIEW: COMPLETE
- DEEP_DIVE: COMPLETE
- LIFE_SCENE: COMPLETE
- PROLOGUE: COMPLETE
- EDITORS_PICK: COMPLETE
- MANUSCRIPT_STAGE: COMPLETE
- LAYOUT: PENDING
- IMAGES: PENDING
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

## 확정된 01~09

### 01 Cover Story
- `01_cover/VERIFY.md`: COMPLETE
- `01_cover/ARTICLE.md`: COMPLETE
- 제목: `폭염 위기경보 ‘심각’, 중앙재난안전대책본부는 무엇을 움직이나`

### 02 Economy
- `02_economy/VERIFY.md`: COMPLETE
- `02_economy/ARTICLE.md`: COMPLETE
- 제목: `휘발유 1,784원 상한은 주유소까지 어떻게 전달되나`

### 03 Politics
- `03_politics/VERIFY.md`: COMPLETE
- `03_politics/ARTICLE.md`: COMPLETE
- 제목: `일곱 개 협력문서와 한·메르코수르 협상의 서로 다른 시간표`

### 04 Society
- `04_society/VERIFY.md`: COMPLETE
- `04_society/FLOW.md`: COMPLETE
- `04_society/ARTICLE.md`: COMPLETE
- 제목: `방학 오전 아홉 시를 누가 맡나, 틈새돌봄 1,461곳이 시작됐다`

### 05 Tech
- `05_tech/VERIFY.md`: COMPLETE
- `05_tech/FLOW.md`: COMPLETE
- `05_tech/ARTICLE.md`: COMPLETE
- 제목: `공공나노팹센터 두 곳 출범, 공동활용의 지원·평가 근거가 생겼다`

### CROSS_ARTICLE_REVIEW
- `CROSS_ARTICLE_REVIEW.md`: COMPLETE
- 일반 기사 5편 전체 PASS

### 06 Deep Dive
- `06_deep_dive/VERIFY.md`: COMPLETE
- `06_deep_dive/FLOW.md`: COMPLETE
- `06_deep_dive/ARTICLE.md`: COMPLETE
- 제목: `한·메르코수르의 두 번째 시간표, 공동협상 뒤 각국 비준이 시작된다`
- 연결 대상: Politics

### 07 Life Scene
- `07_life_scene/SCENE_MAP.md`: COMPLETE
- `07_life_scene/ARTICLE.md`: COMPLETE
- 제목: `아홉 시에 문이 열리는데, 엄마는 여덟 시 이십 분에 집을 나서야 했다`
- 연결 대상: Society
- 현재 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 08 Prologue
- `08_prologue/ARTICLE.md`: COMPLETE
- 제목: `발표 다음의 시간`
- 완성 기사 전체를 바탕으로 독자 시점의 프리뷰로 새로 작성했다.
- 기사별 결론 요약, 제작 후기, 전호 전제, 억지 공통 교훈을 배제했다.
- `PROLOGUE REVIEW`: PASS
- 현재 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 09 Editor's Pick
- `09_editors_pick/ARTICLE.md`: COMPLETE
- 제목: `2,500보다 오래 남은 1,461`
- Society 검증에서 확인된 `2,500개소 목표 → 1,461개소 첫 운영`의 상태 차이를 중심축으로 삼았다.
- 기사별 요약이 아니라 숫자의 상태를 구분하며 편집 판단이 달라진 지점을 회수했다.
- `EDITOR'S PICK REVIEW`: PASS
- 현재 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

## 다음 작업 — 지면 설계

원고 단계가 모두 닫혔으므로 다음 턴부터 지면 설계를 시작한다.

### 기본 원칙

1. `templates/ISSUE_TEMPLATE.html`을 시작 셸로 사용하되 이전 회차 HTML을 복제하지 않는다.
2. 먼저 전체 독서 순서와 기사별 지면 리듬을 설계한다.
3. 한 호에 최소 세 가지 이상의 기사 레이아웃 리듬을 만든다.
4. 기사별 장식·카드·표는 본문을 반복하지 않고 새 정보나 읽기 전환을 제공할 때만 사용한다.
5. DATA와 WATCH는 새 정보가 있을 때만 추가한다. 형식을 채우기 위해 만들지 않는다.
6. 이미지 제작보다 먼저 각 기사 이미지의 역할·구도·크롭 위치를 지면 설계와 함께 확정한다.
7. 지면 설계가 닫힌 뒤 이미지 제작으로 이동한다.

## 최종 독서 순서

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Politics DEEP_DIVE → Society → Tech → 선택적 DATA/WATCH → EDITOR'S PICK → Sources`

이번 호 Deep Dive는 Politics 바로 뒤에 둔다.

## 현행 제작 기준

새 대화에서는 반드시 현재 `main`의 다음 문서를 기준으로 한다.

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/EDITORIAL_STANDARD.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
6. `editorial/LIFE_SCENE_STANDARD.md`
7. `editorial/HEADLINE_AND_EDITORS_PICK_STANDARD.md`
8. `editorial/VOICE_AND_TONE.md`
9. `editorial/SOURCE_POLICY.md`
10. `editorial/IMAGE_DIRECTION.md`
11. `editorial/LAYOUT_SYSTEM.md`
12. `editorial/PUBLISHING_PIPELINE.md`
13. `templates/TEMPLATE_CONTRACT.md`
14. `templates/NAVIGATION_CONTRACT.md`

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 지면 설계부터 진행**한다.

- 01~09 원고 수정 금지
- 삭제된 이전 시험 원고 복원 금지
- 이전 회차 HTML 복제 금지
- 지면 설계 완료 전 이미지·HTML 본제작으로 넘어가지 않는다
- 지면 설계 뒤 이미지 제작, 그다음 HTML 제작 순서를 지킨다
- 실제 화면 검수 전 발행 상태로 변경하지 않는다
