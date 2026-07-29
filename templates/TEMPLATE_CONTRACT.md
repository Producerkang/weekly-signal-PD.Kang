# WEEKLY SIGNAL Template Contract

이 문서는 새 호를 제작할 때 지켜야 하는 템플릿 계약이다. 실제 HTML·CSS·JS 템플릿이 정리되기 전에도 자동화와 수동 편집은 이 계약을 따른다.

## 1. 현재 상태

현재 제1호는 `archive/2026-07-20.html`, 리더 파일과 여러 CSS·JS 보정 파일을 결합해 표시되는 과도기 구조다. 이를 그대로 복사해 새 호를 만들지 않는다.

- 제1호는 시각적 참고 자료다.
- 제1호의 기사 내용과 날짜, 제목, 출처, 이미지 자산은 템플릿이 아니다.
- 누적된 후삽입 스크립트와 버전별 보정 파일을 새 호마다 늘리지 않는다.
- 새 호는 가능한 한 독립된 보존호로 작성한다.

정식 `issue-template.html`을 추출하기 전까지는 이 계약과 `editorial/LAYOUT_SYSTEM.md`를 레이아웃의 단일 기준으로 사용한다.

## 2. 템플릿 철학

WEEKLY SIGNAL은 하나의 고정된 브랜드 셸과 여러 승인된 편집 모듈로 구성한다.

### 고정 셸

- 스플래시
- 표지
- CONTENTS 40% + LIFE SCENE 60% 프런트 스프레드
- 오프닝
- Cover Story
- Economy
- Politics
- Society
- Tech
- Data
- Watch
- Sources & Method
- 상단 sticky 내비게이션
- 상단 fixed 읽기 진행 바
- 과월호 이동과 발행 메타데이터

### 가변 모듈

- Text-led
- Image-led Opening
- Split Opening
- Evidence Grid
- Metric Board
- Process / Timeline
- Document Reportage

가변 모듈의 선택은 기사 내용과 논리를 따른다. 시각적 다양성을 만들기 위해 임의로 배치를 바꾸지 않는다.

## 3. 필수 DOM 계약

정식 템플릿은 최소한 다음 의미 구조를 보존해야 한다. 실제 태그와 클래스명은 구현 과정에서 조정할 수 있지만 섹션 식별자와 읽기 순서는 안정적으로 유지한다.

```html
<body>
  <div id="progress"></div>
  <header class="topbar"></header>
  <main>
    <section id="top" data-section="cover"></section>
    <section id="contents" data-section="contents"></section>
    <section id="life-scene" data-section="life-scene"></section>
    <section id="opening" data-section="opening"></section>
    <section id="cover-story" data-section="article"></section>
    <section id="economy" data-section="article"></section>
    <section id="politics" data-section="article"></section>
    <section id="society" data-section="article"></section>
    <section id="tech" data-section="article"></section>
    <section id="data" data-section="data"></section>
    <section id="watch" data-section="watch"></section>
    <section id="sources" data-section="sources"></section>
  </main>
</body>
```

각 대표 기사에는 다음 의미 요소가 필요하다.

```html
<header class="article-head">
  <p class="article-label"></p>
  <h2></h2>
  <p class="article-deck"></p>
</header>
<div class="article-thesis"></div>
<div class="article-body"></div>
<section class="verification-note"></section>
<div class="source-links"></div>
```

클래스명 변경 시 자동화와 공용 스타일에서 참조하는 위치를 함께 수정한다.

## 4. 콘텐츠와 템플릿 분리

템플릿에는 다음 값을 하드코딩하지 않는다.

- 특정 발행일과 호수
- 특정 기사 제목과 본문
- 특정 수치와 출처
- 특정 이미지 파일명
- 특정 인물·기업·기관명
- 제1호의 AI·관세·서훈·의료·개인정보 주제

새 호의 콘텐츠는 발행일별 파일 또는 명확한 데이터 블록으로 들어가야 한다.

## 5. 자산 경로

권장 구조:

```text
archive/YYYY-MM-DD.html
archive/assets/YYYY-MM-DD/
  cover.webp
  life-scene.webp
  cover-story.webp
  economy.webp
  politics.webp
  society.webp
  tech.webp
```

개별 호의 이미지 자산은 날짜별 디렉터리에 둔다. 다른 호의 자산을 의미 없이 재사용하지 않는다.

공용 CSS·JS를 사용할 경우 다음을 지킨다.

- 공용 파일 변경으로 과월호의 레이아웃이나 의미가 깨지지 않아야 한다.
- 호별 차이가 필요한 경우 날짜별 CSS를 추가할 수 있지만 패치 파일을 무한히 누적하지 않는다.
- 공용 파일의 파괴적 변경이 필요하면 과월호를 독립 스타일로 고정한 뒤 진행한다.

## 6. 초기 단계 고정 정책

제1호부터 최소 제3호까지 다음을 유지한다.

- 고정 셸과 전체 순서
- 브랜드 색과 타이포그래피 역할
- 중앙 기준축과 본문 단일 열
- 프런트 스프레드 40:60
- 검증 메모와 출처의 후단 배치
- 르포 무이미지

기사 내부에서는 승인된 모듈을 사용할 수 있다. 새 모듈은 `editorial/LAYOUT_SYSTEM.md`의 승인 절차를 따른다.

제3호 발행 후 다음을 검토한다.

- 반복되는 모듈이 실제로 필요한가
- 섹션별 고유 배치가 내용 이해에 기여했는가
- 모바일·태블릿 검수 비용이 과도하지 않았는가
- 정식 템플릿을 단일 HTML과 공용 스타일로 추출할 수 있는가

## 7. 금지 구현

- 이전 호 HTML 전체를 복사한 뒤 텍스트 일부만 바꾸기
- 자바스크립트로 오래된 본문을 대량 치환하는 방식
- 같은 요소를 여러 버전의 CSS로 계속 덮어쓰기
- 기사마다 서로 다른 기준폭과 브레이크포인트 사용
- 흰색 카드, 둥근 모서리와 그림자를 무분별하게 반복
- 모든 섹션을 동일한 카드 그리드로 제작
- 반대로 모든 섹션에 새로운 일회성 컴포넌트를 만들어 유지보수를 어렵게 하기
- 이미지나 르포를 템플릿상의 빈칸을 채우기 위해 강제로 삽입하기

## 8. 발행 전 템플릿 검수

- [ ] 고정 셸의 모든 섹션이 존재하는가
- [ ] 읽기 순서가 올바른가
- [ ] 프런트 스프레드가 넓은 화면 40:60, 좁은 화면 1열인가
- [ ] 본문이 중앙 단일 열인가
- [ ] sticky 내비게이션과 fixed 진행 바만 추적하는가
- [ ] 기사별 모듈 선택 이유가 내용과 연결되는가
- [ ] 르포에 이미지가 없는가
- [ ] 과월호와 자산 경로가 독립적인가
- [ ] 제1호 콘텐츠가 새 호에 남아 있지 않은가
- [ ] 개인 정보·로컬 경로·인증 정보가 없는가

## 9. 정식 템플릿 추출 조건

정식 `templates/issue-template.html`, `issue-template.css`, `issue-template.js`는 다음 조건을 충족한 뒤 만든다.

1. 최소 두 개 이상의 발행호에서 공통 셸이 검증됨
2. 승인 모듈의 클래스와 반응형 동작이 정리됨
3. 제1호의 누적 패치 구조를 분석해 필요한 기능만 추출함
4. 템플릿이 특정 호의 콘텐츠 없이도 유효한 구조를 가짐
5. 템플릿으로 만든 시험호가 데스크톱과 태블릿 검수를 통과함

정식 템플릿이 생성되면 이 문서에 파일 경로, 버전과 변경 이력을 기록한다.
