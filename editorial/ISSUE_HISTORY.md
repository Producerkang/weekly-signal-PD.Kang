# WEEKLY SIGNAL Issue History

이 문서는 발행이 끝난 회차의 결과만 기록한다. 새 회차의 작성·디자인 기준은 아니며, 제작 시작 단계에서 형식 참고용으로 사용하지 않는다. 최신호 상태는 `latest.json`이 소유한다.

## Issue 01 — 2026.07.20–07.26

### 발행 경로

- `archive/2026-07-20/`

### 기록

제1호는 초기 형식 실험과 반복 개정을 거쳐 완성됐다. 해당 회차의 HTML과 CSS는 과월호 내부에 발행 기록으로만 보존한다. 제2호 이후에는 제1호 코드·구식 지면·누적 패치를 복제하지 않는다.

제1호에서 유지하는 원칙:

- 생소한 용어를 처음 접하는 독자에게 정의·배경·작동 구조·영향을 충분히 설명한다.
- 발표·계획·계약·시행·성과를 구분한다.
- 일반 기사 본문은 디자인 없이도 독립적인 읽을 가치를 가진다.
- LIFE SCENE은 생활에서 실제 겪을 법한 가상 서사를 통해 문제를 체감하게 한다.
- 이미지와 기사 근거의 역할을 구분한다.
- 회차는 하나의 완성된 정적 HTML로 보존한다.

제1호의 나머지 형식은 현행 기준이 아니다. 폐기 여부와 현재 금지 항목은 `EDITORIAL_STANDARD.md`와 `WEEKLY_RUNBOOK.md`만 따른다.

---

## 제2호 시작 전 기준 개편 — 2026.08.06

### 제작 순서

1. 리서치
2. 섹션별 일반 기사 전체 작성·검증
3. DEEP DIVE 선정·작성
4. LIFE SCENE 선정·작성
5. EDITOR'S PICK 작성
6. 보조 지면·표지·이미지·HTML 제작

### DEEP DIVE

기존 르포 지면을 폐기하고 기사 심화 지면으로 교체했다. 기사에 따라 쟁점 대립, 정책 필요성 논증, 구조 해부, 결과 시나리오, 역사·비교 중 적합한 방식을 선택한다. 제작은 일반 기사 전체가 완성된 뒤 진행하며, 최종 HTML에서는 관련 일반 기사 바로 뒤에 배치한다.

### LIFE SCENE

기사나 정책을 설명하는 지면이 아니라 독자가 “나도 겪을 수 있겠다”고 느낄 현실적인 가상 생활 서사다. 평범한 일상, 제한된 정보, 기대와 실제의 차이, 대기·이동·비용·정보 부족의 누적이 중심이다. 제목과 부제도 생활 장면을 중심으로 쓰며 정책 연결은 마지막 `SCENARIO NOTE`에서만 처리한다.

### EDITOR'S PICK

전체 원고가 완성된 뒤 리서치 전후 달라진 판단, 인상적인 사실, 오래 고민한 쟁점, 제작 후 남은 감정과 질문을 바탕으로 자율적으로 작성한다. 기사 요약이나 억지 공통 주제는 금지한다.

### 이미지

모든 주요 이미지는 회차별 래스터 생성 이미지로 제작한다. SVG, 벡터, 플랫 일러스트, 아이콘 콜라주, 아이소메트릭과 인포그래픽풍 장식 이미지는 사용하지 않는다.

### 현행 기준 위치

- `editorial/EDITORIAL_STANDARD.md`
- `editorial/SECTION_AND_DEEP_DIVE_STANDARD.md`
- `editorial/HEADLINE_AND_EDITORS_PICK_STANDARD.md`
- `editorial/VOICE_AND_TONE.md`
- `editorial/SOURCE_POLICY.md`
- `editorial/IMAGE_DIRECTION.md`
- `editorial/LAYOUT_SYSTEM.md`
- `editorial/WEEKLY_RUNBOOK.md`
- `templates/TEMPLATE_CONTRACT.md`
- `templates/NAVIGATION_CONTRACT.md`
- `templates/ISSUE_TEMPLATE.html`

---

## Issue 02 — 2026.07.27–08.02

### 발행 경로

- `archive/2026-07-27/`

### 최종 구성

- Cover Story: `코스피 급락은 왜 반도체에서 더 커졌나`
- 일반 기사: `투표용지 부족은 왜 특검 사안이 됐나`, `EU는 AI 공장을 일곱 곳으로 늘렸지만, 아직 지은 것은 없다`
- DEEP DIVE: `순환 투자와 지수 집중은 어떻게 같은 날 낙폭을 키웠나`
- LIFE SCENE: `오전 10시 14분, 주문 버튼이 멈췄다`
- EDITOR'S PICK: `멈춘 20분이 가르쳐 준 것`
- DATA: 미사용
- WATCH: 미사용
- SOURCES: 기사별 직접 근거와 통합 Sources 지면

### 편집 확인 사항

- 제1호 HTML과 누적 패치 CSS를 복제하지 않고 현행 `ISSUE_TEMPLATE.html`의 깨끗한 셸에서 제작했다.
- DEEP DIVE를 Cover Story 바로 뒤에 배치하고 목차·내비게이션·DOM 순서를 일치시켰다.
- 발표·계획·법안 통과·집행·성과를 구분했다.
- 투표용지 부족이라는 확인된 관리 실패와 별도 증거가 필요한 부정 의혹을 분리했다.
- EU AI 기가팩토리 7곳을 가동 시설이 아닌 공모·선정 전 계획으로 표시했다.
- 모든 주요 이미지는 해당 회차용 WebP 래스터 생성 이미지로 제작하고 실제 현장 오인을 막는 캡션을 넣었다.
- `archive/index.html`은 `issues.json`을 동적으로 읽으므로 새 회차 정보는 목록 데이터 갱신으로 반영했다.

### 다음 회차 적용 규칙

1. 시장 급변 기사에서는 가격 변화, 거래 중단 제도, 실물 지표와 지수 집중도를 분리해 설명한다.
2. 수사·특검 기사에서는 법안 통과, 공포, 임명, 수사와 결론의 상태를 각각 구분한다.
3. 대규모 인프라 발표는 시설 수보다 공모·계약·재원·전력·조달과 실제 가동 시점을 우선 확인한다.

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
