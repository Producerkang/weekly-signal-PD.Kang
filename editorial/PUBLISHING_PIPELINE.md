# WEEKLY SIGNAL 발행 절차

이 문서는 회차 제작 파일이 공개 사이트에 노출되는 과정을 규정한다. GitHub Actions, 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않는다. 발행 품질은 제작자가 원고·이미지·지면과 실제 화면을 직접 검수해 결정한다.

## 1. 작업 위치

- 조사 메모, 원고 초안, 이미지 후보, 중간 HTML, 렌더링 캡처와 검수 파일은 작업 환경에서 처리한다.
- `main`에는 승인 대기본이나 실패 후보를 쌓지 않는다.
- `archive/YYYY-MM-DD/`에는 공개 가능한 최종 `index.html`과 실제 사용 이미지 자산만 둔다.
- 실패본·중간 이미지 후보를 `archive/`에 남기지 않는다.

## 2. 제작 순서

기본 순서:

```text
원고 제작
→ CROSS-ARTICLE REVIEW
→ DEEP DIVE
→ LIFE SCENE
→ PROLOGUE
→ EDITOR'S AFTERWORD
→ 07:00 지면 설계 + 이미지 입력 준비
→ 08:00 이미지 슬롯별 순차 제작
→ 09:00 HTML + 화면 검수 + 발행
```

지면 설계와 이미지 생성은 별도 예약 작업으로 분리한다.

- 07:00은 `LAYOUT_PLAN.md`, `IMAGE_PLAN.md`, `image_prompts/*.txt`를 완성한다.
- 08:00은 준비된 프롬프트 파일을 슬롯별로 실행한다.
- 한 이미지 실패 때문에 이미 완료된 지면 설계를 다시 하지 않는다.
- 모든 필수 이미지가 반영되고 실제 화면 검수를 통과하기 전에는 발행하지 않는다.

## 3. 이미지 제작

이미지 계획·생성·검수·상태·저장은 **`editorial/IMAGE_CONTRACT.md`**를 따른다.

핵심:

```text
1 SLOT = 1 PROMPT FILE = 1 SCENE = 1 IMAGE
```

- 이미지 장면은 07:00의 `image_prompts/*.txt`에서 확정
- 08:00은 prompt 파일 하나씩 읽고 한 장씩 순차 생성
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- LIFE SCENE은 4:3 또는 4:5 중 회차별 하나
- Politics와 Politics DEEP DIVE는 완전 무인
- 한 슬롯 기본 최대 3회의 유효 시도
- 합격권 이미지는 취향상 재생성하지 않음

최종 채택 이미지와 실제 발행 파일만 회차 assets에 둔다.

## 4. 발행 후보 구성

모든 원고와 최종 지면이 준비되면 다음 구조를 사용한다.

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

### 지면

- 완성된 매거진으로 보임
- LIFE SCENE → PROLOGUE → 본 기사 진입 자연스러움
- 기사별 시각적 리듬 차이
- EDITOR'S AFTERWORD → Sources 마감 자연스러움
- 1440px, 1366px, 1024px, 390px 화면 문제 없음

## 6. 크롭 검수

이미지 생성 전에 대략적인 안전영역을 고려하지만, 최종 크롭은 실제 HTML에서 판정한다.

크롭 문제가 있으면 다음 순서로 처리한다.

1. CSS `object-position` 조정
2. 이미지 박스 비율 또는 지면 폭 조정
3. 여전히 핵심 장면이 무너지면 해당 이미지 재생성

단순 크롭 문제를 이유로 바로 재생성하지 않는다.

## 7. 보조 구조 검사

필요하면 다음을 직접 실행한다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

검사기는 기술적 실수를 찾는 보조 수단이다. 검사 통과는 발행 품질 통과와 동일하지 않다.

## 8. `main` 직접 반영

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
- 이미지 입력 실패 → 해당 `image_prompts/*.txt`
- 이미지 품질 실패 → 해당 이미지 슬롯
- 크롭 실패 → 먼저 CSS/지면 조정 후 필요할 때만 이미지 재생성

필수 이미지가 끝내 해결되지 않으면 발행은 차단한다.
