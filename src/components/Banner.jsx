import "../styles/banner.css";

function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <div className="banner-text">
          <div className="hero-pill">
            <span className="pill-dot"></span>
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
            <a href="#search" className="hero-primary-cta" aria-label="Jump to Route Finder">
              <i className="bi bi-compass-fill hero-lead-icon" aria-hidden="true"></i>
              <span>Find a Route</span>
              <i className="bi bi-arrow-right hero-arrow-icon" aria-hidden="true"></i>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">35+</span>
              <span className="stat-label">Campus Locations</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">BFS</span>
              <span className="stat-label">Shortest-Path Logic</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Interactive Map</span>
            </div>
          </div>
        </div>

        <div className="banner-visual">
          <div className="hero-card-frame">
            <img
              src={`${import.meta.env.BASE_URL}emea.png`}
              alt="CamMap EMEA College campus map preview"
              className="hero-map-img"
              width="500"
              height="500"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-card-overlay"></div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-right">
              <i className="bi bi-lightning-charge-fill text-gold" aria-hidden="true"></i>
              <span>Optimal BFS Walking Routes</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <i className="bi bi-geo-alt-fill text-blue" aria-hidden="true"></i>
              <span>Interactive Location Junctions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
