# ISSUE 02 LAYOUT PLAN

상태: COMPLETE

회차: 2026-07-27—2026-08-02
작업 경로: `work/2026-07-27/`
발행 대상 경로: `archive/2026-07-27/`

## 1. 적용 기준과 충돌 처리

이번 지면은 다음 현행 문서를 우선 기준으로 설계한다.

1. `templates/TEMPLATE_CONTRACT.md`
2. `templates/NAVIGATION_CONTRACT.md`
3. `editorial/WEEKLY_RUNBOOK.md`
4. `editorial/LAYOUT_SYSTEM.md`
5. `editorial/IMAGE_DIRECTION.md`
6. `editorial/ISSUE_QUALITY_GATE.md`

`LAYOUT_SYSTEM.md` 일부에 남아 있는 과거 `EDITOR'S PICK` 표기는 현행 `TEMPLATE_CONTRACT.md`, `NAVIGATION_CONTRACT.md`, `WORK_STATE.md`와 충돌하므로 제2호에서는 사용하지 않는다. 현행 구조는 `PROLOGUE`와 `EDITOR'S AFTERWORD`를 사용한다.

기존 `archive/2026-07-27/`의 과거 생성 HTML과 CSS는 재사용하지 않는다. 제1호 `archive/2026-07-20/`은 매거진 밀도와 시각적 리듬의 비교 기준으로만 사용한다.

## 2. 선택 섹션 판정

이번 호에는 별도 `DATA`와 `WATCH` 섹션을 만들지 않는다.

- 기사 안의 수치와 시간축은 해당 기사에서만 필요한 HTML 정보 조판으로 처리한다.
- 별도 DATA/WATCH를 만들 만큼 독립적인 새 정보가 없다.
- 분량이나 지면 밀도를 채우기 위해 선택 섹션을 추가하지 않는다.

## 3. 최종 DOM·독서 순서

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

Politics DEEP DIVE는 Politics 바로 뒤에 둔다.

### 고유 섹션 id

- `top`
- `contents`
- `life-scene`
- `prologue`
- `cover-story`
- `economy`
- `politics`
- `deep-dive-politics`
- `society`
- `tech`
- `editors-afterword`
- `sources`

### 상단 내비게이션

실제 DOM 순서대로 다음만 표시한다.

`Contents · Life · Prologue · Cover · Economy · Politics · Deep Dive · Society · Tech · Editor's Afterword`

Sources는 상단 내비게이션에서는 생략하고 Contents에는 포함한다.

## 4. 전체 시각 리듬

제2호는 한 가지 기사 셸을 반복하지 않는다. 최소 여섯 종류의 지면 리듬을 사용한다.

1. **Cover** — 전체 폭 이미지 + 강한 좌측 제목 안전영역
2. **LIFE SCENE** — 프런트 스프레드 + 생활 장면 이미지 + 소제목 없는 단일 서사
3. **PROLOGUE** — 이미지 없는 텍스트 중심 편집 스프레드
4. **Cover Story** — 넓은 이미지 + 현장 전개 관계 스트립 + 장문 단일 열
5. **Economy / Society / Tech** — 서로 다른 도입 구조와 정보 조판
6. **Politics** — 날짜 중심 타임라인형 기사
7. **Politics DEEP DIVE** — 일반 기사와 색·폭·데이터 조판이 다른 심화 지면
8. **EDITOR'S AFTERWORD** — 좁은 단일 열, 이미지 없는 후기 지면

공통 제목 계층과 색 토큰은 유지하되 기사별 이미지 비율, 도입 폭, 정보 모듈, 배경 전환과 여백을 달리한다.

## 5. Cover

### 역할
대표 기사인 폭염 위기경보를 한 장면으로 압축한다. Cover Story 본문 이미지와 같은 장면을 쓰지 않는다.

### 구성
- 화면 높이 88~94svh의 전체 폭 이미지
- 좌측 또는 좌하단에 큰 제목 안전영역
- `WEEKLY SIGNAL · ISSUE 02 · 2026.07.27—08.02`
- 표지 제목은 Cover Story 제목을 사용
- Deck은 짧게 유지
- 오렌지는 라벨·세부 신호에만 사용

### 이미지 역할
도심 또는 생활권에서 폭염이 체감되는 넓은 환경 장면. 특정 실제 사건 현장이나 실존 인물을 재현하지 않는다.

## 6. Contents

- 종이색 배경의 조밀한 2열 편집 목록
- 모바일 1열
- 실제 DOM 순서와 정확히 일치
- 기사별 짧은 설명은 제목을 반복하지 않고 진입점만 제시
- 섹션 수를 카드 격자로 과장하지 않음

## 7. LIFE SCENE

### 지면 리듬
프런트 스프레드. 이번 호에서 가장 생활적인 화면으로 시작한다.

### 구성
- `LIFE SCENE · SOCIETY / 방학 돌봄의 시간표` 라벨
- 큰 제목
- 현실적인 생활 장면 이미지 1장
- 본문은 최대 760~800px 단일 열
- 원고의 소제목 없는 연속 서사를 그대로 유지
- 중간 정책 카드·수치 패널·근거 박스 금지
- 마지막 `SCENARIO NOTE`만 별도 박스

### 이미지 역할
오전 9시 개소 직전의 마을돌봄센터 주변 또는 차 안/센터 앞에서 기다리는 보호자와 아이의 일상 장면. 과도한 표정 연출 없이 시간의 어긋남이 보이게 한다.

## 8. PROLOGUE

### 지면 리듬
텍스트 중심의 짧은 편집 스프레드. LIFE SCENE의 서사에서 본 기사 묶음으로 호흡을 바꾸는 역할이다.

### 구성
- 별도 생성 이미지 사용하지 않음
- `PROLOGUE` 라벨
- 현행 확정 원고에는 독립 제목을 새로 추가하지 않는다.
- 첫 문단을 22~28px 세리프 lede로 확대
- 이후 본문은 720~780px 단일 열
- 카드·수치 밴드·기사별 프리뷰 박스 금지
- 배경은 Cover/Life와 구분되는 연한 중성지 톤
- 마지막 문단 뒤 충분한 여백을 둔 뒤 Cover Story로 전환

프롤로그의 내부 제작 단계가 시각 모듈 경계로 보이지 않게 한다.

## 9. Cover Story — 폭염

### 레이아웃 A: Wide Scene + Response Chain

- 큰 제목과 Deck
- Cover와 다른 역할의 넓은 기사 이미지
- 이미지 뒤 본문보다 넓은 `response-chain` 조판 1회
- 이후 장문은 최대 820px 단일 열
- 본문 중간에는 추가 카드 남발 금지

### response-chain
정확한 관계만 짧게 조판한다.

`위기경보 격상 → 범정부 조정 → 서로 다른 현장 조치`

이는 본문 문장을 복제하는 카드가 아니라 전국 단위 경보가 현장별 행동으로 갈라지는 관계를 한눈에 보여주는 구조도다.

### 이미지 역할
실제 현장 기록처럼 보이지 않는, 폭염 속 공공 쉼터·그늘·도시 노동 환경 중 하나의 구체 장면. 표지보다 가까운 거리와 다른 구도.

## 10. Economy — 석유 최고가격

### 레이아웃 B: Split Intro + Price Path

- 제목/Deck 뒤 2열 도입
- 왼쪽: 주유·유통 현장을 보여주는 기사 이미지
- 오른쪽: 짧은 `price-path` 조판
- 1024px 이하에서는 1열
- 이후 본문은 단일 열

### price-path

`정유사 공급가격 상한 1,784원 → 기존 재고·유통 → 주유소 소비자가격`

실제 평균공급가격과 평균판매가격을 별도 대형 숫자 보드로 중복하지 않는다. 본문 안의 통계는 본문에서 읽게 한다.

### 이미지 역할
정유 저장·출하 또는 주유소 공급 과정의 물리적 공간. 가격 숫자를 이미지 안에 생성하지 않는다.

## 11. Politics — 한·브라질 정상회담

### 레이아웃 C: Editorial Image + Timeline

- 제목/Deck
- 넓은 공적 절차 공간 이미지
- 본문 초반은 단일 열
- 과거 협상 이력이 등장하는 지점에 실제 날짜 기반 세로 타임라인 1회

### timeline 범위

- 2018 협상 시작
- 2021 7차 협상
- 2026 공개 의견수렴
- 2026-07-27 정상회담 및 재개 추진

각 항목은 날짜와 사건명 수준으로만 두고 본문의 세부 설명을 카드에 다시 복제하지 않는다.

### 이미지 역할
정상회담 자체를 가짜 보도사진으로 재현하지 않는다. 정부 간 협의·문서·회의가 존재할 법한 공적 공간을 에디토리얼 장면으로 표현한다.

## 12. Politics DEEP DIVE — 한·메르코수르 발효 구조

### 레이아웃 D: Dark Deep Dive + Stage Matrix

일반 Politics와 명확히 다른 지면으로 만든다.

- 짙은 네이비 또는 잉크 배경의 도입부
- `DEEP DIVE · POLITICS / 한·메르코수르 발효 구조` 라벨
- 별도 심화 이미지
- 본문은 다시 밝은 종이색으로 전환 가능
- 핵심 관계를 `stage-matrix`로 1회 시각화

### stage-matrix

`협상 → 타결/서명 → 국내 승인·비준 → 발효 → 품목별 적용 일정`

표의 열은 `단계 / 무엇이 결정되는가 / 기업이 실제 적용받는가` 정도로 제한한다. 싱가포르 사례의 세부 날짜는 본문에서 읽게 하고 표로 전부 재복제하지 않는다.

### 이미지 역할
국경·통상 문서를 상징물로 나열하지 않는다. 항만·통관·문서 검토가 함께 느껴지는 현실적인 에디토리얼 장면 또는 실제 사진적 질감의 래스터 콜라주.

## 13. Society — 틈새돌봄

### 레이아웃 E: Time-led Opening

- 제목/Deck
- 이미지와 짧은 시간 조판을 나란히 배치
- 핵심 시각 요소는 시설 수보다 `언제 문이 열리는가`
- 이후 장문 단일 열

### time-band

두 운영 유형의 시간을 수평 시간대로 표시한다.

- 틈새돌봄센터: 09:00—18:00
- 점심돌봄센터: 11:00—20:00

센터 수와 급식 조건까지 같은 밴드에 밀어 넣지 않는다. 숫자는 본문에서 읽게 한다.

### 이미지 역할
실제 지역아동센터를 특정하지 않는 생활권 돌봄 공간. 등원·대기·식사 준비 등 한 가지 행동에 집중한다.

## 14. Tech — 공공나노팹센터

### 레이아웃 F: Full-bleed Equipment Break + Use Path

- 제목/Deck 뒤 현실적인 클린룸·공정장비 이미지
- 기사 중간에 본문 폭을 넘어서는 이미지 브레이크아웃 1회
- 장비 공동활용 흐름을 `use-path`로 짧게 표시
- 본문은 이미지 전후로 단일 열 유지

### use-path

`필요 장비 찾기 → 이용 신청·예약 → 공정/분석 이용 → 다음 연구·실증 단계`

법률상 기능·지원 수단·연간 평가 항목을 별도 카드 묶음으로 반복하지 않는다.

### 이미지 역할
실제 나노팹 내부와 유사한 물리적 현실감을 갖되 특정 기관 내부를 정확히 재현한 것처럼 만들지 않는다. 연구자보다 장비·공간을 중심에 둔다.

## 15. EDITOR'S AFTERWORD

### 지면 리듬
Sources 직전의 조용한 종결부.

- 이미지 사용하지 않음
- 최대 660~700px의 좁은 단일 열
- `EDITOR'S AFTERWORD` 라벨
- 첫 문단만 조금 큰 세리프
- 기사 제목·숫자 카드·편집 노트 박스 금지
- 짙은 상단 규칙선과 넉넉한 위아래 여백
- 마지막 문장 뒤 Sources와 명확한 간격

후기 자체의 두 개 시간 감각이 텍스트 리듬으로 남도록 한다.

## 16. Sources

- 모든 기사 출처를 섹션별로 정리
- `기관 / 자료명·링크 / 날짜` 구조
- 데스크톱 3열 정보행, 모바일 1열
- 출처는 본문보다 시각적으로 낮은 계층
- 외부 링크임을 접근 가능하게 표시
- Sources 이후 별도 서사 섹션을 두지 않는다.

## 17. 이미지 슬롯 및 파일명

다음 8개 주요 이미지를 새로 생성한다.

1. `cover.webp` — Cover, 장변 1800px 이상
2. `life-scene.webp` — LIFE SCENE, 장변 1600px 이상
3. `cover-story.webp` — Cover Story, 장변 1600px 이상
4. `economy.webp` — Economy, 장변 1600px 이상
5. `politics.webp` — Politics, 장변 1600px 이상
6. `deep-dive-politics.webp` — Politics DEEP DIVE, 장변 1600px 이상
7. `society.webp` — Society, 장변 1600px 이상
8. `tech.webp` — Tech, 장변 1600px 이상

PROLOGUE와 EDITOR'S AFTERWORD에는 별도 이미지가 필요하지 않다.

표지와 Cover Story 이미지는 같은 폭염 주제를 다루되 서로 다른 장면·거리·구도로 제작한다.

## 18. 반응형 설계

### 1440px 이상
- 전체 셸 최대 1320px
- 기사 본문 최대 820px
- 이미지 브레이크아웃 최대 1080~1200px

### 1366px
- 동일 계층 유지
- 제목 줄바꿈과 이미지 안전영역 재확인

### 1024px
- split intro와 복잡한 정보 조판은 1열 또는 단순 2열로 축소
- sticky rail 사용하지 않음

### 390px
- 모든 본문과 모듈 1열
- 가로 스크롤 금지
- 표는 열을 줄이거나 행형 카드로 재배치하며 단순 overflow-x를 기본값으로 삼지 않음
- 제목 `word-break: keep-all`
- 이미지 핵심 피사체가 세로 크롭에서도 남아야 함
- 내비게이션은 가로 스크롤 가능한 단순 링크열을 유지하되 본문 가로 스크롤과 분리

## 19. 색·타이포·공통 토큰

현행 기본 토큰을 유지한다.

- Navy `#07101c`
- Ink `#101114`
- Paper `#f2eee4`
- Paper Light `#faf8f2`
- Orange `#ff4a2f`

오렌지는 신호색으로만 쓴다. 기사별 차이는 배경색 남발이 아니라 이미지 비율, 여백, 데이터 조판, 제목 폭과 도입 구조로 만든다.

장문은 명조/세리프 계열, 라벨·내비게이션·데이터는 산세리프 계열을 사용한다.

## 20. 접근성·구조

- 의미 있는 이미지에 구체적인 `alt` 제공
- 생성 이미지가 실제 사건 기록으로 오인될 수 있으면 캡션에 `편집용 생성 이미지` 고지
- `header/nav/main/section/article/figure/footer` 의미 구조 사용
- nav, Contents, DOM 순서 일치
- 키보드 포커스 표시 유지
- 색상만으로 상태를 구분하지 않음
- 모든 표와 타임라인은 텍스트로도 의미가 보존되게 작성

## 21. 지면 설계 완료 판정

- [x] 01~09 COMPLETE 원고만 사용한다.
- [x] Cover Story와 Economy·Politics·Society·Tech가 모두 존재한다.
- [x] Politics DEEP DIVE는 Politics 바로 뒤에 배치한다.
- [x] LIFE SCENE → PROLOGUE → 본 기사로 이어지는 프런트 리듬을 설계했다.
- [x] EDITOR'S AFTERWORD → Sources로 닫히는 후반 리듬을 설계했다.
- [x] DATA/WATCH는 새 정보 부재로 만들지 않는다.
- [x] 최소 세 가지를 넘는 서로 다른 기사 레이아웃 리듬을 확정했다.
- [x] 기사별 정보 모듈은 관계·시간·단계를 명확히 할 때만 사용한다.
- [x] 기존 제2호 archive HTML/CSS는 재사용하지 않는다.
- [x] 이미지 8개의 역할과 배치 위치를 확정했다.
- [x] 1440/1366/1024/390 반응형 기준을 설계했다.
- [x] 실제 화면 검수는 HTML 제작 이후 별도 단계로 남긴다.

판정: **LAYOUT COMPLETE**

다음 단계: `13 이미지 제작`
