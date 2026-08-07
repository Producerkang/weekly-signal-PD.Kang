# WEEKLY SIGNAL 작업공간

`work/`는 WEEKLY SIGNAL의 회차별 제작 상태를 저장하는 GitHub 작업영역이다. GitHub Pages 발행 대상이 아니며, `archive/`와 역할을 분리한다.

## 기본 대응 관계

```text
work/2026-07-27/      → 제작 상태
archive/2026-07-27/   → 완성 발행본
```

두 경로는 같은 회차 시작일을 사용한다.

## 회차 기본 구조

```text
work/YYYY-MM-DD/
├─ WORK_STATE.md
├─ 01_cover/
│  ├─ VERIFY.md
│  └─ ARTICLE.md
├─ 02_economy/
│  ├─ VERIFY.md
│  └─ ARTICLE.md
├─ 03_politics/
│  ├─ VERIFY.md
│  └─ ARTICLE.md
├─ 04_society/
│  ├─ VERIFY.md
│  └─ ARTICLE.md
├─ 05_tech/
│  ├─ VERIFY.md
│  └─ ARTICLE.md
├─ 06_deep_dive/
├─ 07_life_scene/
└─ 08_editors_pick/
```

빈 폴더는 미리 만들지 않는다. 해당 작업을 시작할 때 필요한 파일과 함께 생성한다.

## 파일 역할

### WORK_STATE.md

회차 전체 진행 상태와 다음 작업을 기록한다. 새 턴이나 예약 실행은 이 파일을 먼저 읽고 다음 미완료 단계 하나를 수행한다.

### VERIFY.md

내부 검증용 파일이다. 사실·상태·수치·제도 차이·예외·상충 자료·출처를 기록한다. `A ≠ B` 같은 검증 축약 표현을 사용할 수 있다.

### ARTICLE.md

독자에게 보여줄 최종 기사만 저장한다. 내부 Claim Ledger, 오해 목록, PASS별 초안, 검증 메모는 넣지 않는다.

## 핵심 원칙

- 검증 언어와 독자용 문장을 같은 파일에 섞지 않는다.
- 한 번에 일반 기사 하나만 제작한다.
- 현재 기사가 COMPLETE가 되기 전 다음 일반 기사 본문을 작성하지 않는다.
- `archive/`에는 완성본만 둔다.
- `work/`에 저장되는 자료도 공개 GitHub 저장소에 있으므로 비공개 정보·인증정보·개인정보를 기록하지 않는다.

세부 기사 제작 규칙은 `editorial/ARTICLE_WRITING_STANDARD.md`, 전체 회차 순서는 `editorial/WEEKLY_RUNBOOK.md`를 따른다.
