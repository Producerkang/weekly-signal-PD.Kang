# WEEKLY SIGNAL 발행 파이프라인

이 문서는 회차 제작 파일이 공개 사이트에 노출되는 경로를 규정한다. 편집 품질 기준과 별개로, 이 절차를 우회한 회차는 발행본으로 인정하지 않는다.

## 1. 브랜치 역할

### `main`

- 승인된 발행본과 현행 제작 기준만 둔다.
- `archive/YYYY-MM-DD/`에는 `issues.json`에 등록된 완성 회차만 존재해야 한다.
- 미완성 HTML, 외부 이미지 URL, 임시 CSS·JS, 분할 기사 파일을 두지 않는다.
- 새 회차를 `main`에서 직접 제작하지 않는다.

### `issue/YYYY-MM-DD`

- 새 회차 전용 작업 브랜치다.
- 항상 최신 `main`에서 만든다.
- 조사 메모와 중간 산출물은 이 브랜치에서만 관리한다.
- 최종 PR에는 공개 완성본과 필요한 기준 변경만 남긴다.

## 2. 회차 상태

### A. 조사·집필 중

- 공개 경로인 `archive/`에 회차 폴더를 만들지 않는다.
- 필요하면 작업 브랜치의 `work/YYYY-MM-DD/`를 사용한다.
- 이미지 후보와 중간 렌더링도 작업 브랜치에만 둔다.

### B. 발행 후보

모든 원고·이미지·지면과 실제 화면 검수가 끝난 뒤에만 다음 구조를 만든다.

```text
archive/YYYY-MM-DD/
├─ index.html
└─ assets/
   ├─ cover.webp
   └─ ...
```

회차 루트에는 `index.html`과 `assets/` 외 파일을 두지 않는다. CSS와 최소 JavaScript는 `index.html`에 내장한다.

### C. 승인 대기

1. `issues.json`과 `latest.json`을 마지막에 갱신한다.
2. `python tools/validate_repository.py`를 실행한다.
3. `python tools/build_public_site.py`를 실행한다.
4. PR을 열고 자동 `Publication quality gate`를 통과한다.
5. 완성 화면과 이미지 전체를 사용자에게 검토받는다.

사용자 승인 전에는 PR을 병합하지 않는다.

### D. 발행

1. 승인된 PR만 `main`에 병합한다.
2. GitHub Actions의 `Deploy approved publication`을 수동 실행한다.
3. 입력란에 `PUBLISH`를 정확히 입력한다.
4. 배포 후 공개 URL에서 최신호·과월호·모바일 화면을 다시 확인한다.

`main` 병합과 Pages 배포는 서로 다른 단계다. 병합만으로 자동 발행하지 않는다.

## 3. 자동 차단 항목

`tools/validate_repository.py`는 다음을 오류로 처리한다.

- `issues.json`에 없는 날짜 폴더가 `archive/`에 존재
- 발행 목록의 회차 폴더 또는 파일 누락
- `latest.json`과 `issues.json` 첫 항목 불일치
- 회차 루트의 별도 CSS·JS·분할 HTML·매니페스트
- `fetch()`나 `XMLHttpRequest`를 통한 기사 조립
- 외부 Canva·스톡·이미지 URL
- 로컬 `assets/`에 없는 이미지
- SVG와 비이미지 파일
- 필수 기사·DEEP DIVE·주요 이미지 누락
- 저해상도·저용량 이미지와 동일 이미지 재사용
- 내부 앵커 오류와 미완성 플레이스홀더
- 잡지형 지면 모듈 부족

제1호는 파이프라인 도입 전 발행 기록이므로 `publication/legacy-issues.json`에만 예외로 명시한다. 새 회차 예외를 추가하지 않는다.

## 4. GitHub Pages 배포 방식

공개 사이트는 저장소 루트를 그대로 노출하지 않고 `tools/build_public_site.py`가 만든 `_site/` 아티팩트만 배포한다.

공개 아티팩트에는 다음만 포함한다.

- `/index.html`
- `/latest.json`
- `/issues.json`
- `/archive/index.html`
- `issues.json`에 등록된 회차 폴더

`editorial/`, `templates/`, `tools/`, `.github/`, 작업 브랜치의 중간 파일은 공개 아티팩트에 포함하지 않는다.

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**는 `GitHub Actions`로 설정해야 한다. 기존 `Deploy from a branch` 방식은 사용하지 않는다.

## 5. 저장소 보호 설정

가능한 경우 `main` 브랜치에 다음 보호 규칙을 적용한다.

- PR 없이 직접 푸시 금지
- `Publication quality gate` 통과 필수
- 최소 1명 승인 필수
- 관리자 우회 금지

브랜치 보호는 저장소 설정이므로 문서나 워크플로 파일만으로 대체할 수 없다.

## 6. 실패 처리

품질 또는 자산 검수에 실패하면:

1. PR을 병합하지 않는다.
2. `archive/`와 발행 메타데이터를 `main`에 남기지 않는다.
3. 실패본은 작업 브랜치와 Git 이력에서만 확인한다.
4. 같은 회차 브랜치에서 원고·이미지·HTML을 다시 만든다.

외부 이미지가 준비되지 않았거나 실제 렌더링을 확인하지 못한 상태는 발행 보류가 아니라 **발행 불가**다.
