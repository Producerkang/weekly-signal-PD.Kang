# ISSUE 02 WORK STATE

```text
STAGE: IMAGE_GENERATION
CONTROL_MANIFEST: jobs/image_job.json
IMAGE_CONTRACT: editorial/IMAGE_CONTRACT.md
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: RETRY
GENERATION_MODE: INLINE_SCENE_EXECUTION
PERSISTENCE_TARGET: GIT
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: retry Cover from attempt-03 with the unchanged scene prompt; valid photo attempts remain 0/3
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

## 2026-08-10 08:00 manual execution

- Cover prompt를 v2.1 규칙대로 읽고 같은 실행 턴에서 이미지 생성 도구를 호출했다.
- `attempt-01` 결과는 PHOTO-SCENE 게이트 실패로 `CONTEXT_FAILURE`다.
- scene prompt를 변경하지 않고 재시도한 `attempt-02`도 `CONTEXT_FAILURE`다.
- 두 결과 모두 유효 사진 시도로 계산하지 않으므로 Cover는 여전히 0/3이다.
- 반환된 binary 이미지 원본은 현재 GitHub connector 경로로 직접 업로드할 수 없어 `PERSISTENCE_BLOCKED`이며, 진단 sidecar JSON 두 개는 Git에 보존했다.
- 반복 실패 양상이 prompt 자체가 아니라 실행 문맥 영향을 시사하므로 다른 슬롯으로 진행하지 않았다.
- `jobs/image_job.json`의 Cover `next_attempt`는 3으로 갱신했으며 다음 실행은 동일 prompt로 `attempt-03`부터 시작한다.
