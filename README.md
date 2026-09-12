# Jiffy Dallas–Fort Worth

Local Vite implementation of the Jiffy Dallas–Fort Worth landing page.

The current page follows the meeting sequence: the hero collects the delivery
address first; the transfer entry point combines upload, transfer paths,
product discovery, and the transfer-quality story; a dedicated transfer-types
section follows; blanks come after that. Sections use native sticky stacking so
the next section covers the previous one as the page scrolls.

## Run locally

```sh
npm install
npm run dev
```

The page uses the downloaded Figma assets and local font files in
`assets/figma` and `assets/fonts`.

The repository is a static front-end preview. Address validation, live delivery
windows, cart operations, and upload processing are intentionally not faked;
the integration points are the address forms, product links, and upload panel.

## Current section variants

- Section 1 has three selectable quality-story variants in the hero’s Sign in
  control; V2 is the default.
- Section 2 contains the blanks story followed by Apparel V2, its Figma-based
  full-scene background and translucent product rail.
- Section 3 · V1 follows Apparel V2 and combines transfer and blank-apparel
  product cards under “Transfers + blanks. One delivery. Best price.”

## Prototype interactions

- The hero address form is the single delivery-state component. A Dallas/752xx
  address confirms coverage and shows the delivery window; other addresses
  show the waitlist outcome. The final address checker is shown only before an
  address is submitted.
- When the address component becomes sticky, that same DOM element is moved to
  the document layer so it remains above every page section. Its translucent
  glass surface is unchanged; the status text, divider, and close icon use
  blend-difference for background-aware contrast.
- Section 1 transfer entry points share the final desktop frame with the
  popular blanks rail. Their actions are secondary treatments.
- Section 2’s editorial image completes its left-column transition before the
  right-column glass-card apparel carousel appears. The tertiary apparel link
  sits above the carousel at its top-right edge.
- A fixed support-chat entry point remains available throughout the page.
