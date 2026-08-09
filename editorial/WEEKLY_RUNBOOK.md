# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 작업 진입점

모든 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작한다.

현재 운영 경로에서는 이미지 생성 단계를 사용하지 않는다. 이미지 관련 job·queue·prompt·attempt 기록은 과거 실험 자료로 남아 있을 수 있으나 현행 제작 선후관계에 참여하지 않는다.

## 2. GitHub 작업영역

- `work/YYYY-MM-DD/` = 제작 상태와 검증·흐름설계·원고·지면 계획
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본
- 이미지 관련 `jobs/`, `image_prompts/`, `image_runs/`는 현행 발행 경로의 필수 요소가 아니다.

## 3. 기본 상태

각 회차의 `WORK_STATE.md`가 전체 제작 상태를 소유한다.

주요 상태:

- `PENDING`
- `VERIFYING`
- `FLOWING`
- `WRITING`
- `IN_REVIEW`
- `COMPLETE`
- `LAYOUT_READY`
- `HTML_READY`
- `SCREEN_REVIEW`
- `PUBLISHED`

이미지 상태는 현행 제작 게이트로 사용하지 않는다.

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

```text
Cover Story
→ Economy
→ Politics
→ Society
→ Tech
```

기사 하나마다:

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

`editorial/LIFE_SCENE_STANDARD.md`의 독립 제작 알고리즘을 따른다.

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

현재 운영 경로에서는 LIFE SCENE용 생성 이미지를 필수로 요구하지 않는다.

## 9. PROLOGUE

일반 기사·DEEP DIVE·LIFE SCENE이 모두 COMPLETE가 된 뒤 작성한다.

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

PROLOGUE는 텍스트 중심 편집 스프레드로 구성할 수 있다.

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

## 11. 월요일 07:00 — LAYOUT_PLAN + HTML 발행 준비

07:00은 완성된 원고를 09:00 HTML 작업이 즉시 사용할 수 있도록 지면과 발행 구조를 확정하는 단계다.

### 11.1 입력

- 현재 회차 `WORK_STATE.md`
- 완성된 원고
- `editorial/LAYOUT_SYSTEM.md`
- `editorial/ISSUE_QUALITY_GATE.md`
- 필요한 템플릿 계약

이미지 계약, 이미지 job, 이미지 prompt는 현행 07:00 필수 입력이 아니다.

### 11.2 필수 산출물

```text
work/YYYY-MM-DD/
└─ LAYOUT_PLAN.md
```

완료 상태:

- `LAYOUT_PLAN.md`: `COMPLETE`
- `WORK_STATE.md`: `HTML_READY`
- `NEXT`: 09:00 HTML 제작 + 화면 검수 + 발행

### 11.3 LAYOUT_PLAN

최소한 다음을 확정한다.

1. 최종 DOM 순서
2. DATA / WATCH 필요성
3. 기사별 지면 리듬
4. 텍스트·표·인용·데이터·여백을 이용한 시각적 전환
5. 이미지 없이도 완결되는 Cover와 각 기사 도입부
6. 1440 / 1366 / 1024 / 390 반응형 구조
7. 기존 archive 이미지의 임의 재사용 금지

### 11.4 이미지 없는 지면 원칙

현재 운영 경로에서는 새 이미지를 생성하지 않는다.

따라서 07:00은 이미지 슬롯, 이미지 prompt, `IMAGE_PLAN.md`, `jobs/image_job.json`, 이미지 handoff를 만들지 않는다.

이미지가 없는 자리는 빈 placeholder로 남기지 않는다. 해당 지면은 다음 요소를 사용해 완성한다.

- 강한 타이포그래피 계층
- 여백과 규칙선
- Deck과 핵심 문장
- 데이터 또는 비교표
- 인용 블록
- 섹션 라벨과 번호
- 배경·테두리·그리드 등 CSS 기반 편집 요소

이미지 없음이 미완성 상태처럼 보이지 않아야 한다.

### 11.5 07:00 종료

`LAYOUT_PLAN.md`가 COMPLETE이고 `WORK_STATE.md`가 HTML_READY이면 07:00은 종료한다.

**07:00 다음 단계는 바로 09:00이다. 08:00 제작 단계는 없다.**

## 12. 월요일 09:00 — HTML 제작 + 화면 검수 + 발행

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- `LAYOUT_PLAN.md`를 실제 DOM에 반영
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제
- 이미지가 없어도 모든 섹션이 완결된 편집 지면으로 보이게 구성
- 존재하지 않는 이미지 파일이나 placeholder 경로를 참조하지 않음
- 이전 회차 이미지를 새 회차 이미지처럼 임의 재사용하지 않음

이미지 부재는 발행 차단 조건이 아니다.

## 13. 실제 화면 검수

다음 화면을 실제 렌더링하거나 캡처해 확인한다.

- 1440px 이상
- 1366px
- 1024px
- 390px

확인 항목:

- Cover가 이미지 없이도 완결된 첫 화면으로 보이는가
- 기본 구성과 Contents가 일치하는가
- LIFE SCENE → PROLOGUE → 본 기사 흐름이 자연스러운가
- 기사별 시각적 리듬 차이가 있는가
- 표·카드·제목 오버플로가 없는가
- 링크와 상대경로가 올바른가
- 존재하지 않는 자산 요청이 없는가
- EDITOR'S AFTERWORD → Sources 마감 흐름이 자연스러운가

## 14. 보조 구조 검사

필요하면 다음을 직접 실행한다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

이 검사는 기술적 실수를 찾는 보조 수단이다.

## 15. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 지면 실패 → 07:00 LAYOUT_PLAN 수정
- HTML 구조 실패 → 09:00 HTML 수정
- 화면 실패 → CSS/DOM 수정 후 재검수

이미지 생성 실패 또는 이미지 부재는 현행 경로의 실패 조건이 아니다.

## 16. 최종 반영

1. 원고·지면·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 갱신
5. GitHub Pages는 `main` 루트 정적 파일 사용
