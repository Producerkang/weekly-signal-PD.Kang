const PATCH_MARKER = 'weekly-signal-layout-fix-2026-07-31-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.mode !== 'navigate') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!/\/archive\/\d{4}-\d{2}-\d{2}(?:\/|\/index\.html)$/.test(url.pathname)) return;

  event.respondWith((async () => {
    const response = await fetch(request,{cache:'no-store'});
    const type = response.headers.get('content-type') || '';
    if (!response.ok || !type.includes('text/html')) return response;

    let html = await response.text();
    if (html.includes(PATCH_MARKER)) {
      return new Response(html, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    }

    const css = `
/* ${PATCH_MARKER} */
#issue-splash{position:fixed;inset:0;z-index:5000;display:grid;place-items:center;background:#07101c;color:#fff;opacity:1;visibility:visible;transition:opacity .35s ease,visibility .35s ease}
#issue-splash.is-hidden{opacity:0;visibility:hidden;pointer-events:none}
.issue-splash-inner{text-align:center;padding:28px}.issue-splash-brand{font-size:13px;font-weight:950;letter-spacing:.2em}.issue-splash-line{width:58px;height:4px;margin:22px auto;background:#ff4a2f}.issue-splash-copy{font-family:var(--serif);font-size:clamp(24px,4vw,42px);line-height:1.3;margin:0}.issue-splash-status{margin-top:14px;font-size:12px;color:rgba(255,255,255,.68)}
.article-rail{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))!important}
.article-rail .rail-card:not(:has(.rail-number)){display:none!important}
.reportage>*,.reportage-layout,.reportage-prose,.reportage-evidence,.reportage-source{width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.reportage-title,.reportage-dek{width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.reportage-note{max-width:820px!important}
.dark .article-head .dek,.dark .article-body,.dark .article-body p,.dark .article-body h3,.dark .article-body blockquote,.dark .argument-card h3,.dark .source-links a{color:#f5f4ef!important}
.dark .argument-card p,.dark .muted{color:rgba(255,255,255,.76)!important}
.dark .rail-card:not(.dark-card){background:#f7f3ea!important;color:#101114!important}
.dark .rail-card:not(.dark-card) .rail-unit{color:#4d4a43!important}
#tech .article-head .dek,#tech .article-body,#tech .article-body p,#tech .article-body h3,#tech .argument-card h3,#tech .source-links a{color:#f5f4ef!important}
#tech .argument-card p{color:rgba(255,255,255,.76)!important}
#tech .source-links span:last-child{color:rgba(255,255,255,.64)!important}
#tech .verification-note,#tech .verification-note *{color:#101114!important}
.section:not(.dark):not(#tech) .article-head .dek,.section:not(.dark):not(#tech) .article-body,.section:not(.dark):not(#tech) .article-body p{color:#202124}
@media(max-width:660px){.reportage-evidence{grid-template-columns:1fr!important}.article-rail{grid-template-columns:1fr!important}}
@media(prefers-reduced-motion:reduce){#issue-splash{transition:none}}
`;

    const splash = `<div id="issue-splash" role="status" aria-live="polite" aria-label="WEEKLY SIGNAL 로딩 중"><div class="issue-splash-inner"><div class="issue-splash-brand">WEEKLY SIGNAL</div><div class="issue-splash-line"></div><p class="issue-splash-copy">이번 주의 신호를<br>정리하고 있습니다</p><div class="issue-splash-status">페이지를 불러오는 중입니다.</div></div></div>`;

    const script = `<script>(()=>{const splash=document.getElementById('issue-splash');if(!splash)return;const started=Number(sessionStorage.getItem('wsSplashStarted'))||Date.now();const remaining=Math.max(0,2000-(Date.now()-started));const minimum=new Promise(resolve=>setTimeout(resolve,remaining));const loaded=document.readyState==='complete'?Promise.resolve():new Promise(resolve=>window.addEventListener('load',resolve,{once:true}));Promise.all([minimum,loaded]).then(()=>{splash.classList.add('is-hidden');splash.setAttribute('aria-hidden','true');sessionStorage.removeItem('wsSplashStarted');setTimeout(()=>splash.remove(),450);});})();<\/script>`;

    html = html.replace('</style>', `${css}\n</style>`);
    html = html.replace('<body>', `<body>\n${splash}`);
    html = html.replace('</body>', `${script}\n</body>`);

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('cache-control', 'no-store');

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  })());
});
