# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준과 회차별 정적 HTML을 관리하는 저장소입니다.

## 새 회차 시작 순서

새 회차를 만들기 전에 반드시 다음 순서로 읽습니다.

1. `editorial/QUALITY_LEARNING_LOG.md`
2. `editorial/ISSUE_HISTORY.md`의 최신 회차
3. `editorial/WEEKLY_RUNBOOK.md`
4. `editorial/ARTICLE_WRITING_STANDARD.md`
5. `editorial/ISSUE_QUALITY_GATE.md`
6. 나머지 현행 편집·이미지·레이아웃·템플릿 기준

Git 커밋이나 수정 결과가 모델에 자동 학습되는 것은 아닙니다. 실패 원인과 수정 판단을 위 문서에서 직접 읽고 다음 회차에 적용하는 것이 이 저장소의 품질 누적 방식입니다.

## 최우선 원칙

- GitHub Actions는 사용하지 않습니다.
- 작업 브랜치와 PR을 기본 제작 절차로 사용하지 않습니다.
- 회차별 제작 상태와 기사 작업은 Pages에서 제외된 `work/YYYY-MM-DD/`에 저장합니다.
- `archive/YYYY-MM-DD/`에는 독자에게 공개할 완성본만 둡니다.
- 검증 메모와 독자용 원고를 같은 파일에 섞지 않습니다.
- 원고·이미지·지면·반응형 화면 검수가 끝난 **완성본만 발행 상태로 반영**합니다.
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
├─ work/
│  ├─ README.md
│  └─ YYYY-MM-DD/
│     ├─ WORK_STATE.md
│     ├─ 01_cover/
│     │  ├─ VERIFY.md
│     │  └─ ARTICLE.md
│     ├─ 02_economy/
│     ├─ 03_politics/
│     ├─ 04_society/
│     ├─ 05_tech/
│     ├─ 06_deep_dive/
│     ├─ 07_life_scene/
│     └─ 08_editors_pick/
├─ editorial/
│  ├─ QUALITY_LEARNING_LOG.md
│  ├─ ISSUE_HISTORY.md
│  ├─ WEEKLY_RUNBOOK.md
│  ├─ ARTICLE_WRITING_STANDARD.md
│  ├─ ISSUE_QUALITY_GATE.md
│  └─ ...
├─ templates/
├─ tools/
│  └─ validate_repository.py
├─ publication/
│  └─ legacy-issues.json
└─ requirements-tools.txt
```

`work/YYYY-MM-DD/`와 `archive/YYYY-MM-DD/`는 같은 회차 시작일을 사용해 1:1로 대응합니다. `work/`는 제작 상태, `archive/`는 완성 발행본을 소유합니다.

## 기사 제작 구조

일반 기사는 한 편씩 직렬로 완성합니다.

```text
VERIFY
→ NARRATIVE
→ ANALYSIS
→ STYLE PASS
→ HEADLINE & DECK
→ ARTICLE REVIEW
→ COMPLETE
```

- `VERIFY.md`는 내부 검증 전용입니다. 발표·계획·계약·집행·성과, 수치 정의, 유사 제도 차이, 예외와 상충 자료를 엄격히 기록합니다.
- `ARTICLE.md`는 독자용 최종 기사 전용입니다. 검증 메모의 `A ≠ B` 같은 축약 언어를 복사하지 않고 사건·정의·배경·변화·작동·영향을 독자 순서로 다시 서술합니다.
- 한계·부작용·미확정 사항은 기본 설명을 충분히 마친 뒤 다룹니다.
- `A가 아니다. B다.` 같은 정정형·부정형 문체는 실제 쟁점일 때만 사용하고 기본 기사 문법으로 사용하지 않습니다.
- 제목과 Deck은 본문과 STYLE PASS가 끝난 뒤 만듭니다.
- 현재 일반 기사가 `COMPLETE`가 되기 전에는 다음 일반 기사 본문을 작성하지 않습니다.

세부 규칙은 `editorial/ARTICLE_WRITING_STANDARD.md`를 따릅니다.

## 제작 순서

1. 직전 실패 기록과 수정 원리를 읽고 이번 회차의 품질 향상 목표를 정합니다.
2. Cover Story를 조사·검증·작성·검수해 `COMPLETE`로 만듭니다.
3. Economy → Politics → Society → Tech 순으로 각각 독립 완성합니다.
4. 일반 기사 5편이 모두 완성된 뒤 처음으로 서로 대조해 누락·중복·깊이 편차를 수정합니다.
5. 일반 기사와 다른 질문·새 주장·새 출처를 가진 DEEP DIVE를 작성합니다.
6. 외부 제도·기관·서비스의 생활 문제를 다루는 LIFE SCENE을 작성합니다.
7. 전체 편집 후 EDITOR'S PICK을 작성합니다.
8. 실제 이미지 생성 모델로 회차별 고품질 래스터 이미지를 만들고 `assets/`에 저장합니다.
9. 기사 내용에 맞춰 지면을 설계하고 CSS와 최소 JavaScript를 `index.html`에 내장합니다.
10. 원고, 출처, 모든 이미지와 1440px·1366px·1024px·390px 화면을 직접 검수합니다.
11. 필요하면 아래 구조 검사를 직접 실행합니다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

12. 품질 미달 항목을 다시 만들고, 완성된 회차와 메타데이터만 발행 상태로 반영합니다.
13. 이번 회차에서 새로 얻은 실패·성공 판단을 `QUALITY_LEARNING_LOG.md`와 `ISSUE_HISTORY.md`에 누적합니다.

## 예약 작업 운영 로직

이 절은 실제 예약 작업을 생성하는 설정이 아니라, 향후 ChatGPT 예약 작업을 이용해 주간 제작을 분할 실행할 때 따를 **운영 기준**입니다.

예약 실행의 목적은 한 번의 매우 긴 실행에서 한 호 전체를 처리하지 않고, 각 실행이 하나의 명확한 작업만 끝낸 뒤 GitHub의 `WORK_STATE.md`에 상태를 남기도록 하는 것입니다. 각 실행은 시작할 때 해당 회차의 `WORK_STATE.md`와 현행 편집 기준을 읽고, 지정된 단계만 수행한 뒤 결과와 다음 상태를 저장합니다.

### 기본 원칙

- 한 예약 실행에서는 원칙적으로 일반 기사 한 편 또는 후반 편집 단계 하나만 처리합니다.
- 일반 기사 제작은 반드시 Cover → Economy → Politics → Society → Tech 순서로 직렬 실행합니다.
- 기사 하나는 해당 실행 안에서 `VERIFY → NARRATIVE → ANALYSIS → STYLE PASS → HEADLINE & DECK → ARTICLE REVIEW → COMPLETE`까지 닫는 것을 목표로 합니다.
- 실행이 끝나면 `WORK_STATE.md`의 상태와 `다음 작업`을 갱신합니다.
- 이전 단계가 `COMPLETE`가 아니면 다음 단계로 건너뛰지 않습니다.
- 일반 기사 5편이 모두 완성되기 전에는 CROSS-ARTICLE REVIEW와 DEEP DIVE를 시작하지 않습니다.
- 이미지와 HTML은 기사 원고 전체가 확정된 뒤 별도 후반 단계에서 처리합니다.
- 예약 작업은 GitHub Actions를 사용하지 않습니다.

### 예시 시간표

예를 들어 일요일 밤부터 월요일 오전까지 제작을 분할한다면 다음과 같이 운영할 수 있습니다.

| 시각 | 작업 |
|---|---|
| 일 20:00 | 제1호 기사 작성법과 현행 기준 재확인 → Cover Story 재작성·검수·저장 |
| 일 21:00 | Economy만 검증·서술·분석·문체검수·제목·최종검수 |
| 일 22:00 | Politics만 동일 절차 |
| 일 23:00 | Society만 동일 절차 |
| 월 00:00 | Tech만 동일 절차 |
| 월 01:00 | 일반 기사 5편 상호 대조 → 설명 누락·중복·깊이 편차 수정 |
| 월 02:00 | 일반 기사 전체를 기준으로 DEEP DIVE 후보 선정 및 심화 차이 검증 |
| 월 03:00 | DEEP DIVE 작성·검수 |
| 월 04:00 | LIFE SCENE 작성·검수 |
| 월 05:00 | EDITOR'S PICK 작성 + 기사 전체 최종 편집 검수 |
| 월 09:00 | 이미지·지면·HTML·화면 검수가 완료된 경우 최종 HTML 발간 |

위 시간은 특정 회차에 고정된 예약값이 아니라 **권장 제작 분할 예시**입니다. 실제 예약 시각은 회차와 작업량에 따라 바꿀 수 있지만, 단계 순서와 선행 조건은 유지합니다.

09:00 발간 단계는 앞선 원고뿐 아니라 이미지, 지면, 상대경로, 메타데이터와 실제 화면 검수가 모두 완료됐을 때만 진행합니다. 미완료 항목이 있으면 시간을 맞추기 위해 발간하지 않고 `WORK_STATE.md`에 미완료 상태를 남깁니다.

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
