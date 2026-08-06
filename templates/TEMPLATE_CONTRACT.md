# WEEKLY SIGNAL 정적 발행 계약

## 1. 사이트 공통 파일

- `/index.html`: `latest.json`을 읽고 최신 회차로 이동
- `/latest.json`: 최신 회차 1개
- `/issues.json`: 발행 회차 목록
- `/archive/index.html`: 과월호 선택

공통 파일은 기사 본문을 조립하지 않는다.

## 2. 회차 폴더

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
   └─ raster image files
```

- `index.html`은 해당 회차의 완성된 정적 문서다.
- CSS와 최소 JavaScript는 `index.html`에 내장한다.
- 이미지는 `./assets/...` 상대경로만 사용한다.
- 외부 이미지 직접 연결과 런타임 기사 조립을 금지한다.
- 회차 폴더 밖의 기사 조각, 버전별 CSS·JS와 임시 데이터를 불러오지 않는다.
- 이미지 자산은 WebP, PNG, JPEG만 허용하며 SVG는 두지 않는다.

## 3. 새 회차의 내용 순서

새 회차는 다음 제작 결과를 바탕으로 실제 필요한 섹션만 HTML에 넣는다.

1. Cover
2. Contents
3. LIFE SCENE
4. EDITOR'S PICK
5. Cover Story와 분야별 일반 기사
6. 선택된 DEEP DIVE
7. 필요한 DATA
8. 필요한 WATCH
9. Sources

제작 순서와 문서 배치 순서는 다르다. 실제 제작은 일반 기사 → DEEP DIVE → LIFE SCENE → EDITOR'S PICK 순서다.

## 4. DOM 원칙

- 각 주요 섹션은 고유한 `id`를 가진다.
- 목차와 내비게이션은 실제 DOM 순서 및 존재하는 섹션만 반영한다.
- 일반 기사와 DEEP DIVE는 서로 다른 클래스와 라벨을 사용한다.
- 새 회차에서 `reportage`, `document-reportage`, `reportage-*` 클래스와 라벨을 사용하지 않는다.
- LIFE SCENE은 서사 본문과 마지막 `SCENARIO NOTE`를 구분한다.
- 미사용 섹션, 빈 카드, 숨김 레거시 모듈을 DOM에 남기지 않는다.

## 5. CSS·JavaScript

- 회차별 CSS는 현행 `LAYOUT_SYSTEM.md`의 토큰과 셸을 사용한다.
- 과월호의 누적 패치 CSS, 일회성 클래스와 중복 선언을 복사하지 않는다.
- 선택자 우선순위를 해결하기 위한 장문의 `!important` 패치 묶음을 만들지 않는다.
- JavaScript는 진행 바, 섹션 활성 상태와 필요한 접근성 동작 등 최소 기능에 한정한다.
- 콘텐츠를 JavaScript로 생성하거나 숨겨진 데이터에서 조립하지 않는다.

## 6. 이미지

- 모든 주요 이미지는 회차별 래스터 생성 이미지다.
- SVG, 벡터, 플랫 일러스트, 아이콘 콜라주와 아이소메트릭 자산을 금지한다.
- 각 의미 있는 이미지에 대체 텍스트를 제공한다.
- 실제 사진으로 오인될 수 있는 생성 이미지에는 필요한 고지를 표시한다.
- 사용하지 않는 원본·중간 생성본·중복 이미지는 커밋하지 않는다.

## 7. 접근성과 반응형

- 의미 구조에 맞는 `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`를 사용한다.
- 제목과 숫자는 의미 단위로 줄바꿈한다.
- 숫자와 단위를 분리하지 않는다.
- 모바일에서 1열로 전환하고 가로 스크롤을 만들지 않는다.
- 키보드 탐색, 링크 이름, 명도 대비와 이미지 대체 텍스트를 확인한다.

## 8. 수정과 보존

- 동일 회차 수정은 같은 파일을 직접 교체한다.
- 이전 상태는 Git 커밋 이력에만 남긴다.
- 새 회차만 새 날짜 폴더를 만든다.
- 회차 폴더에는 현재 유효한 완성본과 실제 사용 이미지 자산만 둔다.
- 제1호 전용 HTML 템플릿을 새 회차 시작점으로 사용하지 않는다.
