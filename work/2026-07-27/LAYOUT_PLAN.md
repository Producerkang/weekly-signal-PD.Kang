# ISSUE 02 LAYOUT PLAN

상태: COMPLETE

회차: 2026-07-27—2026-08-02  
작업 경로: `work/2026-07-27/`  
발행 대상 경로: `archive/2026-07-27/`

## 1. 적용 기준

현행 `main`의 다음 문서를 우선 기준으로 한다.

1. `work/2026-07-27/WORK_STATE.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/LAYOUT_SYSTEM.md`
4. `editorial/IMAGE_PIPELINE.md`
5. `editorial/IMAGE_DIRECTION.md`
6. `editorial/ISSUE_QUALITY_GATE.md`
7. `templates/TEMPLATE_CONTRACT.md`
8. `templates/NAVIGATION_CONTRACT.md`

01~09 확정 원고는 수정하지 않는다. 기존 `archive/2026-07-27/`의 HTML/CSS와 기존 자산은 이번 지면의 완료 근거로 사용하지 않는다. 특히 다른 회차와 동일 blob인 과거 자산은 제2호 최종 이미지로 간주하지 않는다.

## 2. 선택 섹션 판정

이번 호에는 별도 `DATA`와 `WATCH`를 만들지 않는다.

- 기사 내부 수치와 시간축은 해당 기사 안의 HTML 정보 조판으로 처리한다.
- 별도 독립 섹션을 만들 만큼 본문 밖의 새 정보가 없다.
- 분량이나 시각 밀도를 채우기 위해 선택 섹션을 추가하지 않는다.

## 3. 최종 DOM·독서 순서

1. Cover
2. Contents
3. LIFE SCENE
4. PROLOGUE
5. Cover Story
6. Economy
7. Politics
8. Politics DEEP DIVE
9. Society
10. Tech
11. EDITOR'S AFTERWORD
12. Sources

Politics DEEP DIVE는 연결 대상 Politics 바로 뒤에 둔다.

### 상단 내비게이션

`Contents · Life · Prologue · Cover · Economy · Politics · Deep Dive · Society · Tech · Editor's Afterword`

Sources는 상단 내비게이션에서 생략할 수 있으나 Contents에는 포함한다. 실제 DOM id와 링크 id를 1:1로 맞춘다.

## 4. 전체 시각 리듬

제2호는 동일 기사 셸을 반복하지 않는다. 다음 리듬을 사용한다.

1. **Cover** — 전체 폭 이미지 + 강한 제목 안전영역
2. **Contents** — 조밀한 편집 목록
3. **LIFE SCENE** — 가로 4:3 생활 장면 + 소제목 없는 장문 서사
4. **PROLOGUE** — 이미지 없는 텍스트 중심 편집 스프레드
5. **Cover Story** — 넓은 기사 이미지 + 대응 관계 스트립 + 단일 열 장문
6. **Economy** — 이미지/텍스트 2열 도입 + 가격 전달 경로 조판
7. **Politics** — 완전 무인 공적 공간 이미지 + 실제 날짜 타임라인
8. **Politics DEEP DIVE** — 완전 무인 심화 이미지 + 발효 단계 매트릭스
9. **Society** — 생활 서비스 이미지 + 운영시간 비교 밴드
10. **Tech** — 연구 인프라 이미지 + 기능/지원/평가 구조 모듈
11. **EDITOR'S AFTERWORD** — 이미지 없는 좁은 단일 열 후기
12. **Sources** — 밀도 높은 참고자료 부록

공통 제목 계층과 디자인 토큰은 유지하되 이미지 역할, 본문 폭, 정보 모듈, 여백, 배경 전환을 다르게 한다.

## 5. Cover

### 역할

대표 기사인 폭염 위기경보를 한 장면으로 압축한다. Cover Story 본문 이미지와 같은 원본·같은 구도를 사용하지 않는다.

### 구성

- 88~94svh 수준의 넓은 히어로 영역
- 제목이 놓일 충분한 안전영역
- `WEEKLY SIGNAL · ISSUE 02 · 2026.07.27—08.02`
- 표지 제목은 Cover Story 제목 사용
- Deck은 짧게 유지
- 오렌지는 신호색으로만 제한적으로 사용

### 이미지 슬롯

- `cover.webp`
- REQUIRED
- 폭염과 자연스럽게 연결되는 넓은 도시·생활권 환경 장면
- 장변 2200px 이상 목표
- Cover Story 이미지와 다른 원본

## 6. Contents

- 종이색 배경의 2열 편집 목록, 390px에서는 1열
- 실제 DOM 순서와 정확히 일치
- 존재하지 않는 DATA/WATCH 링크 없음
- 섹션을 카드 격자로 과장하지 않음

## 7. LIFE SCENE

### 지면 리듬

프런트 스프레드. 이번 호에서 가장 생활적인 화면으로 시작한다.

### 구성

- `LIFE SCENE · SOCIETY / 방학 돌봄의 시간표` 라벨
- 큰 제목
- 가로 4:3 생활 장면 이미지 1장
- 본문 최대 760~800px 단일 열
- 원고의 소제목 없는 연속 서사 유지
- 중간 정책 카드·수치 패널·주장 박스 금지
- 마지막 `SCENARIO NOTE`만 별도 처리

### 이미지 슬롯

- `life-scene.webp`
- REQUIRED
- **가로 4:3**
- 보호자와 초등학생이 오전 9시 개소 전 기다리는 평범한 생활 장면
- 장변 2000px 이상 목표

## 8. PROLOGUE

- 별도 생성 이미지 없음
- 텍스트 중심의 짧은 편집 스프레드
- 첫 문단은 세리프 lede로 확대
- 이후 720~780px 단일 열
- 카드·수치 밴드·기사별 미니 프리뷰 반복 금지
- 내부 제작 단계가 시각 모듈 경계처럼 드러나지 않게 함
- 마지막 문단 뒤 충분한 여백 후 Cover Story로 전환

## 9. Cover Story — 폭염

### 레이아웃 A: Wide Image + Response Chain

- 큰 제목과 Deck
- Cover보다 가까운 거리의 넓은 기사 이미지
- 이미지 뒤 본문보다 넓은 `response-chain` 조판 1회
- 이후 장문 최대 820px 단일 열

`response-chain`:

`위기경보 격상 → 범정부 조정 → 서로 다른 현장 조치`

본문 문장을 카드로 복제하지 않고 전국 단위 경보가 현장 행동으로 갈라지는 관계만 보여준다.

### 이미지 슬롯

- `cover-story.webp`
- REQUIRED
- 그늘·쉼터·도시 노동환경·공공 휴식공간 중 하나의 구체 장면
- Cover보다 가까운 거리와 다른 구도
- 장변 2000px 이상 목표

## 10. Economy — 석유 최고가격

### 레이아웃 B: Split Intro + Price Path

- 제목/Deck 뒤 2열 도입
- 왼쪽: 석유 공급·유통 현장 이미지
- 오른쪽: 짧은 `price-path`
- 1024px 이하 1열
- 이후 본문 단일 열

`price-path`:

`정유사 공급가격 상한 1,784원 → 기존 재고·유통 → 주유소 소비자가격`

실제 평균공급가격과 판매가격을 장식용 대형 숫자 보드로 중복하지 않는다.

### 이미지 슬롯

- `economy.webp`
- REQUIRED
- 정유·저장·출하·탱커·주유소 공급 중 한 장면
- 실제 가격 숫자를 이미지 안에 넣지 않음
- 장변 2000px 이상 목표

## 11. Politics — 한·브라질 정상회담

### 레이아웃 C: Editorial Image + Timeline

- 제목/Deck
- 넓은 공적 절차 공간 이미지
- 본문 초반 단일 열
- 협상 이력이 등장하는 지점에 실제 날짜 기반 세로 타임라인 1회

타임라인 핵심점:

- 2018-05 협상 개시
- 2018-09 1차 협상
- 2021-08~09 7차 협상
- 2026-04~05 브라질 공개 의견수렴
- 2026-07-27 정상회담, 연내 재개 추진 합의

### 이미지 슬롯

- `politics.webp`
- REQUIRED
- **완전 무인**
- 빈 정부 회의실·협상 테이블·브리핑 공간 등
- 사람·얼굴·실루엣·손·반사 속 인물 모두 금지
- 장변 2000px 이상 목표

## 12. Politics DEEP DIVE — 한·메르코수르 발효 구조

### 레이아웃 D: Deep-Dive Field + Stage Matrix

- 일반 Politics와 다른 배경·폭·라벨 계층
- 도입부에 일반 기사와 다른 무인 심화 이미지
- 본문 중간에 `stage-matrix`
- 정확한 단계·날짜·조건은 HTML/CSS 조판이 담당

`stage-matrix` 핵심:

`국내 요구 정리 → 메르코수르 공동 협상안 → 협상 타결·서명 → 각국 승인·비준 → 협정별 발효 → 품목별 적용 일정`

싱가포르 FTA 사례는 파라과이·우루과이·브라질의 서로 다른 실제 발효 날짜를 비교하는 소형 사례표로 처리한다.

### 이미지 슬롯

- `deep-dive-politics.webp`
- REQUIRED
- **완전 무인**
- 사람이 없는 통관·항만·문서 검토 공간 또는 통상 절차를 연상시키는 물리적 장소
- 이미지 내부에 절차 도식이나 국기 콜라주를 만들지 않음
- 장변 2000px 이상 목표

## 13. Society — 방학 틈새돌봄

### 레이아웃 E: Service Scene + Time Bands

- 제목/Deck
- 생활 서비스가 실제 운영되는 공간 이미지
- 본문은 760~820px 중심
- 운영시간을 보여주는 `time-band` 1회

`time-band`:

- 틈새돌봄센터: 09:00—18:00 / 1,296개소
- 점심돌봄센터: 11:00—20:00 / 165개소
- 첫 운영 합계: 1,461개소

2,500개소 목표와 1,461개소 첫 운영 규모의 차이는 별도 짧은 목표/집행 비교로 표시하되 본문 설명을 반복하지 않는다.

### 이미지 슬롯

- `society.webp`
- REQUIRED
- 돌봄센터의 생활 서비스 공간, 등원·대기·급식 준비 등 자연스러운 한 장면
- LIFE SCENE과 같은 장면·같은 가족 구성 금지
- 장변 2000px 이상 목표

## 14. Tech — 공공나노팹센터

### 레이아웃 F: Lab Image + Infrastructure Map

- 제목/Deck
- 연구 인프라 이미지
- 장비 공동활용의 흐름을 짧은 `infrastructure-map`으로 조판
- 이후 본문 단일 열

`infrastructure-map`:

`공동활용 → 인력양성·실용화·창업지원 → 정부 지원 → 통합 이용 → 연간 보고·평가`

실제 장비 목록이나 공정 절차를 이미지 안에 도식화하지 않는다.

### 이미지 슬롯

- `tech.webp`
- REQUIRED
- 청정실·나노팹 장비·반도체 공정 인프라의 현실적인 연구환경
- 과도한 미래형 SF 표현 금지
- 장변 2000px 이상 목표

## 15. EDITOR'S AFTERWORD

- 별도 생성 이미지 없음
- 620~700px 수준의 좁은 단일 열 또는 매우 절제된 2열 도입
- 기사 제목 카드 목록 금지
- `40분 ↔ 긴 시간표 ↔ 두 개의 시계`의 서정적 호흡을 방해하는 정보 모듈 없음
- Sources 직전에 배치

## 16. Sources

- 기사·섹션별 출처를 정리하는 부록
- 본문보다 작은 타이포그래피와 높은 정보 밀도
- URL이 모바일에서 가로 스크롤을 만들지 않도록 줄바꿈 처리
- Contents에는 표시, 상단 내비게이션에서는 생략 가능

## 17. 이미지 슬롯 총괄

이번 지면에서 실제 사용하는 생성 이미지 슬롯은 8개이며 모두 REQUIRED다.

| 슬롯 | 파일명 | 필요성 | 주요 역할 |
|---|---|---|---|
| Cover | `cover.webp` | REQUIRED | 폭염 대표 표지 환경 |
| LIFE SCENE | `life-scene.webp` | REQUIRED | 09:00 전 돌봄 대기 생활 장면 |
| Cover Story | `cover-story.webp` | REQUIRED | 폭염 대응의 가까운 현장 |
| Economy | `economy.webp` | REQUIRED | 석유 공급·유통 물리적 장면 |
| Politics | `politics.webp` | REQUIRED | 무인 공적 협상 공간 |
| Politics DEEP DIVE | `deep-dive-politics.webp` | REQUIRED | 무인 통상·발효 절차 분위기 |
| Society | `society.webp` | REQUIRED | 방학 돌봄 서비스 운영 장면 |
| Tech | `tech.webp` | REQUIRED | 나노팹·연구 장비 인프라 |

PROLOGUE와 EDITOR'S AFTERWORD에는 생성 이미지를 만들지 않는다.

## 18. 반응형 설계

검수 기준 화면: 1440 / 1366 / 1024 / 390.

- 1440/1366: 넓은 이미지와 2열 도입을 충분히 활용
- 1024 이하: 복잡한 2열 도입은 1열 전환
- 390: 모든 본문·표·타임라인·이미지 가로 스크롤 금지
- 모바일에서도 DOM 순서 유지
- 중요한 피사체가 모바일 크롭에서 사라지면 먼저 CSS `object-position`과 지면 비율을 조정하고, 근본 해결이 불가능할 때만 이미지 재생성

## 19. 완료 판정

- [x] 최종 DOM 순서 확정
- [x] DATA/WATCH 필요성 판정
- [x] 기사별 지면 리듬 확정
- [x] 최소 세 가지 이상의 레이아웃 리듬 확보
- [x] 이미지 슬롯 8개 필요성·역할 확정
- [x] LIFE SCENE 4:3 확정
- [x] Politics 및 Politics DEEP DIVE 완전 무인 규칙 반영
- [x] 1440 / 1366 / 1024 / 390 반응형 방향 확정
- [x] 01~09 확정 원고 무수정 원칙 유지

판정: **LAYOUT COMPLETE**
