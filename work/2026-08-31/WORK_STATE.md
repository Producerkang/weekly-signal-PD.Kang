# ISSUE 06 WORK STATE

```text
ISSUE: 06
ISSUE_START: 2026-08-31
ISSUE_END: 2026-09-06
STAGE: FEATURE_DESK_COMPLETE
MANUSCRIPT_STAGE: ALL_REQUIRED_MANUSCRIPTS_COMPLETE
COVER_STORY: COMPLETE
ECONOMY: COMPLETE
POLITICS: COMPLETE
SOCIETY: COMPLETE
TECH: COMPLETE
CROSS_ARTICLE_REVIEW: COMPLETE
DEEP_DIVE: OMIT
DEEP_DIVE_TARGET: NONE
LIFE_SCENE: COMPLETE
PROLOGUE: COMPLETE
EDITOR_AFTERWORD: COMPLETE
LAYOUT: PENDING
IMAGES: NOT_REQUIRED
HTML: PENDING
SCREEN_REVIEW: PENDING
PUBLISH: PENDING
NEXT: PUBLISH DESK — LAYOUT_PLAN → HTML → SCREEN REVIEW → PUBLISH
```

이번 회차는 현행 이미지 없는 5-페이즈 제작 경로를 사용한다.

## FRONT DESK 완료

- Cover Story: `820.9조 원 예산안, 실제 나라 살림이 되기까지 남은 단계` — COMPLETE
- Economy: `물가 3.1%, 지난해 통신비 할인을 걷어내면 무엇이 남는가` — COMPLETE

## SECTION DESK 완료

Politics → Society → Tech 순서로 각각 현행 일반 기사 제작 계약에 따라 COMPLETE까지 직렬 제작·검수했다.

- Politics: `공공기관 109곳 감축안, 조직도보다 먼저 옮겨야 할 자산·채무·인력`
- Society: `반복 신고 뒤의 공백을 줄인다, 아동학대 대응은 무엇이 달라지나`
- Tech: `접속키 하나에서 3,954만 계정까지, 티빙 사고에서 끊긴 보안 통제`

## REVIEW DESK 완료

다섯 일반 기사를 함께 읽어 주제·설명 중복, 결론·수사 반복, 분야별 깊이 편차, 출처 역할 편중, 빠진 배경지식, FLOW 템플릿화와 한 호 전체 정보 밀도를 비교 검수했다.

상세 기록: `work/2026-08-31/CROSS_ARTICLE_REVIEW.md`

Politics·Society·Tech의 누락 Deck을 복구했고, Politics는 Cover Story와 FLOW가 수렴하던 중복을 교정해 다시 COMPLETE로 닫았다.

DEEP DIVE는 `OMIT`으로 판정했다. 현재 시점에서 일반 기사와 다른 단 하나의 질문, 새 핵심 주장 최소 3개, 독립 1차 자료 최소 2개를 모두 충족하면서 이번 호에 명확한 추가 판단가치를 주는 대상이 없어 억지 심화편을 만들지 않는다.

## FEATURE DESK 완료

### LIFE SCENE — COMPLETE

- 경로: `work/2026-08-31/07_life_scene/`
- 제목: `집에 갈 수 있는지부터 다시 정해야 했다`
- 대상: Society 기사
- `SCENE_MAP.md`를 먼저 작성하고 `원래 계획 → 장애 → 행동 → 직접 결과 → 다음 선택`의 인과 사슬을 확정한 뒤 ARTICLE을 작성했다.
- 반복 신고를 자동 분리 기준처럼 쓰지 않고, 보호 필요성 공동판단과 실제 보호공간 연결을 분리했다.
- 구체적 인물·학교·대화·시간·시설 연결 결과는 가상임을 SCENARIO NOTE에서 명시했다.

### PROLOGUE — COMPLETE

- 경로: `work/2026-08-31/08_prologue/`
- 제목: `숫자가 지나간 자리에 남은 일`
- `PREVIEW_MAP.md`를 먼저 작성했다.
- 초반에는 820.9조 원, 3.1%, 109곳, 3,954만 계정 등 이번 호의 폭을 열고, 뒤로 갈수록 물가의 비교 기준·기관 승계·보호공간 연결 같은 일부 디테일로 시야를 좁혔다.
- 기사별 미니 초록 구조와 PANORAMA 반복을 피하고 첫 본 기사인 Cover Story로 짧게 넘겼다.

### EDITOR'S AFTERWORD — COMPLETE

- 경로: `work/2026-08-31/09_afterword/`
- 제목: `숫자보다 늦게 도착하는 것`
- 기사 요약이나 대표 기사 선정 대신, 원고를 모두 닫은 뒤 남은 구체적 장면과 인상을 중심으로 작성했다.
- 내부 VERIFY·FLOW·검수 절차를 독자용 방법론 보고서로 노출하지 않았다.

## FEATURE DESK 최종 판정

```text
LIFE_SCENE: COMPLETE
PROLOGUE: COMPLETE
EDITOR_AFTERWORD: COMPLETE
ALL_REQUIRED_MANUSCRIPTS: COMPLETE
DEEP_DIVE: OMIT WITH RECORDED RATIONALE
```

다음 단계는 PUBLISH DESK다.

```text
LAYOUT_PLAN 작성·COMPLETE
→ 최종 DOM 구성
→ HTML/CSS 제작
→ 1440 / 1366 / 1024 / 390 실제 화면 검수
→ 문제 수정·재검수
→ archive 및 발행 메타데이터 반영
→ PUBLISHED
```

이미지 생성, 이미지 prompt, `IMAGE_PLAN.md`, image job은 수행하지 않는다.
