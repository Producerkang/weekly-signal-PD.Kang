# WEEKLY SIGNAL 상단 내비게이션 계약

이 문서는 제2호 이후 상단 내비게이션과 목차의 순서를 규정한다. 삭제된 Issue 01 템플릿과 고정 슬롯 체계는 사용하지 않는다.

## 1. 기본 원칙

- 내비게이션과 Contents는 실제 HTML에 존재하는 섹션만 표시한다.
- 없는 섹션을 위한 빈 링크·비활성 링크·임시 앵커를 만들지 않는다.
- 표시 순서는 실제 DOM의 독서 순서와 일치해야 한다.
- 각 링크의 `href`는 실제 고유 `id`와 정확히 일치해야 한다.
- Sources는 상단 내비게이션에서 생략할 수 있으나 Contents에는 실제 지면 구성에 맞게 표시한다.

## 2. 기본 독서 순서

1. Contents
2. LIFE SCENE
3. EDITOR'S PICK
4. Cover Story와 분야별 일반 기사
5. 각 일반 기사에 연결된 선택적 DEEP DIVE
6. 선택적 DATA
7. 선택적 WATCH
8. Sources

DEEP DIVE는 한데 모아 별도 후반부로 보내지 않는다. 특정 일반 기사를 심화하는 글이므로 최종 DOM과 Contents에서 해당 기사 바로 뒤에 둔다.

예:

```text
Cover Story
Economy
Deep Dive · Economy
Politics
Society
Deep Dive · Society
Tech
Data
Watch
Sources
```

## 3. 상단 내비게이션 표시

상단 내비게이션은 화면 폭을 고려해 짧은 라벨을 사용한다.

- `Contents`
- `Life`
- `Editor's Pick`
- `Cover`
- 분야명 또는 기사 축약명
- `Deep Dive` 또는 `Deep Dive · 분야`
- `Data`
- `Watch`

DEEP DIVE가 여러 편이면 같은 `Deep Dive` 라벨만 반복하지 말고 분야나 핵심 주제를 짧게 덧붙인다.

## 4. 템플릿 적용

현행 시작점은 `templates/ISSUE_TEMPLATE.html`이다. 템플릿의 내비게이션 주석 영역에는 완성된 `<a>` 요소를 실제 DOM 순서대로 직접 작성한다. 삭제된 `ISSUE01_NORMALIZED_TEMPLATE.html`이나 `NAV_*` 슬롯 이름을 참조하지 않는다.

## 5. 검수

- 목차·내비게이션·DOM 순서가 같은가
- 모든 링크가 실제 섹션으로 이동하는가
- DEEP DIVE가 심화 대상 기사 바로 뒤에 있는가
- 존재하지 않는 섹션 링크가 남아 있지 않은가
- 모바일에서 내비게이션이 가로 스크롤 또는 접근 가능한 축약 방식으로 유지되는가
