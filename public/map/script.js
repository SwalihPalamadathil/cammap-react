

const destinations = {

    "Main Block": {
        building: "Main Block",
        floor: "Multiple Floors",
        route: "Follow highlighted route"
    },

    "Economics Department": {
        building: "Main Block",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Language Department": {
        building: "Main Block",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "West Asian Studies Department": {
        building: "Main Block",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Principal Room": {
        building: "Main Block",
        floor: "First Floor",
        route: "Follow highlighted route"
    },

    "College Office": {
        building: "Main Block",
        floor: "First Floor",
        route: "Follow highlighted route"
    },



    "RUSA Building": {
        building: "RUSA Building",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "BVoc Block": {
        building: "BVoc Block",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Computer Science Department": {
        building: "Main Block",
        floor: "First Floor",
        route: "Follow highlighted route"
    },

    "English Department": {
        building: "Main Block",
        floor: "First Floor",
        route: "Follow highlighted route"
    },

    "Microbiology Department": {
        building: "Main Block",
        floor: "First Floor",
        route: "Follow highlighted route"
    },


    "Seminar Hall": {
        building: "Main Block",
        floor: "Second Floor",
        route: "Follow highlighted route"
    },


    "Biochemistry Department": {
        building: "Main Block",
        floor: "Second Floor",
        route: "Follow highlighted route"
    },


    "Mathematics & Physics Department": {
        building: "RUSA Building",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },


    "Biotechnology Department": {
        building: "Main Block",
        floor: "Second Floor",
        route: "Follow highlighted route"
    },

    "Commerce Department": {
        building: "Commerce Block",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },


    "Administrative Office": {
        building: "Administrative Office",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Canteen": {
        building: "Canteen",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Prayer Hall": {
        building: "Prayer Hall",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Cooperative Store": {
        building: "Cooperative Store",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },
    "Basketball Court": {
        route: "Follow highlighted route"
    },
    "Sports Hostel": {
        building: "Sports Hostel",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "NSS/NCC Office": {
        building: "NSS/NCC Office",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Audio Visual Theater": {
        building: "Audio Visual Theater",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Bamboo Lake": {
        route: "Follow highlighted route"
    },

    "Boys Washroom": {
        building: "Boys Washroom",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Auditorium": {
        building: "Auditorium",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Library": {
        building: "Library",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "EMEA Training College": {
        building: "EMEA Training College",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },

    "Mahogany Park": {
        building: "Mahogany Park",
        route: "Follow highlighted route"

    },


    "Business Administration Department": {
        building: "BBA Department",
        route: "Follow highlighted route"

    },

    "NCC Ground": {

        route: "Follow highlighted route"
    },

    "Ladies Hostel": {
        building: "Ladies Hostel",
        floor: "Ground Floor",
        route: "Follow highlighted route"
    },
};

function clearMarkers() {
    document.getElementById("routeLayer").innerHTML = "";

    document.getElementById("mainBlock").classList.remove("active-marker");
    document.getElementById("commerceBlock").classList.remove("active-marker");
    document.getElementById("rusaBlock").classList.remove("active-marker");
    document.getElementById("bvocBlock").classList.remove("active-marker");
}

function renderRouteFlowTemplate() {
    return `
        <div class="route-flow-grid">
            <!-- STARTING POINT (FROM) -->
            <div class="route-node-card from-node">
                <div class="node-icon-wrapper from-icon">
                    <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div class="node-details">
                    <span class="node-label">STARTING POINT</span>
                    <h3 class="node-value" id="displayFrom">-</h3>
                </div>
            </div>

            <!-- ROUTE CONNECTOR -->
            <div class="route-connector-box">
                <div class="connector-line"></div>
                <div class="connector-badge">
                    <i class="bi bi-person-walking text-primary"></i>
                    <span id="displayTimeBadge">Calculating...</span>
                </div>
                <div class="connector-arrow">
                    <i class="bi bi-arrow-right d-none d-md-inline"></i>
                    <i class="bi bi-arrow-down d-md-none"></i>
                </div>
            </div>

            <!-- DESTINATION (TO) -->
            <div class="route-node-card to-node">
                <div class="node-icon-wrapper to-icon">
                    <i class="bi bi-flag-fill"></i>
                </div>
                <div class="node-details">
                    <span class="node-label">DESTINATION</span>
                    <h3 class="node-value" id="displayTo">-</h3>
                </div>
            </div>
        </div>

        <!-- ROUTE SUB-BAR / METRICS -->
        <div class="route-meta-bar" id="routeMetaBar">
            <div class="meta-item">
                <i class="bi bi-signpost-2 text-primary"></i>
                <span>Junctions: <strong id="displayJunctions">0</strong></span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item">
                <i class="bi bi-clock-history text-primary"></i>
                <span>Est. Walk: <strong id="displayTime">--</strong></span>
            </div>
            <div class="meta-divider">•</div>
            <div class="meta-item">
                <i class="bi bi-lightning-charge-fill text-gold"></i>
                <span>Optimal BFS Shortest Path</span>
            </div>
            <div class="meta-divider d-none d-lg-inline">•</div>
            <div class="meta-item text-slate-500 d-none d-lg-inline">
                <span>Follow highlighted line on map below</span>
            </div>
        </div>
    `;
}

function showNoRouteState() {
    clearMarkers();
    const body = document.getElementById("selectedRouteBody");
    const statusBadge = document.getElementById("routeStatusBadge");
    
    if (statusBadge) {
        statusBadge.innerHTML = `<span class="badge-pill bg-slate-subtle text-slate-600"><i class="bi bi-info-circle"></i> No Route Active</span>`;
    }

    if (body) {
        body.innerHTML = `
            <div class="empty-route-state text-center py-4 px-3">
                <div class="empty-icon-circle mb-3">
                    <i class="bi bi-compass fs-1 text-primary"></i>
                </div>
                <h3 class="fw-bold text-slate-900 mb-2">No Route Selected</h3>
                <p class="text-slate-600 max-w-500 mx-auto mb-4 fs-6">
                    Please select your starting point and destination on the CamMap Home Route Selector to view the walking path.
                </p>
                <a href="../" class="btn-primary-action text-decoration-none d-inline-flex">
                    <i class="bi bi-arrow-left fs-5"></i>
                    <span>Plan Route on Home</span>
                </a>
            </div>
        `;
    }

    const fromRes = document.getElementById("fromResult");
    const toRes = document.getElementById("toResult");
    const juncRes = document.getElementById("junctionResult");
    const timeRes = document.getElementById("timeResult");
    const statusRes = document.getElementById("statusResult");

    if (fromRes) fromRes.innerHTML = "-";
    if (toRes) toRes.innerHTML = "-";
    if (juncRes) juncRes.innerHTML = "0";
    if (timeRes) timeRes.innerHTML = "--";
    if (statusRes) statusRes.innerHTML = `<span class="badge-pill bg-slate-subtle text-slate-700">No Route</span>`;
}

function showSameLocationState(loc) {
    clearMarkers();
    const body = document.getElementById("selectedRouteBody");
    const statusBadge = document.getElementById("routeStatusBadge");
    
    if (statusBadge) {
        statusBadge.innerHTML = `<span class="badge-pill bg-warning-subtle text-warning-emphasis"><i class="bi bi-exclamation-triangle-fill"></i> Same Location</span>`;
    }

    if (body) {
        body.innerHTML = `
            <div class="empty-route-state text-center py-4 px-3">
                <div class="empty-icon-circle mb-3 bg-amber-subtle">
                    <i class="bi bi-geo-alt fs-1 text-amber"></i>
                </div>
                <h3 class="fw-bold text-slate-900 mb-2">Starting Point and Destination are the Same</h3>
                <p class="text-slate-600 max-w-500 mx-auto mb-4 fs-6">
                    You are already at <strong>${loc}</strong>. Please choose a different destination on the Home page to navigate.
                </p>
                <a href="../" class="btn-primary-action text-decoration-none d-inline-flex">
                    <i class="bi bi-arrow-left fs-5"></i>
                    <span>Change Destination on Home</span>
                </a>
            </div>
        `;
    }

    const fromRes = document.getElementById("fromResult");
    const toRes = document.getElementById("toResult");
    const juncRes = document.getElementById("junctionResult");
    const timeRes = document.getElementById("timeResult");
    const statusRes = document.getElementById("statusResult");

    if (fromRes) fromRes.innerHTML = loc;
    if (toRes) toRes.innerHTML = loc;
    if (juncRes) juncRes.innerHTML = "0";
    if (timeRes) timeRes.innerHTML = "0 min (You are here)";
    if (statusRes) statusRes.innerHTML = `<span class="badge-pill bg-warning-subtle text-warning-emphasis">Same Location</span>`;
}

function calculateAndDisplayRoute(start, destination) {
    if (!start || !destination) {
        showNoRouteState();
        return;
    }

    if (start === destination) {
        showSameLocationState(start);
        return;
    }

    let startNode = locationJunction[start];
    let endNode = locationJunction[destination];

    if (!startNode || !endNode) {
        showNoRouteState();
        return;
    }

    // Ensure the route grid DOM elements exist (in case they were replaced by an empty-state before)
    const body = document.getElementById("selectedRouteBody");
    if (body && !document.getElementById("displayFrom")) {
        body.innerHTML = renderRouteFlowTemplate();
    }

    let data = destinations[destination];
    clearMarkers();

    let shortestRoute = findShortestPath(startNode, endNode);

    if (shortestRoute) {
        drawRoute(shortestRoute);

        let seconds = shortestRoute.length * 15;
        let timeStr = seconds >= 60 ? Math.ceil(seconds / 60) + " min" : seconds + " sec";

        // 1. Update Read-Only Selected Route Card
        const displayFrom = document.getElementById("displayFrom");
        const displayTo = document.getElementById("displayTo");
        const displayJunctions = document.getElementById("displayJunctions");
        const displayTime = document.getElementById("displayTime");
        const displayTimeBadge = document.getElementById("displayTimeBadge");
        const routeStatusBadge = document.getElementById("routeStatusBadge");

        if (displayFrom) displayFrom.innerHTML = start;
        if (displayTo) displayTo.innerHTML = destination;
        if (displayJunctions) displayJunctions.innerHTML = shortestRoute.length;
        if (displayTime) displayTime.innerHTML = timeStr;
        if (displayTimeBadge) displayTimeBadge.innerHTML = timeStr + " Walk";
        if (routeStatusBadge) {
            routeStatusBadge.innerHTML = `<span class="badge-pill bg-success text-white"><i class="bi bi-check-circle-fill"></i> Route Active</span>`;
        }

        // 2. Update Bottom Summary Card
        const fromRes = document.getElementById("fromResult");
        const toRes = document.getElementById("toResult");
        const juncRes = document.getElementById("junctionResult");
        const timeRes = document.getElementById("timeResult");
        const statusRes = document.getElementById("statusResult");

        if (fromRes) fromRes.innerHTML = start;
        if (toRes) toRes.innerHTML = destination;
        if (juncRes) juncRes.innerHTML = shortestRoute.length;
        if (timeRes) timeRes.innerHTML = timeStr;
        if (statusRes) {
            statusRes.innerHTML = `<span class="badge-pill bg-success text-white"><i class="bi bi-check-circle-fill"></i> Route Found</span>`;
        }
    }

    if (data && data.building === "Main Block")
        document.getElementById("mainBlock").classList.add("active-marker");

    if (data && data.building === "Commerce Block")
        document.getElementById("commerceBlock").classList.add("active-marker");

    if (data && data.building === "RUSA Building")
        document.getElementById("rusaBlock").classList.add("active-marker");

    if (data && data.building === "BVoc Block")
        document.getElementById("bvocBlock").classList.add("active-marker");
}

const svgBuildingMap = [
    { filterId: "filter1_d_0_1", name: "Main Block", id: "building-main-block" },
    { filterId: "filter2_d_0_1", name: "Auditorium", id: "building-auditorium" },
    { filterId: "filter3_d_0_1", name: "Sports Hostel", id: "building-sports-hostel" },
    { filterId: "filter4_d_0_1", name: "BVoc Block", id: "building-bvoc" },
    { filterId: "filter5_d_0_1", name: "Administrative Office", id: "building-admin-office" },
    { filterId: "filter6_d_0_1", name: "NSS/NCC Office", id: "building-nss-ncc" },
    { filterId: "filter7_d_0_1", name: "Audio Visual Theater", id: "building-av-theater" },
    { filterId: "filter8_d_0_1", name: "Library", id: "building-library" },
    { filterId: "filter9_d_0_1", name: "EMEA Training College", id: "building-emea-training" },
    { filterId: "filter10_d_0_1", name: "Ladies Hostel", id: "building-ladies-hostel" },
    { filterId: "filter11_d_0_1", name: "Business Administration Department", id: "building-bba" },
    { filterId: "filter12_d_0_1", name: "RUSA Building", id: "building-rusa" },
    { filterId: "filter13_d_0_1", name: "Boys Washroom", id: "building-boys-washroom" },
    { filterId: "filter14_d_0_1", name: "Canteen", id: "building-canteen" },
    { filterId: "filter15_d_0_1", name: "Commerce Department", id: "building-commerce-block" },
    { filterId: "filter16_d_0_1", name: "Prayer Hall", id: "building-prayer-hall" },
    { filterId: "filter17_d_0_1", name: "Cooperative Store", id: "building-cooperative" }
];

// Standalone SVG buildings/landmarks that don't have <g filter> groups
const standaloneSvgBuildings = [
    { selector: 'rect[fill="#7BE5F8"]', name: "Basketball Court", id: "building-basketball" },
    { selector: 'rect[fill="#BA521A"]', name: "Basketball Court", id: "building-basketball-inner" },
    { selector: 'rect[fill="#B68A5A"]', name: "NCC Ground", id: "building-ncc-ground" },
    { selector: 'path[d^="M2147.55 414.766"]', name: "Mahogany Park", id: "building-mahogany-park" }
];

let currentSelectedSvgBuilding = null;

function initializeSVGBuildings() {
    const svgEl = document.getElementById("campusMap");
    if (!svgEl) return;

    // 1. Initialize filter-group buildings (scoped to svgEl)
    svgBuildingMap.forEach(item => {
        const group = svgEl.querySelector(`g[filter*="${item.filterId}"]`);
        if (group) {
            group.classList.add("svg-building");
            group.setAttribute("data-location", item.name);
            group.setAttribute("id", item.id);
            group.setAttribute("tabindex", "0");
            group.setAttribute("role", "button");
            group.setAttribute("aria-label", item.name);
        }
    });

    // 2. Initialize standalone SVG elements (Basketball Court, NCC Ground, Mahogany Park)
    standaloneSvgBuildings.forEach(item => {
        const elements = svgEl.querySelectorAll(item.selector);
        elements.forEach(el => {
            el.classList.add("svg-building");
            el.setAttribute("data-location", item.name);
            el.setAttribute("id", item.id);
            el.setAttribute("tabindex", "0");
            el.setAttribute("role", "button");
            el.setAttribute("aria-label", item.name);
        });
    });
}

function handleBuildingClick(locationName, buildingElement) {
    if (currentSelectedSvgBuilding) {
        currentSelectedSvgBuilding.classList.remove("svg-building-selected");
    }

    if (buildingElement) {
        buildingElement.classList.add("svg-building-selected");
        currentSelectedSvgBuilding = buildingElement;
    }

    const data = destinations[locationName] || {
        building: locationName,
        floor: "Ground Floor",
        route: "Follow highlighted route"
    };

    const resultBox = document.getElementById("result");
    if (resultBox) {
        let floorInfoHTML = "";
        if (locationName === "Main Block") {
            floorInfoHTML = `
                <div class="mb-2"><strong>Ground Floor:</strong> Economics Dept, Language Dept, West Asian Studies</div>
                <div class="mb-2"><strong>First Floor:</strong> Principal Room, College Office, CS Dept, English Dept, Microbiology Dept</div>
                <div><strong>Second Floor:</strong> Seminar Hall, Biochemistry Dept, Biotechnology Dept</div>
            `;
        } else if (locationName === "Commerce Department" || locationName === "Commerce Block") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Commerce Department, B.Com & M.Com Classrooms</div>
            `;
        } else if (locationName === "Business Administration Department" || locationName === "BBA Department" || locationName === "BBA") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Business Administration Department (BBA) Classrooms & Faculty</div>
            `;
        } else if (locationName === "RUSA Building") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Mathematics & Physics Departments, Research Labs</div>
            `;
        } else if (locationName === "BVoc Block") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Logistics, Accounting & Finance Departments</div>
            `;
        } else if (locationName === "Administrative Office") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> College Administrative Office, Accounts & Admission Desk</div>
            `;
        } else if (locationName === "Library" || locationName === "Library Building") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Central Library, Reading Hall & Digital Reference Section</div>
            `;
        } else if (locationName === "Audio Visual Theater") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> AV Theater & Multimedia Screening Hall</div>
            `;
        } else if (locationName === "NSS/NCC Office") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> NSS Office, NCC Cadet Room & Extension Services Desk</div>
            `;
        } else if (locationName === "Cooperative Store") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Students Cooperative Store, Textbooks & Stationery Desk</div>
            `;
        } else if (locationName === "Prayer Hall") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Campus Prayer Hall & Quiet Area</div>
            `;
        } else if (locationName === "Basketball Court") {
            floorInfoHTML = `
                <div><strong>Outdoor Facility:</strong> Campus Basketball Court & Sports Facility</div>
            `;
        } else if (locationName === "Sports Hostel") {
            floorInfoHTML = `
                <div><strong>Hostel Building:</strong> Sports Hostel Rooms & Amenities</div>
            `;
        } else if (locationName === "Canteen") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> Campus Canteen & Refreshment Center</div>
            `;
        } else if (locationName === "Boys Washroom") {
            floorInfoHTML = `
                <div><strong>Facility:</strong> Boys Washroom & Restroom</div>
            `;
        } else if (locationName === "Auditorium") {
            floorInfoHTML = `
                <div><strong>Main Building:</strong> College Auditorium & Cultural Center</div>
            `;
        } else if (locationName === "EMEA Training College") {
            floorInfoHTML = `
                <div><strong>Ground Floor:</strong> B.Ed Training Department & Classrooms</div>
            `;
        } else if (locationName === "Ladies Hostel") {
            floorInfoHTML = `
                <div><strong>Hostel Building:</strong> Campus Ladies Hostel & Mess</div>
            `;
        } else if (locationName === "Mahogany Park") {
            floorInfoHTML = `
                <div><strong>Campus Landmark:</strong> Green Campus Park & Recreation Area</div>
            `;
        } else if (locationName === "NCC Ground") {
            floorInfoHTML = `
                <div><strong>Outdoor Facility:</strong> College NCC Parade & Sports Ground</div>
            `;
        } else if (data.floor) {
            floorInfoHTML = `<div><strong>Floor Info:</strong> ${data.floor}</div>`;
        }

        resultBox.innerHTML = `
            <div class="building-info-card">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="fw-bold text-slate-900 mb-0"><i class="bi bi-building-check text-primary me-2"></i>${locationName}</h4>
                    <span class="badge bg-primary-subtle text-primary fw-semibold">Interactive Landmark</span>
                </div>
                <hr class="my-2">
                <div class="fs-7 text-slate-700 mb-3">
                    ${floorInfoHTML}
                </div>
                <div class="d-flex flex-wrap gap-2 pt-2 border-top justify-content-between align-items-center">
                    <span class="fs-8 text-slate-500"><i class="bi bi-info-circle me-1"></i> Interactive Landmark</span>
                    <a href="../" class="btn btn-sm btn-outline-primary rounded-pill px-3 text-decoration-none">
                        <i class="bi bi-compass me-1"></i> Plan Route on Home
                    </a>
                </div>
            </div>
        `;
    }
}

window.onload = function () {
    initializeSVGBuildings();

    const campusMap = document.getElementById("campusMap");
    if (campusMap) {
        campusMap.addEventListener("click", function (event) {
            const buildingGroup = event.target.closest(".svg-building");
            if (!buildingGroup) return;
            const locationName = buildingGroup.getAttribute("data-location");
            if (locationName) {
                handleBuildingClick(locationName, buildingGroup);
            }
        });

        campusMap.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                const buildingGroup = event.target.closest(".svg-building");
                if (!buildingGroup) return;
                event.preventDefault();
                const locationName = buildingGroup.getAttribute("data-location");
                if (locationName) {
                    handleBuildingClick(locationName, buildingGroup);
                }
            }
        });
    }

    // Read route selections passed from Page 1
    const start = localStorage.getItem("from");
    const destination = localStorage.getItem("to");

    if (start && destination) {
        calculateAndDisplayRoute(start, destination);
    } else {
        showNoRouteState();
    }

    // Reset Route Button in Navbar
    const resetBtn = document.getElementById("resetRouteBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            clearMarkers();
            if (currentSelectedSvgBuilding) {
                currentSelectedSvgBuilding.classList.remove("svg-building-selected");
                currentSelectedSvgBuilding = null;
            }
            showNoRouteState();
        });
    }

    // Center Map Button (Floating Map Controls)
    const recenterBtn = document.getElementById("recenterBtn");
    const resetPanzoom = () => {
        if (panzoom) {
            panzoom.reset();
        }
    };
    if (recenterBtn) recenterBtn.addEventListener("click", resetPanzoom);
};

document.getElementById("mainBlock").addEventListener("click", function () {

    clearMarkers();
    this.classList.add("active-marker");

    document.getElementById("result").innerHTML = `

    <h3>Main Block</h3>

    <p><b>Ground Floor:</b></p>
    <ul>
    <li>Economics</li>
    <li>Languages</li>
    <li>West Asian Studies</li>
    </ul>

    <p><b>First Floor:</b></p>
    <ul>
    <li>Principal Room</li>
    <li>College Office</li>
    <li>Computer Science</li>
    <li>English</li>
    <li>Microbiology</li>
    </ul>

    <p><b>Second Floor:</b></p>
    <ul>
    <li>Seminar Hall</li>
    <li>Biochemistry</li>
    <li>Biotechnology</li>
    </ul>

    `;

});

document.getElementById("commerceBlock").addEventListener("click", function () {

    clearMarkers();
    this.classList.add("active-marker");

    document.getElementById("result").innerHTML = `

    <h3>Commerce Block</h3>

    <p><b>Ground Floor:</b></p>

    <ul>
    <li>Commerce Department</li>
    </ul>

    `;

});

document.getElementById("rusaBlock").addEventListener("click", function () {

    clearMarkers();
    this.classList.add("active-marker");

    document.getElementById("result").innerHTML = `

    <h3>RUSA Building</h3>

    <ul>
    <li>Mathematics & Physics Department (Double Main)</li>
    </ul>

    `;

});

document.getElementById("bvocBlock").addEventListener("click", function () {

    clearMarkers();
    this.classList.add("active-marker");

    document.getElementById("result").innerHTML = `

    <h3>BVoc Block</h3>

    <ul>
    <li>BVoc Logistics Management</li>
    <li>BVoc Professional Accounting & Taxation</li>
    <li>BVoc Islamic Finance</li>
    </ul>

    `;

});

const junctionCoords = {

    J1: { x: 600, y: 505 },
    J2: { x: 650, y: 490 },
    J3: { x: 430, y: 465 },
    J4: { x: 520, y: 308 },
    J5: { x: 606, y: 315 },
    J6A: { x: 624, y: 160 },
    J6B: { x: 540, y: 45 },
    J7: { x: 680, y: 160 },
    J8: { x: 340, y: 308 },
    J9: { x: 633, y: 300 },
    J10: { x: 810, y: 202 },
    J11: { x: 628, y: 417 },
    J12: { x: 259, y: 348 },
    J13: { x: 518, y: 468 },
    J14: { x: 526, y: 354 },
    J15: { x: 260, y: 469 },
    J16: { x: 397, y: 363 },
    J17: { x: 425, y: 308 },
    J18: { x: 601, y: 468 },
    J19: { x: 260, y: 500 },
    J20: { x: 600, y: 417 },
    J21: { x: 653, y: 308 },
    J22: { x: 340, y: 330 },
    J23: { x: 221, y: 348 },
    J24: { x: 261, y: 308 },
    J25: { x: 312, y: 308 },
    J26: { x: 312, y: 267 },
    J27: { x: 430, y: 485 },
    J28: { x: 670, y: 265 },
    J29: { x: 679, y: 243 },
    J30: { x: 685, y: 205 },
    J31: { x: 709, y: 155 },
    J32: { x: 624, y: 135 },
    J33: { x: 555, y: 160 },
    J34: { x: 555, y: 135 },
    J35: { x: 389, y: 308 },
    J36: { x: 380, y: 240 },
    J37: { x: 397, y: 187 },
    J38: { x: 438, y: 90 },
    J39: { x: 465, y: 65 },
    J40: { x: 540, y: 68 },
    J41: { x: 540, y: 18 },
    J42: { x: 690, y: 70 },
    J43: { x: 709, y: 70 },
    J44: { x: 695, y: 20 },
    J45: { x: 715, y: 20 },
    J46: { x: 606, y: 270 },

};

const graph = {

    J1: ["J2", "J18"],
    J2: ["J1"],

    J18: ["J1", "J5", "J13", "J20"],
    J20: ["J18", "J11"],
    J11: ["J20", "J5"],

    J5: ["J18", "J9", "J21", "J4", "J46"],

    J9: ["J5", "J28"],
    J28: ["J9", "J29"],
    J29: ["J28", "J30"],
    J30: ["J29", "J7", "J10"],

    J10: ["J30"],

    J7: ["J30", "J31", "J42", "J6A"],

    J31: ["J7"],
    J42: ["J7", "J43", "J44"],
    J43: ["J42"],
    J44: ["J42", "J45"],
    J45: ["J44"],

    J6A: ["J7", "J32", "J33"],
    J32: ["J6A"],
    J33: ["J6A", "J34"],
    J34: ["J33"],

    J46: ["J5"],

    J4: ["J5", "J17", "J14", "J35"],

    J14: ["J4"],

    J17: ["J4", "J16"],
    J16: ["J17"],

    J35: ["J4", "J8", "J36"],

    J8: ["J35", "J22", "J25"],
    J22: ["J8"],

    J25: ["J8", "J24", "J26"],
    J26: ["J25"],

    J24: ["J25", "J12"],
    J12: ["J24", "J23", "J15"],

    J23: ["J12"],

    J15: ["J12", "J19"],
    J19: ["J15"],

    J36: ["J35", "J37"],
    J37: ["J36", "J38"],
    J38: ["J37", "J39"],
    J39: ["J38", "J6B"],

    J6B: ["J39", "J40", "J41"],

    J40: ["J6B"],
    J41: ["J6B"],

    J13: ["J18", "J3"],
    J3: ["J13", "J27"],
    J27: ["J3"],

    J21: ["J5"]

};

const locationJunction = {

    "Main Gate": "J1",

    "Main Block": "J46",
    "Economics Department": "J46",
    "Language Department": "J46",
    "West Asian Studies Department": "J46",
    "Principal Room": "J46",
    "College Office": "J46",
    "Computer Science Department": "J46",
    "English Department": "J46",
    "Microbiology Department": "J46",
    "Seminar Hall": "J46",
    "Biochemistry Department": "J46",
    "Biotechnology Department": "J46",

    "Commerce Department": "J40",
    "Business Administration Department": "J41",

    "RUSA Building": "J23",
    "Mathematics & Physics Department": "J23",

    "BVoc Block": "J13",

    "Library": "J29",
    "Library Building": "J29",

    "Prayer Hall": "J34",
    "Cooperative Store": "J32",

    "Canteen": "J16",
    "Bamboo Lake": "J14",
    "Basketball Court": "J27",
    "Sports Hostel": "J19",
    "Boys Washroom": "J22",
    "Auditorium": "J26",

    "NSS/NCC Office": "J11",
    "Audio Visual Theater": "J21",

    "EMEA Training College": "J10",
    "Mahogany Park": "J31",
    "NCC Ground": "J43",
    "Ladies Hostel": "J45",
    "Administrative Office": "J2"
};

function findShortestPath(start, end) {

    let queue = [[start]];
    let visited = [];

    visited.push(start);

    while (queue.length > 0) {

        let path = queue.shift();

        let node = path[path.length - 1];

        if (node === end) {
            return path;
        }

        if (!graph[node]) return null;

        graph[node].forEach(function (neighbour) {

            if (!visited.includes(neighbour)) {

                visited.push(neighbour);

                let newPath = [...path, neighbour];

                queue.push(newPath);
            }

        });

    }

    return null;

}

function drawRoute(routeArray) {

    let svg = document.getElementById("routeLayer");
    svg.innerHTML = "";

    const scaleX = 2.9764;
    const offsetX = -317;
    const scaleY = 2.9872;
    const offsetY = 20;

    let points = "";

    routeArray.forEach(junction => {
        const coords = junctionCoords[junction];
        if (coords) {
            const svgX = Math.round(coords.x * scaleX + offsetX);
            const svgY = Math.round(coords.y * scaleY + offsetY);
            points += `${svgX},${svgY} `;
        }
    });

    svg.innerHTML = `
    <defs>
        <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="5"
            orient="auto">

            <path
                d="M0,0 L10,5 L0,10 L3,5 Z"
                fill="yellow"/>

        </marker>
    </defs>

    <polyline
        points="${points}"
        fill="none"
        stroke="#FFD700"
        stroke-width="18"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="24 16"
        class="route"/>
    `;
}

const mapWrapper = document.getElementById("mapWrapper");

const panzoom = Panzoom(mapWrapper, {

    maxScale: 5,
    minScale: 1,

    contain: "outside"

});

document.getElementById("zoomIn").addEventListener("click", () => {

    panzoom.zoomIn();

});

document.getElementById("zoomOut").addEventListener("click", () => {

    panzoom.zoomOut();

});

// Mouse wheel zoom

mapWrapper.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);

