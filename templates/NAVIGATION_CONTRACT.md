# WEEKLY SIGNAL 상단 내비게이션 계약

이 문서는 상단 내비게이션과 Contents의 순서를 규정한다. 삭제된 Issue 01 템플릿과 고정 슬롯 체계는 사용하지 않는다.

## 1. 기본 원칙

- 내비게이션과 Contents는 실제 HTML에 존재하는 섹션만 표시한다.
- 없는 섹션을 위한 빈 링크·비활성 링크·임시 앵커를 만들지 않는다.
- 표시 순서는 실제 DOM 독서 순서와 일치해야 한다.
- 각 링크의 `href`는 실제 고유 `id`와 정확히 일치해야 한다.
- Sources는 상단 내비게이션에서 생략할 수 있으나 Contents에는 표시한다.

`실제 존재하는 섹션만 표시`는 기본 분야 기사를 생략해도 된다는 뜻이 아니다. 별도 사용자 지시가 없으면 Cover Story·Economy·Politics·Society·Tech가 모두 존재해야 한다. 하나라도 없으면 내비게이션을 완성하지 않고 품질 게이트에서 탈락시킨다.

## 2. 기본 독서 순서

1. Contents
2. LIFE SCENE
3. PROLOGUE
4. Cover Story
5. Cover Story에 연결된 선택적 DEEP DIVE
6. Economy
7. Economy에 연결된 선택적 DEEP DIVE
8. Politics
9. Politics에 연결된 선택적 DEEP DIVE
10. Society
11. Society에 연결된 선택적 DEEP DIVE
12. Tech
13. Tech에 연결된 선택적 DEEP DIVE
14. 선택적 DATA
15. 선택적 WATCH
16. EDITOR'S PICK
17. Sources

DEEP DIVE는 한데 모아 후반부로 보내지 않고 심화 대상 기사 바로 뒤에 둔다.

PROLOGUE는 기사 전체가 완성된 뒤 작성하지만 독서 순서에서는 본격적인 기사 묶음 앞에 둔다.

EDITOR'S PICK은 독서 순서에서 모든 기사와 DEEP DIVE 뒤, Sources 바로 앞에 둔다.

## 3. 상단 라벨

- `Contents`
- `Life`
- `Prologue`
- `Cover`
- `Economy`
- `Politics`
- `Society`
- `Tech`
- `Deep Dive · 분야 또는 주제`
- `Data`
- `Watch`
- `Editor's Pick`

DEEP DIVE가 여러 편이면 같은 라벨만 반복하지 말고 분야나 핵심 주제를 덧붙인다.

## 4. 템플릿 적용

현행 시작점은 `templates/ISSUE_TEMPLATE.html`이다. 내비게이션 주석 영역에 완성된 `<a>` 요소를 실제 DOM 순서대로 작성한다.

템플릿에는 기본 분야 섹션이 모두 들어 있으므로 주제와 콘텐츠를 교체한다. 사용자 승인 없이 기본 분야 섹션 자체를 삭제하지 않는다.

## 5. 검수

- Cover·Economy·Politics·Society·Tech가 모두 있는가
- LIFE SCENE 다음에 PROLOGUE가 있고 그 뒤 본격적인 기사 묶음이 시작되는가
- EDITOR'S PICK이 모든 기사와 DEEP DIVE 뒤, Sources 바로 앞에 있는가
- 목차·내비게이션·DOM 순서가 같은가
- 모든 링크가 실제 섹션으로 이동하는가
- DEEP DIVE가 심화 대상 기사 바로 뒤에 있는가
- 존재하지 않는 선택 섹션 링크가 남아 있지 않은가
- 모바일에서 가로 스크롤 또는 접근 가능한 축약 방식이 유지되는가

기본 분야 누락은 링크 생략으로 해결하지 않고 발행 실패로 처리한다.
