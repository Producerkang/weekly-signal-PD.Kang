# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 작업 진입점과 이미지 격리

일반 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작한다.

이미지 작업은 `jobs/image_job.json`을 CONTROL PLANE manifest로 사용한다.

다만 **manifest를 읽은 턴은 이미지 생성 턴이 아니다.**

이미지 생성은 다음 경계를 지켜야 한다.

```text
CONTROL PLANE
job / queue / GitHub / prompt path
        ↓ isolated dispatch
IMAGE PLANE
scene prompt text only
        ↓
image generation
        ↓
PERSISTENCE PLANE
returned artifact → Git work/.../image_runs/
```

`jobs/image_job.json`이 `weekly-signal-image-job-v2`이면 `editorial/IMAGE_CONTRACT.md` v2와 `jobs/IMAGE_JOB_V2.md`가 이미지 실행의 최우선 기준이다.

## 2. GitHub 작업영역

- `work/YYYY-MM-DD/` = 제작 상태와 검증·흐름설계·원고·지면·이미지 prompt·이미지 생성 기록
- `jobs/` = 이미지 CONTROL PLANE manifest와 실행 계약
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본

`work/`와 `jobs/`는 GitHub Pages 발행 대상이 아니다.

이미지 생성 결과는 `work/YYYY-MM-DD/image_runs/`에 Git으로 보존한다.

## 3. 기본 상태

각 회차의 `WORK_STATE.md`가 전체 제작 상태를 소유한다.

일반 상태:

- `PENDING`
- `VERIFYING`
- `FLOWING`
- `WRITING`
- `IN_REVIEW`
- `COMPLETE`

이미지 상태는 `editorial/IMAGE_CONTRACT.md`를 따른다.

주요 이미지 상태:

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

## 11. 월요일 07:00 — LAYOUT_PLAN + 이미지 입력 패키지 작성

07:00은 **텍스트·파일 작업 전용 독립 턴**이다. 실제 이미지를 생성하지 않는다.

### 11.1 입력

- 현재 회차 `WORK_STATE.md`
- 완성된 원고
- `editorial/LAYOUT_SYSTEM.md`
- `editorial/IMAGE_CONTRACT.md`
- `editorial/ISSUE_QUALITY_GATE.md`
- 필요한 템플릿 계약

### 11.2 필수 산출물

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
├─ IMAGE_JOB_V2.md
└─ image_job.json
```

완료 상태:

- `LAYOUT_PLAN.md`: `COMPLETE`
- `IMAGE_PLAN.md`: `READY`
- 생성 대상 슬롯마다 scene prompt 파일 1개
- `jobs/image_job.json`: `weekly-signal-image-job-v2`, `READY`, `CONTROL_ONLY`
- `WORK_STATE.md`: 이미지 CONTROL dispatch 대기 상태

### 11.3 LAYOUT_PLAN

1. 최종 DOM 순서 확정
2. DATA/WATCH 필요성 판정
3. 기사별 지면 리듬 선택
4. 이미지 슬롯 필요성 판정
5. 각 이미지의 지면 역할과 배치 결정
6. 1440 / 1366 / 1024 / 390 반응형 구조 설계

### 11.4 IMAGE_PLAN

각 슬롯에 최소한 다음을 기록한다.

- 순서
- 슬롯명
- 필요성
- prompt 파일 경로
- `image_runs/` 저장 디렉터리
- 최종 발행 파일명
- 상태
- 유효 사진 시도 횟수
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
- Politics 완전 무인 같은 장면 자체의 하드 제약

운영 상태, 저장소 구조, queue, output path, 저장 지시는 넣지 않는다.

### 11.6 image_job v2

`jobs/image_job.json`은 이미지 모델용 prompt가 아니라 CONTROL PLANE manifest다.

최소 구조:

```json
{
  "schema": "weekly-signal-image-job-v2",
  "state": "READY",
  "mode": "CONTROL_ONLY",
  "isolation": {
    "controller_calls_image_tool": false,
    "generator_input": "SCENE_PROMPT_ONLY",
    "one_scene_per_turn": true
  },
  "persistence": {
    "required": true,
    "persist_all_results": true,
    "run_root": "work/YYYY-MM-DD/image_runs"
  },
  "queue": [
    {
      "id": "01_cover",
      "prompt": "work/YYYY-MM-DD/image_prompts/01_cover.txt",
      "run_dir": "work/YYYY-MM-DD/image_runs/01_cover",
      "final_output": "cover.webp",
      "state": "READY",
      "next_attempt": 1
    }
  ]
}
```

### 11.7 07:00 종료

07:00에서는 이미지 생성 도구를 호출하지 않는다.

`LAYOUT_PLAN + IMAGE_PLAN + scene prompts + v2 controller manifest`가 완료되면 종료한다.

## 12. 월요일 08:00 — 이미지 CONTROL / IMAGE / PERSISTENCE

08:00은 하나의 오염된 턴에서 모든 것을 처리하지 않는다.

### 12.1 CONTROL PLANE

CONTROL 턴은:

1. `jobs/image_job.json`을 읽는다.
2. schema가 `weekly-signal-image-job-v2`인지 확인한다.
3. READY queue item 하나를 선택한다.
4. 해당 prompt 파일의 텍스트를 확보한다.
5. 그 텍스트만 새 독립 IMAGE PLANE 턴/작업의 입력으로 dispatch한다.

**CONTROL 턴에서는 이미지 생성 도구를 호출하지 않는다.**

이미지 생성 전에 repo 파일을 이미 읽은 턴은 IMAGE PLANE으로 재사용할 수 없다.

### 12.2 ISOLATED IMAGE PLANE

새 IMAGE PLANE 턴의 입력은 scene prompt 전문 하나뿐이다.

이 턴에서는 이미지 생성 전 다음을 하지 않는다.

- GitHub 접근
- 저장소 파일 읽기
- job/queue/state 확인
- output path 확인
- 작업 보고
- 다음 슬롯 준비
- 저장·업로드 설명

```text
scene prompt text only
→ image generation
→ returned image
```

한 턴에서 한 장면만 생성한다.

독립 IMAGE PLANE 턴을 만들 수 없으면 `DISPATCH_BLOCKED`로 중단한다. CONTROL 턴에서 대신 생성하지 않는다.

### 12.3 PERSISTENCE PLANE

이미지가 반환된 뒤에는 제어 문맥을 다시 사용할 수 있다.

가장 먼저 반환 원본을 Git에 저장한다.

```text
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.<original-ext>
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.json
```

- 정상 사진 후보 저장
- 품질 실패 후보 저장
- `CONTEXT_FAILURE` 결과도 저장
- 가능하면 이미지와 sidecar를 같은 커밋으로 반영
- Git 저장 완료 전 다음 슬롯 금지
- 저장할 수 없으면 `PERSISTENCE_BLOCKED`

### 12.4 PHOTO-SCENE GATE

Git 보존 뒤 다음을 판정한다.

1. 프레임 전체가 하나의 연속된 장면인가?
2. 사진적 에디토리얼 이미지인가?

작업 화면·파일 트리·문서·UI·리포트·대시보드가 주된 구조라면 `CONTEXT_FAILURE`다.

이 경우:

- 저장된 실패 이미지는 유지
- 유효 사진 시도 횟수는 증가시키지 않음
- 오염된 IMAGE PLANE 턴에서 추가 생성 금지
- 다음 시도는 새 독립 IMAGE PLANE 턴

### 12.5 정상 사진 재시도

PHOTO-SCENE을 통과한 정상 사진만 유효 시도로 계산한다.

슬롯당 기본 최대 3회이며, 매 재시도도 새 독립 IMAGE PLANE 턴이다.

## 13. 월요일 09:00 — HTML 제작

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제
- `image_runs/`의 ACCEPTED attempt를 발행용 자산으로 변환해 `archive/.../assets/`에 반영

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
- 이미지 계획 실패 → 07:00 해당 prompt와 controller manifest 수정
- 독립 IMAGE PLANE 생성 불가 → `DISPATCH_BLOCKED`
- 생성 artifact Git 저장 불가 → `PERSISTENCE_BLOCKED`
- 정상 이미지 품질 실패 → 해당 슬롯 새 독립 턴 재시도
- `CONTEXT_FAILURE` → 실패 이미지 Git 보존 후 해당 IMAGE PLANE 종료, 새 독립 턴 재시도

이미지 실패를 이유로 전체 지면 설계를 다시 하지 않는다.

## 17. 최종 반영

1. 원고·지면·REQUIRED 이미지·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용
