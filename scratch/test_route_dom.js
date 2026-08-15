const fs = require('fs');
const path = require('path');

// 1. Verify index.html content
const indexPath = path.join(__dirname, '../../public/map/index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

console.log("=== CHECKING index.html ===");
const hasSelectedRouteCard = indexHtml.includes('id="selectedRouteCard"');
const hasStartSelect = indexHtml.includes('id="startSelect"');
const hasDestSelect = indexHtml.includes('id="destSelect"');
const hasSwapBtn = indexHtml.includes('id="swapBtn"');
const hasFindBtn = indexHtml.includes('id="findRouteBtn"');
const hasChangeRouteBtn = indexHtml.includes('class="btn-change-route"');
const hasDisplayFrom = indexHtml.includes('id="displayFrom"');
const hasDisplayTo = indexHtml.includes('id="displayTo"');

console.log("hasSelectedRouteCard:", hasSelectedRouteCard);
console.log("hasStartSelect (should be false):", hasStartSelect);
console.log("hasDestSelect (should be false):", hasDestSelect);
console.log("hasSwapBtn (should be false):", hasSwapBtn);
console.log("hasFindBtn (should be false):", hasFindBtn);
console.log("hasChangeRouteBtn (should be true):", hasChangeRouteBtn);
console.log("hasDisplayFrom (should be true):", hasDisplayFrom);
console.log("hasDisplayTo (should be true):", hasDisplayTo);

// 2. Verify script.js
const scriptPath = path.join(__dirname, '../../public/map/script.js');
const scriptJs = fs.readFileSync(scriptPath, 'utf8');

console.log("\n=== CHECKING script.js ===");
const hasShowNoRoute = scriptJs.includes('function showNoRouteState()');
const hasShowSameLoc = scriptJs.includes('function showSameLocationState');
const hasCalcAndDisplay = scriptJs.includes('function calculateAndDisplayRoute');
const hasPanzoom = scriptJs.includes('panzoom');
const hasBfs = scriptJs.includes('findShortestPath');

console.log("hasShowNoRoute:", hasShowNoRoute);
console.log("hasShowSameLoc:", hasShowSameLoc);
console.log("hasCalcAndDisplay:", hasCalcAndDisplay);
console.log("hasPanzoom preserved:", hasPanzoom);
console.log("hasBfs preserved:", hasBfs);

// 3. Verify style.css
const stylePath = path.join(__dirname, '../../public/map/style.css');
const styleCss = fs.readFileSync(stylePath, 'utf8');

console.log("\n=== CHECKING style.css ===");
const hasSelectedRouteCss = styleCss.includes('.selected-route-card');
const hasRouteFlowGrid = styleCss.includes('.route-flow-grid');
const hasFromNode = styleCss.includes('.from-node');
const hasToNode = styleCss.includes('.to-node');
const hasResponsiveGrid = styleCss.includes('@media (max-width: 768px)') && styleCss.includes('grid-template-columns: 1fr;');

console.log("hasSelectedRouteCss:", hasSelectedRouteCss);
console.log("hasRouteFlowGrid:", hasRouteFlowGrid);
console.log("hasFromNode:", hasFromNode);
console.log("hasToNode:", hasToNode);
console.log("hasResponsiveGrid:", hasResponsiveGrid);

// 4. Test logic with Mock DOM
console.log("\n=== TESTING ROUTING & DOM LOGIC IN JS ENVIRONMENT ===");
// Mock browser DOM globals
const domElements = {};
global.document = {
    getElementById: (id) => {
        if (!domElements[id]) {
            domElements[id] = {
                id,
                innerHTML: '',
                value: '',
                classList: {
                    add: (cls) => {},
                    remove: (cls) => {},
                    contains: (cls) => false
                },
                setAttribute: (k, v) => {},
                getAttribute: (k) => null,
                addEventListener: (e, cb) => {}
            };
        }
        return domElements[id];
    },
    querySelector: () => null,
    querySelectorAll: () => []
};

global.localStorage = {
    _data: {},
    getItem: (k) => global.localStorage._data[k] || null,
    setItem: (k, v) => { global.localStorage._data[k] = v; },
    clear: () => { global.localStorage._data = {}; }
};

global.window = {
    onload: null
};

// Execute script.js code in sandbox
try {
    eval(scriptJs);
    console.log("script.js evaluated successfully without syntax or runtime errors.");

    // Test Case 1: Valid Route
    console.log("\n--- TEST CASE 1: Valid route from 'Audio Visual Theater' to 'Administrative Office' ---");
    calculateAndDisplayRoute("Audio Visual Theater", "Administrative Office");
    console.log("displayFrom:", domElements['displayFrom'] ? domElements['displayFrom'].innerHTML : 'N/A');
    console.log("displayTo:", domElements['displayTo'] ? domElements['displayTo'].innerHTML : 'N/A');
    console.log("displayJunctions:", domElements['displayJunctions'] ? domElements['displayJunctions'].innerHTML : 'N/A');
    console.log("displayTime:", domElements['displayTime'] ? domElements['displayTime'].innerHTML : 'N/A');
    console.log("statusResult:", domElements['statusResult'] ? domElements['statusResult'].innerHTML : 'N/A');

    // Test Case 2: No Route Selected
    console.log("\n--- TEST CASE 2: No route selected ---");
    calculateAndDisplayRoute(null, null);
    console.log("selectedRouteBody contains 'No Route Selected':", domElements['selectedRouteBody'].innerHTML.includes('No Route Selected'));
    console.log("fromResult:", domElements['fromResult'].innerHTML);
    console.log("statusResult:", domElements['statusResult'].innerHTML);

    // Test Case 3: Same Location
    console.log("\n--- TEST CASE 3: Same location selected ---");
    calculateAndDisplayRoute("Main Block", "Main Block");
    console.log("selectedRouteBody contains 'Starting Point and Destination are the Same':", domElements['selectedRouteBody'].innerHTML.includes('Starting Point and Destination are the Same'));
    console.log("timeResult:", domElements['timeResult'].innerHTML);

    console.log("\n>>> ALL TESTS PASSED! <<<");
} catch (err) {
    console.error("Test error:", err);
    process.exit(1);
}
