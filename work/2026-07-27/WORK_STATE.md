# ISSUE 02 WORK STATE

```text
STAGE: IMAGE_GENERATION
CONTROL_MANIFEST: jobs/image_job.json
IMAGE_CONTRACT: editorial/IMAGE_CONTRACT.md
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: READY
GENERATION_MODE: INLINE_SCENE_EXECUTION
PERSISTENCE_TARGET: GIT
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: execute 08:00 job from jobs/image_job.json; read Cover prompt and generate in the same turn
```

현재 이미지 파이프라인은 `weekly-signal-image-job-v2.1`이다.

핵심 규칙:

- `jobs/image_job.json`을 읽은 같은 08:00 실행 턴에서 이미지 생성이 허용된다.
- 별도 대화창 또는 자동 하위 IMAGE PLANE 생성은 요구하지 않는다.
- 각 슬롯의 `image_prompts/*.txt` 전문을 그대로 장면 생성 지시로 사용한다.
- prompt를 읽은 뒤 이미지 호출 전에는 다른 파일 읽기·상태 보고·다른 슬롯 준비를 하지 않는다.
- 생성 결과는 가능한 경우 `work/2026-07-27/image_runs/`에 Git 보존한다.
- 저장 기능 문제는 이미지 생성 자체를 사전에 차단하지 않는다.
- UI·작업트리·문서형 결과는 `CONTEXT_FAILURE`로 판정하고 가능하면 진단 이미지도 Git에 남긴다.

날짜 의미:

- 실행일 `run_date`: `2026-08-10`
- 작업 회차 `issue_start`: `2026-07-27`

즉 이번 08:00 작업은 2026-08-10에 ISSUE 02의 이미지 생성을 재시도하는 작업이다.

기존 2026-08-08 Cover context failure 결과는 당시 저장되지 않았다. v2.1 재시도부터 생성 결과 보존을 우선한다.
