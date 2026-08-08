# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**01~09 원고와 12 지면 설계는 완료됐다. 이미지 파이프라인 재설계도 완료됐고 `13 이미지 제작`이 진행 중이다. 현재 작업은 월요일 08:00 이미지 제작 턴에 해당하며, 한 턴 안에서 각 슬롯을 `1 SLOT = 1 SCENE = 1 IMAGE` 단위로 순차 처리한다. 첫 슬롯 Cover는 생성 결과가 저장소·WORK_STATE·작업 대시보드 형태로 나와 `OUTPUT_CONTRACT` 실패로 판정했으며 유효 이미지 시도는 아직 `0/3`이다. Cover를 단일 에디토리얼 이미지로 다시 생성해 판정한 뒤, 같은 턴 안에서 다음 처리 가능한 슬롯로 계속 진행한다.**

01~09는 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

### 계약과 회차 실행값의 경계

일반 이미지 계약은 다음 두 문서가 소유한다.

- `editorial/IMAGE_PIPELINE.md`
- `editorial/IMAGE_DIRECTION.md`

이 두 문서는 특정 회차에 종속되지 않는다.

제2호의 실제 슬롯 수·파일명·장면 브리프·LIFE SCENE 비율 오버라이드는 다음 두 문서가 소유한다.

- `work/2026-07-27/LAYOUT_PLAN.md`
- `work/2026-07-27/IMAGE_PLAN.md`

따라서 제2호 실행값을 일반 계약으로 역수입하지 않는다.

과거의 다중 이미지 일괄 생성, 연락시트·스토리보드 재시도, Canva 제작 보드 대체 시도는 **레거시 실패 이력**이며 현재 실행 지시가 아니다.

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
- IMAGES: IN_REVIEW
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

## 13 이미지 제작 — IN_REVIEW

활성 계획:

- `IMAGE_PLAN.md`

제2호 `LAYOUT_PLAN.md`에서 실제 지면에 사용하기로 확정한 REQUIRED 슬롯은 8개다.

1. `cover.webp`
2. `life-scene.webp`
3. `cover-story.webp`
4. `economy.webp`
5. `politics.webp`
6. `deep-dive-politics.webp`
7. `society.webp`
8. `tech.webp`

### 08:00 턴 실행 원칙

- 월요일 08:00은 이미지 제작 전체를 담당하는 **하나의 예약 작업 턴**이다.
- 그러나 한 번의 이미지 생성 요청은 항상 **슬롯 하나의 이미지 한 장**만 다룬다.
- `1 SLOT = 1 SCENE = 1 IMAGE`를 지킨다.
- 한 슬롯을 생성·판정·상태 기록한 뒤 같은 턴에서 다음 처리 가능한 슬롯로 계속 진행한다.
- 첫 이미지가 ACCEPTED되었다고 턴을 종료하지 않는다.
- `RETRY` 또는 `BLOCKED` 슬롯이 있어도 다른 처리 가능한 슬롯은 계속 진행한다.
- 모든 REQUIRED 슬롯이 ACCEPTED/SAVED가 되거나, 남은 처리 대상이 모두 BLOCKED이거나, 실제 도구 실행이 불가능할 때 이미지 루프를 종료한다.

### 현재 슬롯

- Cover: `RETRY`
- 유효 이미지 시도: `0/3`
- 실패 코드: `OUTPUT_CONTRACT`
- 실패 결과는 최종 자산으로 저장하지 않음
- 다음 실행은 Cover 장면 브리프만 유지한 단일 에디토리얼 이미지 재생성
- Cover 판정 뒤 같은 08:00 턴에서 다음 READY 슬롯를 순차 처리

### 생성 직전 컨텍스트 분리

각 슬롯의 이미지 생성 직전에는 `IMAGE_PLAN.md`의 해당 장면만 읽어 **GENERATION BRIEF**를 만든다.

GENERATION BRIEF에는 다음만 남긴다.

- 기사와 이미지의 자연스러운 연결점
- 실제 보여줄 한 장면 또는 공간
- 중심 피사체·행동·사물
- 카메라 거리와 구도
- 자연스럽거나 약간 시네마틱한 빛
- 현실적인 재질·공간감·원근
- 필요한 제목 안전영역
- 목표 비율과 해상도
- Politics라면 완전 무인 규칙

다음은 이미지 생성 문맥에 넣지 않는다.

- 저장소 경로
- WORK_STATE 표·상태
- 파일 트리
- 진행률·체크리스트
- 이번 턴 완료 항목
- 다음 턴 계획
- 제작 보고서 문구

생성 결과를 판정하고 상태를 기록할 때만 다시 작업 상태 문맥으로 돌아간다.

### 현재 실사용 품질선

- 고해상도 사진적 또는 고품질 에디토리얼 래스터 이미지
- 현실적인 카메라 시점
- 자연스럽거나 약간 시네마틱한 조명
- 깨끗하고 잡지 친화적인 구성
- 자연스러운 재질·원근·공간감
- 한눈에 읽히는 중심 장면
- 과하게 복잡하거나 광고·기업 홍보 스톡 이미지처럼 연출되지 않음
- 기사 주제와 자연스럽게 연결되면 충분하며 기사 전체 메커니즘을 한 장에 설명할 필요 없음
- 이 수준에 도달하면 취향상 더 좋은 결과를 찾기 위해 반복 생성하지 않음

### 일반 계약 핵심

- 한 번에 이미지 한 장만 생성
- 각 슬롯 독립 상태 관리
- 한 슬롯 최대 기본 3회의 유효 이미지 시도
- 3회의 유효 이미지 시도에도 실패하면 BLOCKED로 기록하고 다른 슬롯 진행
- 실패한 한 장 때문에 다른 통과 이미지를 다시 만들지 않음
- 기사와 자연스럽게 연결되고 실제 지면에서 기능하면 PASS 가능
- 기사 전체 메커니즘을 한 장에 재현하지 않음
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- Politics와 Politics DEEP DIVE는 완전 무인
- LIFE SCENE은 회차에서 `4:3` 또는 `4:5` 중 하나를 사전 확정
- 최종 채택본만 `archive/YYYY-MM-DD/assets/`에 저장

### 제2호 전용 오버라이드

제2호 LIFE SCENE은 `LAYOUT_PLAN.md`에서 넓은 프런트 스프레드를 확정했으므로 **이번 회차에 한해 4:3**을 사용한다.

이 선택은 일반 계약이 아니며 다음 회차로 자동 계승하지 않는다.

현재 각 슬롯 상태와 상세 브리프는 `IMAGE_PLAN.md`가 소유한다.

## HTML / 화면 검수

HTML은 이미지 전체 완료를 기다려야만 구조 작업을 시작하는 방식으로 묶지 않는다.

- 레이아웃 구조와 CSS는 이미지 슬롯 확정 후 진행 가능
- 통과 이미지부터 순차 반영 가능
- 다만 최종 발행은 REQUIRED 이미지가 모두 반영되고 실제 화면 검수를 통과하기 전에는 불가

검수 화면:

- 1440px 이상
- 1366px
- 1024px
- 390px

최종 크롭은 실제 HTML 화면에서 판정한다.

## 새 대화 재개 규칙

새 대화에서는 반드시 현재 `main`의 다음 문서를 순서대로 읽는다.

1. 이 `WORK_STATE.md`
2. `editorial/IMAGE_PIPELINE.md`
3. `editorial/IMAGE_DIRECTION.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `editorial/WEEKLY_RUNBOOK.md`
6. `LAYOUT_PLAN.md`
7. `IMAGE_PLAN.md`

그 후 `IMAGE_PLAN.md`에서 첫 `RETRY` 슬롯을 우선하고, 없으면 첫 `READY` 슬롯부터 시작한다. **한 슬롯만 처리하고 턴을 끝내지 않는다.** 슬롯 하나를 판정·기록한 뒤 같은 08:00 턴에서 다음 처리 가능한 슬롯로 순차 진행한다.

슬롯별 실행 순서:

```text
SLOT CONFIRM
→ ARTICLE / SECTION READ
→ GENERATION BRIEF
→ RATIO / RESOLUTION 확인
→ SINGLE IMAGE GENERATION
→ OUTPUT CONTRACT CHECK
→ VISUAL INSPECTION
→ ACCEPT / RETRY / BLOCKED
→ 상태 기록
→ NEXT SLOT
```

이미지 생성 대화에서는 처음부터 여러 슬롯을 묶어서 만들지 않는다. 매 생성 호출은 반드시 한 슬롯의 한 장면만 다룬다.

한 슬롯이 ACCEPTED되면 해당 상태와 시도 횟수를 `IMAGE_PLAN.md`에 반영하고 즉시 다음 처리 가능한 슬롯로 이동한다. 저장·HTML 통합을 같은 턴에 무리하게 끝낼 필요는 없다.

01~09 원고는 수정하지 않는다.
