# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 제작 상태, 회차별 정적 HTML을 관리하는 저장소입니다.

GitHub `main`이 현재 상태의 기준이며, 대화 기억보다 저장소의 현행 계약과 실행 진입점을 우선합니다.

---

## 1. 작업 진입점

일반 제작 작업은 해당 회차의:

```text
work/YYYY-MM-DD/WORK_STATE.md
```

에서 시작합니다.

현재 운영 경로에서는 **이미지 생성 단계를 사용하지 않습니다.**

- `jobs/image_job.json`
- `jobs/IMAGE_JOB_V2.md`
- `editorial/IMAGE_CONTRACT.md`
- 기존 `IMAGE_PLAN.md`, `image_prompts/`, `image_runs/`

위 파일과 경로는 과거 실험·진단 기록으로 남아 있을 수 있지만, 현행 월요일 발행 흐름의 필수 입력이나 선행 조건이 아닙니다.

이미지가 없다는 이유로 HTML 제작 또는 발행을 차단하지 않습니다.

---

## 2. 주간 제작 리듬

기본 발행 목표는 월요일 오전 9시입니다.

| 시각 | 예약 작업 |
|---|---|
| 일요일 22:00 | Cover Story 제작 |
| 일요일 23:00 | Economy 제작 |
| 월요일 00:00 | Politics 제작 |
| 월요일 01:00 | Society 제작 |
| 월요일 02:00 | Tech 제작 |
| 월요일 03:00 | CROSS-ARTICLE REVIEW |
| 월요일 04:00 | DEEP DIVE 제작 |
| 월요일 05:00 | LIFE SCENE 제작 |
| 월요일 06:00 | PROLOGUE + EDITOR'S AFTERWORD |
| 월요일 07:00 | LAYOUT_PLAN + HTML 발행 준비 |
| 월요일 09:00 | HTML 제작 + 화면 검수 + 발행 |

**08:00 이미지 작업은 현행 운영 경로에서 제거되었습니다.**

예약 시각은 제작 리듬을 위한 기준이며 실제 선후관계는 `WORK_STATE.md`가 소유합니다.

---

## 3. 07:00 — LAYOUT_PLAN + HTML 발행 준비

07:00은 완성된 원고를 실제 HTML로 옮길 수 있도록 지면 구조와 발행 조건을 확정하는 단계입니다.

필수 작업:

1. 완성 원고와 `WORK_STATE.md` 확인
2. 최종 DOM 순서 확정
3. DATA / WATCH 등 선택 모듈 필요성 판정
4. 기사별 지면 리듬과 정보 모듈 확정
5. 1440 / 1366 / 1024 / 390 반응형 구조 설계
6. 이미지가 없는 상태에서도 완결되는 Cover와 기사 지면 설계
7. `LAYOUT_PLAN.md`를 `COMPLETE`로 종료
8. `WORK_STATE.md`를 `HTML_READY` 상태로 갱신

07:00에서는 다음을 하지 않습니다.

- 이미지 생성 프롬프트 작성
- `IMAGE_PLAN.md` 갱신
- `jobs/image_job.json` 생성 또는 갱신
- 이미지 작업으로의 handoff
- 이미지 생성 성공 여부를 HTML 제작의 조건으로 설정

07:00 완료 뒤 다음 제작 단계는 바로 **09:00 HTML 제작**입니다.

---

## 4. 09:00 — HTML 제작 + 화면 검수 + 발행

`templates/ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않습니다.

- COMPLETE 원고만 사용
- `LAYOUT_PLAN.md`를 기준으로 최종 DOM 구성
- CSS와 최소 JavaScript는 회차 `index.html`에 내장
- Contents와 실제 DOM 순서 일치
- DEEP DIVE는 연결 기사 바로 뒤
- EDITOR'S AFTERWORD는 Sources 직전
- 미사용 클래스·숨김 모듈·임시 주석 삭제
- 이미지가 없어도 모든 섹션이 시각적으로 완결되도록 구성
- 기존 archive 자산을 새 회차의 필수 이미지처럼 임의 재사용하지 않음

화면 검수:

- 1440px 이상
- 1366px
- 1024px
- 390px

이미지 부재는 실패 조건이 아닙니다. 대신 타이포그래피, 여백, 규칙선, 데이터 조판, 인용, 표, 섹션 전환 등 HTML/CSS 요소로 매거진 밀도와 리듬을 확보합니다.

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

이미지 관련 문서는 향후 이미지 파이프라인을 별도로 재설계할 때 참고할 수 있는 비활성 계약으로 취급합니다.

### `work/YYYY-MM-DD/`

해당 회차의 제작 상태와 작업 자산을 소유합니다.

- `WORK_STATE.md` — 현재 단계
- `LAYOUT_PLAN.md` — 지면 설계
- `01_cover/` ~ 회차별 기사 작업 디렉터리

과거 이미지 실험 파일이 남아 있어도 현행 발행 선행 조건으로 사용하지 않습니다.

### `archive/YYYY-MM-DD/`

독자에게 공개되는 최종 발행본을 둡니다.

```text
archive/YYYY-MM-DD/
└─ index.html
```

필요한 정적 자산이 실제로 존재할 때만 `assets/`를 함께 둡니다.

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
Cover Story
→ Economy
→ Politics
→ Society
→ Tech
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE + EDITOR'S AFTERWORD
→ 07:00 LAYOUT_PLAN + HTML 발행 준비
→ 09:00 HTML + 화면 검수 + 발행
```

현행 경로에서는 07:00과 09:00 사이에 이미지 생성 단계를 두지 않습니다.
