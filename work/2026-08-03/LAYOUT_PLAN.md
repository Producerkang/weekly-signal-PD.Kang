# ISSUE 03 LAYOUT PLAN

STATUS: COMPLETE
ISSUE: 03
ISSUE_START: 2026-08-03
ISSUE_END: 2026-08-09

## 1. Final DOM order

1. Cover
2. Contents
3. LIFE SCENE
4. PROLOGUE
5. Cover Story
6. Economy
7. Politics
8. Society
9. DEEP DIVE · Society
10. Tech
11. EDITOR'S AFTERWORD
12. Sources

DEEP DIVE is COMPLETE and targets Society, so it is placed immediately after Society. `EDITOR'S PICK` is not used.

## 2. DATA / WATCH

No standalone DATA or WATCH section is created. The issue already contains enough article-specific numbers, procedural checkpoints, and follow-up evidence; repeating them in generic auxiliary sections would reduce density and duplicate the manuscripts.

## 3. Visual rhythm by section

- Cover: no-image dark typographic field, issue number, large headline, concise issue deck, four short thematic rails.
- Contents: two-column reading map on desktop, single column on mobile.
- LIFE SCENE: narrow narrative column, generous vertical rhythm, inline time stamps and a distinct SCENARIO NOTE.
- PROLOGUE: broad text spread with larger lead paragraph and restrained transition typography.
- Cover Story: dark-to-paper transition, three-part disclosure metric band and standard long-form prose.
- Economy: process timeline from annual quota to workplace placement plus long-form prose.
- Politics: two-track comparison block distinguishing online participation from statutory committee membership.
- Society: light-blue field with discovery-to-support process strip.
- DEEP DIVE: dark analytical field with three-layer evaluation grid: selection accuracy / delivery / information governance.
- Tech: pale field with four-step compute-use sequence and long-form prose.
- EDITOR'S AFTERWORD: compact single-column closing card.
- Sources: grouped, compact link list immediately after Afterword.

At least five distinct article rhythms are used; modules only restate information when they provide a different structural view.

## 4. No-image completion

No `<img>` element, image placeholder, `./assets/` reference, image prompt, IMAGE_PLAN, image job, or previous-issue representative image is used. Cover, LIFE SCENE, and all article entrances are complete through typography, color fields, spacing, rules, numbers, tables, and process modules.

## 5. Responsive plan

- 1440+ / 1366: page max-width 1320px, prose 820px, wide modules 1080px.
- 1024: multi-column modules collapse where needed; navigation remains horizontally scrollable without changing DOM order.
- 390: all content becomes single column; tables convert to block rows; title sizes use clamp(); body uses 16px minimum; no fixed-width elements; `overflow-x:hidden` on body and `min-width:0` on grid children.
- Contents, nav, and DOM order remain identical at every viewport.

## 6. Publication checks

- Complete manuscripts only.
- Society DEEP DIVE immediately follows Society.
- AFTERWORD immediately precedes Sources.
- No EDITOR'S PICK.
- Inline CSS and minimal inline JavaScript only.
- No runtime fetch()/XHR assembly.
- Internal anchors must resolve.
- Actual screen review targets: 1440+, 1366, 1024, 390.

LAYOUT: COMPLETE
NEXT: HTML → SCREEN REVIEW → PUBLISH
