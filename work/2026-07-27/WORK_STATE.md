# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**01~09 원고와 12 지면 설계는 완료됐다. 이미지 파이프라인 재설계도 완료됐으며, 현재 다음 작업은 `13 이미지 제작`을 새 계약에 따라 한 슬롯씩 독립적으로 실행하는 것이다.**

01~09는 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

현행 이미지 실행 기준:

- `editorial/IMAGE_PIPELINE.md`
- `editorial/IMAGE_DIRECTION.md`
- `work/2026-07-27/IMAGE_PLAN.md`
- `work/2026-07-27/LAYOUT_PLAN.md`

과거의 8장 일괄 생성, 연락시트·스토리보드 재시도, Canva 제작 보드 대체 시도는 **레거시 실패 이력**이며 현재 실행 지시가 아니다.

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
- IMAGE_PIPELINE_DESIGN: COMPLETE
- IMAGES: READY
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

## 확정된 01~09

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

### 07 Life Scene

- `07_life_scene/SCENE_MAP.md`: COMPLETE
- `07_life_scene/ARTICLE.md`: COMPLETE
- 제목: `아홉 시에 문이 열리는데, 엄마는 여덟 시 이십 분에 집을 나서야 했다`
- 연결 대상: Society
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 08 Prologue

- `08_prologue/PREVIEW_MAP.md`: COMPLETE
- `08_prologue/ARTICLE.md`: COMPLETE
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

제3호 이후에도 현행 `PROSE RHYTHM PASS`를 적용한다.

### 09 Editor's Afterword

- `09_editor_afterword/ARTICLE.md`: COMPLETE
- 기사별 요약 구조 없음
- 대표 기사·대표 숫자를 억지로 고르는 PICK 구조 없음
- 실제 제작 후 시점의 회고 형태
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

## 12 지면 설계 — COMPLETE

작업 파일:

- `LAYOUT_PLAN.md`: COMPLETE

확정 DOM:

```text
Cover
→ Contents
→ LIFE SCENE
→ PROLOGUE
→ Cover Story
→ Economy
→ Politics
→ Politics DEEP DIVE
→ Society
→ Tech
→ EDITOR'S AFTERWORD
→ Sources
```

확정 사항:

- Politics DEEP DIVE는 Politics 바로 뒤에 배치
- DATA/WATCH 별도 섹션 미제작
- Cover / LIFE SCENE / PROLOGUE / 일반 기사 / DEEP DIVE / AFTERWORD 역할 분리
- 기존 `archive/2026-07-27/` 과거 HTML/CSS 재사용 금지
- 제1호는 매거진 밀도와 이미지 품질 비교 기준으로만 사용

## 13 이미지 제작 — READY

활성 계획:

- `IMAGE_PLAN.md`

제2호 현행 슬롯:

1. `cover.webp`
2. `life-scene.webp`
3. `cover-story.webp`
4. `economy.webp`
5. `politics.webp`
6. `deep-dive-politics.webp`
7. `society.webp`
8. `tech.webp`

### 현행 품질선

- 제1호 실제 이미지 및 현행 시연 정도의 사진적·에디토리얼 품질이면 PASS 가능
- 기사 주제와 자연스럽게 연결되면 충분하며 전체 메커니즘을 문자 그대로 재현할 필요 없음
- 절제된 상징적 합성·네트워크 효과 허용
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- 동일 이미지 재사용 금지

### Politics 절대 규칙

Politics와 Politics DEEP DIVE 이미지는 **완전 무인(human-free)** 이어야 한다.

사람, 얼굴, 실루엣, 뒷모습, 손, 원거리 인물이 하나라도 보이면 탈락한다.

### LIFE SCENE 규칙

LIFE SCENE만 생성 전에 비율을 명시한다.

- 가로형 `4:3`
- 세로형 `4:5`

제2호 현행 프런트 스프레드는 `4:3` 가로형을 사용한다.

### 생성 방식

- 한 번에 이미지 한 장만 생성
- 각 슬롯 독립 상태 관리
- 한 슬롯 최대 기본 3회 시도
- 3회 실패 시 BLOCKED로 기록하고 다른 슬롯 진행
- 실패한 한 장 때문에 다른 통과 이미지를 다시 만들지 않음
- 최종 채택본만 `archive/2026-07-27/assets/`에 저장

현재 각 슬롯 상태와 브리프는 `IMAGE_PLAN.md`가 소유한다.

## HTML / 화면 검수

HTML은 이미지 전체 완료를 기다려야만 구조 작업을 시작하는 방식으로 묶지 않는다.

- 레이아웃 구조와 CSS는 이미지 슬롯 확정 후 진행 가능
- 통과 이미지부터 순차 반영 가능
- 다만 최종 발행은 필수 이미지가 모두 반영되고 실제 화면 검수를 통과하기 전에는 불가

검수 화면:

- 1440px 이상
- 1366px
- 1024px
- 390px

최종 크롭은 실제 HTML 화면에서 판정한다.

## 새 대화 재개 규칙

새 대화에서는 반드시 현재 `main`의 다음 문서를 기준으로 한다.

1. 이 `WORK_STATE.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/IMAGE_PIPELINE.md`
4. `editorial/IMAGE_DIRECTION.md`
5. `editorial/ISSUE_QUALITY_GATE.md`
6. `editorial/LAYOUT_SYSTEM.md`
7. `editorial/PUBLISHING_PIPELINE.md`
8. `templates/TEMPLATE_CONTRACT.md`
9. `templates/NAVIGATION_CONTRACT.md`
10. `LAYOUT_PLAN.md`
11. `IMAGE_PLAN.md`

다음 실행은 `IMAGE_PLAN.md`의 READY 슬롯을 한 장씩 처리한다.

01~09 원고는 수정하지 않는다.
