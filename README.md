# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 실행 진입점을 우선합니다.

---

## 1. 작업 진입점

일반 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작합니다.

이미지 작업은 `jobs/image_job.json`을 CONTROL PLANE manifest로 사용합니다.

**중요:** `jobs/image_job.json`을 읽은 턴은 이미지 생성 턴이 아닙니다. job·queue·GitHub 문맥을 읽은 동일 턴에서 이미지 생성 도구를 호출하지 않습니다.

이미지 생성은 scene prompt 전문 하나만 입력받는 새 독립 IMAGE PLANE 턴에서 수행합니다.

현행 상세 계약:

- `editorial/IMAGE_CONTRACT.md`
- `jobs/IMAGE_JOB_V2.md`

---

## 2. 주간 제작 리듬

기본 발행 목표는 월요일 오전 9시입니다.

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
| 월요일 06:00 | PROLOGUE + EDITOR'S AFTERWORD |
| 월요일 07:00 | LAYOUT_PLAN + 이미지 입력 패키지 준비 |
| 월요일 08:00 | 이미지 CONTROL dispatch + 독립 생성 + Git 보존 |
| 월요일 09:00 | HTML 제작 + 화면 검수 + 발행 |

예약 시각은 제작 리듬을 위한 기준이며 실제 선후관계는 상태 파일이 소유합니다.

---

## 3. 07:00 — 이미지 입력 준비

07:00은 텍스트·파일 작업 전용입니다. 실제 이미지를 생성하지 않습니다.

필수 산출물:

```text
work/YYYY-MM-DD/
├─ LAYOUT_PLAN.md
├─ IMAGE_PLAN.md
├─ image_prompts/
│  ├─ 01_*.txt
│  ├─ 02_*.txt
│  └─ ...
└─ image_runs/
   └─ README.md

jobs/
└─ image_job.json
```

각 `image_prompts/*.txt`에는 이미지로 보일 실제 장면만 둡니다.

- 중심 피사체·행동·사물
- 카메라 거리·구도
- 빛·재질·공간감
- 필요한 비율·안전영역
- Politics 완전 무인 같은 장면 자체의 하드 제약

저장소·queue·state·파일 경로·저장 지시는 scene prompt에 넣지 않습니다.

---

## 4. 08:00 — CONTROL / IMAGE / PERSISTENCE 분리

현행 v2 구조:

```text
CONTROL PLANE
jobs/image_job.json
→ READY item 선택
→ scene prompt 텍스트 확보
→ 새 독립 이미지 턴으로 dispatch

IMAGE PLANE
scene prompt text only
→ 이미지 1장 생성

PERSISTENCE PLANE
반환 이미지
→ work/YYYY-MM-DD/image_runs/<slot>/attempt-NN.<ext>
→ Git 저장
→ PHOTO-SCENE / 품질 판정
→ 상태 갱신
```

### 금지된 구형 방식

```text
image_job 읽기
→ prompt 읽기
→ 같은 턴에서 즉시 이미지 생성
```

이 방식은 운영 문맥이 이미지 생성에 남을 수 있으므로 사용하지 않습니다.

### 독립 IMAGE PLANE 규칙

이미지 생성 턴은 다음을 알면 안 됩니다.

- GitHub·저장소·브랜치
- job·queue·state
- `WORK_STATE.md`, `IMAGE_PLAN.md`
- prompt 파일 경로
- output filename
- 저장·업로드 지시

현재 입력은 장면 프롬프트 한 개뿐이어야 합니다.

독립 이미지 턴을 만들 수 없으면 `DISPATCH_BLOCKED`로 중단하고 같은 제어 턴에서 이미지를 만들지 않습니다.

---

## 5. 이미지 결과는 Git에 보존

새 생성 결과는 임시 폴더에만 두지 않습니다.

```text
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.<original-ext>
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.json
```

- 정상 후보 저장
- 품질 실패 후보 저장
- 작업 화면·문서·UI형 `CONTEXT_FAILURE`도 진단용으로 저장
- 가능하면 이미지와 sidecar를 같은 커밋으로 반영
- 저장 완료 전에 다음 슬롯으로 진행하지 않음
- 저장할 수 없으면 `PERSISTENCE_BLOCKED`

`CONTEXT_FAILURE` 결과는 Git에는 남기되 유효 사진 시도 횟수에는 포함하지 않습니다.

`archive/YYYY-MM-DD/assets/`에는 최종 ACCEPTED 발행본만 둡니다.

---

## 6. 문서 역할

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

해당 회차의 제작 상태와 작업 자산을 소유합니다.

- `WORK_STATE.md` — 현재 단계
- `LAYOUT_PLAN.md` — 지면 설계
- `IMAGE_PLAN.md` — 이미지 상태·발행 연결
- `image_prompts/*.txt` — 순수 장면 프롬프트
- `image_runs/` — 생성 이미지 원본·실패 후보·attempt metadata의 Git 기록
- `01_cover/` ~ 회차별 기사 작업 디렉터리

### `jobs/`

예약 이미지 작업의 CONTROL PLANE manifest와 실행 계약을 둡니다.

- `jobs/image_job.json`
- `jobs/IMAGE_JOB_V2.md`

### `archive/YYYY-MM-DD/`

독자에게 공개되는 최종 발행본만 둡니다.

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

---

## 7. 기본 회차 구성

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

`EDITOR'S PICK`은 폐기된 레거시 섹션입니다.

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

## 8. 전체 제작 흐름

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
→ 07:00 LAYOUT_PLAN + image prompts + controller manifest
→ 08:00 isolated image generation + Git persistence
→ 09:00 HTML + 화면 검수 + 발행
```

이미지와 관련해 이전 문서에 `job → prompt → 같은 턴에서 생성`이라고 적힌 레거시 규칙이 남아 있으면 `editorial/IMAGE_CONTRACT.md` v2가 우선합니다.
