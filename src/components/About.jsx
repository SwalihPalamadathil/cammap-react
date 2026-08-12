import "../styles/About.css";

function About() {
  return (
    <div className="about-wrapper">
      {/* 1. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="section-how">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-diagram-3-fill"></i> Simple 3-Step Process
            </span>
            <h2>How CamMap Works</h2>
            <p>Navigate EMEA College campus in three effortless steps.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="bi bi-geo-alt-fill text-blue"></i>
              </div>
              <h3>Choose Starting Point</h3>
              <p>Select where you currently are from the 35+ indexed campus locations.</p>
            </div>

            <div className="step-connector">
              <i className="bi bi-chevron-right"></i>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="bi bi-pin-map-fill text-gold"></i>
              </div>
              <h3>Select Destination</h3>
              <p>Pick your destination department, auditorium, block, or facility.</p>
            </div>

            <div className="step-connector">
              <i className="bi bi-chevron-right"></i>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="bi bi-signpost-2-fill text-green"></i>
              </div>
              <h3>Follow the Route</h3>
              <p>Follow the BFS highlighted path on the vector map to reach your goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="features" className="section-features">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-stars"></i> System Capabilities
            </span>
            <h2>Designed for Seamless Exploration</h2>
            <p>Everything you need to navigate EMEA College with confidence.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-map-fill"></i>
              </div>
              <h3>Interactive SVG Map</h3>
              <p>High-precision SVG campus layout with zoom, pan, and interactive junction points.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-signpost-split-fill"></i>
              </div>
              <h3>Smart Route Finding</h3>
              <p>Breadth-First Search (BFS) algorithm computes the shortest walking distance instantly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-building-check"></i>
              </div>
              <h3>Department Search</h3>
              <p>Instant access to all 35 academic departments, offices, hostels, and sports facilities.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-person-check-fill"></i>
              </div>
              <h3>Intuitive Navigation</h3>
              <p>Clean interface tailored for new students, visiting parents, faculty, and guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS / MAP PREVIEW SECTION */}
      <section className="section-map-preview">
        <div className="section-container">
          <div className="map-preview-card">
            <div className="map-preview-text">
              <span className="preview-badge">Interactive Map Ready</span>
              <h2>Explore EMEA College With Confidence</h2>
              <p>
                Access the full vector canvas map featuring interactive junctions, location search, and turn-by-turn visual path highlighting.
              </p>

              <div className="preview-features-list">
                <div className="list-item">
                  <i className="bi bi-check-circle-fill"></i> Zero latency shortest-path calculation
                </div>
                <div className="list-item">
                  <i className="bi bi-check-circle-fill"></i> Responsive pinch & zoom map view
                </div>
                <div className="list-item">
                  <i className="bi bi-check-circle-fill"></i> Direct turn estimation & junction breakdown
                </div>
              </div>

              <a href="/map/index.html" className="map-cta-btn">
                Open Campus Map <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="map-preview-graphic">
              <div className="preview-image-box">
                <img src="/map/camMap ui.svg" alt="CamMap SVG Preview" className="preview-svg" />
                <div className="preview-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / PURPOSE SECTION */}
      <section id="about" className="section-purpose">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-heart-fill text-gold"></i> Purpose & Value
            </span>
            <h2>Built for the Entire EMEA Community</h2>
            <p>
              CamMap simplifies daily campus navigation by eliminating confusion and saving travel time.
            </p>
          </div>

          <div className="purpose-grid">
            <div className="purpose-card">
              <div className="purpose-badge-icon">🎓</div>
              <h4>New Students</h4>
              <p>Find lecture halls, laboratories, and departmental blocks on your first day without stress.</p>
            </div>

            <div className="purpose-card">
              <div className="purpose-badge-icon">👨‍👩‍👧</div>
              <h4>Parents & Visitors</h4>
              <p>Locate the Principal's office, administrative block, and seminar halls effortlessly.</p>
            </div>

            <div className="purpose-card">
              <div className="purpose-badge-icon">📚</div>
              <h4>Faculty & Staff</h4>
              <p>Quickly guide guests and event attendees to auditoriums, parks, and prayer halls.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;