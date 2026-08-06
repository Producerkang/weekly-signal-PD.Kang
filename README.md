# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준과 회차별 정적 HTML을 관리하는 저장소입니다.

## 새 회차 시작 순서

새 회차를 만들기 전에 반드시 다음 순서로 읽습니다.

1. `editorial/QUALITY_LEARNING_LOG.md`
2. `editorial/ISSUE_HISTORY.md`의 최신 회차
3. `editorial/WEEKLY_RUNBOOK.md`
4. `editorial/ISSUE_QUALITY_GATE.md`
5. 나머지 현행 편집·이미지·레이아웃·템플릿 기준

Git 커밋이나 수정 결과가 모델에 자동 학습되는 것은 아닙니다. 실패 원인과 수정 판단을 위 문서에서 직접 읽고 다음 회차에 적용하는 것이 이 저장소의 품질 누적 방식입니다.

## 최우선 원칙

- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.
- 조사 메모, 이미지 후보, 중간 HTML과 검수 산출물은 저장소 밖에서 처리합니다.
- 원고·이미지·지면·반응형 화면 검수가 끝난 **완성본만 `main`에 직접 반영**합니다.
- 사용자가 매번 직접 검수하지 않아도 되도록 제작자가 최종 품질 판단과 수정 책임을 맡습니다.
- 기술 조건의 형식적 충족보다 기사 깊이, 이미지 미감, 잡지적 밀도와 읽기 경험을 우선합니다.
- 매 회차는 직전 회차보다 원고·이미지·지면 세 축에서 개선점을 가져야 합니다.

## 저장소 구조

```text
/
├─ index.html
├─ latest.json
├─ issues.json
├─ archive/
│  ├─ index.html
│  └─ YYYY-MM-DD/
│     ├─ index.html
│     └─ assets/
├─ editorial/
│  ├─ QUALITY_LEARNING_LOG.md
│  ├─ ISSUE_HISTORY.md
│  ├─ WEEKLY_RUNBOOK.md
│  ├─ ISSUE_QUALITY_GATE.md
│  └─ ...
├─ templates/
├─ tools/
│  └─ validate_repository.py
├─ publication/
│  └─ legacy-issues.json
└─ requirements-tools.txt
```

## 제작 순서

1. 직전 실패 기록과 수정 원리를 읽고 이번 회차의 품질 향상 목표를 정합니다.
2. Cover Story와 Economy·Politics·Society·Tech 일반 기사를 모두 조사·작성·검증합니다.
3. 일반 기사와 다른 질문·새 주장·새 출처를 가진 DEEP DIVE를 작성합니다.
4. 외부 제도·기관·서비스의 생활 문제를 다루는 LIFE SCENE을 작성합니다.
5. 전체 편집 후 EDITOR'S PICK을 작성합니다.
6. 실제 이미지 생성 모델로 회차별 고품질 래스터 이미지를 만들고 `assets/`에 저장합니다.
7. 기사 내용에 맞춰 지면을 설계하고 CSS와 최소 JavaScript를 `index.html`에 내장합니다.
8. 원고, 출처, 모든 이미지와 1440px·1366px·1024px·390px 화면을 직접 검수합니다.
9. 필요하면 아래 구조 검사를 직접 실행합니다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

10. 품질 미달 항목을 다시 만들고, 완성된 회차와 메타데이터만 `main`에 반영합니다.
11. 이번 회차에서 새로 얻은 실패·성공 판단을 `QUALITY_LEARNING_LOG.md`와 `ISSUE_HISTORY.md`에 누적합니다.

## 기본 회차 구성

- Cover Story 1편
- Economy 1편
- Politics 1편
- Society 1편
- Tech 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- EDITOR'S PICK 1편
- Sources

Cover Story는 분야별 일반 기사를 대신하지 않습니다. 호의 통일성은 모든 기사를 같은 주제로 만드는 것이 아니라, 서로 다른 이슈를 일관된 편집 관점으로 읽는 방식에서 만듭니다.

## 회차 완결 원칙

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

- 회차 루트에는 `index.html`과 `assets/`만 둡니다.
- 기사 본문을 `fetch()`나 별도 HTML로 조립하지 않습니다.
- 이미지는 `./assets/...` 상대경로만 사용합니다.
- 허용 형식은 WebP·PNG·JPEG입니다.
- 외부 이미지 직접 연결, SVG, 벡터, 플랫 일러스트, 아이콘 콜라주는 금지합니다.
- 같은 이미지 파일을 이름·색상·필터만 바꿔 재사용하지 않습니다.
- 이미지 생성이나 로컬 저장에 실패하면 발행을 중단합니다.

## 품질 상향 원칙

- **원고:** 더 깊은 1차 자료, 더 선명한 질문, 더 강한 반론, 더 적은 반복
- **이미지:** 회차별 신규 이미지, 더 높은 디테일, 기사별로 구분되는 장면·구도·조명
- **지면:** 내용 기반 모듈, 더 풍부한 섹션 리듬, 더 나은 모바일 읽기 경험

직전 회차보다 나아진 점을 세 축에서 설명할 수 없으면 완성본으로 보지 않습니다.

## GitHub Pages

GitHub Pages는 `main` 브랜치의 루트 정적 파일을 사용합니다. GitHub Actions 기반 빌드나 배포는 사용하지 않습니다.
