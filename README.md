# WEEKLY SIGNAL

설명형 주간 웹 매거진의 편집 기준, 회차 제작 셸, 자동 검증기와 GitHub Pages 발행 파이프라인을 관리하는 저장소입니다.

## 최우선 원칙

- `main`은 **승인된 발행본 전용 브랜치**입니다.
- 새 회차는 반드시 `issue/YYYY-MM-DD` 브랜치에서 제작합니다.
- 미완성 회차를 `main/archive/`에 두지 않습니다.
- `archive/YYYY-MM-DD/`에는 `issues.json`에 등록된 완성 회차만 존재할 수 있습니다.
- 사용자 승인 전에는 PR을 병합하거나 Pages를 배포하지 않습니다.

세부 절차는 `editorial/PUBLISHING_PIPELINE.md`가 규정합니다.

## 저장소 구조

```text
/
├─ index.html
├─ latest.json
├─ issues.json
├─ archive/
│  ├─ index.html
│  └─ YYYY-MM-DD/
│     ├─ index.html
│     └─ assets/
├─ editorial/
│  ├─ PUBLISHING_PIPELINE.md
│  ├─ WEEKLY_RUNBOOK.md
│  ├─ ISSUE_QUALITY_GATE.md
│  └─ ...
├─ templates/
├─ tools/
│  ├─ validate_repository.py
│  └─ build_public_site.py
├─ publication/
│  └─ legacy-issues.json
└─ .github/workflows/
   ├─ quality-gate.yml
   └─ deploy-pages.yml
```

## 새 회차 제작 순서

1. 최신 `main`에서 `issue/YYYY-MM-DD` 브랜치를 만듭니다.
2. `editorial/PUBLISHING_PIPELINE.md`와 `editorial/WEEKLY_RUNBOOK.md`를 읽습니다.
3. Cover Story와 Economy·Politics·Society·Tech 일반 기사를 모두 조사·작성·검증합니다.
4. 일반 기사와 다른 질문·새 주장·새 출처가 있는 DEEP DIVE를 작성합니다.
5. 외부 제도·기관·서비스의 생활 문제를 다루는 LIFE SCENE을 작성합니다.
6. 전체 편집 후 EDITOR'S PICK을 작성합니다.
7. 실제 이미지 생성 모델로 고품질 래스터 이미지를 만들고 로컬 `assets/`에 저장합니다.
8. 완성된 CSS와 최소 JavaScript를 회차의 `index.html` 안에 넣습니다.
9. 다음 명령을 모두 통과시킵니다.

```bash
python -m pip install -r requirements-ci.txt
python tools/validate_repository.py
python tools/build_public_site.py
```

10. PR을 열고 `Publication quality gate`를 통과합니다.
11. 사용자에게 최종 화면을 보여주고 명시적 발행 승인을 받습니다.
12. 승인된 PR을 병합한 뒤 `Deploy approved publication` 워크플로를 수동 실행합니다.

## 기본 회차 구성

별도 사용자 지시가 없으면 다음 구성을 기본값으로 합니다.

- Cover Story 1편
- Economy 1편
- Politics 1편
- Society 1편
- Tech 1편
- DEEP DIVE 1~2편
- LIFE SCENE 1편
- EDITOR'S PICK 1편
- Sources

Cover Story는 분야별 일반 기사를 대신하지 않습니다. 기사 후보가 부족하면 리서치를 계속하며, 분야를 삭제해 얇은 회차를 발행하지 않습니다.

## 자동 차단 기준

`tools/validate_repository.py`는 다음 상태에서 실패합니다.

- 발행 목록에 없는 날짜 폴더가 `archive/`에 존재
- 분할 기사 HTML, 별도 CSS·JS 또는 런타임 콘텐츠 조립 사용
- 외부 Canva·스톡·이미지 URL 사용
- 회차별 로컬 래스터 자산 누락
- 필수 기사·DEEP DIVE·주요 이미지 누락
- 저해상도·저용량 이미지 또는 동일 이미지 재사용
- 내부 앵커 오류, 플레이스홀더, 잡지형 지면 모듈 부족

`tools/build_public_site.py`는 검증된 공개 파일만 `_site/`에 복사합니다. 편집 문서·템플릿·도구·작업 파일은 Pages 아티팩트에 포함하지 않습니다.

## 회차 완결 원칙

새 회차의 공개 폴더는 다음 두 항목만 가집니다.

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
```

- CSS와 최소 JavaScript는 `index.html`에 내장합니다.
- 기사 본문을 `fetch()`나 별도 파일로 불러오지 않습니다.
- 이미지는 `./assets/...` 상대경로만 사용합니다.
- 허용 이미지 형식은 WebP·PNG·JPEG입니다.
- SVG, 벡터, 플랫 일러스트, 아이콘 콜라주와 외부 이미지 직접 연결은 금지합니다.

## GitHub Pages

배포는 `.github/workflows/deploy-pages.yml`의 수동 워크플로만 사용합니다. 저장소 설정에서 Pages의 Source를 `GitHub Actions`로 지정해야 합니다. 기존 `main / (root)` 직접 배포 방식은 사용하지 않습니다.

제1호는 파이프라인 도입 전 발행 기록으로 보존하며, 신규 회차의 구조 게이트는 소급 적용하지 않습니다. 예외 목록은 `publication/legacy-issues.json` 한 곳에서만 관리합니다.
