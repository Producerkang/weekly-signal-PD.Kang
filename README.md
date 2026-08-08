# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

이 저장소의 목적은 단순한 기사 보관이 아니라 **다음 대화·다음 회차에서도 같은 기준으로 제작을 재현할 수 있는 편집 시스템**을 유지하는 것입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 실행 진입점을 우선합니다.

---

## 1. 예약 작업 진입점

모든 예약 작업이 같은 파일에서 시작하지 않습니다.

### 기본 진입점

일반 제작 작업의 기본 진입점은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

입니다.

### 전용 진입점

특정 작업에 전용 실행 파일이 정의되어 있으면 **전용 진입점이 `WORK_STATE.md`보다 우선**합니다.

현재 전용 진입점:

```text
월요일 08:00 이미지 제작
→ jobs/image_job.json
```

08:00 이미지 작업은 시작 시 `WORK_STATE.md`, README, 주간 런북, 기사 원고, 지면 설계 문서를 먼저 읽지 않습니다. 07:00 작업이 생성한 `jobs/image_job.json`을 직접 실행합니다.

이미지 생성이 모두 끝난 뒤에만 다시 제어 문맥으로 돌아와 `IMAGE_PLAN.md`, `WORK_STATE.md`를 갱신합니다.

### WORK_STATE의 역할

`WORK_STATE.md`는 전체 제작 단계의 제어 상태를 소유합니다. 다만 이미지 생성 직전의 시각 문맥을 제공하는 파일이 아닙니다.

07:00 작업이 끝나 08:00 이미지 단계로 넘어갈 때는 `WORK_STATE.md`도 장문의 제작 보고서가 아니라 다음 진입점을 가리키는 **최소 인계 상태**로 갱신합니다.

---

## 2. 주간 예약 작업 기준

기본 발행 목표는 **월요일 오전 9시**입니다.

| 시각 | 예약 작업 | 진입점 |
|---|---|---|
| 일요일 22:00 | Cover Story 제작 | `WORK_STATE.md` |
| 일요일 23:00 | Economy 제작 | `WORK_STATE.md` |
| 월요일 00:00 | Politics 제작 | `WORK_STATE.md` |
| 월요일 01:00 | Society 제작 | `WORK_STATE.md` |
| 월요일 02:00 | Tech 제작 | `WORK_STATE.md` |
| 월요일 03:00 | CROSS-ARTICLE REVIEW | `WORK_STATE.md` |
| 월요일 04:00 | DEEP DIVE 제작 | `WORK_STATE.md` |
| 월요일 05:00 | LIFE SCENE 제작 | `WORK_STATE.md` |
| 월요일 06:00 | PROLOGUE + EDITOR'S AFTERWORD 제작 | `WORK_STATE.md` |
| 월요일 07:00 | LAYOUT_PLAN + IMAGE 입력 패키지 작성 | `WORK_STATE.md` |
| 월요일 08:00 | 이미지 슬롯별 순차 제작 | `jobs/image_job.json` |
| 월요일 09:00 | HTML 제작 + 화면 검수 + 발행 | `WORK_STATE.md` |

예약 시각은 제작 리듬을 정하기 위한 기준이고 실제 선후관계는 상태 파일이 소유합니다.

---

## 3. 07:00 — 이미지 실행 패키지 준비

07:00은 **텍스트·파일 작업 전용**입니다. 실제 이미지를 생성하지 않습니다.

필수 산출물:

```text
work/YYYY-MM-DD/
├─ LAYOUT_PLAN.md
├─ IMAGE_PLAN.md
└─ image_prompts/
   ├─ 01_*.txt
   ├─ 02_*.txt
   └─ ...

jobs/
└─ image_job.json
```

### image_prompts

각 슬롯의 `.txt` 파일에는 실제 이미지로 보일 장면만 담습니다.

- 실제 세계의 한 장면
- 중심 피사체·행동·사물
- 카메라 거리·구도
- 빛·재질·공간감
- 비율·안전영역
- 필요한 섹션별 하드 제약

### image_job

`jobs/image_job.json`은 08:00 예약 작업의 **고정 진입점**입니다.

이 파일은 장면을 설명하지 않고 실행 경로만 전달합니다.

예시:

```json
{
  "schema": "weekly-signal-image-job-v1",
  "state": "READY",
  "scheduled_date": "YYYY-MM-DD",
  "after_run": {
    "image_plan": "work/YYYY-MM-DD/IMAGE_PLAN.md",
    "work_state": "work/YYYY-MM-DD/WORK_STATE.md"
  },
  "queue": [
    {
      "prompt": "work/YYYY-MM-DD/image_prompts/01_cover.txt",
      "output": "cover.webp"
    },
    {
      "prompt": "work/YYYY-MM-DD/image_prompts/02_life-scene.txt",
      "output": "life-scene.webp"
    }
  ]
}
```

07:00은 이 파일을 **모든 prompt 파일이 확정된 뒤 마지막에 생성 또는 교체**합니다.

07:00 완료 뒤 `WORK_STATE.md`는 장문 보고 대신 최소 인계 상태로 갱신합니다.

```text
STAGE: IMAGE_GENERATION
ENTRYPOINT: jobs/image_job.json
LAYOUT: COMPLETE
IMAGES: PENDING
```

---

## 4. 08:00 — 이미지 생성 전용

08:00 예약 작업은 다음 순서로 시작합니다.

```text
jobs/image_job.json
→ queue[0].prompt
→ 이미지 1장 생성·육안 판정
→ queue[1].prompt
→ 이미지 1장 생성·육안 판정
→ ...
→ 모든 이미지 호출 종료
→ IMAGE_PLAN / WORK_STATE 갱신
```

핵심:

```text
1 SLOT = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

이미지 생성 구간에서는:

- `WORK_STATE.md`를 읽지 않음
- `IMAGE_PLAN.md`를 읽지 않음
- `LAYOUT_PLAN.md`를 읽지 않음
- 기사 원고를 다시 읽지 않음
- README나 런북을 다시 읽지 않음
- prompt 파일을 읽은 뒤 이미지가 반환될 때까지 다른 작업을 하지 않음

`IMAGE_PLAN.md`와 `WORK_STATE.md` 갱신은 **모든 이미지 생성 호출이 끝난 뒤** 수행합니다. 한 이미지마다 상태 파일을 열고 닫으며 다음 이미지 문맥을 오염시키지 않습니다.

사진 장면이 아닌 작업 화면·문서·UI형 결과가 나오면 `CONTEXT_FAILURE`로 처리하고 같은 이미지 턴에서 더 생성하지 않습니다.

이미지 품질과 섹션별 규칙은 `editorial/IMAGE_CONTRACT.md`가 소유하지만, 08:00 이미지 생성 직전에 이 긴 계약을 다시 읽지는 않습니다. 07:00이 계약을 적용해 prompt 파일에 필요한 시각 조건을 이미 반영해야 합니다.

---

## 5. 문서 역할

### `editorial/`

회차 독립적인 제작 계약과 품질 기준을 소유합니다.

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

### `work/YYYY-MM-DD/`

해당 회차의 제작 상태와 실행값을 소유합니다.

- `WORK_STATE.md` — 현재 단계와 다음 진입점
- `LAYOUT_PLAN.md` — 해당 회차 지면 설계
- `IMAGE_PLAN.md` — 이미지 결과 상태와 발행 연결 정보
- `image_prompts/*.txt` — 실제 이미지 생성에 사용할 순수 장면 프롬프트
- `01_cover/` ~ `09_editor_afterword/` — 제작 원고와 내부 작업 파일

### `jobs/`

전용 예약 작업의 실행 인계 파일을 둡니다.

현재 사용 파일:

- `jobs/image_job.json` — 월요일 08:00 이미지 제작 전용 진입점

작업이 아직 준비되지 않았으면 이 파일이 존재하지 않을 수 있습니다.

### `archive/YYYY-MM-DD/`

독자에게 공개되는 최종 발행본만 둡니다.

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

실패본·중간 후보·검증 메모는 `archive/`에 두지 않습니다.

---

## 6. 기본 회차 구성

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

## 7. 전체 제작 흐름

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
→ 07:00 LAYOUT_PLAN + 이미지 실행 패키지 준비
→ 08:00 전용 image_job 실행
→ 09:00 HTML + 화면 검수 + 발행
```

각 단계의 내부 알고리즘과 품질 기준은 해당 `editorial/` 계약이 소유합니다.

---

## 8. 재개 원칙

일반 작업은 `WORK_STATE.md`에서 재개합니다.

단, 전용 진입점이 정의된 작업은 해당 파일을 먼저 사용합니다.

특히 월요일 08:00 이미지 작업은:

```text
jobs/image_job.json
```

이 유일한 시작점입니다.

전용 진입점이 없거나 `state`가 `READY`가 아니면 임의로 다른 문서를 읽어 장면을 재구성하지 않고 해당 예약 작업을 중단합니다.
