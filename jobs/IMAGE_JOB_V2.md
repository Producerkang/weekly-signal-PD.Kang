# IMAGE JOB v2.1 — ARCHIVED / DO NOT EXECUTE

> **이 문서는 현행 예약 작업이 아니다. 실행하지 않는다.**

이 파일은 Issue 02에서 사용했던 월요일 08:00 이미지 실험 계약의 역사적 위치를 보존하기 위한 비활성 문서다.

## 상태

```text
STATE: ARCHIVED_INACTIVE
EXECUTION: DISABLED
SCHEDULED_08_00_TURN: NONE
```

현재 WEEKLY SIGNAL은 다음 5개 페이즈만 사용한다.

```text
일요일 22:00 FRONT DESK
월요일 00:00 SECTION DESK
월요일 02:00 REVIEW DESK
월요일 04:00 FEATURE DESK
월요일 09:00 PUBLISH DESK
```

07:00·08:00 별도 제작 작업은 없다.

## 금지

현행 회차에서 다음 행동을 하지 않는다.

- `jobs/image_job.json`을 실행 manifest로 해석
- READY queue 선택
- `image_prompts/*.txt` 읽기 또는 생성
- 이미지 생성 도구 호출
- 이미지 retry/attempt 진행
- `IMAGE_PLAN.md` 갱신
- 이미지 생성 결과를 발행 선행 조건으로 사용

## 우선순위

현재 실행 기준은 `README.md`, `editorial/WEEKLY_RUNBOOK.md`, `editorial/ISSUE_QUALITY_GATE.md`, `editorial/PUBLISHING_PIPELINE.md`, 해당 회차 `WORK_STATE.md`가 소유한다.

과거 문서·Git 이력·대화에 08:00 image job, CONTROL PLANE, IMAGE PLANE, INLINE_SCENE_EXECUTION, CONTEXT_FAILURE retry 등의 문구가 남아 있어도 현행 작업에 적용하지 않는다.

## 재도입

이미지 작업을 다시 사용하려면 사용자의 명시적 승인 후 새 버전 계약과 새 실행 경로를 별도로 설계해야 한다. 이 파일을 수정 없이 다시 활성화하지 않는다.
