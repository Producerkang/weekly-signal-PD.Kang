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
│     └─ assets/              # 해당 회차에서 사용하는 이미지
├─ editorial/                 # 편집 기준
└─ templates/                 # 정적 발행 계약
```

## 발행 원칙

- 한 회차는 `archive/YYYY-MM-DD/` 폴더 하나로 완결합니다.
- 공개 지면은 완성된 `index.html`이며 브라우저에서 기사 조립을 하지 않습니다.
- CSS와 최소 JavaScript는 회차의 `index.html` 안에 둡니다.
- 이미지는 해당 회차의 `assets/`에 저장하고 상대경로로 연결합니다.
- 기존 회차 수정은 같은 파일을 직접 수정하며 별도의 버전 사본을 만들지 않습니다.
- 이전 상태는 Git 커밋 이력으로만 보존합니다.
- 새 회차 발행 시 새 폴더를 추가하고 `issues.json`과 `latest.json`을 갱신합니다.
- GitHub Pages는 `main / (root)`의 브랜치 배포를 사용합니다.
