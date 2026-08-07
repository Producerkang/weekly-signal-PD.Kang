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
- CROSS_ARTICLE_REVIEW: PENDING
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

### Tech

- `05_tech/VERIFY.md`: COMPLETE
- `05_tech/FLOW.md`: COMPLETE
- `05_tech/ARTICLE.md`: COMPLETE
- 제목: `두 나노팹에 ‘공공’ 지위를 붙였다, 연구장비 공동활용은 무엇이 달라지나`
- 검증 핵심: 한국나노기술원·나노종합기술원은 기존 나노팹 운영기관이며, 2026년 5월 공공나노팹센터로 지정된 뒤 7월 29일 출범했다. 정부 출연·공유재산 특례·통합정보시스템·연간 보고·평가라는 법적 운영구조와 실제 이용성과를 구분

## 다음 작업

`CROSS_ARTICLE_REVIEW`를 시작한다.

일반 기사 5편이 모두 COMPLETE가 됐으므로 다음 실행에서 Cover Story·Economy·Politics·Society·Tech를 한꺼번에 비교한다.

### CROSS_ARTICLE_REVIEW 검토 항목

1. 주제와 설명 중복
2. 같은 결론·수사 반복
3. 분야별 깊이 편차
4. 출처 역할 편중
5. 빠진 배경지식
6. 기사마다 설명 흐름이 선형적으로 이어지는지
7. 기사별 FLOW가 같은 템플릿으로 수렴하지 않는지
8. 짧은 문단이 습관적으로 반복되는지
9. 부정·대조가 기사 첫머리나 기본 추진력으로 사용되는지
10. 각 부정문이 앞에서 세운 주장 범위를 한정하거나 실제 반론을 검토하는 기능을 갖는지
11. 독자가 하지 않은 해석을 상정한 뒤 반박하는 문장이 있는지
12. 정의와 관계 설명으로 충분한 내용을 굳이 부정형으로 만든 곳이 있는지
13. 대조형 제목·소제목이 실제 핵심 쟁점보다 수사적 긴장을 위해 선택됐는지
14. 한 호 전체 정보 밀도

수정이 필요한 기사는 해당 기사만 `IN_REVIEW`로 되돌린다. 흐름 문제는 FLOW부터, 논증 기능 문제는 ANALYSIS와 STYLE & ARGUMENT PASS부터 다시 본다.

이번 CROSS_ARTICLE_REVIEW에서는 기존 기사에 부정문이 있다는 이유만으로 삭제하지 않는다. 그 부정이 **논증을 강화·한정하는가**, 아니면 **부정적 논조를 유지하기 위해 존재하는가**를 기능 기준으로 판정한다.

CROSS_ARTICLE_REVIEW가 끝나기 전에는 DEEP_DIVE, LIFE_SCENE, EDITORS_PICK, 이미지·HTML 제작으로 넘어가지 않는다.

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
