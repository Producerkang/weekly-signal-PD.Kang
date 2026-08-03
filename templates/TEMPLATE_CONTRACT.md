# WEEKLY SIGNAL 정적 발행 계약

## 1. 사이트 공통 파일

- `/index.html`: `latest.json`을 읽고 최신 회차로 이동
- `/latest.json`: 최신 회차 1개
- `/issues.json`: 발행 회차 목록
- `/archive/index.html`: 과월호 선택

공통 파일은 기사 본문을 조립하지 않습니다.

## 2. 회차 폴더

새 회차는 월요일 날짜 폴더 하나를 사용합니다.

```text
archive/YYYY-MM-DD/
├─ production.json
├─ index.html
├─ parts/
│  ├─ 00-plan/
│  │  ├─ issue-brief.md
│  │  ├─ source-map.md
│  │  └─ layout-map.md
│  ├─ 01-cover-story/
│  │  ├─ article.md
│  │  ├─ sources.md
│  │  ├─ layout.md
│  │  └─ qa.md
│  ├─ 02-economy/
│  ├─ 03-politics/
│  ├─ 04-society/
│  ├─ 05-tech/
│  ├─ 06-reportage/
│  ├─ 07-editorial-pages/
│  └─ 10-screen-qa/
└─ assets/
   ├─ manifest.md
   └─ image files
```

- `production.json`은 단계별 진행 상태와 발행 허용 여부를 소유합니다.
- `parts/`는 중단 복구가 가능한 제작 기준본입니다.
- `index.html`은 모든 단계가 완료된 뒤 조립하는 해당 회차의 최종 완성 문서입니다.
- 최종 `index.html`은 `parts/` 파일을 런타임에 불러오지 않습니다.
- CSS와 최소 JavaScript는 `index.html`에 내장합니다.
- 이미지는 `./assets/...` 상대경로만 사용합니다.
- 외부 사이트 이미지를 직접 연결하지 않습니다.
- 회차 폴더 밖의 기사 조각이나 스타일 파일을 불러오지 않습니다.

## 3. 단계 파일 계약

섹션 기사와 르포 폴더의 기본 파일은 다음과 같습니다.

- `article.md`: 공개 원고와 제목 계층
- `sources.md`: 주장별 근거와 실제 사용한 원문
- `layout.md`: 승인 모듈, 이미지 위치와 비율, 보조 정보 설계
- `qa.md`: 해당 꼭지의 내용·역할·제목 검수 결과

보조 편집 지면은 `07-editorial-pages/`에서 각각 독립 파일로 관리합니다.

- `contents.md`
- `life-scene.md`
- `editors-pick.md`
- `data.md`
- `watch.md`
- `sources-method.md`
- `qa.md`

각 파일은 완성될 때마다 저장합니다. 하나의 긴 임시 원고 파일에 여러 꼭지를 함께 작성하지 않습니다.

## 4. production.json 계약

필수 최상위 필드:

```json
{
  "issueStart": "YYYY-MM-DD",
  "period": "YYYY-MM-DD/YYYY-MM-DD",
  "publicationStatus": "production",
  "currentStage": "00-plan",
  "publishAllowed": false,
  "stages": []
}
```

각 단계는 `id`, `status`, `updatedAt`, `files`, `note`를 가집니다.

허용 상태:

- `pending`
- `draft`
- `complete`
- `revision_required`
- `blocked`

`publishAllowed`는 화면 검수까지 통과한 뒤에만 `true`가 될 수 있습니다.

## 5. 조립과 발행 계약

- 한 실행은 한 단계만 완료합니다.
- 단계 완료 후 상태표를 갱신하고 반드시 종료합니다.
- 모든 기사와 보조 지면을 완성하기 전에 `index.html`을 완성본으로 취급하지 않습니다.
- 화면 검수 전에는 `issues.json`, `archive/index.html`, `latest.json`을 변경하지 않습니다.
- `latest.json`은 발행 단계의 마지막 변경입니다.
- 중간 작업 파일은 발행 파일을 대체하지 않으며 사이트 공통 파일에서 직접 연결하지 않습니다.

## 6. 수정 계약

- 동일 회차 수정은 같은 `parts/` 파일과 같은 `index.html`을 직접 교체합니다.
- 수정이 필요한 단계는 `revision_required`로 되돌립니다.
- 이전 상태는 Git 커밋 이력에만 남깁니다.
- 새 회차만 새 날짜 폴더를 만듭니다.
- 버전별 사본, 별도 패치 CSS·JS와 임시 완성본을 만들지 않습니다.

## 7. 필수 회차 섹션

- `contents`
- `life-scene`
- `editors-pick`
- `cover-story`
- `economy`
- `politics`
- `society`
- `tech`
- `data`
- `watch`
- `sources`

## 8. 접근성과 반응형

- 주요 이미지에는 대체텍스트를 제공합니다.
- 제목과 숫자는 의미 단위로 줄바꿈합니다.
- 숫자와 단위를 분리하지 않습니다.
- 모바일에서 1열로 전환하고 가로 스크롤을 만들지 않습니다.
- Cover 외 일반 표제에는 수동 `<br>`을 사용하지 않습니다.
- Cover 대형 한글 제목의 기준 `line-height`는 1.40입니다.
