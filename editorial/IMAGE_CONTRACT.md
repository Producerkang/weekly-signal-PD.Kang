# WEEKLY SIGNAL 이미지 계약 v2.1

이 문서는 WEEKLY SIGNAL의 이미지 준비·생성·검수·저장에 대한 현행 계약이다.

v2에서 시도했던 `CONTROL PLANE과 IMAGE PLANE의 물리적 턴 분리`는 현재 실행 환경에서 자동 dispatch가 불가능해 08:00 작업 자체를 차단했다. v2.1은 **같은 08:00 실행 턴에서 생성하되, 이미지 호출 직전의 의미적 입력을 scene prompt로 제한하는 방식**으로 수정한다.

08:00 실행에서는 `jobs/IMAGE_JOB_V2.md`와 `jobs/image_job.json`을 최우선으로 한다.

---

## 0. 핵심 원칙

1. 08:00 작업은 한 실행 턴에서 `job → prompt → image generation`을 수행할 수 있다.
2. 별도 대화창·하위 턴·독립 IMAGE PLANE 생성은 필수 조건이 아니다.
3. 이미지 생성 장면 지시는 현재 슬롯의 `image_prompts/*.txt` 전문 하나를 그대로 사용한다.
4. prompt를 읽은 뒤 이미지 호출 전에는 운영 설명·상태 보고·다른 슬롯 준비를 끼우지 않는다.
5. job, GitHub, queue, 파일 경로, 상태, 저장 지시를 scene prompt 안에 추가하지 않는다.
6. 운영 개념을 부정문으로 추가하지 않는다. 예: `do not draw GitHub`, `no dashboard` 같은 문구를 새로 덧붙이지 않는다.
7. 생성 결과는 임시 폴더만 사용하지 않고 가능한 경우 Git의 `work/.../image_runs/`에 보존한다.
8. Git 저장 가능 여부는 이미지 생성 자체의 사전 게이트가 아니다.

---

## 1. 07:00 PREPARATION

07:00은 기사와 지면을 읽고 이미지 입력 패키지를 준비한다. 실제 이미지 생성은 하지 않는다.

필수 산출물:

```text
work/YYYY-MM-DD/
├─ LAYOUT_PLAN.md
├─ IMAGE_PLAN.md
├─ image_prompts/
│  ├─ 01_*.txt
│  └─ ...
└─ image_runs/
   └─ README.md

jobs/
├─ IMAGE_JOB_V2.md
└─ image_job.json
```

### scene prompt 파일

각 prompt는 다음만 포함한다.

- 실제 세계의 한 장면
- 중심 피사체·행동·사물
- 카메라 거리·높이·구도
- 빛·재질·원근·공간감
- 필요한 안전영역·비율
- Politics 완전 무인 같은 장면 자체의 하드 제약

포함하지 않는다.

- 프로젝트·저장소·브랜치 정보
- 예약 작업·진행 상태
- 파일 경로·커밋·queue
- output filename
- 저장·업로드·검수 지시
- 작업 보고
- UI·문서·대시보드 구성 설명

---

## 2. `jobs/image_job.json`

job은 08:00 제어 manifest다. 이미지 prompt 그 자체는 아니다.

현행 schema:

```text
weekly-signal-image-job-v2.1
```

현행 mode:

```text
INLINE_SCENE_EXECUTION
```

주요 의미:

```text
controller_calls_image_tool = true
scene_prompt_is_generation_instruction = true
one_slot_at_a_time = true
no_operational_rewrite_before_image_call = true
persist_generated_results = true
persistence_must_not_block_generation = true
```

### 날짜 필드

`run_date`와 `issue_start`를 분리한다.

- `run_date`: 실제 예약 작업 실행 날짜
- `issue_start`: 현재 제작 또는 재시도 중인 매거진 회차 시작일

따라서 실행일과 `work/` 경로 날짜가 다를 수 있으며 이것만으로 오류가 아니다.

---

## 3. 08:00 INLINE SCENE EXECUTION

기본 순서:

```text
image_job.json 확인
→ READY item 하나 선택
→ 그 item의 prompt 파일 읽기
→ 즉시 이미지 1장 생성
→ 결과 확보
→ 가능한 경우 Git 저장
→ PHOTO-SCENE / 품질 판정
→ 상태 갱신
→ 다음 슬롯
```

### prompt를 읽은 뒤 이미지 반환 전까지 금지

- 다른 repository 파일 읽기
- 상태 문서 열기
- 다른 queue item 확인
- job 내용 재설명
- 작업 보고 작성
- scene prompt 요약·번역·재작성
- 저장 경로나 Git 용어를 이미지 장면 지시에 추가

핵심은 **마지막 의미적 생성 지시가 scene prompt 자체가 되게 하는 것**이다.

### 폐기된 v2 규칙

다음은 더 이상 적용하지 않는다.

```text
CONTROL_ONLY
controller_calls_image_tool = false
새 독립 IMAGE PLANE 필수
job을 읽은 턴에서는 이미지 생성 금지
독립 턴 생성 불가 → DISPATCH_BLOCKED
```

---

## 4. 생성 결과 Git 보존

목표 경로:

```text
work/<issue_start>/image_runs/<slot-id>/attempt-01.<ext>
work/<issue_start>/image_runs/<slot-id>/attempt-01.json
```

정상 후보뿐 아니라 `CONTEXT_FAILURE`도 보존 대상이다.

### 저장 원칙

- 임시 폴더만을 최종 저장소로 사용하지 않는다.
- 최종 채택 전 실패 이미지는 `archive/`에 넣지 않는다.
- 실행 환경이 생성 artifact를 repository write 단계에 전달할 수 있으면 즉시 Git에 반영한다.
- 즉시 전달이 불가능한 경우 저장 불가를 별도 기록하되, 이미지 생성 자체를 사전에 차단하지 않는다.
- 저장된 결과는 후속 진단과 비교에 사용한다.

sidecar JSON 예:

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

---

## 5. PHOTO-SCENE GATE

다음 두 가지를 먼저 본다.

1. 프레임 전체가 하나의 연속된 장면인가?
2. 결과가 사진적 에디토리얼 이미지인가?

둘 다 YES여야 정상 사진 시도다.

작업 화면, 파일 트리, 문서, UI, 리포트, 대시보드가 주된 구조라면 `CONTEXT_FAILURE`다.

### CONTEXT_FAILURE 처리

- 가능하면 실패 이미지도 `image_runs/`에 저장한다.
- 유효 사진 시도 횟수에는 포함하지 않는다.
- 원래 scene prompt에 운영 부정문을 덧붙이지 않는다.
- 같은 prompt를 유지한 채 다음 재시도를 수행한다.
- 반복 발생 시 prompt 자체보다 실행 문맥 문제를 우선 의심한다.

---

## 6. 정상 사진 품질과 재시도

PHOTO-SCENE 게이트를 통과한 결과만 유효 사진 시도로 계산한다.

PASS 기준:

- 충분한 디테일과 선명도
- 현실적인 카메라 시점
- 중심 장면이 한눈에 읽힘
- 재질·빛·원근·공간감이 자연스러움
- 기사 주제와 자연스럽게 연결됨
- 실제 지면에서 크롭 가능
- 눈에 띄는 생성 오류 없음
- 과도한 광고·기업 홍보용 스톡 이미지 느낌이 아님

슬롯당 유효 사진 시도는 기본 최대 3회다.

3회 뒤에도 통과하지 못하면 `BLOCKED`다.

---

## 7. 섹션별 규칙

### Cover

- 대표 기사와 연결되는 강한 실제 장면
- 제목 안전영역 고려
- Cover Story 이미지와 다른 거리·구도
- 완성된 잡지 표지가 아닌 독립 사진

### Politics / Politics Deep Dive

완전 무인이다.

프레임 안 어디에도 사람, 얼굴, 실루엣, 손·신체 일부가 없어야 한다. 반사면·화면·사진 속 인물도 허용하지 않는다.

### LIFE SCENE

- 한국의 자연스러운 생활 공간과 평범한 행동
- 광고형 포즈보다 실제 생활 순간
- 생성 전에 가로 `4:3` 또는 세로 `4:5` 중 하나 확정

### 일반 기사 / DEEP DIVE

기사 의미에 연결되는 실제 공간·사물·행동을 우선한다. 정확한 수치·절차·정책 관계는 HTML 조판이 담당한다.

---

## 8. 해상도와 발행 자산

새 생성 목표:

- Cover: 장변 `2200px` 이상
- 나머지 주요 이미지: 장변 `2000px` 이상

`work/.../image_runs/`에는 원본과 실패 후보를 보존할 수 있다.

`archive/YYYY-MM-DD/assets/`에는 최종 채택본만 둔다.

---

## 9. 상태

현행 이미지 상태:

- `READY`
- `GENERATED`
- `ACCEPTED`
- `RETRY`
- `BLOCKED`
- `CONTEXT_FAILURE`
- `PERSISTENCE_PENDING`
- `PERSISTENCE_BLOCKED`
- `COMPLETE`

`DISPATCH_BLOCKED`는 v2.1에서 폐기한다.

---

## 10. 최종 원칙

좋은 이미지 파이프라인의 기준은 문서상 완벽한 격리가 아니라 **실제로 08:00 작업이 실행되고, scene prompt가 이미지 장면의 주된 지시가 되며, 결과를 추적 가능하게 보존하는 것**이다.
