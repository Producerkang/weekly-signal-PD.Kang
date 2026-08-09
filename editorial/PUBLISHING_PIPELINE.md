# WEEKLY SIGNAL 발행 절차

이 문서는 회차 제작 파일이 공개 사이트에 노출되는 과정을 규정한다. GitHub Actions, 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않는다. 발행 품질은 제작자가 원고·이미지·지면과 실제 화면을 직접 검수해 결정한다.

## 1. 작업 위치

- 조사 메모, 원고 초안, 지면 계획과 검수 파일은 `work/`에서 관리한다.
- 이미지 생성 결과는 임시 폴더에만 두지 않고 `work/YYYY-MM-DD/image_runs/`에 Git으로 보존한다.
- 이미지 후보와 실패본은 `work/.../image_runs/`에 남길 수 있으며 `archive/`에는 넣지 않는다.
- `archive/YYYY-MM-DD/`에는 공개 가능한 최종 `index.html`과 실제 사용 이미지 자산만 둔다.
- `jobs/`는 예약 작업의 CONTROL PLANE 실행 인계용이며 발행 대상이 아니다.

## 2. 제작 순서

```text
원고 제작
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE
→ EDITOR'S AFTERWORD
→ 07:00 LAYOUT_PLAN + 이미지 입력 패키지 준비
→ 08:00 CONTROL PLANE dispatch + 독립 이미지 생성 + Git 보존
→ 09:00 HTML + 화면 검수 + 발행
```

07:00과 08:00의 역할은 분리한다.

- 07:00은 `LAYOUT_PLAN.md`, `IMAGE_PLAN.md`, `image_prompts/*.txt`, `jobs/image_job.json`을 완성한다.
- 08:00의 `jobs/image_job.json`은 **controller manifest**다.
- job 또는 repository를 읽은 턴에서 이미지 생성 도구를 호출하지 않는다.
- 각 이미지는 scene prompt 전문 하나만 입력받는 새 독립 이미지 턴에서 생성한다.
- 이미지가 반환된 뒤에만 Git 저장·상태 기록·품질 판정을 수행한다.
- 모든 필수 이미지가 반영되고 실제 화면 검수를 통과하기 전에는 발행하지 않는다.

## 3. 이미지 제작

이미지 준비·생성·격리·검수·저장은 `editorial/IMAGE_CONTRACT.md`를 따른다.

핵심:

```text
CONTROL PLANE
job + queue + Git paths
        ↓ isolated dispatch
IMAGE PLANE
scene prompt only
        ↓
image generation
        ↓
PERSISTENCE PLANE
Git work/.../image_runs/
```

### 3.1 생성 격리

다음 방식은 금지한다.

```text
image_job 읽기
→ prompt 파일 읽기
→ 같은 턴에서 이미지 생성
```

마지막으로 읽은 파일이 prompt여도 앞선 운영 문맥은 남을 수 있으므로, 각 생성은 새 독립 이미지 턴에서 실행한다.

독립 이미지 턴에는 다음을 넣지 않는다.

- GitHub·저장소명
- job·queue·state
- `WORK_STATE.md`, `IMAGE_PLAN.md`
- 파일 경로·output filename
- 저장·업로드 지시

### 3.2 생성 결과 Git 저장

모든 생성 결과를 다음 경로에 보존한다.

```text
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.<original-ext>
work/YYYY-MM-DD/image_runs/<slot>/attempt-01.json
```

- 정상 사진 후보 저장
- 품질 실패 후보 저장
- `CONTEXT_FAILURE` 결과도 진단 목적으로 저장
- 가능하면 이미지와 sidecar를 같은 커밋으로 반영
- Git 저장 완료 전에 다음 슬롯으로 넘어가지 않음
- 저장할 수 없으면 `PERSISTENCE_BLOCKED`

`CONTEXT_FAILURE` 결과는 유효 사진 시도 횟수에는 포함하지 않는다.

### 3.3 품질 기준

- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- LIFE SCENE은 4:3 또는 4:5 중 회차별 하나
- Politics와 Politics DEEP DIVE는 완전 무인
- 정상 사진 품질 재시도는 슬롯당 기본 최대 3회
- 재시도도 매번 새 독립 IMAGE PLANE 턴
- 합격권 이미지는 취향상 재생성하지 않음

## 4. 발행 후보 구성

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
   ├─ cover.webp
   └─ ...
```

회차 루트에는 `index.html`과 `assets/`만 둔다.

- CSS와 최소 JavaScript는 `index.html`에 내장
- 기사 본문을 별도 HTML 파일이나 `fetch()`로 조립하지 않음
- 모든 최종 이미지는 `./assets/...` 상대경로 사용
- 외부 이미지 URL 직접 사용 금지
- `work/.../image_runs/`의 ACCEPTED 원본을 필요하면 WebP로 변환·크롭해 `archive/.../assets/`로 복사

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

### 이미지

- 독립된 사진적 에디토리얼 장면
- 기사 주제와 자연스럽게 연결
- 동일 이미지 재사용 없음
- 눈에 띄는 생성 오류 없음
- 최종 해상도 충분
- LIFE SCENE 비율 적합
- Politics와 Politics DEEP DIVE 완전 무인
- 발행에 사용한 attempt가 `work/.../image_runs/`에 보존되어 있음

### 지면

- 완성된 매거진으로 보임
- LIFE SCENE → PROLOGUE → 본 기사 진입 자연스러움
- 기사별 시각적 리듬 차이
- EDITOR'S AFTERWORD → Sources 마감 자연스러움
- 1440px, 1366px, 1024px, 390px 화면 문제 없음

## 6. 크롭 검수

크롭 문제가 있으면 다음 순서로 처리한다.

1. CSS `object-position` 조정
2. 이미지 박스 비율 또는 지면 폭 조정
3. 여전히 핵심 장면이 무너지면 해당 이미지 재생성

단순 크롭 문제를 이유로 바로 재생성하지 않는다.

## 7. 보조 구조 검사

필요하면:

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

검사기는 기술적 실수를 찾는 보조 수단이다. 검사 통과는 발행 품질 통과와 동일하지 않다.

## 8. main 직접 반영

### 제작 중

다음은 제작 중에도 `main`의 `work/`에 반영할 수 있다.

- 제작 상태 문서
- 이미지 prompt
- 이미지 생성 원본과 실패 후보 (`work/.../image_runs/`)
- attempt sidecar

이는 발행 자산이 아니라 재현·진단 가능한 제작 기록이다.

### 발행 시

제작자 직접 검수를 모두 통과한 뒤 다음을 `main`에 반영한다.

1. 완성된 `archive/YYYY-MM-DD/`
2. `issues.json`
3. `latest.json`
4. `archive/index.html`
5. `ISSUE_HISTORY.md`

GitHub Pages는 `main` 루트의 정적 파일을 그대로 사용한다.

## 9. 실패 처리

품질 검수에 실패하면 실패한 단위만 되돌린다.

- 원고 실패 → 해당 원고 단계
- 지면 실패 → 해당 레이아웃
- 이미지 입력 실패 → 해당 `image_prompts/*.txt`와 controller manifest
- 독립 이미지 턴 생성 불가 → `DISPATCH_BLOCKED`
- 결과 Git 저장 불가 → `PERSISTENCE_BLOCKED`
- 정상 이미지 품질 실패 → 해당 이미지 슬롯을 새 독립 턴으로 재시도
- `CONTEXT_FAILURE` → 실패 이미지를 Git에 보존하고 오염된 이미지 턴 종료 후 새 독립 이미지 턴
- 크롭 실패 → 먼저 CSS/지면 조정 후 필요할 때만 이미지 재생성

필수 이미지가 끝내 해결되지 않으면 발행은 차단한다.
