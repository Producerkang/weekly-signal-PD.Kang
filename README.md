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
10. `editorial/IMAGE_DIRECTION.md`
11. `editorial/LAYOUT_SYSTEM.md`
12. `editorial/PUBLISHING_PIPELINE.md`
13. `templates/TEMPLATE_CONTRACT.md`
14. `templates/NAVIGATION_CONTRACT.md`
15. 필요하면 `editorial/QUALITY_LEARNING_LOG.md`, `editorial/ISSUE_HISTORY.md`

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
- 실제 화면 검수 전에는 발행 완료로 처리하지 않습니다.
- 실패가 보이면 표면 문장이나 임계값만 조정하지 않고 **실패를 만든 제작 로직부터 수정**합니다.

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
│     ├─ 01_cover/
│     │  ├─ VERIFY.md
│     │  ├─ FLOW.md
│     │  └─ ARTICLE.md
│     ├─ 02_economy/
│     ├─ 03_politics/
│     ├─ 04_society/
│     ├─ 05_tech/
│     ├─ 06_deep_dive/
│     ├─ 07_life_scene/
│     │  ├─ SCENE_MAP.md
│     │  └─ ARTICLE.md
│     ├─ 08_prologue/
│     │  ├─ PREVIEW_MAP.md
│     │  └─ ARTICLE.md
│     └─ 09_editor_afterword/
│        └─ ARTICLE.md
├─ editorial/
├─ templates/
├─ tools/
│  └─ validate_repository.py
├─ publication/
└─ requirements-tools.txt
```

Git은 빈 폴더를 보존하지 않으므로 아직 시작하지 않은 단계의 폴더를 미리 만들 필요는 없습니다.

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

`EDITOR'S PICK`은 폐기됐습니다. 다시 만들지 않습니다.

기본 독서 순서는 다음과 같습니다.

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

### VERIFY

`VERIFY.md`는 내부 사실 검증 전용입니다.

- 무슨 일이 있었는가
- 발표 / 계획 / 계약 / 시행 / 집행 / 성과 중 현재 상태는 무엇인가
- 수치의 정확한 정의는 무엇인가
- 비슷한 제도·문서·절차의 차이는 무엇인가
- 상충 자료와 예외는 무엇인가
- 아직 확정되지 않은 것은 무엇인가

검증 단계의 구분 언어를 독자 문체에 그대로 복사하지 않습니다.

### FLOW

`FLOW.md`는 독자가 어떤 순서로 이해해야 하는지를 설계합니다.

기본적으로 다음 흐름을 참고하되 기사마다 같은 템플릿을 강제하지 않습니다.

```text
사건 / 현재 상태
→ 용어·제도
→ 배경
→ 변화
→ 작동 방식
→ 영향
→ 비용·병목
→ 한계·반론
→ 미확인
→ 다음 판단 지표
```

핵심 질문은 항상 다음입니다.

> 독자가 지금 무엇을 이해해야 다음 내용을 따라갈 수 있는가?

### ARTICLE

`ARTICLE.md`는 독자용 최종 기사입니다.

- 설명과 논증을 먼저 완성합니다.
- 부정·대조는 실제 반론, 예외, 범위 한정에 필요할 때만 사용합니다.
- `A가 아니다. B다.` 같은 정정형 문체를 기본 추진력으로 삼지 않습니다.
- 문단은 하나의 중심 질문 또는 논리 단위를 끝까지 설명합니다.
- 제목과 Deck은 본문과 검수 뒤 마지막에 만듭니다.

현재 일반 기사가 `COMPLETE`가 되기 전에는 다음 일반 기사 본문으로 넘어가지 않습니다.

---

## 6. 일반 기사 이후 제작 순서

일반 기사 5편이 모두 COMPLETE가 된 뒤에만 후반 제작으로 넘어갑니다.

```text
일반 기사 5편 COMPLETE
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE
→ EDITOR'S AFTERWORD
→ 지면 설계
→ 이미지 구현
→ HTML
→ 다중 화면 검수
→ 발행
```

DATA와 WATCH는 새 정보가 있을 때만 선택적으로 만듭니다.

---

## 7. DEEP DIVE

DEEP DIVE는 일반 기사를 길게 반복하는 섹션이 아닙니다.

작성 전 반드시 다음을 확인합니다.

- 일반 기사가 이미 답한 질문
- DEEP DIVE가 새로 답할 단 하나의 질문
- 새 핵심 주장
- 새 독립 출처
- 일반 기사와 다른 심화 방식

일반 기사와 같은 정의 → 같은 원인 → 같은 경로 → 같은 결론을 반복하면 실패입니다.

---

## 8. LIFE SCENE

LIFE SCENE은 정책·기관·서비스·절차가 개인의 생활에서 어떻게 체감되는지를 **가상의 한 인물과 하나의 사건**을 통해 보여줍니다.

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

`SCENE_MAP.md`를 ARTICLE보다 먼저 만듭니다.

핵심은 생활 요소를 체크리스트처럼 배치하는 것이 아니라 다음 인과 사슬을 만드는 것입니다.

```text
원래 계획
→ 첫 장애
→ 행동
→ 직접 결과
→ 새로운 선택 / 다음 장애
→ 다시 행동
→ 생활의 변화
```

SCENARIO NOTE에서 가상 범위와 실제 사실을 구분합니다.

---

## 9. PROLOGUE

PROLOGUE는 본격적인 기사 묶음 앞에서 **한 호의 지면을 넓게 열었다가 몇 군데로 시선을 좁히고 본문으로 넘기는 매거진 도입부**입니다.

ARTICLE을 바로 쓰지 않고 `08_prologue/PREVIEW_MAP.md`를 먼저 만듭니다.

현재 제작 흐름:

```text
ISSUE READBACK
→ PREVIEW MAP
→ PANORAMA
→ ORIENTATION
→ FOCUS
→ ARTICLE PREVIEW
→ RHYTHM PASS
→ PROSE RHYTHM PASS
→ DEPTH CEILING PASS
→ REPEATED COVERAGE PASS
→ HANDOFF
→ TITLE PASS
→ COMPLETE
```

핵심 시선 이동:

```text
넓게 보여주기
→ 방향 잡기
→ 몇 군데로 시선 좁히기
→ 일부 기사를 조금 더 가까이 보여주기
→ 본문으로 넘기기
```

### 중요한 보정

- 초반 PANORAMA에서는 여러 분야와 주요 토픽이 함께 등장해도 됩니다.
- 문제는 넓은 커버리지를 뒤 문단에서도 반복하는 것입니다.
- `Cover 한 문단 → Economy 한 문단 → Politics 한 문단` 같은 선택 기사 미니 요약도 실패입니다.
- PANORAMA·ORIENTATION·FOCUS·ARTICLE PREVIEW는 내부 기능이며 실제 문단과 1:1 대응시키지 않습니다.
- 같은 소재가 FOCUS와 ARTICLE PREVIEW에 걸치면 한 문단에서 자연스럽게 합칠 수 있습니다.
- 장면이 이미 의미를 전달하면 추상 해설을 자동으로 한 문장 더 붙이지 않습니다.
- 고유명사·기관명·숫자·절차를 한 문장에 과밀하게 쌓지 않습니다.
- LIFE SCENE이 앞에 배치됐다는 이유만으로 `앞서 LIFE SCENE에서 본…` 같은 연결 문장을 만들지 않습니다.
- LIFE SCENE과 실제 소재 연결이 자연스러울 때만 활용합니다.

---

## 10. EDITOR'S AFTERWORD

EDITOR'S AFTERWORD는 모든 기사와 DEEP DIVE를 읽은 뒤 Sources 직전에 만나는 **실제 에디터 후기**입니다.

`EDITOR'S PICK`처럼 대표 기사·대표 숫자·대표 문장을 고르는 섹션이 아닙니다.

현재 제작 흐름:

```text
ISSUE READBACK
→ MEMORY TRACE
→ REFLECTION DRAFT
→ RECAP CUT
→ METHOD REPORT CUT
→ AFTERTASTE PASS
→ COMPLETE
```

허용되는 방향:

- 실제 제작 후 남은 생각
- 마지막까지 고민한 표현이나 판단
- 자료를 확인하며 달라진 인상
- 기사 뒤에도 남은 장면
- 완전히 닫히지 않은 질문
- 서로 다른 기사 사이에서 뒤늦게 보인 연결

피해야 할 방향:

- 기사별 요약
- 모든 기사를 하나의 교훈으로 묶기
- 대표 항목 하나를 억지로 선정하기
- VERIFY·FLOW·검수 절차를 독자에게 설명하기
- 존재하지 않는 회의·취재 장면·감정 만들기
- 마지막에 교훈·질문·다음 호 예고를 의무적으로 붙이기

### 분량 기준

현재 방향과 서정성이 충분하면 새 논점을 추가해 분량을 늘리지 않습니다.

문단 호흡이 짧을 때는 **기존 장면·생각·망설임을 한 문장 정도 더 이어 각 문단을 대략 1.1~1.2배 확장**하는 정도를 우선합니다.

---

## 11. 제2호 현재 상태

작업 회차:

```text
work/2026-07-27/
```

현재 제2호는 **01~09 원고 제작이 모두 COMPLETE**입니다.

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

2호 PROLOGUE는 현 상태에서 더 수정하지 않습니다. 문장 리듬 개선사항은 현행 PROLOGUE 표준에 반영했고 **제3호부터 적용**합니다.

2호 EDITOR'S AFTERWORD는 현재 서정적 회고 구조를 유지하며 문단 호흡만 소폭 확장한 상태로 COMPLETE입니다.

---

## 12. 현재 최우선 설계 과제 — 이미지 구현 턴 전면 재설계

현재 원고 시스템은 안정화 단계에 들어왔지만, **이미지 생성·구현 단계는 아직 재설계가 필요합니다.**

기존 이미지 구현 흐름에서는 다음 문제가 반복됐습니다.

- 이미지 생성 시간이 과도하게 길어짐
- 생성 실패와 재시도가 반복됨
- 한 번의 턴에서 너무 많은 이미지 생성·검수·저장 작업을 처리하려는 경향
- 실패 원인에 따라 재시도 전략이 분리되지 않음
- 이미지 기획, 프롬프트 작성, 생성, 선택, 저장, 크롭·지면 적합성 검수가 한 덩어리로 섞임
- 생성이 실패하면 전체 후반 제작 흐름이 같이 막힘

따라서 **다음 작업은 이미지를 곧바로 생성하는 것이 아니라 이미지 구현 턴 자체를 처음부터 재설계하는 것**입니다.

재설계 시 우선 검토할 대상:

1. 이미지가 실제로 필요한 섹션과 필요하지 않은 섹션 구분
2. 이미지 역할 정의와 장면 설계를 생성 전에 완료하는 방법
3. 한 이미지씩 독립적으로 생성·검수·확정하는 직렬 파이프라인
4. 생성 실패 유형별 재시도 / 폐기 / 대체 규칙
5. 생성 횟수와 불필요한 반복을 줄이는 전략
6. 지면 크롭과 모바일 대응을 생성 전 기획에 포함하는 방법
7. 이미지 생성과 파일 저장·HTML 반영 단계를 분리하는 방법
8. `IMAGE_DIRECTION.md`, `WEEKLY_RUNBOOK.md`, `ISSUE_QUALITY_GATE.md`, `PUBLISHING_PIPELINE.md` 사이의 역할 정리
9. 새 이미지 파이프라인을 제3호에서도 그대로 재현할 수 있는 계약 형태로 만드는 방법

**현재 이미지 관련 기존 규칙을 그대로 전제로 개선하지 않습니다.** 필요한 경우 기존 로직을 폐기하고 새 구조로 다시 설계합니다.

이미지 파이프라인 재설계가 끝나기 전에는 대량 이미지 생성을 다시 시작하지 않습니다.

---

## 13. 지면·이미지·HTML 후반 제작

후반 제작의 기본 원칙은 다음과 같습니다.

### 지면 설계

- 기사 내용에 맞춰 서로 다른 지면 리듬을 선택합니다.
- 모든 기사에 같은 템플릿을 복제하지 않습니다.
- 한 호 전체에 최소 세 가지 이상의 기사 레이아웃 리듬을 만듭니다.
- 장식 모듈은 본문 반복이 아니라 새로운 정보 또는 읽기 전환을 제공해야 합니다.

### 이미지 구현

현재 이미지 구현 로직은 재설계 대상입니다. 재설계 완료 전에는 이 README의 제12절을 우선합니다.

### HTML

- `templates/ISSUE_TEMPLATE.html`은 시작 셸일 뿐 완성 디자인이 아닙니다.
- 완성 원고와 확정 이미지·지면만 반영합니다.
- 회차별 `archive/YYYY-MM-DD/index.html` 하나에 본문·CSS·최소 JavaScript를 넣습니다.
- 기사 본문을 별도 HTML에서 `fetch()`로 조립하지 않습니다.
- 상대경로를 사용합니다.

### 실제 화면 검수

최소 다음 폭에서 실제 렌더링 또는 캡처를 확인합니다.

- 1440px 이상
- 1366px
- 1024px
- 390px

HTML 코드만 읽고 화면 검수를 통과했다고 기록하지 않습니다.

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
- 이미지·HTML·화면 검수가 완료되지 않으면 발행하지 않습니다.

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
- 기사별 명확한 역할
- 더 높은 디테일과 자연스러운 질감
- 안정적인 데스크톱·모바일 크롭
- 생성 비용 대비 높은 채택률

### 지면

- 내용에 맞춘 정보 모듈
- 섹션마다 다른 리듬
- 더 나은 모바일 읽기 경험
- 긴 호흡을 유지하는 매거진 구조

형식적 최소 조건만 맞춘 결과는 완성본으로 보지 않습니다.

---

## 16. GitHub Pages

GitHub Pages는 `main` 브랜치의 루트 정적 파일을 사용합니다.

GitHub Actions 기반 빌드·배포는 사용하지 않습니다.
