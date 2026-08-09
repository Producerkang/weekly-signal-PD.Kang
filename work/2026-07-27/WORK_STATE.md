# ISSUE 02 WORK STATE

```text
STAGE: IMAGE_GENERATION
CONTROL_MANIFEST: jobs/image_job.json
IMAGE_CONTRACT: editorial/IMAGE_CONTRACT.md
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: READY
GENERATION_MODE: ISOLATED_SCENE_TURN
PERSISTENCE: GIT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: dispatch Cover scene prompt into a clean image-only turn; do not generate from the controller turn
```

현재 이미지 파이프라인은 `weekly-signal-image-job-v2`로 전환되었다.

핵심 변경:

- `jobs/image_job.json`은 CONTROL PLANE manifest이며 이미지 프롬프트가 아니다.
- job·queue·repository를 읽은 동일 턴에서는 이미지 생성 도구를 호출하지 않는다.
- 각 이미지는 scene prompt 전문 하나만 입력받는 새 독립 IMAGE PLANE 턴에서 생성한다.
- 이미지 반환 뒤에만 Git 저장·상태 기록·품질 판정을 수행한다.
- 생성된 모든 결과는 합격 여부와 관계없이 `work/2026-07-27/image_runs/`에 Git 보존한다.
- UI·작업트리형 `CONTEXT_FAILURE`도 진단 자료로 저장하되 유효 시도로 계산하지 않는다.

기존 2026-08-08 Cover context failure 결과는 당시 저장되지 않았다. 새 v2 재시도부터 모든 생성 결과를 보존한다.
