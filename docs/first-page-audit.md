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

## Phases B–E Roadmap
- [ ] Phase B: Visual & Design Token Integrity (Spacing, typography, elevation, color tokens)
- [ ] Phase C: Responsive Behavior & Mobile Viewports (360px, 480px, 768px, 1024px, 1440px)
- [ ] Phase D: Performance & Asset Optimization (Payload weights, WebFont display, caching headers)
- [ ] Phase E: Final Cross-Browser & Standards Verification (W3C HTML validator, Lighthouse audits)
