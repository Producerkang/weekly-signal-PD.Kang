# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

이 저장소의 목적은 단순한 기사 보관이 아니라 **다음 대화·다음 회차에서도 같은 기준으로 제작을 재현할 수 있는 편집 시스템**을 유지하는 것입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 회차별 `WORK_STATE.md`를 우선합니다.

---

## 1. 운영 방식

WEEKLY SIGNAL은 한 호 전체를 한 번에 생성하지 않습니다.

기본 운영은 **ChatGPT 예약 작업이 정해진 시간마다 GitHub의 현재 상태를 읽고, 해당 제작 단위를 완료한 뒤 상태를 다시 기록하는 방식**을 전제로 합니다.

핵심 원칙:

- 각 예약 작업은 시작할 때 해당 회차 `WORK_STATE.md`와 필요한 현행 계약을 읽습니다.
- 예약 작업 하나는 명확한 제작 단위 하나를 끝까지 처리합니다.
- 완료한 결과와 다음 재개 지점은 GitHub에 기록합니다.
- 다음 예약 작업은 갱신된 상태에서 이어갑니다.
- 선행 단계가 미완료라면 상태를 무시하고 후속 단계로 건너뛰지 않습니다.
- 실패한 단위만 되돌리고 이미 `COMPLETE`된 결과를 불필요하게 다시 만들지 않습니다.
- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.

예약 시각은 제작 리듬을 정하기 위한 기준이고, **실제 상태의 선후관계는 `WORK_STATE.md`가 소유합니다.**

---

## 2. 주간 예약 작업 기준

기본 발행 목표는 **월요일 오전 9시**입니다.

기본 예약 작업은 다음과 같이 운영합니다.

| 시각 | 예약 작업 |
|---|---|
| 일요일 23:00 | Cover Story 제작 |
| 월요일 00:00 | Economy 제작 |
| 월요일 01:00 | Politics 제작 |
| 월요일 02:00 | Society 제작 |
| 월요일 03:00 | Tech 제작 |
| 월요일 04:00 | CROSS-ARTICLE REVIEW |
| 월요일 05:00 | DEEP DIVE 제작 |
| 월요일 06:00 | LIFE SCENE 제작 |
| 월요일 07:00 | PROLOGUE + EDITOR'S AFTERWORD 제작 |
| 월요일 08:00 | 지면 설계 + 이미지 슬롯별 순차 제작 |
| 월요일 09:00 | HTML 제작 + 간단 화면 검수 + 발행 |

### 예약 작업 단위

일반 기사 네 분야는 서로 합치지 않습니다.

- Economy
- Politics
- Society
- Tech

각 기사 예약 작업은 해당 기사에 필요한 검증·흐름 설계·원고 작성·검수를 한 턴 안에서 완료하는 것을 목표로 합니다.

후반부는 성격이 맞는 단계를 묶습니다.

- `PROLOGUE + EDITOR'S AFTERWORD`
- `지면 설계 + 이미지 슬롯별 순차 제작`
- `HTML 제작 + 간단 화면 검수 + 발행`

월요일 08:00은 **지면 설계와 이미지 제작을 담당하는 하나의 예약 작업 턴**입니다. 다만 이미지 생성 실행 단위는 항상 슬롯 하나입니다.

```text
1 SLOT = 1 SCENE = 1 IMAGE
```

08:00 한 턴 안에서 `IMAGE_PLAN.md`의 대상 슬롯을 순서대로 처리합니다. 각 슬롯마다 **한 장 생성 → 판정 → 상태 기록 → 다음 슬롯**의 순서를 반복하며, 한 번의 이미지 생성 요청에서 여러 슬롯을 동시에 만들지 않습니다. 한 슬롯의 실패가 다른 슬롯의 순차 진행을 막지 않으며, `RETRY` 또는 `BLOCKED` 판정 뒤 다음 처리 가능한 슬롯로 넘어갑니다. 이미지별 세부 상태와 실패 처리는 `editorial/IMAGE_PIPELINE.md`를 따릅니다.

월요일 09:00 작업은 HTML 구현부터 발행까지 한 턴에서 처리합니다. 화면 검수는 별도 장시간 단계로 두지 않고, 발행을 막아야 할 핵심 문제를 확인하고 수정하는 최종 안전 확인으로 운영합니다.

---

## 3. 문서 역할

역할을 섞지 않습니다.

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
- `IMAGE_PIPELINE.md`
- `IMAGE_DIRECTION.md`
- `LAYOUT_SYSTEM.md`
- `PUBLISHING_PIPELINE.md`

### `work/YYYY-MM-DD/`

해당 회차의 실제 제작 상태와 실행값을 소유합니다.

- `WORK_STATE.md` — 현재 완료 상태와 다음 재개 지점
- `LAYOUT_PLAN.md` — 해당 회차 지면 설계
- `IMAGE_PLAN.md` — 해당 회차 이미지 슬롯·브리프·상태
- `01_cover/` ~ `09_editor_afterword/` — 제작 원고와 내부 작업 파일

특정 회차의 슬롯, 비율, 파일명, 장면 브리프 같은 실행값을 일반 계약으로 역수입하지 않습니다.

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
→ 지면 설계 + 이미지 슬롯별 순차 제작
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
- 이미지가 필요한지 여부는 섹션 이름이 아니라 해당 회차 지면 설계가 결정합니다.
- 최종 발행은 필수 원고·지면·이미지·HTML이 준비되고 핵심 화면 문제가 없을 때만 수행합니다.

---

## 7. 새 대화 / 작업 재개

기존 회차를 이어갈 때 가장 먼저 읽을 문서는 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

입니다.

그 다음 `WORK_STATE.md`가 가리키는 단계에 필요한 현행 `editorial/` 계약과 회차별 계획 문서를 읽습니다.

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
