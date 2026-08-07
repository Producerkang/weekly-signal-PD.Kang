# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 목표

제1호의 설명 완결성을 유지하면서, 내부 검증 언어가 독자용 문체를 지배하지 않도록 기사 제작 구조를 다시 적용한다.

## 적용 구조

각 일반 기사는 다음 순서로 하나씩 완성한다.

`VERIFY → NARRATIVE → ANALYSIS → STYLE PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE`

- `VERIFY.md`: 내부 검증 전용
- `ARTICLE.md`: 독자용 최종 기사 전용
- 두 파일의 언어와 역할을 섞지 않는다.
- 현재 기사 COMPLETE 전에는 다음 일반 기사 본문을 작성하지 않는다.

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: PENDING
- TECH: PENDING
- CROSS_ARTICLE_REVIEW: PENDING
- DEEP_DIVE: PENDING
- LIFE_SCENE: PENDING
- EDITORS_PICK: PENDING

## 이번 실행 완료

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

### Politics

- `03_politics/VERIFY.md`: COMPLETE
- `03_politics/ARTICLE.md`: COMPLETE
- 제목: `일곱 개 협력문서와 한·메르코수르 협상의 서로 다른 시간표`
- 검증 핵심: 7개 MOU·MOC, 한·브라질 경제·통상 위원회, 한·메르코수르 무역협상의 권한·절차·효력 발생 시점을 분리하고 2021년 이후 공식 협상 라운드 미재개 상태를 확인

## 다음 작업

`04_society/VERIFY.md`를 생성하고 Society 기사 검증부터 시작한다.

현재 Cover → Economy → Politics는 각각 `VERIFY → NARRATIVE → ANALYSIS → STYLE PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE`를 닫았다. Society 본문은 아직 작성하지 않았으며, 다음 실행에서도 검증을 먼저 끝낸 뒤에만 `04_society/ARTICLE.md`로 이동한다.

일반 기사 5편이 모두 COMPLETE가 되기 전에는 CROSS_ARTICLE_REVIEW, DEEP_DIVE, LIFE_SCENE, EDITORS_PICK, 이미지·HTML 제작으로 넘어가지 않는다.

## 현재 핵심 교정 원칙

1. 내부 검증에서는 계획·계약·집행·성과와 유사 제도의 차이를 엄격히 구분한다.
2. 독자용 기사에서는 검증 메모를 복사하지 않고 사건·정의·배경·변화·작동·영향 순으로 새로 서술한다.
3. 독자가 잘못 알고 있다고 가정하는 문체를 기본값으로 쓰지 않는다.
4. `A가 아니다. B다.` 구조는 실제 쟁점일 때만 사용한다.
5. 한계·부작용·미확정 사항은 충분한 소개와 설명 뒤에 배치한다.
6. 제목과 Deck은 본문 및 STYLE PASS가 끝난 뒤 만든다.

## 기준 문서

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/WEEKLY_RUNBOOK.md`
3. `editorial/EDITORIAL_STANDARD.md`
4. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
5. `editorial/VOICE_AND_TONE.md`
6. `editorial/SOURCE_POLICY.md`

## 이전 테스트 처리

이전 Cover·Economy·Politics 테스트 초안은 검증 메모와 독자용 원고가 한 파일에 섞인 구형 구조였으므로 현재 작업공간에서 제거했다. 필요하면 Git 이력에서 확인할 수 있으며 새 기사 작성의 기준으로 사용하지 않는다.
