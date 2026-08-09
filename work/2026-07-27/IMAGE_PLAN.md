# ISSUE 02 IMAGE PLAN

status: READY
layout_dependency: COMPLETE
issue: 2026-07-27—2026-08-02
controller_manifest: `jobs/image_job.json`
generation_mode: `ISOLATED_SCENE_TURN`
persistence: `GIT_REQUIRED`
run_root: `work/2026-07-27/image_runs/`

## Queue

| order | slot | necessity | prompt_file | run_dir | final_output | state | valid_attempts | ratio | target |
|---:|---|---|---|---|---|---|---:|---|---|
| 1 | Cover | REQUIRED | `image_prompts/01_cover.txt` | `image_runs/01_cover/` | `cover.webp` | READY | 0/3 | 16:9 | 2400×1350 |
| 2 | Cover Story | REQUIRED | `image_prompts/02_cover_story.txt` | `image_runs/02_cover_story/` | `cover-story.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 3 | Economy | REQUIRED | `image_prompts/03_economy.txt` | `image_runs/03_economy/` | `economy.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 4 | Politics | REQUIRED | `image_prompts/04_politics.txt` | `image_runs/04_politics/` | `politics.webp` | READY | 0/3 | 3:2 | 2100×1400 / 완전 무인 |
| 5 | Society | REQUIRED | `image_prompts/05_society.txt` | `image_runs/05_society/` | `society.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 6 | Tech | REQUIRED | `image_prompts/06_tech.txt` | `image_runs/06_tech/` | `tech.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 7 | LIFE SCENE | REQUIRED | `image_prompts/07_life_scene.txt` | `image_runs/07_life_scene/` | `life-scene.webp` | READY | 0/3 | 4:5 | 2000×2500 |

## v2 execution rule

- `jobs/image_job.json`은 CONTROL PLANE manifest다.
- job이나 repository를 읽은 턴에서는 이미지 생성 도구를 호출하지 않는다.
- 각 slot은 scene prompt 전문만 전달받는 새 독립 이미지 턴에서 생성한다.
- 생성 결과는 판정 전에 `image_runs/<slot>/attempt-NN.<ext>`로 Git에 저장한다.
- `CONTEXT_FAILURE` 결과도 진단용으로 저장하지만 유효 사진 시도에는 포함하지 않는다.
- Git 저장이 되지 않으면 `PERSISTENCE_BLOCKED`로 중단한다.

## prior context failures

2026-08-08의 기존 방식과 dedicated-job v1 재시험에서 Cover가 작업 화면·문서/UI형 결과로 두 차례 실패했다. 두 결과는 당시 계약에 따라 저장되지 않았으며 유효 사진 시도에는 포함하지 않는다.

이번 재시도부터는 `weekly-signal-image-job-v2` 격리 규칙과 Git 영구 보존 규칙을 적용한다.
