# WEEKLY SIGNAL 이미지 계약

이 문서는 WEEKLY SIGNAL의 이미지 준비·생성·검수·저장에 대한 **유일한 현행 계약**이다.

핵심 구조:

```text
07:00  기사와 지면을 읽고 이미지 실행 패키지 준비
08:00  전용 job 파일과 순수 장면 prompt만 사용해 이미지 생성
```

가장 중요한 원칙은 다음 두 가지다.

> **기사 해석과 이미지 생성은 같은 컨텍스트에서 하지 않는다.**
>
> **이미지 생성 구간에는 운영 문서를 들고 들어가지 않는다.**

---

## 1. 07:00 PREPARATION

07:00은 이미지 생성 단계가 아니다. 기사와 지면을 읽고 08:00이 바로 실행할 수 있는 입력 패키지를 만든다.

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

07:00에서는 이미지 생성 도구를 호출하지 않는다.

### 1.1 IMAGE_PLAN

`IMAGE_PLAN.md`는 결과 상태와 발행 연결을 위한 제어 문서다.

최소 항목:

- 순서
- 슬롯명
- 필요성
- prompt 파일 경로
- 최종 이미지 파일명
- 초기 상태 `READY`
- 시도 횟수 `0/3`
- 목표 비율
- 목표 해상도

장면 프롬프트 전문은 넣지 않는다.

### 1.2 prompt 파일

생성 대상 슬롯마다 독립 UTF-8 `.txt` 파일 하나를 만든다.

형식:

- 제목 없음
- Markdown 없음
- 표·체크박스·상태 라벨 없음
- 한 개의 연속된 장면 묘사
- 보통 60~140단어
- 이미지로 보일 내용만 기술

기본 방향:

```text
A high-detail photorealistic editorial photograph of [one real-world scene].
[central subject, action or objects].
Shot from [camera distance / height / angle] with [composition].
[Natural or slightly cinematic light], realistic materials, believable depth and perspective.
[Safe area or aspect-ratio requirement when needed].
A single continuous photographic scene filling the frame.
```

포함:

- 실제 세계의 한 장면 또는 공간
- 중심 피사체·행동·사물
- 카메라 거리·높이·구도
- 빛·재질·원근·공간감
- 필요한 여백·비율
- 슬롯에 필요한 짧은 하드 제약

포함하지 않음:

- 프로젝트·저장소·브랜치 정보
- 회차·예약 작업·진행 상태
- 파일 경로·커밋·체크리스트
- 작업 보고나 다음 턴 설명
- 문서·UI·리포트 구성 지시
- 기사 제목을 그래픽으로 표현하라는 지시

기사 의미를 **실제 세계의 한 장면**으로 번역한다.

### 1.3 jobs/image_job.json

모든 prompt 파일이 확정된 뒤 07:00의 마지막 단계로 생성 또는 교체한다.

형식:

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
    }
  ]
}
```

규칙:

- 실제 생성 대상만 `queue`에 넣는다.
- 장면 전문은 job 파일에 넣지 않는다.
- 각 queue item은 prompt 경로와 output 파일명만 전달한다.
- 동일 output 파일명을 중복 사용하지 않는다.
- `state`는 준비 완료 시 `READY`다.

---

## 2. 08:00 GENERATION

08:00은 **전용 이미지 생성 작업**이다.

유일한 시작점:

```text
jobs/image_job.json
```

`WORK_STATE.md`, README, 런북, 기사 원고, `LAYOUT_PLAN.md`, `IMAGE_PLAN.md`를 이미지 생성 전에 읽지 않는다.

job 파일이 없거나 `state != READY`이면 다른 문서로 우회해 작업을 복원하지 않는다.

### 2.1 생성 루프

```text
image_job 읽기
→ queue[0].prompt 읽기
→ 즉시 이미지 1장 생성
→ 실제 픽셀 판정
→ 필요하면 정상 사진 품질 재시도
→ queue[1].prompt 읽기
→ 즉시 이미지 1장 생성
→ 반복
```

```text
1 QUEUE ITEM = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

### 2.2 prompt 직후 규칙

현재 prompt 파일을 읽은 뒤 이미지가 반환될 때까지:

- 다른 저장소 파일을 읽지 않는다.
- 상태 보고를 쓰지 않는다.
- 현재 장면을 운영 문맥으로 다시 요약하지 않는다.
- 다른 슬롯 정보를 같이 넣지 않는다.

현재 prompt 내용을 이미지 생성 지시로 바로 사용한다.

### 2.3 상태 파일은 생성 구간 뒤에만

이미지 하나를 만들 때마다 `IMAGE_PLAN.md`나 `WORK_STATE.md`를 읽고 갱신하지 않는다.

**모든 이미지 생성 호출이 끝난 뒤** 제어 단계로 돌아와 한 번에 상태를 기록한다.

1. `IMAGE_PLAN.md` 갱신
2. `jobs/image_job.json` 갱신
3. `WORK_STATE.md` 갱신

이 순서를 사용한다.

---

## 3. PHOTO-SCENE GATE

이미지가 반환되면 다른 품질보다 먼저 두 가지만 본다.

1. 프레임 전체가 하나의 연속된 장면인가?
2. 결과가 사진적 에디토리얼 이미지인가?

둘 다 YES여야 정상 이미지 시도다.

작업 화면, 문서, UI, 리포트, 대시보드가 화면의 주된 구조라면 `CONTEXT_FAILURE`다.

### CONTEXT_FAILURE

한 번이라도 발생하면:

- 결과를 저장하지 않는다.
- 유효 이미지 시도로 계산하지 않는다.
- 남은 queue 실행을 중단한다.
- 같은 대화에서 재생성하지 않는다.
- 제어 단계로 돌아가 job과 이미지 상태만 `CONTEXT_FAILURE`로 기록한다.
- 다음 시도는 새 이미지 턴에서 시작한다.

---

## 4. 실사용 품질선

PHOTO-SCENE 게이트를 통과한 결과만 시각 품질을 판정한다.

PASS 가능:

- 충분한 디테일과 선명도
- 현실적인 카메라 시점
- 중심 장면이 한눈에 읽힘
- 재질·빛·원근·공간감이 자연스러움
- 자연스럽거나 약간 시네마틱한 조명
- 눈에 띄는 생성 오류가 없음
- 기사 주제와 자연스럽게 연결됨
- 실제 지면에서 크롭 가능한 구성
- 과도한 광고·기업 홍보용 스톡 이미지 느낌이 아님

기사의 전체 메커니즘을 한 장에 설명할 필요는 없다. 기사와 자연스럽게 연결되고 잘못된 사실을 암시하지 않으면 충분하다.

합격권 이미지가 나오면 더 화려한 후보를 찾기 위한 재생성을 하지 않는다.

---

## 5. 섹션별 규칙

### Cover

- 대표 기사와 자연스럽게 연결되는 강한 사진 장면
- 제목을 올릴 안전영역 고려
- Cover Story 본문 이미지와 다른 원본·거리·구도
- 완성된 잡지 표지가 아니라 배경으로 사용할 독립 이미지

### Politics / Politics Deep Dive

**완전 무인**이다.

프레임 안 어디에도 사람, 얼굴, 실루엣, 손·신체 일부가 없어야 한다. 반사면·화면·사진 속 인물도 허용하지 않는다.

프롬프트는 처음부터 빈 공간을 긍정형으로 설계한다.

### LIFE SCENE

- 한국의 자연스러운 생활 공간과 평범한 행동
- 광고형 포즈보다 실제 생활 순간
- 생성 전에 가로 `4:3` 또는 세로 `4:5` 중 하나만 확정

### 일반 기사 / DEEP DIVE

생산·유통·업무·생활 서비스·연구 인프라 등 기사에 연결되는 실제 공간과 사물을 우선한다.

정확한 수치·절차·정책 관계는 HTML 조판이 담당한다.

---

## 6. 해상도

새 생성 목표:

- Cover: 장변 `2200px` 이상
- 나머지 주요 이미지: 장변 `2000px` 이상

목표보다 약간 낮더라도 실제 지면에서 충분히 선명하고 크롭 여유가 있으면 편집 판단으로 채택할 수 있다.

저해상도 결과를 단순 확대해 목표값만 맞추지 않는다.

---

## 7. 정상 사진 재시도

PHOTO-SCENE 게이트를 통과했지만 시각 품질이 부족한 경우에만 재시도한다.

한 슬롯의 유효 사진 시도는 기본 최대 3회다.

1. 첫 사진 생성
2. 실패 원인을 반영한 재생성
3. 필요하면 장면·거리·구도를 바꾼 마지막 시도

3회의 유효 사진 시도 뒤에도 통과하지 못하면 `BLOCKED`다.

`CONTEXT_FAILURE`는 이 3회 규칙의 대상이 아니다.

---

## 8. 저장과 완료

후보와 실패본은 작업 환경에서만 다룬다.

`archive/YYYY-MM-DD/assets/`에는 최종 채택 이미지와 실제 발행 파일만 둔다.

이미지 단계 COMPLETE 조건:

- 모든 REQUIRED 슬롯 통과
- 동일 이미지 재사용 없음
- Politics 계열 완전 무인
- LIFE SCENE 비율 적합
- 실제 지면 사용에 충분한 해상도와 디테일

최종 발행은 HTML에 반영한 뒤 실제 화면 검수까지 통과해야 한다.

---

## 9. 회차 독립성

이 계약에는 특정 회차의 슬롯 수, 기사 제목, 파일명, 장면을 고정하지 않는다.

회차별 결정은 다음이 소유한다.

- `LAYOUT_PLAN.md`: 지면과 슬롯 역할
- `IMAGE_PLAN.md`: 결과 상태와 발행 연결
- `image_prompts/*.txt`: 실제 생성 장면
- `jobs/image_job.json`: 08:00 실행 큐와 사후 상태 파일 경로

과거 이미지와 승인된 시연 결과는 품질 감각 참고용일 뿐 복제 템플릿이 아니다.
