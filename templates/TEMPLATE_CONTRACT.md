# WEEKLY SIGNAL 정적 발행 계약

## 1. 사이트 공통 파일

- `/index.html`: `latest.json`을 읽고 최신 회차로 이동
- `/latest.json`: 최신 회차 1개
- `/issues.json`: 발행 회차 목록
- `/archive/index.html`: 과월호 선택

공통 파일은 기사 본문을 조립하지 않습니다.

## 2. 회차 폴더

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
   └─ image files
```

- `index.html`은 해당 회차의 완성된 문서입니다.
- CSS와 최소 JavaScript는 `index.html`에 내장합니다.
- 이미지는 `./assets/...` 상대경로만 사용합니다.
- 외부 사이트 이미지를 직접 연결하지 않습니다.
- 회차 폴더 밖의 기사 조각이나 스타일 파일을 불러오지 않습니다.

## 3. 수정 계약

- 동일 회차 수정은 같은 파일을 직접 교체합니다.
- 이전 상태는 Git 커밋 이력에만 남깁니다.
- 새 회차만 새 날짜 폴더를 만듭니다.
- 회차 폴더에는 현재 유효한 완성본과 이미지 자산만 둡니다.

## 4. 필수 회차 섹션

- `contents`
- `life-scene`
- `opening`
- `cover-story`
- `economy`
- `politics`
- `society`
- `tech`
- `data`
- `watch`
- `sources`

## 5. 접근성과 반응형

- 주요 이미지에는 대체텍스트를 제공합니다.
- 제목과 숫자는 의미 단위로 줄바꿈합니다.
- 숫자와 단위를 분리하지 않습니다.
- 모바일에서 1열로 전환하고 가로 스크롤을 만들지 않습니다.
