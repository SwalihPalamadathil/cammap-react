const fs = require('fs');
const path = require('path');

console.log("=================================================");
console.log("   MOBILE PERFORMANCE & INTEGRITY AUDIT SUITE");
console.log("=================================================");

let passed = true;

// 1. Check Root index.html
const rootHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const hasLogoPreload = rootHtml.includes('rel="preload"') && rootHtml.includes('logo1.png');
const hasDisplaySwap = rootHtml.includes('&display=swap');
console.log("\n[1] Root index.html:");
console.log(" - Has Logo Preload:", hasLogoPreload);
console.log(" - Has Font display=swap:", hasDisplaySwap);
if (!hasLogoPreload || !hasDisplaySwap) passed = false;

// 2. Check Header.jsx
const headerJsx = fs.readFileSync(path.join(__dirname, '../src/components/Header.jsx'), 'utf8');
const hasHeaderImgAttrs = headerJsx.includes('width="42"') && headerJsx.includes('height="42"') && headerJsx.includes('fetchPriority="high"');
console.log("\n[2] Header.jsx:");
console.log(" - Logo has explicit dimensions & high priority:", hasHeaderImgAttrs);
if (!hasHeaderImgAttrs) passed = false;

// 3. Check Banner.jsx
const bannerJsx = fs.readFileSync(path.join(__dirname, '../src/components/Banner.jsx'), 'utf8');
const hasBannerImgAttrs = bannerJsx.includes('width="500"') && bannerJsx.includes('height="500"') && bannerJsx.includes('fetchPriority="high"');
console.log("\n[3] Banner.jsx:");
console.log(" - Hero image has explicit dimensions & high priority:", hasBannerImgAttrs);
if (!hasBannerImgAttrs) passed = false;

// 4. Check About.jsx
const aboutJsx = fs.readFileSync(path.join(__dirname, '../src/components/About.jsx'), 'utf8');
const hasAboutLazy = aboutJsx.includes('loading="lazy"') && aboutJsx.includes('decoding="async"');
console.log("\n[4] About.jsx:");
console.log(" - Preview SVG has lazy loading & async decoding:", hasAboutLazy);
if (!hasAboutLazy) passed = false;

// 5. Check Footer.jsx
const footerJsx = fs.readFileSync(path.join(__dirname, '../src/components/Footer.jsx'), 'utf8');
const hasFooterLazy = footerJsx.includes('loading="lazy"') && footerJsx.includes('width="36"');
console.log("\n[5] Footer.jsx:");
console.log(" - Footer logo has lazy loading & dimensions:", hasFooterLazy);
if (!hasFooterLazy) passed = false;

// 6. Check Page 2 index.html
const mapHtml = fs.readFileSync(path.join(__dirname, '../public/map/index.html'), 'utf8');
const hasMapPreload = mapHtml.includes('rel="preload"') && mapHtml.includes('logo1.png');
const hasGpsComingSoon = mapHtml.includes('GPS Live Navigation Coming Soon');
console.log("\n[6] Page 2 public/map/index.html:");
console.log(" - Has Logo Preload:", hasMapPreload);
console.log(" - Has 'GPS Live Navigation Coming Soon' text:", hasGpsComingSoon);
if (!hasMapPreload || !hasGpsComingSoon) passed = false;

// 7. Check Dead Assets Cleanup
const publicDir = fs.readdirSync(path.join(__dirname, '../public'));
const deadAssets = ['20944330.jpg', '361.jpg', '42340.jpg', 'banner.jpg', 'em.png', 'favicon.svg', 'icons.svg'];
const remainingDeadAssets = publicDir.filter(f => deadAssets.includes(f));
console.log("\n[7] Unused Dead Assets Cleaned Up from public/:");
console.log(" - Remaining dead assets count (should be 0):", remainingDeadAssets.length);
if (remainingDeadAssets.length > 0) passed = false;

console.log("\n=================================================");
if (passed) {
    console.log(">>> ALL AUDIT & INTEGRITY CHECKS PASSED! <<<");
} else {
    console.error(">>> FAILED ONE OR MORE CHECKS <<<");
    process.exit(1);
}
console.log("=================================================");
