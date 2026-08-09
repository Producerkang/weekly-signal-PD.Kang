# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 실행 진입점을 우선합니다.

---

## 1. 작업 진입점

모든 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작합니다.

현재 운영 경로에서는 **이미지 생성 단계를 사용하지 않습니다.** 이미지 관련 `jobs/`, `IMAGE_PLAN.md`, `image_prompts/`, `image_runs/`, `editorial/IMAGE_CONTRACT.md`는 과거 실험·진단 기록으로 남아 있을 수 있지만 현행 제작의 필수 입력이나 발행 선행 조건이 아닙니다.

이미지가 없다는 이유로 HTML 제작 또는 발행을 차단하지 않습니다.

---

## 2. 5-페이즈 예약 구조

활성 예약 작업은 최대 5개를 사용하며, 기사 하나마다 예약을 만들지 않습니다. 하나의 예약 턴 안에서 지정된 제작 단위를 **순차적으로 COMPLETE**한 뒤 다음 단위로 넘어갑니다.

기본 발행 목표는 월요일 오전 9시입니다.

| 시각 | 예약 페이즈 | 실행 범위 |
|---|---|---|
| 일요일 22:00 | FRONT DESK | Cover Story → Economy |
| 월요일 00:00 | SECTION DESK | Politics → Society → Tech |
| 월요일 02:00 | REVIEW DESK | CROSS-ARTICLE REVIEW → 필요한 교정 → DEEP DIVE |
| 월요일 04:00 | FEATURE DESK | LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD |
| 월요일 09:00 | PUBLISH DESK | LAYOUT_PLAN → HTML → 화면 검수 → 발행 |

**05:00 이전 네 제작 턴은 2시간 간격**으로 고정합니다. 07:00과 08:00에는 별도 제작 예약을 두지 않습니다.

예약 시각은 실행 시작점이며 실제 선후관계와 완료 상태는 `WORK_STATE.md`가 소유합니다.

---

## 3. 페이즈 내부 직렬 실행 원칙

한 예약 턴에 여러 작업이 포함되어도 품질 게이트를 합치지 않습니다.

예:

```text
FRONT DESK
Cover Story
→ COMPLETE
→ Economy
→ COMPLETE
→ WORK_STATE 갱신
```

```text
SECTION DESK
Politics
→ COMPLETE
→ Society
→ COMPLETE
→ Tech
→ COMPLETE
→ WORK_STATE 갱신
```

앞 작업이 COMPLETE되지 않으면 뒤 작업을 건너뛰어 작성하지 않습니다. 실패한 단위만 수정·재검수합니다.

---

## 4. 09:00 — PUBLISH DESK

09:00은 지면 설계와 발행을 하나의 턴에서 끝냅니다.

순서:

```text
완성 원고 전체 확인
→ LAYOUT_PLAN 작성·COMPLETE
→ 최종 DOM 구성
→ HTML/CSS 제작
→ 1440 / 1366 / 1024 / 390 화면 검수
→ 문제 수정·재검수
→ archive 반영
→ issues.json / latest.json / ISSUE_HISTORY.md 갱신
→ PUBLISHED
```

`templates/ISSUE_TEMPLATE.html`은 DOM 시작점일 뿐 완성 디자인이 아닙니다.

- COMPLETE 원고만 사용
- Contents와 실제 DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 이미지 없이도 모든 섹션이 시각적으로 완결되도록 구성
- 존재하지 않는 이미지 파일이나 placeholder를 참조하지 않음
- 이전 회차 이미지를 새 회차 대표 이미지처럼 임의 재사용하지 않음

이미지 부재는 실패 조건이 아닙니다. 타이포그래피, 여백, 규칙선, 데이터 조판, 인용, 표, 섹션 전환 등 HTML/CSS 요소로 매거진 밀도와 리듬을 확보합니다.

---

## 5. 문서 역할

### `editorial/`

회차 독립적인 제작 계약과 품질 기준을 소유합니다.

주요 문서:

- `WEEKLY_RUNBOOK.md`
- `ARTICLE_WRITING_STANDARD.md`
- `ISSUE_QUALITY_GATE.md`
- `SECTION_AND_DEEP_DIVE_STANDARD.md`
- `LIFE_SCENE_STANDARD.md`
- `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
- `VOICE_AND_TONE.md`
- `SOURCE_POLICY.md`
- `LAYOUT_SYSTEM.md`
- `PUBLISHING_PIPELINE.md`

이미지 관련 문서는 향후 이미지 파이프라인을 별도로 재설계할 때 참고하는 비활성 계약으로 취급합니다.

### `work/YYYY-MM-DD/`

해당 회차의 제작 상태와 작업 자산을 소유합니다.

- `WORK_STATE.md` — 현재 단계와 다음 페이즈
- `LAYOUT_PLAN.md` — 09:00 PUBLISH DESK에서 작성하는 지면 설계
- `01_cover/` ~ 회차별 기사 작업 디렉터리

### `archive/YYYY-MM-DD/`

독자에게 공개되는 최종 발행본을 둡니다.

```text
archive/YYYY-MM-DD/
└─ index.html
```

실제로 사용하는 정적 자산이 있을 때만 `assets/`를 함께 둡니다.

---

## 6. 기본 회차 구성

별도 지시가 없으면 한 호는 다음 구성을 목표로 합니다.

- Cover Story 1편
- Economy 1편
- Politics 1편
- Society 1편
- Tech 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션입니다.

기본 독서 순서:

```text
Cover
→ Contents
→ LIFE SCENE
→ PROLOGUE
→ Cover Story
→ Economy
→ Politics
→ 연결 DEEP DIVE
→ Society
→ Tech
→ 선택적 DATA / WATCH
→ EDITOR'S AFTERWORD
→ Sources
```

DEEP DIVE는 연결된 일반 기사 바로 뒤에 둡니다.

---

## 7. 전체 제작 흐름

```text
22:00 FRONT DESK
Cover Story → Economy

00:00 SECTION DESK
Politics → Society → Tech

02:00 REVIEW DESK
CROSS-ARTICLE REVIEW → 교정 → DEEP DIVE

04:00 FEATURE DESK
LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD

09:00 PUBLISH DESK
LAYOUT_PLAN → HTML → 화면 검수 → 발행
```

현행 경로에는 07:00·08:00 별도 제작 단계가 없습니다.
