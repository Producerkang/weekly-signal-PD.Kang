# WEEKLY SIGNAL 상단 내비게이션 계약

이 문서는 상단 내비게이션과 Contents의 순서를 규정한다.

## 1. 기본 원칙

- 내비게이션과 Contents는 실제 HTML에 존재하는 섹션만 표시한다.
- 표시 순서는 실제 DOM 독서 순서와 일치한다.
- 각 링크는 실제 고유 섹션 id와 일치해야 한다.
- Sources는 상단 내비게이션에서 생략할 수 있으나 Contents에는 표시한다.
- 별도 지시가 없으면 Cover Story·Economy·Politics·Society·Tech를 모두 유지한다.

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
16. EDITOR'S AFTERWORD
17. Sources

DEEP DIVE는 심화 대상 기사 바로 뒤에 둔다.

PROLOGUE는 기사 전체가 완성된 뒤 작성하지만 독서 순서에서는 본격적인 기사 묶음 앞에 둔다.

EDITOR'S AFTERWORD는 모든 기사와 DEEP DIVE 뒤, Sources 바로 앞에 둔다. Sources는 참고자료 부록이므로 서사적 독서의 마지막은 AFTERWORD가 맡는다.

## 3. 상단 라벨

- Contents
- Life
- Prologue
- Cover
- Economy
- Politics
- Society
- Tech
- Deep Dive · 분야 또는 주제
- Data
- Watch
- Editor's Afterword

DEEP DIVE가 여러 편이면 분야나 핵심 주제를 덧붙인다.

## 4. 템플릿 적용

현행 시작점은 `templates/ISSUE_TEMPLATE.html`이다. 내비게이션에는 실제 존재하는 섹션만 실제 DOM 순서대로 넣는다.

## 5. 검수

- Cover·Economy·Politics·Society·Tech가 모두 있는가
- LIFE SCENE 다음에 PROLOGUE가 있고 그 뒤 본격적인 기사 묶음이 시작되는가
- EDITOR'S AFTERWORD가 모든 기사와 DEEP DIVE 뒤, Sources 바로 앞에 있는가
- 목차·내비게이션·DOM 순서가 같은가
- 모든 링크가 실제 섹션으로 이동하는가
- DEEP DIVE가 심화 대상 기사 바로 뒤에 있는가
- 존재하지 않는 선택 섹션 링크가 남아 있지 않은가
- 모바일에서 접근 가능한 탐색 방식이 유지되는가

기본 분야 누락은 링크 생략으로 해결하지 않고 발행 실패로 처리한다.
