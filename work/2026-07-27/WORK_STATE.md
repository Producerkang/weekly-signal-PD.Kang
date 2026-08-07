# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**다음 작업은 `08 PROLOGUE` 백지 제작이다.**

01~07은 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

08 PROLOGUE와 09 EDITOR'S AFTERWORD는 모두 기존 원고를 기준으로 수정하지 않는다. 현행 제작 기준만 읽고 처음부터 새로 만든다.

08 PROLOGUE가 COMPLETE가 된 뒤에만 09 EDITOR'S AFTERWORD를 시작한다. 08과 09가 모두 COMPLETE가 되기 전에는 지면 설계·이미지·HTML·발행 단계로 넘어가지 않는다.

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

## 08 PROLOGUE — PENDING / BLANK SLATE

예정 작업 경로: `08_prologue/ARTICLE.md`

기존 08 PROLOGUE 원고는 작업 트리에서 삭제했다. Git 이력에는 남아 있지만 새 제작의 기준 답안·참고 문안·골든 레퍼런스로 사용하지 않는다.

### 역할

본격적인 기사 묶음 앞에서 독자에게 앞으로 어떤 사건과 내용이 펼쳐질지 보여주는 **선택적 프리뷰**다. 독자는 뒤의 기사를 아직 읽지 않았다고 가정한다.

### 현행 제작 로직

`ISSUE READBACK → SELECTIVE PREVIEW → TEASER DETAIL → NATURAL ARTICLE INTRO → COVERAGE PRESSURE PASS → SPOILER PASS → HANDOFF`

### 필수 사고 원칙

1. Contents가 전체 목록을 담당하고 PROLOGUE는 선택과 강조를 담당한다.
2. 모든 기사·모든 분야를 최소 한 번씩 언급할 의무가 없다.
3. 기사별·분야별 균등 분량을 맞추지 않는다.
4. 기사마다 대표 숫자·장면 하나씩 배정하지 않는다.
5. 한 문단에서 빠진 토픽을 채우기 위해 여러 분야를 빠르게 소환하지 않는다.
6. 공통 주제·공통 질문·공통 교훈을 억지로 만들지 않는다.
7. 질문형 문장이나 `왜 중요한가` 단락을 의무적으로 만들지 않는다.
8. 분량이 필요하면 실제 뒤 기사에서 만나게 될 구체적인 장면·숫자·절차·기사 소개의 해상도를 높인다.
9. 기사 결론·최종 평가를 미리 소진하지 않는다.
10. 제작 후기 시점을 사용하지 않는다.

### COVERAGE PRESSURE PASS

초안 완성 뒤 반드시 확인한다.

- 이 문장은 독자의 관심을 더하는가, 아니면 특정 분야를 한 번 언급하려고 존재하는가?
- 이 토픽을 빼면 프롤로그가 실제로 약해지는가?
- 한 문단에서 서로 무관한 세 개 이상의 토픽을 빠르게 나열하고 있지 않은가?
- 기사마다 비슷한 문장 수를 주려는 흔적이 있는가?
- `모든 기사 소개 완료`라는 내부 체크리스트가 문장 배열을 지배하고 있지 않은가?

커버리지 때문에 존재하는 문장은 삭제한다. 삭제 후 특정 기사가 프롤로그에서 사라져도 괜찮다.

### 완료 조건

- 현행 `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`를 기준으로 처음부터 작성
- 기존 08 원고 문장·제목·문단 구조를 복원하거나 변형해 사용하지 않음
- COVERAGE PRESSURE PASS 통과
- SPOILER PASS 통과
- 독자가 뒤의 기사를 아직 모르는 상태에서 관심이 생김
- COMPLETE 후에만 09로 이동

## 09 EDITOR'S AFTERWORD — PENDING / BLANK SLATE

예정 작업 경로: `09_editor_afterword/ARTICLE.md`

EDITOR'S PICK 제도는 폐기했다. 기존 PICK 원고는 작업 트리에서 삭제됐으며 새 AFTERWORD의 참고 문안으로 사용하지 않는다.

### 역할

한 호의 기사와 DEEP DIVE를 모두 읽은 뒤 Sources 앞에서 만나는 실제 **에디터 후기**다.

PROLOGUE와 달리 제작 후 시점을 숨기지 않는다. 실제 한 호를 만들고 난 뒤 남은 생각·망설임·인상·미완의 질문을 자연스럽게 회고한다.

### 현행 제작 로직

`ISSUE READBACK → MEMORY TRACE → REFLECTION DRAFT → RECAP CUT → METHOD REPORT CUT → AFTERTASTE PASS → COMPLETE`

### 금지할 사고방식

- 이번 호를 대표하는 기사 하나를 골라야 한다.
- 가장 오래 남은 숫자 하나를 선정해야 한다.
- 모든 기사를 관통하는 교훈을 찾아야 한다.
- 중심축을 반드시 하나의 명제로 압축해야 한다.
- 기사별 요약으로 한 호를 다시 설명한다.
- VERIFY·FLOW·검수 절차를 독자에게 가르치는 방법론 보고서로 만든다.
- 마지막에 질문·교훈·다음 호 예고·감사 인사를 의무적으로 붙인다.

### 완료 조건

- 08 PROLOGUE COMPLETE 후 시작
- 기존 EDITOR'S PICK 문장·제목·구조 재사용 금지
- 실제 제작 후 시점의 자연스러운 후기
- 기사 요약보다 회고가 앞섬
- 방법론 보고서가 아님
- 자연스러운 여운으로 종료

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

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 08 PROLOGUE 백지 제작부터 진행**한다.

- 01~07 수정 금지
- 기존 08 PROLOGUE 원고 복원·참조·문장 재사용 금지
- PROLOGUE는 현행 표준의 선택적 프리뷰 로직으로 처음부터 작성
- 기사별 최소 1회 언급 사고방식 금지
- 분야별 균등 분량 사고방식 금지
- 여러 토픽을 한 문단에 압축해 커버리지 채우기 금지
- 공통 주제·공통 질문·공통 교훈 강제 금지
- PROLOGUE COMPLETE 전 EDITOR'S AFTERWORD 작성 금지
- 기존 EDITOR'S PICK 복원·재사용 금지
- AFTERWORD에서 PICK 구조·기사 요약·방법론 보고서 금지
- 08·09 COMPLETE 전 지면 설계 진행 금지
- 실제 화면 검수 전 발행 상태로 변경 금지
