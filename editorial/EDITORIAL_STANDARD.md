# WEEKLY SIGNAL 편집 기준

이 문서는 WEEKLY SIGNAL의 상위 편집 원칙을 규정한다. 실제 예약 시각, 실행 순서와 회차 상태는 `README.md`, `editorial/WEEKLY_RUNBOOK.md`, 해당 회차 `WORK_STATE.md`가 소유하며, 세 문서와 충돌하는 과거 규칙은 사용하지 않는다.

현재 운영 경로는 **이미지 생성 없는 5-페이즈 제작 경로**다.

## 1. 매체 목적

WEEKLY SIGNAL은 사건을 나열하거나 보도자료를 줄여 싣는 매체가 아니다. 충분한 리서치를 바탕으로 독자가 사건·정책·제도·산업 구조를 처음부터 이해하고 스스로 판단할 수 있는 설명형 주간 매거진을 만든다.

우선순위:

1. 사실 정확성
2. 설명의 완결성
3. 독자의 이해 순서
4. 한 호 전체의 분야 구성과 밀도
5. 기사별 독립 가치
6. 지면과 실제 화면의 완성도

형식 규칙을 지켰더라도 얇고 반복적이거나 실제 화면에서 완성도가 낮은 결과는 발행하지 않는다.

## 2. 기본 회차 구성

별도 사용자 지시가 없으면 다음을 기본으로 한다.

1. Cover Story 1편
2. Economy 일반 기사 1편
3. Politics 일반 기사 1편
4. Society 일반 기사 1편
5. Tech 일반 기사 1편
6. DEEP DIVE — 필요할 때 1~2편, 불필요하면 근거를 기록하고 `OMIT`
7. LIFE SCENE 1편
8. PROLOGUE 1편
9. EDITOR'S AFTERWORD 1편
10. Sources

`EDITOR'S PICK`은 폐기된 레거시 섹션이며 다시 만들지 않는다.

Cover Story는 분야 일반 기사를 대체하지 않는다. DATA와 WATCH는 선택적 보조 모듈이며 일반 기사를 대신하지 않는다.

## 3. 현행 5-페이즈 제작 순서

```text
일요일 22:00 FRONT DESK
Cover Story → Economy

월요일 00:00 SECTION DESK
Politics → Society → Tech

월요일 02:00 REVIEW DESK
CROSS-ARTICLE REVIEW → 필요한 교정 → DEEP DIVE

월요일 04:00 FEATURE DESK
LIFE SCENE → PROLOGUE → EDITOR'S AFTERWORD

월요일 09:00 PUBLISH DESK
LAYOUT_PLAN → HTML → 실제 화면 검수 → 발행
```

05:00 이전 네 제작 턴은 2시간 간격이다. 07:00·08:00에는 별도 제작 턴을 두지 않는다.

한 페이즈 안에 여러 작업이 있어도 앞 단위를 `COMPLETE`로 닫기 전 다음 단위 본문을 작성하지 않는다.

## 4. 일반 기사

일반 기사는 다음 질문에 답해야 한다.

- 무슨 일이 있었는가
- 핵심 용어와 현재 상태는 무엇인가
- 기존과 무엇이 달라졌는가
- 적용 대상·범위·시점·예외는 무엇인가
- 실제 절차·권한·돈·데이터는 어떻게 움직이는가
- 누구에게 어떤 영향이 생기는가
- 확정·계획·미정·전망은 각각 무엇인가
- 가장 강한 반론과 한계는 무엇인가
- 이후 어떤 문서·수치·사건이 판단을 바꾸는가

기사별로 사건·수치·절차·영향·반론의 근거 역할을 확인한다. 보도자료 한 건과 통신사 기사 몇 건을 늘여 쓴 원고는 완성 기사로 인정하지 않는다.

세부 제작 알고리즘은 `ARTICLE_WRITING_STANDARD.md`를 따른다.

## 5. CROSS-ARTICLE REVIEW와 DEEP DIVE

다섯 일반 기사가 모두 완료된 뒤 한꺼번에 비교한다.

- 주제·설명 중복
- 결론·수사 반복
- 분야별 깊이 편차
- 출처 역할 편중
- 빠진 배경지식
- FLOW 템플릿화
- 한 호 전체 정보 밀도

문제가 있으면 해당 기사만 다시 `IN_REVIEW`로 돌린다.

DEEP DIVE는 일반 기사와 다른 질문으로 새 지식을 제공할 때만 만든다. 최소 3개의 새 핵심 주장과 일반 기사에 없던 독립 출처 2개 이상을 확보한다. 적절한 심화 질문을 만들 수 없으면 억지로 채우지 않고 `OMIT`한다.

세부 기준은 `SECTION_AND_DEEP_DIVE_STANDARD.md`를 따른다.

## 6. LIFE SCENE

LIFE SCENE은 기사 요약, 정책 설명, 투자·소비·자기관리 조언이 아니다. 외부 제도·기관·서비스·절차가 만든 생활 문제를 현실적인 가상 서사로 보여준다.

- `SCENE_MAP.md`를 먼저 만든다.
- 인물의 원래 계획에서 시작한다.
- 장애 → 행동 → 직접 결과 → 다음 선택의 인과 사슬을 유지한다.
- 정확한 사실 경계와 가상 범위는 마지막 `SCENARIO NOTE`에서 분리한다.

세부 기준은 `LIFE_SCENE_STANDARD.md`를 따른다.

## 7. PROLOGUE와 EDITOR'S AFTERWORD

PROLOGUE는 본문을 요약하지 않고 이번 호의 시야를 넓게 연 뒤 일부 지점으로 좁혀 본문으로 넘긴다. 일반 기사·DEEP DIVE·LIFE SCENE이 닫힌 뒤 작성한다.

EDITOR'S AFTERWORD는 PROLOGUE까지 완료된 뒤 작성하는 실제 편집 후기다. 기사별 요약, 내부 제작 방법론 보고서, 폐기된 `EDITOR'S PICK`의 대체 이름으로 사용하지 않는다.

세부 기준은 `HEADLINE_PROLOGUE_AND_AFTERWORD_STANDARD.md`를 따른다.

## 8. 이미지 정책 — 현행 비활성

현재 주간 제작 경로에서는 새 이미지를 생성하지 않는다.

- 이미지 생성 여부는 제작 단계나 발행 게이트가 아니다.
- 이미지 prompt, `IMAGE_PLAN.md`, `jobs/image_job.json`, 이미지 handoff를 현행 제작에서 만들거나 실행하지 않는다.
- 이미지가 없다는 이유로 빈 placeholder를 남기지 않는다.
- 존재하지 않는 이미지 경로를 HTML에 넣지 않는다.
- 이전 회차 이미지를 새 회차 대표 이미지처럼 임의 재사용하지 않는다.
- 실제 사용 가능한 정적 자산이 별도로 확정된 경우에만 해당 자산을 사용할 수 있다.

`editorial/IMAGE_CONTRACT.md`와 `jobs/`의 이미지 문서는 과거 실험 기록이며 현행 실행 계약이 아니다.

## 9. 지면

`templates/ISSUE_TEMPLATE.html`은 DOM 시작점이지 완성 디자인이 아니다.

한 호에는 최소 세 가지 이상의 서로 다른 기사 지면 리듬이 있어야 한다. 비교표·수치 밴드·타임라인·근거 카드·인용·색면·여백·규칙선 등은 새 정보를 제공하거나 독서 호흡을 조절할 때만 사용한다.

이미지 없이도 Cover, LIFE SCENE, 각 기사 도입부와 전체 호가 완결된 매거진으로 보여야 한다.

## 10. 발행 차단

다음 중 하나라도 해당하면 발행하지 않는다.

- 기본 분야 일반 기사 누락
- 원고 품질 게이트 실패
- DEEP DIVE가 일반 기사와 같은 논리를 반복함
- LIFE SCENE 서사 실패
- PROLOGUE 또는 EDITOR'S AFTERWORD 역할 실패
- `LAYOUT_PLAN.md` 미완료
- 모든 기사 지면이 같은 템플릿 복제처럼 보임
- 실제 1440 / 1366 / 1024 / 390 화면 검수 미완료
- 깨진 링크 또는 존재하지 않는 필수 로컬 자산 참조

다음은 발행 차단 사유가 아니다.

- 새 생성 이미지 미확보
- 과거 image job 실패
- `CONTEXT_FAILURE`
- 이미지 attempt 미완료

최종 판정은 `editorial/ISSUE_QUALITY_GATE.md`가 소유한다.

## 11. 보존

- 제작 자산과 상태는 `work/YYYY-MM-DD/`에 둔다.
- 공개 회차는 `archive/YYYY-MM-DD/` 폴더 하나로 완결한다.
- 공개 회차는 기본적으로 `index.html`만 두고, 실제 사용하는 정적 자산이 있을 때만 `assets/`를 둔다.
- 과월호 코드를 새 회차에 그대로 복제하지 않는다.
- 중간 사본·버전별 HTML·임시 CSS·JS를 발행 폴더에 남기지 않는다.
