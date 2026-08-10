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

- Outer page shell: `1320px` maximum. This is for background/shell only.
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

- Cover: no-image dark typographic field, issue number, large headline, concise issue deck, four short thematic rails; copy aligns to the common editorial axis.
- Contents: two-column reading map inside the common axis, single column on mobile.
- LIFE SCENE: continuous narrative with a distinct SCENARIO NOTE; outer edges remain common even though the typography is quieter.
- PROLOGUE: broad text rhythm within the same axis.
- Cover Story: dark-to-paper transition and three-part disclosure metric band inside the same axis.
- Economy: five-step process timeline inside the same axis.
- Politics: two-track comparison block inside the same axis.
- Society: light-blue field with discovery-to-support process strip inside the same axis.
- DEEP DIVE: dark analytical field with three-layer evaluation grid inside the same axis.
- Tech: pale field with compute-use sequence inside the same axis.
- EDITOR'S AFTERWORD: quiet closing treatment using padding/typography, not a narrower max-width.
- Sources: grouped compact links on the same axis.

## 5. No-image completion

No `<img>` element, image placeholder, `./assets/` reference, image prompt, IMAGE_PLAN, image job, or previous-issue representative image is used.

## 6. Responsive plan

- 1440+ / 1366: page shell 1320px, common editorial axis 1040px.
- 1024: editorial axis becomes available width inside gutters; multi-column modules collapse where needed.
- 390: all content single column; tables convert to block rows; no fixed-width elements; no horizontal overflow.
- Contents, nav, and DOM order remain identical at every viewport.

## 7. Screen review width gate

At desktop sizes, compare the bounding rectangles of titles, decks, story/body columns, cards/timelines/flows, afterword and sources. Their outer left/right edges must match within 2px. Full-width background colors do not count as content-axis exceptions.

## 8. Publication checks

- Complete manuscripts only.
- Society DEEP DIVE immediately follows Society.
- AFTERWORD immediately precedes Sources.
- No EDITOR'S PICK.
- Inline CSS and minimal inline JavaScript only.
- No runtime fetch()/XHR assembly.
- Internal anchors resolve.
- Actual screen review targets: 1440+, 1366, 1024, 390.
- Width-axis check is mandatory in addition to overflow checks.

LAYOUT: COMPLETE
NEXT: HTML → SCREEN REVIEW → PUBLISH
