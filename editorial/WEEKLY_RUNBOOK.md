# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 예약 작업 진입점 규칙

예약 작업은 먼저 **해당 작업의 진입점**을 따른다.

### 기본

일반 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작한다.

### 전용 진입점

전용 실행 파일이 정의된 작업은 `WORK_STATE.md`보다 그 파일을 우선한다.

현재 유일한 전용 진입점:

```text
월요일 08:00 이미지 제작
→ jobs/image_job.json
```

08:00 이미지 제작은 시작 전에 `WORK_STATE.md`, README, 이 런북, `IMAGE_PLAN.md`, `LAYOUT_PLAN.md`, 기사 원고를 읽지 않는다.

`jobs/image_job.json`이 없거나 `state != READY`이면 다른 문서로 우회하지 않고 이미지 작업을 중단한다.

이미지 생성이 모두 끝난 뒤에만 다시 제어 문맥으로 돌아와 `IMAGE_PLAN.md`, `WORK_STATE.md`를 갱신한다.

## 2. GitHub 작업영역

- `work/YYYY-MM-DD/` = 제작 상태와 검증·흐름설계·원고·지면·이미지 계획
- `jobs/` = 전용 예약 작업의 실행 인계 파일
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본

`work/`와 `jobs/`는 발행 대상이 아니다.

## 3. 기본 상태

각 회차의 `WORK_STATE.md`가 전체 제작 상태를 소유한다.

일반 상태:

- `PENDING`
- `VERIFYING`
- `FLOWING`
- `WRITING`
- `IN_REVIEW`
- `COMPLETE`

이미지 슬롯 상태는 `editorial/IMAGE_CONTRACT.md`를 따른다.

## 4. 기본 회차 구성

별도 지시가 없으면 다음 구성을 목표로 한다.

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

`EDITOR'S PICK`은 폐기된 레거시 섹션이다. 다시 만들지 않는다.

## 5. 일반 기사 제작

기본 순서:

```text
Cover Story
→ Economy
→ Politics
→ Society
→ Tech
```

기사 하나마다:

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

현재 일반 기사 하나를 COMPLETE로 닫기 전에는 다음 일반 기사 본문을 작성하지 않는다.

## 6. 일반 기사 전체 비교

Cover Story와 Economy·Politics·Society·Tech가 모두 COMPLETE가 된 뒤 다섯 기사를 한꺼번에 비교한다.

- 주제·설명 중복
- 같은 결론·수사 반복
- 분야별 깊이 편차
- 출처 역할 편중
- 빠진 배경지식
- FLOW가 같은 템플릿으로 수렴하지 않는지
- 한 호 전체 정보 밀도

수정이 필요하면 해당 기사만 IN_REVIEW로 되돌린다.

## 7. DEEP DIVE

일반 기사 전체가 닫힌 뒤 심화가 필요한 기사만 선택한다.

필수 확인:

- 일반 기사가 이미 답한 질문
- DEEP DIVE가 새로 답할 단 하나의 질문
- 새 핵심 주장 최소 3개
- 일반 기사에 없던 독립 출처 최소 2개
- 일반 기사와 다른 심화 방식

같은 정의·원인·경로·결론을 반복하면 실패다.

## 8. LIFE SCENE

`editorial/LIFE_SCENE_STANDARD.md`의 독립 제작 알고리즘을 따른다.

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

이미지 비율은 07:00 입력 패키지 작성에서 가로 `4:3` 또는 세로 `4:5` 중 하나를 확정한다.

## 9. PROLOGUE

일반 기사·DEEP DIVE·LIFE SCENE이 모두 COMPLETE가 된 뒤 작성한다.

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

PROLOGUE는 기본적으로 별도 생성 이미지를 요구하지 않는다.

## 10. EDITOR'S AFTERWORD

PROLOGUE까지 닫힌 뒤 마지막 편집 원고로 작성한다.

```text
ISSUE READBACK
→ MEMORY TRACE
→ REFLECTION DRAFT
→ RECAP CUT
→ METHOD REPORT CUT
→ AFTERTASTE PASS
→ COMPLETE
```

EDITOR'S AFTERWORD는 기본적으로 별도 생성 이미지를 요구하지 않는다.

## 11. 월요일 07:00 — LAYOUT_PLAN + 이미지 실행 패키지 작성

07:00은 **텍스트·파일 작업 전용 독립 턴**이다. 실제 이미지를 생성하지 않는다.

### 11.1 입력

- 현재 회차 `WORK_STATE.md`
- 완성된 01~09 원고
- `editorial/LAYOUT_SYSTEM.md`
- `editorial/IMAGE_CONTRACT.md`
- `editorial/ISSUE_QUALITY_GATE.md`
- 필요한 템플릿 계약

### 11.2 필수 산출물

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

완료 상태:

- `LAYOUT_PLAN.md`: `COMPLETE`
- `IMAGE_PLAN.md`: `READY`
- 생성 대상 슬롯마다 prompt 파일 1개
- `jobs/image_job.json`: `READY`
- `WORK_STATE.md`: 08:00 전용 진입점을 가리키는 최소 인계 상태

### 11.3 LAYOUT_PLAN

1. 최종 DOM 순서 확정
2. DATA/WATCH 필요성 판정
3. 기사별 지면 리듬 선택
4. 이미지 슬롯 필요성 판정
5. 각 이미지의 지면 역할과 배치 결정
6. 1440 / 1366 / 1024 / 390 반응형 구조 설계

### 11.4 IMAGE_PLAN

`IMAGE_PLAN.md`는 결과 상태와 발행 연결을 위한 제어 문서다.

각 슬롯에 최소한 다음을 기록한다.

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

### 11.5 image_prompts

각 슬롯의 실제 생성 문장은 독립 `.txt` 파일 하나에 저장한다.

프롬프트에는 이미지로 보일 내용만 담는다.

- 실제 세계의 한 장면
- 중심 피사체·행동·사물
- 카메라 거리·구도
- 빛·재질·공간감
- 필요한 안전영역과 비율
- Politics 완전 무인 같은 필요한 하드 제약

운영 상태, 저장소 구조, 기사 제작 과정은 넣지 않는다.

### 11.6 jobs/image_job.json

07:00은 prompt 파일을 모두 확정한 뒤 **마지막 단계로** `jobs/image_job.json`을 생성 또는 교체한다.

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
      "prompt": "work/YYYY-MM-DD/image_prompts/01_*.txt",
      "output": "example.webp"
    }
  ]
}
```

`queue`에는 실제 생성할 슬롯만 넣는다. 장면 전문은 넣지 않는다.

### 11.7 07:00 WORK_STATE 인계 규칙

07:00 완료 시 `WORK_STATE.md`를 장문의 제작 보고서로 남기지 않는다.

08:00이 실수로 이 파일을 먼저 읽더라도 오염이 최소가 되도록 다음 정도의 **최소 인계 상태**만 남긴다.

```text
STAGE: IMAGE_GENERATION
ENTRYPOINT: jobs/image_job.json
LAYOUT: COMPLETE
IMAGES: PENDING
NEXT: execute dedicated image job
```

완료된 원고 세부 제목·체크리스트·진행률·커밋 로그를 이 시점의 WORK_STATE에 반복하지 않는다.

### 11.8 07:00 종료 조건

`LAYOUT_PLAN COMPLETE + IMAGE_PLAN READY + prompt files complete + image_job READY + WORK_STATE handoff`가 끝나면 턴을 종료한다.

07:00에서는 이미지 생성 도구를 호출하지 않는다.

## 12. 월요일 08:00 — 전용 이미지 작업

08:00은 **전용 진입점 기반 이미지 생성 턴**이다.

### 12.1 시작점

유일한 시작점:

```text
jobs/image_job.json
```

`WORK_STATE.md`를 먼저 읽지 않는다.

`jobs/image_job.json`이 없거나 `state != READY`이면 작업을 중단한다. `WORK_STATE.md`나 기사 원고를 읽어 큐를 복원하지 않는다.

### 12.2 생성 구간 읽기 범위

생성 구간에서는 다음만 사용한다.

1. `jobs/image_job.json`
2. 현재 queue item이 지정한 prompt `.txt`
3. 다음 queue item의 prompt `.txt`

`editorial/IMAGE_CONTRACT.md`도 이미지 생성 직전에 다시 읽지 않는다. 07:00이 필요한 품질·섹션 규칙을 prompt에 이미 반영해야 한다.

### 12.3 생성 단위

```text
1 QUEUE ITEM = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

기본 실행:

```text
image_job 확인
→ queue[0].prompt 읽기
→ 즉시 이미지 1장 생성
→ 실제 픽셀 판정
→ 필요하면 사진 품질 재시도
→ queue[1].prompt 읽기
→ 즉시 이미지 1장 생성
→ 반복
```

prompt 파일을 읽은 뒤 이미지가 반환될 때까지:

- 다른 저장소 파일을 읽지 않는다.
- 작업 보고를 작성하지 않는다.
- 상태 문서를 열지 않는다.
- 다른 슬롯 정보를 함께 넣지 않는다.

### 12.4 상태 기록 시점

이미지 생성 도중에는 `IMAGE_PLAN.md`나 `WORK_STATE.md`를 열어 상태를 기록하지 않는다.

모든 이미지 생성 호출이 끝난 뒤 한 번에 제어 단계로 돌아와:

1. `IMAGE_PLAN.md` 갱신
2. `jobs/image_job.json` 상태 갱신
3. `WORK_STATE.md` 갱신

순서로 기록한다.

이 원칙은 첫 이미지와 다음 이미지 사이에 운영 문맥이 끼어드는 것을 막기 위한 것이다.

### 12.5 CONTEXT_FAILURE

결과가 사진 한 장이 아니라 작업 화면·문서·UI·리포트형 구조이면 `CONTEXT_FAILURE`다.

이 경우:

- 결과 저장 금지
- 유효 이미지 시도로 계산하지 않음
- 남은 큐 실행 중단
- 같은 대화에서 재생성 금지
- 제어 단계로 돌아가 job 상태만 `CONTEXT_FAILURE`로 기록

### 12.6 정상 이미지 품질

정상 사진 결과의 품질·Politics/LIFE SCENE·해상도·재시도 기준은 `editorial/IMAGE_CONTRACT.md`를 따른다.

## 13. 월요일 09:00 — HTML 제작

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제

최종 발행은 모든 REQUIRED 이미지가 반영되고 화면 검수를 통과해야 가능하다.

## 14. 실제 화면 검수

다음 화면을 실제 렌더링하거나 캡처해 확인한다.

- 1440px 이상
- 1366px
- 1024px
- 390px

확인 항목:

- Cover 제목 안전영역과 이미지 선명도
- 기본 구성과 Contents 일치
- LIFE SCENE → PROLOGUE → 본 기사 흐름
- 기사별 시각적 차이
- 이미지 디테일과 실제 크롭
- Politics 이미지 완전 무인
- 표·카드·제목 오버플로
- 링크와 상대경로
- EDITOR'S AFTERWORD → Sources 마감 흐름

## 15. 보조 구조 검사

필요하면 다음을 직접 실행한다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

이 검사는 기술적 실수를 찾는 보조 수단이다.

## 16. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 이미지 계획 실패 → 07:00의 해당 prompt 파일과 image job만 수정
- 정상 이미지 품질 실패 → 해당 슬롯 재시도
- `CONTEXT_FAILURE` → 같은 08:00 대화 중단 후 새 이미지 턴

이미지 실패를 이유로 전체 지면 설계를 다시 하지 않는다.

## 17. 최종 반영

1. 원고·지면·REQUIRED 이미지·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용
