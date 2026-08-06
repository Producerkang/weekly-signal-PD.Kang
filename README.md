# WEEKLY SIGNAL

정적 GitHub Pages용 주간 웹 매거진입니다.

## 공개 구조

```text
/
├─ index.html                 # latest.json을 읽고 최신호로 이동
├─ latest.json                # 최신호 1개
├─ issues.json                # 발행된 회차 목록
├─ archive/
│  ├─ index.html              # 과월호 선택
│  └─ YYYY-MM-DD/
│     ├─ index.html           # 해당 회차의 완성된 지면
│     └─ assets/              # 해당 회차의 래스터 생성 이미지
├─ editorial/                 # 현행 편집·작성·이미지·레이아웃 기준
└─ templates/                 # 현행 정적 발행 계약과 깨끗한 회차 셸
```

## 새 회차 시작

새 회차를 만들 때는 다음 순서로 진행합니다.

1. `editorial/WEEKLY_RUNBOOK.md`가 지정한 현행 기준 문서를 읽습니다.
2. 리서치 후 섹션별 일반 기사 전체를 먼저 작성·검증합니다.
3. 필요한 기사만 `DEEP DIVE`로 심화합니다.
4. 현실적인 가상 생활 서사인 `LIFE SCENE`을 작성합니다.
5. 전체 원고가 완성된 뒤 `EDITOR'S PICK`을 작성합니다.
6. 그다음 보조 지면·표지·이미지를 결정하고 `templates/ISSUE_TEMPLATE.html`의 깨끗한 셸에서 새 HTML을 만듭니다.

제1호의 `archive/2026-07-20/index.html`은 발행 기록이며 새 회차의 내용 구조나 CSS 템플릿이 아닙니다.

## 핵심 발행 원칙

- 한 회차는 `archive/YYYY-MM-DD/` 폴더 하나로 완결합니다.
- 공개 지면은 완성된 `index.html`이며 브라우저에서 기사 본문을 조립하지 않습니다.
- CSS와 최소 JavaScript는 회차의 `index.html` 안에 둡니다.
- 이미지는 해당 회차의 `assets/`에 저장하고 상대경로로 연결합니다.
- 모든 주요 이미지는 래스터 생성 이미지입니다. SVG·벡터·플랫 일러스트·아이콘 콜라주·아이소메트릭 이미지는 사용하지 않습니다.
- 기존 `Document Reportage`는 폐기됐으며 새 회차에서는 `DEEP DIVE`를 사용합니다.
- DEEP DIVE는 제작 단계에서는 일반 기사 전체가 완성된 뒤 쓰고, 최종 지면에서는 심화하는 일반 기사 바로 뒤에 배치합니다.
- 과월호의 누적 patch CSS·JS와 `reportage-*` 코드를 새 회차에 복사하지 않습니다.
- 기존 회차 수정은 같은 파일을 직접 수정하고 이전 상태는 Git 커밋 이력으로만 보존합니다.
- 새 회차 발행 시 새 폴더를 추가하고 `issues.json`과 `latest.json`을 갱신합니다.
- GitHub Pages는 `main / (root)`에서 배포합니다.
