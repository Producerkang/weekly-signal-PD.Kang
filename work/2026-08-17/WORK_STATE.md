# ISSUE 05 WORK STATE

```text
ISSUE: 05
ISSUE_START: 2026-08-17
ISSUE_END: 2026-08-23
STAGE: REVIEW_DESK_COMPLETE
MANUSCRIPT_STAGE: GENERAL_ARTICLES_REVIEWED
COVER_STORY: COMPLETE
ECONOMY: COMPLETE
POLITICS: COMPLETE
SOCIETY: COMPLETE
TECH: COMPLETE
CROSS_ARTICLE_REVIEW: COMPLETE
DEEP_DIVE: OMIT
DEEP_DIVE_TARGET: NONE
LIFE_SCENE: PENDING
PROLOGUE: PENDING
EDITOR_AFTERWORD: PENDING
LAYOUT: PENDING
IMAGES: NOT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: 04:00 FEATURE DESK — LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD
```

## FRONT DESK 완료

### Cover Story

- 제목: `특별재난지역 ‘우선 선포’ 뒤, 복구의 돈과 절차는 어떻게 움직이는가`
- 사건: 8월 15~18일 집중호우 뒤 8월 21일 거제시 전역과 통영시 산양읍·봉평동 특별재난지역 우선 선포
- 중심 질문: 우선 선포가 복구 재정·주민 지원·후속 피해조사의 순서를 어떻게 바꾸는가
- 상태: VERIFY → FLOW → ARTICLE DRAFT → ANALYSIS → COHERENCE PASS → STYLE & ARGUMENT PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE

### Economy

- 제목: `매도 사이드카의 5분, 주식시장에서 실제로 멈추는 것은 무엇인가`
- 사건: 8월 19일 유가증권시장 프로그램 매도호가 5분 효력정지
- 중심 질문: 사이드카가 시장 전체가 아니라 어떤 주문 흐름을 어떤 조건에서 늦추는가
- Cover Story와 사건·질문·1차 자료가 독립적임
- 상태: VERIFY → FLOW → ARTICLE DRAFT → ANALYSIS → COHERENCE PASS → STYLE & ARGUMENT PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE

## SECTION DESK 완료

### Politics

- 제목: `유죄판결이 없어도 범죄수익을 환수하는 절차가 생긴다`
- 사건: 8월 20일 독립몰수제를 도입하는 범죄수익은닉규제법 개정안 국회 본회의 통과
- 중심 질문: 기소할 수 없는 사건에서도 범죄수익을 환수할 때 수사기관·법원·재산권자의 권한과 절차는 어떻게 달라지는가
- Cover Story·Economy와 사건·질문·1차 자료가 독립적임
- REVIEW DESK 교정: 실제 `ARTICLE.md`에 누락됐던 Deck을 복구하고 ARTICLE REVIEW를 다시 통과함
- 상태: COMPLETE

### Society

- 제목: `학교 200m 안 집회, 이제 학교장의 판단이 경찰 절차와 연결된다`
- 사건: 8월 20일 교육환경보호구역 내 집회 신고를 학교장에게 통보하고 학습권 침해 우려 시 경찰 조치를 요청할 수 있도록 하는 교육환경법 개정안 국회 본회의 통과
- 중심 질문: 학교장과 경찰의 새 연결 절차가 학생의 학습권과 집회의 자유 사이에서 어떻게 작동하는가
- Politics까지의 기사와 사건·질문·1차 자료가 독립적임
- 상태: COMPLETE

### Tech

- 제목: `GPU만 늘리는 데이터센터에서 CPU·GPU·NPU를 함께 쓰는 인프라로`
- 사건: 8월 20일 과기정통부의 개방형 AI 컴퓨팅 인프라 생태계 업계 간담회와 과기정통부-AMD 이기종 AI 컴퓨팅 협력 후속 논의
- 중심 질문: 추론 중심 AI 서비스에서 CPU·GPU·NPU를 함께 쓰는 구조가 무엇을 해결하고 국산 NPU가 어떤 실증을 거쳐야 실제 시장에 들어가는가
- 앞선 네 기사와 사건·질문·1차 자료가 독립적임
- 상태: COMPLETE

## REVIEW DESK 완료

### CROSS-ARTICLE REVIEW

- 상세 기록: `work/2026-08-17/CROSS_ARTICLE_REVIEW.md`
- 주제·설명 중복: PASS
- 결론·수사 반복: PASS — 후속 판단 기준이라는 공통 골격은 있으나 실제 결론과 확인 대상은 기사별로 다름
- 분야별 깊이 편차: PASS
- 출처 역할 편중: PASS
- 빠진 배경지식: PASS
- FLOW 템플릿화: PASS — Politics·Society의 법률 기사 구조는 유사하지만 작동 메커니즘과 기본권 질문이 독립적임
- 한 호 전체 정보 밀도: PASS

### 일반 기사 교정

Politics만 `IN_REVIEW` 대상으로 판정했다.

- 결함: 내부 완료 확인에는 `HEADLINE & DECK: PASS`라고 적혀 있었지만 실제 `ARTICLE.md`에 Deck이 없었음
- 조치: 본회의 통과 상태, 독립몰수 적용 범위, 환수 공백, 법원 심사와 제3자 재산권 보호를 요약한 2문장 Deck 복구
- 본문·출처는 변경하지 않음
- 재검수: PASS → `POLITICS: COMPLETE`

그 외 Cover Story·Economy·Society·Tech는 교정 없이 COMPLETE 유지.

### DEEP DIVE 판정

`DEEP_DIVE: OMIT`

근거:

- Cover의 복구비 집행 심화는 정밀조사·복구계획·실제 집행자료가 아직 후속 증거라 현재는 과거 사례 일반화가 커짐.
- Economy의 사이드카 효과 분석은 다수 사례의 시장미시구조 연구가 필요한 별도 연구 기사 수준으로 범위가 커짐.
- Politics의 비유죄 기반 몰수와 재산권 비교법 심화는 독립 법률 분석으로 성립하지만 Society까지 기본권·사법통제를 다루는 이번 호에서 법제 비중이 과도해짐.
- Society의 비례성 심화는 일반 기사에서 이미 학교장 요청·경찰 권한·제한 기준·사후심사를 충분히 다룸.
- Tech의 이기종 컴퓨팅 심화는 제품별 실측자료가 부족해 개념 설명 반복 가능성이 큼.

즉, 가능한 후보들은 일반 기사에서 핵심 질문이 이미 충분히 닫혔거나 새 핵심 주장 3개와 독립 출처 2개 이상을 확보하려면 별도 독립 기사 수준으로 범위가 커진다. 억지 심화편을 추가하지 않는다.

## 다음 단계

FEATURE DESK는 REVIEW DESK 완료 상태와 `DEEP_DIVE: OMIT` 근거를 확인한 뒤 다음 순서를 직렬로 수행한다.

```text
LIFE SCENE
→ COMPLETE
→ PROLOGUE
→ COMPLETE
→ EDITOR'S AFTERWORD
→ COMPLETE
```

이미지 생성·이미지 prompt·IMAGE_PLAN·image job은 현행 경로에 포함하지 않는다.
