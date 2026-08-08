# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

이 저장소의 목적은 단순한 기사 보관이 아니라 **다음 대화·다음 회차에서도 같은 기준으로 제작을 재현할 수 있는 편집 시스템**을 유지하는 것입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 회차별 `WORK_STATE.md`를 우선합니다.

---

## 1. 운영 방식

WEEKLY SIGNAL은 한 호 전체를 한 번에 생성하지 않습니다.

기본 운영은 **ChatGPT 예약 작업이 정해진 시간마다 GitHub의 현재 상태를 읽고, 해당 제작 단위를 완료한 뒤 상태를 다시 기록하는 방식**을 전제로 합니다.

핵심 원칙:

- 각 예약 작업은 시작할 때 해당 회차 `WORK_STATE.md`와 현재 단계에 필요한 계약만 읽습니다.
- 예약 작업 하나는 명확한 제작 단위 하나를 끝까지 처리합니다.
- 완료한 결과와 다음 재개 지점은 GitHub에 기록합니다.
- 다음 예약 작업은 갱신된 상태에서 이어갑니다.
- 선행 단계가 미완료라면 후속 단계로 건너뛰지 않습니다.
- 이미 `COMPLETE`된 결과를 불필요하게 다시 만들지 않습니다.
- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.

예약 시각은 제작 리듬을 정하기 위한 기준이고, **실제 상태의 선후관계는 `WORK_STATE.md`가 소유합니다.**

---

## 2. 주간 예약 작업 기준

기본 발행 목표는 **월요일 오전 9시**입니다.

| 시각 | 예약 작업 |
|---|---|
| 일요일 22:00 | Cover Story 제작 |
| 일요일 23:00 | Economy 제작 |
| 월요일 00:00 | Politics 제작 |
| 월요일 01:00 | Society 제작 |
| 월요일 02:00 | Tech 제작 |
| 월요일 03:00 | CROSS-ARTICLE REVIEW |
| 월요일 04:00 | DEEP DIVE 제작 |
| 월요일 05:00 | LIFE SCENE 제작 |
| 월요일 06:00 | PROLOGUE + EDITOR'S AFTERWORD 제작 |
| 월요일 07:00 | LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용) |
| 월요일 08:00 | 이미지 슬롯별 순차 제작 |
| 월요일 09:00 | HTML 제작 + 간단 화면 검수 + 발행 |

### 예약 작업 단위

일반 기사 네 분야는 서로 합치지 않습니다.

- Economy
- Politics
- Society
- Tech

각 기사 예약 작업은 해당 기사에 필요한 검증·흐름 설계·원고 작성·검수를 한 턴 안에서 완료하는 것을 목표로 합니다.

후반부는 다음과 같이 운영합니다.

- `PROLOGUE + EDITOR'S AFTERWORD`는 한 턴에서 순차 제작합니다.
- `LAYOUT_PLAN + IMAGE_PLAN 작성`은 월요일 07:00의 **텍스트 전용 독립 턴**입니다.
- `이미지 슬롯별 순차 제작`은 월요일 08:00의 **이미지 생성 전용 독립 턴**입니다.
- `HTML 제작 + 간단 화면 검수 + 발행`은 마지막 한 턴에서 처리합니다.

### 07:00 LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용)

07:00에서는 다음 파일만 완성합니다.

- `LAYOUT_PLAN.md`
- `IMAGE_PLAN.md`
- `image_prompts/*.txt`
- `WORK_STATE.md` 갱신

각 이미지 슬롯의 실제 생성 문장은 `image_prompts/*.txt`에 별도로 저장합니다. 이 파일은 장면·피사체·카메라·빛·재질·구도처럼 이미지로 보일 내용만 담습니다.

**07:00에는 이미지 생성 도구를 호출하지 않습니다.**

### 08:00 이미지 슬롯별 순차 제작

08:00은 **이미지 생성 전용 턴**입니다.

실행 기준은 `editorial/IMAGE_CONTRACT.md`입니다.

```text
1 SLOT = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

08:00은 `IMAGE_PLAN.md`의 큐를 따라 슬롯을 하나씩 처리합니다.

기본 흐름:

```text
IMAGE_CONTRACT 확인
→ IMAGE_PLAN 확인
→ 슬롯 선택
→ 해당 image_prompts/*.txt 읽기
→ 즉시 이미지 1장 생성
→ PHOTO-SCENE / 품질 판정
→ 상태 기록
→ 다음 슬롯
→ 반복
```

이미지 생성 직전에는 현재 슬롯의 프롬프트 파일을 마지막으로 읽습니다. 그 뒤 이미지가 반환될 때까지 다른 저장소 문서를 읽거나 작업 설명을 덧붙이지 않습니다.

결과가 사진 한 장이 아니라 작업 화면·문서·리포트형 구조로 나오면 **`CONTEXT_FAILURE`**입니다. 같은 대화에서 다시 생성하지 않고 08:00 턴을 즉시 종료한 뒤 새 대화에서 재시작합니다.

이미지 품질·상태·재시도·Politics/LIFE SCENE 규칙은 모두 `editorial/IMAGE_CONTRACT.md`가 소유합니다.

월요일 09:00 작업은 HTML 구현부터 발행까지 한 턴에서 처리합니다. 화면 검수는 발행을 막아야 할 핵심 문제를 확인하고 수정하는 최종 안전 확인으로 운영합니다.

---

## 3. 문서 역할

### `editorial/`

모든 회차에 적용되는 **회차 독립적인 제작 계약과 품질 기준**을 소유합니다.

주요 문서:

- `WEEKLY_RUNBOOK.md`
- `ARTICLE_WRITING_STANDARD.md`
- `ISSUE_QUALITY_GATE.md`
- `SECTION_AND_DEEP_DIVE_STANDARD.md`
- `LIFE_SCENE_STANDARD.md`
- `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
- `VOICE_AND_TONE.md`
- `SOURCE_POLICY.md`
- `IMAGE_CONTRACT.md`
- `LAYOUT_SYSTEM.md`
- `PUBLISHING_PIPELINE.md`

`IMAGE_PIPELINE.md`와 `IMAGE_DIRECTION.md`은 레거시 호환용 안내 파일이며 현행 이미지 계약이 아닙니다. 새 작업에서는 읽지 않습니다.

### `work/YYYY-MM-DD/`

해당 회차의 실제 제작 상태와 실행값을 소유합니다.

- `WORK_STATE.md` — 현재 완료 상태와 다음 재개 지점
- `LAYOUT_PLAN.md` — 해당 회차 지면 설계
- `IMAGE_PLAN.md` — 이미지 큐·파일명·상태
- `image_prompts/*.txt` — 실제 생성에 사용할 순수 장면 프롬프트
- `01_cover/` ~ `09_editor_afterword/` — 제작 원고와 내부 작업 파일

특정 회차의 슬롯, 비율, 파일명, 장면을 일반 계약으로 역수입하지 않습니다.

### `archive/YYYY-MM-DD/`

독자에게 공개되는 최종 발행본만 둡니다.

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

실패본·중간 후보·검증 메모는 `archive/`에 두지 않습니다.

---

## 4. 기본 회차 구성

별도 지시가 없으면 한 호는 다음 구성을 목표로 합니다.

- Cover Story 1편
- Economy 1편
- Politics 1편
- Society 1편
- Tech 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션이며 다시 만들지 않습니다.

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

## 5. 전체 제작 흐름

```text
Cover Story
→ Economy
→ Politics
→ Society
→ Tech
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE + EDITOR'S AFTERWORD
→ LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용)
→ 이미지 슬롯별 순차 제작
→ HTML + 화면 검수 + 발행
```

각 단계의 내부 알고리즘과 품질 기준은 README가 아니라 해당 `editorial/` 계약이 소유합니다.

일반 기사 기본 제작 구조:

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

현재 기사 하나가 `COMPLETE`가 되기 전에는 다음 기사 본문으로 넘어가지 않습니다.

---

## 6. 최우선 제작 원칙

- GitHub `main`을 현재 상태의 기준으로 사용합니다.
- 검증 메모와 독자용 원고를 같은 파일에 섞지 않습니다.
- 형식적 체크 통과보다 실제 읽기 품질을 우선합니다.
- 실패가 보이면 표면 문구나 임계값만 조정하지 않고 실패를 만든 제작 로직부터 수정합니다.
- DATA와 WATCH는 새로운 정보가 있을 때만 선택적으로 만듭니다.
- 이미지 필요 여부와 슬롯은 07:00 계획 파일 작성에서 결정합니다.
- 이미지 생성 문장은 운영 문서와 분리된 `image_prompts/*.txt`가 소유합니다.
- 최종 발행은 필수 원고·지면·이미지·HTML이 준비되고 핵심 화면 문제가 없을 때만 수행합니다.

---

## 7. 새 대화 / 작업 재개

기존 회차를 이어갈 때 가장 먼저 읽을 문서는 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

입니다.

그 다음 `WORK_STATE.md`가 가리키는 **현재 단계에 필요한 계약만** 읽습니다.

완료된 이전 단계의 문서를 새 대화에 불필요하게 다시 쌓지 않습니다.

새 대화에서 과거 채팅 내용을 복원하려고 하기보다 **현재 `main`의 상태 파일과 계약을 기준으로 그대로 다음 작업을 실행**하는 것을 원칙으로 합니다.

---

## 8. 저장소 구조

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
│     ├─ image_prompts/
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
├─ templates/
└─ tools/
```

`work/YYYY-MM-DD/`와 `archive/YYYY-MM-DD/`는 같은 회차 시작일을 사용해 대응합니다.