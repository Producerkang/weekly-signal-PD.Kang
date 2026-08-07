# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**다음 작업은 `08 PROLOGUE` 재검수·수정이다.**

01~07은 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

08 PROLOGUE는 현재 문체와 관심 환기 수준은 유지한다. 문제는 문장 자체가 아니라 `모든 기사와 토픽을 빠짐없이 한 번씩 언급해야 한다`는 커버리지 사고방식이 원고 배열에 스며드는 것이다. 현행 `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`의 PROLOGUE 로직으로 재검수한다.

기존 EDITOR'S PICK 제도는 폐기했다. 과거 `09_editors_pick/ARTICLE.md`는 기준 원고로 사용하지 않으며 작업 트리에서 삭제한다.

08 PROLOGUE가 다시 COMPLETE가 된 뒤 새 `09 EDITOR'S AFTERWORD`를 처음부터 작성한다. AFTERWORD는 PICK을 하지 않는 실제 에디터 후기이며, 기존 Editor's Pick 문장·제목·구조를 복원하거나 변형해 사용하지 않는다.

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
- PROLOGUE: IN_REVIEW
- EDITOR'S AFTERWORD: PENDING
- MANUSCRIPT_STAGE: IN_REVIEW
- LAYOUT: PENDING
- IMAGES: PENDING
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

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

## 08 PROLOGUE — IN_REVIEW

작업 경로: `08_prologue/`
현재 제목: `발표 다음의 시간`

현재 원고에서 유지할 것:

- 독자가 뒤의 기사를 모르는 시점
- 차분하고 짧은 관심 환기 문체
- 기사 결론을 먼저 닫지 않는 거리감
- `폭염 기사에서는…`, `경제와 정치 기사에서는…`처럼 실제 뒤 기사에서 무엇을 만나게 되는지 조금 더 구체적으로 소개하는 방식
- 구체적인 숫자·장면·절차를 가볍게 보여주는 teaser 수준

현재 원고에서 제거할 사고방식:

- 모든 기사·모든 분야를 최소 한 번씩 언급해야 한다는 생각
- 분야별로 비슷한 분량을 배정하려는 생각
- 한 문단 안에서 빠진 토픽을 채우기 위해 여러 분야를 빠르게 소환하는 배열
- 기사마다 대표 숫자·장면 하나씩 뽑아 나열하는 방식
- 여러 기사를 하나의 공통 주제·공통 질문·공통 교훈으로 묶으려는 시도
- 분량을 늘리기 위해 `왜 중요한가`라는 별도 논증을 만드는 방식

### 현행 PROLOGUE 제작 로직

`ISSUE READBACK → SELECTIVE PREVIEW → TEASER DETAIL → NATURAL ARTICLE INTRO → COVERAGE PRESSURE PASS → SPOILER PASS → HANDOFF`

핵심 원칙:

1. Contents가 전체 목록을 담당하고 PROLOGUE는 선택과 강조를 담당한다.
2. 프롤로그 전체에서 어떤 기사가 직접 언급되지 않아도 실패가 아니다.
3. 한 기사만 길게 소개하고 다른 기사는 짧게 지나가도 된다.
4. TEASER DETAIL은 기사당 하나씩 배정하지 않는다.
5. 한 문단에는 한두 소재만 충분히 보여주고 멈출 수 있다.
6. 질문형 문장이나 `왜 중요한가`를 의무적으로 만들지 않는다.
7. 분량 확대는 구체적인 장면·숫자·기사 소개의 해상도를 높일 때만 허용한다.
8. 커버리지 때문에 존재하는 문장은 삭제한다. 삭제 후 특정 토픽이 사라져도 괜찮다.

### COVERAGE PRESSURE PASS

- 이 문장은 흥미를 더하는가, 아니면 특정 분야를 한 번 언급하려고 존재하는가?
- 이 토픽을 빼면 프롤로그가 실제로 약해지는가?
- 한 문단에서 서로 무관한 세 개 이상의 토픽을 빠르게 나열하고 있지 않은가?
- 기사마다 비슷한 문장 수를 주려는 흔적이 있는가?
- `모든 기사 소개 완료`라는 내부 체크리스트가 문장 배열을 지배하고 있지 않은가?

하나라도 해당하면 덜어낸다.

### PROLOGUE 다음 실행

1. 현재 `08_prologue/ARTICLE.md`를 새 표준으로 다시 읽는다.
2. 기존 문장의 좋은 결은 가능한 한 유지한다.
3. 여러 토픽을 한 문단에서 빠르게 커버하는 문장을 우선 점검한다.
4. 필요하면 독자가 실제 뒤 기사에서 만나게 될 내용 소개를 조금 확장하되 모든 기사를 채우지 않는다.
5. COVERAGE PRESSURE PASS와 SPOILER PASS를 통과하면 다시 COMPLETE로 닫는다.
6. 그 뒤에만 09 EDITOR'S AFTERWORD로 이동한다.

## 09 EDITOR'S AFTERWORD — PENDING

예정 작업 경로: `09_editor_afterword/`

EDITOR'S PICK은 폐기했다. 새 AFTERWORD는 기존 PICK을 고쳐 쓰는 작업이 아니라 새 역할로 처음부터 작성한다.

### 역할

한 호의 기사와 DEEP DIVE를 모두 읽은 뒤, Sources 앞에서 만나는 실제 **에디터 후기**다.

PROLOGUE와 달리 제작 후 시점을 숨기지 않는다. `이번 호를 만들면서`, `원고를 닫고 나니`, `마지막까지 고민한 것은` 같은 실제 회고 표현을 사용할 수 있다.

### 금지할 사고방식

- 이번 호를 대표하는 기사 하나를 골라야 한다.
- 가장 오래 남은 숫자 하나를 선정해야 한다.
- 모든 기사를 관통하는 교훈을 찾아야 한다.
- 중심축을 반드시 하나의 명제로 압축해야 한다.
- 마지막에 독자에게 질문 하나를 던져야 한다.

### 현행 AFTERWORD 제작 로직

`ISSUE READBACK → MEMORY TRACE → REFLECTION DRAFT → RECAP CUT → METHOD REPORT CUT → AFTERTASTE PASS → COMPLETE`

핵심 원칙:

1. 실제 제작을 마친 뒤 남은 생각·망설임·인상·미완의 질문을 적는다.
2. 하나에 오래 머물 수도 있고 두세 가지 생각이 자연스럽게 이어질 수도 있다.
3. 기사별 요약으로 돌아가지 않는다.
4. 선택한 수치·제도·기사의 정의와 논리를 다시 장황하게 설명하지 않는다.
5. VERIFY·FLOW·검수 절차를 독자에게 가르치는 방법론 보고서로 만들지 않는다.
6. 존재하지 않는 회의·취재 현장·감정·대화를 만들지 않는다.
7. 마지막에 교훈·질문·다음 호 예고·감사 인사를 의무적으로 붙이지 않는다.
8. 자연스러운 여운으로 닫는다.

## 최종 독서 순서

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Politics DEEP_DIVE → Society → Tech → 선택적 DATA/WATCH → EDITOR'S AFTERWORD → Sources`

이번 호 Deep Dive는 Politics 바로 뒤에 둔다.

## 현행 제작 기준

새 대화에서는 반드시 현재 `main`의 다음 문서를 기준으로 한다.

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/EDITORIAL_STANDARD.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
6. `editorial/LIFE_SCENE_STANDARD.md`
7. `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
8. `editorial/VOICE_AND_TONE.md`
9. `editorial/SOURCE_POLICY.md`
10. `editorial/IMAGE_DIRECTION.md`
11. `editorial/LAYOUT_SYSTEM.md`
12. `editorial/PUBLISHING_PIPELINE.md`
13. `templates/TEMPLATE_CONTRACT.md`
14. `templates/NAVIGATION_CONTRACT.md`

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 08 PROLOGUE 재검수부터 진행**한다.

- 01~07 수정 금지
- PROLOGUE는 현행 문체를 전면 재작성하지 말고 선택적 프리뷰 로직으로 교정
- 기사별 최소 1회 언급 사고방식 금지
- 분야별 균등 분량 사고방식 금지
- 여러 토픽을 한 문단에 압축해 커버리지 채우기 금지
- 공통 주제·공통 질문·공통 교훈 강제 금지
- PROLOGUE COMPLETE 전 EDITOR'S AFTERWORD 작성 금지
- 기존 `09_editors_pick/ARTICLE.md` 복원·재사용 금지
- AFTERWORD에서 PICK 구조·기사 요약·방법론 보고서 금지
- 08·09 COMPLETE 전 지면 설계 진행 금지
- 실제 화면 검수 전 발행 상태로 변경 금지
