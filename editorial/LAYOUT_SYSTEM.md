# WEEKLY SIGNAL Layout System

이 문서는 WEEKLY SIGNAL의 시각 셸, 폭 체계, 반응형 원칙을 규정한다. 모든 새 회차와 발행 HTML은 이 문서를 우선 기준으로 사용한다.

현재 운영 경로에서는 새 생성 이미지를 필수로 요구하지 않는다. 지면은 이미지가 없어도 완결되어야 하며, 이미지 관련 과거 계약은 별도 재설계 전까지 발행 선행 조건이 아니다.

## 1. 운영 원칙

- 한 회차는 하나의 깨끗한 HTML과 정리된 CSS로 완성한다.
- 디자인은 완성된 기사 내용을 보조하며 약한 본문을 장식으로 감추지 않는다.
- 같은 정보를 본문·카드·사이드바·DATA에서 반복하지 않는다.
- 미사용 모듈과 숨겨진 섹션을 남기지 않는다.
- `templates/ISSUE_TEMPLATE.html`은 DOM 시작점이지 발행 가능한 완성 디자인이 아니다.
- 기사별 리듬은 배경, 타이포그래피, 내부 그리드, 표, 인용, 데이터 조판으로 만든다.
- **기사별 리듬을 만들기 위해 외곽 콘텐츠 폭을 바꾸지 않는다.**

## 2. 기본 토큰

### 색상

- `--color-navy: #07101c`
- `--color-ink: #101114`
- `--color-paper: #f2eee4`
- `--color-paper-light: #faf8f2`
- `--color-orange: #ff4a2f`
- `--color-muted: #6f716f`
- `--color-rule: rgba(16,17,20,.18)`

오렌지는 신호색으로 제한적으로 사용한다. 분야 차이는 색상만으로 해결하지 않고 타이포그래피·간격·정보 모듈로 만든다.

### 폭 — 단일 Editorial Axis 계약

WEEKLY SIGNAL은 **하나의 편집 콘텐츠 축**만 사용한다.

- 전체 페이지 셸: `--page: 1320px`
- 편집 콘텐츠 축: `--content: 1040px`
- 좌우 여백: `--gutter: clamp(20px, 4vw, 64px)`
- 호환 변수가 필요하면 `--prose: var(--content)`, `--wide: var(--content)`로만 정의한다.

`--page`는 배경, 상단바, Cover 전체 셸처럼 화면 구조를 잡는 데만 사용한다. 독자가 읽는 실제 편집 요소의 왼쪽·오른쪽 기준선은 `--content`를 따른다.

다음 요소는 예외 없이 동일한 `1040px` 최대 폭과 동일 중앙축을 사용한다.

- Contents 제목·소개·목차
- LIFE SCENE 제목·부제·서사·SCENARIO NOTE
- PROLOGUE
- 일반 기사 제목·Deck·본문
- DEEP DIVE 제목·Deck·본문
- metric/evidence/card/timeline/flow/comparison/data/watch 모듈
- 인용·주석·검증 메모
- EDITOR'S AFTERWORD
- Sources 그룹

금지:

- `.head 820px → 카드 1080px → 본문 820px`처럼 한 섹션 안에서 외곽 기준선이 바뀌는 구조
- LIFE에서 제목·서사·주석을 서로 다른 최대 폭으로 설정하는 구조
- Afterword나 Sources만 별도 720/880/1000px 폭을 두는 구조
- 기사별 차별화를 위해 700/820/880/980/1080px 등의 독립 max-width를 새로 만드는 것

허용되는 폭 차이는 **동일한 1040px 축 내부의 컬럼 분할**뿐이다. 예를 들어 2열 카드나 표는 `--content` 안에서 나눌 수 있지만 모듈 자체의 외곽선은 같은 축에 맞춘다.

Cover는 배경과 셸을 넓게 사용할 수 있지만, Cover의 라벨·제목·Deck·메타도 `--content` 기준선에 맞춘다.

### 타이포그래피

- 표지·장 제목: 강한 디스플레이 계층
- 기사 제목·Deck: 명확한 정보 계층
- 장문: 세리프 또는 명조 계열
- 라벨·메타데이터·내비게이션: 산세리프 계열
- 한국어 제목은 `word-break: keep-all`과 자연스러운 줄바꿈을 사용한다.
- 폭 통일을 깨기 위해 제목에 임의의 좁은 `max-width`를 두지 않는다.

## 3. 기본 독서 순서

1. Cover
2. Contents
3. LIFE SCENE
4. PROLOGUE
5. Cover Story
6. Cover Story에 연결된 선택적 DEEP DIVE
7. Economy
8. Economy에 연결된 선택적 DEEP DIVE
9. Politics
10. Politics에 연결된 선택적 DEEP DIVE
11. Society
12. Society에 연결된 선택적 DEEP DIVE
13. Tech
14. Tech에 연결된 선택적 DEEP DIVE
15. 필요한 DATA
16. 필요한 WATCH
17. EDITOR'S AFTERWORD
18. Sources

DEEP DIVE는 실제 심화 대상 기사 바로 뒤에 둔다. 존재하지 않는 선택 섹션은 DOM·목차·내비게이션에서 제거한다.

## 4. 회차 밀도 기준

별도 사용자 지시가 없으면 Cover Story와 Economy·Politics·Society·Tech 일반 기사를 모두 포함한다.

한 호에는 다음이 보여야 한다.

- 프런트 지면과 본문 지면의 명확한 전환
- 분야별 기사 사이의 시각적 구분
- 최소 세 가지 이상의 기사 레이아웃 리듬
- 데이터·인용·표·여백이 만드는 속도 변화
- 긴 문서를 끝까지 읽게 하는 장면 전환
- **모든 리듬이 같은 Editorial Axis 위에서 정렬되는 일관성**

## 5. 기사별 레이아웃 선택

사용 가능한 조합 예:

- 강한 타이포그래피 브레이크아웃 + 단일 열 본문
- 핵심 수치 밴드 + 본문
- 본문 중간 비교표
- 실제 날짜 중심 타임라인
- 근거 카드 2~4개
- 짧은 인용 또는 핵심 명제 스프레드
- 1040px 축 내부의 절제된 2열 도입
- 장문 중간 색면·문장 전환
- 시나리오 그리드
- 정책 전후 비교 모듈

모듈은 새 정보를 제공할 때만 사용한다. 장식적 빈 카드나 같은 문장의 반복은 금지한다. 모듈 선택이 달라도 외곽 폭은 `--content`로 고정한다.

## 6. 공통 셸

### Cover

- 이미지 없이도 완결되는 독립 지면으로 설계한다.
- 배경은 전체 화면을 사용할 수 있다.
- 라벨·제목·Deck·메타의 좌우 축은 `--content`와 일치한다.
- 존재하지 않는 이미지 placeholder를 만들지 않는다.

### Contents

- 실제 DOM 순서와 동일
- 내부 스크롤 없음
- 제목·소개·목차 전체를 `--content` 축에 정렬

### LIFE SCENE

- 생활 장면 중심의 제목과 부제
- 소제목 없이 흐르는 생활 서사
- 마지막 별도 `SCENARIO NOTE`
- 제목·서사·NOTE의 외곽 좌우선은 모두 `--content`와 일치

### PROLOGUE

- 텍스트 중심 편집 스프레드
- 카드·기사별 미니 프리뷰 반복을 피한다.
- `--content` 축을 유지하면서 타이포그래피 크기와 문단 호흡으로 전환을 만든다.

### 일반 기사 / DEEP DIVE

- 제목, Deck, 본문, 출처가 같은 외곽 축에 놓인다.
- 기사 성격에 맞는 정보 모듈을 내부에서 선택한다.
- 고정 사이드 레일 때문에 전체 콘텐츠 기준선이 변하지 않게 한다.

### EDITOR'S AFTERWORD

- 같은 `--content` 축을 사용한다.
- 더 조용한 느낌은 패딩·글자 크기·배경으로 만들고 별도 좁은 max-width로 만들지 않는다.

## 7. 승인 보조 모듈

필요할 때만 사용한다.

- `evidence-grid`
- `metric-board`
- `comparison-table`
- `scenario-grid`
- `timeline`
- `quote-block`
- `scenario-note`
- `full-bleed-break`

`full-bleed-break`는 배경색이 화면 전체로 확장될 수 있다는 뜻이지 텍스트/카드 콘텐츠 축이 바뀐다는 뜻이 아니다.

## 8. 이미지 없는 지면 원칙

- 이미지 부재를 빈 박스나 깨진 링크로 표현하지 않는다.
- 이전 회차 이미지를 새 회차용으로 임의 재사용하지 않는다.
- 실제 사용 가능한 정적 자산이 별도 확정된 경우에만 HTML에 포함한다.
- 이미지 없이도 제목·Deck·숫자·표·인용·여백·색면·규칙선으로 정보 계층을 강화한다.
- 이미지가 없다는 이유로 발행을 차단하지 않는다.

## 9. 반응형

검수 화면:

- 1440px 이상
- 1366px
- 1024px
- 390px

규칙:

- 데스크톱에서 모든 주요 편집 요소의 좌우 기준선이 동일해야 한다.
- 1024px 이하에서 복잡한 내부 그리드는 1열로 전환한다.
- 모바일에서는 `--content`가 사용 가능 폭 100%가 되고 `--gutter`만 유지한다.
- 390px에서 본문 가로 스크롤 금지
- 제목, 표, 카드가 화면 밖으로 넘지 않음
- 모바일에서도 DOM 읽기 순서 유지

## 10. CSS 품질

- 초기 CSS에서 구조를 해결하고 후단 패치 묶음을 만들지 않는다.
- 같은 선택자를 반복 덮어쓰지 않는다.
- `!important`는 불가피한 경우만 사용한다.
- 사용하지 않는 선택자는 발행 전에 삭제한다.
- 새 회차 CSS에서 `700px`, `720px`, `820px`, `880px`, `980px`, `1000px`, `1080px` 같은 별도 콘텐츠 max-width를 만들지 않는다.
- 예외가 정말 필요하면 `LAYOUT_PLAN.md`에 이유와 적용 요소를 명시하고, PUBLISH DESK 화면 검수에서 별도 승인한다.

## 11. 실제 화면 품질 비교 및 폭 게이트

HTML 코드만 읽고 검수를 끝내지 않는다. 네 화면을 실제 렌더링하거나 캡처해 확인한다.

데스크톱 화면에서는 최소한 다음 요소의 `getBoundingClientRect()`를 비교한다.

- Contents
- LIFE 제목 / LIFE 본문 / SCENARIO NOTE
- 각 일반 기사 제목 / Deck / 정보 모듈 / 본문
- DEEP DIVE 제목 / 정보 모듈 / 본문
- AFTERWORD
- Sources

허용 오차는 브라우저 소수점 반올림을 고려해 좌우 각각 2px 이내다. 별도 승인된 full-bleed 배경을 제외하고 외곽 기준선이 다르면 SCREEN REVIEW 실패다.

시각적 다양성은 폭 변화가 아니라 배경, 내부 열, 타이포그래피, 규칙선, 카드 구조와 수직 리듬으로 만든다.

## 12. 월요일 09:00 PUBLISH DESK 레이아웃 계약

완료 순서:

```text
완성 원고 readback
→ LAYOUT_PLAN 작성
→ LAYOUT_PLAN COMPLETE
→ HTML/CSS 제작
→ 실제 화면 검수
→ 폭 축 검수
→ 수정·재검수
→ 발행
```

`LAYOUT_PLAN.md`에서 최소한 다음을 확정한다.

1. 최종 DOM 순서
2. DATA / WATCH 필요성
3. 기사별 지면 리듬과 정보 모듈
4. **공통 Editorial Axis: 1040px**
5. 이미지 없이 완결되는 Cover·LIFE SCENE·기사 도입부
6. 1440 / 1366 / 1024 / 390 반응형 계획
7. 기존 archive 이미지의 임의 재사용 금지

### 12.1 만들지 않는 것

현행 운영에서는 다음을 만들거나 갱신하지 않는다.

- `IMAGE_PLAN.md`
- `image_prompts/*.txt`
- `image_runs/`
- `jobs/image_job.json`
- 이미지 생성 handoff

### 12.2 WORK_STATE 진행 예

09:00 시작 시:

```text
STAGE: PUBLISH_DESK
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: PENDING
IMAGES: NOT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
```

최종 반영 뒤:

```text
STAGE: PUBLISHED
MANUSCRIPT_STAGE: COMPLETE
LAYOUT: COMPLETE
IMAGES: NOT_REQUIRED
HTML: COMPLETE
SCREEN_REVIEW: COMPLETE
PUBLISH: COMPLETE
NEXT: ISSUE CLOSED
```
