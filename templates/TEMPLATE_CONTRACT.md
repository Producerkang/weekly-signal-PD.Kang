# WEEKLY SIGNAL Template Contract

이 문서는 새 호 제작 시 지켜야 하는 DOM·CSS·JS·파일·메타데이터 계약이다. 시각적 의미와 모듈 사용 기준은 `editorial/LAYOUT_SYSTEM.md`를 따른다.

> 저장소는 공개 상태다. HTML·CSS·JS·JSON·주석·커밋 메시지에 사용자 개인 정보, 이메일, 연락처, 계정 정보, 로컬 절대경로, 인증 정보, API 키, 토큰, 쿠키, 비공개 일정과 사적인 메모를 기록하지 않는다.

## 1. 현재 상태

제1호는 `archive/2026-07-20.html`, reader 파일과 여러 CSS·JS 보정 파일을 결합해 표시되는 과도기 구조다.

- 제1호는 시각적 참고 자료다.
- 제1호의 기사 내용·날짜·출처·이미지 자산은 템플릿이 아니다.
- reader 계열의 fetch·본문 치환·누적 보정 구조를 새 호에 복사하지 않는다.
- 제2호와 제3호는 이 계약에 따른 독립 보존호로 제작한다.
- 정식 템플릿은 제2호와 제3호에서 공통 셸과 모듈이 검증된 뒤 추출한다.

## 2. 독립 보존호 정의

독립 보존호는 단일 물리 파일만을 의미하지 않는다. 다음 파일만으로 해당 호를 재현할 수 있어야 한다.

- `archive/YYYY-MM-DD.html`
- `archive/assets/YYYY-MM-DD/`의 호별 자산
- 변경되지 않는 버전 고정 공용 런타임 또는 호별 포함 CSS·JS

허용 예:

```text
archive/2026-08-03.html
archive/assets/2026-08-03/
  cover.webp
  life-scene.webp
  cover-story.webp
  economy.webp
  politics.webp
  society.webp
  tech.webp
assets/runtime/v1/issue.css
assets/runtime/v1/issue.js
```

공용 런타임을 수정해 과월호가 바뀌게 하지 않는다. 파괴적 변경은 새 버전 경로를 만든다.

## 3. 호 메타데이터

새 호 제작 전 다음 값을 확정한다.

- issue number
- issue start date
- period start
- period end
- research cutoff
- publication date and time
- timezone: `Asia/Seoul`
- archive path
- asset directory
- title
- summary

날짜별 HTML의 `<head>`에는 최소한 다음을 포함한다.

- UTF-8 charset
- viewport
- 고유 `<title>`
- description
- canonical URL 또는 배포 환경에서 생성 가능한 동일 정보
- publication date metadata

특정 호의 메타데이터를 공용 JS에 하드코딩하지 않는다.

## 4. `latest.json` 계약

필수 필드:

```json
{
  "issueStart": "YYYY-MM-DD",
  "period": "YYYY.MM.DD–MM.DD",
  "title": "호 제목",
  "path": "archive/YYYY-MM-DD.html",
  "publishedAt": "YYYY-MM-DDTHH:MM:SS+09:00"
}
```

선택 필드:

```json
{
  "issueNumber": 2,
  "summary": "과월호 목록에 사용할 짧은 설명"
}
```

규칙:

- `path`는 reader 래퍼가 아니라 독립 보존호를 가리킨다.
- 날짜는 실제 발행 메타데이터와 일치해야 한다.
- `latest.json`은 모든 검수와 배포 확인이 끝난 뒤 마지막으로 갱신한다.
- 실패 시 이전 값을 유지하거나 즉시 복원한다.

## 5. 과월호 계약

`archive/index.html`의 새 항목은 최소한 다음 값을 표시한다.

- 호수
- 발행일 또는 기간
- 제목
- 짧은 설명
- 독립 보존호 경로

과월호 항목, 보존호 `<head>`와 `latest.json`의 날짜·제목·경로가 일치해야 한다. “현재 최신호” 같은 시간이 지나면 틀리는 문구를 호별 기록에 넣지 않는다.

## 6. 필수 DOM 계약

클래스명은 스타일링을 위해 추가할 수 있지만 자동화 검증은 `id`, `data-section`, `data-role`, `data-module`을 기준으로 한다.

```html
<body data-issue-date="YYYY-MM-DD">
  <a data-role="skip-link" href="#main-content">본문으로 이동</a>
  <div id="reading-progress" data-role="reading-progress"></div>

  <header data-role="topbar">
    <nav data-role="section-nav" aria-label="기사 섹션"></nav>
  </header>

  <main id="main-content">
    <section id="top" data-section="cover"></section>

    <section id="front-spread" data-section="front-spread">
      <section id="contents" data-section="contents"></section>
      <section id="life-scene" data-section="life-scene"></section>
    </section>

    <section id="opening" data-section="opening"></section>
    <article id="cover-story" data-section="article" data-channel="cover"></article>
    <article id="economy" data-section="article" data-channel="economy"></article>
    <article id="politics" data-section="article" data-channel="politics"></article>
    <article id="society" data-section="article" data-channel="society"></article>
    <article id="tech" data-section="article" data-channel="tech"></article>
    <section id="data" data-section="data"></section>
    <section id="watch" data-section="watch"></section>
    <section id="sources" data-section="sources"></section>
  </main>
</body>
```

독립 보존호에는 Splash를 넣지 않는다.

## 7. 대표 기사 DOM

각 대표 기사에는 다음 의미 요소가 필요하다.

```html
<article data-section="article" data-channel="economy" data-module="text-led">
  <header data-role="article-header">
    <p data-role="article-label"></p>
    <h2 data-role="article-title"></h2>
    <p data-role="article-deck"></p>
  </header>

  <div data-role="article-thesis"></div>
  <div data-role="article-body"></div>

  <section data-role="verification">
    <div data-role="verified-facts"></div>
    <div data-role="editorial-analysis"></div>
  </section>

  <nav data-role="article-sources" aria-label="공식 출처"></nav>
</article>
```

규칙:

- 기사 제목·부제·본문·출처는 HTML에 존재해야 한다.
- JS가 본문을 fetch하거나 대량 치환하지 않는다.
- 검증 메모와 출처는 본문 뒤에 둔다.
- `data-module`은 `LAYOUT_SYSTEM.md`의 승인 값 중 하나를 사용한다.
- 여러 보조 모듈은 내부 요소에 별도 `data-module`로 표시할 수 있다.

## 8. 승인 모듈 식별자

허용하는 기본 값:

- `text-led`
- `image-led-opening`
- `split-opening`
- `evidence-grid`
- `metric-board`
- `process-timeline`
- `document-reportage`

새 값은 `LAYOUT_SYSTEM.md`의 승인 절차를 거치기 전 공용 템플릿에 추가하지 않는다.

Document Reportage 계약:

```html
<section data-module="document-reportage" data-reportage-mode="trace">
  <header data-role="reportage-header"></header>
  <p data-role="reconstruction-notice"></p>
  <div data-role="reportage-body"></div>
  <nav data-role="reportage-sources" aria-label="공식 출처"></nav>
</section>
```

- `data-reportage-mode`는 `trace` 또는 `full`이다.
- 내부에 `img`, `picture`, `video`, 배경 이미지 역할 요소를 두지 않는다.

## 9. 콘텐츠와 템플릿 분리

공용 템플릿과 런타임에는 다음 값을 하드코딩하지 않는다.

- 특정 발행일과 호수
- 특정 기사 제목과 본문
- 특정 수치와 출처
- 특정 이미지 파일명
- 특정 인물·기업·기관명
- 제1호의 기사 주제
- 특정 호의 섹션 번호 보정값

새 호의 콘텐츠는 보존호 HTML 또는 명확한 호별 데이터 블록 한 곳에서 소유한다. 같은 값을 여러 JS 파일이 순차 보정하게 하지 않는다.

## 10. 자산 계약

권장 파일명:

```text
archive/assets/YYYY-MM-DD/
  cover.webp
  life-scene.webp
  cover-story.webp
  economy.webp
  politics.webp
  society.webp
  tech.webp
```

각 의미 있는 이미지:

- WebP 우선
- 적절한 `width`와 `height` 속성 포함
- 대체 텍스트 포함
- 필요한 경우 `편집용 생성 이미지` 캡션 포함
- 첫 화면 핵심 이미지를 제외하고 lazy loading 검토
- 기준 화면에서 피사체를 보존하는 `object-position` 설정
- 다른 호 자산을 의미 없이 재사용하지 않음

권장 최소 원본:

- 가로형: 긴 변 1600px 이상
- 세로형: 긴 변 1600px 이상
- 최종 파일 크기는 화질을 해치지 않는 범위에서 최적화

이미지의 내용 승인 기준은 `IMAGE_DIRECTION.md`를 따른다.

## 11. CSS 계약

- `LAYOUT_SYSTEM.md`의 색상·기준폭·breakpoint를 사용한다.
- 기사마다 서로 다른 기준폭과 breakpoint를 만들지 않는다.
- 장문 본문은 단일 열이다.
- Front Spread는 넓은 화면 40:60, 좁은 화면 1열이다.
- topbar만 sticky, reading progress만 fixed다.
- 숨김으로 금지 요소를 해결하지 않는다. 금지된 DOM은 생성하지 않는다.
- 공용 CSS를 여러 버전의 fix 파일로 연속 덮어쓰지 않는다.
- `prefers-reduced-motion`을 지원한다.
- CSS 시각 순서가 DOM 읽기 순서와 다르게 되지 않게 한다.

## 12. JS 계약

JS는 보조 기능만 담당한다.

허용 기능:

- 읽기 진행률 계산
- 현재 섹션 표시
- 앵커 이동 보조
- 과월호 이동
- 접근성을 해치지 않는 제한적 전환

필수 조건:

- JS가 없어도 전체 기사와 출처를 읽을 수 있어야 한다.
- 오류가 나도 본문을 가리는 로딩 화면이 남지 않아야 한다.
- 보존호 본문을 네트워크에서 다시 fetch하지 않는다.
- 기사 제목·본문·출처·섹션 번호를 JS에 하드코딩하지 않는다.
- 진행률은 문서 높이 변화에 대응한다.
- 현재 섹션 상태는 접근성 속성에도 반영한다.
- reduced motion 설정을 존중한다.

## 13. 금지 구현

- 이전 호 HTML 전체를 복사한 뒤 텍스트 일부만 바꾸기
- reader 래퍼가 이전 보존호를 fetch해 표시하는 방식
- `document.write` 또는 `Document.prototype.write` 재정의
- 자바스크립트로 오래된 본문을 대량 치환
- 기사 콘텐츠를 여러 JS 파일에 분산
- 섹션 번호·제목·출처를 후단 스크립트로 다시 보정
- 같은 요소를 여러 버전 CSS로 계속 덮어쓰기
- 금지된 요소를 만든 뒤 CSS로 숨기기
- 기사마다 서로 다른 기준폭과 breakpoint 사용
- 모든 섹션을 동일 카드 그리드로 제작
- 모든 섹션에 일회성 컴포넌트를 추가
- Document Reportage에 이미지 삽입
- 표지·LIFE SCENE·대표 기사 이미지 재사용
- 제1호의 콘텐츠·날짜·출처·자산 경로 잔존

## 14. 정적 검증 계약

발행 전 최소한 다음을 검사한다.

- 필수 section과 읽기 순서
- 중복 ID
- 존재하지 않는 내부 앵커
- 제목 계층
- `data-section`, `data-role`, `data-module` 허용값
- 이미지 alt·width·height
- Document Reportage 내부 이미지
- `document.write`
- 보존호 본문 fetch
- 기사 콘텐츠가 JS에 하드코딩됐는지
- 다른 호 날짜·제목·자산 경로 잔존
- 외부 스톡·추적 스크립트·불필요한 외부 자산
- 이메일·전화번호·로컬 절대경로·인증 문자열·비밀키 패턴
- `latest.json`, 과월호와 보존호 메타데이터 일치

검사하지 못한 항목을 통과로 기록하지 않는다.

## 15. 발행 전 템플릿 체크

- [ ] 보존호가 Cover부터 바로 시작하는가
- [ ] 고정 셸의 모든 섹션이 존재하는가
- [ ] Front Spread가 공통 컨테이너 안에 있는가
- [ ] 읽기 순서가 올바른가
- [ ] 본문이 중앙 단일 열인가
- [ ] topbar와 진행 바 외 추적 요소가 없는가
- [ ] 기사별 `data-module`이 승인 값인가
- [ ] 검증 메모와 출처가 기사 후단에 있는가
- [ ] Document Reportage에 이미지가 없는가
- [ ] 보존호와 날짜별 자산 경로가 독립적인가
- [ ] JS 없이 본문을 읽을 수 있는가
- [ ] 제1호 콘텐츠와 reader 보정 구조가 남아 있지 않은가
- [ ] 개인 정보·로컬 경로·인증 정보가 없는가

## 16. 정식 템플릿 추출 조건

`templates/issue-template.html`, `issue-template.css`, `issue-template.js`는 다음 조건을 모두 충족한 뒤 만든다.

1. 제2호와 제3호가 이 계약에 따라 독립 보존호로 제작됨
2. 두 호에서 공통 셸과 승인 모듈의 DOM이 검증됨
3. 데스크톱·태블릿·모바일·접근성 검수를 통과함
4. 제1호 reader 구조에서 필요한 기능만 선별하고 후처리 방식은 폐기함
5. 특정 호의 콘텐츠 없이도 유효한 시험호를 만들 수 있음
6. 공용 런타임의 버전 고정과 과월호 불변성이 검증됨

정식 템플릿이 생성되면 이 문서에 파일 경로, 버전과 변경 이력을 기록한다.
