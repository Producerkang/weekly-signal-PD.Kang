# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 시작 전에 읽을 현행 기준

새 회차 또는 재개 작업에서는 먼저 해당 회차 `work/YYYY-MM-DD/WORK_STATE.md`를 읽는다.

그 뒤에는 **현재 재개 단계에 필요한 현행 계약만** 읽는다. 완료된 이전 예약 작업의 문서를 새 대화에 불필요하게 모두 다시 쌓지 않는다.

전체 기준 목록:

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/EDITORIAL_STANDARD.md`
3. `editorial/ISSUE_QUALITY_GATE.md`
4. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
5. `editorial/LIFE_SCENE_STANDARD.md`
6. `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
7. `editorial/VOICE_AND_TONE.md`
8. `editorial/SOURCE_POLICY.md`
9. `editorial/IMAGE_CONTRACT.md`
10. `editorial/LAYOUT_SYSTEM.md`
11. `editorial/PUBLISHING_PIPELINE.md`
12. `templates/TEMPLATE_CONTRACT.md`
13. `templates/NAVIGATION_CONTRACT.md`

`IMAGE_PIPELINE.md`와 `IMAGE_DIRECTION.md`은 현행 계약이 아니다.

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

이미지 슬롯 상태는 `IMAGE_CONTRACT.md`를 따른다.

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

이미지는 원고가 닫힌 뒤 07:00 지면 설계에서 슬롯과 비율을 확정한다.

LIFE SCENE 이미지는 가로 `4:3` 또는 세로 `4:5` 중 해당 회차 지면과 장면에 맞는 하나를 선택한다.

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

## 11. 지면 설계 + 이미지 입력 준비 — 월요일 07:00

07:00은 **텍스트·파일 작업 전용 독립 턴**이다.

목표는 08:00 이미지 턴이 기사와 지면을 다시 해석하지 않아도 되도록 지면과 생성 입력을 모두 닫는 것이다.

### 11.1 필수 산출물

```text
work/YYYY-MM-DD/
├─ LAYOUT_PLAN.md
├─ IMAGE_PLAN.md
└─ image_prompts/
   ├─ 01_*.txt
   └─ ...
```

완료 상태:

- `LAYOUT_PLAN.md`: `COMPLETE`
- `IMAGE_PLAN.md`: `READY`
- 모든 생성 대상 슬롯의 프롬프트 파일 존재
- `WORK_STATE.md`: `LAYOUT: COMPLETE`, `IMAGES: PENDING`
- 다음 작업: `08:00 이미지 슬롯별 순차 제작`

### 11.2 LAYOUT_PLAN 작성

1. 최종 DOM 순서 확정
2. DATA/WATCH 필요성 판정
3. 기사별 지면 리듬 선택
4. 이미지 슬롯 필요성 판정
5. 각 이미지의 지면 역할과 대략적 배치 결정
6. 1440 / 1366 / 1024 / 390 반응형 구조 설계

이미지는 섹션 이름만 보고 자동으로 추가하지 않는다.

### 11.3 IMAGE_PLAN 작성

`IMAGE_PLAN.md`는 이미지 큐와 상태만 관리한다.

각 생성 대상 슬롯에 최소한 다음을 기록한다.

- 순서
- 슬롯명
- 필요성
- prompt 파일 경로
- 최종 이미지 파일명
- 초기 상태 `READY`
- 시도 횟수 `0/3`
- 목표 비율
- 목표 해상도

장면 프롬프트 전문은 `IMAGE_PLAN.md`에 넣지 않는다.

### 11.4 image_prompts 작성

각 슬롯의 실제 생성 문장은 `image_prompts/*.txt` 하나에 독립 저장한다.

프롬프트 파일은 이미지로 보일 내용만 담는다.

- 실제 세계의 한 장면
- 중심 피사체·행동·사물
- 카메라와 구도
- 빛·재질·공간감
- 필요한 안전영역과 비율
- 필요한 경우 짧은 하드 제약

운영 상태·저장소 구조·문서 형식은 프롬프트 파일에 넣지 않는다.

세부 규칙은 `editorial/IMAGE_CONTRACT.md`를 따른다.

### 11.5 07:00 종료 조건

07:00에서는 실제 이미지를 생성하지 않는다.

`LAYOUT_PLAN COMPLETE + IMAGE_PLAN READY + prompt files complete + WORK_STATE update`가 끝나면 턴을 종료한다.

## 12. 이미지 슬롯별 순차 제작 — 월요일 08:00

08:00은 **이미지 생성 전용 독립 턴**이다.

실행 계약은 `editorial/IMAGE_CONTRACT.md` 하나가 소유한다.

### 12.1 기본 읽기 범위

08:00은 기본적으로 다음만 읽는다.

1. `editorial/IMAGE_CONTRACT.md`
2. 해당 회차 `IMAGE_PLAN.md`
3. 현재 슬롯의 `image_prompts/*.txt`

기사 원고와 지면 설계를 기본적으로 다시 읽지 않는다.

### 12.2 생성 단위

```text
1 SLOT = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

기본 반복:

```text
IMAGE_PLAN에서 READY / RETRY 슬롯 선택
→ 해당 prompt_file 읽기
→ 즉시 이미지 1장 생성
→ 실제 픽셀 육안 검수
→ ACCEPT / RETRY / BLOCKED
→ IMAGE_PLAN 상태 기록
→ 다음 슬롯
→ 반복
```

현재 슬롯 프롬프트 파일은 이미지 생성 직전의 **마지막 저장소 읽기**여야 한다.

프롬프트 파일을 읽은 뒤 이미지가 반환될 때까지 다른 파일을 읽거나 작업 보고를 작성하지 않는다.

### 12.3 계획 오류

프롬프트 파일이 없거나 장면이 불명확하면 임의 생성하지 않는다.

해당 슬롯을 `PLAN_INVALID`로 기록하고 다음 슬롯로 이동한다.

### 12.4 품질과 재시도

- 한 장면의 독립된 사진적 에디토리얼 이미지여야 함
- 기사와 자연스럽게 연결되면 충분함
- Politics 계열은 완전 무인
- LIFE SCENE은 회차에서 정한 4:3 또는 4:5
- Cover 장변 2200px 이상 목표
- 기타 주요 이미지 장변 2000px 이상 목표
- 합격권이면 취향성 재생성 금지
- 유효 시도 기본 최대 3회
- 한 슬롯 실패가 다른 슬롯 진행을 막지 않음

세부 판정은 `IMAGE_CONTRACT.md`를 따른다.

## 13. HTML 제작

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제

이미지 슬롯과 레이아웃이 확정되면 HTML/CSS 구조 작업 가능하다. 다만 최종 발행은 모든 REQUIRED 이미지가 반영되고 화면 검수를 통과해야 가능하다.

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
- Politics 이미지 완전 무인
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

과거 회차와 승인된 시연 결과는 품질 감각의 참고 사례로 사용할 수 있다. 동일 이미지를 재사용하거나 특정 장면을 영구 템플릿으로 복제하지 않는다.

## 17. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 이미지 계획 실패 → 07:00의 해당 슬롯 prompt 파일만 수정
- 이미지 품질 실패 → 08:00의 해당 이미지 슬롯만 `RETRY` 또는 `BLOCKED`

이미지 실패를 이유로 전체 지면 설계를 다시 하지 않는다.

## 18. 최종 반영

1. 원고·지면·REQUIRED 이미지·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 마지막 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용

GitHub Actions, 자동 배포, 작업 브랜치, PR을 기본 제작 절차로 사용하지 않는다.
