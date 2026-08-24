# ISSUE 05 LAYOUT PLAN

STATUS: COMPLETE
ISSUE: 05
ISSUE_START: 2026-08-17
ISSUE_END: 2026-08-23

## 1. Final DOM

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

`DEEP_DIVE: OMIT`이므로 DEEP DIVE DOM·Contents·내비게이션 항목을 만들지 않는다. `EDITOR'S PICK`도 만들지 않는다.

## 2. DATA / WATCH

별도 DATA·WATCH 섹션은 만들지 않는다. 기사 내부의 실제 정보 구조를 해당 기사 모듈로 흡수한다.

- Cover Story: 특별재난지역 선포 뒤 `사전조사 → 우선 선포 → 정밀조사 → 복구계획·재원 → 주민지원` 절차 strip
- Economy: `5% / 1분 / 5분 / 당일 1회` 핵심 규칙 metric board
- Politics: `범죄 관련 재산 확인 → 독립몰수 청구 → 법원 심사 → 제3자 권리구제` 절차 grid
- Society: `집회 신고 → 경찰의 학교장 통보 → 학교장 판단·요청 → 경찰의 최종 조치` 연결 flow
- Tech: CPU / GPU / NPU / software orchestration의 역할을 4개 evidence card로 구성

## 3. Single Editorial Axis

현행 `LAYOUT_SYSTEM.md`를 그대로 따른다.

```text
--page: 1320px
--content: 1040px
--gutter: clamp(20px, 4vw, 64px)
```

Contents, LIFE 제목·본문·SCENARIO NOTE, PROLOGUE, 모든 일반 기사 제목·Deck·본문·정보 모듈, AFTERWORD, Sources의 외곽 좌우 기준선은 모두 `--content: 1040px` 하나에 맞춘다.

기사별 리듬을 만들기 위해 700/720/820/880/980/1000/1080px 등의 독립 콘텐츠 max-width를 만들지 않는다. full-bleed 배경은 허용하되 내부 콘텐츠는 같은 Editorial Axis에 정렬한다.

## 4. Section rhythm

### Cover
- 이미지 없음.
- navy 전체면 + 얇은 강수/행정 단계 그래픽을 CSS 배경으로만 처리.
- 제목, Deck, issue period, `956.1mm / 우선 선포 / 복구` 메타를 1040px 축에 정렬.
- 대표 제목은 `특별재난지역 ‘우선 선포’ 뒤, 복구의 돈과 절차는 어떻게 움직이는가`.

### Contents
- 두 열 목차는 desktop, 한 열은 mobile.
- 실제 DOM 순서와 정확히 일치.

### LIFE SCENE
- 밝은 paper-light 배경.
- 이미지 없이 생활 서사의 시간감이 보이도록 문단 간격과 첫 장면 lead를 강화.
- 마지막 SCENARIO NOTE 분리.

### PROLOGUE
- 중간 톤 배경, 큰 제목과 넓은 문단 간격.
- 카드형 프리뷰를 쓰지 않고 텍스트 중심 스프레드로 처리.

### Cover Story
- dark full-bleed background.
- 5단계 복구 절차 strip을 본문 앞에 배치.
- 강수량·피해액·복구비를 같은 숫자처럼 보이지 않게 설명 모듈에서 역할 구분.

### Economy
- 밝은 배경.
- `5% / 1분 / 5분 / 1회` 규칙 metric board.
- 사이드카와 서킷브레이커 차이는 본문에서 설명하고 별도 반복 카드로 만들지 않는다.

### Politics
- 따뜻한 alt background.
- 사람의 형사책임과 재산의 범죄 관련성 분리를 보여주는 4단계 절차 grid.
- 법원 심사와 제3자 권리구제를 시각적 종착점으로 둔다.

### Society
- blue-tint background.
- `신고 → 통보 → 판단·요청 → 경찰 조치` 4단계 flow.
- 학교장이 직접 집회를 금지하지 않는다는 권한 경계는 flow와 본문에서 한 번씩만 명확히 한다.

### Tech
- neutral paper background.
- CPU / GPU / NPU / software orchestration 4개 card.
- 칩 하나보다 시스템 전체가 경쟁 단위라는 결론으로 연결.

### EDITOR'S AFTERWORD
- 조용한 warm-gray 배경.
- 별도의 좁은 카드 폭을 만들지 않고 동일 1040px 축 안에서 padding·상단 rule로 마감감을 만든다.

### Sources
- 기사별 source group.
- 기사에서 사용한 주요 자료만 중복 제거해 정리.

## 5. Responsive contract

실제 검수 화면:

- 1440 × 1100 이상
- 1366 × 1000
- 1024 × 1000
- 390 × 844

검수 항목:

1. 문서 전체 `scrollWidth <= clientWidth`
2. 제목·카드·flow·metric viewport 이탈 없음
3. 1440/1366에서 Contents/LIFE/PROLOGUE/각 기사/AFTERWORD/Sources 외곽축 좌우 오차 각각 2px 이내
4. 1024 이하에서 grid는 필요한 경우 1~2열로 축소
5. 390에서 모든 정보 모듈 1열, 모바일 가로 스크롤 없음
6. 상단 nav가 화면 밖으로 밀려 문서 전체 폭을 넓히지 않음
7. Contents·nav·DOM 앵커 일치
8. `<img>` 및 존재하지 않는 로컬 자산 참조 0개
9. 외부 JS·런타임 `fetch()` 기사 조립 없음
10. AFTERWORD 바로 다음에 Sources 배치

## 6. Image policy

```text
IMAGES: NOT_REQUIRED
```

- 이미지 생성 금지
- 이미지 prompt / IMAGE_PLAN / image job 금지
- 빈 이미지 placeholder 금지
- 과월호 이미지 재사용 금지
- 이번 호 archive는 정적 자산이 필요하지 않으면 `index.html`만 둔다.

## 7. Publication candidate

```text
archive/2026-08-17/
└─ index.html
```

CSS와 최소 JavaScript는 `index.html`에 내장한다. ARTICLE 원고는 런타임 fetch 없이 HTML에 직접 평탄화한다.
