import { buildingFloorDetails } from '../data/buildingInfo';
import { destinations } from '../engine/routeEngine';

export function BuildingDetails({ selectedBuilding }) {
  // Empty State: No building selected yet
  if (!selectedBuilding) {
    return (
      <div className="building-details-panel" aria-label="Campus Building and Floor Details Directory">
        <div className="side-card building-details-card">
          {/* Top Hairline & Corner Ticks for visual consistency */}
          <span className="details-top-hairline" aria-hidden="true"></span>
          <span className="crop-tick tick-tl" aria-hidden="true"></span>
          <span className="crop-tick tick-tr" aria-hidden="true"></span>
          <span className="crop-tick tick-bl" aria-hidden="true"></span>
          <span className="crop-tick tick-br" aria-hidden="true"></span>

          {/* Panel Header */}
          <div className="details-header">
            <div className="details-header-brand">
              <div className="details-header-icon-box" aria-hidden="true">
                <i className="bi bi-building-check"></i>
              </div>
              <div className="details-header-text">
                <span className="details-eyebrow">CAMPUS DIRECTORY</span>
                <h3 className="card-title">Building &amp; Floor Details</h3>
              </div>
            </div>
            <span className="details-header-badge" aria-hidden="true">
              <span className="header-status-dot"></span> DIRECTORY
            </span>
          </div>

          {/* Panel Body with Empty State */}
          <div className="side-card-body">
            <div id="result" className="building-info-container">
              <div className="building-empty-state">
                {/* Architectural Blueprint Illustration */}
                <div className="empty-state-illustration-box" aria-hidden="true">
                  <div className="blueprint-radar-ring"></div>
                  <svg
                    className="empty-state-blueprint-svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Architectural Grid Card */}
                    <rect
                      x="10"
                      y="14"
                      width="52"
                      height="44"
                      rx="8"
                      fill="#FFFFFF"
                      stroke="#CBD5E1"
                      strokeWidth="1.8"
                    />
                    {/* Building Elevation Outline */}
                    <path
                      d="M 18 46 V 26 H 32 V 46 M 40 46 V 32 H 54 V 46"
                      stroke="#93C5FD"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    {/* Central Pediment */}
                    <polygon points="18,26 25,20 32,26" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.4" />
                    {/* Columns */}
                    <line x1="22" y1="26" x2="22" y2="46" stroke="#DBEAFE" strokeWidth="1.5" />
                    <line x1="28" y1="26" x2="28" y2="46" stroke="#DBEAFE" strokeWidth="1.5" />
                    {/* Target Pin / Cursor */}
                    <circle cx="50" cy="22" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="50" cy="22" r="2.5" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="empty-state-copy">
                  <h4 className="empty-state-title">Select Any Campus Landmark</h4>
                  <p className="empty-state-desc">
                    Click any interactive building block on the map above or calculate a route to explore department, faculty, and floor directories.
                  </p>
                </div>

                {/* Quick Hint Badges */}
                <div className="empty-state-pills" aria-hidden="true">
                  <span className="empty-pill">
                    <i className="bi bi-geo-alt text-primary"></i> 17 Interactive Blocks
                  </span>
                  <span className="empty-pill">
                    <i className="bi bi-layers text-primary"></i> Multi-Floor Directory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active State: Building selected
  const floors = buildingFloorDetails[selectedBuilding] || [];
  const destInfo = destinations[selectedBuilding];

  return (
    <div className="building-details-panel" aria-label={`Building details for ${selectedBuilding}`}>
      <div className="side-card building-details-card">
        {/* Top Hairline & Corner Ticks for visual consistency */}
        <span className="details-top-hairline" aria-hidden="true"></span>
        <span className="crop-tick tick-tl" aria-hidden="true"></span>
        <span className="crop-tick tick-tr" aria-hidden="true"></span>
        <span className="crop-tick tick-bl" aria-hidden="true"></span>
        <span className="crop-tick tick-br" aria-hidden="true"></span>

        {/* Panel Header */}
        <div className="details-header">
          <div className="details-header-brand">
            <div className="details-header-icon-box" aria-hidden="true">
              <i className="bi bi-building-check"></i>
            </div>
            <div className="details-header-text">
              <span className="details-eyebrow">CAMPUS DIRECTORY</span>
              <h3 className="card-title">Building &amp; Floor Details</h3>
            </div>
          </div>
          <span className="details-header-badge" aria-hidden="true">
            <span className="header-status-dot active"></span> SELECTED
          </span>
        </div>

        {/* Panel Body */}
        <div className="side-card-body">
          <div id="result" className="building-info-container">
            <div className="building-info-card">

              {/* 1. Selected Building Hero Card */}
              <div className="selected-building-hero">
                {/* Background Architectural Watermark Doodle */}
                <div className="building-hero-watermark" aria-hidden="true">
                  <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
                    <rect x="10" y="25" width="100" height="65" rx="4" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
                    <polygon points="10,25 60,5 110,25" stroke="#2563EB" strokeWidth="1" opacity="0.15" fill="none" />
                    <line x1="35" y1="25" x2="35" y2="90" stroke="#2563EB" strokeWidth="1" opacity="0.12" />
                    <line x1="60" y1="25" x2="60" y2="90" stroke="#2563EB" strokeWidth="1" opacity="0.12" />
                    <line x1="85" y1="25" x2="85" y2="90" stroke="#2563EB" strokeWidth="1" opacity="0.12" />
                  </svg>
                </div>

                <div className="building-hero-content">
                  <div className="building-hero-badge-row">
                    <span className="building-status-pill">
                      <span className="status-pulse-dot" aria-hidden="true"></span>
                      <span>Interactive Landmark</span>
                    </span>
                    <span className="building-zone-tag" aria-hidden="true">ZONE VERIFIED</span>
                  </div>

                  <h4 className="building-hero-name">
                    <span className="building-icon-bubble" aria-hidden="true">
                      <i className="bi bi-building"></i>
                    </span>
                    <span>{selectedBuilding}</span>
                  </h4>
                </div>
              </div>

              {/* 2. Building Information & Floor Directory */}
              <div className="building-directory-section">
                <div className="directory-section-header">
                  <span className="directory-label">
                    <i className="bi bi-layers text-primary" aria-hidden="true"></i>
                    <span>BUILDING INFORMATION</span>
                  </span>
                  <span className="directory-count-badge">
                    {floors.length > 0 ? `${floors.length} Floor Level${floors.length > 1 ? 's' : ''}` : 'Landmark Details'}
                  </span>
                </div>

                <div className="building-floors-list">
                  {floors.length > 0 ? (
                    floors.map((item, idx) => (
                      <div key={idx} className="floor-card">
                        <div className="floor-badge-col">
                          <span className="floor-pill">{item.title}</span>
                        </div>
                        <div className="floor-details-col">
                          <span className="floor-desc">{item.desc}</span>
                        </div>
                      </div>
                    ))
                  ) : destInfo?.floor ? (
                    <div className="floor-card">
                      <div className="floor-badge-col">
                        <span className="floor-pill">Floor Info</span>
                      </div>
                      <div className="floor-details-col">
                        <span className="floor-desc">{destInfo.floor}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="floor-card">
                      <div className="floor-badge-col">
                        <span className="floor-pill">Ground Floor</span>
                      </div>
                      <div className="floor-details-col">
                        <span className="floor-desc">Campus Landmark &amp; Facility</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Refined Action Footer */}
              <div className="building-info-footer">
                <div className="footer-meta-pill" title="Interactive map element">
                  <i className="bi bi-geo-alt-fill text-primary" aria-hidden="true"></i>
                  <span>Interactive Landmark</span>
                </div>

                <a
                  href="../"
                  className="btn-plan-route"
                  aria-label={`Plan Route to ${selectedBuilding} on Home`}
                >
                  <i className="bi bi-compass" aria-hidden="true"></i>
                  <span>Plan Route on Home</span>
                  <i className="bi bi-arrow-right action-arrow" aria-hidden="true"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildingDetails;
