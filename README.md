# WEEKLY SIGNAL

주간 시사 매거진을 GitHub Pages로 게시하는 저장소입니다.

## 게시 구조

- `index.html`: 고정 최신호 로더. `latest.json`을 읽어 최신 보존호로 이동합니다.
- `latest.json`: 최신 발행호의 경로·기간·표지 제목을 기록하는 포인터입니다.
- `archive/index.html`: 과월호 목록입니다.
- `archive/YYYY-MM-DD.html`: CSS·스크립트·이미지를 포함한 발행호별 완성형 HTML입니다.
- `.nojekyll`: 정적 파일을 Jekyll 변환 없이 게시합니다.

## 주간 발행 순서

1. 새 호 완성본을 `archive/YYYY-MM-DD.html`로 추가합니다.
2. `archive/index.html` 최상단에 새 호를 추가합니다.
3. `latest.json`을 새 호로 변경합니다.
4. `index.html`은 로더 구조가 바뀌지 않는 한 수정하지 않습니다.

과월호는 날짜별 완성본으로 보존되므로 이후 최신호가 바뀌어도 내용이 변하지 않습니다.
