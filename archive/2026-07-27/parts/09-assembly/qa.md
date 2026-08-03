# Assembly QA

## 정적 구조

- [x] 최종 문서는 `archive/2026-07-27/index.html` 하나로 조립했다.
- [x] CSS와 최소 JavaScript를 HTML 안에 내장했다.
- [x] `parts/` 파일을 런타임에 불러오지 않는다.
- [x] 모든 이미지 경로는 `./assets/...` 상대경로다.
- [x] 필수 ID: `contents`, `life-scene`, `editors-pick`, `cover-story`, `economy`, `politics`, `reportage`, `society`, `tech`, `data`, `watch`, `sources`.
- [x] 문서 순서: Cover → Contents → LIFE SCENE → Editor's Pick → Cover Story → Economy → Politics → Document Reportage → Society → Tech → Data → Watch → Sources & Method.
- [x] `h1`은 Cover 하나만 사용하고 각 지면은 `h2`, 내부 논점은 `h3`로 구성했다.
- [x] Cover 외 표제에 수동 `<br>`을 넣지 않았다.
- [x] Cover 제목 CSS `line-height`는 1.40이다.
- [x] 승인 모듈 식별자 `split-opening`, `image-led-opening`, `document-reportage`를 사용했다.
- [x] Document Reportage에 이미지가 없다.
- [x] DATA 카드가 정확히 6개다.
- [x] WATCH 카드가 정확히 6개이며 각 카드에 상태·주체·문서·판단 기준·공식 링크가 있다.
- [x] 이미지 7개 모두 대체텍스트와 고유 파일을 사용한다.

## 다음 게이트

이 판정은 정적 조립 완료만 의미한다. 실제 렌더링과 제목 줄 수, 가로 넘침, 이미지 로딩·크롭은 `10-screen-qa`에서 네 화면으로 확인하기 전까지 통과로 간주하지 않는다.

## 판정

`complete`
