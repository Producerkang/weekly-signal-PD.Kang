# ISSUE 04 WORK STATE

```text
ISSUE: 04
ISSUE_START: 2026-08-10
ISSUE_END: 2026-08-16
STAGE: SECTION_DESK_COMPLETE
MANUSCRIPT_STAGE: GENERAL_ARTICLES_COMPLETE
COVER_STORY: COMPLETE
ECONOMY: COMPLETE
POLITICS: COMPLETE
SOCIETY: COMPLETE
TECH: COMPLETE
CROSS_ARTICLE_REVIEW: PENDING
DEEP_DIVE: PENDING
DEEP_DIVE_TARGET: TBD
LIFE_SCENE: PENDING
PROLOGUE: PENDING
EDITOR_AFTERWORD: PENDING
LAYOUT: PENDING
IMAGES: NOT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: 2026-08-17 02:00 REVIEW DESK — CROSS-ARTICLE REVIEW → 필요한 교정 → 필요한 경우 DEEP DIVE 또는 OMIT
```

## FRONT DESK 완료

### Cover Story
- 상태: COMPLETE
- 주제: 2026년 8월 10일 행정예고 의견수렴이 종료된 상습체불건설사업자 명단공표 업무처리 지침과 실제 공표 절차
- 중심 질문: 반복적으로 건설대금을 체불한 사업자의 이름은 어떤 기준과 절차를 거쳐 공개되는가
- 제목: `건설대금 체불 사업자의 이름은 어떻게 공개되는가`
- ARTICLE REVIEW: PASS

### Economy
- 상태: COMPLETE
- 주제: 2027년 적용 최저임금안 시간급 10,700원과 사업장 비용으로 전달되는 경로
- 중심 질문: 시간급 10,700원은 표준 월 환산액과 실제 사업장 비용으로 어떤 단계를 거쳐 전달되는가
- 제목: `시급 380원 인상은 사업장 비용으로 어떻게 번지는가`
- ARTICLE REVIEW: PASS

## SECTION DESK 완료

### Politics
- 상태: COMPLETE
- 주제: 2026년 8월 14일 접수 종료된 규제합리화 대국민 공모전과 제안이 실제 제도 변경으로 가는 행정·법적 경로
- 중심 질문: 국민이 낸 규제개선 제안은 접수 종료 뒤 어떤 단계를 거쳐 실제 제도 변경 가능성을 갖게 되는가
- 산출물:
  - `03_politics/VERIFY.md`
  - `03_politics/FLOW.md`
  - `03_politics/ARTICLE.md`
- 제목: `국민이 낸 규제 제안은 실제 제도 변경까지 어떻게 가는가`
- ARTICLE REVIEW: PASS
- 상태 구분: 공모전 접수 종료·8~9월 부처검토/전문가심사·10월 결과발표 예정과 실제 법령개정을 구분함

### Society
- 상태: COMPLETE
- 주제: 2026년 8월 12일 제1회 청소년건강패널조사 원시자료 활용 학술행사와 종단자료의 정책적 의미
- 중심 질문: 같은 청소년을 여러 해 따라가는 패널자료는 횡단면 통계와 무엇이 다르고 어떤 새 정책 질문을 가능하게 하는가
- 산출물:
  - `04_society/VERIFY.md`
  - `04_society/FLOW.md`
  - `04_society/ARTICLE.md`
- 제목: `한 번의 청소년 조사에서 ‘같은 아이의 변화’를 보는 데이터로`
- ARTICLE REVIEW: PASS
- 상태 구분: 최신 추적조사 진행과 현재 공개 원시자료 범위(2019~2023)를 구분하고 종단자료가 인과를 자동 입증하지 않음을 명시함

### Tech
- 상태: COMPLETE
- 주제: 2026년 8월 14일 마감된 정보보호제품 성능평가 지원 2차 모집과 성능평가 제도의 기술·운영 구조
- 중심 질문: 정보보호제품 성능평가는 제품의 ‘보안이 좋다’는 주장을 어떤 시험 항목과 절차를 거쳐 검증 가능한 결과로 바꾸는가
- 산출물:
  - `05_tech/VERIFY.md`
  - `05_tech/FLOW.md`
  - `05_tech/ARTICLE.md`
- 제목: `보안제품 성능평가는 ‘막아낸다’는 말을 어떻게 숫자로 바꾸나`
- ARTICLE REVIEW: PASS
- 상태 구분: 성능평가 확인서와 모든 환경의 보안성 보증·모든 공공기관 자동 도입을 구분함

## SECTION DESK 검수

- Politics → Society → Tech를 순서대로 각각 COMPLETE까지 닫은 뒤 다음 기사로 이동함.
- 세 기사 모두 `VERIFY → FLOW → ARTICLE DRAFT → ANALYSIS → COHERENCE PASS → STYLE & ARGUMENT PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE` 순서를 충족함.
- Politics·Society·Tech는 Cover Story·Economy 및 서로 간에 사건·핵심 질문·1차 자료가 독립적임.
- Politics는 규제 제안의 행정·법적 처리, Society는 종단 건강데이터, Tech는 보안제품 성능시험으로 작동 구조가 겹치지 않음.
- Issue 03의 Politics(청소년 정책 패널), Society(복지위기 발굴), Tech(GPU·NPU 연산자원)와도 중복되지 않음.
- 발표·접수종료·심사예정·자료공개·평가결과·공공도입의 상태를 구분함.
- 이미지 생성, 이미지 prompt, `IMAGE_PLAN.md`, image job 작업은 수행하지 않음.

## 다음 페이즈

2026-08-17 02:00 REVIEW DESK에서 다섯 일반 기사를 함께 읽고 다음 순서로 진행한다.

```text
CROSS-ARTICLE REVIEW
→ 주제·설명 중복 / 결론·수사 반복 / 분야별 깊이 / 출처 역할 / FLOW 템플릿화 검수
→ 필요한 기사만 IN_REVIEW로 되돌려 교정
→ 다섯 일반 기사 COMPLETE 재확인
→ 심화 필요성이 있을 때만 DEEP DIVE 선정·제작
→ 불필요하면 근거를 기록하고 DEEP_DIVE: OMIT
→ WORK_STATE 갱신
```
