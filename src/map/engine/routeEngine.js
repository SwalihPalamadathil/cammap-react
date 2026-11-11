/**
 * CamMap Route Engine (ported verbatim from original script.js)
 */

export const destinations = {

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

export const junctionCoords = {

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

export const graph = {

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

export const locationJunction = {

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

export function findShortestPath(start, end){

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

export function buildRoutePoints(routeArray) {
    if (!routeArray || routeArray.length === 0) return "";
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

    return points;
}

export function buildRouteCoords(routeArray) {
    if (!routeArray || routeArray.length === 0) return [];
    const scaleX = 2.9764;
    const offsetX = -317;
    const scaleY = 2.9872;
    const offsetY = 20;

    const coordsList = [];
    routeArray.forEach(junction => {
        const coords = junctionCoords[junction];
        if (coords) {
            const x = Math.round(coords.x * scaleX + offsetX);
            const y = Math.round(coords.y * scaleY + offsetY);
            coordsList.push({ junction, x, y });
        }
    });
    return coordsList;
}

export function formatWalkTime(routeLength) {
    const seconds = routeLength * 15;
    if (seconds >= 60) {
        return Math.ceil(seconds / 60) + " min";
    }
    return seconds + " sec";
}
