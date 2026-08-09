# WEEKLY SIGNAL 이미지 계약 v2

이 문서는 WEEKLY SIGNAL의 이미지 준비·생성·검수·저장에 대한 **유일한 현행 계약**이다.

이번 v2의 핵심 목적은 이미지 생성기가 저장소·작업 상태·큐·파일 트리 같은 운영 문맥을 장면으로 오인하는 문제를 구조적으로 차단하는 것이다.

핵심 원칙은 세 가지다.

> **제어 문맥과 이미지 생성 문맥은 실제 턴 수준에서 분리한다.**
>
> **이미지를 생성하는 턴의 입력은 장면 프롬프트 한 개뿐이다.**
>
> **생성된 모든 결과는 합격 여부와 관계없이 Git의 `work/` 경로에 즉시 보존한다.**

---

## 0. CONTROL PLANE / IMAGE PLANE 분리

이미지 작업은 두 계층으로 나눈다.

```text
CONTROL PLANE
GitHub / job / queue / state / prompt path / output path
        │
        │ isolated dispatch
        ▼
IMAGE PLANE
scene prompt text only
        │
        ▼
image generation
        │
        ▼
PERSISTENCE PLANE
returned image artifact → Git work/.../image_runs/
```

### CONTROL PLANE

다음을 처리한다.

- `jobs/image_job.json` 읽기
- 현재 queue item 선택
- 해당 `image_prompts/*.txt`의 텍스트 확보
- 독립 이미지 턴으로 scene payload 전달
- 생성 결과의 Git 저장 위치 관리
- 상태 갱신

**CONTROL PLANE에서는 이미지 생성 도구를 호출하지 않는다.**

### IMAGE PLANE

이미지 생성 자체만 처리한다.

IMAGE PLANE은 다음을 알면 안 된다.

- 저장소명·브랜치·GitHub
- `jobs/`, `work/`, `archive/` 경로
- `WORK_STATE.md`, `IMAGE_PLAN.md`
- queue, state, attempt, output filename
- 예약 시각, 제작 단계, 커밋
- 이미지 저장·업로드·검수 절차

IMAGE PLANE에 전달되는 입력은 **현재 슬롯의 장면 프롬프트 전문 하나**뿐이다.

### PERSISTENCE PLANE

이미지가 반환된 뒤에만 실행한다.

- 반환 이미지 원본을 Git 추적 경로에 저장
- attempt metadata 기록
- 그 뒤 PHOTO-SCENE 및 품질 판정
- 필요하면 다음 독립 이미지 턴을 다시 dispatch

이미지가 생성되기 전에 Git 저장 지시나 output path를 IMAGE PLANE에 전달하지 않는다.

---

## 1. 07:00 PREPARATION

07:00은 기사와 지면을 읽고 이미지 실행 입력을 준비하는 단계다. 실제 이미지를 생성하지 않는다.

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

`image_runs/`는 생성 결과를 Git에 보존하는 작업 자산 경로이며 `archive/`와 다르다.

### 1.1 IMAGE_PLAN

`IMAGE_PLAN.md`는 결과 상태와 발행 연결을 관리한다.

최소 항목:

- 순서
- 슬롯명
- 필요성
- prompt 파일 경로
- run 디렉터리
- 최종 발행 파일명
- 상태
- 유효 사진 시도 횟수
- 목표 비율
- 목표 해상도

장면 프롬프트 전문은 넣지 않는다.

### 1.2 scene prompt 파일

각 생성 대상 슬롯마다 독립 UTF-8 `.txt` 파일 하나를 만든다.

형식:

- 제목 없음
- Markdown 없음
- 표·체크박스·상태 라벨 없음
- 한 개의 연속된 장면 묘사
- 이미지로 보일 내용만 기술

포함:

- 실제 세계의 한 장면 또는 공간
- 중심 피사체·행동·사물
- 카메라 거리·높이·구도
- 빛·재질·원근·공간감
- 필요한 안전영역·비율
- Politics 완전 무인 같은 장면 자체의 하드 제약

포함하지 않음:

- 프로젝트·저장소·브랜치 정보
- 회차·예약 작업·진행 상태
- 파일 경로·커밋·체크리스트
- output filename
- 저장·업로드·검수 지시
- 작업 보고나 다음 턴 설명
- 문서·UI·리포트 구성 지시

기사 의미를 **실제 세계의 한 장면**으로 번역한다.

---

## 2. `jobs/image_job.json`은 CONTROLLER MANIFEST다

`jobs/image_job.json`은 이미지 모델의 프롬프트가 아니다.

v2 job은 반드시 다음 의미를 가진다.

```text
mode = CONTROL_ONLY
controller_calls_image_tool = false
generator_input = SCENE_PROMPT_ONLY
persist_all_results = true
```

CONTROL PLANE은 job을 읽고 queue와 저장 경로를 관리할 수 있다. 그러나 job을 읽은 동일 턴에서 이미지 생성 도구를 호출하면 안 된다.

job을 읽은 뒤 해야 할 일은 현재 prompt의 텍스트를 확보하고 **새 독립 이미지 턴/작업으로 dispatch**하는 것이다.

독립 이미지 턴을 만들 수 없는 실행 환경이면 이미지를 억지로 생성하지 않고 `DISPATCH_BLOCKED`로 중단한다.

---

## 3. ISOLATED GENERATION HARD GATE

이미지 생성 직전에는 다음 조건이 모두 참이어야 한다.

1. 현재 이미지 턴은 새 독립 턴이다.
2. 이 턴에서 GitHub·파일·상태 문서를 읽은 적이 없다.
3. 이 턴에 queue나 job JSON이 들어오지 않았다.
4. 이 턴에 output path나 저장 지시가 들어오지 않았다.
5. 현재 입력은 장면 프롬프트 한 개뿐이다.
6. 한 턴에서 한 장면만 생성한다.

하나라도 거짓이면 이미지 생성 도구를 호출하지 않는다.

```text
SCENE PROMPT
→ image generation
→ returned image
```

이 사이에는 파일 읽기, 상태 보고, 다른 도구 호출, 다음 슬롯 준비를 끼우지 않는다.

### 중요한 금지

다음 방식은 더 이상 사용하지 않는다.

```text
image_job 읽기
→ prompt 파일 읽기
→ 같은 턴에서 이미지 생성
```

마지막으로 읽은 파일이 prompt라고 해서 이전 운영 문맥이 사라지는 것이 아니므로 v2에서는 금지한다.

---

## 4. 생성 즉시 Git 보존

생성된 이미지는 임시 작업 폴더에만 두지 않는다.

**합격·실패 판정 전에 반환 원본을 우선 Git에 보존한다.**

기본 경로:

```text
work/YYYY-MM-DD/image_runs/<slot-id>/attempt-01.<original-ext>
work/YYYY-MM-DD/image_runs/<slot-id>/attempt-01.json
work/YYYY-MM-DD/image_runs/<slot-id>/attempt-02.<original-ext>
work/YYYY-MM-DD/image_runs/<slot-id>/attempt-02.json
...
```

예:

```text
work/2026-07-27/image_runs/01_cover/attempt-01.png
work/2026-07-27/image_runs/01_cover/attempt-01.json
```

원본 확장자는 생성기가 반환한 형식을 우선 보존한다. 발행용 WebP 변환은 원본 보존 뒤 수행한다.

### 4.1 저장 원칙

- 정상 사진뿐 아니라 `CONTEXT_FAILURE` 결과도 저장한다.
- 실패 이미지는 `archive/`에 넣지 않는다.
- 이미지 파일을 먼저 Git에 반영하고 metadata를 즉시 함께 반영한다.
- 가능하면 이미지 + sidecar를 한 커밋으로 저장한다.
- 저장이 완료되기 전 다음 슬롯으로 넘어가지 않는다.
- 반환 이미지를 Git에 보존할 수 없으면 `PERSISTENCE_BLOCKED`로 중단한다. 같은 이미지를 단순 재생성해 대체하지 않는다.

### 4.2 attempt metadata

sidecar JSON 최소 항목:

```json
{
  "slot": "01_cover",
  "attempt": 1,
  "prompt_file": "work/YYYY-MM-DD/image_prompts/01_cover.txt",
  "artifact": "attempt-01.png",
  "verdict": "PENDING_REVIEW",
  "valid_photo_attempt": null,
  "notes": ""
}
```

이미지 저장 후 판정 결과를 `verdict`, `valid_photo_attempt`, `notes`에 반영한다.

---

## 5. PHOTO-SCENE GATE

Git 보존이 끝난 뒤 다음 두 가지를 먼저 본다.

1. 프레임 전체가 하나의 연속된 장면인가?
2. 결과가 사진적 에디토리얼 이미지인가?

둘 다 YES여야 정상 이미지 시도다.

작업 화면, 파일 트리, 문서, UI, 리포트, 대시보드가 주된 구조라면 `CONTEXT_FAILURE`다.

### CONTEXT_FAILURE

- 이미지는 `work/.../image_runs/`에 진단 자료로 보존한다.
- 유효 사진 시도 횟수에는 포함하지 않는다.
- 오염된 이미지 턴에서는 추가 생성하지 않는다.
- CONTROL PLANE으로 돌아가 원인을 기록한다.
- 다음 생성은 반드시 새 독립 IMAGE PLANE 턴으로 시작한다.

같은 오염된 턴에서 부정 프롬프트를 덧붙여 재시도하지 않는다.

---

## 6. 정상 사진 품질과 재시도

PHOTO-SCENE 게이트를 통과한 결과만 시각 품질을 판정한다.

PASS 가능:

- 충분한 디테일과 선명도
- 현실적인 카메라 시점
- 중심 장면이 한눈에 읽힘
- 재질·빛·원근·공간감이 자연스러움
- 기사 주제와 자연스럽게 연결됨
- 실제 지면에서 크롭 가능한 구성
- 눈에 띄는 생성 오류가 없음
- 과도한 광고·기업 홍보용 스톡 이미지 느낌이 아님

한 슬롯의 유효 사진 시도는 기본 최대 3회다.

재시도도 매번 **새 독립 IMAGE PLANE 턴**으로 실행한다.

3회의 유효 사진 시도 뒤에도 통과하지 못하면 `BLOCKED`다.

---

## 7. 섹션별 규칙

### Cover

- 대표 기사와 자연스럽게 연결되는 강한 실제 장면
- 제목 안전영역 고려
- Cover Story 본문 이미지와 다른 거리·구도
- 완성된 잡지 표지가 아니라 배경으로 사용할 독립 사진

### Politics / Politics Deep Dive

완전 무인이다.

프레임 안 어디에도 사람, 얼굴, 실루엣, 손·신체 일부가 없어야 한다. 반사면·화면·사진 속 인물도 허용하지 않는다.

### LIFE SCENE

- 한국의 자연스러운 생활 공간과 평범한 행동
- 광고형 포즈보다 실제 생활 순간
- 생성 전에 가로 `4:3` 또는 세로 `4:5` 중 하나만 확정

### 일반 기사 / DEEP DIVE

생산·유통·업무·생활 서비스·연구 인프라 등 기사에 연결되는 실제 공간과 사물을 우선한다.

정확한 수치·절차·정책 관계는 HTML 조판이 담당한다.

---

## 8. 해상도와 발행 자산

새 생성 목표:

- Cover: 장변 `2200px` 이상
- 나머지 주요 이미지: 장변 `2000px` 이상

`work/.../image_runs/`에는 생성 원본과 실패 후보를 계속 보존할 수 있다.

`archive/YYYY-MM-DD/assets/`에는 **최종 채택본만** 둔다.

발행 단계에서 ACCEPTED attempt를 필요하면 WebP로 변환·크롭하고 다음과 같이 반영한다.

```text
archive/YYYY-MM-DD/assets/cover.webp
archive/YYYY-MM-DD/assets/economy.webp
...
```

---

## 9. 상태

이미지 작업에서 사용하는 상태:

- `READY`
- `DISPATCHED`
- `GENERATED`
- `ACCEPTED`
- `RETRY`
- `BLOCKED`
- `CONTEXT_FAILURE`
- `DISPATCH_BLOCKED`
- `PERSISTENCE_BLOCKED`
- `COMPLETE`

`GENERATED`는 Git 원본 보존 전의 완료 상태가 아니다. 원본이 Git에 저장되어야 해당 attempt가 생성 완료로 간주된다.

---

## 10. 우선순위와 레거시 규칙

이 문서의 v2 격리 규칙은 이전 문서에 남아 있는 다음 레거시 표현보다 우선한다.

```text
job 읽기 → prompt 읽기 → 같은 턴에서 즉시 이미지 생성
```

`jobs/image_job.json`이 `weekly-signal-image-job-v2`이면 반드시 이 v2 계약으로 실행한다.

회차별 결정은 다음이 소유한다.

- `LAYOUT_PLAN.md`: 지면과 슬롯 역할
- `IMAGE_PLAN.md`: 결과 상태와 발행 연결
- `image_prompts/*.txt`: 실제 장면
- `jobs/image_job.json`: CONTROL PLANE queue와 저장 목적지
- `image_runs/`: 생성 결과의 Git 보존 기록
