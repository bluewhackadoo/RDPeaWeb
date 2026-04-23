# RDPea Website UI Kit

Marketing + donations site for RDPea. Dark slate chrome lifted from the app, with pea‑green accents in the hero and CTA.

## Files
- `index.html` — full single-page marketing site. Click‑thru nav smoothly scrolls between sections; "Download" opens a fake OS‑picker popover.
- `Header.jsx` — top nav with wordmark + anchor links + GitHub + Download CTA
- `Hero.jsx` — headline, sub‑copy, download CTA, OS picker, supporter marquee
- `FeatureGrid.jsx` — 6 feature cards from the codebase feature list
- `ScreenshotShowcase.jsx` — tabbed product screenshots (mocked as stylised app chrome)
- `SupportSection.jsx` — donation tiers (GitHub Sponsors, one-time, paid setup)
- `Footer.jsx` — brand mark, links, version, MIT blurb
- `primitives.jsx` — Button, Badge, Pill, Icon helpers shared across components

## Layout
Max content width 1200px with 24px side gutter. Two rhythm sections:
1. Dark hero & feature area on `--surface-950` with a faint pea‑green radial.
2. Panel sections on `--surface-900/40` glass to echo the app.

## Running
Open `index.html` directly — everything is CDN‑loaded (React 18 + Babel standalone + Lucide).
