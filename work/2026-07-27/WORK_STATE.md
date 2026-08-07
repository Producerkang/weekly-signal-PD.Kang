# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**다음 작업은 `08 PROLOGUE` 백지 제작이다.**

01~07은 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

08 PROLOGUE는 이전 생성본을 수정하거나 참고하지 않는다. 현행 `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`와 `editorial/WEEKLY_RUNBOOK.md`의 새 PROLOGUE 로직만 기준으로 처음부터 다시 만든다.

이번 재테스트에서는 ARTICLE을 바로 쓰지 않는다. 먼저 `08_prologue/PREVIEW_MAP.md`를 작성하고 검수한 뒤에만 `ARTICLE.md`를 만든다.

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

예정 작업 경로:

```text
08_prologue/
├─ PREVIEW_MAP.md
└─ ARTICLE.md
```

이전 08 PROLOGUE 생성본은 실패 테스트로 간주하고 작업 트리에서 삭제했다. 제목·문장·문단 구조를 복원하거나 참고 문안·골든 레퍼런스로 사용하지 않는다.

### 현행 역할

PROLOGUE는 **한 호의 지면을 넓게 열었다가 몇 군데로 시선을 좁히고 본문으로 넘기는 매거진 도입부**다.

핵심 시선 이동:

`PANORAMA → ORIENTATION → FOCUS → ARTICLE PREVIEW → HANDOFF`

초반 PANORAMA에서는 여러 분야와 주요 토픽이 함께 등장해도 된다. 이 넓은 시야 자체를 커버리지 압박으로 오판하지 않는다.

그 뒤에는 반드시 시야가 좁아져야 한다. PANORAMA에서 이미 전체 지형을 보여줬다면 FOCUS와 ARTICLE PREVIEW에서 다시 모든 분야를 한 번씩 순회하지 않는다.

### 필수 제작 로직

`ISSUE READBACK → PREVIEW MAP → PANORAMA → ORIENTATION → FOCUS → ARTICLE PREVIEW → RHYTHM PASS → DEPTH CEILING PASS → REPEATED COVERAGE PASS → HANDOFF → COMPLETE`

### PREVIEW MAP 필수 항목

`PREVIEW_MAP.md`에는 최소한 다음을 적는다.

1. `PANORAMA`: 초반에 넓게 보여줄 사건·장면
2. `ORIENTATION`: 뒤에서 어떤 종류의 내용을 만나게 될지 잡아주는 방향
3. `FOCUS`: 조금 가까이 보여줄 일부 숫자·장면·문서·행동
4. `ARTICLE PREVIEW`: 한 단계 더 구체적으로 소개할 기사 또는 자연스러운 기사 조합
5. `DEPTH CEILING`: 각 소재에서 프롤로그가 멈춰야 할 선
6. `HANDOFF`: 본문으로 넘기는 방식

PREVIEW MAP만 읽어도 `넓게 → 좁게 → 본문`의 이동이 보여야 한다. 그렇지 않으면 ARTICLE을 쓰지 않는다.

### 반드시 피할 실패 구조

- PANORAMA 없이 `Cover 한 문단 → Economy 한 문단 → Politics 한 문단`처럼 선택 기사 몇 편을 차례로 깊게 설명
- 한 문단에 기사 하나씩 배치한 미니 초록 구조
- PANORAMA에서 여러 토픽을 보여준 뒤 FOCUS와 ARTICLE PREVIEW에서도 다시 전 분야를 한 번씩 반복
- 기사마다 같은 분량·대표 숫자·대표 장면을 배정
- 기사 핵심 메커니즘·근거 수치·비교 사례·후속 절차를 본문 수준으로 미리 설명
- 모든 기사를 하나의 공통 교훈·공통 질문·공통 구조로 묶기

### 완료 판정

다음을 모두 통과해야 COMPLETE다.

- `PREVIEW_MAP.md`가 ARTICLE보다 먼저 존재
- 초반에 이번 호의 폭이 보임
- 중간부터 소재 수가 줄고 해상도가 높아짐
- 선택 기사 미니 요약집처럼 읽히지 않음
- PANORAMA의 넓은 커버리지를 뒤에서 반복하지 않음
- 기사 내용은 소개하지만 설명을 끝내지 않음
- 마지막이 본 기사 쪽으로 자연스럽게 넘어감

## 09 EDITOR'S AFTERWORD — PENDING / BLANK SLATE

예정 작업 경로: `09_editor_afterword/ARTICLE.md`

EDITOR'S PICK 제도는 폐기했다. 새 AFTERWORD는 기존 PICK이나 삭제된 과거 원고를 기준으로 수정하지 않는다.

현행 제작 로직:

`ISSUE READBACK → MEMORY TRACE → REFLECTION DRAFT → RECAP CUT → METHOD REPORT CUT → AFTERTASTE PASS → COMPLETE`

핵심:

- 실제 한 호 제작을 마친 뒤 남은 생각·망설임·인상·미완의 질문을 자연스럽게 회고
- 대표 기사·대표 숫자·대표 문장 강제 선정 금지
- 모든 기사를 하나의 공통 교훈으로 묶지 않음
- 기사별 요약 금지
- VERIFY·FLOW·검수 절차를 설명하는 방법론 보고서 금지
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

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 08 PROLOGUE의 `PREVIEW_MAP.md` 작성부터 시작**한다.

- 01~07 수정 금지
- 기존 08 PROLOGUE 복원·참조·문장 재사용 금지
- PREVIEW MAP 없이 ARTICLE 작성 금지
- PANORAMA에서는 여러 주요 토픽을 함께 보여줄 수 있음
- PANORAMA 뒤에는 반드시 시야를 좁힐 것
- 선택한 기사 몇 편을 한 문단씩 차례로 설명하는 구조 금지
- 전 분야 커버리지를 글 전체에서 반복하는 구조 금지
- 공통 주제·공통 질문·공통 교훈 강제 금지
- 프롤로그에서 기사 본문 설명을 끝내지 말 것
- 08 COMPLETE 전 EDITOR'S AFTERWORD 작성 금지
- 08·09 COMPLETE 전 지면 설계 진행 금지
- 실제 화면 검수 전 발행 상태로 변경 금지
