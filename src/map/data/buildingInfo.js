/**
 * Building & Landmark Details Data (ported verbatim from script.js)
 */

export const svgBuildingMap = [
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

export const standaloneSvgBuildings = [
    { selector: 'rect[fill="#7BE5F8"]', name: "Basketball Court", id: "building-basketball" },
    { selector: 'rect[fill="#BA521A"]', name: "Basketball Court", id: "building-basketball-inner" },
    { selector: 'rect[fill="#B68A5A"]', name: "NCC Ground", id: "building-ncc-ground" },
    { selector: 'path[d^="M2147.55 414.766"]', name: "Mahogany Park", id: "building-mahogany-park" }
];

export const buildingFloorDetails = {
    "Main Block": [
        { title: "Ground Floor", desc: "Economics Dept, Language Dept, West Asian Studies" },
        { title: "First Floor", desc: "Principal Room, College Office, CS Dept, English Dept, Microbiology Dept" },
        { title: "Second Floor", desc: "Seminar Hall, Biochemistry Dept, Biotechnology Dept" }
    ],
    "Commerce Department": [
        { title: "Ground Floor", desc: "Commerce Department, B.Com & M.Com Classrooms" }
    ],
    "Commerce Block": [
        { title: "Ground Floor", desc: "Commerce Department, B.Com & M.Com Classrooms" }
    ],
    "Business Administration Department": [
        { title: "Ground Floor", desc: "Business Administration Department (BBA) Classrooms & Faculty" }
    ],
    "BBA Department": [
        { title: "Ground Floor", desc: "Business Administration Department (BBA) Classrooms & Faculty" }
    ],
    "BBA": [
        { title: "Ground Floor", desc: "Business Administration Department (BBA) Classrooms & Faculty" }
    ],
    "RUSA Building": [
        { title: "Ground Floor", desc: "Mathematics & Physics Departments, Research Labs" }
    ],
    "BVoc Block": [
        { title: "Ground Floor", desc: "Logistics, Accounting & Finance Departments" }
    ],
    "Administrative Office": [
        { title: "Ground Floor", desc: "College Administrative Office, Accounts & Admission Desk" }
    ],
    "Library": [
        { title: "Ground Floor", desc: "Central Library, Reading Hall & Digital Reference Section" }
    ],
    "Library Building": [
        { title: "Ground Floor", desc: "Central Library, Reading Hall & Digital Reference Section" }
    ],
    "Audio Visual Theater": [
        { title: "Ground Floor", desc: "AV Theater & Multimedia Screening Hall" }
    ],
    "NSS/NCC Office": [
        { title: "Ground Floor", desc: "NSS Office, NCC Cadet Room & Extension Services Desk" }
    ],
    "Cooperative Store": [
        { title: "Ground Floor", desc: "Students Cooperative Store, Textbooks & Stationery Desk" }
    ],
    "Prayer Hall": [
        { title: "Ground Floor", desc: "Campus Prayer Hall & Quiet Area" }
    ],
    "Basketball Court": [
        { title: "Outdoor Facility", desc: "Campus Basketball Court & Sports Facility" }
    ],
    "Sports Hostel": [
        { title: "Hostel Building", desc: "Sports Hostel Rooms & Amenities" }
    ],
    "Canteen": [
        { title: "Ground Floor", desc: "Campus Canteen & Refreshment Center" }
    ],
    "Boys Washroom": [
        { title: "Facility", desc: "Boys Washroom & Restroom" }
    ],
    "Auditorium": [
        { title: "Main Building", desc: "College Auditorium & Cultural Center" }
    ],
    "EMEA Training College": [
        { title: "Ground Floor", desc: "B.Ed Training Department & Classrooms" }
    ],
    "Ladies Hostel": [
        { title: "Hostel Building", desc: "Campus Ladies Hostel & Mess" }
    ],
    "Mahogany Park": [
        { title: "Campus Landmark", desc: "Green Campus Park & Recreation Area" }
    ],
    "NCC Ground": [
        { title: "Outdoor Facility", desc: "College NCC Parade & Sports Ground" }
    ]
};
