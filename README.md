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
