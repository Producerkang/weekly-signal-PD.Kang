# Screen QA

## 실행 방식

GitHub Actions의 Chromium과 Playwright를 사용해 `archive/2026-07-27/index.html`을 정적 서버에서 실제 렌더링했다. 자동 검수 스크립트는 `scripts/validate-issue.mjs`, 재사용 워크플로는 `.github/workflows/issue-qa.yml`이다.

첫 실행에서는 다음 두 항목이 실패해 발행을 중단했다.

- Politics 제목 4행, Tech 제목 3행
- Contents 높이가 1440×1200 및 1366×1024 화면을 초과

분할 지면의 제목 폭·크기와 Contents 간격을 수정한 뒤 동일한 네 화면으로 재검수했다.

## 최종 결과

### 1440×1200
- [x] 가로 넘침 없음
- [x] 필수 섹션 누락·순서 오류 없음
- [x] 일반 기사·르포 제목 모두 1–2행
- [x] Contents 높이 720px로 화면 안에 표시
- [x] Cover 행간 1.40
- [x] 이미지 로딩 오류·대체텍스트 누락 없음
- [x] DATA 6개, WATCH 6개
- [x] Document Reportage 이미지 없음

### 1366×1024
- [x] 가로 넘침 없음
- [x] 일반 기사·르포 제목 모두 1–2행
- [x] Contents 높이 720px로 화면 안에 표시
- [x] Cover 행간 1.40
- [x] 이미지 로딩·DOM 순서·필수 카드 통과

### 1024×1366
- [x] 가로 넘침 없음
- [x] 분할 지면 1열 전환
- [x] 필수 섹션과 이미지 정상 로딩
- [x] 제목·카드·본문 잘림 없음
- [x] Contents 높이 942px

### 390×844
- [x] 가로 넘침 없음
- [x] 장문 본문·카드·이미지 1열 전환
- [x] Cover 외 수동 줄바꿈 없음
- [x] 한국어 표제 잘림 없음
- [x] 이미지·상대경로·대체텍스트 정상
- [x] 내비게이션 가로 탐색 가능

## 공통 자동 검사

- [x] 필수 ID 13개 존재 및 문서 순서 일치
- [x] `h1` 하나
- [x] Cover 밖 `<br>` 0개
- [x] 깨진 본문 이미지 0개
- [x] 이미지 대체텍스트 누락 0개
- [x] 브라우저 콘솔 오류 0개
- [x] `editors-pick` 식별자 존재
- [x] Cover line-height 비율 1.400

## 시각 확인

자동 생성된 데스크톱·태블릿·모바일 전체 페이지 스크린샷을 확인했다. Cover의 제목·이미지 대비, Contents 밀도, LIFE SCENE 전환, 기사별 이미지 구분, 무이미지 Reportage 전환, DATA·WATCH와 Sources 후단 배치를 직접 확인했다.

## 판정

`complete` — 발행 허용
