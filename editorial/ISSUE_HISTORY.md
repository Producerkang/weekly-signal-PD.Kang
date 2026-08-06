# WEEKLY SIGNAL Issue History

이 문서는 발행 결과와 실패 원인만 기록한다. 새 회차의 작성·디자인 기준은 아니며 제작 시작 단계에서 형식 참고용으로 사용하지 않는다. 최신호 상태는 `latest.json`이 소유한다.

## Issue 01 — 2026.07.20–07.26

### 발행 경로

- `archive/2026-07-20/`

### 상태

- 발행 유지

### 유지할 품질 기준

- 생소한 용어를 처음 접하는 독자에게 정의·배경·작동 구조·영향을 충분히 설명한다.
- 발표·계획·계약·시행·성과를 구분한다.
- 일반 기사 본문은 디자인 없이도 독립적인 읽을 가치를 가진다.
- LIFE SCENE은 생활에서 실제 겪을 법한 가상 서사를 통해 구조적 문제를 체감하게 한다.
- 한 호 전체에 분야별 기사, 지면 전환과 시각적 밀도가 있다.
- 이미지와 기사 근거의 역할을 구분한다.

제1호 코드는 새 회차에 복제하지 않는다. 다만 새 회차 발행 전 매거진 밀도·섹션 리듬·이미지 품질을 비교하는 기준으로 확인한다.

---

## Issue 02 초안 — 2026.07.27–08.02

### 상태

- 2026년 8월 6일 최초 발행 시도
- 품질 검수 실패
- `issues.json`과 `latest.json`에서 제거
- 최초 파일은 삭제하고 Git 커밋 이력으로만 보존

### 최초 실패 원인

1. Cover Story 외 일반 기사가 Politics와 Tech 두 편뿐이어서 Economy와 Society가 누락됐다.
2. DEEP DIVE가 Cover Story와 같은 인과를 반복했다.
3. LIFE SCENE이 외부 제도 문제보다 개인 위험관리 교훈으로 귀결됐다.
4. EDITOR'S PICK이 두 번째 Contents가 됐다.
5. 주요 이미지가 저디테일 WebP였고 실제 생성 품질 검수가 없었다.
6. 기사 레이아웃이 반복됐다.
7. 실제 브라우저 화면과 제1호 대비 검수 없이 발행 목록을 갱신했다.

---

## Issue 02 재제작본 — 2026.07.27–08.02

### 보존 경로

- `archive/2026-07-27/`

### 상태

- 2026년 8월 6일 전면 재제작
- 원고·지면·출처·발행 메타데이터 제작 완료
- PR #13으로 `main` 병합
- 최종 이미지 자산 게이트 실패로 공개 발행 보류
- `issues.json`과 `latest.json`은 Issue 01로 복원

### 최종 구성

- Cover Story: 폭염 위기경보 ‘심각’ 이후 취약계층·일터·쉼터·기반시설의 운영 질문
- Economy: 석유 최고가격 동결과 정유사 공급가격·주유소 판매가격의 구분
- Politics: 한·브라질 7개 MOU와 한·메르코수르 협상의 문서 단계
- Society: 소아 야간·휴일 진료기관 5곳 추가와 실제 운영시간·연계 조건
- Tech: ISO 23247-5·6 제조 디지털 트윈 국제표준과 상호운용성
- DEEP DIVE: 체감온도 33도 이상 휴식 의무의 측정·기록·대체조치·작업중지 권한
- LIFE SCENE: 지역에서 야간 소아진료를 찾는 보호자의 시간표와 이동 문제
- EDITOR'S PICK: 시설 수보다 운영시간을 먼저 확인하게 된 편집 판단
- SOURCES: 중앙부처·국가법령정보센터·ISO 원문 중심

### 통과한 품질 게이트

- Cover Story + Economy + Politics + Society + Tech 기본 구성
- DEEP DIVE와 Cover Story의 질문·근거 분리
- LIFE SCENE의 외부 서비스 문제 중심 서사
- EDITOR'S PICK 비요약성
- 수치 밴드, 2열 도입, 타임라인, 서비스 그리드, 표준 페어 등 레이아웃 다양성
- 중복 ID, 누락 앵커, 예시 문구, 깨진 문자 정적 검사
- GitHub Pages 빌드

### 최종 보류 사유

- 생성 이미지가 `archive/2026-07-27/assets/`의 고해상도 WebP·PNG·JPEG 파일로 저장되지 않았다.
- 본문이 외부 `design.canva.ai` 주소를 참조하고 있으며 해당 주소가 안정적인 HTTP 200 원본 파일 응답을 보장하지 않았다.
- Canva 생성 후보의 1920×1080 캔버스는 확인했으나 저장소에 커밋할 원본 래스터 내보내기 파일을 확보하지 못했다.
- 이는 `editorial/IMAGE_DIRECTION.md`의 로컬 자산 경로, 원본 해상도, 파일 용량 및 육안 검사 기준을 충족하지 않는다.

### 공개 발행 재개 조건

1. 표지·LIFE SCENE·Cover Story·Economy·Politics·Society·Tech용 고해상도 래스터 7개를 `archive/2026-07-27/assets/`에 저장한다.
2. 모든 이미지 참조를 `./assets/...`로 교체한다.
3. 파일 해상도·용량·생성 오류·데스크톱·모바일 크롭을 다시 검수한다.
4. 통과 후 `issues.json`과 `latest.json`에 Issue 02를 다시 등록한다.

---

## 새 호 기록 템플릿

```markdown
## Issue NN — YYYY.MM.DD–MM.DD

### 발행 경로
- `archive/YYYY-MM-DD/`

### 상태
- 발행 유지 / 정정 / 검수 실패 / 공개 보류

### 최종 구성
- Cover Story:
- Economy:
- Politics:
- Society:
- Tech:
- DEEP DIVE:
- LIFE SCENE:
- EDITOR'S PICK:
- DATA:
- WATCH:
- SOURCES:

### 품질 게이트 확인
- 기본 구성:
- DEEP DIVE 차별성:
- LIFE SCENE 적합성:
- EDITOR'S PICK 비요약성:
- 이미지 육안 검수:
- 레이아웃 다양성:
- 실제 화면 검수:

### 다음 회차 적용 규칙
1.
```
