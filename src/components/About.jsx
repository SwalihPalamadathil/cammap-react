import "../styles/About.css";
import MapSticker from "./MapSticker";

function About() {
  return (
    <div className="about-wrapper">
      {/* 1. HOW IT WORKS SECTION — VERTICAL TIMELINE & MAP STICKER COMPOSITION */}
      <section id="how-it-works" className="section-how hiw" aria-labelledby="how-it-works-heading">
        <div className="section-container">
          <div className="section-header-split hiw__header">
            <div className="header-left">
              <span className="eyebrow-label">Simple 3-Step Process</span>
              <h2 id="how-it-works-heading">How CamMap Works</h2>
            </div>
            <div className="header-right">
              <p>Navigate EMEA College campus in three effortless steps.</p>
            </div>
          </div>

          <div className="hiw__grid">
            {/* Timeline Steps (Columns 1-7) */}
            <div className="hiw__steps timeline-vertical">
              {/* 1px Vertical Guideline */}
              <div className="timeline-v-guideline" aria-hidden="true"></div>

              {/* Step 1 */}
              <div className="timeline-step">
                <div className="step-node-marker node-outlined" aria-hidden="true"></div>
                <div className="step-content">
                  <div className="step-label-row">
                    <span className="step-num">01</span>
                    <i className="bi bi-geo-alt step-glyph" aria-hidden="true"></i>
                  </div>
                  <h3>Choose Starting Point</h3>
                  <p>Select where you currently are from the 35+ indexed campus locations.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="timeline-step">
                <div className="step-node-marker node-outlined" aria-hidden="true"></div>
                <div className="step-content">
                  <div className="step-label-row">
                    <span className="step-num">02</span>
                    <i className="bi bi-pin-map step-glyph" aria-hidden="true"></i>
                  </div>
                  <h3>Select Destination</h3>
                  <p>Pick your destination department, auditorium, block, or facility.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="timeline-step">
                <div className="step-node-marker node-filled" aria-hidden="true"></div>
                <div className="step-content">
                  <div className="step-label-row">
                    <span className="step-num">03</span>
                    <i className="bi bi-signpost-2 step-glyph" aria-hidden="true"></i>
                  </div>
                  <h3>Follow the Route</h3>
                  <p>Follow the BFS highlighted path on the vector map to reach your goal.</p>
                </div>
              </div>
            </div>

            {/* Sticker Visual (Columns 8-12) */}
            <div className="hiw__visual">
              <MapSticker variant="fill" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS DIRECTORY — STRUCTURED INDEX PANEL */}
      <div id="features" aria-hidden="true" style={{ position: "relative", top: 0 }}></div>
      <section id="directory" className="section-directory" aria-labelledby="directory-heading">
        <div className="section-container">
          <div className="section-header-split">
            <div className="header-left">
              <span className="eyebrow-label">Campus Directory</span>
              <h2 id="directory-heading">EMEA College Campus Facilities & Locations</h2>
            </div>
            <div className="header-right">
              <p>Explore all indexed buildings, departments, and key landmarks mapped in CamMap.</p>
            </div>
          </div>

          <div className="directory-index-panel">
            {/* Column 1: Academic Departments */}
            <div className="directory-col">
              <div className="directory-col-head">
                <i className="bi bi-mortarboard dir-glyph" aria-hidden="true"></i>
                <h3>Academic Departments</h3>
              </div>
              <p className="directory-desc">Undergraduate, postgraduate, and vocational departments across campus:</p>
              <ul className="directory-list">
                <li><span className="dir-num">01</span><span>Computer Science Department</span></li>
                <li><span className="dir-num">02</span><span>Commerce & Business Administration</span></li>
                <li><span className="dir-num">03</span><span>Economics & West Asian Studies</span></li>
                <li><span className="dir-num">04</span><span>Microbiology & Biotechnology</span></li>
                <li><span className="dir-num">05</span><span>Biochemistry Department</span></li>
                <li><span className="dir-num">06</span><span>English & Language Departments</span></li>
                <li><span className="dir-num">07</span><span>Mathematics & Physics Department</span></li>
                <li><span className="dir-num">08</span><span>BVoc Block & Vocational Centers</span></li>
              </ul>
            </div>

            {/* Column 2: Academic & Admin Buildings */}
            <div className="directory-col">
              <div className="directory-col-head">
                <i className="bi bi-building dir-glyph" aria-hidden="true"></i>
                <h3>Academic & Admin Buildings</h3>
              </div>
              <p className="directory-desc">Core institutional structures and student services:</p>
              <ul className="directory-list">
                <li><span className="dir-num">09</span><span>Main Block & Principal Room</span></li>
                <li><span className="dir-num">10</span><span>College Administrative Office</span></li>
                <li><span className="dir-num">11</span><span>Central Library & Reading Hall</span></li>
                <li><span className="dir-num">12</span><span>RUSA Building</span></li>
                <li><span className="dir-num">13</span><span>EMEA Training College</span></li>
                <li><span className="dir-num">14</span><span>College Seminar Hall</span></li>
                <li><span className="dir-num">15</span><span>College Auditorium</span></li>
                <li><span className="dir-num">16</span><span>Audio Visual Theater</span></li>
              </ul>
            </div>

            {/* Column 3: Amenities, Hostels & Grounds */}
            <div className="directory-col">
              <div className="directory-col-head">
                <i className="bi bi-compass dir-glyph" aria-hidden="true"></i>
                <h3>Amenities, Hostels & Grounds</h3>
              </div>
              <p className="directory-desc">Recreational, residential, and essential campus facilities:</p>
              <ul className="directory-list">
                <li><span className="dir-num">17</span><span>Campus Canteen & Cafeteria</span></li>
                <li><span className="dir-num">18</span><span>Prayer Hall & Cooperative Store</span></li>
                <li><span className="dir-num">19</span><span>Sports Hostel & Ladies Hostel</span></li>
                <li><span className="dir-num">20</span><span>Basketball Court & NCC Ground</span></li>
                <li><span className="dir-num">21</span><span>NSS / NCC Office</span></li>
                <li><span className="dir-num">22</span><span>Mahogany Park & Bamboo Lake</span></li>
                <li><span className="dir-num">23</span><span>Main Gate & Campus Entrances</span></li>
                <li><span className="dir-num">24</span><span>Boys & Girls Washrooms</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PURPOSE SECTION — 3 CLEAN LANES */}
      <section id="about" className="section-purpose" aria-labelledby="purpose-heading">
        <div className="section-container">
          <div className="section-header-split">
            <div className="header-left">
              <span className="eyebrow-label">Purpose & Value</span>
              <h2 id="purpose-heading">Built for the Entire EMEA Community</h2>
            </div>
            <div className="header-right">
              <p>
                CamMap simplifies daily campus navigation by eliminating confusion and saving travel time.
              </p>
            </div>
          </div>

          <div className="purpose-lanes-grid">
            {/* Note 1 */}
            <div className="purpose-lane">
              <div className="lane-header">
                <i className="bi bi-mortarboard purpose-icon" aria-hidden="true"></i>
                <span className="lane-index">01</span>
              </div>
              <h3>New Students</h3>
              <p>Find lecture halls, laboratories, and departmental blocks on your first day without stress.</p>
            </div>

            {/* Note 2 */}
            <div className="purpose-lane">
              <div className="lane-header">
                <i className="bi bi-people purpose-icon" aria-hidden="true"></i>
                <span className="lane-index">02</span>
              </div>
              <h3>Parents & Visitors</h3>
              <p>Locate the Principal's office, administrative block, and seminar halls effortlessly.</p>
            </div>

            {/* Note 3 */}
            <div className="purpose-lane">
              <div className="lane-header">
                <i className="bi bi-bank purpose-icon" aria-hidden="true"></i>
                <span className="lane-index">03</span>
              </div>
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
