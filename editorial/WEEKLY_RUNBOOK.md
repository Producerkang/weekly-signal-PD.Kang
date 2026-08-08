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

LIFE SCENE 이미지는 가로 `4:3` 또는 세로 `4:5` 중 해당 회차 지면과 장면에 맞는 하나를 생성 전에 확정한다. 두 비율을 모두 의무 생성하지 않는다.

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

지면 설계 단계에서는 이미지 생성 도구를 호출하지 않는다. `LAYOUT_PLAN.md`는 텍스트·파일 산출물이다.

## 12. 이미지 제작

실행 계약은 `editorial/IMAGE_PIPELINE.md`가 소유한다.

### 이미지 생성 도구 호출 하드 게이트

08:00 작업은 먼저 **CONTROL PHASE**로 시작한다. 다음 단계에서는 이미지 생성 도구 호출을 절대 금지한다.

- 저장소와 `WORK_STATE.md` 확인
- 필요한 현행 계약 확인
- `LAYOUT_PLAN.md` 작성·검토
- `IMAGE_PLAN.md` 작성·검토
- 현재 처리할 슬롯 선택
- 기사·섹션 읽기
- `GENERATION BRIEF` 작성·정제
- 상태 기록·진행 보고·다음 슬롯 결정

이 단계의 산출물은 텍스트와 저장소 파일뿐이다. 저장소 확인, WORK_STATE, 지면 설계, 이미지 계획, 체크리스트, 진행률, 실행 결과, 다음 턴 안내를 이미지로 만들지 않는다.

이미지 생성 도구를 호출할 수 있는 유일한 시점은 **특정 슬롯 하나의 GENERATION BRIEF가 완성되어 `GENERATION BRIEF READY` 조건을 모두 충족한 직후**다.

`GENERATION BRIEF READY` 조건:

- 현재 슬롯이 `IMAGE_PLAN.md`에 존재하고 필요성이 확정됨
- 기사와 이미지의 자연스러운 연결점이 한 문장으로 정리됨
- 실제 보여줄 장면·공간이 하나로 확정됨
- 중심 피사체·행동·사물이 확정됨
- 카메라 거리·구도가 확정됨
- 빛·재질·공간감 방향이 확정됨
- 비율·해상도가 확정됨
- Politics라면 완전 무인 규칙이 포함됨
- 저장소·WORK_STATE·파일트리·진행률·보고 문구·다음 턴 문구가 생성 문맥에서 제거됨
- `WEEKLY SIGNAL`, 회차 번호, 예약 시각, 브랜치, 커밋, 파일 경로 같은 운영 메타데이터가 이미지 생성 프롬프트에 들어가지 않음

조건을 하나라도 충족하지 못하면 이미지 생성 도구를 호출하지 않고 CONTROL PHASE에서 계속 정리한다.

이미지 도구 호출 뒤 이미지 한 장이 반환되면 즉시 **CONTROL PHASE로 복귀**한다. 육안 판정·상태 기록·저장은 텍스트·파일 문맥에서 처리한다. 다음 슬롯 이미지는 그 슬롯의 새 GENERATION BRIEF가 다시 `READY`가 된 뒤에만 호출한다.

따라서 08:00 턴에서 사용자에게 보이는 생성 이미지는 **실제 기사 슬롯용 에디토리얼 이미지 후보뿐**이어야 한다.

### 08:00 턴과 생성 단위

월요일 08:00은 **지면 설계와 이미지 제작을 담당하는 하나의 예약 작업 턴**이다. 이 턴 안에서 회차 `IMAGE_PLAN.md`의 슬롯을 순차적으로 처리한다.

이미지 생성 호출은 항상 다음 단위다.

```text
1 SLOT = 1 SCENE = 1 IMAGE
```

즉 한 턴 안에서 여러 슬롯을 처리하지만 한 번의 생성 요청에는 한 슬롯만 넣는다. 한 슬롯을 생성·판정·기록한 뒤 같은 08:00 턴에서 다음 `READY/RETRY` 슬롯로 계속 진행한다. 첫 이미지 한 장을 만들었다는 이유만으로 08:00 턴을 종료하지 않는다.

```text
CONTROL PHASE — IMAGE TOOL FORBIDDEN
WORK_STATE / CONTRACTS 확인
→ LAYOUT_PLAN 작성
→ IMAGE_PLAN 작성
→ 다음 슬롯 선택
→ 기사 / 섹션 읽기
→ GENERATION BRIEF 작성
→ GENERATION BRIEF READY 확인

GENERATE PHASE — IMAGE TOOL ALLOWED ONCE
→ 현재 슬롯 이미지 1장 생성

CONTROL PHASE — IMAGE TOOL FORBIDDEN
→ OUTPUT CONTRACT 확인
→ 육안 품질 확인
→ ACCEPT / RETRY / BLOCKED
→ 상태 기록
→ 다음 슬롯
→ 반복
```

모든 REQUIRED 슬롯이 `ACCEPTED/SAVED`가 되거나, 남은 처리 대상이 모두 `BLOCKED`이거나, 실제 이미지 생성 도구를 더 이상 실행할 수 없을 때 루프를 종료한다.

### GENERATION BRIEF

각 이미지 호출 직전에는 현재 슬롯의 **시각 정보만** 남긴 짧은 GENERATION BRIEF를 만든다.

포함:

- 기사와 이미지의 자연스러운 연결점
- 실제 보여줄 한 장면·공간
- 중심 피사체·행동·사물
- 카메라 거리와 구도
- 자연스럽거나 약간 시네마틱한 조명
- 현실적인 재질·공간감·원근
- 필요한 안전영역
- 비율·해상도
- Politics라면 완전 무인 규칙

제외:

- `WEEKLY SIGNAL` 프로젝트명·브랜드명
- 회차 번호·날짜·예약 시각
- GitHub·저장소·브랜치·커밋·파일 경로
- WORK_STATE·진행률·체크리스트
- 파일 트리·단계 번호
- 다음 턴 계획·제작 보고서 문구
- Markdown 제목·표·카드·상태 라벨

작업 문서는 장면을 정하기 위한 입력일 뿐 이미지의 소재가 아니다. 이미지 호출은 GENERATION BRIEF가 `READY`인 경우에만 수행하고, 결과가 나온 뒤 즉시 상태 기록 문맥으로 돌아간다.

기사 제목·섹션명·프로젝트명을 그대로 이미지 모델에 던져 시각화시키지 않는다. **기사 내용을 실제 세계의 한 장면으로 번역한 긍정적 장면 묘사**를 이미지 생성 입력으로 사용한다.

### 절대 산출물

각 생성 호출의 결과는 **현재 기사 슬롯에 직접 넣을 독립된 단일 에디토리얼 이미지 1장**이어야 한다.

다음 결과는 즉시 `OUTPUT_CONTRACT` 실패다.

- 작업 보고서 또는 다음 턴 보고 이미지
- 프로젝트 상태 대시보드
- 저장소·파일트리·터미널 화면
- 체크리스트·진행률·단계표
- 문서·프레젠테이션·웹페이지·앱 UI
- 기사 미리보기와 제작 정보를 섞은 제작 보드
- 연락시트·스토리보드·무드보드·이미지 팩
- 잡지명·회차·상태·표·차트·카드가 들어간 리포트형 화면

업무 화면 안에 좋은 사진이 포함되어 있어도 전체 출력은 실패로 처리한다. 내부 사진을 잘라 최종 이미지로 우회하지 않는다.

이미지 생성 뒤 작업 상태를 알려야 하면 **텍스트로만 보고**한다.

### 실사용 품질선

목표는 초고난도 광고 비주얼이나 완벽한 보도사진 재현이 아니다. 실제 잡지 지면에 바로 사용할 수 있는 자연스럽고 충분히 완성된 사진적 에디토리얼 이미지면 합격이다.

- 고해상도와 충분한 디테일
- 현실적인 카메라 시점
- 자연스럽거나 약간 시네마틱한 빛
- 깨끗하고 잡지 친화적인 구성
- 자연스러운 재질·원근·공간감
- 한눈에 읽히는 중심 장면
- 과하게 복잡하지 않음
- 광고·기업 홍보 스톡 이미지처럼 과장되지 않음
- 기사와 자연스럽게 연결되며 전체 메커니즘을 억지로 한 장에 설명하지 않음

이미 합격권인 이미지는 취향상 더 좋은 결과를 찾기 위해 반복 생성하지 않는다.

핵심:

- `1 SLOT = 1 SCENE = 1 IMAGE`
- 한 번의 요청에 여러 슬롯을 묶지 않음
- GENERATION BRIEF READY 전 이미지 도구 호출 금지
- 한 슬롯 판정 후 같은 08:00 턴에서 다음 슬롯로 진행
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- LIFE SCENE은 가로 4:3 또는 세로 4:5 중 회차별 하나를 선택
- Politics와 정치 DEEP DIVE는 완전 무인
- 한 슬롯 기본 최대 3회의 유효 이미지 시도
- 한 슬롯 실패가 다른 슬롯 진행을 막지 않음
- 최종 채택본만 archive assets에 저장

이미지별 필요성(`REQUIRED / OPTIONAL / OMIT`), 상태와 실패 코드는 회차 `IMAGE_PLAN.md`에 기록한다.

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
- 최종 발행은 모든 REQUIRED 이미지가 반영되고 화면 검수를 통과해야 가능

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
- 이미지가 독립된 기사 이미지로 정상 표시되는지
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

직전 발행본 또는 필요한 과거 발행본을 참고해 새 회차를 비교할 수 있다.

- 원고 깊이
- 이미지 디테일과 기사별 차이
- 지면 리듬
- 모바일 읽기 경험
- 긴 블로그 문서가 아니라 매거진으로 보이는가

과거 회차와 승인된 시연 결과는 품질 감각의 참고 사례로 사용할 수 있다. 다만 동일 이미지를 재사용하거나 특정 과거 장면을 영구 템플릿으로 복제하지 않는다.

## 17. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 이미지 도구 호출 게이트 위반 → 생성물을 폐기하고 CONTROL PHASE로 복귀해 GENERATION BRIEF READY부터 다시 확인
- 이미지 OUTPUT CONTRACT 실패 → 해당 슬롯을 단일 장면 생성으로 즉시 교정
- 이미지 시각 품질 실패 → 해당 이미지 슬롯만 `RETRY` 또는 `BLOCKED`

이미지 도구 호출 게이트를 위반해 만들어진 결과는 유효 이미지 시도 횟수에 포함하지 않는다.

이미지에서 실패할수록 생성 횟수를 무한히 늘리지 않는다. `IMAGE_PIPELINE.md`의 최대 시도와 실패 유형을 따른다.

## 18. 최종 반영

1. 원고·지면·REQUIRED 이미지·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 마지막 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용

GitHub Actions, 자동 배포, 작업 브랜치, PR을 기본 제작 절차로 사용하지 않는다.
