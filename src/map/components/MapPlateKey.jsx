/**
 * CampusExplorer — Premium Doodle & Sticker Campus Illustration Board
 * Replaces the technical Cartographic Survey Reference panel with an
 * artistic, editorial, hand-drawn and 3D-stickered campus explorer experience.
 */
export function MapPlateKey() {
  return (
    <div className="map-plate-key-panel" aria-label="Campus Explorer illustrated showcase">
      <div className="campus-explorer-card">
        {/* Editorial Top Hairline Accent */}
        <span className="explorer-top-hairline" aria-hidden="true"></span>

        {/* Precision Registration Corner Ticks */}
        <span className="crop-tick tick-tl" aria-hidden="true"></span>
        <span className="crop-tick tick-tr" aria-hidden="true"></span>
        <span className="crop-tick tick-bl" aria-hidden="true"></span>
        <span className="crop-tick tick-br" aria-hidden="true"></span>

        {/* Header Block: Editorial Typography & Microcopy */}
        <div className="explorer-header">
          <div className="explorer-header-left">
            <div className="explorer-eyebrow-row">
              <span className="explorer-eyebrow-badge">
                <i className="bi bi-compass-fill explorer-badge-icon" aria-hidden="true"></i>
                <span>CAMPUS EXPLORER</span>
              </span>
              <span className="explorer-handwritten-note" aria-hidden="true">
                <span>Made for curious minds</span>
                <span className="sparkle-star">✦</span>
              </span>
            </div>

            <h3 className="explorer-title">
              Explore Every Corner<span className="title-dot">.</span>
              {/* Hand-drawn energetic underline doodle */}
              <svg
                className="explorer-title-underline"
                viewBox="0 0 210 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 3 9 C 55 3, 115 11, 207 5"
                  stroke="#2563EB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 14 12 C 70 8, 140 13, 195 9"
                  stroke="#93C5FD"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </h3>

            <p className="explorer-subtitle">
              Your campus, your way. Discover buildings, find destinations and navigate with ease.
            </p>
          </div>

          {/* Floating Category Badges / Stickers */}
          <div className="explorer-header-pills" aria-hidden="true">
            <span className="explorer-pill-tag tag-discover">
              <span className="pill-star">✦</span> DISCOVER
            </span>
            <span className="explorer-pill-tag tag-way">
              <i className="bi bi-arrow-up-right"></i> FIND YOUR WAY
            </span>
            <span className="explorer-pill-tag tag-life">
              <i className="bi bi-cup-hot"></i> CAMPUS LIFE
            </span>
          </div>
        </div>

        {/* Central Illustrated Campus Board */}
        <div className="explorer-canvas-wrapper">
          {/* Subtle Notebook Dot Grid & Doodle Layer */}
          <div className="explorer-grid-bg" aria-hidden="true"></div>

          {/* Master Campus Vector Illustration (Wide Landscape Composition) */}
          <svg
            className="campus-illustration-svg"
            viewBox="0 0 760 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Artistic illustration of EMEA College campus buildings, walkways and students"
          >
            <defs>
              {/* Gradients for Landscaping & Atmosphere */}
              <linearGradient id="skyWash" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EFF6FF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="lawnMain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0FDF4" />
                <stop offset="100%" stopColor="#DCFCE7" />
              </linearGradient>

              <linearGradient id="lawnTerrace" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>

              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </linearGradient>

              <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>

              <linearGradient id="pinGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>

              {/* Die-cut sticker drop shadow filter */}
              <filter id="stickerShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.12" />
                <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.08" />
              </filter>

              <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* SKY BACKGROUND WASH */}
            <rect x="0" y="0" width="760" height="320" rx="14" fill="url(#skyWash)" />

            {/* SKY ELEMENTS: WARM SUN & PUFFY CLOUDS */}
            {/* Sunshine with radiating doodle rays (Top-Right) */}
            <g className="sun-group" transform="translate(680, 48)">
              {/* Rays */}
              <g stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.85">
                <line x1="0" y1="-28" x2="0" y2="-21" />
                <line x1="20" y1="-20" x2="15" y2="-15" />
                <line x1="28" y1="0" x2="21" y2="0" />
                <line x1="20" y1="20" x2="15" y2="15" />
                <line x1="0" y1="28" x2="0" y2="21" />
                <line x1="-20" y1="20" x2="-15" y2="15" />
                <line x1="-28" y1="0" x2="-21" y2="0" />
                <line x1="-20" y1="-20" x2="-15" y2="-15" />
              </g>
              {/* Sun Core Sticker */}
              <circle cx="0" cy="0" r="16" fill="url(#sunGlow)" stroke="#FFFFFF" strokeWidth="3" filter="url(#stickerShadow)" />
              {/* Cute smiling face doodle */}
              <circle cx="-5" cy="-2" r="1.8" fill="#78350F" />
              <circle cx="5" cy="-2" r="1.8" fill="#78350F" />
              <path d="M -4 4 Q 0 8 4 4" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Puffy Clouds with Soft Shadows */}
            <g className="cloud-left" transform="translate(60, 38)" opacity="0.95">
              <path
                d="M 20 22 H 68 A 14 14 0 0 0 68 -6 A 18 18 0 0 0 36 -12 A 16 16 0 0 0 20 6 A 12 12 0 0 0 20 22 Z"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                filter="url(#stickerShadow)"
              />
              {/* Cloud inner blush doodle */}
              <path d="M 32 8 Q 42 12 52 8" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
            </g>

            <g className="cloud-mid" transform="translate(260, 24)" opacity="0.85">
              <path
                d="M 16 18 H 54 A 12 12 0 0 0 54 -6 A 15 15 0 0 0 28 -10 A 12 12 0 0 0 16 4 A 10 10 0 0 0 16 18 Z"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                filter="url(#stickerShadow)"
              />
            </g>

            {/* Soaring Paper Airplane with dashed looping flight trail */}
            <g className="paper-plane-group" transform="translate(190, 75)">
              <path
                d="M -130 50 C -90 10, -50 80, -10 10 C 10 -20, 40 20, 20 -5"
                stroke="#93C5FD"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              {/* Die-cut Paper Plane */}
              <g transform="translate(24, -8) rotate(-15)">
                <polygon
                  points="0,-12 20,0 0,6 4,0"
                  fill="#FFFFFF"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  filter="url(#stickerShadow)"
                />
                <line x1="0" y1="-12" x2="4" y2="0" stroke="#2563EB" strokeWidth="1" />
              </g>
            </g>

            {/* Sparkles & Star Doodles in Sky */}
            <g className="sky-sparkles" fill="#3B82F6" opacity="0.85">
              <path d="M 440 35 Q 440 42 447 42 Q 440 42 440 49 Q 440 42 433 42 Q 440 42 440 35 Z" fill="#2563EB" />
              <path d="M 520 62 Q 520 67 525 67 Q 520 67 520 72 Q 520 67 515 67 Q 520 67 520 62 Z" fill="#F59E0B" />
              <circle cx="160" cy="50" r="1.5" fill="#94A3B8" />
              <circle cx="390" cy="65" r="1.5" fill="#94A3B8" />
              <circle cx="610" cy="30" r="2" fill="#FBBF24" />
            </g>

            {/* CAMPUS GROUNDSCAPE: LAYERED ORGANIC LAWNS */}
            {/* Background Hill */}
            <path
              d="M -20 220 C 140 180, 280 200, 450 175 C 600 155, 700 170, 780 150 L 780 340 L -20 340 Z"
              fill="url(#lawnTerrace)"
              opacity="0.65"
            />
            {/* Midground Rolling Lawn */}
            <path
              d="M -20 240 C 120 215, 260 235, 410 210 C 560 190, 680 220, 780 200 L 780 340 L -20 340 Z"
              fill="url(#lawnMain)"
            />
            {/* Foreground Paved Campus Terrace */}
            <path
              d="M -20 285 C 160 265, 320 280, 480 260 C 620 245, 720 260, 780 245 L 780 340 L -20 340 Z"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />

            {/* PEDESTRIAN WINDING PATHWAYS */}
            {/* Wide Paved Walkway from West Gate to Central Quad to East Wing */}
            <path
              d="M 20 320 C 100 280, 160 270, 240 250 C 320 230, 390 235, 460 215 C 540 195, 620 220, 740 195"
              stroke="url(#pathGradient)"
              strokeWidth="36"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 20 320 C 100 280, 160 270, 240 250 C 320 230, 390 235, 460 215 C 540 195, 620 220, 740 195"
              stroke="#CBD5E1"
              strokeWidth="38"
              strokeLinecap="round"
              strokeDasharray="1 14"
              opacity="0.4"
              fill="none"
            />
            {/* Spur path to Central Tower */}
            <path
              d="M 370 230 C 375 200, 380 180, 385 160"
              stroke="#F1F5F9"
              strokeWidth="24"
              strokeLinecap="round"
              fill="none"
            />

            {/* DOTTED WALKING ROUTE (THE ANIMATED PATHWAY) */}
            <path
              className="walking-trail-glow"
              d="M 50 310 C 110 275, 170 265, 240 245 C 310 225, 360 220, 385 170 C 405 130, 455 175, 530 200 C 600 220, 660 200, 710 185"
              stroke="#DBEAFE"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
            <path
              className="walking-trail-active"
              d="M 50 310 C 110 275, 170 265, 240 245 C 310 225, 360 220, 385 170 C 405 130, 455 175, 530 200 C 600 220, 660 200, 710 185"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Directional Chevrons along Route */}
            <g stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 140 275 L 145 272 L 140 269" />
              <path d="M 285 237 L 290 234 L 285 231" />
              <path d="M 480 190 L 485 192 L 483 197" />
              <path d="M 620 216 L 625 214 L 622 209" />
            </g>

            {/* ============================================================ */}
            {/* CAMPUS ARCHITECTURAL BUILDINGS (SKETCH + 3D STICKER LOOK)     */}
            {/* ============================================================ */}

            {/* 1. WEST BUILDING: Science & Technology Pavilion (Left) */}
            <g className="building-west" transform="translate(100, 140)">
              {/* Drop shadow on ground */}
              <ellipse cx="60" cy="85" rx="64" ry="12" fill="#0F172A" opacity="0.08" />
              {/* Die-cut 3D white sticker base */}
              <rect x="0" y="0" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" filter="url(#stickerShadow)" />
              {/* Modern Glass Curtain facade */}
              <rect x="6" y="8" width="108" height="64" rx="4" fill="#EFF6FF" />
              {/* Window grid */}
              <g stroke="#93C5FD" strokeWidth="1.5">
                <line x1="33" y1="8" x2="33" y2="72" />
                <line x1="60" y1="8" x2="60" y2="72" />
                <line x1="87" y1="8" x2="87" y2="72" />
                <line x1="6" y1="28" x2="114" y2="28" />
                <line x1="6" y1="48" x2="114" y2="48" />
              </g>
              {/* Warm interior study lights */}
              <rect x="10" y="32" width="20" height="13" rx="2" fill="#FEF3C7" />
              <rect x="64" y="12" width="20" height="13" rx="2" fill="#FEF3C7" />
              <rect x="37" y="52" width="20" height="16" rx="2" fill="#FEF3C7" />
              {/* Rooftop Observatory Dome */}
              <path d="M 80 0 A 18 18 0 0 1 116 0 Z" fill="#DBEAFE" stroke="#0F172A" strokeWidth="2" />
              <line x1="98" y1="-18" x2="98" y2="-24" stroke="#0F172A" strokeWidth="2" />
              {/* Entrance canopy */}
              <rect x="44" y="62" width="32" height="18" rx="2" fill="#2563EB" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="52" y="68" width="16" height="12" rx="1" fill="#FEF3C7" />
              {/* Roof signage sticker */}
              <rect x="12" y="-14" width="56" height="12" rx="3" fill="#2563EB" />
              <text x="40" y="-5" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">SCIENCE</text>
            </g>

            {/* 2. CENTERPIECE: Main Academic Hall & Clock Tower (Center) */}
            <g className="building-center" transform="translate(310, 80)">
              {/* Ground shadow */}
              <ellipse cx="80" cy="148" rx="88" ry="14" fill="#0F172A" opacity="0.12" />

              {/* Main Hall Body (White die-cut card) */}
              <rect x="10" y="55" width="140" height="85" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" filter="url(#stickerShadow)" />

              {/* Classical Wing Roofline (Slate) */}
              <polygon points="6,55 80,32 154,55" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />

              {/* Symmetrical Window Banks */}
              <g fill="#EFF6FF" stroke="#0F172A" strokeWidth="1.2">
                {/* Left Wing Windows */}
                <rect x="20" y="65" width="16" height="24" rx="8" />
                <rect x="42" y="65" width="16" height="24" rx="8" />
                <rect x="20" y="98" width="16" height="20" rx="3" />
                <rect x="42" y="98" width="16" height="20" rx="3" />
                {/* Right Wing Windows */}
                <rect x="102" y="65" width="16" height="24" rx="8" />
                <rect x="124" y="65" width="16" height="24" rx="8" />
                <rect x="102" y="98" width="16" height="20" rx="3" />
                <rect x="124" y="98" width="16" height="20" rx="3" />
              </g>

              {/* Warm Golden Illuminated Windows */}
              <rect x="22" y="68" width="12" height="18" rx="6" fill="#FEF3C7" />
              <rect x="104" y="68" width="12" height="18" rx="6" fill="#FEF3C7" />
              <rect x="44" y="101" width="12" height="14" rx="2" fill="#FEF3C7" />

              {/* Central Portico Columns */}
              <rect x="66" y="55" width="28" height="85" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <line x1="73" y1="55" x2="73" y2="140" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="87" y1="55" x2="87" y2="140" stroke="#CBD5E1" strokeWidth="2" />

              {/* Grand Arched Entrance */}
              <path d="M 72 140 V 115 A 8 8 0 0 1 88 115 V 140 Z" fill="#0F172A" />
              <path d="M 74 140 V 117 A 6 6 0 0 1 86 117 V 140 Z" fill="#F59E0B" opacity="0.85" />

              {/* Pediment & College Seal Doodle */}
              <polygon points="62,55 80,36 98,55" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
              <circle cx="80" cy="47" r="4.5" fill="#2563EB" />
              <circle cx="80" cy="47" r="2" fill="#FFFFFF" />

              {/* Central Tower Body */}
              <rect x="65" y="0" width="30" height="38" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />

              {/* Working Clock Face (10:10) */}
              <circle cx="80" cy="18" r="10" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="80" y1="18" x2="76" y2="13" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="80" y1="18" x2="85" y2="14" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="80" cy="18" r="1.5" fill="#0F172A" />

              {/* Tower Spire with Fluttering Blue Pennant */}
              <polygon points="70,0 80,-20 90,0" fill="#2563EB" stroke="#0F172A" strokeWidth="1.8" />
              <line x1="80" y1="-20" x2="80" y2="-32" stroke="#0F172A" strokeWidth="2" />
              <path d="M 80 -32 L 98 -26 L 80 -20 Z" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.5" />

              {/* Entrance Steps */}
              <rect x="62" y="138" width="36" height="4" rx="1" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1" />
              <rect x="58" y="142" width="44" height="4" rx="1" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
            </g>

            {/* 3. EAST BUILDING: Student Center & Auditorium (Right) */}
            <g className="building-east" transform="translate(540, 135)">
              {/* Ground shadow */}
              <ellipse cx="60" cy="90" rx="66" ry="13" fill="#0F172A" opacity="0.08" />

              {/* Stepped Pavilion Card */}
              <rect x="0" y="15" width="125" height="72" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" filter="url(#stickerShadow)" />

              {/* Upper Stepped Loft */}
              <rect x="25" y="-5" width="75" height="22" rx="4" fill="#DBEAFE" stroke="#0F172A" strokeWidth="1.8" />
              <rect x="35" y="0" width="12" height="12" rx="2" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1" />
              <rect x="55" y="0" width="12" height="12" rx="2" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1" />
              <rect x="75" y="0" width="12" height="12" rx="2" fill="#FEF3C7" stroke="#0F172A" strokeWidth="1" />

              {/* Large Auditorium Double-Height Windows */}
              <rect x="12" y="26" width="30" height="44" rx="4" fill="#EFF6FF" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="27" y1="26" x2="27" y2="70" stroke="#93C5FD" strokeWidth="1.5" />
              <line x1="12" y1="48" x2="42" y2="48" stroke="#93C5FD" strokeWidth="1.5" />

              {/* Student Terrace & Planter on Roof */}
              <rect x="80" y="24" width="36" height="8" rx="2" fill="#10B981" />
              <circle cx="88" cy="20" r="5" fill="#059669" />
              <circle cx="98" cy="18" r="6" fill="#10B981" />
              <circle cx="108" cy="21" r="5" fill="#059669" />

              {/* Welcoming Entrance Doors */}
              <rect x="60" y="50" width="22" height="37" rx="3" fill="#2563EB" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="64" y="56" width="6" height="26" rx="1" fill="#FEF3C7" />
              <rect x="72" y="56" width="6" height="26" rx="1" fill="#FEF3C7" />

              {/* Rooftop Tag */}
              <rect x="72" y="-18" width="48" height="12" rx="3" fill="#10B981" />
              <text x="96" y="-9" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">HUB</text>
            </g>

            {/* CAMPUS FOUNTAIN & PLAZA (In front of Main Hall) */}
            <g className="campus-fountain" transform="translate(390, 235)">
              <ellipse cx="0" cy="0" rx="32" ry="12" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="0" cy="-2" rx="28" ry="10" fill="#93C5FD" />
              <ellipse cx="0" cy="-4" rx="22" ry="7" fill="#3B82F6" />
              {/* Fountain Water Spout Doodle */}
              <ellipse cx="0" cy="-7" rx="10" ry="4" fill="#DBEAFE" stroke="#FFFFFF" strokeWidth="1" />
              <path d="M 0 -7 Q -6 -20 0 -24 Q 6 -20 0 -7" fill="#60A5FA" opacity="0.8" />
              <path d="M 0 -24 V -28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* ============================================================ */}
            {/* LUSH BOTANICAL TREES & NATURE DOODLES                          */}
            {/* ============================================================ */}
            {/* Tree 1: Round Oak by Science Block */}
            <g className="tree-1" transform="translate(68, 205)">
              <ellipse cx="0" cy="18" rx="14" ry="5" fill="#0F172A" opacity="0.12" />
              <path d="M -2 18 V 2 C -2 -4 2 -4 2 2 V 18 Z" fill="#78350F" />
              <circle cx="0" cy="-6" r="18" fill="#10B981" stroke="#0F172A" strokeWidth="1.8" filter="url(#stickerShadow)" />
              <circle cx="-6" cy="-10" r="12" fill="#34D399" />
              <circle cx="6" cy="-2" r="10" fill="#059669" opacity="0.75" />
              {/* Leaf curl doodle */}
              <path d="M -4 -8 Q 0 -14 6 -10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Tree 2: Conical Pine by Main Hall Left */}
            <g className="tree-2" transform="translate(265, 175)">
              <ellipse cx="0" cy="22" rx="12" ry="4" fill="#0F172A" opacity="0.1" />
              <rect x="-2" y="10" width="4" height="12" fill="#78350F" />
              <polygon points="0,-24 -16,6 16,6" fill="#059669" stroke="#0F172A" strokeWidth="1.8" filter="url(#stickerShadow)" />
              <polygon points="0,-18 -13,12 13,12" fill="#10B981" opacity="0.8" />
              <polygon points="0,-10 -15,20 15,20" fill="#047857" opacity="0.6" />
            </g>

            {/* Tree 3: Fluffy Birch by Main Hall Right */}
            <g className="tree-3" transform="translate(490, 160)">
              <ellipse cx="0" cy="24" rx="15" ry="5" fill="#0F172A" opacity="0.12" />
              <path d="M -2 24 V 4 C -2 -2 2 -2 2 4 V 24 Z" fill="#78350F" />
              <circle cx="-4" cy="-4" r="16" fill="#10B981" stroke="#0F172A" strokeWidth="1.8" filter="url(#stickerShadow)" />
              <circle cx="8" cy="-8" r="14" fill="#34D399" stroke="#0F172A" strokeWidth="1.8" filter="url(#stickerShadow)" />
              <circle cx="2" cy="6" r="12" fill="#059669" />
            </g>

            {/* Tree 4: Japanese Cloud Topiary by East Hub */}
            <g className="tree-4" transform="translate(690, 200)">
              <ellipse cx="0" cy="20" rx="16" ry="5" fill="#0F172A" opacity="0.1" />
              <path d="M 0 20 Q -4 8 2 2" stroke="#78350F" strokeWidth="3" strokeLinecap="round" fill="none" />
              <ellipse cx="-6" cy="4" rx="12" ry="7" fill="#10B981" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="8" cy="-4" rx="14" ry="8" fill="#34D399" stroke="#0F172A" strokeWidth="1.5" />
              <ellipse cx="-2" cy="-14" rx="12" ry="7" fill="#059669" stroke="#0F172A" strokeWidth="1.5" />
            </g>

            {/* Shrubbery & Flower Bed Accents along Walkway */}
            <g className="flower-tufts" fill="#F43F5E">
              <circle cx="170" cy="265" r="3" />
              <circle cx="176" cy="267" r="2.5" fill="#FBBF24" />
              <circle cx="340" cy="252" r="3" />
              <circle cx="345" cy="254" r="2.5" fill="#38BDF8" />
              <circle cx="560" cy="235" r="3" fill="#FBBF24" />
              <circle cx="566" cy="237" r="2.5" />
            </g>

            {/* ============================================================ */}
            {/* CAMPUS LIFE CHARACTERS (TINY STYLIZED STUDENTS)               */}
            {/* ============================================================ */}
            {/* Student 1: Walking with Backpack along the trail */}
            <g className="student-walking" transform="translate(195, 235)">
              {/* Ground shadow */}
              <ellipse cx="0" cy="22" rx="7" ry="2.5" fill="#0F172A" opacity="0.15" />
              {/* Legs */}
              <line x1="-2" y1="12" x2="-5" y2="22" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="12" x2="6" y2="20" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              {/* Backpack */}
              <rect x="-9" y="3" width="6" height="10" rx="2" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.2" />
              {/* Torso / Jacket */}
              <rect x="-4" y="2" width="8" height="11" rx="2" fill="#2563EB" stroke="#0F172A" strokeWidth="1.5" />
              {/* Head & Hair */}
              <circle cx="0" cy="-4" r="4.5" fill="#FED7AA" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M -4 -5 C -4 -9 4 -9 4 -5 Z" fill="#0F172A" />
              {/* Campus Map in Hand */}
              <polygon points="5,8 11,5 12,11 6,13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
            </g>

            {/* Student 2: Seated on Campus Bench with Laptop */}
            <g className="student-bench" transform="translate(460, 240)">
              {/* Wooden Campus Bench */}
              <rect x="-18" y="10" width="36" height="3" rx="1" fill="#78350F" />
              <line x1="-14" y1="13" x2="-14" y2="19" stroke="#0F172A" strokeWidth="1.5" />
              <line x1="14" y1="13" x2="14" y2="19" stroke="#0F172A" strokeWidth="1.5" />
              {/* Student Body */}
              <circle cx="-4" cy="-2" r="4" fill="#FED7AA" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M -8 -3 C -8 -7 0 -7 0 -3 Z" fill="#047857" />
              <rect x="-7" y="3" width="8" height="9" rx="2" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M -7 12 H 3 V 17" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Open Laptop */}
              <polygon points="2,10 10,10 9,5 3,5" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1" />
              {/* Coffee Cup on bench */}
              <rect x="9" y="6" width="4" height="5" rx="1" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
              {/* Steam curl */}
              <path d="M 11 4 Q 13 2 11 0" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" fill="none" />
            </g>

            {/* Student 3: Riding Bicycle along Path */}
            <g className="student-bicycle" transform="translate(630, 225)">
              {/* Bike Wheels */}
              <circle cx="-14" cy="14" r="8" stroke="#0F172A" strokeWidth="1.8" fill="none" />
              <circle cx="14" cy="14" r="8" stroke="#0F172A" strokeWidth="1.8" fill="none" />
              {/* Frame */}
              <polygon points="-14,14 0,14 7,4 -7,4" stroke="#2563EB" strokeWidth="2" fill="none" />
              <line x1="0" y1="14" x2="0" y2="2" stroke="#2563EB" strokeWidth="2" />
              <line x1="7" y1="4" x2="12" y2="2" stroke="#0F172A" strokeWidth="1.5" />
              {/* Rider */}
              <circle cx="0" cy="-8" r="4" fill="#FED7AA" stroke="#0F172A" strokeWidth="1.2" />
              <path d="M -4 -9 C -4 -13 4 -13 4 -9 Z" fill="#B45309" />
              <line x1="0" y1="-4" x2="0" y2="5" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* ============================================================ */}
            {/* FLOATING 3D STICKERS & PINBOARD ANNOTATIONS (KEY HIGHLIGHTS)  */}
            {/* ============================================================ */}

            {/* START POINT PIN & BADGE (Bottom Left) */}
            <g className="sticker-start-gate" transform="translate(45, 290)">
              {/* Radar pulse ripple */}
              <circle cx="0" cy="16" r="10" stroke="#10B981" strokeWidth="1.5" opacity="0.6" fill="none" className="pulse-ripple-green" />
              {/* Die-cut Start Marker */}
              <g transform="rotate(-6)">
                <rect x="-26" y="-12" width="52" height="20" rx="10" fill="#10B981" stroke="#FFFFFF" strokeWidth="2.5" filter="url(#stickerShadow)" />
                <text x="0" y="2" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">START</text>
              </g>
            </g>

            {/* DESTINATION PIN & FLAG (Right Hub) */}
            <g className="sticker-dest-gate" transform="translate(710, 168)">
              {/* Pennant Flag Die-Cut */}
              <g transform="rotate(4)">
                <line x1="0" y1="18" x2="0" y2="-12" stroke="#0F172A" strokeWidth="2.5" />
                <polygon points="0,-12 28,-4 0,4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" filter="url(#stickerShadow)" />
                <circle cx="0" cy="18" r="3" fill="#0F172A" />
                {/* Micro text in flag */}
                <text x="8" y="-2" fill="#FFFFFF" fontSize="7" fontWeight="700" fontFamily="sans-serif">HUB</text>
              </g>
            </g>

            {/* HERO 3D BLUE LOCATION PIN (Above Main Hall) */}
            <g className="hero-campus-pin" transform="translate(390, 50)">
              {/* Animated Radar Wave on ground/roof */}
              <ellipse cx="0" cy="24" rx="18" ry="6" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.75" className="hero-pin-radar" />
              {/* Floating Pin Body */}
              <g className="hero-pin-bounce" filter="url(#stickerShadow)">
                {/* 3px White die-cut outline */}
                <path
                  d="M 0 -24 C -13 -24 -22 -14 -22 -2 C -22 12 0 28 0 28 C 0 28 22 12 22 -2 C 22 -14 13 -24 0 -24 Z"
                  fill="url(#pinGloss)"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Glossy inner rim */}
                <path
                  d="M -14 -12 A 16 16 0 0 1 14 -12"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
                {/* White Center Pip */}
                <circle cx="0" cy="-4" r="6" fill="#FFFFFF" />
                <circle cx="0" cy="-4" r="2.5" fill="#1D4ED8" />
              </g>

              {/* Floating Label: "Main Hall" */}
              <g transform="translate(28, -14) rotate(4)">
                <rect x="0" y="0" width="76" height="20" rx="5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" filter="url(#stickerShadow)" />
                <text x="38" y="13" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">Main Hall 📍</text>
              </g>
            </g>

            {/* CURVED SKETCH ARROW DOODLE (Pointing to Central Plaza) */}
            <g className="sketch-arrow-doodle" transform="translate(230, 160)">
              <path
                d="M -40 -20 Q 0 -35 25 -5"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 16 -12 L 27 -4 L 28 -18"
                stroke="#2563EB"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </svg>

          {/* ============================================================ */}
          {/* FLOATING TACTILE 3D STICKERS (LAYERED HTML ELEMENTS)          */}
          {/* ============================================================ */}

          {/* Sticker 1: Walking Time Tag */}
          <div className="floating-sticker sticker-walk-tag" title="Average walking time across campus">
            <div className="sticker-content">
              <i className="bi bi-person-walking text-primary"></i>
              <span className="sticker-bold">3 min</span>
              <span className="sticker-sub">Walk</span>
            </div>
            <span className="sticker-tape-peel" aria-hidden="true"></span>
          </div>

          {/* Sticker 2: Compass Rose Badge */}
          <div className="floating-sticker sticker-compass" title="Campus orientation compass">
            <div className="compass-face">
              <span className="compass-n">N</span>
              <div className="compass-needle" aria-hidden="true"></div>
              <span className="compass-s">S</span>
            </div>
          </div>

          {/* Sticker 3: Handwritten Explorer Note */}
          <div className="floating-sticker sticker-handwritten-card" title="Navigation hint">
            <div className="sticky-pin" aria-hidden="true"></div>
            <p className="sticky-text">
              Shortcut via Quad lawn! <span className="sticky-arrow">↗</span>
            </p>
          </div>
        </div>

        {/* Bottom Feature Strip (Replaces old technical legend) */}
        <div className="explorer-footer-strip">
          <div className="explorer-feature-item">
            <span className="feature-icon-bubble bg-blue">
              <i className="bi bi-building"></i>
            </span>
            <div className="feature-text">
              <span className="feature-title">Academic Blocks</span>
              <span className="feature-desc">All departments &amp; classrooms mapped</span>
            </div>
          </div>

          <div className="explorer-feature-divider" aria-hidden="true"></div>

          <div className="explorer-feature-item">
            <span className="feature-icon-bubble bg-green">
              <i className="bi bi-signpost-split"></i>
            </span>
            <div className="feature-text">
              <span className="feature-title">Shortest Walking Paths</span>
              <span className="feature-desc">Calculated with BFS graph routing</span>
            </div>
          </div>

          <div className="explorer-feature-divider" aria-hidden="true"></div>

          <div className="explorer-feature-item">
            <span className="feature-icon-bubble bg-amber">
              <i className="bi bi-geo-alt"></i>
            </span>
            <div className="feature-text">
              <span className="feature-title">Live Directional Cues</span>
              <span className="feature-desc">Follow highlighted lines on map above</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPlateKey;
