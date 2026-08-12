
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
"Basketball Court":{
    route: "Follow highlighted route" 
},
"Sports Hostel":{
    building: "Sports Hostel",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"NSS/NCC Office":{
    building: "NSS/NCC Office",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"Audio Visual Theater":{
    building: "Audio Visual Theater",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"Bamboo Lake":{
    route: "Follow highlighted route"
},

"Boys Washroom":{
    building: "Boys Washroom",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"Auditorium":{
    building: "Auditorium",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"Library":{
    building:"Library",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"EMEA Training College":{
    building:"EMEA Training College",
    floor: "Ground Floor",
    route: "Follow highlighted route"
},

"Mahogany Park":{
    building:"Mahogany Park",
    route: "Follow highlighted route"
    
},


"Business Administration Department":{
    building:"BBA Department",
    route: "Follow highlighted route"
    
},

"NCC Ground":{
    
    route: "Follow highlighted route"
},

"Ladies Hostel":{
    building:"Ladies Hostel",
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


window.onload = function () {

    let start = localStorage.getItem("from");
    let destination = localStorage.getItem("to");

    if (!start || !destination) {
        alert("Please select start and destination first.");
        return;
    }

    let data = destinations[destination];

    clearMarkers();

    let startNode = locationJunction[start];
    let endNode = locationJunction[destination];

    if(startNode && endNode){

       let shortestRoute = findShortestPath(startNode, endNode);

       if(shortestRoute){

       drawRoute(shortestRoute);

       document.getElementById("fromResult").innerHTML = start;
       document.getElementById("toResult").innerHTML = destination;
       document.getElementById("junctionResult").innerHTML = shortestRoute.length;

       let seconds = shortestRoute.length * 15;

       if(seconds >= 60){

          let min = Math.ceil(seconds / 60);
          document.getElementById("timeResult").innerHTML = min + " min";

       }else{

          document.getElementById("timeResult").innerHTML = seconds + " sec";

       }

       document.getElementById("statusResult").innerHTML =
       `<span class="badge bg-success fs-6">Route Found</span>`;

       }

    }

    if (data.building === "Main Block")
        document.getElementById("mainBlock").classList.add("active-marker");

    if (data.building === "Commerce Block")
        document.getElementById("commerceBlock").classList.add("active-marker");

    if (data.building === "RUSA Building")
        document.getElementById("rusaBlock").classList.add("active-marker");

    if (data.building === "BVoc Block")
        document.getElementById("bvocBlock").classList.add("active-marker");

};

document.getElementById("mainBlock").addEventListener("click", function(){

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

document.getElementById("commerceBlock").addEventListener("click", function(){

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

document.getElementById("rusaBlock").addEventListener("click", function(){

    clearMarkers();
    this.classList.add("active-marker");

    document.getElementById("result").innerHTML = `

    <h3>RUSA Building</h3>

    <ul>
    <li>Mathematics & Physics Department (Double Main)</li>
    </ul>

    `;

});

document.getElementById("bvocBlock").addEventListener("click", function(){

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

    J1: {x:600, y:505},
    J2: {x:650, y:490},
    J3: {x:430, y:465},
    J4: {x:520, y:308},
    J5: {x:606, y:315},
    J6A:{x:624, y:160},
    J6B:{x:540, y:45},
    J7: {x:680, y:160},
    J8: {x:340, y:308},
    J9: {x:633, y:300},
    J10:{x:810, y:202},
    J11:{x:628, y:417},
    J12:{x:259, y:348},
    J13:{x:518, y:468},
    J14:{x:526, y:354},
    J15:{x:260, y:469},
    J16:{x:397, y:363},
    J17:{x:425, y:308},
    J18:{x:601, y:468},
    J19:{x:260, y:500},
    J20:{x:600, y:417},
    J21: {x:653, y:308},
    J22: {x:340, y:330},
    J23:{x:221, y:348},
    J24: {x:261, y:308},
    J25: {x:312, y:308},
    J26: {x:312, y:267},
    J27: {x:430, y:485},
    J28: {x:670, y:265},
    J29: {x:679, y:243},
    J30: {x:685, y:205},
    J31: {x:709, y:155}, 
    J32:{x:624, y:135},
    J33:{x:555, y:160},
    J34:{x:555, y:135},
    J35:{x:389, y:308},
    J36:{x:380, y:240},
    J37:{x:397, y:187},
    J38:{x:438, y:90},
    J39:{x:465, y:65},
    J40:{x:540, y:68},
    J41:{x:540, y:18},
    J42: {x:690, y:70},
    J43: {x:709, y:70},
    J44: {x:695, y:20},
    J45: {x:715, y:20},
    J46: {x:606, y:270},
    
};

const graph = {

    J1: ["J2","J18"],
    J2: ["J1"],

    J18:["J1","J5","J13","J20"],
    J20:["J18","J11"],
    J11:["J20","J5"],

    J5:["J18","J9","J21","J4","J46"],

    J9:["J5","J28"],
    J28:["J9","J29"],
    J29:["J28","J30"],
    J30:["J29","J7","J10"],

    J10:["J30"],

    J7:["J30","J31","J42","J6A"],

    J31:["J7"],
    J42:["J7","J43","J44"],
    J43:["J42"],
    J44:["J42","J45"],
    J45:["J44"],

    J6A:["J7","J32","J33"],
    J32:["J6A"],
    J33:["J6A","J34"],
    J34:["J33"],

    J46:["J5"],

    J4:["J5","J17","J14","J35"],

    J14:["J4"],

    J17:["J4","J16"],
    J16:["J17"],

    J35:["J4","J8","J36"],

    J8:["J35","J22","J25"],
    J22:["J8"],

    J25:["J8","J24","J26"],
    J26:["J25"],

    J24:["J25","J12"],
    J12:["J24","J23","J15"],

    J23:["J12"],

    J15:["J12","J19"],
    J19:["J15"],

    J36:["J35","J37"],
    J37:["J36","J38"],
    J38:["J37","J39"],
    J39:["J38","J6B"],

    J6B:["J39","J40","J41"],

    J40:["J6B"],
    J41:["J6B"],

    J13:["J18","J3"],
    J3:["J13","J27"],
    J27:["J3"],

    J21:["J5"]

};

const locationJunction = {

    "Main Gate":"J1",

    "Main Block":"J46",
    "Economics Department":"J46",
    "Language Department":"J46",
    "West Asian Studies Department":"J46",
    "Principal Room":"J46",
    "College Office":"J46",
    "Computer Science Department":"J46",
    "English Department":"J46",
    "Microbiology Department":"J46",
    "Seminar Hall":"J46",
    "Biochemistry Department":"J46",
    "Biotechnology Department":"J46",

    "Commerce Department":"J40",
    "Business Administration Department":"J41",

    "RUSA Building":"J23",
    "Mathematics & Physics Department":"J23",

    "BVoc Block":"J13",

    "Library":"J29",
    "Library Building":"J29",

    "Prayer Hall":"J34",
    "Cooperative Store":"J32",

    "Canteen":"J16",
    "Bamboo Lake":"J14",
    "Basketball Court":"J27",
    "Sports Hostel":"J19",
    "Boys Washroom":"J22",
    "Auditorium":"J26",

    "NSS/NCC Office":"J11",
    "Audio Visual Theater":"J21",

    "EMEA Training College":"J10",
    "Mahogany Park":"J31",
    "NCC Ground":"J43",
    "Ladies Hostel":"J45",
    "Administrative Office":"J2"
};

function findShortestPath(start, end){

    let queue = [[start]];
    let visited = [];

    visited.push(start);

    while(queue.length > 0){

        let path = queue.shift();

        let node = path[path.length - 1];

        if(node === end){
            return path;
        }

       if(!graph[node]) return null;

       graph[node].forEach(function(neighbour){

            if(!visited.includes(neighbour)){

                visited.push(neighbour);

                let newPath = [...path, neighbour];

                queue.push(newPath);
            }

        });

    }

    return null;

}

function drawRoute(routeArray){

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

