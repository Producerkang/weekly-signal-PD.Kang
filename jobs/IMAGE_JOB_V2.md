# IMAGE JOB v2.1 — 08:00 execution contract

이 문서는 월요일 08:00 이미지 작업의 최우선 실행 계약이다.

다른 문서에 이전 `CONTROL_ONLY`, `DISPATCH_BLOCKED`, `isolated image turn` 규칙이 남아 있더라도 08:00 실행에서는 이 문서를 우선한다.

## 핵심 원칙

1. `jobs/image_job.json`을 읽은 **같은 실행 턴에서 이미지 생성 도구를 호출할 수 있다.**
2. 별도 대화창·하위 턴·독립 IMAGE PLANE 생성은 요구하지 않는다.
3. 현재 queue item의 prompt 파일을 읽은 뒤, 그 **scene prompt 전문만 이미지 생성의 장면 지시로 사용**한다.
4. 이미지 호출 직전에 job, GitHub, queue, 상태, 저장 경로를 다시 요약하거나 장면 지시와 섞지 않는다.
5. `DO NOT DRAW GITHUB`, `DO NOT DRAW DASHBOARD`처럼 운영 개념을 부정문으로 scene prompt에 추가하지 않는다.
6. 한 번에 한 슬롯만 처리한다. 현재 슬롯의 prompt를 읽고 바로 이미지 생성으로 이어간다.
7. 생성 결과는 가능하면 `work/<issue>/image_runs/<slot>/`에 Git 보존한다. 임시 폴더만을 최종 저장소로 사용하지 않는다.
8. 저장 기능이 현재 실행 환경에서 즉시 사용할 수 없다는 이유만으로 **이미지 생성을 사전에 차단하지 않는다.** 생성 자체와 저장 단계는 분리해서 판단한다.
9. UI·문서·작업 트리·대시보드형 결과도 가능하면 Git에 진단 자료로 보존하며 `CONTEXT_FAILURE`로 판정한다.

## 실행 순서

```text
08:00 EXECUTION TURN
jobs/image_job.json 확인
→ READY queue item 선택
→ 그 item의 prompt 파일 읽기
→ prompt 내용을 재해석·요약하지 않음
→ 즉시 이미지 1장 생성
→ 결과 확보
→ 가능한 경우 Git work/.../image_runs/에 저장
→ PHOTO-SCENE / 품질 판정
→ 상태 갱신
→ 다음 슬롯
```

### 이미지 호출 직전 규칙

prompt를 읽은 뒤 이미지가 반환될 때까지는 다음 행동을 하지 않는다.

- 다른 repository 파일 읽기
- 상태 보고 작성
- 다음 슬롯 확인
- job 내용을 다시 설명
- Git 저장 경로를 장면 문장에 추가
- prompt를 운영 언어로 재작성

즉, **마지막 의미적 지시는 scene prompt**여야 한다.

## 저장 규칙

기본 목표 경로:

```text
work/<issue_start>/image_runs/<slot>/attempt-NN.<ext>
work/<issue_start>/image_runs/<slot>/attempt-NN.json
```

- 정상 후보와 `CONTEXT_FAILURE` 모두 보존 대상이다.
- 최종 채택 전에는 `archive/`에 넣지 않는다.
- 이미지 artifact가 현재 실행 환경에서 repository write 단계에 전달 가능하면 즉시 Git에 반영한다.
- artifact 전달이 불가능한 경우에는 저장 불가를 별도 상태로 기록하되, 그 사실을 이유로 이미지 생성 도구 호출 자체를 금지하지 않는다.

## 날짜 규칙

`run_date`와 `issue_start`는 서로 다른 필드다.

- `run_date`: 실제 08:00 실행 날짜
- `issue_start`: 작업 중인 매거진 회차 시작일

따라서 `run_date = 2026-08-10`, `issue_start = 2026-07-27`은 **2026-08-10에 기존 ISSUE 02 이미지 재시도를 실행한다**는 의미이며 오류가 아니다.

## CONTEXT_FAILURE

다음 결과는 `CONTEXT_FAILURE`다.

- GitHub/file tree 화면
- 작업 상태 문서
- dashboard/UI/report composition
- 여러 패널로 나뉜 작업 화면

처리:

1. 가능하면 결과 원본을 Git `image_runs/`에 보존한다.
2. 유효 사진 시도 횟수에는 포함하지 않는다.
3. 같은 prompt에 운영 부정문을 덧붙이지 않는다.
4. 다음 재시도에서도 원래 scene prompt를 그대로 사용한다.

## 폐기된 규칙

아래 규칙은 v2.1에서 폐기한다.

```text
controller_calls_image_tool = false
one_scene_per_turn = true
새 독립 IMAGE PLANE 필수
독립 턴 생성 불가 → DISPATCH_BLOCKED
job을 읽은 턴에서는 image tool 호출 금지
```

이 규칙들은 실제 08:00 예약 작업이 스스로 실행될 수 없게 만들었으므로 다시 적용하지 않는다.
