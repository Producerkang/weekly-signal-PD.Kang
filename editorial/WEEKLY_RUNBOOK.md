# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 시작 전에 읽을 현행 기준

새 회차 또는 재개 작업에서는 다음 순서로 확인한다.

1. 해당 회차 `work/YYYY-MM-DD/WORK_STATE.md`
2. `editorial/ARTICLE_WRITING_STANDARD.md`
3. `editorial/EDITORIAL_STANDARD.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
6. `editorial/LIFE_SCENE_STANDARD.md`
7. `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
8. `editorial/VOICE_AND_TONE.md`
9. `editorial/SOURCE_POLICY.md`
10. `editorial/IMAGE_PIPELINE.md`
11. `editorial/IMAGE_DIRECTION.md`
12. `editorial/LAYOUT_SYSTEM.md`
13. `editorial/PUBLISHING_PIPELINE.md`
14. `templates/TEMPLATE_CONTRACT.md`
15. `templates/NAVIGATION_CONTRACT.md`

회차별 세부 지면과 이미지 슬롯은 해당 회차의 `LAYOUT_PLAN.md`, `IMAGE_PLAN.md`가 소유한다.

## 2. GitHub 작업영역

- `work/YYYY-MM-DD/` = 제작 상태와 검증·흐름설계·원고·지면·이미지 계획
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본

`work/`는 발행 대상이 아니다.

Git은 빈 폴더를 보존하지 않으므로 아직 시작하지 않은 단계의 폴더를 미리 만들 필요가 없다.

## 3. 기본 상태

각 회차의 `WORK_STATE.md`가 현재 진행 상태를 소유한다.

일반 상태:

- `PENDING`
- `VERIFYING`
- `FLOWING`
- `WRITING`
- `IN_REVIEW`
- `COMPLETE`

이미지 슬롯 상태는 `IMAGE_PIPELINE.md`를 따른다.

## 4. 기본 회차 구성

별도 지시가 없으면 다음 구성을 목표로 한다.

- Cover Story 1편
- Economy 일반 기사 1편
- Politics 일반 기사 1편
- Society 일반 기사 1편
- Tech 일반 기사 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션이다. 다시 만들지 않는다.

## 5. 일반 기사 제작

기본 순서:

`Cover Story → Economy → Politics → Society → Tech`

기사 하나마다 다음을 끝낸 뒤 다음 기사로 이동한다.

```text
VERIFY
→ FLOW
→ ARTICLE DRAFT
→ ANALYSIS
→ COHERENCE PASS
→ STYLE & ARGUMENT PASS
→ HEADLINE & DECK
→ ARTICLE REVIEW
→ COMPLETE
```

현재 일반 기사 하나를 COMPLETE로 닫기 전에는 다음 일반 기사 본문을 작성하지 않는다.

### VERIFY

`VERIFY.md`는 내부 사실 검증 전용이다.

- 사건의 현재 상태
- 발표 / 계획 / 계약 / 시행 / 집행 / 성과 구분
- 수치 정의
- 유사 제도·문서·절차 차이
- 상충 자료와 예외
- 아직 확정되지 않은 내용

### FLOW

`FLOW.md`는 독자가 이해할 순서를 설계한다.

필요한 정보를 모두 넣는 것보다 독자가 한 줄로 따라갈 수 있는 순서를 우선한다.

## 6. 일반 기사 전체 비교

Cover Story와 Economy·Politics·Society·Tech가 모두 COMPLETE가 된 뒤 다섯 기사를 한꺼번에 비교한다.

- 주제·설명 중복
- 같은 결론·수사 반복
- 분야별 깊이 편차
- 출처 역할 편중
- 빠진 배경지식
- FLOW가 같은 템플릿으로 수렴하지 않는지
- 한 호 전체 정보 밀도

수정이 필요하면 해당 기사만 IN_REVIEW로 되돌린다.

## 7. DEEP DIVE

일반 기사 전체가 닫힌 뒤 심화가 필요한 기사만 선택한다.

필수 확인:

- 일반 기사가 이미 답한 질문
- DEEP DIVE가 새로 답할 단 하나의 질문
- 새 핵심 주장 최소 3개
- 일반 기사에 없던 독립 출처 최소 2개
- 일반 기사와 다른 심화 방식

같은 정의·원인·경로·결론을 반복하면 실패다.

## 8. LIFE SCENE

LIFE SCENE은 `editorial/LIFE_SCENE_STANDARD.md`의 독립 제작 알고리즘을 따른다.

```text
SUBJECT SELECT
→ FACT BOUNDARY
→ CHARACTER & ORDINARY PLAN
→ SCENE MAP
→ NARRATIVE DRAFT
→ CAUSALITY PASS
→ EXPLANATION LEAK PASS
→ SCENARIO NOTE
→ LIFE SCENE REVIEW
→ COMPLETE
```

이미지는 원고가 닫힌 뒤 지면 설계에서 슬롯과 비율을 확정한다.

LIFE SCENE 이미지는 현행 이미지 계약상 가로 `4:3` 또는 세로 `4:5` 중 실제 지면에 필요한 한 비율을 선택한다.

## 9. PROLOGUE

일반 기사·DEEP DIVE·LIFE SCENE이 모두 COMPLETE가 된 뒤 작성한다.

본문 전에 `08_prologue/PREVIEW_MAP.md`를 만든다.

```text
ISSUE READBACK
→ PREVIEW MAP
→ PANORAMA
→ ORIENTATION
→ FOCUS
→ ARTICLE PREVIEW
→ RHYTHM PASS
→ PROSE RHYTHM PASS
→ DEPTH CEILING PASS
→ REPEATED COVERAGE PASS
→ HANDOFF
→ TITLE PASS
→ COMPLETE
```

지배적인 읽기 움직임은 `넓게 → 좁게 → 본문`이다.

PROLOGUE는 기본적으로 별도 생성 이미지를 요구하지 않는다.

## 10. EDITOR'S AFTERWORD

PROLOGUE까지 닫힌 뒤 마지막 편집 원고로 작성한다.

```text
ISSUE READBACK
→ MEMORY TRACE
→ REFLECTION DRAFT
→ RECAP CUT
→ METHOD REPORT CUT
→ AFTERTASTE PASS
→ COMPLETE
```

기사별 요약, 대표 항목 선정, 편집 방법론 보고서로 만들지 않는다.

EDITOR'S AFTERWORD는 기본적으로 별도 생성 이미지를 요구하지 않는다.

## 11. 지면 설계

모든 원고가 닫힌 뒤 `LAYOUT_PLAN.md`를 만든다.

1. 최종 DOM 순서 확정
2. DATA/WATCH 필요성 판정
3. 기사별 지면 리듬 선택
4. 이미지 슬롯 필요성 판정
5. 각 이미지의 지면 역할과 대략적 배치 결정
6. 1440 / 1366 / 1024 / 390 반응형 구조 설계

이미지는 섹션 이름만 보고 자동으로 추가하지 않는다.

## 12. 이미지 제작

실행 계약은 `editorial/IMAGE_PIPELINE.md`가 소유한다.

핵심:

- 이미지 한 장씩 독립 생성
- 한 번의 요청에 여러 슬롯을 묶지 않음
- 제1호 및 현행 시연 수준의 사진적·에디토리얼 품질이면 합격 가능
- 기사와 자연스럽게 연결되면 충분하며 전체 메커니즘을 한 장에 재현하지 않음
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- LIFE SCENE만 4:3 또는 4:5 비율을 생성 전에 확정
- Politics와 정치 DEEP DIVE는 완전 무인
- 한 슬롯 기본 최대 3회 시도
- 한 슬롯 실패가 다른 슬롯이나 전체 HTML 작업을 막지 않게 함
- 최종 채택본만 archive assets에 저장

이미지별 상태와 실패 코드는 회차 `IMAGE_PLAN.md`에 기록한다.

## 13. HTML 제작

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제

이미지 전체가 완료될 때까지 HTML 구조 작업을 완전히 중단하지 않는다.

- 이미지 슬롯과 레이아웃이 확정되면 HTML/CSS 구조 작업 가능
- ACCEPTED 또는 SAVED 이미지는 순차 반영 가능
- 최종 발행은 모든 필수 이미지가 반영되고 화면 검수를 통과해야 가능

## 14. 실제 화면 검수

다음 화면을 실제 렌더링하거나 캡처해 확인한다.

- 1440px 이상
- 1366px
- 1024px
- 390px

확인 항목:

- Cover 제목 안전영역과 이미지 선명도
- 기본 구성과 Contents 일치
- LIFE SCENE → PROLOGUE → 본 기사 흐름
- 기사별 시각적 차이
- 이미지 디테일과 실제 크롭
- Politics 이미지에 사람이 없는지
- 표·카드·제목 오버플로
- 링크와 상대경로
- EDITOR'S AFTERWORD → Sources 마감 흐름

이미지 크롭 문제는 먼저 CSS `object-position`과 지면 비율로 해결하고, 이미지 자체가 근본적으로 부적합할 때만 재생성한다.

## 15. 보조 구조 검사

필요하면 다음을 직접 실행한다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

이 검사는 기술적 실수를 찾는 보조 수단이다. 검사 통과를 편집 품질 통과로 보지 않는다.

## 16. 비교 검수

제1호와 직전 회차를 새 회차와 나란히 비교한다.

- 원고 깊이
- 이미지 디테일과 기사별 차이
- 지면 리듬
- 모바일 읽기 경험
- 긴 블로그 문서가 아니라 매거진으로 보이는가

제1호 이미지는 현행 사진적 품질의 현실적 기준점으로 참고할 수 있지만, 동일 이미지 재사용과 저해상도 자산은 계승하지 않는다.

## 17. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 이미지 실패 → 해당 이미지 슬롯만 `RETRY` 또는 `BLOCKED`

이미지에서 실패할수록 생성 횟수를 무한히 늘리지 않는다. `IMAGE_PIPELINE.md`의 최대 시도와 실패 유형을 따른다.

## 18. 최종 반영

1. 원고·지면·필수 이미지·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 마지막 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용

GitHub Actions, 자동 배포, 작업 브랜치, PR을 기본 제작 절차로 사용하지 않는다.
