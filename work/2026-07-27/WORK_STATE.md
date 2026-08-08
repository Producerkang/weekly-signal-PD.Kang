# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**01~09 원고 제작은 모두 완료됐다. 다음 작업은 월요일 `07:00 LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용)`이다.**

01~09는 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

현재는 새 `editorial/IMAGE_CONTRACT.md` 적용을 위한 **07:00 시작 전 상태**다.

```text
06:00  PROLOGUE + EDITOR'S AFTERWORD — COMPLETE
→ 07:00  LAYOUT_PLAN + IMAGE_PLAN + image_prompts 작성 — PENDING / TEXT ONLY
→ 08:00  이미지 슬롯별 순차 제작 — PENDING
→ 09:00  HTML + 간단 화면 검수 + 발행 — PENDING
```

현재 파일 상태:

- `LAYOUT_PLAN.md`: 없음
- `IMAGE_PLAN.md`: 없음
- `image_prompts/`: 없음
- 신규 이미지 생성: 시작하지 않음

과거 테스트에서 만들어진 지면·이미지 계획과 이미지 실패 상태는 새 계약과 호환되지 않아 폐기했다. 새 테스트는 07:00부터 다시 시작한다.

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
- LAYOUT: PENDING
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

## 다음 작업 — 07:00 LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용)

현행 기준:

1. `editorial/WEEKLY_RUNBOOK.md`
2. `editorial/LAYOUT_SYSTEM.md`
3. `editorial/IMAGE_CONTRACT.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `templates/TEMPLATE_CONTRACT.md`
6. `templates/NAVIGATION_CONTRACT.md`

07:00의 필수 산출물:

```text
LAYOUT_PLAN.md          — COMPLETE
IMAGE_PLAN.md           — READY
image_prompts/*.txt     — 생성 대상 슬롯마다 1개
WORK_STATE.md           — LAYOUT COMPLETE / IMAGES PENDING으로 갱신
```

### 07:00 실행 원칙

- 01~09 원고 수정 금지
- 최종 DOM 순서와 기사별 지면 리듬 확정
- DATA / WATCH 필요성 판정
- 이미지 슬롯 필요성·지면 역할·비율·해상도 확정
- `IMAGE_PLAN.md`는 큐와 상태만 기록
- 실제 생성 장면은 슬롯별 `image_prompts/*.txt`에 독립 저장
- 프롬프트 파일에는 이미지로 보일 장면 정보만 기록
- 07:00에서는 이미지 생성 도구를 호출하지 않음

07:00 완료 뒤 다음 작업은 `08:00 이미지 슬롯별 순차 제작`이다.

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 별도 재확인 질문 없이 **07:00 LAYOUT_PLAN + IMAGE_PLAN 작성 (텍스트 전용)**을 끝까지 수행한다.

이미지는 생성하지 않는다. `LAYOUT_PLAN.md`, `IMAGE_PLAN.md`, `image_prompts/*.txt`, `WORK_STATE.md`만 새 계약에 따라 작성·갱신한다.