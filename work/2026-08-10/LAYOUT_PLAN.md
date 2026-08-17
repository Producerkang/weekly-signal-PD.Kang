# ISSUE 04 LAYOUT PLAN

STATUS: COMPLETE

## Final DOM

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → Tech → EDITOR'S AFTERWORD → Sources`

- `DEEP_DIVE: OMIT`이므로 DEEP DIVE DOM·목차·내비게이션을 만들지 않는다.
- DATA와 WATCH는 별도 지면을 만들지 않는다. 각 일반 기사 내부 모듈이 같은 정보를 반복 없이 전달한다.
- `EDITOR'S PICK`은 폐기된 레거시이므로 사용하지 않는다.

## Editorial Axis

모든 실제 편집 요소는 `--content: 1040px` 단일 축을 사용한다. Cover의 배경만 화면 전체를 사용하고 Cover copy는 동일 1040px 축에 맞춘다.

## Section rhythm

- Cover: 무이미지 대형 타이포그래피 + 4개 주제 메타
- LIFE SCENE: 연속 서사 + 마지막 SCENARIO NOTE
- PROLOGUE: 텍스트 중심 전환
- Cover Story: `3년·2회·1천만원 → 심의 → 최소 3개월 소명 → 공개` 절차 strip
- Economy: 10,700원 / +380원 / 월 2,236,300원 metric board
- Politics: 접수 종료 → 부처 검토 → 10월 발표 → 실제 개정 timeline
- Society: 횡단면 조사와 패널 조사의 질문·강점·주의점 comparison table
- Tech: 성능평가 4개 평가 차원 evidence grid
- Afterword: 조용한 단일 축 산문 마감
- Sources: 분야 라벨 + 공식 1차 자료 링크

## Image policy

새 이미지 생성, 이미지 placeholder, 존재하지 않는 자산 경로, 이전 회차 이미지 재사용을 모두 사용하지 않는다. `archive/2026-08-10/`은 `index.html` 단독 구성으로 완결한다.

## Responsive

- 1440/1366: 1040px Editorial Axis 유지.
- 1024 이하: 4열 정보 모듈은 2열로 전환.
- 700 이하: 상단바 2행, 모든 내부 그리드 1열, 표는 블록형으로 전환.
- 390px: 본문·제목·표·내비게이션에 가로 스크롤이 생기지 않도록 `overflow-wrap`, grid collapse, 고정폭 제거 적용.
