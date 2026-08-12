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
            Find Your Way <br className="hero-br" />
            <span className="heading-highlight">Around Campus.</span>
          </h1>

          <p className="hero-description">
            Find buildings, departments and important campus locations with a simple interactive navigation system designed for EMEA College.
          </p>

          <div className="hero-actions">
            <a href="https://emeacollege.ac.in/" className="hero-primary-cta">
              Explore Campus <i className="bi bi-arrow-right"></i>
            </a>
            <a href="#search" className="hero-secondary-cta">
              <i className="bi bi-compass"></i> Find a Route
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
              src="emea.png"
              alt="EMEA College Campus Map Preview"
              className="hero-map-img"
            />
            <div className="hero-card-overlay"></div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-right">
              <i className="bi bi-lightning-charge-fill text-gold"></i>
              <span>Optimal BFS Walking Routes</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <i className="bi bi-geo-alt-fill text-blue"></i>
              <span>Interactive Location Junctions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;