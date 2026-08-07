# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 목표

제1호의 설명 완결성을 유지하면서, 내부 검증 언어가 독자용 문체를 지배하지 않게 하고, 충분한 정보를 독자가 한 줄로 따라갈 수 있는 흐름으로 조직한다.

부정·대조는 기사 분위기를 만들기 위한 기본 서사 장치로 사용하지 않는다. 사건과 구조를 먼저 설명한 뒤, 이미 세운 논증의 범위를 한정하거나 실제 반론을 검토할 때만 사용한다.

## 적용 구조

각 일반 기사는 다음 순서로 하나씩 완성한다.

`VERIFY → FLOW MAP → NARRATIVE → ANALYSIS → COHERENCE PASS → STYLE & ARGUMENT PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE`

- `VERIFY.md`: 내부 검증 전용
- `FLOW.md`: 독자 이해 순서와 문단 논리 설계 전용
- `ARTICLE.md`: 독자용 최종 기사 전용
- 세 파일의 언어와 역할을 섞지 않는다.
- 현재 기사 COMPLETE 전에는 다음 일반 기사 본문을 작성하지 않는다.

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: COMPLETE
- TECH: COMPLETE
- CROSS_ARTICLE_REVIEW: COMPLETE
- DEEP_DIVE: PENDING
- LIFE_SCENE: PENDING
- EDITORS_PICK: PENDING

## 일반 기사 완료

### Cover Story

- `01_cover/VERIFY.md`: COMPLETE
- `01_cover/ARTICLE.md`: COMPLETE
- 제목: `폭염 위기경보 ‘심각’, 중앙재난안전대책본부는 무엇을 움직이나`
- 검증 핵심: 행안부 위기경보·중대본과 사업장 체감온도 규칙의 역할을 분리하고, 경보 이후 실제 보호를 운영기록으로 추적하도록 구성

### Economy

- `02_economy/VERIFY.md`: COMPLETE
- `02_economy/ARTICLE.md`: COMPLETE
- 제목: `휘발유 1,784원 상한은 주유소까지 어떻게 전달되나`
- 검증 핵심: 석유 최고가격의 적용대상을 정유사 공급가격으로 확정하고, 오피넷 공급가격·주유소 판매가격의 정의와 전달 시차·비용 부담을 분리
- 후속 편집 검토에서 정보 정확성과 설명량은 충분하지만 문장·문단이 병렬적으로 퍼지는 문제가 확인됐다. 이를 계기로 FLOW MAP과 COHERENCE PASS를 현행 제작 표준에 추가했다.

### Politics

- `03_politics/VERIFY.md`: COMPLETE
- `03_politics/ARTICLE.md`: COMPLETE
- 제목: `일곱 개 협력문서와 한·메르코수르 협상의 서로 다른 시간표`
- 검증 핵심: 7개 MOU·MOC, 한·브라질 경제·통상 위원회, 한·메르코수르 무역협상의 권한·절차·효력 발생 시점을 분리하고 2021년 이후 공식 협상 라운드 미재개 상태를 확인

### Society

- `04_society/VERIFY.md`: COMPLETE
- `04_society/FLOW.md`: COMPLETE
- `04_society/ARTICLE.md`: COMPLETE
- 제목: `방학 오전 아홉 시를 누가 맡나, 틈새돌봄 1,461곳이 시작됐다`
- 검증 핵심: 7월 13일 최초 2,500개소 목표와 7월 23일 실제 첫 운영 확정 1,461개소를 구분하고, 기존 마을돌봄시설의 운영시간·급식 확대가 가정의 실제 이용경로로 어떻게 이어지는지 설명
- CROSS_ARTICLE_REVIEW에서 목표·집행 구분을 둘러싼 교정형 부정문을 줄이고, 신청·이용조건과 교육부·복지부 사업의 관계를 긍정형 정의 중심으로 재작성했다. 결말은 시설 수·이용시간·실제 이용자의 관계로 회수했다.

### Tech

- `05_tech/VERIFY.md`: COMPLETE
- `05_tech/FLOW.md`: COMPLETE
- `05_tech/ARTICLE.md`: COMPLETE
- 제목: `공공나노팹센터 두 곳 출범, 공동활용의 지원·평가 근거가 생겼다`
- 검증 핵심: 한국나노기술원·나노종합기술원은 기존 나노팹 운영기관이며, 2026년 5월 공공나노팹센터로 지정된 뒤 7월 29일 출범했다. 정부 출연·공유재산 특례·통합정보시스템·연간 보고·평가라는 법적 운영구조와 실제 이용성과를 구분
- CROSS_ARTICLE_REVIEW에서 반박형 FLOW를 `공동활용 필요 → 법정 기능 → 지원 수단 → 이용 경로 → 보고·평가 → 성과`로 재설계하고, 제목·Deck·소제목·결말의 대조형 서사를 직접 설명형으로 교정했다.

## CROSS_ARTICLE_REVIEW 완료

- 검토 파일: `CROSS_ARTICLE_REVIEW.md`
- 판정: 일반 기사 5편 전체 통과
- 수정 기사: Society, Tech
- 수정 없음: Cover Story, Economy, Politics

### 핵심 판정

1. 다섯 기사의 중심 질문과 대상은 서로 분리돼 있어 주제 중복 없음
2. Politics·Tech가 상대적으로 길지만 제도 복잡도에 따른 필요한 깊이로 판단
3. 기사 전반의 1차 자료 비중이 높으므로 DEEP_DIVE에서는 일반 기사와 다른 독립 출처를 최소 2개 이상 확보하는 기준을 강하게 적용
4. Cover·Economy·Politics의 대조는 실제 권한·가격단계·협상경로 차이를 설명하는 기능이 있어 유지
5. Society는 가상 오해 반박 문장을 줄이고 목표·첫 집행·이용조건을 각각 정의하는 방향으로 교정
6. Tech는 FLOW부터 재설계해 `새 시설이 아니다`, `이름만 바뀐 것인가`, `현판이 아니다` 같은 반박형 추진력을 제거
7. 반복되던 `다음 기록·운영실적을 봐야 한다`형 결말은 Society와 Tech에서 기사 고유의 작동원리로 회수
8. Tech 제목을 질문형에서 선언형으로 바꿔 Cover·Economy와의 제목 리듬 반복을 줄임

## 다음 작업

`DEEP_DIVE`를 시작한다.

일반 기사 5편과 CROSS_ARTICLE_REVIEW가 모두 COMPLETE이므로 다음 실행에서는 먼저 다섯 기사 가운데 실제 심화 가치가 있는 질문을 고른다.

### DEEP_DIVE 시작 순서

1. 일반 기사가 이미 답한 질문을 기사별로 짧게 정리한다.
2. 일반 기사 반복 없이 새로 답할 단 하나의 심화 질문을 후보별로 잡는다.
3. 새 핵심 주장 최소 3개를 만들 수 있는지 확인한다.
4. 일반 기사에 없던 독립 출처 최소 2개를 확보할 수 있는지 확인한다.
5. 쟁점 대립·정책 필요성·구조 해부·결과 시나리오·역사 비교 중 가장 적합한 심화 방식을 고른다.
6. 차별성이 가장 높은 후보만 `06_deep_dive/`에서 VERIFY부터 시작한다.

일반 기사와 같은 정의·원인·경로·결론을 반복하는 후보는 버린다. 차이를 만들 수 없으면 다른 기사나 다른 질문을 선택한다.

DEEP_DIVE가 완료되기 전에는 LIFE_SCENE, EDITORS_PICK, 이미지·HTML 제작으로 넘어가지 않는다.

## 현재 핵심 교정 원칙

1. 내부 검증에서는 계획·계약·집행·성과와 유사 제도의 차이를 엄격히 구분한다.
2. 독자용 기사에서는 VERIFY를 복사하지 않고 FLOW를 기준으로 처음부터 새로 서술한다.
3. 독자가 잘못 알고 있다고 가정하는 문체를 기본값으로 쓰지 않는다.
4. 설명은 정의·사실·작동을 먼저 세운다.
5. 부정은 이미 세운 논증의 범위 한정, 실제 반론 검토, 조건·예외 명시에 사용할 수 있다.
6. 부정을 위해 가상의 오해·반박 대상을 만들지 않는다.
7. 여러 사실·기관·제도 트랙을 한꺼번에 열지 않고 하나를 설명해 닫은 뒤 다음 축으로 이동한다.
8. 앞 문단의 결론이 다음 문단의 질문·전제·시간 변화·작동 단계로 이어지게 한다.
9. 문단은 하나의 중심 질문 또는 논리 단위를 묶는 단위이며, 3~5문장은 일반적인 호흡일 뿐 고정 규칙이 아니다.
10. 한계·부작용·미확정 사항은 충분한 소개와 설명 뒤에 배치한다.
11. 제목과 Deck은 COHERENCE PASS와 STYLE & ARGUMENT PASS가 끝난 뒤 만든다.

## 기준 문서

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/EDITORIAL_STANDARD.md`
4. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
5. `editorial/VOICE_AND_TONE.md`
6. `editorial/SOURCE_POLICY.md`

## 이전 테스트 처리

이전 테스트 초안과 과거 커밋의 주제 선택은 현재 기사 주제 선정 기준으로 사용하지 않는다. 현재 `main`의 현행 기준과 `WORK_STATE`, 해당 회차의 새 리서치 결과만으로 다음 기사를 결정한다.
