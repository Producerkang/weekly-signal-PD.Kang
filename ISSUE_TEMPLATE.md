# WEEKLY SIGNAL 다음 호 템플릿

이 템플릿은 기사 문구가 아니라 지면 구조와 검증 필드를 재사용한다. 대괄호 안을 해당 호의 1차 자료로 채우고, 확인되지 않은 값은 추정하지 않는다.

## 1. 르포 후속 카드

```html
<div class="reportage-evidence reportage-evidence--two">
  <div class="reportage-card">
    <h4>확인된 조치</h4>
    <ul>
      <li>[공식 문서에서 확인된 완료 조치]</li>
      <li>[시행일·의결·계약 등 확인된 상태]</li>
    </ul>
  </div>
  <div class="reportage-card">
    <h4>아직 확인할 것</h4>
    <ul>
      <li>[후속 문서와 발표 주체]</li>
      <li>[책임 주체·기한·평가 기준]</li>
    </ul>
  </div>
</div>
```

`NEXT RECORDS`와 반복형 `EDITORIAL CHECK`는 사용하지 않는다.

## 2. DATA

핵심 수치는 정확히 6개를 선정한다. 정치·경제·사회·기술 가운데 같은 분야의 숫자가 지면을 과도하게 점유하지 않도록 조정한다.

```html
<div class="data-metrics-grid">
  <article class="data-metric-card">
    <span class="metric-section">[분야]</span>
    <div class="metric-value"><span class="no-break">[숫자+단위]</span></div>
    <h3>[숫자의 의미]</h3>
    <p>[직접 비교하거나 과장하지 않고 설명한 한 문장]</p>
    <span class="metric-kind">[발표·통계·공시·의결·집계]</span>
  </article>
</div>
```

데스크톱 2열, 모바일 1열을 유지한다. 단위가 다른 수치를 막대 길이로 비교하지 않는다.

## 3. NEXT WEEK WATCH

```html
<article class="watch watch-record" data-watch-state="pending">
  <div class="watch-topline">
    <div class="when">[분야 / 문서 유형]</div>
    <span class="watch-state">[현재 상태]</span>
  </div>
  <h3>[다음 판단을 바꿀 질문]</h3>
  <dl class="watch-meta">
    <div><dt>발표 주체</dt><dd>[기관·기업]</dd></div>
    <div><dt>확인 문서</dt><dd>[정확한 문서명 또는 유형]</dd></div>
    <div><dt>판단 기준</dt><dd>[확인되면 판단이 어떻게 달라지는지]</dd></div>
  </dl>
  <a class="watch-source" href="[공식 1차 자료 URL]" target="_blank" rel="noopener">공식 문서 열기 ↗</a>
</article>
```

## 4. SOURCES

발행면에는 실제로 사용한 1차 자료만 넣는다.

```html
<div class="source">
  <div class="org">[기관]</div>
  <a href="[공식 문서 URL]" target="_blank" rel="noopener">[문서 제목]</a>
  <time>[YYYY.MM.DD]</time>
</div>
```

내부 선정 기준, 작성 순서, 검증 절차 설명은 SOURCES에 넣지 않는다.

## 5. 숫자 표기

숫자와 단위는 반드시 같은 요소 안에 넣는다.

```html
<span class="no-break">6,804억 원</span>
<span class="no-break">198건</span>
<span class="no-break">12.5%</span>
```

## 6. 발행 전 검증

렌더링 후 브라우저 콘솔에서 다음을 실행한다.

```js
window.validateWeeklySignalIssue()
```

반환값의 `passed`가 `true`이고, 문서 루트의 `data-editorial-validation` 값이 `pass`일 때만 발행한다.
