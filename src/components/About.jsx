import "../styles/About.css";

function About() {
  return (
    <div className="about-wrapper">
      {/* 1. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="section-how" aria-labelledby="how-it-works-heading">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-diagram-3-fill" aria-hidden="true"></i> Simple 3-Step Process
            </span>
            <h2 id="how-it-works-heading">How CamMap Works</h2>
            <p>Navigate EMEA College campus in three effortless steps.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="bi bi-geo-alt-fill text-blue" aria-hidden="true"></i>
              </div>
              <h3>Choose Starting Point</h3>
              <p>Select where you currently are from the 35+ indexed campus locations.</p>
            </div>

            <div className="step-connector" aria-hidden="true">
              <i className="bi bi-chevron-right"></i>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="bi bi-pin-map-fill text-gold" aria-hidden="true"></i>
              </div>
              <h3>Select Destination</h3>
              <p>Pick your destination department, auditorium, block, or facility.</p>
            </div>

            <div className="step-connector" aria-hidden="true">
              <i className="bi bi-chevron-right"></i>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="bi bi-signpost-2-fill text-green" aria-hidden="true"></i>
              </div>
              <h3>Follow the Route</h3>
              <p>Follow the BFS highlighted path on the vector map to reach your goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="features" className="section-features" aria-labelledby="features-heading">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-stars" aria-hidden="true"></i> System Capabilities
            </span>
            <h2 id="features-heading">Designed for Seamless Campus Exploration</h2>
            <p>Everything you need to navigate EMEA College with confidence.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-map-fill" aria-hidden="true"></i>
              </div>
              <h3>Interactive Vector Map</h3>
              <p>High-precision SVG campus layout with smooth zoom, pan, and interactive junction points.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-signpost-split-fill" aria-hidden="true"></i>
              </div>
              <h3>Smart Route Finding</h3>
              <p>Breadth-First Search (BFS) graph pathfinding algorithm computes the shortest walking distance instantly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-building-check" aria-hidden="true"></i>
              </div>
              <h3>Campus Directory & Search</h3>
              <p>Instant access to all 35 academic departments, administrative offices, hostels, and sports facilities.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <i className="bi bi-person-check-fill" aria-hidden="true"></i>
              </div>
              <h3>Intuitive Navigation</h3>
              <p>Clean interface tailored for new students, visiting parents, faculty, guests, and campus event attendees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS FACILITIES & DIRECTORY CONTEXT */}
      <section id="directory" className="section-directory" aria-labelledby="directory-heading">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-geo-fill" aria-hidden="true"></i> Campus Directory
            </span>
            <h2 id="directory-heading">EMEA College Campus Facilities & Locations</h2>
            <p>Explore all indexed buildings, departments, and key landmarks mapped in CamMap.</p>
          </div>

          <div className="directory-grid">
            <div className="directory-card">
              <div className="directory-header">
                <div className="directory-icon-box">
                  <i className="bi bi-mortarboard-fill text-blue" aria-hidden="true"></i>
                </div>
                <h3>Academic Departments</h3>
              </div>
              <p className="directory-desc">Undergraduate, postgraduate, and vocational departments across campus:</p>
              <ul className="directory-list">
                <li>Computer Science Department</li>
                <li>Commerce & Business Administration</li>
                <li>Economics & West Asian Studies</li>
                <li>Microbiology & Biotechnology</li>
                <li>Biochemistry Department</li>
                <li>English & Language Departments</li>
                <li>Mathematics & Physics Department</li>
                <li>BVoc Block & Vocational Centers</li>
              </ul>
            </div>

            <div className="directory-card">
              <div className="directory-header">
                <div className="directory-icon-box">
                  <i className="bi bi-building-fill text-gold" aria-hidden="true"></i>
                </div>
                <h3>Academic & Admin Buildings</h3>
              </div>
              <p className="directory-desc">Core institutional structures and student services:</p>
              <ul className="directory-list">
                <li>Main Block & Principal Room</li>
                <li>College Administrative Office</li>
                <li>Central Library & Reading Hall</li>
                <li>RUSA Building</li>
                <li>EMEA Training College</li>
                <li>College Seminar Hall</li>
                <li>College Auditorium</li>
                <li>Audio Visual Theater</li>
              </ul>
            </div>

            <div className="directory-card">
              <div className="directory-header">
                <div className="directory-icon-box">
                  <i className="bi bi-compass-fill text-green" aria-hidden="true"></i>
                </div>
                <h3>Amenities, Hostels & Grounds</h3>
              </div>
              <p className="directory-desc">Recreational, residential, and essential campus facilities:</p>
              <ul className="directory-list">
                <li>Campus Canteen & Cafeteria</li>
                <li>Prayer Hall & Cooperative Store</li>
                <li>Sports Hostel & Ladies Hostel</li>
                <li>Basketball Court & NCC Ground</li>
                <li>NSS / NCC Office</li>
                <li>Mahogany Park & Bamboo Lake</li>
                <li>Main Gate & Campus Entrances</li>
                <li>Boys & Girls Washrooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAMPUS / MAP PREVIEW SECTION */}
      <section className="section-map-preview" aria-labelledby="map-preview-heading">
        <div className="section-container">
          <div className="map-preview-card">
            <div className="map-preview-text">
              <span className="preview-badge">Interactive Map Ready</span>
              <h2 id="map-preview-heading">Explore EMEA College With Confidence</h2>
              <p>
                Access the full vector canvas map featuring interactive junctions, location search, and turn-by-turn visual path highlighting.
              </p>

              <div className="preview-features-list">
                <div className="list-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i> Zero latency shortest-path calculation
                </div>
                <div className="list-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i> Responsive pinch & zoom map view
                </div>
                <div className="list-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i> Direct turn estimation & junction breakdown
                </div>
              </div>
            </div>

            <div className="map-preview-graphic">
              <div className="preview-image-box">
                <img 
                  src={`${import.meta.env.BASE_URL}map/camMap ui.svg`} 
                  alt="Interactive EMEA College campus map interface" 
                  className="preview-svg" 
                  width="500" 
                  height="350" 
                  loading="lazy" 
                  decoding="async" 
                />
                <div className="preview-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST / PURPOSE SECTION */}
      <section id="about" className="section-purpose" aria-labelledby="purpose-heading">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-badge">
              <i className="bi bi-heart-fill text-gold" aria-hidden="true"></i> Purpose & Value
            </span>
            <h2 id="purpose-heading">Built for the Entire EMEA Community</h2>
            <p>
              CamMap simplifies daily campus navigation by eliminating confusion and saving travel time.
            </p>
          </div>

          <div className="purpose-grid">
            <div className="purpose-card">
              <div className="purpose-badge-icon" aria-hidden="true">🎓</div>
              <h3>New Students</h3>
              <p>Find lecture halls, laboratories, and departmental blocks on your first day without stress.</p>
            </div>

            <div className="purpose-card">
              <div className="purpose-badge-icon" aria-hidden="true">👥</div>
              <h3>Parents & Visitors</h3>
              <p>Locate the Principal's office, administrative block, and seminar halls effortlessly.</p>
            </div>

            <div className="purpose-card">
              <div className="purpose-badge-icon" aria-hidden="true">🏛️</div>
              <h3>Faculty & Staff</h3>
              <p>Quickly guide guests and event attendees to auditoriums, parks, and prayer halls.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
