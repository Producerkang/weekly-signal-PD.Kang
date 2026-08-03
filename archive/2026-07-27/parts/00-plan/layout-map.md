# Issue 02 지면 지도

## 고정 순서

Cover → Contents → LIFE SCENE → Editor's Pick → Cover Story → Economy → Politics → Document Reportage → Society → Tech → Data → Watch → Sources & Method

Document Reportage는 관련 Politics 기사 뒤에 배치한다. 상단 내비게이션에서는 대표 섹션 중심으로 표시하되 문서 순서와 현재 위치를 정확히 반영한다.

## 공통 셸

- Deep Navy 표지·내비게이션
- Off-white 장문 지면
- Orange 진행 바·섹션 번호·핵심 문장
- 중앙 기준축, 장문 본문 최대 820px
- 상단 내비게이션만 sticky, 진행 바만 fixed
- 본문 단일 열
- Cover 외 표제 수동 줄바꿈 금지
- Cover 제목 line-height 1.40
- 좁은 화면 1열 전환

## 지면별 모듈

### Cover
- R&D 사업의 기존 관문이 열리고, 그 뒤에 사업계획서·심사·국회 제출 문서가 이어지는 공간적 장면
- 이미지 위 왼쪽 제목, 오른쪽에 문서·심사 흐름의 네거티브 스페이스
- Cover와 Cover Story 이미지는 다른 구도 사용

### Contents
- 6개 기사 꼭지와 5개 보조 지면을 한 화면 안에 표시
- 내부 스크롤 없음

### LIFE SCENE
- 프런트 스프레드 40:60 계열
- 3:4 이미지와 전기·가스 비용 비중을 확인하는 합성 제조업 장면
- SCENARIO NOTE 명시

### Editor's Pick
- `text-led`
- 한 문장의 결론, 근거 기사 3개, 독해 질문 3개
- 기사 요약 카드가 아니라 결론과 책임 이동의 관계를 설명

### Cover Story
- `split-opening` + `process-timeline` + 제한적 `evidence-grid`
- 제목 영역과 16:9 이미지 분할
- 기존 R&D 예타 → 비구축형 사업계획서·예산 배분조정 / 구축형 사업추진심사 분기
- 예산안 첨부서류와 국회 공개 지점을 별도 근거 블록으로 표시

### Economy
- `image-led-opening` + `process-timeline`
- 4:3 제조 현장 이미지
- 에너지 비용 비중 확인 → 연동 서면 → 지표 변동 → 조정 산식 → 대금 반영 순서
- 10%는 정의 카드 한 번만 사용

### Politics
- `split-opening` + `evidence-grid`
- 금융·통신·수사정보가 중앙 분석 허브로 들어오고 다시 기관으로 분기되는 16:9 장면
- 정보 활용 목적, 대상기관, 분석기관, 정보주체 권리의 역할을 네 칸으로 분리

### Document Reportage
- `document-reportage` + `process-timeline`
- 이미지 없음
- 신고서·지급정지 통지·채권소멸 공고·피해구제 신청·환급결정의 문서 경로
- 후단 카드 `확인된 조치 / 아직 확인할 것` 두 개

### Society
- `image-led-opening` + `evidence-grid`
- 3:2 작업장 휴식 장면
- 일반 건강수칙 / 감시통계 / 사업주 의무를 서로 다른 증거 역할로 배치
- 환자 수와 참여기관 수를 본문과 Data에서만 한 번씩 정의

### Tech
- `split-opening` + `metric-board`
- 평가 체험 공간과 뒤편의 서버·전문평가실을 한 장면에 배치
- 국민평가 / 전문가평가 / 벤치마크 / 안전성 검증을 구분
- 목표치와 성과를 시각적으로 분리

### Data
- 2열 6개 카드, 모바일 1열
- 서로 다른 단위를 막대 길이로 비교하지 않음

### Watch
- 카드마다 현재 상태·발표 주체·확인 문서·판단 기준·공식 링크

## 이미지 목록

각각 별도 파일로 제작한다.

1. `cover-rnd-gate.svg`
2. `life-scene-energy-contract.svg`
3. `cover-story-rnd-review.svg`
4. `economy-energy-linkage.svg`
5. `politics-fraud-data.svg`
6. `society-heat-rest.svg`
7. `tech-ai-evaluation.svg`

모든 이미지는 편집용 생성 이미지로 고지한다. 글자·숫자·로고·워터마크를 넣지 않으며 Document Reportage에는 이미지를 넣지 않는다.

## 화면 검수

- 1440×1200 이상
- 1366×1024
- 1024×1366
- 390×844

각 화면에서 순서, 제목 줄 수, 가로 넘침, 카드 읽기 순서, 이미지 크롭, 대체텍스트, 본문 폭을 직접 확인한다.
