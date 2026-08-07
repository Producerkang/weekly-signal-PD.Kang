# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

이 저장소의 핵심은 단순한 기사 보관이 아니라 **다음 대화·다음 회차에서도 같은 품질 기준으로 제작을 재현할 수 있는 편집 시스템**을 유지하는 것입니다.

Git 커밋이나 이전 대화가 모델에 자동 학습되는 것은 아닙니다. 따라서 현재 기준은 반드시 저장소의 현행 문서와 각 회차 `WORK_STATE.md`에서 다시 읽어 이어갑니다.

---

## 1. 새 대화 / 새 회차 시작 순서

새 대화에서 기존 작업을 이어가거나 새 회차를 시작할 때 다음 순서로 확인합니다.

1. 해당 회차의 `work/YYYY-MM-DD/WORK_STATE.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/ARTICLE_WRITING_STANDARD.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
6. `editorial/LIFE_SCENE_STANDARD.md`
7. `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
8. `editorial/VOICE_AND_TONE.md`
9. `editorial/SOURCE_POLICY.md`
10. `editorial/IMAGE_PIPELINE.md`
11. `editorial/IMAGE_DIRECTION.md`
12. `editorial/LAYOUT_SYSTEM.md`
13. `editorial/PUBLISHING_PIPELINE.md`
14. `templates/TEMPLATE_CONTRACT.md`
15. `templates/NAVIGATION_CONTRACT.md`
16. 필요하면 `editorial/QUALITY_LEARNING_LOG.md`, `editorial/ISSUE_HISTORY.md`

`WORK_STATE.md`는 현재 재개 지점과 완료·미완료 상태를 소유합니다. 편집 기준 문서는 각 단계의 계약과 품질 기준을 소유합니다.

---

## 2. 최우선 운영 원칙

- GitHub `main`을 현재 상태의 기준으로 사용합니다.
- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.
- 제작 중인 회차는 `work/YYYY-MM-DD/`에서 관리합니다.
- 공개 가능한 완성본만 `archive/YYYY-MM-DD/`에 둡니다.
- 검증 메모와 독자용 원고를 같은 파일에 섞지 않습니다.
- 형식적 체크 통과보다 실제 읽기 품질을 우선합니다.
- 원고, 지면, 이미지, HTML, 반응형 화면은 서로 다른 검수 단계로 취급합니다.
- 실패가 보이면 표면 문구만 조정하지 않고 실패를 만든 제작 로직부터 수정합니다.

---

## 3. 저장소 구조

```text
/
├─ README.md
├─ index.html
├─ latest.json
├─ issues.json
├─ archive/
│  ├─ index.html
│  └─ YYYY-MM-DD/
│     ├─ index.html
│     └─ assets/
├─ work/
│  ├─ README.md
│  └─ YYYY-MM-DD/
│     ├─ WORK_STATE.md
│     ├─ LAYOUT_PLAN.md
│     ├─ IMAGE_PLAN.md
│     ├─ 01_cover/
│     ├─ 02_economy/
│     ├─ 03_politics/
│     ├─ 04_society/
│     ├─ 05_tech/
│     ├─ 06_deep_dive/
│     ├─ 07_life_scene/
│     ├─ 08_prologue/
│     └─ 09_editor_afterword/
├─ editorial/
│  ├─ IMAGE_PIPELINE.md
│  ├─ IMAGE_DIRECTION.md
│  └─ ...
├─ templates/
├─ tools/
│  └─ validate_repository.py
└─ requirements-tools.txt
```

`work/YYYY-MM-DD/`와 `archive/YYYY-MM-DD/`는 같은 회차 시작일을 사용해 1:1로 대응합니다.

---

## 4. 기본 회차 구성

별도 지시가 없으면 한 호는 다음 구성을 목표로 합니다.

- Cover Story 1편
- Economy 일반 기사 1편
- Politics 일반 기사 1편
- Society 일반 기사 1편
- Tech 일반 기사 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션입니다. 다시 만들지 않습니다.

기본 독서 순서:

```text
Cover
→ Contents
→ LIFE SCENE
→ PROLOGUE
→ Cover Story
→ Economy
→ Politics
→ 연결 DEEP DIVE
→ Society
→ Tech
→ 선택적 DATA / WATCH
→ EDITOR'S AFTERWORD
→ Sources
```

DEEP DIVE는 연결된 일반 기사 바로 뒤에 둡니다.

---

## 5. 일반 기사 제작 구조

일반 기사는 한 편씩 직렬로 완성합니다.

```text
VERIFY
→ FLOW
→ ARTICLE DRAFT
→ ANALYSIS
→ COHERENCE PASS
→ STYLE & ARGUMENT PASS
→ HEADLINE & DECK
→ ARTICLE REVIEW
→ COMPLETE
```

`VERIFY.md`는 내부 사실 검증 전용이고, `FLOW.md`는 독자가 이해할 순서를 설계합니다.

현재 일반 기사가 COMPLETE가 되기 전에는 다음 일반 기사 본문으로 넘어가지 않습니다.

---

## 6. 일반 기사 이후 제작 순서

```text
일반 기사 5편 COMPLETE
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE
→ EDITOR'S AFTERWORD
→ 지면 설계
→ 이미지 슬롯 확정
→ 이미지 제작 + HTML 구조 작업
→ 이미지 최종 반영
→ 다중 화면 검수
→ 발행
```

DATA와 WATCH는 새 정보가 있을 때만 선택적으로 만듭니다.

이미지와 HTML은 완전히 직렬로 묶지 않습니다. 이미지 한 장의 실패가 전체 HTML 제작을 막지 않도록 합니다.

---

## 7. DEEP DIVE

DEEP DIVE는 일반 기사를 길게 반복하는 섹션이 아닙니다.

작성 전 반드시 다음을 확인합니다.

- 일반 기사가 이미 답한 질문
- DEEP DIVE가 새로 답할 단 하나의 질문
- 새 핵심 주장
- 새 독립 출처
- 일반 기사와 다른 심화 방식

같은 정의 → 같은 원인 → 같은 경로 → 같은 결론을 반복하면 실패입니다.

---

## 8. LIFE SCENE

LIFE SCENE은 정책·기관·서비스·절차가 개인의 생활에서 어떻게 체감되는지를 가상의 한 인물과 하나의 사건을 통해 보여줍니다.

필수 제작 흐름:

```text
SUBJECT SELECT
→ FACT BOUNDARY
→ CHARACTER & ORDINARY PLAN
→ SCENE MAP
→ NARRATIVE DRAFT
→ CAUSALITY PASS
→ EXPLANATION LEAK PASS
→ SCENARIO NOTE
→ LIFE SCENE REVIEW
→ COMPLETE
```

이미지는 LIFE SCENE만 생성 전에 비율을 명시합니다.

- 가로형 `4:3`
- 세로형 `4:5`

한 회차에서 두 비율을 모두 만들 필요는 없고 실제 지면에 맞는 한 비율을 선택합니다.

---

## 9. PROLOGUE

PROLOGUE는 본격적인 기사 묶음 앞에서 한 호의 지면을 넓게 열었다가 몇 군데로 시선을 좁히고 본문으로 넘기는 매거진 도입부입니다.

본문 전에 `08_prologue/PREVIEW_MAP.md`를 만듭니다.

핵심 시선 이동:

`넓게 → 좁게 → 본문`

PROLOGUE는 기본적으로 별도 생성 이미지를 요구하지 않습니다.

---

## 10. EDITOR'S AFTERWORD

EDITOR'S AFTERWORD는 모든 기사와 DEEP DIVE를 읽은 뒤 Sources 직전에 만나는 실제 에디터 후기입니다.

기사별 요약, 대표 기사 선정, 공통 교훈, 편집 방법론 보고서로 만들지 않습니다.

EDITOR'S AFTERWORD는 기본적으로 별도 생성 이미지를 요구하지 않습니다.

---

## 11. 이미지 제작 시스템

이미지 실행 계약은 `editorial/IMAGE_PIPELINE.md`, 시각 기준은 `editorial/IMAGE_DIRECTION.md`가 소유합니다.

### 기본 품질선

제1호 실제 이미지와 현행 시연에서 확인한 정도의 사진적·에디토리얼 품질이면 합격권입니다.

이미지는 기사 주제와 자연스럽게 연결되어야 하지만 기사 전체 메커니즘을 문자 그대로 재현할 필요는 없습니다.

절제된 네트워크 선·빛·사진적 합성 같은 에디토리얼 표현은 허용합니다.

### 생성 단위

**한 번에 이미지 한 장만 생성합니다.**

- 여러 기사 이미지를 한 요청에 묶지 않음
- 연락시트·스토리보드·이미지 팩 생성 요청 금지
- 이미 통과한 이미지는 다른 슬롯 실패 때문에 다시 생성하지 않음
- 한 슬롯 기본 최대 3회 시도
- 3회 실패 시 BLOCKED로 기록하고 다른 슬롯 진행

### 해상도

- Cover: 장변 2200px 이상 목표
- 나머지 주요 이미지: 장변 2000px 이상 목표

저해상도 결과를 단순 확대해 규격만 맞추지 않습니다.

### Politics 절대 규칙

Politics와 Politics DEEP DIVE는 **완전 무인(human-free)** 이미지로 만듭니다.

사람, 얼굴, 실루엣, 뒷모습, 손, 원거리 인물이 하나라도 보이면 탈락합니다.

### LIFE SCENE

LIFE SCENE만 4:3 또는 4:5 비율을 생성 전에 결정합니다.

다른 섹션 이미지는 장면과 지면에 맞춰 비율을 유연하게 정합니다.

### 저장과 HTML

- 실패 후보는 작업 환경에만 둠
- 최종 채택본만 `archive/YYYY-MM-DD/assets/`에 저장
- 통과한 이미지는 순차적으로 HTML에 반영 가능
- 모든 필수 이미지와 실제 화면 검수가 끝나기 전에는 발행 불가

---

## 12. 제2호 현재 상태

작업 회차:

```text
work/2026-07-27/
```

현재 상태:

- Cover Story: COMPLETE
- Economy: COMPLETE
- Politics: COMPLETE
- Society: COMPLETE
- Tech: COMPLETE
- CROSS-ARTICLE REVIEW: COMPLETE
- DEEP DIVE: COMPLETE
- LIFE SCENE: COMPLETE
- PROLOGUE: COMPLETE
- EDITOR'S AFTERWORD: COMPLETE
- MANUSCRIPT_STAGE: COMPLETE
- LAYOUT: COMPLETE
- IMAGE_PIPELINE_DESIGN: COMPLETE
- IMAGES: READY
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

다음 작업은 `work/2026-07-27/IMAGE_PLAN.md`의 READY 슬롯을 한 장씩 생성·검수하는 것입니다.

과거의 8장 일괄 생성, 연락시트·스토리보드 반복 재시도, Canva 제작 보드 대체는 레거시 실행 이력이며 현재 지시가 아닙니다.

---

## 13. 실제 화면 검수

최소 다음 폭에서 실제 렌더링 또는 캡처를 확인합니다.

- 1440px 이상
- 1366px
- 1024px
- 390px

HTML 코드만 읽고 화면 검수를 통과했다고 기록하지 않습니다.

이미지 크롭은 실제 HTML 화면에서 최종 판정합니다. 먼저 CSS `object-position`과 지면 박스 비율을 조정하고, 이미지 자체가 근본적으로 부적합할 때만 재생성합니다.

---

## 14. 회차 완결 원칙

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

- 회차 루트에는 `index.html`과 `assets/`만 둡니다.
- 공개할 최종 산출물만 남깁니다.
- 외부 이미지 URL 직접 연결을 사용하지 않습니다.
- 필수 이미지·HTML·실제 화면 검수가 완료되지 않으면 발행하지 않습니다.

필요한 구조 검사는 직접 실행할 수 있습니다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

구조 검사 통과가 편집 품질 통과를 의미하지는 않습니다.

---

## 15. 품질 상향 원칙

매 회차는 최소 다음 세 축에서 직전 회차보다 나아져야 합니다.

### 원고

- 더 깊은 1차 자료
- 더 선명한 질문
- 더 자연스러운 설명 순서
- 더 적은 반복과 기계적 문체

### 이미지

- 더 적은 실패와 재시도
- 기사별 독립 이미지
- 충분한 해상도와 디테일
- 실제 지면에서 안정적인 크롭
- 생성 비용 대비 높은 채택률

### 지면

- 내용에 맞춘 정보 모듈
- 섹션마다 다른 리듬
- 더 나은 모바일 읽기 경험
- 긴 호흡을 유지하는 매거진 구조

형식적 최소 조건만 맞춘 결과는 완성본으로 보지 않습니다.
