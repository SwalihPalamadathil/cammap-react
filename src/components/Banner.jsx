import "../styles/banner.css";

function Banner() {
  return (
    <section className="banner" id="home">
      {/* Precision Blueprint Grid */}
      <div className="hero-grid-bg" aria-hidden="true"></div>

      {/* Cartographic Contour Lines & Animated Route Line Behind Hero */}
      <div className="hero-route-line-wrap" aria-hidden="true">
        <svg 
          className="hero-route-svg" 
          viewBox="0 0 1200 480" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic cartographic contour paths (10-12% opacity) */}
          <path 
            d="M 60,420 C 180,380 240,440 380,390 C 520,340 590,390 720,310 C 850,230 940,280 1140,200" 
            stroke="var(--blue-600)" 
            strokeWidth="1" 
            strokeOpacity="0.12" 
            vectorEffect="non-scaling-stroke"
          />
          <path 
            d="M 40,460 C 220,410 320,470 480,410 C 640,350 720,410 860,300 C 1000,190 1060,250 1180,180" 
            stroke="var(--blue-600)" 
            strokeWidth="1" 
            strokeOpacity="0.10" 
            vectorEffect="non-scaling-stroke"
          />
          <path 
            d="M 160,350 C 280,300 380,350 510,280 C 640,210 740,260 880,170 C 1020,80 1080,140 1160,90" 
            stroke="var(--blue-600)" 
            strokeWidth="1" 
            strokeOpacity="0.14" 
            vectorEffect="non-scaling-stroke"
          />

          {/* Active 2px route polyline with node dots */}
          <polyline 
            className="precision-route-line" 
            points="120,400 360,320 480,360 680,210 820,240 1020,130" 
            stroke="var(--blue-600)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="120" cy="400" r="4" fill="var(--blue-600)" />
          <circle cx="360" cy="320" r="3" fill="var(--blue-600)" />
          <circle cx="480" cy="360" r="3" fill="var(--blue-600)" />
          <circle cx="680" cy="210" r="3" fill="var(--blue-600)" />
          <circle cx="820" cy="240" r="3" fill="var(--blue-600)" />
          <circle cx="1020" cy="130" r="4" fill="var(--blue-600)" />

          {/* Travelling marker along the route */}
          <circle 
            className="hero-travelling-marker" 
            r="4.5" 
            fill="var(--blue-600)" 
            stroke="#FFFFFF" 
            strokeWidth="2.5" 
          />
        </svg>
      </div>

      <div className="banner-container">
        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className="banner-text">
          <div className="hero-pill">
            <span className="pill-line" aria-hidden="true"></span>
            <span className="pill-text">EMEA COLLEGE CAMPUS NAVIGATION</span>
          </div>

          <h1 className="hero-heading">
            Navigate EMEA College <br className="hero-br" />
            <span className="heading-highlight">With CamMap.</span>
          </h1>

          <p className="hero-description">
            CamMap is the interactive campus map and route finding tool for EMEA College. Locate academic departments, administrative buildings, hostels, and student facilities with zero-latency shortest path navigation.
          </p>

          <div className="hero-actions">
            <a href="#search" className="hero-primary-cta" aria-label="Find a Route">
              <span className="hero-cta-compass" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="hero-cta-label">Find a Route</span>
              <span className="hero-arrow-bubble" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero-arrow-icon">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: CAMPUS ILLUSTRATION & DECORATIVE STICKERS */}
        <div className="banner-visual">
          {/* Layered Under-Panel (offset down-left for spatial depth) */}
          <div className="hero-stage-underlay" aria-hidden="true"></div>

          <div className="hero-card-frame">
            {/* Top and Left Ruler Tracks */}
            <div className="stage-ruler-top" aria-hidden="true"></div>
            <div className="stage-ruler-left" aria-hidden="true"></div>

            {/* Precision Crop Mark Corner Ticks */}
            <span className="crop-tick tick-tl" aria-hidden="true"></span>
            <span className="crop-tick tick-tr" aria-hidden="true"></span>
            <span className="crop-tick tick-bl" aria-hidden="true"></span>
            <span className="crop-tick tick-br" aria-hidden="true"></span>

            <img
              src={`${import.meta.env.BASE_URL}emea.png`}
              alt="CamMap EMEA College campus map preview"
              className="hero-map-img"
              width="500"
              height="500"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-card-overlay" aria-hidden="true"></div>

            {/* Top-Right Sticker & Dotted Route Doodle */}
            <div className="hero-sticker-wrap sticker-tr-wrap" aria-hidden="true">
              <svg className="hero-doodle-curve" width="84" height="46" viewBox="0 0 84 46" fill="none">
                <path
                  d="M 8 36 C 22 14, 54 40, 74 12"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  strokeOpacity="0.7"
                />
                <circle cx="74" cy="12" r="3" fill="#2563EB" />
                <circle cx="74" cy="12" r="5.5" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.35" />
              </svg>

              <div className="hero-sticker sticker-tr">
                <div className="sticker-icon-badge compass-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#2563EB" />
                    <polygon points="12 5 14.5 12 12 19 9.5 12" fill="#FDE68A" />
                    <polygon points="12 5 14.5 12 12 12" fill="#FFFFFF" />
                    <polygon points="12 19 9.5 12 12 12" fill="#93C5FD" />
                    <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
                  </svg>
                </div>
                <div className="sticker-content">
                  <span className="sticker-title">Smart Campus</span>
                  <span className="sticker-sub">Interactive Guide</span>
                </div>
                <div className="sticker-accent-sun">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="12" y1="20" x2="12" y2="23" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="1" y1="12" x2="4" y2="12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="20" y1="12" x2="23" y2="12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom-Left Sticker & Hand-Drawn Sketch Arrow Doodle */}
            <div className="hero-sticker-wrap sticker-bl-wrap" aria-hidden="true">
              <div className="hero-sticker sticker-bl">
                <div className="sticker-icon-badge tree-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M 12 3 C 8.5 3 6 5.5 6 9 C 6 11.5 7.5 13.5 9.5 14.3 L 9.5 20 L 14.5 20 L 14.5 14.3 C 16.5 13.5 18 11.5 18 9 C 18 5.5 15.5 3 12 3 Z"
                      fill="#BBF7D0"
                      stroke="#059669"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M 12 8 L 12 16" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 12 11 L 10 9.5" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M 12 13 L 14 11.5" stroke="#047857" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="sticker-content">
                  <span className="sticker-title">EMEA College</span>
                  <span className="sticker-status">
                    <span className="status-dot"></span>
                    <span>Campus Active</span>
                  </span>
                </div>
              </div>

              <svg className="hero-doodle-arrow" width="62" height="40" viewBox="0 0 62 40" fill="none">
                <path
                  d="M 6 32 C 22 38, 44 30, 48 12"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline
                  points="39,16 48,10 54,18"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Playful Floating Sparkles & Clouds */}
            <div className="hero-sparkle sparkle-tl" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M 12 0 L 14.5 9.5 L 24 12 L 14.5 14.5 L 12 24 L 9.5 14.5 L 0 12 L 9.5 9.5 Z" />
              </svg>
            </div>
            <div className="hero-sparkle sparkle-br" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#3B82F6">
                <path d="M 12 0 L 14 10 L 24 12 L 14 14 L 12 24 L 10 14 L 0 12 L 10 10 Z" />
              </svg>
            </div>
            <div className="hero-doodle-cloud" aria-hidden="true">
              <svg width="32" height="18" viewBox="0 0 34 20" fill="none">
                <path
                  d="M 6 16 A 5 5 0 0 1 8 7 A 6 6 0 0 1 18 5 A 6.5 6.5 0 0 1 27 9 A 5 5 0 0 1 28 16 Z"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#EFF6FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
