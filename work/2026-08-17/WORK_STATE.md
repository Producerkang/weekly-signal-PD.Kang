# ISSUE 05 WORK STATE

```text
ISSUE: 05
ISSUE_START: 2026-08-17
ISSUE_END: 2026-08-23
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
PUBLISHED_AT: 2026-08-31T10:07:00+09:00
ARCHIVE_PATH: archive/2026-08-17/
```

## 완료된 제작 단계

- Cover Story: `특별재난지역 ‘우선 선포’ 뒤, 복구의 돈과 절차는 어떻게 움직이는가` — COMPLETE
- Economy: `매도 사이드카의 5분, 주식시장에서 실제로 멈추는 것은 무엇인가` — COMPLETE
- Politics: `유죄판결이 없어도 범죄수익을 환수하는 절차가 생긴다` — COMPLETE
- Society: `학교 200m 안 집회, 이제 학교장의 판단이 경찰 절차와 연결된다` — COMPLETE
- Tech: `GPU만 늘리는 데이터센터에서 CPU·GPU·NPU를 함께 쓰는 인프라로` — COMPLETE
- CROSS-ARTICLE REVIEW — COMPLETE
- DEEP DIVE — `OMIT`, 독립 질문·새 주장·새 근거가 충분한 후보가 없어 억지 심화편을 만들지 않는 근거 기록 완료
- LIFE SCENE: `창문을 닫은 뒤에도 수업은 계속됐다` — COMPLETE
- PROLOGUE: `멈춘 5분과, 그 뒤에 남은 일들` — COMPLETE
- EDITOR'S AFTERWORD: `끝났다는 말 뒤에 남는 시간` — COMPLETE

## PUBLISH DESK

- `LAYOUT_PLAN.md` — COMPLETE
- 최종 DOM: `Cover → Contents → LIFE SCENE → PROLOGUE → Cover Story → Economy → Politics → Society → Tech → EDITOR'S AFTERWORD → Sources`
- DEEP DIVE는 OMIT이므로 DOM·Contents·내비게이션에서 제외
- `EDITOR'S PICK` 없음
- 이미지·placeholder·이전 회차 대표 이미지 재사용 없음
- 공통 Editorial Axis: `--content: 1040px`
- 발행 HTML: `archive/2026-08-17/index.html`

## 실제 화면 검수

2026-08-31 재개 검수에서 system Chromium을 Playwright의 `executable_path=/usr/bin/chromium`으로 직접 기동하고 HTML을 DOM에 주입해 실제 렌더링했다. 이전의 headless timeout 문제는 재현되지 않았다.

검수 뷰포트:

- 1440×1100 — PASS
- 1366×1000 — PASS
- 1024×1000 — PASS
- 390×844 — PASS

검수 결과:

- 네 화면 모두 `scrollWidth == clientWidth`; 가로 오버플로 없음
- viewport 밖으로 이탈한 요소 0개
- 1440·1366에서 TOC·본문·AFTERWORD·Sources의 외곽축 1040px 일치
- 1024에서는 가용 폭에 맞춰 정상 축소
- 390에서는 단일열 전환 및 3열 모바일 내비게이션 정상, 겹침 없음
- Contents·내비게이션 내부 앵커 정상
- DEEP DIVE DOM 없음
- `EDITOR'S PICK` 없음
- `<img>` 0개, 깨진 이미지·placeholder 없음
- EDITOR'S AFTERWORD 바로 뒤 Sources 배치 확인
- 실제 전체 페이지 스크린샷 시각 검수에서 제목·본문·정보 모듈·Sources의 잘림/겹침 없음

`python tools/validate_repository.py`는 현재 컨테이너가 GitHub DNS를 사용할 수 없어 저장소 checkout을 만들 수 없었으므로 실행하지 못했다. 이는 보조 검사이며, 최종 편집 검수는 위 실제 브라우저 렌더링으로 완료했다.

## 발행 반영

- `archive/2026-08-17/index.html` 생성
- `issues.json` Issue 05 추가
- `latest.json` Issue 05로 갱신
- `archive/index.html` latest issue 메타 갱신
- `editorial/ISSUE_HISTORY.md` Issue 05 기록
- 본 `WORK_STATE.md`를 `PUBLISHED`로 종료
