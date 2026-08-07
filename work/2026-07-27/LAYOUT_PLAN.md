# ISSUE 02 LAYOUT PLAN

상태: COMPLETE

회차: 2026-07-27—2026-08-02
작업 경로: `work/2026-07-27/`
발행 대상 경로: `archive/2026-07-27/`

## 1. 적용 기준

현행 우선 기준:

1. `templates/TEMPLATE_CONTRACT.md`
2. `templates/NAVIGATION_CONTRACT.md`
3. `editorial/WEEKLY_RUNBOOK.md`
4. `editorial/LAYOUT_SYSTEM.md`
5. `editorial/IMAGE_PIPELINE.md`
6. `editorial/IMAGE_DIRECTION.md`
7. `editorial/ISSUE_QUALITY_GATE.md`

`EDITOR'S PICK`은 폐기된 레거시 섹션이며 사용하지 않는다.

기존 `archive/2026-07-27/`의 과거 생성 HTML과 CSS는 재사용하지 않는다. 제1호 `archive/2026-07-20/`은 매거진 밀도와 이미지 품질 비교 기준으로만 사용한다.

## 2. 선택 섹션

이번 호에는 별도 DATA와 WATCH 섹션을 만들지 않는다.

기사 안의 수치와 시간축은 해당 기사에 필요한 HTML 정보 조판으로 처리한다.

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

`Contents · Life · Prologue · Cover · Economy · Politics · Deep Dive · Society · Tech · Editor's Afterword`

Sources는 상단 내비게이션에서는 생략하고 Contents에는 포함한다.

## 4. 전체 시각 리듬

제2호는 한 가지 기사 셸을 반복하지 않는다.

1. **Cover** — 전체 폭 이미지 + 강한 제목 안전영역
2. **LIFE SCENE** — 프런트 스프레드 + 생활 장면 이미지 + 소제목 없는 단일 서사
3. **PROLOGUE** — 이미지 없는 텍스트 중심 편집 스프레드
4. **Cover Story** — 넓은 이미지 + 현장 전개 관계 스트립 + 장문 단일 열
5. **Economy / Society / Tech** — 서로 다른 도입 구조와 정보 조판
6. **Politics** — 날짜 중심 타임라인형 기사
7. **Politics DEEP DIVE** — 일반 기사와 색·폭·데이터 조판이 다른 심화 지면
8. **EDITOR'S AFTERWORD** — 좁은 단일 열, 이미지 없는 후기 지면

## 5. Cover

### 역할

대표 기사인 폭염 위기경보를 한 장면으로 압축한다. Cover Story 본문 이미지와 같은 원본을 쓰지 않는다.

### 구성

- 화면 높이 88~94svh의 전체 폭 이미지
- 좌측 또는 좌하단에 큰 제목 안전영역
- `WEEKLY SIGNAL · ISSUE 02 · 2026.07.27—08.02`
- 표지 제목은 Cover Story 제목 사용
- Deck은 짧게 유지

### 이미지

- 폭염과 자연스럽게 연결되는 넓은 환경 또는 에디토리얼 장면
- 실제 특정 사건 현장 재현 필요 없음
- 장변 2200px 이상 목표
- 비율은 장면과 표지 조합에 맞춰 유연하게 결정

## 6. Contents

- 종이색 배경의 조밀한 2열 편집 목록
- 모바일 1열
- 실제 DOM 순서와 일치
- 섹션 수를 카드 격자로 과장하지 않음

## 7. LIFE SCENE

### 지면 리듬

프런트 스프레드. 이번 호에서 가장 생활적인 화면으로 시작한다.

### 구성

- `LIFE SCENE · SOCIETY / 방학 돌봄의 시간표` 라벨
- 큰 제목
- 현실적인 생활 장면 이미지 1장
- 본문 최대 760~800px 단일 열
- 소제목 없는 연속 서사 유지
- 중간 정책 카드·수치 패널 금지
- 마지막 `SCENARIO NOTE`만 별도 박스

### 이미지

제2호 LIFE SCENE은 **가로형 4:3**으로 생성한다.

- 장변 2000px 이상 목표
- 보호자와 아이가 개소 전 기다리는 생활 장면
- 자연스러운 복장·자세
- 광고형 포즈·과도한 비극 금지
- 가로/모바일 크롭에서 핵심 관계가 남도록 구성

향후 세로 중심 LIFE SCENE 지면에서는 4:5를 사용할 수 있다.

## 8. PROLOGUE

### 지면 리듬

텍스트 중심의 짧은 편집 스프레드.

### 구성

- 별도 생성 이미지 없음
- `PROLOGUE` 라벨
- 첫 문단을 세리프 lede로 확대
- 이후 본문은 720~780px 단일 열
- 카드·수치 밴드·기사별 미니 프리뷰 박스 금지
- 마지막 문단 뒤 충분한 여백 후 Cover Story 전환

## 9. Cover Story — 폭염

### 레이아웃 A: Wide Scene + Response Chain

- 큰 제목과 Deck
- Cover와 다른 역할의 넓은 기사 이미지
- 이미지 뒤 본문보다 넓은 `response-chain` 조판 1회
- 이후 장문 최대 820px 단일 열

`response-chain`:

`위기경보 격상 → 범정부 조정 → 서로 다른 현장 조치`

### 이미지

- Cover보다 가까운 폭염 대응 장면
- 그늘·쉼터·도시 노동 환경 등
- Cover와 동일 원본 금지
- 장변 2000px 이상 목표
- 비율 유연

## 10. Economy — 석유 최고가격

### 레이아웃 B: Split Intro + Price Path

- 제목/Deck 뒤 2열 도입
- 왼쪽: 유통·공급 현장 이미지
- 오른쪽: 짧은 `price-path` 조판
- 1024px 이하 1열
- 이후 본문 단일 열

`price-path`:

`정유사 공급가격 상한 1,784원 → 기존 재고·유통 → 주유소 소비자가격`

### 이미지

- 정유·저장·출하·탱커·주유소 공급 중 한 장면
- 전체 전달경로를 한 장에 설명하지 않음
- 장변 2000px 이상 목표
- 비율 유연

## 11. Politics — 한·브라질 정상회담

### 레이아웃 C: Editorial Image + Timeline

- 제목/Deck
- 넓은 공적 절차 공간 이미지
- 본문 초반 단일 열
- 과거 협상 이력이 등장하는 지점에 날짜 기반 세로 타임라인 1회

### 이미지 절대 규칙

**완전 무인(human-free).**

사람, 얼굴, 실루엣, 뒷모습, 손, 원거리 인물이 하나라도 보이면 탈락한다.

허용 방향:

- 빈 정부 회의실
- 빈 협상 테이블
- 빈 연단·브리핑룸
- 문서·마이크·의자·공적 공간

장변 2000px 이상 목표. 비율 유연.

## 12. Politics DEEP DIVE

### 레이아웃 D: Dark Deep Dive + Stage Matrix

- 짙은 네이비 또는 잉크 배경 도입
- `DEEP DIVE · POLITICS / 한·메르코수르 발효 구조` 라벨
- 별도 심화 이미지
- 핵심 관계를 `stage-matrix`로 1회 시각화

`stage-matrix`:

`협상 → 타결/서명 → 국내 승인·비준 → 발효 → 품목별 적용 일정`

### 이미지 절대 규칙

Politics와 동일하게 **완전 무인**.

- 사람이 없는 항만·통관·사무 공간
- 사물과 공간 중심
- 정확한 절차는 HTML 조판이 담당
- 장변 2000px 이상 목표
- 비율 유연

## 13. Society — 틈새돌봄

### 레이아웃 E: Time-led Opening

- 제목/Deck
- 이미지와 짧은 시간 조판을 나란히 배치
- 핵심 시각 요소는 시설 수보다 `언제 문이 열리는가`
- 이후 장문 단일 열

### 이미지

- 돌봄·생활 서비스 공간
- 등원·대기·준비·식사 준비 중 한 장면
- 장변 2000px 이상 목표
- 비율 유연

## 14. Tech — 공공나노팹센터

### 레이아웃 F: Full-bleed Equipment Break + Use Path

- 제목/Deck 뒤 현실적인 클린룸·공정장비 이미지
- 기사 중간 본문 폭을 넘어서는 이미지 브레이크아웃 1회
- 장비 공동활용 흐름을 `use-path`로 짧게 표시

`use-path`:

`필요 장비 찾기 → 이용 신청·예약 → 공정/분석 이용 → 다음 연구·실증 단계`

### 이미지

- 클린룸·공정·분석·계측 장비
- 실제 연구 인프라의 물리적 현실감
- 필요하면 비식별 연구자 등장 가능
- 과도한 SF 분위기 금지
- 장변 2000px 이상 목표
- 비율 유연

## 15. EDITOR'S AFTERWORD

- 좁은 단일 열
- 별도 생성 이미지 없음
- 기사 카드 목록 없음
- 실제 제작 후기의 호흡을 유지
- Sources 직전 배치

## 16. 이미지 슬롯

제2호 현행 주요 이미지 슬롯:

1. `cover.webp`
2. `life-scene.webp`
3. `cover-story.webp`
4. `economy.webp`
5. `politics.webp`
6. `deep-dive-politics.webp`
7. `society.webp`
8. `tech.webp`

이미지 실제 생성 순서·상태·재시도는 `IMAGE_PLAN.md`와 `editorial/IMAGE_PIPELINE.md`가 소유한다.

## 17. 반응형

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
- 본문 가로 스크롤 금지
- 제목 `word-break: keep-all`
- 이미지 핵심 피사체가 크롭에서도 남아야 함

크롭 문제는 먼저 CSS `object-position`과 지면 박스 비율로 해결한다. 이미지 자체가 근본적으로 부적합할 때만 재생성한다.

## 18. 접근성

- 의미 있는 이미지에 구체적인 `alt` 제공
- 생성 이미지가 실제 사건 기록으로 오인될 수 있으면 `편집용 생성 이미지` 고지
- `header/nav/main/section/article/figure/footer` 의미 구조 사용
- nav, Contents, DOM 순서 일치
- 키보드 포커스 표시 유지
- 색상만으로 상태 구분 금지

## 19. 완료 판정

- [x] 01~09 COMPLETE 원고만 사용
- [x] Cover Story와 Economy·Politics·Society·Tech 존재
- [x] Politics DEEP DIVE는 Politics 바로 뒤
- [x] LIFE SCENE → PROLOGUE → 본 기사 프런트 리듬 설계
- [x] EDITOR'S AFTERWORD → Sources 후반 리듬 설계
- [x] DATA/WATCH 미제작 판정
- [x] 서로 다른 기사 레이아웃 리듬 확정
- [x] 제2호 주요 이미지 슬롯 8개 확정
- [x] LIFE SCENE 4:3 이미지 비율 확정
- [x] Politics 계열 human-free 이미지 규칙 반영
- [x] 1440/1366/1024/390 반응형 기준 확정

판정: **LAYOUT COMPLETE**

다음 단계: `13 이미지 제작`
