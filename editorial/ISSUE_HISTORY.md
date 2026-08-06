# WEEKLY SIGNAL Issue History

호별 발행 결과와 다음 회차에서 확인할 사항만 기록한다. 최신호 상태는 `latest.json`이 소유한다.

## Issue 01 — 2026.07.20–07.26

### 발행 경로

- `archive/2026-07-20/`

### 기록

제1호는 초기 형식 실험과 반복 개정을 거쳐 완성됐다. 당시 사용한 `Document Reportage`, Issue 01 전용 누적 CSS 패치, 해당 회차에만 맞춘 구조는 과월호 내부에 기록으로 남아 있으나 제2호 이후의 제작 기준이 아니다.

제1호에서 유지하는 것은 다음 원칙뿐이다.

- 섹션 기사는 생소한 용어를 처음 접하는 독자에게 정의·배경·작동 구조·영향을 충분히 설명한다.
- 발표·계획·계약·시행·성과를 구분한다.
- 일반 기사 본문은 디자인 없이도 독립적인 읽을 가치를 가져야 한다.
- LIFE SCENE은 생활에서 실제 겪을 법한 가상 서사를 통해 문제를 체감하게 한다.
- 이미지와 본문 출처의 역할을 구분한다.
- 회차는 하나의 완성된 정적 HTML로 보존한다.

### 폐기된 제1호 요소

다음 항목은 새 회차에 복제하지 않는다.

- `Document Reportage` 명칭과 문서·절차 이동형 작성법
- `reportage`, `document-reportage`, `reportage-*` 마크업과 CSS
- 르포의 `확인된 조치 / 아직 확인할 것` 고정 2카드 구조
- Issue 01 전용 정규화 HTML 템플릿
- Issue 01 전용 Layout Spec
- 날짜가 붙은 누적 patch CSS·JS
- 모든 기사를 하나의 Editor's Pick 결론으로 묶는 고정 방식
- 벡터·플랫·아이콘·아이소메트릭 이미지 방향

---

## 제2호 시작 전 기준 개편 — 2026.08.06

제2호부터 제작 체계를 다음처럼 확정했다.

### 제작 순서

1. 리서치
2. 섹션별 일반 기사 전체 작성·검증
3. DEEP DIVE 선정·작성
4. LIFE SCENE 선정·작성
5. EDITOR'S PICK 작성
6. 보조 지면·표지·이미지·HTML 제작

### DEEP DIVE

기존 르포를 폐기하고 기사 심화 지면으로 교체했다. 기사에 따라 쟁점 대립, 정책 필요성 논증, 구조 해부, 결과 시나리오, 역사·비교 중 적합한 방식을 선택한다. 모든 기사에 강제로 붙이지 않는다.

### LIFE SCENE

기사나 정책을 설명하는 지면이 아니라 독자가 “나도 겪을 수 있겠다”고 느낄 현실적인 가상 생활 서사다. 평범한 일상, 제한된 정보, 기대와 실제의 차이, 대기·이동·비용·정보 부족의 누적이 중심이며 정책 연결은 마지막 `SCENARIO NOTE`에서만 처리한다.

### EDITOR'S PICK

전체 제작이 끝난 뒤 리서치 전후 달라진 판단, 인상적인 사실, 오래 고민한 쟁점, 제작 후 남은 감정과 질문을 바탕으로 자율적으로 작성한다. 기사 요약이나 억지 공통 주제는 금지한다.

### 이미지

모든 주요 이미지는 회차별 래스터 생성 이미지로 제작한다. SVG, 벡터, 플랫 일러스트, 아이콘 콜라주, 아이소메트릭과 인포그래픽풍 장식 이미지는 사용하지 않는다.

### 현행 파일

- `editorial/EDITORIAL_STANDARD.md`
- `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
- `editorial/HEADLINE_AND_EDITORS_PICK_STANDARD.md`
- `editorial/IMAGE_DIRECTION.md`
- `editorial/LAYOUT_SYSTEM.md`
- `editorial/WEEKLY_RUNBOOK.md`
- `templates/TEMPLATE_CONTRACT.md`
- `templates/ISSUE_TEMPLATE.html`

과월호 HTML은 기록으로만 참고하고 새 회차는 `templates/ISSUE_TEMPLATE.html`의 깨끗한 셸에서 시작한다.

---

## 새 호 기록 템플릿

```markdown
## Issue NN — YYYY.MM.DD–MM.DD

### 발행 경로
- `archive/YYYY-MM-DD/`

### 최종 구성
- Cover Story:
- 일반 기사:
- DEEP DIVE:
- LIFE SCENE:
- EDITOR'S PICK:
- DATA:
- WATCH:
- SOURCES:

### 편집 확인 사항
-

### 다음 회차 적용 규칙
1.
```
