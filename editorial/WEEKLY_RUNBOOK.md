# WEEKLY SIGNAL 주간 발행 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. 세부 기준은 각 전문 문서를 따르며, 실행 순서는 이 문서를 따른다.

가장 중요한 운영 원칙은 **한 실행에서 한 단계만 완료하고 반드시 멈추는 것**이다. 한 번의 실행으로 조사부터 발행까지 처리하지 않는다. 각 단계의 결과를 회차 폴더에 저장하고 상태표를 갱신한 뒤 종료한다. 다음 실행은 저장된 상태표를 읽고 첫 번째 미완료 단계부터 이어간다.

## 1. 시작

작업 시작 전에 다음 문서를 순서대로 읽는다.

1. `editorial/EDITORIAL_STANDARD.md`
2. `editorial/SECTION_AND_REPORTAGE_STANDARD.md`
3. `editorial/HEADLINE_AND_OPENING_STANDARD.md`
4. `editorial/VOICE_AND_TONE.md`
5. `editorial/SOURCE_POLICY.md`
6. `editorial/IMAGE_DIRECTION.md`
7. `editorial/LAYOUT_SYSTEM.md`
8. `templates/TEMPLATE_CONTRACT.md`
9. `editorial/ISSUE_HISTORY.md`
10. `editorial/WEEKLY_RUNBOOK.md`

이번 회차 시작일을 월요일 날짜 `YYYY-MM-DD`로 확정하고 `archive/YYYY-MM-DD/`를 만든다. 그 안에 `production.json`, `parts/`, `assets/`를 사용한다.

기존 `production.json`이 있으면 새 작업을 시작하지 않고 그 상태를 읽는다. 완료된 단계는 다시 작성하지 않는다. 수정이 필요한 경우 해당 단계의 상태만 `revision_required`로 되돌린다.

## 2. 상태표와 중단 복구

`archive/YYYY-MM-DD/production.json`이 제작 상태의 단일 기준본이다.

필수 단계:

1. `00-plan`
2. `01-cover-story`
3. `02-economy`
4. `03-politics`
5. `04-society`
6. `05-tech`
7. `06-reportage`
8. `07-editorial-pages`
9. `08-images`
10. `09-assembly`
11. `10-screen-qa`
12. `11-publish`

상태 값:

- `pending`: 시작 전
- `draft`: 작업 중간 저장본이 있음
- `complete`: 해당 단계의 내용·근거·자체 검수가 끝남
- `revision_required`: 이후 검수에서 수정 필요
- `blocked`: 근거·도구·파일 부족으로 진행 불가

운영 규칙:

- 한 실행은 첫 번째 `pending`, `draft` 또는 `revision_required` 단계 하나만 처리한다.
- 한 실행에서 두 번째 단계로 넘어가지 않는다.
- 단계 파일을 저장하고 `production.json`을 갱신한 뒤 반드시 종료한다.
- 실행이 중단되면 다음 실행은 같은 단계의 저장본을 읽고 이어간다.
- `blocked` 상태에서는 약한 결과로 다음 단계에 진입하지 않는다.
- `11-publish` 이전에는 `issues.json`, `archive/index.html`, `latest.json`을 변경하지 않는다.

## 3. 단계 00 — 회차 기획과 후보 선정

저장 위치: `archive/YYYY-MM-DD/parts/00-plan/`

필수 파일:

- `issue-brief.md`: 조사 기간, 후보 이슈, 최종 꼭지, 제외한 후보와 이유
- `source-map.md`: 기사별 사건·수치·절차·영향·반론 자료 후보
- `layout-map.md`: 기사별 사용할 승인 모듈과 이미지 필요 여부

절차:

1. 직전 주 주요 이슈를 분야별로 수집한다.
2. 핵심 사실·수치·법적 상태·계약·시행 여부를 공식 1차 자료로 확인한다.
3. 확인된 사실, 계획·MOU, 행정·법적 결정, 계약, 집행, 성과, 전망, 편집적 해석을 구분한다.
4. 근거가 약하거나 중복되는 후보를 버린다.
5. 섹션을 채우기 위해 약한 사건을 부풀리지 않는다.
6. 최종 꼭지와 각 꼭지의 중심 질문을 확정한다.

세 파일이 저장되고 후보 선정 근거가 충분할 때만 `00-plan`을 `complete`로 바꾸고 종료한다.

## 4. 단계 01–05 — 섹션 기사 한 꼭지씩 제작

각 단계는 하나의 기사만 처리한다.

저장 위치:

- `parts/01-cover-story/`
- `parts/02-economy/`
- `parts/03-politics/`
- `parts/04-society/`
- `parts/05-tech/`

각 폴더 필수 파일:

- `article.md`: 제목 후보, kicker, deck, 본문, 검증 메모
- `sources.md`: 실제 사용한 원문과 주장별 근거
- `layout.md`: 승인 모듈, 이미지 위치·비율, 수치·근거·절차 모듈 설계
- `qa.md`: 정의·범위·상태·반론·르포 중복·제목 검수 결과

기사 작성 순서:

1. 무엇이 발표·결정·발생했는지 쓴다.
2. 핵심 용어의 정의·대상·범위를 설명한다.
3. 기존 제도와의 차이, 구조, 기관별 역할을 설명한다.
4. 일정·예산·규모·수치의 성격을 확인한다.
5. 확정·계획·미정을 분리한다.
6. 영향·문제점·반론·평가 기준을 후반부에 둔다.
7. 다음에 확인할 문서와 수치를 제시한다.
8. 제목은 본문과 검증이 끝난 뒤 압축한다.

기사 하나의 네 파일이 완성되면 해당 단계만 `complete`로 바꾸고 종료한다. 다음 기사는 다음 실행에서 새로 생각한다.

## 5. 단계 06 — Document Reportage

저장 위치: `parts/06-reportage/`

필수 파일은 섹션 기사와 동일하다. 단, `layout.md`에는 무이미지 구성을 명시한다.

르포는 섹션 기사에서 설명한 제도 개요를 반복하지 않는다. 사람·조직·문서·데이터·시간·책임의 이동을 추적한다.

르포 후속 카드는 다음 두 개만 사용한다.

- `확인된 조치`
- `아직 확인할 것`

제도 설명 반복 여부와 중심 질문 중복 여부를 섹션 기사와 대조한 뒤 `complete`로 바꾸고 종료한다.

## 6. 단계 07 — 보조 편집 지면

저장 위치: `parts/07-editorial-pages/`

필수 파일:

- `life-scene.md`
- `opening.md`
- `data.md`
- `watch.md`
- `sources-method.md`
- `contents.md`
- `qa.md`

순서:

1. 완성된 기사 근거로 LIFE SCENE을 작성한다.
2. 핵심 수치 6개를 DATA로 정리한다.
3. 다음 문서와 판단 기준을 WATCH로 정리한다.
4. 실제 사용한 공식 자료를 SOURCES & METHOD에 정리한다.
5. 모든 기사가 완성된 뒤 Editor's Pick을 도출한다.
6. 마지막으로 Contents를 실제 문서 순서와 일치시킨다.

Editor's Pick은 기사 제목 요약 목록이 아니다. 한 문장의 편집적 결론·질문·긴장을 먼저 두고, 이를 실제로 뒷받침하는 기사 2–4개만 연결한다.

보조 지면 전체를 검수한 뒤 `complete`로 바꾸고 종료한다.

## 7. 단계 08 — 이미지 제작

저장 위치: `archive/YYYY-MM-DD/assets/`

이미지는 기사 원고와 `layout.md`가 완성된 뒤에만 제작한다. 한 장씩 생성·검수·저장하며, 잘못 생성된 이미지를 지면에 억지로 사용하지 않는다.

필요 지면:

- Cover
- LIFE SCENE
- Cover Story
- Economy
- Politics
- Society
- Tech

Document Reportage에는 이미지를 넣지 않는다.

필수 파일:

- 실제 이미지 파일
- `assets/manifest.md`: 대상 섹션, 핵심 구조, 파일 경로, 비율, 대체텍스트, 캡션, 피사체 위치, 글자·숫자·로고·개인정보 검사 결과

모든 이미지가 승인되거나, 특정 이미지가 없어도 되는 근거가 명시된 뒤에만 `complete`로 바꾸고 종료한다.

## 8. 단계 09 — 최종 HTML 조립

모든 이전 단계가 `complete`일 때만 실행한다.

1. 고정 브랜드 셸과 승인 모듈을 사용한다.
2. 각 `parts/` 파일을 읽어 `archive/YYYY-MM-DD/index.html` 하나로 조립한다.
3. CSS와 최소 JavaScript는 `index.html`에 내장한다.
4. 이미지는 `./assets/...` 상대경로로 연결한다.
5. 최종 HTML은 `parts/` 파일을 런타임에 불러오지 않는다.
6. Cover 외 표제에는 수동 `<br>`을 사용하지 않는다.
7. Cover 대형 한글 제목의 기준 `line-height`는 1.40이다.
8. 장문 본문은 단일 열과 중앙 기준축을 유지한다.
9. 반복 수치나 본문을 다시 적은 장식성 카드를 만들지 않는다.

조립 후 정적 구조 검사를 기록하고 `complete`로 바꾼 뒤 종료한다. 이 단계에서도 게시하지 않는다.

## 9. 단계 10 — 내용·화면 검수

검수 결과는 `parts/10-screen-qa/qa.md`에 저장한다.

내용 검수:

- 제목의 핵심 용어를 처음 보는 독자도 이해할 수 있는가.
- 기사 전반부만 읽어도 무엇이 바뀌는지 설명할 수 있는가.
- 확정·계획·미정이 구분되는가.
- 섹션 기사와 르포가 같은 설명·결론을 반복하지 않는가.
- DATA가 핵심 수치 6개인가.
- WATCH마다 상태·발표 주체·확인 문서·판단 기준·공식 링크가 있는가.
- SOURCES & METHOD에 내부 제작 과정이 노출되지 않는가.

화면 검수:

- 1440px 이상 데스크톱
- 1366px 데스크톱·태블릿 가로
- 1024px 태블릿 세로
- 390px 모바일

각 화면에서 가로 스크롤, 잘린 제목, 제목 줄 수, 고아줄, 카드 제목, 한국어 단어 절단, Cover 행간 1.40, 본문 폭, 대비, 이미지 크롭과 상대경로를 직접 확인한다.

하나라도 실패하면 관련 단계를 `revision_required`로 되돌리고 종료한다. 직접 확인하지 못한 항목은 통과가 아니다.

모든 검수가 실제로 통과했을 때만 `10-screen-qa`를 `complete`로 바꾸고 종료한다.

## 10. 단계 11 — 발행

이전 모든 단계가 `complete`이고 `publishAllowed`가 `true`일 때만 실행한다.

다음 순서로 반영한다.

1. `editorial/ISSUE_HISTORY.md`에 최종 구성, 유지할 점, 개선할 점, 다음 호 적용 규칙, 반복 방지 항목, 사용 모듈과 화면 검수 결과를 기록한다.
2. `issues.json` 맨 앞에 새 회차를 추가한다.
3. `archive/index.html`에 새 회차를 추가한다.
4. `latest.json`을 항상 마지막에 변경한다.
5. `production.json`의 발행 상태와 커밋을 기록한다.

발행 단계는 원고·이미지·레이아웃을 새로 만들지 않는다. 발행 중 문제가 발견되면 게시를 중단하고 관련 단계를 `revision_required`로 되돌린다.

## 11. 기존 회차 수정

- 해당 회차의 같은 `parts/` 파일과 `index.html`을 직접 수정한다.
- 수정 대상 단계만 `revision_required`로 되돌린다.
- 이미지도 같은 경로와 파일명으로 교체할 수 있다.
- 버전별 사본이나 별도 패치 CSS·JS를 만들지 않는다.
- 최신호가 아닌 회차를 수정할 때 `latest.json`은 변경하지 않는다.
- 이전 상태는 Git 이력으로 보존한다.
