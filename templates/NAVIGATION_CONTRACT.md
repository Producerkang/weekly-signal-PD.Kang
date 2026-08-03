# WEEKLY SIGNAL 상단 네비게이션 계약

상단 네비게이션의 **형식과 상대 순서**는 고정한다. 다만 실제 회차에 존재하지 않는 섹션은 링크를 생성하지 않는다.

## 고정 순서

1. Contents
2. Life
3. Editor's Pick
4. Cover
5. Economy
6. Politics
7. Society
8. Tech
9. Data
10. Watch

## 렌더링 규칙

- 각 항목은 해당 회차 HTML에 실제 섹션과 유효한 앵커가 있을 때만 표시한다.
- 빠진 항목의 자리는 비워 두지 않고 다음 항목이 당겨진다.
- 표시된 항목끼리의 상대 순서는 위 목록을 절대 바꾸지 않는다.
- 없는 섹션을 위해 빈 링크, 비활성 링크, 임시 앵커를 만들지 않는다.
- Contents 목록과 상단 네비게이션은 각각 실제 지면 구성을 반영하되, 네비게이션은 위 고정 순서를 따른다.
- Sources는 상단 네비게이션에 넣지 않는다.

## 템플릿 슬롯

`templates/ISSUE01_NORMALIZED_TEMPLATE.html`은 다음 선택 슬롯을 고정 순서로 배치한다.

```text
NAV_CONTENTS
NAV_LIFE_SCENE
NAV_EDITORS_PICK
NAV_COVER_STORY
NAV_ECONOMY
NAV_POLITICS
NAV_SOCIETY
NAV_TECH
NAV_DATA
NAV_WATCH
```

각 슬롯에는 완성된 `<a>` 요소 하나 또는 빈 문자열만 넣는다. 여러 항목을 한 슬롯에 합치거나 순서를 바꾸지 않는다.
