# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준과 회차별 정적 HTML을 관리하는 저장소입니다.

## 최우선 원칙

- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.
- 조사 메모, 이미지 후보, 중간 HTML과 검수 산출물은 GitHub 저장소 밖의 작업 환경에서 처리합니다.
- 원고·이미지·지면·반응형 화면 검수가 끝난 **완성본만 `main`에 직접 반영**합니다.
- 사용자가 매번 직접 검수하지 않아도 되도록 제작자가 최종 품질 판단과 수정 책임을 맡습니다.
- 기술 조건의 형식적 충족보다 기사 깊이, 이미지 미감, 잡지적 밀도와 읽기 경험을 우선합니다.
- 매 회차는 직전 회차보다 원고·이미지·지면 중 최소 세 축에서 분명한 개선을 만들어야 합니다.

세부 절차는 `editorial/PUBLISHING_PIPELINE.md`를 따릅니다.

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
├─ templates/
├─ tools/
│  └─ validate_repository.py
├─ publication/
│  └─ legacy-issues.json
└─ requirements-tools.txt
```

## 새 회차 제작 순서

1. 현행 편집 기준과 Runbook을 읽습니다.
2. 직전 회차와 실패 기록을 확인하고 이번 회차의 품질 향상 목표를 정합니다.
3. Cover Story와 Economy·Politics·Society·Tech 일반 기사를 모두 조사·작성·검증합니다.
4. 일반 기사와 다른 질문·새 주장·새 출처를 가진 DEEP DIVE를 작성합니다.
5. 외부 제도·기관·서비스의 생활 문제를 다루는 LIFE SCENE을 작성합니다.
6. 전체 편집 후 EDITOR'S PICK을 작성합니다.
7. 실제 이미지 생성 모델로 고품질 래스터 이미지를 만들고 회차의 `assets/`에 저장합니다.
8. 완성된 CSS와 최소 JavaScript를 회차의 `index.html` 안에 넣습니다.
9. 원고, 출처, 모든 이미지와 1440px·1366px·1024px·390px 화면을 직접 검수합니다.
10. 필요하면 보조 구조 검사를 직접 실행합니다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

11. 품질 미달 항목을 모두 수정합니다.
12. 완성 회차, `issues.json`, `latest.json`, `archive/index.html`, `ISSUE_HISTORY.md`를 `main`에 직접 반영합니다.

중간 상태를 `main/archive/`에 먼저 올린 뒤 고치는 방식은 사용하지 않습니다.

## 기본 회차 구성

별도 사용자 지시가 없으면 다음 구성을 기본값으로 합니다.

- Cover Story 1편
- Economy 1편
- Politics 1편
- Society 1편
- Tech 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- EDITOR'S PICK 1편
- Sources

Cover Story는 분야별 일반 기사를 대신하지 않습니다. 기사 후보가 부족하면 리서치를 계속하며, 분야를 삭제해 얇은 회차를 발행하지 않습니다.

## 회차 완결 원칙

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

- 회차 루트에는 `index.html`과 `assets/`만 둡니다.
- CSS와 최소 JavaScript는 `index.html`에 내장합니다.
- 기사 본문을 `fetch()`나 별도 HTML 파일로 조립하지 않습니다.
- 이미지는 `./assets/...` 상대경로만 사용합니다.
- 허용 이미지 형식은 WebP·PNG·JPEG입니다.
- 외부 이미지 직접 연결, SVG, 벡터, 플랫 일러스트와 아이콘 콜라주는 금지합니다.

## 품질 상향 원칙

새 회차는 단순히 품질 게이트를 통과하는 데서 끝나지 않습니다. 제작 전과 최종 검수에서 다음 세 가지 개선을 명시적으로 확인합니다.

- 원고: 더 깊은 근거, 더 선명한 질문, 더 적은 반복
- 이미지: 더 높은 디테일, 기사별로 구분되는 장면과 구도
- 지면: 더 풍부한 섹션 리듬, 더 나은 모바일 읽기 경험

직전 회차보다 나아진 점을 설명할 수 없으면 완성본으로 보지 않습니다.

## 검수 원칙

`tools/validate_repository.py`는 구조적 실수를 찾는 보조 도구입니다.

- 발행 목록과 회차 폴더 불일치
- 분할 HTML, 별도 CSS·JS, 런타임 콘텐츠 조립
- 외부 이미지 URL과 로컬 이미지 누락
- 필수 섹션·이미지·내부 앵커 누락
- 이미지 해상도·파일 크기·중복 문제

이 검사는 기사의 깊이, 이미지의 미감, 지면의 완성도를 판정하지 않습니다. 최종 품질은 전체 원고와 실제 렌더링 화면을 직접 읽고 보며 판단합니다.

## GitHub Pages

GitHub Pages는 `main` 브랜치의 루트 정적 파일을 사용합니다. GitHub Actions 기반 빌드나 배포는 사용하지 않습니다.

제1호는 기존 발행 기록으로 보존하며, 신규 회차의 구조 검사는 소급 적용하지 않습니다. 예외 목록은 `publication/legacy-issues.json`에서 관리합니다.
