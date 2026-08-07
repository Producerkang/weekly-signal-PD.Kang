# WEEKLY SIGNAL 정적 발행 계약

## 1. 사이트 공통 파일

- `/index.html`: `latest.json`을 읽고 최신 회차로 이동
- `/latest.json`: 품질 게이트를 통과한 최신 회차 1개
- `/issues.json`: 품질 게이트를 통과한 발행 회차 목록
- `/archive/index.html`: 과월호 선택

공통 파일은 기사 본문을 조립하지 않는다.

## 2. 회차 폴더

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
   └─ final raster generated images
```

- `index.html`은 해당 회차의 완성된 정적 문서다.
- CSS와 최소 JavaScript는 `index.html`에 내장한다.
- 이미지는 `./assets/...` 상대경로만 사용한다.
- 외부 이미지 직접 연결과 런타임 기사 조립을 금지한다.
- 이미지 자산은 WebP, PNG, JPEG만 허용한다.
- 실패 후보·연락시트·스토리보드·중간 생성본은 발행 assets에 두지 않는다.

## 3. 템플릿의 지위

`templates/ISSUE_TEMPLATE.html`은 다음만 제공하는 시작 셸이다.

- 기본 디자인 토큰
- 접근 가능한 상단 내비게이션
- Cover·Contents·LIFE SCENE·PROLOGUE·기사·DEEP DIVE·EDITOR'S AFTERWORD·Sources의 의미 구조 예시
- 반응형 최소 기반

템플릿을 플레이스홀더만 교체해 그대로 발행하지 않는다.

반드시 추가되어야 하는 작업:

- Cover Story와 Economy·Politics·Society·Tech 전체 기사 삽입
- 기사별로 다른 지면 조합 설계
- 최소 세 가지 이상의 시각적 리듬
- 현행 이미지 슬롯에 맞는 최종 이미지 삽입
- 사용하지 않는 예시 DOM과 CSS 삭제
- 실제 화면 검수

`EDITOR'S PICK`은 폐기된 레거시 섹션이며 템플릿에 다시 추가하지 않는다.

## 4. 기본 회차 구성과 독서 순서

별도 사용자 지시가 없으면 다음 순서로 구성한다.

1. Cover
2. Contents
3. LIFE SCENE
4. PROLOGUE
5. Cover Story
6. Cover Story에 연결된 선택적 DEEP DIVE
7. Economy
8. Economy에 연결된 선택적 DEEP DIVE
9. Politics
10. Politics에 연결된 선택적 DEEP DIVE
11. Society
12. Society에 연결된 선택적 DEEP DIVE
13. Tech
14. Tech에 연결된 선택적 DEEP DIVE
15. 필요한 DATA
16. 필요한 WATCH
17. EDITOR'S AFTERWORD
18. Sources

Cover Story는 분야 일반 기사를 대체하지 않는다.

DEEP DIVE는 심화 대상 기사 바로 뒤에 둔다.

PROLOGUE는 기사 전체가 완성된 뒤 작성하지만 독서 순서에서는 본격 기사 묶음 앞에 둔다.

EDITOR'S AFTERWORD는 전체 원고가 완성된 뒤 마지막 편집 원고로 작성하고 최종 HTML에서는 모든 기사와 DEEP DIVE 뒤, Sources 바로 앞에 둔다.

## 5. DOM 원칙

- 각 주요 섹션은 고유 `id`를 가진다.
- 목차와 내비게이션은 실제 DOM 순서와 존재하는 섹션만 반영한다.
- 일반 기사와 DEEP DIVE는 서로 다른 클래스·질문·지면을 사용한다.
- `reportage`, `document-reportage`, `reportage-*`를 사용하지 않는다.
- LIFE SCENE의 정책 연결은 마지막 `SCENARIO NOTE`에 둔다.
- PROLOGUE는 기사 답을 미리 공개하지 않는다.
- EDITOR'S AFTERWORD는 기사별 요약이나 편집 방법론 강의로 변하지 않는다.
- 미사용 섹션, 빈 카드, 숨김 모듈을 남기지 않는다.

## 6. 기사 지면 차별화

한 호에는 최소 세 가지 이상의 기사 레이아웃 조합이 있어야 한다.

예:

- 넓은 이미지 브레이크아웃
- 핵심 수치 밴드
- 비교표
- 날짜 중심 타임라인
- 근거 카드
- 이미지·텍스트 2열 도입
- 인용 스프레드
- 시나리오 그리드
- 풀블리드 장면 전환

모듈은 새 정보를 제공해야 한다. 본문 문장을 다시 카드로 만들지 않는다.

## 7. CSS·JavaScript

- 회차별 CSS는 `editorial/LAYOUT_SYSTEM.md`를 따른다.
- 과월호 누적 패치 CSS와 일회성 클래스를 복사하지 않는다.
- 선택자 충돌을 해결하기 위한 장문의 `!important` 패치를 만들지 않는다.
- JavaScript는 진행 바, 섹션 활성 상태와 필요한 접근성 기능에 한정한다.
- 콘텐츠를 JavaScript로 조립하지 않는다.

## 8. 이미지

이미지 생성·검수·재시도·저장 절차는 `editorial/IMAGE_PIPELINE.md`, 시각 방향은 `editorial/IMAGE_DIRECTION.md`를 따른다.

현행 핵심 기준:

- 주요 이미지는 고품질 래스터 생성 이미지
- Cover 장변 2200px 이상 목표
- 나머지 주요 이미지 장변 2000px 이상 목표
- 기사 주제와 자연스럽게 연결되면 충분하며 전체 메커니즘을 문자 그대로 재현할 필요 없음
- 동일 이미지 재사용 금지
- LIFE SCENE만 생성 전에 4:3 또는 4:5 비율을 명시
- Politics와 Politics DEEP DIVE는 완전 무인
- 실제 화면에서 최종 크롭 확인

이미지 전체가 끝날 때까지 HTML 구조 작업을 완전히 중단할 필요는 없다. 다만 모든 필수 이미지가 최종 반영되고 화면 검수를 통과하기 전에는 발행할 수 없다.

## 9. 접근성과 반응형

- 의미 구조에 맞는 `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`를 사용한다.
- 모바일에서 1열로 전환하고 본문 가로 스크롤을 만들지 않는다.
- 키보드 탐색, 링크 이름, 명도 대비와 이미지 대체 텍스트를 확인한다.
- 1440px·1366px·1024px·390px 화면을 실제로 확인한다.

## 10. 발행 차단

다음 상태에서는 `issues.json`과 `latest.json`을 갱신하지 않는다.

- 기본 분야 기사 누락
- 템플릿 예시 구조 반복
- DEEP DIVE의 일반 기사 반복
- LIFE SCENE 역할 실패
- PROLOGUE 역할 실패
- EDITOR'S AFTERWORD 역할 실패
- 필수 이미지 미확보
- Politics 이미지에 사람 등장
- 실제 화면 미검수

최종 기준은 `editorial/ISSUE_QUALITY_GATE.md`다.

## 11. 수정과 보존

- 동일 회차 수정은 같은 파일을 직접 교체한다.
- 실패본은 발행 목록과 최신호에서 제거하고 Git 이력에만 남긴다.
- 새 회차만 새 날짜 폴더를 만든다.
- 회차 폴더에는 현재 유효한 완성본과 실제 사용 이미지 자산만 둔다.
