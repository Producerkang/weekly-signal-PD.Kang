# ISSUE 02 WORK STATE

```text
STAGE: IMAGE_GENERATION
ENTRYPOINT: jobs/image_job.json
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: PENDING
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: execute dedicated image job
```

08:00 이미지 예약 작업의 유일한 시작점은:

```text
jobs/image_job.json
```

이다.

이미지 생성 전에 이 파일에서 기사 제목, 체크리스트, 진행률, 커밋 로그, 지면 설명을 추가로 복원하지 않는다.

07:00 산출물은 이미 준비되어 있다.

- `work/2026-07-27/LAYOUT_PLAN.md`: COMPLETE
- `work/2026-07-27/IMAGE_PLAN.md`: READY
- `work/2026-07-27/image_prompts/*.txt`: 7개 준비 완료
- `jobs/image_job.json`: READY

01~09 원고는 COMPLETE이며 08:00 이미지 작업에서 다시 읽거나 수정하지 않는다.

이전 구형 실행 방식의 `CONTEXT_FAILURE` 결과는 채택·저장되지 않았고, 새 dedicated job 구조 재시험을 위해 이미지 상태를 초기화했다.

이미지 생성 호출이 모두 끝난 뒤에만 `IMAGE_PLAN.md`와 이 `WORK_STATE.md`를 갱신한다.
