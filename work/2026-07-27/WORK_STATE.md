# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**다음 작업은 `08 PROLOGUE`다.**

01~07은 현행 완성본으로 확정한다. 새 대화에서는 다시 작성하거나 재검토하지 않는다.

08 PROLOGUE와 09 EDITOR'S PICK은 새 구조를 검증하기 위해 **깨끗하게 다시 작성**한다. 이전에 작성했던 08/09 시험 원고는 작업 트리에서 삭제했으며 Git 이력에만 남아 있다. 새 원고를 만들 때 이전 시험 원고를 복원하거나 문장을 재사용하지 않는다.

08과 09가 모두 COMPLETE가 되기 전에는 지면 설계·이미지·HTML·발행 단계로 넘어가지 않는다.

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: COMPLETE
- TECH: COMPLETE
- CROSS_ARTICLE_REVIEW: COMPLETE
- DEEP_DIVE: COMPLETE
- LIFE_SCENE: COMPLETE
- PROLOGUE: PENDING
- EDITORS_PICK: PENDING

## 확정된 01~07

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

## 08 PROLOGUE — 다음 작업

작업 경로: `08_prologue/`

PROLOGUE는 LIFE SCENE 뒤, 본격적인 기사 묶음 앞에 배치되는 **이번 호의 프리뷰**다.

### 작성 시점

- 일반 기사 5편, CROSS_ARTICLE_REVIEW, DEEP_DIVE, LIFE_SCENE이 모두 완성된 뒤 작성한다.
- 따라서 작성자는 전체 내용을 알고 있다.
- 그러나 **독자는 뒤의 기사를 아직 하나도 읽지 않았다고 가정**하고 쓴다.

### 역할

- 앞으로 펼쳐질 주요 사건과 질문을 자연스럽게 연다.
- 독자가 이번 호에서 무엇을 만나게 될지 이해하고 계속 읽게 만든다.
- 기사 결론을 먼저 알려주는 요약문이 아니다.
- 제작 후기나 편집 회고가 아니다.

### 필수 기준

1. 완성된 기사 전체를 읽고 이번 호에서 독자에게 먼저 보여줄 사건·질문을 고른다.
2. 각 기사 제목과 Deck을 순서대로 축약한 Contents 산문을 만들지 않는다.
3. 핵심 사건은 구체적으로 소개할 수 있지만 기사에서 밝혀질 결론·평가·해답은 소진하지 않는다.
4. 독자가 기사 내용을 이미 안다고 가정하는 표현을 쓰지 않는다.
5. 실제 연속 기획이 아니면 `이번 호에도`, `지난 호에 이어`처럼 전호를 전제하는 표현을 쓰지 않는다.
6. 여러 기사를 억지로 하나의 거대한 교훈이나 공통 결론으로 묶지 않는다.
7. 마지막은 본격적인 기사 독서로 자연스럽게 넘긴다.
8. 작성 후 `PROLOGUE REVIEW`를 통과하고 `PROLOGUE: COMPLETE`로 변경한다.

상세 기준은 `editorial/HEADLINE_AND_EDITORS_PICK_STANDARD.md`를 따른다.

## 09 EDITOR'S PICK — PROLOGUE 다음 작업

작업 경로: `09_editors_pick/`

EDITOR'S PICK은 모든 기사와 연결 DEEP_DIVE를 읽은 뒤, Sources 직전에 배치되는 **편집 에필로그**다.

### 작성 시점과 독서 시점

- PROLOGUE 완료 뒤 작성한다.
- 작성 자체는 전체 제작의 마지막 원고 단계다.
- 독자는 일반 기사와 DEEP_DIVE를 모두 읽은 상태라고 전제할 수 있다.

### 역할

- 실제 리서치와 편집 과정에서 판단이 바뀐 지점, 오래 남은 사실, 망설임이나 질문을 짧은 편집 산문으로 회수한다.
- 기사별 요약문이나 호 전체의 공식 논설문이 아니다.
- 모든 기사를 언급할 필요가 없다.

### 필수 기준

1. 실제 제작 과정에서 나온 한 중심축을 고른다.
2. 기사 내용을 다시 설명하기보다 편집 과정에서 무엇을 다시 보게 됐는지를 쓴다.
3. 존재하지 않는 기자·회의·취재 장면·감정을 만들지 않는다.
4. 한 문단에 기사 하나씩 배치하지 않는다.
5. 모든 분야를 하나의 교훈으로 억지로 묶지 않는다.
6. Sources 직전의 에필로그로 읽었을 때 자연스러운지 확인한다.
7. 작성 후 `EDITOR'S PICK REVIEW`를 통과하고 `EDITORS_PICK: COMPLETE`로 변경한다.

상세 기준은 `editorial/HEADLINE_AND_EDITORS_PICK_STANDARD.md`를 따른다.

## 최종 독서 순서

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → 연결 DEEP_DIVE가 있으면 해당 기사 바로 뒤 → Economy → Politics → Politics DEEP_DIVE → Society → Tech → 선택적 DATA/WATCH → EDITOR'S PICK → Sources`

실제 DEEP_DIVE 위치는 연결 대상 기사 바로 뒤에 둔다. 이번 호 Deep Dive는 Politics 뒤에 둔다.

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
10. `templates/TEMPLATE_CONTRACT.md`
11. `templates/NAVIGATION_CONTRACT.md`

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 08 PROLOGUE부터 진행**한다.

- 01~07 수정 금지
- 삭제된 이전 08/09 시험 원고 복원 금지
- PROLOGUE를 먼저 완성하고 REVIEW 통과
- 그다음 EDITOR'S PICK 작성 및 REVIEW
- 두 원고가 COMPLETE가 된 뒤에만 지면 설계로 이동
