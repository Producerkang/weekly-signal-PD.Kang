# ISSUE 02 IMAGE PLAN

status: RETRY
layout_dependency: COMPLETE
issue: 2026-07-27—2026-08-02
controller_manifest: `jobs/image_job.json`
generation_mode: `INLINE_SCENE_EXECUTION`
persistence_target: `GIT`
run_root: `work/2026-07-27/image_runs/`
run_date: `2026-08-10`
issue_start: `2026-07-27`

## Queue

| order | slot | necessity | prompt_file | run_dir | final_output | state | valid_attempts | ratio | target |
|---:|---|---|---|---|---|---|---:|---|---|
| 1 | Cover | REQUIRED | `image_prompts/01_cover.txt` | `image_runs/01_cover/` | `cover.webp` | RETRY | 0/3 | 16:9 | 2400×1350 |
| 2 | Cover Story | REQUIRED | `image_prompts/02_cover_story.txt` | `image_runs/02_cover_story/` | `cover-story.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 3 | Economy | REQUIRED | `image_prompts/03_economy.txt` | `image_runs/03_economy/` | `economy.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 4 | Politics | REQUIRED | `image_prompts/04_politics.txt` | `image_runs/04_politics/` | `politics.webp` | READY | 0/3 | 3:2 | 2100×1400 / 완전 무인 |
| 5 | Society | REQUIRED | `image_prompts/05_society.txt` | `image_runs/05_society/` | `society.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 6 | Tech | REQUIRED | `image_prompts/06_tech.txt` | `image_runs/06_tech/` | `tech.webp` | READY | 0/3 | 3:2 | 2100×1400 |
| 7 | LIFE SCENE | REQUIRED | `image_prompts/07_life_scene.txt` | `image_runs/07_life_scene/` | `life-scene.webp` | READY | 0/3 | 4:5 | 2000×2500 |

## v2.1 execution rule

- `jobs/image_job.json`은 제어 manifest이지만, 같은 08:00 실행 턴에서 이미지 생성 도구 호출이 허용된다.
- READY slot의 scene prompt를 읽은 직후 그 전문을 그대로 이미지 장면 지시로 사용한다.
- prompt를 읽은 뒤 이미지 호출 전에는 다른 파일 읽기·상태 보고·다른 slot 준비를 하지 않는다.
- scene prompt에 GitHub, queue, 저장 경로, 작업 상태 같은 운영 언어를 추가하지 않는다.
- 별도 대화창이나 독립 IMAGE PLANE 생성은 요구하지 않는다.
- 생성 결과는 가능한 경우 `image_runs/<slot>/attempt-NN.<ext>`로 Git에 보존한다.
- `CONTEXT_FAILURE` 결과도 진단용 보존 대상이지만 유효 사진 시도에는 포함하지 않는다.
- 저장 기능이 즉시 가능하지 않더라도 이미지 생성 자체를 사전에 차단하지 않는다.

## prior context failures

2026-08-08의 기존 방식과 dedicated-job v1 재시험에서 Cover가 작업 화면·문서/UI형 결과로 두 차례 실패했다. 두 결과는 당시 계약에 따라 저장되지 않았으며 유효 사진 시도에는 포함하지 않는다.

이번 재시도부터는 `weekly-signal-image-job-v2.1` 실행 규칙을 적용한다.

## 2026-08-10 08:00 execution result

- Cover `attempt-01`: `CONTEXT_FAILURE`. 유효 사진 시도 0/3 유지.
- Cover `attempt-02`: 동일 scene prompt 재시도 후 다시 `CONTEXT_FAILURE`. 유효 사진 시도 0/3 유지.
- 두 생성 결과의 진단 sidecar는 `image_runs/01_cover/attempt-01.json`, `attempt-02.json`에 Git 보존했다.
- 현재 GitHub connector는 반환된 binary image artifact를 repository blob으로 직접 전달할 수 없어 실제 PNG 원본 보존은 `PERSISTENCE_BLOCKED`다.
- 다음 실행은 원래 Cover scene prompt를 변경하지 않고 `attempt-03`부터 재시도한다.
- 반복된 `CONTEXT_FAILURE`이므로 prompt 내용보다 현재 이미지 생성 실행 문맥의 오염 가능성을 우선 의심한다.
