# Jiffy Dallas–Fort Worth

Local Vite implementation of the Jiffy Dallas–Fort Worth landing page.

The current page follows the meeting sequence: the hero collects the delivery
address first; the local promise strip introduces the offer; the transfer
quality showroom and the single S1V3 experience follow; the static blanks
catalogue and coverage story complete the page. Sections use native sticky
stacking where the interaction calls for it, while the catalogue remains a
regular document flow.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to verify the production bundle locally.

The page uses the downloaded Figma assets and local font files in
`assets/figma` and `assets/fonts`.

The repository is a static front-end preview. Address validation, live delivery
windows, cart operations, and upload processing are intentionally not faked;
the integration points are the address forms, product links, and upload panel.

## Current section structure

- Section 1 is the single retained S1V3 quality experience. The retired S1V1
  and S1V2 implementations, selectors, and styles are removed rather than
  rendered as hidden alternatives.
- S1V3 keeps one active proof image in place, with a user-controlled topic
  index and a 10-second autoplay interval after the section is revealed.
- The blanks experience is a static 20-item catalogue with filter chips for
  All, T-shirts, Fleece, Hoodies, and Performance. Product cards show the
  crossed-out previous price beside the current starting price.
- Delivery coverage is a continuous map camera move from the Dallas–Fort Worth
  local area to the full Texas Jiffy 1st service view.

## Prototype interactions

- The hero address form is the single delivery-state component. A Dallas/752xx
  address confirms coverage and shows the delivery window; other addresses
  show the waitlist outcome. The final address checker is shown only before an
  address is submitted.
- When the address component becomes sticky, that same DOM element is moved to
  the document layer so it remains above every page section. Its translucent
  glass surface is unchanged; the status text, divider, and close icon use
  blend-difference for background-aware contrast.
- S1V3’s topic buttons are glass panels with a title, supporting subtitle, and
  explanatory copy. Selecting a topic replaces the active image in place; it
  does not slide a preview in from either side.
- The hero-to-catalog apparel transition keeps the editorial image large until
  it contracts into the left column, then reveals the title, filters, and all
  product rows.
- A fixed support-chat entry point remains available throughout the page.
