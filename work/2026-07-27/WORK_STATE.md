# ISSUE 02 WORK STATE

```text
STAGE: IMAGE_GENERATION
ENTRYPOINT: jobs/image_job.json
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: CONTEXT_FAILURE
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: start a new image turn, reset the dedicated image job to READY, and retry Cover first
```

08:00 이미지 예약 작업은 `jobs/image_job.json`을 진입점으로 실행되었다.

Cover 첫 이미지 생성 결과가 단일 연속 사진 장면이 아니라 문서형/UI형 이미지 작업 대시보드로 반환되어 `PHOTO-SCENE` 게이트를 통과하지 못했다.

현행 `editorial/IMAGE_CONTRACT.md`의 `CONTEXT_FAILURE` 규칙에 따라:

- 실패 이미지는 채택·저장하지 않았다.
- 유효 사진 시도 횟수는 증가시키지 않았다.
- 남은 6개 queue item은 실행하지 않았다.
- 같은 대화에서 추가 이미지 생성을 진행하지 않는다.

현재 상태:

- `work/2026-07-27/LAYOUT_PLAN.md`: COMPLETE
- `work/2026-07-27/IMAGE_PLAN.md`: CONTEXT_FAILURE
- `jobs/image_job.json`: CONTEXT_FAILURE
- 01~09 원고: COMPLETE / 미수정
- 발행용 신규 이미지: 저장 없음

다음 이미지 생성 시도는 새 이미지 턴에서 Cover부터 다시 시작해야 한다.
