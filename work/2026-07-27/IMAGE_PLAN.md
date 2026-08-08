# ISSUE 02 IMAGE PLAN

status: CONTEXT_FAILURE
layout_dependency: COMPLETE
issue: 2026-07-27—2026-08-02

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

## Slot roles

- Cover: 이번 호의 대표 기사인 폭염 대응을 여는 강한 배경 이미지. 제목 안전영역 필요.
- Cover Story: 중앙 경보가 생활 현장으로 번역되는 장면. Cover와 다른 원본·거리·구도.
- Economy: 정유사 공급가격과 소비자가격 사이의 실제 주유 현장 맥락.
- Politics: 정상회담 이후 서로 다른 후속 절차를 암시하는 빈 공식 협의 공간. 완전 무인.
- Society: 방학 오전·점심 돌봄을 맡는 지역 돌봄 공간의 운영시간 맥락.
- Tech: 연구자가 공동활용하는 나노팹 장비와 클린룸의 실제 연구 환경.
- LIFE SCENE: 오전 9시 전 40분을 조율하는 한 가족의 아침 생활 장면.

## No-image sections

- PROLOGUE: 텍스트 중심 스프레드.
- Politics DEEP DIVE: 발효 절차 타임라인과 국가별 비교표를 HTML/CSS로 구성.
- EDITOR'S AFTERWORD: 좁은 단일 열 텍스트 마감.
- DATA: OMIT.
- WATCH: OMIT.

## 08:00 execution note

각 슬롯은 `READY / RETRY` 상태에서 해당 prompt 파일을 마지막 저장소 읽기로 확인한 뒤 한 장씩 생성한다. 실제 생성·검수·저장은 `editorial/IMAGE_CONTRACT.md`를 따른다.

## 08:00 execution result

- Cover 첫 생성 결과가 단일 연속 사진 장면이 아니라 저장소·`WORK_STATE.md`를 보여 주는 문서형/UI형 화면으로 반환됨.
- `PHOTO-SCENE` 게이트 실패 → `CONTEXT_FAILURE`.
- 유효 사진 시도 횟수는 증가시키지 않음: `0/3` 유지.
- 실패 결과는 `archive/2026-07-27/assets/`에 저장하지 않음.
- 계약에 따라 같은 대화의 이미지 턴을 즉시 종료하고 나머지 6개 슬롯은 생성하지 않음.
- 다음 08:00 이미지 턴은 새 대화에서 Cover부터 재개한다.
