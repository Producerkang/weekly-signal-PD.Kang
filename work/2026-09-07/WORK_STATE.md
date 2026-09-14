# ISSUE 07 WORK STATE

```text
ISSUE: 07
ISSUE_START: 2026-09-07
ISSUE_END: 2026-09-13
STAGE: PUBLISHED
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
LAYOUT: COMPLETE
IMAGES: NOT_REQUIRED
HTML: PUBLISHED
SCREEN_REVIEW: PASS
PUBLISH: COMPLETE
PUBLISHED_AT: 2026-09-14T21:55:00+09:00
ARCHIVE_PATH: archive/2026-09-07/
NEXT: ISSUE 08 FRONT DESK
```

## 완성 원고

- Cover Story: `전기가 남는 가을, 왜 발전을 줄이고 소비를 늘리나`
- Economy: `9월 열흘 수출 350억 달러, 반도체 비중 47%를 어떻게 읽어야 하나`
- Politics: `지방체육 보조금 점검 뒤, 환수와 제재는 누가 집행하나`
- Society: `주민등록 방문조사, 문을 연 뒤 행정은 어디까지 움직이나`
- Tech: `개인정보 유출 전에 움직이라, 9월 11일 바뀐 책임 구조`
- LIFE SCENE: `낮 두 시의 초인종은 그의 한밤중이었다`
- PROLOGUE: `낮의 전기, 현관의 초인종, 72시간`
- EDITOR'S AFTERWORD: `낮 두 시는 모두에게 낮이 아니다`

## CROSS-ARTICLE REVIEW

- `work/2026-09-07/CROSS_ARTICLE_REVIEW.md`: COMPLETE
- Cover Story와 Economy의 숫자 중심 마감 수사가 반복되는 점을 기준으로 Politics 결론부의 `다음 숫자`형 수사를 책임·처분 기록 중심으로 교정했다.
- 교정 후 다섯 일반 기사를 다시 비교했고 분야별 핵심 질문, 근거 역할, 결론 기능이 독립적임을 확인했다.

## DEEP DIVE

`OMIT`

어느 후보도 일반 기사와 다른 단 하나의 심화 질문에 대해 새 핵심 주장 3개 이상과 독립 근거 2개 이상을 동시에 확보하지 못했다. 실제 후속 처분, 월간 통계, 복지연계 결과, 개정법 적용 사례가 축적되기 전 억지 심화편을 만들지 않는다.

## 최종 DOM

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → Tech → EDITOR'S AFTERWORD → Sources`

- DEEP DIVE: OMIT이므로 DOM·Contents·내비게이션에서 제외
- DATA / WATCH: 별도 DOM 없음
- EDITOR'S PICK: 없음
- 이미지·placeholder·이전 회차 대표 이미지 재사용: 없음
- EDITOR'S AFTERWORD는 Sources 직전에 배치

## LAYOUT

- `work/2026-09-07/LAYOUT_PLAN.md`: COMPLETE
- 공통 Editorial Axis: `--content: 1040px`
- Cover / Contents / LIFE / PROLOGUE / 모든 기사 / AFTERWORD / Sources가 같은 외곽 축을 사용한다.
- 기사별 차이는 폭이 아니라 metric board, process grid, time grid, evidence grid와 배경·타이포그래피·수직 리듬으로 구성했다.

## 실제 화면 검수

system Chromium을 사용해 최종 HTML을 실제 렌더링하고 1440px, 1366px, 1024px, 390px 화면을 검수했다.

- 1440: 문서 가로 오버플로 없음, 주요 편집 요소 1040px Editorial Axis 일치
- 1366: 문서 가로 오버플로 없음, 주요 편집 요소 1040px Editorial Axis 일치
- 1024: 가용 폭으로 정상 축소, 카드·표·제목 viewport 이탈 없음
- 390: 1차 검수에서 Contents의 `ECONOMY`·`POLITICS` 라벨 줄바꿈을 발견해 모바일 목차 라벨 칼럼을 64px로 확대하고 `white-space: nowrap` 적용
- 수정 후 1440 / 1366 / 1024 / 390 전체 재검수 PASS
- 최종 네 화면 모두 `scrollWidth == clientWidth`
- viewport 밖 DOM 요소 0개
- 내부 앵커 누락 0개
- `<img>` 요소 0개, 깨진 이미지·존재하지 않는 자산 요청 없음
- DEEP DIVE / EDITOR'S PICK 잔존 DOM 없음
- 최종 전체 페이지 시각 검수에서 제목·본문·정보 모듈·Sources 잘림 및 겹침 없음

`python tools/validate_repository.py`는 connector 기반 환경에서 저장소 전체 checkout을 확보할 수 없어 repo-wide 실행하지 못했다. 보조 검사 대신 실제 Chromium 렌더링, Editorial Axis 수치 비교, overflow·anchor·선택 섹션·이미지 DOM 검사를 수행했으며 직접 편집 검수는 통과했다.

## 발행 반영

- `archive/2026-09-07/index.html`
- `issues.json`
- `latest.json`
- `archive/index.html`
- `editorial/ISSUE_HISTORY.md`
- `work/2026-09-07/WORK_STATE.md`

Issue 07 PUBLISH DESK 완료.
