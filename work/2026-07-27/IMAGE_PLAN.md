# ISSUE 02 IMAGE PLAN

status: READY
layout_dependency: COMPLETE
issue: 2026-07-27—2026-08-02
execution_entrypoint: `jobs/image_job.json`

## Queue

| order | slot | necessity | prompt_file | output_file | state | attempts | ratio | target |
|---:|---|---|---|---|---|---:|---|---|
| 1 | Cover | REQUIRED | `image_prompts/01_cover.txt` | `cover.webp` | READY | 0/3 | 16:9 | 2400×1350 |
| 2 | Cover Story | REQUIRED | `image_prompts/02_cover_story.txt` | `cover-story.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 3 | Economy | REQUIRED | `image_prompts/03_economy.txt` | `economy.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 4 | Politics | REQUIRED | `image_prompts/04_politics.txt` | `politics.webp` | READY | 0/3 | 3:2 | 2100×1400 / 완전 무인 |
| 5 | Society | REQUIRED | `image_prompts/05_society.txt` | `society.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 6 | Tech | REQUIRED | `image_prompts/06_tech.txt` | `tech.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 7 | LIFE SCENE | REQUIRED | `image_prompts/07_life_scene.txt` | `life-scene.webp` | READY | 0/3 | 4:5 | 2000×2500 |

## Control note

이 파일은 08:00 이미지 생성 **전에 읽는 파일이 아니다**.

08:00의 유일한 시작점은 `jobs/image_job.json`이다. 이미지 생성 구간이 모두 끝난 뒤 결과 상태를 이 파일에 한 번에 반영한다.

이전 동일 회차의 `CONTEXT_FAILURE` 기록은 구형 실행 방식의 테스트 결과였으며 새 dedicated job 구조 재시험을 위해 초기화했다. 실패 이미지는 채택·저장되지 않았다.
