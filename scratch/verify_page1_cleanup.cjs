const fs = require('fs');
const path = require('path');

console.log("==========================================");
console.log("   PAGE 1 CLEANUP VERIFICATION TEST SUITE");
console.log("==========================================");

// 1. Verify Header.jsx
const headerPath = path.join(__dirname, '../src/components/Header.jsx');
const headerContent = fs.readFileSync(headerPath, 'utf8');

const headerHasOpenMap = headerContent.toLowerCase().includes('open map');
const headerHasMapUrl = headerContent.includes('map/index.html');

console.log("\n[1] Header.jsx Check:");
console.log(" - Contains 'Open Map' text (should be false):", headerHasOpenMap);
console.log(" - Contains 'map/index.html' link (should be false):", headerHasMapUrl);
console.log(" - Contains 'Route Finder' nav link (should be true):", headerContent.includes('Route Finder'));

// 2. Verify About.jsx
const aboutPath = path.join(__dirname, '../src/components/About.jsx');
const aboutContent = fs.readFileSync(aboutPath, 'utf8');

const aboutHasOpenCampusMap = aboutContent.toLowerCase().includes('open campus map');
const aboutHasMapUrl = aboutContent.includes('map/index.html');

console.log("\n[2] About.jsx Check:");
console.log(" - Contains 'Open Campus Map' text (should be false):", aboutHasOpenCampusMap);
console.log(" - Contains 'map/index.html' link (should be false):", aboutHasMapUrl);
console.log(" - Contains 'Explore EMEA College With Confidence' (should be true):", aboutContent.includes('Explore EMEA College With Confidence'));

// 3. Verify Footer.jsx
const footerPath = path.join(__dirname, '../src/components/Footer.jsx');
const footerContent = fs.readFileSync(footerPath, 'utf8');

const footerHasOpenMap = footerContent.toLowerCase().includes('open map');
const footerHasMapUrl = footerContent.includes('map/index.html');

console.log("\n[3] Footer.jsx Check:");
console.log(" - Contains 'Open Map' text (should be false):", footerHasOpenMap);
console.log(" - Contains 'map/index.html' link (should be false):", footerHasMapUrl);

// 4. Verify SearchCard.jsx (Valid Flow Preserved)
const searchCardPath = path.join(__dirname, '../src/components/SearchCard.jsx');
const searchCardContent = fs.readFileSync(searchCardPath, 'utf8');

const searchHasValidRouteAction = searchCardContent.includes('localStorage.setItem("from", from)') &&
                                  searchCardContent.includes('localStorage.setItem("to", to)') &&
                                  searchCardContent.includes('map/index.html');
const searchHasDisabledCheck = searchCardContent.includes('disabled={!from || !to}');

console.log("\n[4] SearchCard.jsx Check (Valid Route Flow):");
console.log(" - Valid route submission preserved (should be true):", searchHasValidRouteAction);
console.log(" - Route button disabled when incomplete (should be true):", searchHasDisabledCheck);

// 5. Global Scan for any direct map/index.html references in src/
console.log("\n[5] Global Scan in src/ for map/index.html links:");
function scanDir(dir) {
    let filesWithMapLink = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            filesWithMapLink.push(...scanDir(fullPath));
        } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('map/index.html')) {
                filesWithMapLink.push(fullPath);
            }
        }
    }
    return filesWithMapLink;
}

const mapFiles = scanDir(path.join(__dirname, '../src'));
console.log(" - Files in src/ referencing map/index.html:", mapFiles.map(f => path.basename(f)));

const allClean = !headerHasOpenMap && !headerHasMapUrl &&
                 !aboutHasOpenCampusMap && !aboutHasMapUrl &&
                 !footerHasOpenMap && !footerHasMapUrl &&
                 searchHasValidRouteAction && searchHasDisabledCheck &&
                 mapFiles.length === 1 && path.basename(mapFiles[0]) === 'SearchCard.jsx';

console.log("\n==========================================");
if (allClean) {
    console.log(">>> ALL PAGE 1 CLEANUP CHECKS PASSED! <<<");
} else {
    console.error(">>> FAILED SOME CHECKS <<<");
    process.exit(1);
}
console.log("==========================================");
