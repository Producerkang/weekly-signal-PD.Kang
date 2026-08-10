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

No standalone DATA or WATCH section is created. The issue already contains enough article-specific numbers, procedural checkpoints, and follow-up evidence; repeating them in generic auxiliary sections would duplicate the manuscripts.

## 3. Unified width contract

Issue 03 uses one editorial content axis for every readable element.

- Outer page shell: `1320px` maximum. Background/shell only.
- Editorial content axis: `1040px` maximum.
- Gutter: `clamp(20px, 4vw, 64px)`.
- `--prose` and `--wide`, if retained for compatibility, resolve to `var(--content)` and must not create separate widths.

The following all align to the same 1040px outer left/right edges:

- Contents heading, intro and TOC
- LIFE heading, subhead, story and SCENARIO NOTE
- PROLOGUE prose
- every article heading, deck, information module and body
- DEEP DIVE evaluation grid and body
- EDITOR'S AFTERWORD
- Sources

Layout variation is created only inside this axis through columns, cards, background fields, typography, rules and vertical rhythm. Section-by-section outer widths such as 700 / 720 / 820 / 880 / 980 / 1000 / 1080px are not used.

## 4. Visual rhythm by section

- Cover: no-image dark typographic field; copy aligns to the common editorial axis.
- Contents: two-column reading map inside the common axis, single column on mobile.
- LIFE SCENE: continuous narrative with distinct SCENARIO NOTE; same outer axis.
- PROLOGUE: broad text rhythm within the same axis.
- Cover Story: metric band inside the same axis.
- Economy: process timeline inside the same axis.
- Politics: two-track comparison block inside the same axis.
- Society: discovery-to-support process strip inside the same axis.
- DEEP DIVE: three-layer evaluation grid inside the same axis.
- Tech: compute-use sequence inside the same axis.
- EDITOR'S AFTERWORD: quiet treatment via padding/typography, not narrower max-width.
- Sources: grouped compact links on the same axis.

## 5. No-image completion

No generated image, `<img>` placeholder, image prompt, IMAGE_PLAN, image job, or previous-issue representative image is used.

## 6. Responsive plan

- 1440+ / 1366: page shell 1320px, common editorial axis 1040px.
- 1024: editorial axis becomes available width inside gutters; multi-column modules collapse where needed.
- 390: all content single column; no fixed-width elements and no horizontal overflow.
- Contents, nav and DOM order remain identical at every viewport.

## 7. Screen review width gate

At desktop sizes, compare the bounding rectangles of titles, decks, story/body columns, cards/timelines/flows, afterword and sources. Their outer left/right edges must match within 2px. Full-width background colors do not count as content-axis exceptions.

## 8. Issue 03 maintenance implementation

Issue 03 was already published before the unified-width contract was adopted. To preserve the published manuscript byte-for-byte while correcting the layout immediately:

- `archive/2026-08-03/base.html` preserves the pre-maintenance published HTML.
- `archive/2026-08-03/index.html` is a compatibility loader that applies only the unified-width CSS override to that preserved document.
- No images or image assets are used.
- This compatibility loader is **Issue 03 maintenance only** and is not the forward publishing architecture.

All **new issues** must be emitted directly as one static `index.html` from `templates/ISSUE_TEMPLATE.html`; runtime fetch/XHR document assembly is prohibited for new publications.

## 9. Publication checks

- Complete manuscripts only.
- Society DEEP DIVE immediately follows Society.
- AFTERWORD immediately precedes Sources.
- No EDITOR'S PICK.
- Internal anchors resolve.
- Actual screen review targets: 1440+, 1366, 1024, 390.
- Width-axis check is mandatory in addition to overflow checks.
- New issues: single static HTML, no runtime content assembly.

LAYOUT: COMPLETE
NEXT: ISSUE CLOSED
