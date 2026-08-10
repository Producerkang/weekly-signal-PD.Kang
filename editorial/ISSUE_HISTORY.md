# WEEKLY SIGNAL Issue History

이 문서는 발행 결과, 실패 원인과 교정 판단을 기록한다. 최신호 상태는 `latest.json`이 소유한다. 재사용 가능한 상세 규칙은 `QUALITY_LEARNING_LOG.md`에 누적한다.

## Issue 01 — 2026.07.20–07.26

- 발행 경로: `archive/2026-07-20/`
- 상태: 발행 유지

### 유지할 품질 기준

- 생소한 용어의 정의·배경·작동 구조·영향을 충분히 설명한다.
- 발표·계획·계약·시행·성과를 구분한다.
- 일반 기사 본문은 디자인 없이도 독립적인 읽을 가치를 가진다.
- LIFE SCENE은 현실적인 가상 서사로 구조적 문제를 체감하게 한다.
- 분야별 기사와 지면 전환의 밀도를 확보한다.

---

## Issue 02 — 2026.07.27–08.02

- 발행 경로: `archive/2026-07-27/`
- 최초 발행일: 2026년 8월 6일
- 최종 재발행일: 2026년 8월 9일
- 제목: `발표 이후, 실제로 작동하는가`
- 상태: **PUBLISHED · 최종 이미지 없는 지면 반영**

### 초판 실패

- HTML이 축소된 셸에 가까웠다.
- 여러 주요 이미지가 동일 저용량 파일을 이름만 바꿔 재사용한 상태였다.
- Economy와 Politics가 Cover Story와 충분히 독립되지 못했다.
- Society와 Tech가 공식 발표 요약 수준에 머물렀다.
- DEEP DIVE가 독립 질문·새 주장·새 근거 없이 끝났다.
- 모든 기사 지면이 비슷한 패턴을 반복했다.

### 최종 원고 구성

- Cover Story: 폭염 위기경보 ‘심각’이 범정부·현장 운영을 어떻게 바꾸는가
- Economy: 석유 최고 공급가격 1,784원이 재고·유통을 거쳐 주유소 가격으로 전달되는 구조
- Politics: 한·브라질 정상회담의 7개 협력문서, 경제·통상 위원회, 한·메르코수르 협상의 서로 다른 후속 시간표
- DEEP DIVE: 메르코수르 공동협상 이후 국가별 비준·발효가 갈라지는 구조와 싱가포르 FTA 사례
- Society: 방학 중 틈새돌봄 1,461개소의 운영시간과 최초 목표 2,500개소의 집행 차이
- Tech: 첫 공공나노팹센터 두 곳의 공동활용·지원·통합 이용·연간 평가 구조
- LIFE SCENE: 오전 8시 20분 출근과 오전 9시 돌봄센터 개방 사이의 40분
- PROLOGUE: 경보·가격·외교문서·돌봄 시간표·연구장비가 서로 다른 다음 단계로 넘어가는 한 주
- EDITOR'S AFTERWORD: 생활의 40분과 무역협정의 긴 비준 시계를 나란히 남기는 마감

### 최종 지면 교정

2026년 8월 9일 최종 재발행에서 이미지 생성 파이프라인을 현행 운영 경로에서 분리했다.

- `EDITOR'S PICK` 레거시 섹션 제거
- 별도 WATCH 섹션 제거
- 최종 DOM을 `LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → DEEP DIVE → Society → Tech → EDITOR'S AFTERWORD → Sources`로 정리
- 기존 임시·재사용 이미지 자산과 HTML 이미지 참조 제거
- Cover, LIFE SCENE, 일반 기사 도입을 이미지 없이 완결되는 HTML/CSS 지면으로 재설계
- 타이포그래피·색면·규칙선·수치 밴드·절차 타임라인·비교표로 기사별 시각 리듬을 구분

### 이미지 파이프라인 상태

이미지 생성 관련 실험 기록은 `jobs/`, `work/2026-07-27/IMAGE_PLAN.md`, `image_prompts/`, `image_runs/` 등에 남아 있을 수 있다. 그러나 현재 주간 제작 경로에서는 비활성 참고 자료다.

**Issue 03부터 새 이미지 생성은 발행 선행 조건이 아니다.** 08:00 이미지 제작 단계도 현행 예약 작업에서 사용하지 않는다.

---

## Issue 03 — 2026.08.03–08.09

- 발행 경로: `archive/2026-08-03/`
- 발행일: 2026년 8월 10일
- 제목: `시작된 일들의 다음 장면`
- 상태: **PUBLISHED · 이미지 없는 5-페이즈 경로**

### 최종 원고 구성

- Cover Story: 8월 1일 시행된 안전보건 현황 공시 의무와 매년 이어지는 공개 책임
- Economy: E-9 3회차 12,630명 배정 이후 고용허가·계약·입국·사업장 배치의 순서
- Politics: 국민생각함 청소년 정책 패널과 10월 29일 시행 지방청소년정책위원회 청소년 대표 참여
- Society: 취약채무자·불법사금융 피해자 금융위기 신호를 활용한 8월 기획발굴 조사
- DEEP DIVE: 위기정보 확대가 실제 복지사각지대 감소로 이어지기 위한 선별·전달·정보처리 조건
- Tech: 고성능컴퓨팅 지원사업 GPU·NPU 추가 선정 이후 자원 할당·환경 구성·활용 단계
- LIFE SCENE: 선정 결과 뒤 실제 연산환경을 기다리는 작은 개발팀의 작업표
- PROLOGUE: `숫자 다음에 남아 있는 것들`
- EDITOR'S AFTERWORD: `아직 채워지지 않은 칸`

### 지면 설계

- `LAYOUT_PLAN.md`를 09:00 PUBLISH DESK에서 작성하고 같은 턴에서 HTML까지 이어서 제작했다.
- 최종 DOM은 `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → DEEP DIVE → Tech → EDITOR'S AFTERWORD → Sources`다.
- Society 심화편을 Society 바로 뒤에 배치했다.
- DATA와 WATCH는 별도 지면으로 만들지 않았다. 각 기사 안의 수치·절차 모듈만으로 필요한 정보를 충분히 전달할 수 있고 별도 섹션은 반복을 늘린다고 판단했다.
- Cover는 무이미지 대형 타이포그래피, Economy는 절차 타임라인, Politics는 두 참여 통로 비교, Society는 발굴→지원 흐름, DEEP DIVE는 3층 평가 그리드, Tech는 연산자원 이용 단계로 서로 다른 지면 리듬을 사용했다.
- 이미지·이미지 placeholder·`assets/` 참조·이전 회차 이미지 재사용은 모두 사용하지 않았다.
- `EDITOR'S PICK`은 만들지 않았다.

### 실제 화면 검수

1440px 이상, 1366px, 1024px, 390px에서 실제 브라우저 렌더링을 검수했다.

- 최초 390px 검수에서 상단 내비게이션 줄 겹침을 발견해 모바일 topbar를 2행 구조로 수정했다.
- 수정 후 네 화면 모두 문서 가로 오버플로 없음.
- Contents·내비게이션·DOM 순서 일치.
- 내부 앵커 누락 없음.
- `<img>` 요소와 존재하지 않는 이미지 자산 요청 없음.
- 외부 JS 및 런타임 `fetch()` 기사 조립 없음.
- Society → DEEP DIVE, EDITOR'S AFTERWORD → Sources 연결 정상.

`tools/validate_repository.py`의 저장소 전체 직접 실행은 실행 환경의 GitHub DNS 제한 때문에 로컬 checkout을 만들 수 없어 수행하지 못했다. 대신 공개 HTML을 실제 Chromium 렌더링하고 구조 검사를 별도로 수행했으며, 최종 편집 검수는 통과했다. 구조 검사기는 보조 수단이고 실제 화면·편집 검수가 최종 승인 기준이라는 현행 계약에 따라 발행했다.

### 다음 회차 시작 기준

1. `README.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/QUALITY_LEARNING_LOG.md`
4. 이 문서의 최신 회차 기록
5. 해당 회차 `WORK_STATE.md`

현행 마감 흐름은 계속 5-페이즈 계약을 따른다.

```text
일요일 22:00 FRONT DESK
→ 월요일 00:00 SECTION DESK
→ 02:00 REVIEW DESK
→ 04:00 FEATURE DESK
→ 09:00 PUBLISH DESK
```

09:00 PUBLISH DESK가 `LAYOUT_PLAN → HTML → 실제 화면 검수 → 발행`을 한 턴에서 완료한다. 07:00·08:00 별도 제작 단계는 사용하지 않는다.
