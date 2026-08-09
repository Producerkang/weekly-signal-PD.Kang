# ISSUE 02 WORK STATE

```text
STAGE: HTML_READY
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: NOT_REQUIRED
HTML: READY
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: 09:00 HTML 제작 + 화면 검수 + 발행
```

현행 제작 경로는 이미지 생성 단계를 사용하지 않는다.

- 01~09 원고는 COMPLETE 상태다.
- `LAYOUT_PLAN.md`는 이미지 없이 완결되는 지면 설계로 갱신됐다.
- 과거 `IMAGE_PLAN.md`, `image_prompts/`, `image_runs/`, `jobs/image_job.json`은 진단 기록으로만 남으며 현재 발행 선행 조건이 아니다.
- 07:00 이후 08:00 작업 없이 09:00 HTML 제작으로 바로 이어진다.
- 새 이미지 미확보, 과거 `CONTEXT_FAILURE`, 이미지 attempt 상태는 발행 차단 사유가 아니다.
- 최종 HTML은 존재하지 않는 이미지 경로를 참조하지 않고 이전 회차 이미지를 임의 재사용하지 않는다.
