import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const url = process.argv[2] || 'http://127.0.0.1:8000/archive/2026-07-27/index.html';
const outDir = process.argv[3] || 'qa-artifacts';
await fs.mkdir(outDir, { recursive: true });

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 1200 },
  { name: 'desktop-1366', width: 1366, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 1366 },
  { name: 'mobile-390', width: 390, height: 844 },
];
const requiredIds = ['cover','contents','life-scene','editors-pick','cover-story','economy','politics','reportage','society','tech','data','watch','sources'];
const articleTitles = ['#cover-story h2','#economy h2','#politics h2','#reportage h2','#society h2','#tech h2'];
const results = [];
let failed = false;
const browser = await chromium.launch({ headless: true });
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
    const consoleErrors = [];
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
    await page.evaluate(async () => {
      await Promise.all([...document.images].map(img => img.complete ? Promise.resolve() : new Promise(resolve => { img.addEventListener('load', resolve, { once:true }); img.addEventListener('error', resolve, { once:true }); })));
      if (document.fonts?.ready) await document.fonts.ready;
    });
    const checks = await page.evaluate(({ requiredIds, articleTitles, viewport }) => {
      const lineCount = el => {
        if (!el) return null;
        const style = getComputedStyle(el);
        const lh = parseFloat(style.lineHeight);
        return Number.isFinite(lh) && lh > 0 ? Math.round(el.getBoundingClientRect().height / lh) : null;
      };
      const ids = requiredIds.map(id => ({ id, top: document.getElementById(id)?.offsetTop ?? null }));
      const missingIds = ids.filter(x => x.top === null).map(x => x.id);
      const orderOk = ids.every((x, i) => i === 0 || x.top > ids[i - 1].top);
      const images = [...document.images];
      const brokenImages = images.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.getAttribute('src'));
      const missingAlt = images.filter(img => !img.hasAttribute('alt') || !img.getAttribute('alt').trim()).map(img => img.getAttribute('src'));
      const brOutsideCover = [...document.querySelectorAll('br')].filter(br => !br.closest('#cover')).length;
      const coverTitle = document.querySelector('#cover h1');
      const coverStyle = getComputedStyle(coverTitle);
      const coverRatio = parseFloat(coverStyle.lineHeight) / parseFloat(coverStyle.fontSize);
      const titleLines = Object.fromEntries(articleTitles.map(sel => [sel, lineCount(document.querySelector(sel))]));
      const desktopTitleLimitOk = viewport.width < 1200 || Object.values(titleLines).every(n => n !== null && n <= 2);
      const contents = document.getElementById('contents');
      const contentsFitsDesktop = viewport.width < 1200 || contents.getBoundingClientRect().height <= viewport.height - 58;
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        missingIds, orderOk,
        h1Count: document.querySelectorAll('h1').length,
        brOutsideCover,
        imageCount: images.length,
        brokenImages, missingAlt,
        reportageImageCount: document.querySelectorAll('#reportage img').length,
        dataCardCount: document.querySelectorAll('.data-card').length,
        watchCardCount: document.querySelectorAll('.watch-card').length,
        editorPickId: Boolean(document.getElementById('editors-pick')),
        coverLineHeightRatio: Number(coverRatio.toFixed(3)),
        coverLineHeightOk: Math.abs(coverRatio - 1.4) < 0.03,
        titleLines, desktopTitleLimitOk,
        contentsHeight: Math.round(contents.getBoundingClientRect().height),
        contentsFitsDesktop,
      };
    }, { requiredIds, articleTitles, viewport });
    checks.consoleErrors = consoleErrors;
    const pass = !checks.horizontalOverflow && checks.missingIds.length === 0 && checks.orderOk && checks.h1Count === 1 && checks.brOutsideCover === 0 && checks.brokenImages.length === 0 && checks.missingAlt.length === 0 && checks.reportageImageCount === 0 && checks.dataCardCount === 6 && checks.watchCardCount === 6 && checks.editorPickId && checks.coverLineHeightOk && checks.desktopTitleLimitOk && checks.contentsFitsDesktop && consoleErrors.length === 0;
    if (!pass) failed = true;
    results.push({ viewport, pass, checks });
    await page.screenshot({ path: path.join(outDir, `${viewport.name}.png`), fullPage: true });
    await page.close();
  }
} finally {
  await browser.close();
}
await fs.writeFile(path.join(outDir, 'qa-results.json'), JSON.stringify({ url, generatedAt: new Date().toISOString(), failed, results }, null, 2));
for (const result of results) console.log(JSON.stringify(result));
if (failed) process.exit(1);
