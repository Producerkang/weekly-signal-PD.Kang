# WEEKLY SIGNAL

정적 GitHub Pages용 주간 웹 매거진입니다.

## 공개 구조

```text
/
├─ index.html                 # latest.json을 읽고 최신호로 이동
├─ latest.json                # 품질 검수를 통과한 최신호 1개
├─ issues.json                # 품질 검수를 통과한 발행 회차 목록
├─ archive/
│  ├─ index.html              # 과월호 선택
│  └─ YYYY-MM-DD/
│     ├─ index.html           # 해당 회차의 완성된 지면
│     └─ assets/              # 해당 회차의 고품질 래스터 생성 이미지
├─ editorial/                 # 현행 편집·작성·이미지·레이아웃·품질 기준
└─ templates/                 # 정적 발행 계약과 회차 시작 셸
```

## 새 회차 시작

새 회차를 만들 때는 다음 순서로 진행합니다.

1. `editorial/WEEKLY_RUNBOOK.md`의 현행 문서 목록을 읽습니다.
2. `editorial/ISSUE_QUALITY_GATE.md`를 발행 차단 기준으로 사용합니다.
3. 리서치 후 Cover Story와 Economy·Politics·Society·Tech 일반 기사를 모두 작성·검증합니다.
4. 필요한 기사만 `DEEP DIVE`로 심화합니다.
5. 외부 제도·서비스의 생활 문제를 다루는 `LIFE SCENE`을 작성합니다.
6. 전체 편집 후 `EDITOR'S PICK`을 작성합니다.
7. 고품질 래스터 생성 이미지를 제작하고 실제 화면을 검수합니다.
8. 모든 품질 게이트를 통과한 뒤에만 발행 목록과 최신호를 갱신합니다.

제1호의 `archive/2026-07-20/index.html`은 새 회차 코드 템플릿이 아닙니다. 다만 발행 전 시각적 밀도·섹션 리듬·이미지 품질을 비교하는 품질 기준으로는 확인합니다.

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

Cover Story가 특정 분야를 다룬다는 이유로 그 분야의 일반 기사를 생략하지 않습니다. 기사 후보가 부족하면 리서치를 계속하며, 분야를 조용히 삭제해 얇은 회차를 발행하지 않습니다.

## 핵심 발행 원칙

- 한 회차는 `archive/YYYY-MM-DD/` 폴더 하나로 완결합니다.
- 공개 지면은 완성된 `index.html`이며 브라우저에서 기사 본문을 조립하지 않습니다.
- CSS와 최소 JavaScript는 회차의 `index.html` 안에 둡니다.
- 모든 주요 이미지는 실제 이미지 생성 모델로 제작한 래스터 생성 이미지입니다.
- Python·Canvas·CSS·SVG 도형을 래스터로 변환한 대체 이미지는 사용하지 않습니다.
- WebP·PNG·JPEG 형식만 허용하되 파일 형식만으로 이미지 품질을 통과시키지 않습니다.
- 기존 `Document Reportage`는 폐기됐으며 새 회차에서는 `DEEP DIVE`를 사용합니다.
- DEEP DIVE는 일반 기사와 다른 질문·새 주장·새 출처를 제공해야 합니다.
- LIFE SCENE은 개인 조언이 아니라 외부 제도·기관·서비스의 생활 문제를 서사로 보여줍니다.
- EDITOR'S PICK은 기사별 요약문이 아닙니다.
- 템플릿의 동일한 구조를 모든 기사에 복제하지 않습니다.
- 1440px·1366px·1024px·390px 실제 화면을 확인하지 않은 회차는 발행하지 않습니다.
- 기존 회차 수정은 같은 파일을 직접 수정하고 이전 상태는 Git 커밋 이력으로만 보존합니다.
- 새 회차 발행 시 새 폴더를 추가하고 `issues.json`과 `latest.json`을 마지막에 갱신합니다.
- GitHub Pages는 `main / (root)`에서 배포합니다.
