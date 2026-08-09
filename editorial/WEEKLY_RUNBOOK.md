# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 현행 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

현재 운영 경로는 **이미지 생성 없는 5-페이즈 파이프라인**이다.

## 1. 작업 진입점

모든 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작한다.

`WORK_STATE.md`가 실제 선후관계와 완료 상태를 소유한다. 이미지 관련 job·queue·prompt·attempt 기록은 과거 실험 자료이며 현행 제작 선후관계에 참여하지 않는다.

## 2. GitHub 작업영역

- `work/YYYY-MM-DD/` = 제작 상태, 검증, 흐름 설계, 원고, 지면 계획
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본
- `jobs/`, 과거 `IMAGE_PLAN.md`, `image_prompts/`, `image_runs/` = 비활성 과거 기록

`work/`는 현행 정상 제작공간이다. 발행 후보에서만 임시·미사용 파일을 제거한다.

## 3. 기본 상태

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
- DEEP DIVE — 필요할 때 1~2편, 불필요하면 근거 기록 후 `OMIT`
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션이다. 다시 만들지 않는다.

## 5. 일반 기사 제작 계약

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

한 예약 턴 안에 여러 기사가 포함되더라도 현재 기사 하나를 COMPLETE로 닫기 전에는 다음 기사 본문을 작성하지 않는다.

## 6. 일반 기사 전체 비교

Cover Story와 Economy·Politics·Society·Tech가 모두 COMPLETE가 된 뒤 다섯 기사를 한꺼번에 비교한다.

- 주제·설명 중복
- 같은 결론·수사 반복
- 분야별 깊이 편차
- 출처 역할 편중
- 빠진 배경지식
- FLOW 템플릿화
- 한 호 전체 정보 밀도

수정이 필요하면 해당 기사만 IN_REVIEW로 되돌리고 다시 COMPLETE로 닫는다.

## 7. DEEP DIVE

DEEP DIVE는 의무 편수가 아니다. 일반 기사 전체 비교와 필요한 교정이 끝난 뒤, 심화가 실제로 필요한 기사만 선택한다.

만드는 경우 필수 확인:

- 일반 기사가 이미 답한 질문
- DEEP DIVE가 새로 답할 단 하나의 질문
- 새 핵심 주장 최소 3개
- 일반 기사에 없던 독립 출처 최소 2개
- 일반 기사와 다른 심화 방식

같은 정의·원인·경로·결론을 반복하면 실패다.

심화 질문이나 새 근거가 충분하지 않으면 억지로 작성하지 않는다. 이 경우 `WORK_STATE.md`에 `DEEP_DIVE: OMIT`과 근거를 기록하고 다음 단계로 넘어간다.

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

LIFE SCENE용 생성 이미지를 필수로 요구하지 않는다.

## 9. PROLOGUE

일반 기사 전체, CROSS-ARTICLE REVIEW, DEEP DIVE의 `COMPLETE` 또는 근거 있는 `OMIT`, LIFE SCENE이 모두 닫힌 뒤 작성한다.

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

## 11. 5-페이즈 예약 계약

활성 예약 작업은 5개 페이즈로 운영한다. 기사 하나마다 예약 작업을 만들지 않는다.

```text
일요일 22:00  FRONT DESK
월요일 00:00  SECTION DESK
월요일 02:00  REVIEW DESK
월요일 04:00  FEATURE DESK
월요일 09:00  PUBLISH DESK
```

05:00 이전 네 제작 턴은 2시간 간격이다. 07:00과 08:00에는 별도 제작 턴을 두지 않는다.

각 턴은 시작 시점의 GitHub `main`, 현행 편집 계약, 해당 회차 `WORK_STATE.md`를 읽고 선행 완료 상태를 확인한다.

## 12. 일요일 22:00 — FRONT DESK

```text
Cover Story
→ COMPLETE
→ Economy
→ COMPLETE
→ WORK_STATE 갱신
```

Cover Story가 완료되지 않으면 Economy를 건너뛰어 작성하지 않는다.

완료 조건:

- `COVER_STORY: COMPLETE`
- `ECONOMY: COMPLETE`
- `NEXT: 00:00 SECTION DESK`

## 13. 월요일 00:00 — SECTION DESK

```text
Politics
→ COMPLETE
→ Society
→ COMPLETE
→ Tech
→ COMPLETE
→ WORK_STATE 갱신
```

각 기사는 기존 기사와 독립적인 사건·핵심 질문·1차 자료를 가져야 한다.

완료 조건:

- `POLITICS: COMPLETE`
- `SOCIETY: COMPLETE`
- `TECH: COMPLETE`
- 다섯 일반 기사 전체 COMPLETE
- `NEXT: 02:00 REVIEW DESK`

## 14. 월요일 02:00 — REVIEW DESK

```text
CROSS-ARTICLE REVIEW
→ 필요한 기사만 교정·재검수
→ 전체 일반 기사 COMPLETE 확인
→ DEEP DIVE 필요성 판정
→ 필요한 경우 DEEP DIVE 제작 또는 근거와 함께 OMIT
→ WORK_STATE 갱신
```

완료 조건:

- `CROSS_ARTICLE_REVIEW: COMPLETE`
- 교정 대상 일반 기사 모두 다시 COMPLETE
- `DEEP_DIVE: COMPLETE` 또는 근거 있는 `OMIT`
- `NEXT: 04:00 FEATURE DESK`

## 15. 월요일 04:00 — FEATURE DESK

```text
LIFE SCENE
→ COMPLETE
→ PROLOGUE
→ COMPLETE
→ EDITOR'S AFTERWORD
→ COMPLETE
→ WORK_STATE 갱신
```

LIFE SCENE이 닫히기 전 PROLOGUE를 작성하지 않는다. PROLOGUE가 닫히기 전 EDITOR'S AFTERWORD를 작성하지 않는다.

완료 조건:

- `LIFE_SCENE: COMPLETE`
- `PROLOGUE: COMPLETE`
- `EDITOR_AFTERWORD: COMPLETE`
- 모든 필수 원고 제작 완료
- `DEEP_DIVE: COMPLETE` 또는 `OMIT`
- `NEXT: 09:00 PUBLISH DESK`

## 16. 월요일 09:00 — PUBLISH DESK

09:00은 별도 07:00 레이아웃 턴 없이 지면 설계부터 발행까지 한 턴에서 수행한다.

### 16.1 순서

```text
완성 원고 전체 확인
→ LAYOUT_PLAN 작성
→ LAYOUT_PLAN COMPLETE
→ 최종 DOM 구성
→ HTML/CSS 제작
→ 실제 화면 검수
→ 문제 수정·재검수
→ 보조 구조 검사
→ archive 반영
→ 발행 메타데이터 갱신
→ PUBLISHED
```

### 16.2 LAYOUT_PLAN

최소한 다음을 확정한다.

1. 최종 DOM 순서
2. DATA / WATCH 필요성
3. 기사별 지면 리듬
4. 텍스트·표·인용·데이터·여백을 이용한 시각적 전환
5. 이미지 없이도 완결되는 Cover와 각 기사 도입부
6. 1440 / 1366 / 1024 / 390 반응형 구조
7. 기존 archive 이미지의 임의 재사용 금지

이미지 슬롯, 이미지 prompt, `IMAGE_PLAN.md`, `jobs/image_job.json`, 이미지 handoff를 만들지 않는다.

### 16.3 HTML 제작

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.

- COMPLETE 원고만 사용
- `LAYOUT_PLAN.md`를 실제 DOM에 반영
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- 목차·내비게이션·DOM 순서 일치
- DEEP DIVE가 COMPLETE인 경우에만 연결 기사 바로 뒤에 배치
- `DEEP_DIVE: OMIT`이면 DEEP DIVE DOM을 만들지 않음
- EDITOR'S AFTERWORD는 Sources 직전
- 폐기된 `EDITOR'S PICK`을 만들지 않음
- 미사용 클래스·숨김 모듈·임시 주석 삭제
- 이미지가 없어도 모든 섹션이 완결된 편집 지면으로 보이게 구성
- 존재하지 않는 이미지 파일이나 placeholder 경로를 참조하지 않음
- 이전 회차 이미지를 새 회차 이미지처럼 임의 재사용하지 않음

이미지 부재는 발행 차단 조건이 아니다.

## 17. 실제 화면 검수

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

## 18. 보조 구조 검사

필요하면 다음을 직접 실행한다.

```bash
python tools/validate_repository.py
```

현행 검사기는 다음을 전제로 한다.

- `work/`는 정상 제작공간
- `EDITOR'S PICK`은 금지된 레거시 섹션
- DEEP DIVE는 조건부이며 `OMIT` 가능
- 이미지와 `assets/`는 실제 사용 시에만 필요

이 검사는 기술적 실수를 찾는 보조 수단이며 최종 편집 검수를 대체하지 않는다.

## 19. 실패 처리

실패한 단위만 되돌린다.

- 일반 기사 FLOW 실패 → 해당 기사 FLOW부터
- CROSS-ARTICLE REVIEW 실패 → 해당 일반 기사만 교정
- DEEP DIVE 실패 → 심화 질문·근거 단계부터, 필요 없으면 OMIT 판정 재검토
- LIFE SCENE 서사 실패 → SCENE MAP부터
- PROLOGUE 실패 → PREVIEW MAP부터
- EDITOR'S AFTERWORD 실패 → 실제 제작 후기 역할부터
- 지면 실패 → 09:00 LAYOUT_PLAN 수정
- HTML 구조 실패 → 09:00 HTML 수정
- 화면 실패 → CSS/DOM 수정 후 재검수

이미지 생성 실패 또는 이미지 부재는 현행 경로의 실패 조건이 아니다.

## 20. 최종 반영

1. 원고·지면·실제 화면 검수 완료
2. 발견 문제 수정 후 재검수
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json` 갱신
5. `WORK_STATE.md`를 `PUBLISHED`로 종료
6. GitHub Pages는 `main` 루트 정적 파일 사용
