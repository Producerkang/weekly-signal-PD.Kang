# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**01~09 원고 제작과 07:00 지면·이미지 입력 설계가 모두 완료됐다. 다음 작업은 `08:00 이미지 슬롯별 순차 제작`이다.**

01~09는 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

07:00에서는 `editorial/IMAGE_CONTRACT.md`에 따라 실제 이미지 생성 없이 입력 패키지만 완성했다.

```text
06:00  PROLOGUE + EDITOR'S AFTERWORD — COMPLETE
07:00  LAYOUT_PLAN + IMAGE_PLAN + image_prompts 작성 — COMPLETE / TEXT ONLY
→ 08:00  이미지 슬롯별 순차 제작 — PENDING
→ 09:00  HTML + 간단 화면 검수 + 발행 — PENDING
```

현재 파일 상태:

- `LAYOUT_PLAN.md`: COMPLETE
- `IMAGE_PLAN.md`: READY
- `image_prompts/`: COMPLETE — 생성 대상 7 슬롯에 대응하는 7개 파일
- 신규 이미지 생성: 시작하지 않음

07:00 확정 사항:

- 최종 DOM: `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Politics DEEP DIVE → Society → Tech → EDITOR'S AFTERWORD → Sources`
- DATA: OMIT
- WATCH: OMIT
- 이미지 REQUIRED 슬롯: Cover / Cover Story / Economy / Politics / Society / Tech / LIFE SCENE
- Politics 이미지: 완전 무인
- LIFE SCENE 이미지: 4:5 세로형
- PROLOGUE / Politics DEEP DIVE / EDITOR'S AFTERWORD: 별도 생성 이미지 없음

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: COMPLETE
- TECH: COMPLETE
- CROSS_ARTICLE_REVIEW: COMPLETE
- DEEP_DIVE: COMPLETE
- LIFE_SCENE: COMPLETE
- PROLOGUE: COMPLETE
- EDITOR'S AFTERWORD: COMPLETE
- MANUSCRIPT_STAGE: COMPLETE
- LAYOUT: COMPLETE
- IMAGES: PENDING
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

## 확정된 원고

### 01 Cover Story
- `01_cover/VERIFY.md`: COMPLETE
- `01_cover/ARTICLE.md`: COMPLETE
- 제목: `폭염 위기경보 ‘심각’, 중앙재난안전대책본부는 무엇을 움직이나`

### 02 Economy
- `02_economy/VERIFY.md`: COMPLETE
- `02_economy/ARTICLE.md`: COMPLETE
- 제목: `휘발유 1,784원 상한은 주유소까지 어떻게 전달되나`

### 03 Politics
- `03_politics/VERIFY.md`: COMPLETE
- `03_politics/ARTICLE.md`: COMPLETE
- 제목: `일곱 개 협력문서와 한·메르코수르 협상의 서로 다른 시간표`

### 04 Society
- `04_society/VERIFY.md`: COMPLETE
- `04_society/FLOW.md`: COMPLETE
- `04_society/ARTICLE.md`: COMPLETE
- 제목: `방학 오전 아홉 시를 누가 맡나, 틈새돌봄 1,461곳이 시작됐다`

### 05 Tech
- `05_tech/VERIFY.md`: COMPLETE
- `05_tech/FLOW.md`: COMPLETE
- `05_tech/ARTICLE.md`: COMPLETE
- 제목: `공공나노팹센터 두 곳 출범, 공동활용의 지원·평가 근거가 생겼다`

### CROSS-ARTICLE REVIEW
- `CROSS_ARTICLE_REVIEW.md`: COMPLETE
- 일반 기사 5편 전체 PASS

### 06 Deep Dive
- `06_deep_dive/VERIFY.md`: COMPLETE
- `06_deep_dive/FLOW.md`: COMPLETE
- `06_deep_dive/ARTICLE.md`: COMPLETE
- 제목: `한·메르코수르의 두 번째 시간표, 공동협상 뒤 각국 비준이 시작된다`
- 연결 대상: Politics

### 07 LIFE SCENE
- `07_life_scene/SCENE_MAP.md`: COMPLETE
- `07_life_scene/ARTICLE.md`: COMPLETE
- 제목: `아홉 시에 문이 열리는데, 엄마는 여덟 시 이십 분에 집을 나서야 했다`
- 연결 대상: Society

### 08 PROLOGUE
- `08_prologue/PREVIEW_MAP.md`: COMPLETE
- `08_prologue/ARTICLE.md`: COMPLETE
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 09 EDITOR'S AFTERWORD
- `09_editor_afterword/ARTICLE.md`: COMPLETE
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

## 07:00 완료 산출물

```text
LAYOUT_PLAN.md              — COMPLETE
IMAGE_PLAN.md               — READY
image_prompts/01_cover.txt
image_prompts/02_cover_story.txt
image_prompts/03_economy.txt
image_prompts/04_politics.txt
image_prompts/05_society.txt
image_prompts/06_tech.txt
image_prompts/07_life_scene.txt
WORK_STATE.md               — LAYOUT COMPLETE / IMAGES PENDING
```

이미지 큐:

```text
1. Cover        → cover.webp        → READY 0/3 → 16:9 → 2400×1350
2. Cover Story  → cover-story.webp  → READY 0/3 → 3:2  → 2100×1400
3. Economy      → economy.webp      → READY 0/3 → 3:2  → 2100×1400
4. Politics     → politics.webp     → READY 0/3 → 3:2  → 2100×1400 / 완전 무인
5. Society      → society.webp      → READY 0/3 → 3:2  → 2100×1400
6. Tech         → tech.webp         → READY 0/3 → 3:2  → 2100×1400
7. LIFE SCENE   → life-scene.webp   → READY 0/3 → 4:5  → 2000×2500
```

## 다음 작업 — 08:00 이미지 슬롯별 순차 제작

08:00 현행 기준:

1. `editorial/IMAGE_CONTRACT.md`
2. `IMAGE_PLAN.md`
3. 현재 슬롯의 `image_prompts/*.txt`

실행 원칙:

- 01~09 원고 수정 금지
- 지면 재설계 금지
- `1 SLOT = 1 PROMPT FILE = 1 SCENE = 1 IMAGE`
- 현재 슬롯 prompt 파일을 이미지 생성 직전 마지막 저장소 읽기로 사용
- prompt 파일을 읽은 뒤 즉시 해당 슬롯 이미지 1장 생성
- PHOTO-SCENE 게이트 → 시각 품질 판정 → `ACCEPTED / RETRY / BLOCKED`
- Politics는 프레임 전체 완전 무인
- LIFE SCENE은 4:5
- Cover 장변 2200px 이상 목표, 나머지 주요 이미지 장변 2000px 이상 목표
- `CONTEXT_FAILURE` 발생 시 같은 대화에서 재생성하지 않고 이미지 턴 전체 종료
- 합격권 이미지는 취향성 재생성 금지

08:00 완료 뒤 다음 작업은 `09:00 HTML + 실제 화면 검수 + 발행`이다.

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 별도 재확인 질문 없이 **08:00 이미지 슬롯별 순차 제작**을 끝까지 수행한다.

08:00에서는 `editorial/IMAGE_CONTRACT.md`, `IMAGE_PLAN.md`, 현재 슬롯의 prompt 파일을 기준으로 순차 생성·판정한다. 지면과 원고는 다시 설계하지 않는다.