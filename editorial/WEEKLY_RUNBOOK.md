# WEEKLY SIGNAL 주간 제작 절차

이 문서는 한 호를 조사·작성·편집·검수·발행하는 실행 순서를 규정한다. GitHub Actions는 사용하지 않는다. 최종 통과 여부는 자동 검사보다 제작자의 직접 편집 검수로 결정한다.

## 1. 시작 전에 읽을 현행 기준

새 회차를 시작할 때 다음 문서를 읽는다.

1. `editorial/ARTICLE_WRITING_STANDARD.md`
2. `editorial/EDITORIAL_STANDARD.md`
3. `editorial/ISSUE_QUALITY_GATE.md`
4. `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
5. `editorial/LIFE_SCENE_STANDARD.md`
6. `editorial/HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`
7. `editorial/VOICE_AND_TONE.md`
8. `editorial/SOURCE_POLICY.md`
9. `editorial/IMAGE_DIRECTION.md`
10. `editorial/LAYOUT_SYSTEM.md`
11. `editorial/PUBLISHING_PIPELINE.md`
12. `templates/TEMPLATE_CONTRACT.md`
13. `templates/NAVIGATION_CONTRACT.md`

LIFE SCENE 제작에서는 `LIFE_SCENE_STANDARD.md`가 세부 제작 로직을 소유하며 다른 일반 문체 지침보다 우선한다.

PROLOGUE와 EDITOR'S AFTERWORD는 `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`의 독립 역할과 독서 시점을 따른다.

HTML 제작 단계에서 `templates/ISSUE_TEMPLATE.html`을 시작 셸로 사용한다.

## 2. GitHub 작업영역

제작 중인 회차는 루트 `work/YYYY-MM-DD/`에서 관리한다. 날짜는 대응하는 발행 경로 `archive/YYYY-MM-DD/`와 동일하게 맞춘다.

- `work/YYYY-MM-DD/` = 제작 상태와 검증·흐름설계·원고 작업
- `archive/YYYY-MM-DD/` = 독자에게 공개되는 완성 발행본

`work/`는 GitHub Pages에서 제외한다.

기본 작업 구조:

```text
work/
└─ YYYY-MM-DD/
   ├─ WORK_STATE.md
   ├─ 01_cover/
   │  ├─ VERIFY.md
   │  ├─ FLOW.md
   │  └─ ARTICLE.md
   ├─ 02_economy/
   │  ├─ VERIFY.md
   │  ├─ FLOW.md
   │  └─ ARTICLE.md
   ├─ 03_politics/
   │  ├─ VERIFY.md
   │  ├─ FLOW.md
   │  └─ ARTICLE.md
   ├─ 04_society/
   │  ├─ VERIFY.md
   │  ├─ FLOW.md
   │  └─ ARTICLE.md
   ├─ 05_tech/
   │  ├─ VERIFY.md
   │  ├─ FLOW.md
   │  └─ ARTICLE.md
   ├─ 06_deep_dive/
   ├─ 07_life_scene/
   │  ├─ SCENE_MAP.md
   │  └─ ARTICLE.md
   ├─ 08_prologue/
   │  ├─ PREVIEW_MAP.md
   │  └─ ARTICLE.md
   └─ 09_editor_afterword/
      └─ ARTICLE.md
```

Git은 빈 폴더를 보존하지 않으므로 아직 시작하지 않은 기사 폴더는 미리 만들지 않아도 된다.

## 3. 작업 상태

각 회차의 `WORK_STATE.md`가 현재 진행 상태를 소유한다.

- `PENDING`: 아직 시작하지 않음
- `VERIFYING`: 검증·리서치 중
- `FLOWING`: 독자 이해 순서와 문단 논리 설계 중
- `WRITING`: 독자용 기사 작성·분석 보강 중
- `IN_REVIEW`: 검수 중
- `COMPLETE`: 다음 단계로 이동 가능

현재 일반 기사 하나를 COMPLETE로 닫기 전에는 다음 일반 기사 본문을 작성하지 않는다.

## 4. 기본 구성

별도 지시가 없으면 다음 구성을 목표로 한다.

- Cover Story 1편
- Economy 일반 기사 1편
- Politics 일반 기사 1편
- Society 일반 기사 1편
- Tech 일반 기사 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- PROLOGUE 1편
- EDITOR'S AFTERWORD 1편
- Sources

Cover Story가 특정 분야를 다뤄도 해당 분야 일반 기사를 생략하지 않는다.

## 5. 회차 후보 선정

1. 각 기본 분야에서 후보를 최소 2개 이상 검토한다.
2. 핵심 사실과 1차 자료가 존재하는지 확인한다.
3. 근거가 약하거나 서로 중복되는 후보를 버린다.
4. Cover Story와 분야별 기사가 과도하게 겹치지 않는지 확인한다.
5. Cover Story와 4개 분야의 주제만 확정한다.

이 단계에서 모든 기사의 상세 분석 프레임·제목·결론을 미리 만들지 않는다.

## 6. 일반 기사 직렬 제작

기본 순서:

`Cover Story → Economy → Politics → Society → Tech`

기사 하나마다 다음을 끝낸 뒤 다음 기사로 이동한다.

1. 상태를 VERIFYING으로 변경
2. `VERIFY.md` 생성 및 사건·수치·상태·절차·예외·영향·반론·후속자료 검증
3. 검증이 충분하면 `FLOW.md`를 만들고 FLOWING으로 변경
4. 기사 중심 질문과 설명 단위를 선형 순서로 설계
5. FLOW가 닫히면 `ARTICLE.md` 작성
6. 설명을 먼저 완결하고 후반에 분석·한계·부작용 보강
7. COHERENCE PASS
8. STYLE & ARGUMENT PASS
9. 마지막에 제목과 Deck 작성
10. ARTICLE REVIEW
11. 통과하면 COMPLETE

### FLOW와 COHERENCE의 핵심

- 필요한 정보를 모두 넣는 것보다 독자가 한 줄로 따라갈 수 있게 배열하는 것을 우선한다.
- 같은 급의 사실을 옆에 늘어놓지 않는다.
- 여러 제도·기관·협상 트랙이 있으면 하나를 먼저 설명해 닫은 뒤 다음 축으로 이동한다.
- 문단은 하나의 중심 질문 또는 논리 단위를 끝까지 설명한다.
- 한두 문장마다 습관적으로 문단을 끊지 않는다.

### 부정과 대조의 핵심

- 설명과 논증이 먼저다.
- 부정·대조는 이미 세운 주장의 범위를 한정하거나 실제 반론을 검토할 때 사용한다.
- 독자가 잘못 알고 있을 것이라는 가정에서 기사 단위를 만들지 않는다.

이 단계에서는 DEEP DIVE, LIFE SCENE, PROLOGUE, EDITOR'S AFTERWORD, 이미지와 HTML을 먼저 만들지 않는다.

## 7. 일반 기사 전체 비교

Cover Story와 Economy·Politics·Society·Tech가 모두 COMPLETE가 된 뒤 처음으로 다섯 기사를 한꺼번에 비교한다.

- 주제와 설명 중복
- 같은 결론·수사 반복
- 분야별 깊이 편차
- 출처 역할 편중
- 빠진 배경지식
- 기사마다 설명 흐름이 선형적으로 이어지는지
- 기사별 FLOW가 같은 템플릿으로 수렴하지 않는지
- 부정·대조가 기사 기본 추진력으로 반복되는지
- 한 호 전체 정보 밀도

수정이 필요하면 해당 기사만 IN_REVIEW로 되돌린다.

## 8. DEEP DIVE

1. 완성된 일반 기사 전체를 읽고 심화가 필요한 기사만 고른다.
2. 일반 기사가 이미 답한 질문을 적는다.
3. DEEP DIVE가 새로 답할 단 하나의 질문을 확정한다.
4. 새 핵심 주장 최소 3개와 새 독립 출처 최소 2개를 확보한다.
5. 쟁점 대립·정책 필요성·구조 해부·결과 시나리오·역사 비교 중 적합한 형식을 선택한다.
6. 같은 정의·원인·경로·결론을 반복하지 않는다.
7. 반론은 논증을 시험하기 위해 사용하며 존재하지 않는 반대 입장을 만들지 않는다.

차이를 만들 수 없으면 다른 질문이나 다른 기사를 선택한다.

## 9. LIFE SCENE

LIFE SCENE은 `editorial/LIFE_SCENE_STANDARD.md`의 독립 제작 알고리즘을 따른다.

`SUBJECT SELECT → FACT BOUNDARY → CHARACTER & ORDINARY PLAN → SCENE MAP → NARRATIVE DRAFT → CAUSALITY PASS → EXPLANATION LEAK PASS → SCENARIO NOTE → LIFE SCENE REVIEW → COMPLETE`

핵심:

- 구체적인 가상 인물과 평범한 원래 계획을 만든다.
- `상황/장애 → 행동 → 직접 결과 → 다음 장면`의 인과 사슬을 만든다.
- 생활 마찰을 목표 개수로 정하지 않는다.
- 본문은 시간·장소·행동이 전진해야 한다.
- 정책명·전국 수치·행정 해설은 이야기를 지배하지 않는다.
- 마지막 SCENARIO NOTE에서 가상 범위와 실제 사실을 구분한다.

## 10. PROLOGUE

PROLOGUE는 **한 호의 지면을 넓게 열었다가 몇 군데로 시선을 좁히고 본문으로 넘기는 매거진 도입부**다.

일반 기사·DEEP DIVE·LIFE SCENE이 모두 COMPLETE가 된 뒤 작성한다.

본문 전에 반드시 `08_prologue/PREVIEW_MAP.md`를 만든다. PROLOGUE는 PREVIEW MAP 없이 바로 ARTICLE을 쓰지 않는다.

제작 로직:

`ISSUE READBACK → PREVIEW MAP → PANORAMA → ORIENTATION → FOCUS → ARTICLE PREVIEW → RHYTHM PASS → DEPTH CEILING PASS → REPEATED COVERAGE PASS → HANDOFF → COMPLETE`

핵심:

- 독자는 뒤의 기사를 아직 읽지 않았다고 가정한다.
- PANORAMA에서는 여러 분야와 주요 토픽이 한꺼번에 등장해도 된다.
- 초반의 넓은 시야 자체를 커버리지 압박으로 오판하지 않는다.
- PANORAMA 뒤에는 시야가 점점 좁아져야 한다.
- ORIENTATION은 읽기의 방향만 잡고 공통 교훈·공통 질문을 만들지 않는다.
- FOCUS에서는 일부 숫자·장면·문서·행동만 조금 가까이 보여준다.
- ARTICLE PREVIEW에서는 필요한 기사만 한 단계 더 구체적으로 소개하되 본문 설명을 끝내지 않는다.
- `Cover 한 문단 → Economy 한 문단 → Politics 한 문단` 같은 선택 기사 미니 요약 구조도 실패다.
- PANORAMA에서 이미 넓게 보여준 모든 토픽을 뒤 문단에서 다시 한 번씩 반복하지 않는다.
- 기사마다 같은 분량·대표 숫자·대표 장면을 배정하지 않는다.
- 기사 핵심 메커니즘·후속 절차·근거·비교 사례를 본문 수준으로 미리 설명하지 않는다.
- 지배적인 읽기 움직임은 `넓게 → 좁게 → 본문`이어야 한다.

PREVIEW MAP에는 최소한 `PANORAMA / ORIENTATION / FOCUS / ARTICLE PREVIEW / DEPTH CEILING / HANDOFF`를 기록한다. PREVIEW MAP만 읽어도 시선이 넓은 데서 좁은 데로 이동하는 것이 보여야 한다.

상세 기준은 `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`의 PROLOGUE 항목이 소유한다.

## 11. EDITOR'S AFTERWORD

EDITOR'S AFTERWORD는 한 호의 마지막 편집 원고로 쓰는 **에디터 후기**다.

일반 기사·DEEP DIVE·LIFE SCENE·PROLOGUE가 모두 닫힌 뒤 작성한다.

제작 로직:

`ISSUE READBACK → MEMORY TRACE → REFLECTION DRAFT → RECAP CUT → METHOD REPORT CUT → AFTERTASTE PASS → COMPLETE`

핵심:

- PROLOGUE와 달리 제작 후 시점을 숨기지 않는다.
- `이번 호를 만들면서`, `원고를 닫고 나니` 같은 회고 표현을 사용할 수 있다.
- `이번 호의 PICK`을 만들지 않는다.
- 대표 기사·대표 숫자·대표 문장 하나를 반드시 고르지 않는다.
- 모든 기사를 하나의 공통 교훈으로 묶지 않는다.
- 실제로 남은 생각·망설임·인상·미완의 질문을 자연스럽게 쓴다.
- 한 가지에 오래 머물 수도 있고 두세 가지 생각이 이어질 수도 있다.
- 기사별 요약을 하지 않는다.
- VERIFY·FLOW·검수 절차를 설명하는 편집 방법론 보고서로 만들지 않는다.
- 억지 질문, 다음 호 예고, 감사 인사로 끝낼 의무가 없다.

최종 지면에서는 모든 일반 기사와 연결된 DEEP DIVE 뒤, Sources 바로 앞에 배치한다.

상세 기준은 `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`의 EDITOR'S AFTERWORD 항목이 소유한다.

## 12. 지면 설계

1. DATA와 WATCH는 새 정보가 있을 때만 만든다.
2. 대표 기사의 표지 주제를 확정한다.
3. 기사마다 내용에 맞는 지면 조합을 선택한다.
4. 한 호에 최소 세 가지 이상의 기사 레이아웃 리듬을 만든다.
5. 템플릿의 동일 구조를 모든 기사에 복제하지 않는다.
6. 장식 모듈은 본문을 반복하지 않고 새로운 정보나 읽기 전환을 제공해야 한다.
7. 직전 회차보다 섹션 전환·정보 시각화·모바일 흐름 중 하나 이상을 개선한다.

## 13. 이미지 제작

1. 모든 주요 이미지를 실제 이미지 생성 모델로 새로 만든다.
2. 표지·Cover Story·각 분야 기사·DEEP DIVE·LIFE SCENE에 서로 다른 역할과 구도를 부여한다.
3. Cover 장변 1800px 이상, 나머지 주요 이미지 장변 1600px 이상을 사용한다.
4. 벡터·SVG·플랫·아이콘·아이소메트릭 이미지를 사용하지 않는다.
5. 외부 이미지 URL을 직접 연결하지 않는다.
6. 각 파일을 실제로 열어 생성 오류와 디테일을 확인한다.
7. 데스크톱과 모바일 크롭을 확인한다.

## 14. HTML 제작

1. `ISSUE_TEMPLATE.html`을 시작점으로 사용하되 그대로 복제한 결과를 완성본으로 보지 않는다.
2. `work/YYYY-MM-DD/`의 COMPLETE 원고만 가져온다.
3. 완성된 본문·CSS·최소 JavaScript를 회차별 `archive/YYYY-MM-DD/index.html` 하나에 넣는다.
4. 기본 독서 순서는 `Cover → Contents → LIFE SCENE → PROLOGUE → 본 기사와 연결 DEEP DIVE → EDITOR'S AFTERWORD → Sources`다.
5. DEEP DIVE는 관련 일반 기사 바로 뒤에 둔다.
6. EDITOR'S AFTERWORD는 모든 기사·DEEP DIVE가 끝난 뒤 Sources 바로 앞에 둔다.
7. 목차·내비게이션·DOM 순서를 일치시킨다.
8. 기본 분야 기사 누락을 다시 확인한다.
9. 미사용 클래스, 숨겨진 모듈과 임시 주석을 삭제한다.
10. 발행 회차 루트에는 `index.html`과 `assets/`만 둔다.

## 15. 실제 화면 검수

다음 화면을 실제 렌더링하거나 캡처해 확인한다.

- 1440px 이상
- 1366px
- 1024px
- 390px

확인 항목:

- Cover 제목 안전영역과 이미지 선명도
- 기본 구성과 Contents 일치
- LIFE SCENE에서 PROLOGUE로의 전환
- PROLOGUE가 본문 결론을 미리 소진하지 않는지
- PROLOGUE가 `넓게 → 좁게 → 본문`의 시선 이동을 갖는지
- PROLOGUE가 선택한 기사 몇 편의 미니 요약집으로 변하지 않았는지
- PANORAMA의 넓은 커버리지를 뒤에서 반복하지 않는지
- 기사별 시각적 차이
- DEEP DIVE 중복 여부
- EDITOR'S AFTERWORD가 실제 후기처럼 자연스러운지
- EDITOR'S AFTERWORD가 기사 요약이나 편집 방법론 보고서로 변하지 않았는지
- LIFE SCENE 서사 흐름
- 이미지 디테일과 크롭
- 표·카드·제목 오버플로
- 링크와 상대경로

HTML 코드만 읽고 화면 검수를 통과했다고 기록하지 않는다.

## 16. 보조 구조 검사

필요하면 직접 실행한다.

```bash
python -m pip install -r requirements-tools.txt
python tools/validate_repository.py
```

이 검사는 외부 이미지, 분할 HTML, 누락 파일과 잘못된 링크 같은 기술적 실수를 찾는 용도다.

## 17. 비교 검수

제1호와 직전 회차를 새 회차와 나란히 비교한다.

- 한 호의 밀도가 낮아지지 않았는가
- 섹션 전환과 기사별 리듬이 더 좋아졌는가
- 이미지 품질과 기사 적합성이 개선됐는가
- 모바일에서 읽기 흐름이 나아졌는가
- 긴 블로그 문서가 아니라 매거진으로 보이는가

이전 회차 코드는 복제하지 않는다.

## 18. 최종 반영

1. 제작자가 원고·이미지·지면·화면 검수를 완료한다.
2. 발견한 문제를 모두 수정하고 다시 검수한다.
3. 완성 회차를 `archive/YYYY-MM-DD/`에 반영한다.
4. `ISSUE_HISTORY.md`, `issues.json`, `archive/index.html`, `latest.json`은 마지막에 함께 갱신한다.
5. GitHub Pages는 `main` 루트의 정적 파일을 사용한다.
6. `work/`는 발행 대상이 아니며 제작 상태 저장용이다.

GitHub Actions, 자동 배포와 자동 병합은 사용하지 않는다.

## 19. 실패 처리

- 실패본을 `archive/`에 남기지 않는다.
- 실패한 기사만 `work/YYYY-MM-DD/`에서 다시 검증·작성한다.
- 읽기 흐름이 실패한 일반 기사는 사실을 더 추가하기 전에 FLOW와 문단 경계를 다시 설계한다.
- LIFE SCENE이 설명문처럼 실패하면 `SCENE_MAP.md`의 인과 사슬부터 다시 만든다.
- PROLOGUE가 기사 요약·선택 기사 미니 초록·반복 커버리지·과도한 본문 설명으로 실패하면 문장만 고치지 말고 `PREVIEW_MAP.md`부터 다시 만든다.
- EDITOR'S AFTERWORD가 기사 요약·대표 항목 선정문·편집 방법론 보고서로 실패하면 실제 제작 후기 역할에서 다시 쓴다.
- 부정문이 과도한 경우 표현만 치환하지 말고 그 부정이 논증에 필요한지부터 다시 판정한다.
- 이미지가 준비되지 않았거나 실제 렌더링을 확인하지 못한 상태는 발행 불가다.