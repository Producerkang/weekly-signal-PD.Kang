# ISSUE 07 LAYOUT PLAN

STATUS: COMPLETE

## 1. 최종 DOM 순서

```text
Cover
→ Contents
→ LIFE SCENE
→ PROLOGUE
→ Cover Story
→ Economy
→ Politics
→ Society
→ Tech
→ EDITOR'S AFTERWORD
→ Sources
```

- `DEEP_DIVE: OMIT`이므로 DEEP DIVE DOM·Contents·내비게이션을 만들지 않는다.
- 폐기된 `EDITOR'S PICK`을 만들지 않는다.
- EDITOR'S AFTERWORD는 Sources 바로 앞에 둔다.

## 2. Issue 정보

- ISSUE: 07
- 기간: 2026-09-07 ~ 2026-09-13
- Issue title: `낮의 전기, 현관의 초인종, 72시간`
- Cover Story: `전기가 남는 가을, 왜 발전을 줄이고 소비를 늘리나`
- 이미지: 사용하지 않음. placeholder·이전 회차 자산 재사용도 없음.

## 3. 공통 Editorial Axis

- outer page shell: `--page: 1320px`
- editorial content axis: `--content: 1040px`
- gutter: `clamp(20px, 4vw, 64px)`
- `--prose`와 `--wide`가 필요하면 모두 `var(--content)`로만 정의한다.
- Contents, LIFE 제목·본문·SCENARIO NOTE, PROLOGUE, 모든 기사 제목·Deck·본문·정보 모듈, AFTERWORD, Sources의 외곽 좌우선은 같은 1040px 축을 사용한다.
- 기사별 독립 max-width 700/720/820/880/980/1000/1080px를 만들지 않는다.

## 4. 기사별 지면 리듬

### Cover
- navy full-bleed 배경 + orange issue signal
- 큰 issue title, period, cover-story teaser
- 이미지 없이 제목·Deck·시간 키워드로 첫 화면 완결

### Contents
- 1040px 축 내부의 링크 그리드
- FRONT(LIFE/PROLOGUE)와 FEATURES(5개 일반 기사)를 구분하되 DOM 순서와 동일

### LIFE SCENE
- paper-light 배경의 조용한 장문 지면
- 소제목 없는 연속 서사
- 마지막 SCENARIO NOTE만 별도 rule/card 처리

### PROLOGUE
- 큰 도입 문장과 넓은 행간
- 카드 반복 없이 텍스트 중심 전환

### Cover Story
- 본문 진입 전에 `58일 / 47.3GW / 낮 시간 이동` metric band
- 본문은 단일 축, 중간 소제목으로 리듬

### Economy
- `349.7억 달러 / 반도체 약 47% / 103.7억 달러 흑자` 3분할 metric board
- 숫자는 본문을 반복하지 않고 통계 성격을 한눈에 잡는 용도로 사용

### Politics
- `권익위 조사 → 지방정부 사실확인 → 반환·제재 → 별도 수사` 4단계 process strip
- 권한 주체의 이동을 시각화

### Society
- `7/20~9/7 비대면 → 9/8~11/9 방문 → 11/10~12/7 직권조치 구간` timeline
- 생활시간과 행정시간을 구분하는 세로 리듬

### Tech
- `대표자 책임 / CPO 권한 / 72시간 / 최대 10%` evidence grid
- 시스템·거버넌스 성격을 카드 내부 정보로 구분

### EDITOR'S AFTERWORD
- muted paper 색면과 넉넉한 상하 패딩
- 별도 좁은 폭 없이 같은 1040px 축 유지

### Sources
- 기사별 출처 그룹을 하나의 Sources 섹션에서 정리
- 외부 링크만 사용하며 로컬 이미지·asset 요청 없음

## 5. DATA / WATCH 판단

별도 DATA 또는 WATCH 섹션은 만들지 않는다.

- Cover·Economy의 핵심 숫자는 기사 내부 metric 모듈로 충분하다.
- Politics·Society·Tech의 후속 확인점도 각 본문 결론에 이미 있다.
- 별도 DATA/WATCH를 만들면 같은 정보를 반복할 가능성이 높다.

## 6. 반응형 계획

### 1440px 이상 / 1366px
- 모든 핵심 editorial 요소의 x/right 경계를 비교한다.
- 1040px 최대 폭과 중앙축을 유지하고 좌우 오차 2px 이내를 통과 기준으로 한다.

### 1024px
- 사용 가능 폭에 맞춰 content가 gutter 안에서 축소된다.
- 3~4열 metric/process/evidence 모듈은 2열 또는 1열로 전환한다.

### 390px
- 본문·카드·내비게이션 가로 overflow 금지.
- top navigation은 3열 grid로 줄바꿈해 겹침을 피한다.
- 모든 내부 정보 모듈은 1열로 전환한다.
- 긴 URL은 `overflow-wrap:anywhere` 처리한다.

## 7. 기술 구조

- 최종 파일: `archive/2026-09-07/index.html`
- CSS와 필요한 최소 JS는 HTML 내부에 둔다.
- 외부 JS·런타임 `fetch()`로 기사 조립하지 않는다.
- `<img>` 요소를 만들지 않는다.
- 상대경로 정적 asset 요청을 만들지 않는다.
- 내비게이션과 Contents의 모든 anchor가 실제 DOM id와 일치해야 한다.

## 8. 실제 화면 검수 게이트

Chromium으로 다음 viewport를 실제 렌더링한다.

- 1440×1100 이상
- 1366×1000
- 1024×1000
- 390×844

각 화면에서 확인:

1. document `scrollWidth === clientWidth`
2. viewport 밖으로 이탈한 요소 없음
3. Contents / LIFE / PROLOGUE / 각 기사 / AFTERWORD / Sources outer axis 일치
4. 제목·Deck·metric/process/timeline/evidence 모듈 overflow 없음
5. top navigation 겹침 없음
6. Contents·nav anchor와 DOM 순서 일치
7. `<img>` 0개, broken asset 요청 0개
8. DEEP DIVE / EDITOR'S PICK DOM 0개
9. EDITOR'S AFTERWORD가 Sources 직전

문제가 있으면 HTML/CSS를 수정한 뒤 네 viewport를 다시 검수한다.
