# IMAGE JOB v2 — controller contract

`jobs/image_job.json`은 이미지 생성 프롬프트가 아니라 CONTROL PLANE manifest다.

## 절대 규칙

1. 이 파일을 읽은 동일 턴에서는 이미지 생성 도구를 호출하지 않는다.
2. queue item의 prompt 파일을 읽은 뒤에도 같은 턴에서 이미지 생성 도구를 호출하지 않는다.
3. CONTROL PLANE은 prompt의 **텍스트만** 새 독립 이미지 턴/작업으로 전달한다.
4. 새 이미지 턴에는 prompt 텍스트 외의 job, queue, GitHub, 경로, 상태, 저장 지시를 전달하지 않는다.
5. 독립 이미지 턴을 만들 수 없으면 `DISPATCH_BLOCKED`로 중단한다.
6. 이미지 반환 뒤에는 별도의 persistence 단계에서 반환 원본을 `work/<issue>/image_runs/<slot>/`에 저장하고 Git에 반영한다.
7. Git 보존 전에는 다음 슬롯으로 넘어가지 않는다.
8. `CONTEXT_FAILURE` 이미지도 진단 목적으로 `work/.../image_runs/`에 저장한다.

## 실행 순서

```text
CONTROL TURN
image_job.json 읽기
→ READY item 선택
→ prompt 파일 텍스트 확보
→ isolated image turn dispatch
→ CONTROL TURN에서는 image tool 호출 금지

ISOLATED IMAGE TURN
scene prompt text only
→ image generation
→ returned artifact

PERSISTENCE
returned artifact
→ work/YYYY-MM-DD/image_runs/<slot>/attempt-NN.<ext>
→ attempt-NN.json
→ Git commit/push
→ PHOTO-SCENE / quality verdict
→ job + IMAGE_PLAN 상태 갱신
```

## 실패 안전장치

- generator 턴에 repository/tool context가 들어갔으면 생성하지 않는다.
- 반환 artifact를 Git에 저장할 방법이 없으면 `PERSISTENCE_BLOCKED`다.
- 오염된 턴에서 부정 프롬프트를 덧붙여 재시도하지 않는다.
- 재시도는 항상 새 독립 이미지 턴이다.
