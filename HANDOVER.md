# Jiffy Dallas–Fort Worth — Project Handover

Generated for transfer to another Codex account. No Notion connection or Notion data is required for this handover.

## Copy/paste brief for the next account

You are taking over the local Vite front-end project **Jiffy Dallas–Fort Worth**. Work in the existing repository and preserve the current visual direction. This is a static front-end prototype: do not invent a backend, checkout flow, live address validation, or real product integration. The page is built from local assets and direct CSS/JavaScript files.

The GitHub repository is https://github.com/Solnetting/jiffy-dallas.git on branch **main**. The linked Vercel project is **jiffy-dallas**, with canonical production URL https://jiffy-dallas.vercel.app. GitHub pushes to main trigger Vercel production deployments.

**Important state distinction:** GitHub and Vercel currently point to commit **8bf4f07bb0b0e9bde3e966fd3243eb2aff4d74ba** (Remove window from delivery time). The local working tree additionally contains uncommitted changes in **index.html**, **src/apparel-static.css**, and **src/quality-story.js**. Those local changes include the latest S2 catalog overflow fix and removal of the final dot from $2.41; they are not in GitHub or Vercel yet. Do not deploy them unless explicitly requested.

The latest local build passes with npm run build, and git diff --check is clean.

## Project scope and page sequence

The page presents Jiffy Local for the Dallas–Fort Worth area:

1. Hero: local delivery proposition, address form, and delivery outcome state.
2. Local promise strip: three cards titled **Delivery**, **Blanks**, and **DTF**.
3. S1V3 transfer-quality experience: **Jiffy vs Others**, **Ai process**, **Hot peel**, and **Color accuracy**. Only the active proof card exposes its tags/details.
4. Pairing bridge: transfers and blanks presented as one local delivery proposition using the generated Jiffy box scene.
5. S2 blanks/catalog experience: editorial apparel image transitions into a 20-item apparel catalog with filters.
6. Delivery coverage: Dallas–Fort Worth route/map state and broader Texas service view.
7. Persistent support-chat entry point.

Current copy and hierarchy decisions that should be preserved:

- Local promise titles: **Delivery**, **Blanks**, **DTF**.
- Delivery card: **FREE** is the large primary line; **DELIVERY.** is smaller below it.
- Blanks card: 20+ shirt styles and from $2.41, with no trailing dot after 2.41.
- DTF card: $0.02 is the large yellow primary line; PER LINE. is smaller and yellow.
- S1 first tab: Jiffy vs Others.
- S1 second tab: Ai process exactly as written, with subtitle Artwork analyzed and prepared for print.
- Delivery proof hierarchy: the next delivery time is primary; the remaining countdown is secondary. The large primary text is 11 AM–1 PM with no trailing Window; the small label NEXT DELIVERY WINDOW remains.
- The delivery proof panel needs enough width for the NEXT cards and must not shrink or clip its right side.

## Local setup

Current local checkout on the original Mac:

/Users/carlosmera/Documents/Codex/2026-09-04/ok-x20/work/jiffy-dallas

Run:

~~~sh
cd /Users/carlosmera/Documents/Codex/2026-09-04/ok-x20/work/jiffy-dallas
npm install
npm run dev
~~~

The dev server is configured for 127.0.0.1 and normally serves at http://127.0.0.1:5173.

Verification:

~~~sh
npm run build
git diff --check
~~~

This project has no test suite or backend. npm run build is the production-bundle check.

## GitHub state

- Remote: origin https://github.com/Solnetting/jiffy-dallas.git
- Branch: main
- Remote-tracking branch at handoff: origin/main
- Last pushed commit: 8bf4f07 Remove window from delivery time
- Local branch is aligned with origin/main before the uncommitted changes below.

Recent history:

~~~text
8bf4f07 Remove window from delivery time
630f1d8 Improve delivery proof panel layout
aee7b35 Prioritize current delivery window
eb3de38 Prioritize delivery window in hero status
97b6cf7 Restore AI process tab label
3505fd6 Refine local banner apparel composition
47cf902 Refine delivery cards and section one carousel
e9c1b66 Stabilize apparel cards and reuse headline
e14d818 Finalize apparel headline position
c3896a9 Refine apparel catalogue presentation
c7dc3c6 Add primary S1 upload CTA and update todo
6e30d9b Add apparel colour filters and unify typography
~~~

## Local-only changes not deployed

The working tree is intentionally dirty. Preserve these changes while taking over.

### src/apparel-static.css

Added a desktop catalog guardrail at the end of the file. It:

- removes the inherited 120rem shell cap for the interactive catalog;
- makes the shell use the full viewport with box-sizing:border-box;
- prevents minimum-content sizing from pushing the page sideways;
- uses bounded desktop gutter, gap, and hero-width values;
- keeps the catalog group, toolbar, filters, and grid constrained to their column;
- keeps the four-column grid within the available width;
- contains horizontal overflow on the interactive blanks section.

This addresses the screenshot where the S2 heading and product grid were clipped or appeared shifted/shrunk on wide screens.

### src/quality-story.js

The local promise-strip copy is now:

~~~html
<h2>20+ shirt styles<br />from <mark>$2.41</mark></h2>
~~~

### index.html

Cache-busting query strings were incremented so a local reload picks up the local edits:

- apparel-static.css?v=15
- quality-story.js?v=156

### assets/figma/texas-regional-wide-complete.svg

Approved user-supplied Texas regional SVG for the end-of-page delivery coverage section. It was imported unchanged from `texas_regional_wide_complete.svg`, retains its native 2200×1100 canvas and wide regional viewBox, and is now the active map used by the existing scale/pan choreography. The generated SVG and raster map versions remain available as fallbacks but are not referenced by the page.

## Vercel state

Project link from .vercel/project.json:

~~~json
{
  "projectId": "prj_Ba8omtsl8Qiz4yp4TCvXM0cim2eb",
  "orgId": "team_bBjnanJ1Yq9iR6GtX8RgqLDT",
  "projectName": "jiffy-dallas"
}
~~~

Last recorded production deployment, verified 2026-09-15:

- Status: READY
- Target: production
- Deployment ID: dpl_6ewkjJQcxVryeVsRmWDf7ESHoDt1
- Commit: 8bf4f07bb0b0e9bde3e966fd3243eb2aff4d74ba
- Deployment URL: https://jiffy-dallas-gumuy6veh-carlosmeradesign-3615s-projects.vercel.app
- Canonical URL: https://jiffy-dallas.vercel.app

The Vercel deployment contains the removal of the large Window suffix from 11 AM–1 PM while retaining the small NEXT DELIVERY WINDOW label. It does not contain the later uncommitted catalog guardrail or $2.41 punctuation fix.

If deployment is later authorized, the safe sequence is:

~~~sh
npm run build
git diff --check
git status --short
git add index.html src/apparel-static.css src/quality-story.js
git commit -m "<short description>"
git push origin main
~~~

Then confirm the Vercel deployment matches the new commit and reaches READY. Do not add tokens to files or command history.

## Architecture and source map

- **index.html**: page shell and direct versioned stylesheet/module links.
- **src/quality-story.js**: main DOM composition, section order, copy, catalog data, filters, address state, countdown, and scroll choreography.
- **src/quality-story.css**: core story/layout styles.
- **src/apparel-static.css**: interactive S2 editorial-to-catalog transition and final 20-card catalog layout. This is the most recent local layout fix.
- **src/delivery-proof.css**: delivery route/current/next-window panel.
- **src/s1v3.css**: S1V3 transfer-quality experience.
- **src/local-promise-strip.css**: Delivery / Blanks / DTF promotional strip.
- **src/pairing-exploration.css**: pairing bridge layout.
- **src/coverage-story.css**: local route and Texas coverage story.
- **src/mobile-layout.css**: mobile breakpoint overrides.
- **assets/figma**: downloaded local images, videos, SVGs, product portraits, and fonts used by the page.
- **package.json**: Vite scripts only; no app framework or backend dependency.
- **.vercel/project.json**: Vercel project association; contains IDs, not secrets.

The main script resolves local assets under assets/figma. Keep page assets in that directory when adding references.

## Generated asset and product notes

Important local assets include:

- assets/figma/pairing-bridge-generated.png: approved pairing bridge scene.
- assets/figma/blanks-editorial-hero.png: S2 editorial hero image.
- assets/figma/apparel-portraits/portrait-01.png through portrait-20.png: catalog portraits.
- assets/figma/tiger-transfer-hero.png, tiger-proof-detail.png, tiger-proof-peel.png, and tiger-proof-color.png: S1V3 proof imagery.
- assets/figma/delivery-proof-map.png and delivery-proof-timeline-divider.svg: delivery proof panel assets.
- assets/figma/texas-map-generated-5x.png: 8360×4705 high-resolution generated Texas coverage map used by the end section. The earlier 1672×941 generated version remains in the repository as a fallback.
- assets/figma/texas-regional-wide-complete.svg: approved user-supplied vector map currently used by the end section.
- assets/figma/texas-coverage-map.svg: previous generated vector map retained only as a fallback.
- scripts/generate-texas-coverage-map.py: reproducible generator for the data-based Texas SVG.
- assets/figma/jiffy-hero-video.mp4: hero background video.

The 20-item catalog data is static in src/quality-story.js. Product links intentionally point to https://www.jiffy.com/; they are not wired to a live catalog API.

## Logs and verification record

At handoff:

- npm run build: passed after the latest local changes.
- git diff --check: passed.
- Current local modified files: index.html, src/apparel-static.css, src/quality-story.js, the Texas map assets, and scripts/generate-texas-coverage-map.py. The active map is assets/figma/texas-regional-wide-complete.svg.
- No Notion connector was used.
- No secrets, Vercel tokens, or credentials are included in this file.

For a fresh status snapshot, run:

~~~sh
git status --short --branch
git log --oneline --decorate -12
git remote -v
git diff --stat
npm run build
~~~

## Handover cautions

- Do not reset, clean, or discard the three local modifications without explicit approval.
- Do not assume the last Vercel READY deployment includes the current local work.
- Do not reconnect Notion; this handover is intentionally file- and GitHub/Vercel-based.
- Keep the current copy hierarchy and visual corrections intact when making further layout changes.
