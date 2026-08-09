# WEEKLY SIGNAL 발행 절차

이 문서는 회차 제작 파일이 공개 사이트에 노출되는 과정을 규정한다. GitHub Actions, 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않는다. 발행 품질은 제작자가 원고·지면과 실제 화면을 직접 검수해 결정한다.

현재 운영 경로에서는 새 생성 이미지를 필수로 요구하지 않는다.

## 1. 작업 위치

- 조사 메모, 원고 초안, 지면 계획과 검수 파일은 `work/`에서 관리한다.
- `archive/YYYY-MM-DD/`에는 공개 가능한 최종 `index.html`과 실제로 사용되는 정적 자산만 둔다.
- 이미지 관련 `jobs/`, `image_prompts/`, `image_runs/`는 과거 실험·진단 기록으로 남을 수 있으나 현행 발행 경로의 필수 입력이 아니다.

## 2. 제작 순서

```text
원고 제작
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE
→ EDITOR'S AFTERWORD
→ 07:00 LAYOUT_PLAN + HTML 발행 준비
→ 09:00 HTML + 화면 검수 + 발행
```

07:00과 09:00 사이에 08:00 이미지 제작 단계는 두지 않는다.

07:00은 `LAYOUT_PLAN.md`를 COMPLETE로 닫고 `WORK_STATE.md`를 `HTML_READY`로 갱신한다.

09:00은 이미지 생성 여부를 확인하지 않고 완성 원고와 LAYOUT_PLAN을 기준으로 HTML 제작을 시작한다.

## 3. 이미지 없는 발행 원칙

- 새 이미지를 생성하지 않아도 발행할 수 있다.
- 이미지가 없다는 이유로 빈 placeholder를 만들지 않는다.
- 존재하지 않는 이미지 경로를 HTML에 넣지 않는다.
- 이전 회차 이미지를 새 회차의 대표 이미지처럼 임의 재사용하지 않는다.
- 실제 사용 가능한 정적 자산이 별도로 확정된 경우에만 해당 자산을 포함한다.
- 이미지가 없을 때는 타이포그래피, 색면, 여백, 규칙선, 데이터, 표, 인용, 섹션 전환으로 지면 밀도를 확보한다.

## 4. 발행 후보 구성

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

`Cover → Contents → LIFE SCENE → PROLOGUE → 본 기사와 연결 DEEP DIVE → EDITOR'S AFTERWORD → Sources`

## 5. 제작자 직접 검수

### 원고

- Cover Story와 분야별 일반 기사 전체 존재
- DEEP DIVE가 일반 기사를 반복하지 않음
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

## 6. 보조 구조 검사

필요하면:

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

검사기는 기술적 실수를 찾는 보조 수단이다. 검사 통과는 발행 품질 통과와 동일하지 않다.

## 7. main 직접 반영

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

GitHub Pages는 `main` 루트의 정적 파일을 그대로 사용한다.

## 8. 실패 처리

품질 검수에 실패하면 실패한 단위만 되돌린다.

- 원고 실패 → 해당 원고 단계
- 지면 실패 → 07:00 LAYOUT_PLAN
- HTML 구조 실패 → 09:00 HTML
- 화면 실패 → CSS/DOM 수정 후 재검수

이미지 미생성·이미지 부족·과거 이미지 job 실패는 현행 발행 차단 사유가 아니다.
