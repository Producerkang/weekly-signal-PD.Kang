# ISSUE 02 WORK STATE

회차: 2026-07-27—2026-08-02
발행 경로: `archive/2026-07-27/`
작업 경로: `work/2026-07-27/`

## 현재 재개 지점

**01~09 원고 제작과 월요일 07:00 지면 설계는 완료됐다. 월요일 08:00 이미지 슬롯별 순차 제작은 이미지 생성 도구의 반복된 OUTPUT_CONTRACT 실패로 BLOCKED 상태다. 다음 재개 작업은 동일한 08:00 이미지 턴을 정상적인 scene-only 생성 컨텍스트에서 다시 실행하는 것이다.**

01~09는 현행 완성본으로 확정한다. 별도 지시 없이 다시 작성하거나 재검토하지 않는다.

현행 예약 구조는 다음과 같이 분리되어 있다.

```text
06:00  PROLOGUE + EDITOR'S AFTERWORD
→ 07:00  지면 설계 — COMPLETE
→ 08:00  이미지 슬롯별 순차 제작 — BLOCKED
→ 09:00  HTML + 간단 화면 검수 + 발행 — PENDING
```

07:00 지면 설계와 08:00 이미지 제작은 **서로 다른 예약 작업·서로 다른 대화 컨텍스트**다.

현재 07:00 지면 설계는 완료됐고 08:00 이미지 생성은 scene-only 출력 실패로 완료되지 못했다.

- `LAYOUT_PLAN.md`: COMPLETE
- `IMAGE_PLAN.md`: BLOCKED
- 실제 이미지 생성: OUTPUT_CONTRACT 실패, ACCEPT 자산 없음
- REQUIRED 이미지 슬롯: 6개, 모두 BLOCKED 기록

## 진행 상태

- COVER STORY: COMPLETE
- ECONOMY: COMPLETE
- POLITICS: COMPLETE
- SOCIETY: COMPLETE
- TECH: COMPLETE
- CROSS_ARTICLE_REVIEW: COMPLETE
- DEEP_DIVE: COMPLETE
- LIFE_SCENE: COMPLETE
- PROLOGUE: COMPLETE
- EDITOR'S AFTERWORD: COMPLETE
- MANUSCRIPT_STAGE: COMPLETE
- LAYOUT: COMPLETE
- IMAGES: BLOCKED
- HTML: PENDING
- SCREEN_REVIEW: PENDING
- PUBLISH: PENDING

## 확정된 01~09

### 01 Cover Story
- `01_cover/VERIFY.md`: COMPLETE
- `01_cover/ARTICLE.md`: COMPLETE
- 제목: `폭염 위기경보 ‘심각’, 중앙재난안전대책본부는 무엇을 움직이나`

### 02 Economy
- `02_economy/VERIFY.md`: COMPLETE
- `02_economy/ARTICLE.md`: COMPLETE
- 제목: `휘발유 1,784원 상한은 주유소까지 어떻게 전달되나`

### 03 Politics
- `03_politics/VERIFY.md`: COMPLETE
- `03_politics/ARTICLE.md`: COMPLETE
- 제목: `일곱 개 협력문서와 한·메르코수르 협상의 서로 다른 시간표`

### 04 Society
- `04_society/VERIFY.md`: COMPLETE
- `04_society/FLOW.md`: COMPLETE
- `04_society/ARTICLE.md`: COMPLETE
- 제목: `방학 오전 아홉 시를 누가 맡나, 틈새돌봄 1,461곳이 시작됐다`

### 05 Tech
- `05_tech/VERIFY.md`: COMPLETE
- `05_tech/FLOW.md`: COMPLETE
- `05_tech/ARTICLE.md`: COMPLETE
- 제목: `공공나노팹센터 두 곳 출범, 공동활용의 지원·평가 근거가 생겼다`

### CROSS_ARTICLE REVIEW
- `CROSS_ARTICLE_REVIEW.md`: COMPLETE
- 일반 기사 5편 전체 PASS

### 06 Deep Dive
- `06_deep_dive/VERIFY.md`: COMPLETE
- `06_deep_dive/FLOW.md`: COMPLETE
- `06_deep_dive/ARTICLE.md`: COMPLETE
- 제목: `한·메르코수르의 두 번째 시간표, 공동협상 뒤 각국 비준이 시작된다`
- 연결 대상: Politics

### 07 Life Scene
- `07_life_scene/SCENE_MAP.md`: COMPLETE
- `07_life_scene/ARTICLE.md`: COMPLETE
- 제목: `아홉 시에 문이 열리는데, 엄마는 여덟 시 이십 분에 집을 나서야 했다`
- 연결 대상: Society
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 08 Prologue
- `08_prologue/PREVIEW_MAP.md`: COMPLETE
- `08_prologue/ARTICLE.md`: COMPLETE
- PANORAMA에서 Cover·Economy·Politics·Society·Tech 소재를 넓게 펼친 뒤 전 분야를 다시 순회하지 않음
- FOCUS는 석유 공급가격·정상회담 후속 일정에서 돌봄의 40분으로 시야를 좁힘
- ARTICLE PREVIEW는 Society + LIFE SCENE 조합에 집중
- 기사별 세부 근거·후속 절차·결론은 DEPTH CEILING 아래에 남김
- 마지막은 7월 27일 오후 3시 Cover Story 첫 장면으로 접속
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 제3호 이후 PROLOGUE에 이월할 개선사항

현행 표준의 `PROSE RHYTHM PASS`를 반드시 적용한다.

- PANORAMA·ORIENTATION·FOCUS·ARTICLE PREVIEW를 실제 문단과 1:1 대응시키지 않는다.
- 같은 소재가 FOCUS와 ARTICLE PREVIEW에 걸치면 한 문단에서 자연스럽게 합칠 수 있다.
- 구체적인 장면이 이미 의미를 전달하면 뒤에 추상 해설을 자동으로 한 문장 더 붙이지 않는다.
- 같은 숫자·시간·사실을 제작 단계가 바뀌었다는 이유로 반복 설명하지 않는다.
- 한 문단의 중심 이미지·숫자·행동·명제가 첫눈에 잡히게 한다.
- 고유명사·기관명·숫자·절차를 한 문장에 과밀하게 쌓지 않는다.
- HANDOFF는 첫 문단의 재설명이 아니라 짧은 콜백과 본문 접속으로 처리한다.
- LIFE SCENE이 앞에 배치됐다는 이유만으로 `앞서 LIFE SCENE에서 본…` 같은 연결 멘트를 만들지 않는다. 실제 소재 연결이 자연스러울 때만 사용한다.
- 프롤로그 본문 완료 뒤 독립 제목을 붙인다.

### 09 Editor's Afterword
- `09_editor_afterword/ARTICLE.md`: COMPLETE
- 기존 EDITOR'S PICK 및 삭제된 과거 AFTERWORD 미참조
- 제작 후 시점을 사용한 실제 회고 형태
- 기사별 요약 구조 없음
- 대표 기사·대표 숫자·대표 문장을 선정하는 PICK 구조 없음
- 모든 기사를 하나의 공통 교훈으로 묶지 않음
- VERIFY·FLOW·검수 절차를 설명하는 방법론 보고서 없음
- 돌봄센터 오전 9시와 부모 출근 오전 8시 20분 사이의 40분, 한·메르코수르 협상 이후 남은 장기 절차라는 서로 다른 두 시간 감각에 집중
- 마지막은 질문·감사·다음 호 예고 없이 자연스러운 여운으로 종료
- 최종 문단 호흡은 초안 대비 약 10~20% 보강
- 현행 본문은 확정본이며 별도 지시 없이 수정하지 않는다.

### 제3호 이후 EDITOR'S AFTERWORD에 이월할 분량 기준

- 제2호 최종본 수준의 서정성과 느슨한 회고 호흡을 유지한다.
- 문단 수를 늘리기보다 각 기존 문단을 약 1.1~1.2배 정도 충분히 호흡시킨다.
- 분량을 늘릴 때 새 기사·새 논점·새 교훈을 추가하지 않는다.
- 기존 장면, 망설임, 생각의 여운을 한 문장 정도 더 이어가는 방식으로 확장한다.
- 같은 사실을 다시 설명하거나 기사 요약으로 분량을 채우지 않는다.
- 결말의 여운을 설명으로 닫지 않는다.

## 07:00 LAYOUT — COMPLETE

완료 산출물:

```text
LAYOUT_PLAN.md — COMPLETE
IMAGE_PLAN.md  — READY
```

### 확정된 최종 독서 순서

`Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Politics_DEEP_DIVE → Society → Tech → EDITOR'S AFTERWORD → Sources`

이번 호 Deep Dive는 Politics 바로 뒤에 둔다.

### DATA / WATCH

- DATA: OMIT
- WATCH: OMIT

별도 DATA/WATCH를 만들면 각 기사에서 이미 설명한 수치와 후속 지표를 반복하게 되므로 기사 내부 정보 모듈로 처리한다.

### 기사별 지면 리듬

- Cover: 풀블리드 이미지 + 제목 안전영역
- LIFE SCENE: 4:3 와이드 생활 이미지 + 연속 서사
- PROLOGUE: 이미지 없는 텍스트 스프레드
- Cover Story: 넓은 이미지 + 현장 번역 매트릭스
- Economy: 이미지·도입 2열 + 가격 전달 사다리 + 비교표
- Politics: 완전 무인 이미지 + 세 개의 후속 시간표
- Politics DEEP DIVE: 이미지 없이 다섯 날짜 타임라인 + 국가별 발효 비교표
- Society: 이미지 없이 목표/첫 운영 수치 + 운영시간 비교
- Tech: 클린룸 이미지·도입 2열 + 공동활용 기능·이용 경로
- EDITOR'S AFTERWORD: 좁은 단일 열, 별도 이미지·카드 없음

### LIFE SCENE 이미지 비율

**4:3 확정**

`차 안의 기다림 + 아이 + 생활 공간`을 한 프레임에 함께 담는 가로형이 이번 프런트 스프레드에 적합하다.

### 08:00 생성 대상 슬롯

1. `IMG-01` Cover — `cover.webp` — READY
2. `IMG-02` LIFE SCENE — `life-scene.webp` — READY
3. `IMG-03` Cover Story — `cover-story.webp` — READY
4. `IMG-04` Economy — `economy.webp` — READY
5. `IMG-05` Politics — `politics.webp` — READY / 완전 무인
6. `IMG-06` Tech — `tech.webp` — READY

OMIT:

- Politics DEEP_DIVE
- Society
- PROLOGUE
- EDITOR'S AFTERWORD
- DATA / WATCH

각 생성 대상 슬롯의 장면 브리프·비율·해상도·안전영역·하드 규칙·`SCENE_ONLY_PROMPT`는 `IMAGE_PLAN.md`에 닫혀 있다.

## 다음 단계 — 월요일 08:00 이미지 슬롯별 순차 제작

현행 `editorial/IMAGE_PIPELINE.md`, `editorial/IMAGE_DIRECTION.md`, 이 `WORK_STATE.md`, `IMAGE_PLAN.md`를 기준으로 실행한다.

### 08:00 시작 조건

모두 충족됨:

- `WORK_STATE.md`: `LAYOUT: COMPLETE`
- `LAYOUT_PLAN.md`: `COMPLETE`
- `IMAGE_PLAN.md`: `READY`

### 08:00 기본 읽기 범위

1. 이 `WORK_STATE.md`의 현재 단계
2. `editorial/IMAGE_PIPELINE.md`
3. `editorial/IMAGE_DIRECTION.md`
4. `IMAGE_PLAN.md`

`LAYOUT_PLAN.md`는 슬롯 역할이 모호할 때만 보조적으로 확인하고 수정하지 않는다.
원고 01~09는 기본적으로 다시 읽지 않는다.

### 08:00 실행 방식

```text
IMAGE TURN PRECHECK
→ 다음 READY / RETRY 슬롯 선택
→ 해당 슬롯 블록만 확인
→ SCENE_ONLY_PROMPT READY 확인
→ 이미지 1장 생성
→ OUTPUT CONTRACT 확인
→ 육안 품질 확인
→ ACCEPT / RETRY / BLOCKED
→ IMAGE_PLAN 상태 기록
→ 다음 슬롯
→ 반복
```

- `1 SLOT = 1 SCENE = 1 IMAGE`
- 한 번의 생성 호출에는 현재 슬롯 한 장만 넣는다.
- 첫 이미지 한 장 생성 후 턴을 종료하지 않는다.
- REQUIRED 6개 슬롯을 끝까지 순차 처리한다.
- 한 슬롯이 BLOCKED여도 다음 슬롯 작업을 계속한다.
- Politics는 사람·얼굴·실루엣·손·반사 속 인물까지 전부 금지한다.
- 작업 보고서·대시보드·WORK_STATE·파일트리·문서 페이지를 이미지로 만들지 않는다.
- 이미지 한 장이 충분히 실사용 가능하면 취향성 재생성을 하지 않는다.
- 기본 최대 3회의 유효 이미지 시도 후에도 실패하면 해당 슬롯을 BLOCKED로 기록한다.

### 08:00 턴 종료 조건

- REQUIRED 슬롯 6개의 상태가 모두 기록됨
- ACCEPT 자산의 실제 저장 경로·크기 기록
- 모든 REQUIRED 슬롯이 ACCEPT된 경우에만 `IMAGES: COMPLETE`
- REQUIRED 슬롯이 BLOCKED면 `IMAGES: BLOCKED` 또는 현행 계약에 맞는 미완료 상태 유지
- HTML·SCREEN_REVIEW·PUBLISH는 아직 올리지 않음
- 이미지 단계가 정상 완료되면 다음 작업을 `09:00 HTML + 간단 화면 검수 + 발행`으로 갱신

## 08:00 이미지 턴 금지사항

- 지면 재설계 금지
- `LAYOUT_PLAN.md` 재작성 금지
- 원고 재작성·재검토 금지
- 여러 슬롯을 한 이미지 생성 호출에 묶기 금지
- 연락시트·스토리보드·무드보드·이미지 팩 생성 금지
- 작업 상태·다음 턴·저장소 구조 시각화 금지
- 실제 이미지 생성 전 IMAGES를 COMPLETE로 변경 금지
- 실제 HTML 렌더링·화면 검수 전 SCREEN_REVIEW를 COMPLETE로 변경 금지
- 실제 화면 검수 전 PUBLISH 상태로 변경 금지

## 새 대화 실행 규칙

저장소와 이 `WORK_STATE.md`를 확인한 뒤 **별도 재확인 질문 없이 월요일 08:00 이미지 슬롯별 순차 제작 턴을 끝까지 실행**한다.

- 01~09 수정 금지
- 07:00 지면 설계 재수행 금지
- `IMAGE_PLAN.md`의 READY 슬롯과 `SCENE_ONLY_PROMPT`를 실행 입력으로 사용
- 슬롯 하나씩 생성·판정·상태 기록 후 다음 슬롯으로 이동
- Politics 완전 무인 하드 게이트 유지
- REQUIRED 슬롯 6개 전체를 처리하기 전 턴 종료 금지
- 이미지 완료 뒤에만 09:00 HTML 턴으로 넘김

## 08:00 실행 결과 — BLOCKED

실행 시각: 2026-08-08 14:45 KST

- `IMG-01 Cover`: BLOCKED — `OUTPUT_CONTRACT`
- `IMG-02 LIFE SCENE`: BLOCKED — `OUTPUT_CONTRACT`
- `IMG-03 Cover Story`: BLOCKED — 이미지 생성 도구 scene-only 실행 불가
- `IMG-04 Economy`: BLOCKED — 이미지 생성 도구 scene-only 실행 불가
- `IMG-05 Politics`: BLOCKED — 이미지 생성 도구 scene-only 실행 불가, 완전 무인 결과 검증 불가
- `IMG-06 Tech`: BLOCKED — 이미지 생성 도구 scene-only 실행 불가

이미지 생성 도구가 장면 프롬프트 대신 저장소·상태 문서·진행 대시보드 형태를 반복 반환해 `OUTPUT_CONTRACT`를 통과한 후보가 없었다. 해당 결과는 전부 폐기했으며 `archive/2026-07-27/assets/`에 저장한 신규 자산은 없다.

따라서 `IMAGES`는 `COMPLETE`로 올리지 않고 `BLOCKED`를 유지한다. HTML·SCREEN_REVIEW·PUBLISH도 모두 PENDING이다.

다음 재개 시에는 **원고·지면을 다시 만들지 말고**, 정상적인 scene-only 이미지 생성이 가능한 컨텍스트에서 `IMAGE_PLAN.md`의 `IMG-01`부터 08:00 이미지 턴을 다시 실행한다. REQUIRED 6개가 모두 ACCEPT/SAVED된 뒤에만 09:00 HTML + 간단 화면 검수 + 발행으로 이동한다.