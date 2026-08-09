# WEEKLY SIGNAL 발행 절차

이 문서는 회차 제작 파일이 공개 사이트에 노출되는 과정을 규정한다. GitHub Actions, 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않는다. 발행 품질은 제작자가 원고·지면과 실제 화면을 직접 검수해 결정한다.

현재 운영 경로에서는 새 생성 이미지를 필수로 요구하지 않는다.

## 1. 작업 위치

- 조사 메모, 원고 초안, 지면 계획과 검수 파일은 `work/`에서 관리한다.
- `archive/YYYY-MM-DD/`에는 공개 가능한 최종 `index.html`과 실제로 사용되는 정적 자산만 둔다.
- 이미지 관련 `jobs/`, `image_prompts/`, `image_runs/`는 과거 실험·진단 기록으로 남을 수 있으나 현행 발행 경로의 필수 입력이 아니다.

## 2. 5-페이즈 제작 순서

```text
일요일 22:00 FRONT DESK
Cover Story → Economy

월요일 00:00 SECTION DESK
Politics → Society → Tech

월요일 02:00 REVIEW DESK
CROSS-ARTICLE REVIEW → 필요한 교정 → 필요한 경우 DEEP DIVE 또는 OMIT

월요일 04:00 FEATURE DESK
LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD

월요일 09:00 PUBLISH DESK
LAYOUT_PLAN → HTML → 화면 검수 → 발행
```

05:00 이전 네 제작 턴은 2시간 간격으로 둔다. 07:00과 08:00에는 별도 제작 작업을 두지 않는다.

각 페이즈는 해당 작업을 순차적으로 COMPLETE하고 `WORK_STATE.md`를 갱신한 뒤 종료한다.

## 3. PUBLISH DESK 인계 조건

04:00 FEATURE DESK 종료 시 다음이 충족되어야 한다.

- Cover Story, Economy, Politics, Society, Tech COMPLETE
- CROSS-ARTICLE REVIEW COMPLETE
- DEEP DIVE COMPLETE 또는 편집 판단과 근거가 기록된 OMIT
- LIFE SCENE COMPLETE
- PROLOGUE COMPLETE
- EDITOR'S AFTERWORD COMPLETE
- `IMAGES: NOT_REQUIRED`
- `LAYOUT: PENDING`
- `HTML: PENDING`
- `NEXT: 09:00 PUBLISH DESK`

09:00은 별도 07:00 작업을 기다리지 않는다.

## 4. 09:00 PUBLISH DESK

PUBLISH DESK는 지면 설계부터 최종 공개 반영까지 한 턴에서 처리한다.

```text
전체 원고 readback
→ LAYOUT_PLAN 작성·COMPLETE
→ HTML/CSS 제작
→ 1440 / 1366 / 1024 / 390 화면 검수
→ 문제 수정·재검수
→ 보조 구조 검사
→ archive 반영
→ issues.json / latest.json / ISSUE_HISTORY.md 갱신
→ WORK_STATE PUBLISHED
```

`templates/ISSUE_TEMPLATE.html`은 DOM 시작점일 뿐 완성 디자인이 아니다.

## 5. 이미지 없는 발행 원칙

- 새 이미지를 생성하지 않아도 발행할 수 있다.
- 이미지가 없다는 이유로 빈 placeholder를 만들지 않는다.
- 존재하지 않는 이미지 경로를 HTML에 넣지 않는다.
- 이전 회차 이미지를 새 회차의 대표 이미지처럼 임의 재사용하지 않는다.
- 실제 사용 가능한 정적 자산이 별도로 확정된 경우에만 해당 자산을 포함한다.
- 이미지가 없을 때는 타이포그래피, 색면, 여백, 규칙선, 데이터, 표, 인용, 섹션 전환으로 지면 밀도를 확보한다.

## 6. 발행 후보 구성

기본:

```text
archive/YYYY-MM-DD/
└─ index.html
```

실제로 사용되는 정적 자산이 있을 때만:

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

- CSS와 최소 JavaScript는 `index.html`에 내장
- 기사 본문을 별도 HTML 파일이나 `fetch()`로 조립하지 않음
- 모든 로컬 자산은 상대경로 사용
- 외부 이미지 URL을 임의로 직접 사용하지 않음

기본 독서 순서:

`Cover → Contents → LIFE SCENE → PROLOGUE → 본 기사와 실제로 제작된 연결 DEEP DIVE → EDITOR'S AFTERWORD → Sources`

`DEEP_DIVE: OMIT`이면 DEEP DIVE DOM을 만들지 않는다.

## 7. 제작자 직접 검수

### 원고

- Cover Story와 분야별 일반 기사 전체 존재
- DEEP DIVE가 제작된 경우 일반 기사를 반복하지 않음
- `DEEP_DIVE: OMIT`인 경우 편집 판단과 근거가 기록됨
- LIFE SCENE이 개인 조언으로 끝나지 않음
- PROLOGUE가 기사 결론을 미리 소진하지 않음
- EDITOR'S AFTERWORD가 기사 요약이나 방법론 보고서가 아님
- 출처와 사실 상태 정확

### 지면

- 이미지 없이도 완성된 매거진으로 보임
- Cover가 독립적인 첫 화면으로 완결됨
- LIFE SCENE → PROLOGUE → 본 기사 진입 자연스러움
- 기사별 시각적 리듬 차이
- EDITOR'S AFTERWORD → Sources 마감 자연스러움
- 1440px, 1366px, 1024px, 390px 화면 문제 없음
- 깨진 이미지·존재하지 않는 자산 요청 없음

## 8. 보조 구조 검사

필요하면:

```bash
python tools/validate_repository.py
```

현행 검사기는 표준 라이브러리만 사용한다. 별도 `requirements-tools.txt` 설치 단계는 없다.

검사기는 기술적 실수를 찾는 보조 수단이다. 검사 통과는 발행 품질 통과와 동일하지 않다.

## 9. main 직접 반영

### 제작 중

다음은 제작 중에도 `main`의 `work/`에 반영할 수 있다.

- 제작 상태 문서
- 원고
- 지면 계획
- 검수 기록

### 발행 시

제작자 직접 검수를 모두 통과한 뒤 다음을 `main`에 반영한다.

1. 완성된 `archive/YYYY-MM-DD/`
2. `issues.json`
3. `latest.json`
4. `archive/index.html`
5. `ISSUE_HISTORY.md`
6. 해당 회차 `WORK_STATE.md`의 `PUBLISHED` 상태

GitHub Pages는 `main` 루트의 정적 파일을 그대로 사용한다.

## 10. 실패 처리

품질 검수에 실패하면 실패한 단위만 되돌린다.

- 원고 실패 → 해당 원고 단계
- CROSS-ARTICLE REVIEW 실패 → 해당 기사만 교정
- DEEP DIVE 실패 → 해당 심화 제작 단계 또는 OMIT 판정 재검토
- LIFE SCENE / PROLOGUE / AFTERWORD 실패 → 해당 편집 원고 단계
- 지면 실패 → 09:00 LAYOUT_PLAN
- HTML 구조 실패 → 09:00 HTML
- 화면 실패 → CSS/DOM 수정 후 재검수

이미지 미생성·이미지 부족·과거 이미지 job 실패는 현행 발행 차단 사유가 아니다.
