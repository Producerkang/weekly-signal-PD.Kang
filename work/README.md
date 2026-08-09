# WEEKLY SIGNAL 작업공간

`work/`는 WEEKLY SIGNAL의 회차별 제작 상태와 제작 자산을 저장하는 GitHub 작업영역이다. GitHub Pages 발행 대상이 아니며 `archive/`와 역할을 분리한다.

## 기본 대응 관계

```text
work/2026-07-27/      → 제작 상태 + 이미지 생성 기록
archive/2026-07-27/   → 완성 발행본
```

두 경로는 같은 회차 시작일을 사용한다.

## 회차 기본 구조

```text
work/YYYY-MM-DD/
├─ WORK_STATE.md
├─ LAYOUT_PLAN.md
├─ IMAGE_PLAN.md
├─ image_prompts/
│  ├─ 01_*.txt
│  └─ ...
├─ image_runs/
│  ├─ README.md
│  ├─ 01_cover/
│  │  ├─ attempt-01.<ext>
│  │  └─ attempt-01.json
│  └─ ...
├─ 01_cover/
│  ├─ VERIFY.md
│  ├─ FLOW.md
│  └─ ARTICLE.md
├─ 02_economy/
├─ 03_politics/
├─ 04_society/
├─ 05_tech/
├─ 06_deep_dive/
├─ 07_life_scene/
└─ ...
```

빈 기사 폴더는 미리 만들지 않는다. 이미지 생성 결과 디렉터리도 실제 결과가 생길 때 만든다.

## 파일 역할

### WORK_STATE.md

회차 전체 진행 상태와 다음 작업을 기록한다. 일반 제작 턴은 이 파일을 기준으로 재개한다.

### VERIFY.md

내부 검증용 파일이다. 사실·상태·수치·제도 차이·예외·상충 자료·출처를 기록한다.

### FLOW.md

검증 결과를 독자가 따라갈 순서로 재구성하는 내부 설계 파일이다.

### ARTICLE.md

독자에게 보여줄 최종 기사만 저장한다. 내부 검증 메모나 중간 초안은 넣지 않는다.

### image_prompts/

07:00이 만든 순수 장면 프롬프트를 저장한다. 저장소·queue·state·output path·저장 지시는 넣지 않는다.

### image_runs/

이미지 생성 결과의 Git 보존 영역이다.

- 정상 후보 저장
- 품질 실패 후보 저장
- `CONTEXT_FAILURE` 이미지 저장
- attempt별 sidecar JSON 저장
- 유효 시도 횟수와 파일 보존 여부는 별개
- 최종 ACCEPTED 이미지만 발행 시 `archive/.../assets/`로 복사

생성 결과를 임시 디렉터리에만 두고 폐기하지 않는다.

## 이미지 실행 분리

이미지 작업은 `editorial/IMAGE_CONTRACT.md` v2를 따른다.

```text
CONTROL PLANE
GitHub / job / queue
→ isolated dispatch
IMAGE PLANE
scene prompt only
→ image generation
→ Git persistence to image_runs/
```

CONTROL PLANE과 IMAGE PLANE을 같은 이미지 생성 턴으로 합치지 않는다.

## 일반 기사 기본 파이프라인

`VERIFY → FLOW MAP → NARRATIVE → ANALYSIS → COHERENCE PASS → STYLE PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE`

## 핵심 원칙

- 검증 언어, 흐름 설계, 독자용 문장을 같은 파일에 섞지 않는다.
- 한 번에 일반 기사 하나만 제작한다.
- 현재 기사가 COMPLETE가 되기 전 다음 일반 기사 본문을 작성하지 않는다.
- 같은 급의 사실을 병렬적으로 늘어놓지 않고 앞뒤 관계를 만든다.
- `archive/`에는 완성 발행본만 둔다.
- `work/`의 이미지 실패 후보는 발행물이 아니라 재현·진단 가능한 제작 기록이다.
- `work/`는 공개 GitHub 저장소에 있으므로 비공개 정보·인증정보·개인정보를 기록하지 않는다.

세부 기사 제작 규칙은 `editorial/ARTICLE_WRITING_STANDARD.md`, 전체 회차 순서는 `editorial/WEEKLY_RUNBOOK.md`, 이미지 격리·저장은 `editorial/IMAGE_CONTRACT.md`를 따른다.
