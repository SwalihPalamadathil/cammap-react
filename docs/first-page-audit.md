# CamMap First Page Audit Checklist

## Phase A: Critical Bugs & Correctness

### 1. Head and SEO
- [x] Replace `https://YOUR-CUSTOM-DOMAIN.com/` with `https://cammap-react.vercel.app/` in `index.html`, `src/config/siteConfig.js`, `public/robots.txt`, and `public/sitemap.xml`.
- [x] Update `<meta name="viewport">` to: `width=device-width, initial-scale=1, viewport-fit=cover`.
- [x] Ensure `<html lang="en">`, single `<title>`, description length 110-160 chars, `theme-color` set to `#0B1220`.
- [x] Verify favicon/logo paths (`/map/logo1.png`), apple-touch-icon, and verified all preload assets exist.
- [x] Update Open Graph image URLs to absolute `https://cammap-react.vercel.app/emea.png` (500x500 verified).
- [x] Update JSON-LD structured data URLs to `https://cammap-react.vercel.app/`.

### 2. Visible Bugs
- [x] Header.jsx: Verified no stray literal `\n` text between nav links, logo links to `#home`, all IDs unique.
- [x] Anchor scroll alignment: Added `--header-h` CSS token matching header height at breakpoints (72px desktop / 64px mobile), set `scroll-margin-top: calc(var(--header-h) + 16px)` on all anchor targets (`#home`, `#search`, `#how-it-works`, `#features`, `#directory`, `#about`), and `scroll-padding-top` on `html`.
- [x] Mobile menu in `Header.jsx`: Added hamburgerRef focus return on Escape, outside click closing, closing on link tap, correct `aria-expanded`, `aria-controls`, `aria-label`, non-shifting body scroll lock using `scrollbar-gutter: stable`, and passive listeners attached only while open.
- [x] Route selector in `SearchCard.jsx`: Wrapped `localStorage.setItem` in try/catch to protect against private browsing quota errors. Added accessible labels to GPS and Swap buttons.
- [x] Images: Verified valid src, dimensions, and meaningful alt tags across all images.
- [x] External links: Verified security attributes.

### 3. React Correctness
- [x] Verified zero `console.log` / `console.warn` statements in source.
- [x] Clean event listener pairs and effect cleanups across components.
- [x] Configured `vercel.json` rewrites to guarantee SPA route refresh support while preserving static `/map/index.html`.
- [x] Clean build and lint passes (0 errors, 0 warnings).

### 4. Accessibility
- [x] Landmark roles configured: `<header>`, `<nav aria-label="Main Navigation">`, `<main id="main">`, `<footer>`.
- [x] Single `<h1>` in Hero, consistent heading levels (h1 -> h2 -> h3).
- [x] Added accessible "Skip to content" link targeting `#main`.
- [x] Visible `:focus-visible` styles with high-contrast outlines on all interactive elements.
- [x] Verified `<label htmlFor>` / `<select id>` associations and >= 44x44px touch targets.
- [x] Decorative SVGs marked with `aria-hidden="true"`.

### 5. CSS Correctness & Performance
- [x] Replaced `overflow-x: hidden` with `overflow-x: clip` on `body` to preserve `position: sticky` and avoid iOS momentum scroll jank.
- [x] Removed obsolete CSS rules for deleted bento/tile components in `About.css`.
- [x] Added `-webkit-text-size-adjust: 100%; text-size-adjust: 100%;` on `html`.
- [x] Added `-webkit-tap-highlight-color: transparent; touch-action: manipulation;` on buttons, links, chips, and selects.

---

## Phase B: Load Performance (Android 4G Optimization)

### Baseline Measurements (Before Phase B)
- **HTML**: `dist/index.html` — 5.36 kB (1.62 kB gzip)
- **CSS Chunks**:
  - `dist/assets/vendor-CqN5JKXL.css`: 80.78 kB (13.77 kB gzip) — *entirely unused Bootstrap Icons font CSS*
  - `dist/assets/main-8ve9jBJI.css`: 31.11 kB (6.55 kB gzip)
  - `dist/assets/footer-Dmg4EGm6.css`: 6.40 kB (2.20 kB gzip)
  - **Total CSS**: 118.29 kB raw (~22.52 kB gzip)
- **JS Chunks**:
  - `dist/assets/vendor-CGg1YfVt.js`: 240.35 kB (77.20 kB gzip)
  - `dist/assets/main-DFkDJsva.js`: 28.02 kB (6.10 kB gzip)
  - `dist/assets/footer-C5w7lbvD.js`: 1.30 kB (0.72 kB gzip)
  - **Total JS**: 269.67 kB raw (~84.02 kB gzip)
- **Web Fonts / Heavy Assets Loaded**:
  - `bootstrap-icons-mSm7cUeB.woff2`: 134.04 kB (render-blocking / invisible icon font)
  - `bootstrap-icons-BeopsB42.woff`: 180.28 kB
  - `logo1-Cz_W_aPD.png`: 51.53 kB (500x500 logo displayed at 38x38px)
  - `camMap ui.svg`: 211 kB map SVG used for small sticker
  - Google Fonts: Geist & Geist Mono loaded via render-blocking `<link rel="stylesheet">`

### Optimized Measurements (After Phase B)
- **HTML**: `dist/index.html` — 5.41 kB (1.63 kB gzip)
- **CSS Chunks (First Page)**:
  - `dist/assets/main-sra44wmS.css`: 37.96 kB (8.58 kB gzip)
  - `dist/assets/footer-E2Y5ilNy.css`: 6.75 kB (2.30 kB gzip)
  - *Vendor CSS chunk removed entirely from first page*: -80.78 kB (-13.77 kB gzip)
  - **Total CSS**: 44.71 kB raw (**10.88 kB gzip**) — *51.7% gzip reduction!*
- **JS Chunks (First Page)**:
  - `dist/assets/vendor-C3eaQcjs.js`: 230.89 kB (73.88 kB gzip)
  - `dist/assets/main-CJkxtzU3.js`: 28.48 kB (6.34 kB gzip)
  - `dist/assets/footer-3HzzBHPi.js`: 1.30 kB (0.72 kB gzip)
  - **Total JS**: 260.67 kB raw (**80.94 kB gzip**) — *down from 84.02 kB gzip*
- **Web Fonts & Network Blocking Reductions**:
  - `bootstrap-icons.woff2` (134.04 kB): **0 kB** — replaced by inline CSS mask subset of the 14 needed icons!
  - `bootstrap-icons.woff` (180.28 kB): **0 kB** — eliminated from first page!
  - Google Fonts: converted to non-blocking `<link rel="preload" as="style" ... onload="...">` with `display=swap`
  - Fallback fonts: added metric-compatible `Geist Fallback` and `Geist Mono Fallback` with `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` to prevent CLS.
  - Initial Paint: removed `opacity: 0` animation delay on hero heading and paragraph so text renders immediately at First Paint.
  - Caching & Delivery: added immutable 1-year cache headers for `/assets/*` in `vercel.json` and 1-day/stale-while-revalidate for static images.
  - Idle Map Prefetch: added non-blocking `requestIdleCallback` prefetch in `Home.jsx` on 4G without `saveData`.

---

## Phases B–E Roadmap
- [ ] Phase B: Visual & Design Token Integrity (Spacing, typography, elevation, color tokens)
- [ ] Phase C: Responsive Behavior & Mobile Viewports (360px, 480px, 768px, 1024px, 1440px)
- [ ] Phase D: Performance & Asset Optimization (Payload weights, WebFont display, caching headers)
- [ ] Phase E: Final Cross-Browser & Standards Verification (W3C HTML validator, Lighthouse audits)
