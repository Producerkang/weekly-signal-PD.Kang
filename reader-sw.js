const PATCH_MARKER = 'weekly-signal-layout-fix-2026-07-31-v6';

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
.article-rail{display:none!important}
.article-shell{display:block!important;width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.article-main{width:100%!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.article-head{width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.reportage>*,.reportage-layout,.reportage-prose,.reportage-evidence,.reportage-source{width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.reportage-title,.reportage-dek{width:min(820px,100%)!important;max-width:820px!important;margin-left:auto!important;margin-right:auto!important}
.reportage-note{max-width:820px!important}
.dark .article-head .dek,.dark .article-body,.dark .article-body p,.dark .article-body h3,.dark .article-body blockquote,.dark .argument-card h3,.dark .source-links a{color:#f5f4ef!important}
.dark .argument-card p,.dark .muted{color:rgba(255,255,255,.76)!important}
#tech .article-head .dek,#tech .article-body,#tech .article-body p,#tech .article-body h3,#tech .argument-card h3,#tech .source-links a{color:#f5f4ef!important}
#tech .argument-card p{color:rgba(255,255,255,.76)!important}
#tech .source-links span:last-child{color:rgba(255,255,255,.64)!important}
#tech .verification-note,#tech .verification-note *{color:#101114!important}
.section:not(.dark):not(#tech) .article-head .dek,.section:not(.dark):not(#tech) .article-body,.section:not(.dark):not(#tech) .article-body p{color:#202124}
.issue-content-rewritten .article-body h3{margin-top:2.25em!important}
.issue-content-rewritten .article-body h3:first-child{margin-top:0!important}
.issue-content-rewritten .article-body p{font-size:17px!important;line-height:1.9!important}

/* Headline system: edit copy first, then scale type; do not force ordinary line breaks. */
.headline-opening-patch .article-head h2{
  font-size:clamp(36px,4.35vw,56px)!important;
  line-height:1.06!important;
  letter-spacing:-.04em!important;
  word-break:keep-all!important;
  overflow-wrap:normal!important;
  text-wrap:pretty!important;
}
.headline-opening-patch .reportage-title{
  font-size:clamp(34px,4vw,52px)!important;
  line-height:1.08!important;
  letter-spacing:-.035em!important;
  word-break:keep-all!important;
  overflow-wrap:normal!important;
  text-wrap:pretty!important;
}
.headline-opening-patch .opening h2{
  font-size:clamp(34px,4.2vw,54px)!important;
  line-height:1.04!important;
  word-break:keep-all!important;
  text-wrap:pretty!important;
}
.headline-opening-patch .opening .prose h3,
.headline-opening-patch .editor-note .big,
.headline-opening-patch .toc-copy strong,
.headline-opening-patch .card-title{
  word-break:keep-all!important;
  overflow-wrap:normal!important;
  text-wrap:pretty!important;
}
.headline-opening-patch .opening .prose h3{
  font-size:clamp(22px,2.4vw,30px)!important;
  line-height:1.18!important;
  margin-top:1.7em!important;
  margin-bottom:.45em!important;
}
.headline-opening-patch .opening .prose h3:first-child{margin-top:0!important}
.headline-opening-patch .editor-note .big{font-size:clamp(24px,3vw,36px)!important;line-height:1.12!important}
.headline-opening-patch .cover h1{
  font-size:clamp(48px,6vw,84px)!important;
  line-height:1.1!important;
  letter-spacing:-.05em!important;
  word-break:keep-all!important;
}

@media(max-width:1024px){
  .headline-opening-patch .article-head h2{font-size:clamp(34px,5vw,50px)!important}
  .headline-opening-patch .reportage-title{font-size:clamp(32px,4.7vw,46px)!important}
}
@media(max-width:660px){
  .reportage-evidence{grid-template-columns:1fr!important}
  .headline-opening-patch .article-head h2{font-size:clamp(31px,9.2vw,42px)!important;line-height:1.1!important}
  .headline-opening-patch .reportage-title{font-size:clamp(30px,8.8vw,40px)!important;line-height:1.1!important}
  .headline-opening-patch .cover h1{font-size:clamp(42px,12vw,60px)!important;line-height:1.1!important}
}
`;

    html = html.replace('</style>', `${css}\n</style>`);
    if(/data-issue=["']2026-07-20["']/.test(html)){
      html = html.replace('</body>', `<script src="../../current-issue-rewrite.js?v=20260731-1"><\/script>\n<script src="../../headline-opening-patch.js?v=20260731-1"><\/script>\n</body>`);
    }

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