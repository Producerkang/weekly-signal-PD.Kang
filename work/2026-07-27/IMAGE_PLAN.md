# ISSUE 02 IMAGE PLAN

status: CONTEXT_FAILURE
layout_dependency: COMPLETE
issue: 2026-07-27—2026-08-02
execution_entrypoint: `jobs/image_job.json`

## Queue

| order | slot | necessity | prompt_file | output_file | state | attempts | ratio | target |
|---:|---|---|---|---|---|---:|---|---|
| 1 | Cover | REQUIRED | `image_prompts/01_cover.txt` | `cover.webp` | CONTEXT_FAILURE | 0/3 | 16:9 | 2400×1350 |
| 2 | Cover Story | REQUIRED | `image_prompts/02_cover_story.txt` | `cover-story.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 3 | Economy | REQUIRED | `image_prompts/03_economy.txt` | `economy.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 4 | Politics | REQUIRED | `image_prompts/04_politics.txt` | `politics.webp` | READY | 0/3 | 3:2 | 2100×1400 / 완전 무인 |
| 5 | Society | REQUIRED | `image_prompts/05_society.txt` | `society.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 6 | Tech | REQUIRED | `image_prompts/06_tech.txt` | `tech.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 7 | LIFE SCENE | REQUIRED | `image_prompts/07_life_scene.txt` | `life-scene.webp` | READY | 0/3 | 4:5 | 2000×2500 |

## 08:00 execution result

- `jobs/image_job.json`을 진입점으로 Cover 프롬프트를 읽고 이미지 생성을 호출함.
- 반환 결과가 단일 연속 사진 장면이 아니라 이미지 작업 실행 상태를 보여 주는 문서형/UI형 대시보드 화면이었음.
- `PHOTO-SCENE` 게이트 실패 → `CONTEXT_FAILURE`.
- 실패 결과는 채택·저장하지 않음.
- `CONTEXT_FAILURE`는 유효 사진 시도가 아니므로 Cover 시도 횟수는 `0/3` 유지.
- 현행 이미지 계약에 따라 남은 6개 queue item은 실행하지 않음.
- 다음 이미지 생성 시도는 새 이미지 턴에서 Cover부터 시작해야 함.
