

export function RouteBar({ status, from, to, timeStr, buildingName, onResetRoute, onOpenGps, onOpenInfo }) {

  /* ── Active Route: Journey Pass Boarding Ticket ── */
  if (status === 'route-active') {
    return (
      <section className="selected-route-section my-4" id="selectedRouteSection">
        <div className="selected-route-card" id="selectedRouteCard">

          <span className="card-top-hairline" aria-hidden="true"></span>
          <span className="card-tick tick-tl" aria-hidden="true"></span>
          <span className="card-tick tick-tr" aria-hidden="true"></span>
          <span className="card-tick tick-bl" aria-hidden="true"></span>
          <span className="card-tick tick-br" aria-hidden="true"></span>
          <div className="card-doodle-layer" aria-hidden="true"></div>

          <div className="selected-route-header">
            <div className="selected-route-title-group">
              <span className="pulse-dot"></span>
              <span className="route-header-badge">SELECTED ROUTE</span>
              <span className="header-hairline-sep d-none d-sm-inline-block" aria-hidden="true"></span>
              <span className="header-subtitle d-none d-sm-inline">EMEA Campus Navigator</span>
            </div>

            <div className="selected-route-actions-group">
              <div id="routeStatusBadge">
                <span className="badge-pill bg-success text-white">
                  <i className="bi bi-check-circle-fill"></i> Route Active
                </span>
              </div>

              <div className="card-toolbar" role="toolbar" aria-label="Route actions">
                <button id="resetRouteBtn" className="btn-card-toolbar" type="button" title="Reset Current Route" aria-label="Reset Route" onClick={onResetRoute}>
                  <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
                  <span className="btn-text">Reset Route</span>
                </button>
                <button id="locateMeBtn" className="btn-card-toolbar" type="button" title="Locate My Position" aria-label="Locate My Position" onClick={onOpenGps}>
                  <i className="bi bi-crosshair" aria-hidden="true"></i>
                  <span className="btn-text">Locate Me</span>
                </button>
                <button className="btn-card-toolbar btn-card-toolbar-icon" type="button" title="Campus Info" aria-label="About Campus Information" onClick={onOpenInfo}>
                  <i className="bi bi-info-circle" aria-hidden="true"></i>
                  <span className="btn-text">Info</span>
                </button>
                <a href="../" className="btn-change-route" title="Choose a different route on Home">
                  <i className="bi bi-arrow-left" aria-hidden="true"></i>
                  <span>Change Route</span>
                </a>
              </div>
            </div>
          </div>

          <div className="selected-route-body" id="selectedRouteBody">
            <div className="route-flow-grid">
              <div className="route-node-card from-node">
                <div className="node-icon-wrapper from-icon"><i className="bi bi-geo-alt-fill"></i></div>
                <div className="node-details">
                  <span className="node-label">STARTING POINT</span>
                  <h3 className="node-value" id="displayFrom">{from}</h3>
                </div>
              </div>

              <div className="route-connector-box">
                <div className="connector-line"></div>
                <div className="connector-badge">
                  <i className="bi bi-person-walking text-primary"></i>
                  <span id="displayTimeBadge">{timeStr} Walk</span>
                </div>
                <div className="connector-arrow">
                  <i className="bi bi-arrow-right d-none d-md-inline"></i>
                  <i className="bi bi-arrow-down d-md-none"></i>
                </div>
              </div>

              <div className="route-node-card to-node">
                <div className="node-icon-wrapper to-icon"><i className="bi bi-flag-fill"></i></div>
                <div className="node-details">
                  <span className="node-label">DESTINATION</span>
                  <h3 className="node-value" id="displayTo">{to}</h3>
                </div>
              </div>
            </div>

            <div className="route-meta-bar" id="routeMetaBar">
              <div className="meta-item meta-est-walk">
                <i className="bi bi-clock-history text-primary"></i>
                <span>Est. Walk: <strong id="displayTime">{timeStr}</strong></span>
              </div>
              <div className="meta-divider">•</div>
              <div className="meta-item meta-bfs-badge">
                <i className="bi bi-lightning-charge-fill text-gold"></i>
                <span>Optimal BFS Shortest Path</span>
              </div>
              <div className="meta-divider d-none d-lg-inline">•</div>
              <div className="meta-item meta-guidance text-slate-500 d-none d-lg-inline">
                <span>Follow highlighted line on map below</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  /* ── Same Building: Informational Pass (No Indoor Navigation) ── */
  if (status === 'same-building') {
    return (
      <section className="selected-route-section my-4" id="selectedRouteSection">
        <div className="selected-route-card" id="selectedRouteCard">

          <span className="card-top-hairline" aria-hidden="true"></span>
          <span className="card-tick tick-tl" aria-hidden="true"></span>
          <span className="card-tick tick-tr" aria-hidden="true"></span>
          <span className="card-tick tick-bl" aria-hidden="true"></span>
          <span className="card-tick tick-br" aria-hidden="true"></span>
          <div className="card-doodle-layer" aria-hidden="true"></div>

          <div className="selected-route-header">
            <div className="selected-route-title-group">
              <span className="pulse-dot"></span>
              <span className="route-header-badge">SELECTED ROUTE</span>
              <span className="header-hairline-sep d-none d-sm-inline-block" aria-hidden="true"></span>
              <span className="header-subtitle d-none d-sm-inline">EMEA Campus Navigator</span>
            </div>

            <div className="selected-route-actions-group">
              <div id="routeStatusBadge">
                <span className="badge-pill bg-info-subtle text-primary border border-primary-subtle">
                  <i className="bi bi-building"></i> Same Building
                </span>
              </div>

              <div className="card-toolbar" role="toolbar" aria-label="Route actions">
                <button id="resetRouteBtn" className="btn-card-toolbar" type="button" title="Reset Current Route" aria-label="Reset Route" onClick={onResetRoute}>
                  <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
                  <span className="btn-text">Reset Route</span>
                </button>
                <button id="locateMeBtn" className="btn-card-toolbar" type="button" title="Locate My Position" aria-label="Locate My Position" onClick={onOpenGps}>
                  <i className="bi bi-crosshair" aria-hidden="true"></i>
                  <span className="btn-text">Locate Me</span>
                </button>
                <button className="btn-card-toolbar btn-card-toolbar-icon" type="button" title="Campus Info" aria-label="About Campus Information" onClick={onOpenInfo}>
                  <i className="bi bi-info-circle" aria-hidden="true"></i>
                  <span className="btn-text">Info</span>
                </button>
                <a href="../" className="btn-change-route" title="Choose a different route on Home">
                  <i className="bi bi-arrow-left" aria-hidden="true"></i>
                  <span>Change Route</span>
                </a>
              </div>
            </div>
          </div>

          <div className="selected-route-body" id="selectedRouteBody">
            <div className="route-flow-grid">
              <div className="route-node-card from-node">
                <div className="node-icon-wrapper from-icon"><i className="bi bi-geo-alt-fill"></i></div>
                <div className="node-details">
                  <span className="node-label">STARTING POINT</span>
                  <h3 className="node-value" id="displayFrom">{from}</h3>
                </div>
              </div>

              <div className="route-connector-box">
                <div className="connector-line"></div>
                <div className="connector-badge">
                  <i className="bi bi-building text-primary"></i>
                  <span id="displayTimeBadge">Same Building</span>
                </div>
                <div className="connector-arrow">
                  <i className="bi bi-arrow-right d-none d-md-inline"></i>
                  <i className="bi bi-arrow-down d-md-none"></i>
                </div>
              </div>

              <div className="route-node-card to-node">
                <div className="node-icon-wrapper to-icon"><i className="bi bi-flag-fill"></i></div>
                <div className="node-details">
                  <span className="node-label">DESTINATION</span>
                  <h3 className="node-value" id="displayTo">{to}</h3>
                </div>
              </div>
            </div>

            <div className="route-meta-bar" id="routeMetaBar">
              <div className="same-building-info-card">
                <div className="same-building-eyebrow-row">
                  <span className="same-building-icon-wrap" aria-hidden="true">
                    <i className="bi bi-building"></i>
                  </span>
                  <span className="same-building-eyebrow">SAME-BUILDING DESTINATION</span>
                </div>
                <h4 className="same-building-heading">You&apos;re in the same building!</h4>
                <p className="same-building-desc">
                  Both selected locations are inside <strong>{buildingName || 'this building'}</strong>.
                </p>
                <div className="same-building-notice">
                  <i className="bi bi-info-circle-fill" aria-hidden="true"></i>
                  <span>Indoor navigation is not currently available.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  /* ── No Route Selected: Blank Ticket ── */
  if (status === 'no-route') {
    return (
      <section className="selected-route-section my-4" id="selectedRouteSection">
        <div className="selected-route-card" id="selectedRouteCard">

          <span className="card-top-hairline" aria-hidden="true"></span>
          <span className="card-tick tick-tl" aria-hidden="true"></span>
          <span className="card-tick tick-tr" aria-hidden="true"></span>
          <span className="card-tick tick-bl" aria-hidden="true"></span>
          <span className="card-tick tick-br" aria-hidden="true"></span>
          <div className="card-doodle-layer" aria-hidden="true"></div>

          <div className="selected-route-header">
            <div className="selected-route-title-group">
              <span className="pulse-dot"></span>
              <span className="route-header-badge">SELECTED ROUTE</span>
              <span className="header-hairline-sep d-none d-sm-inline-block" aria-hidden="true"></span>
              <span className="header-subtitle d-none d-sm-inline">EMEA Campus Navigator</span>
            </div>

            <div className="selected-route-actions-group">
              <div id="routeStatusBadge">
                <span className="badge-pill bg-slate-subtle text-slate-600">
                  <i className="bi bi-dash-circle"></i> No Route
                </span>
              </div>

              <div className="card-toolbar" role="toolbar" aria-label="Route actions">
                <button id="resetRouteBtn" className="btn-card-toolbar" type="button" title="Reset Current Route" aria-label="Reset Route" onClick={onResetRoute}>
                  <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
                  <span className="btn-text">Reset Route</span>
                </button>
                <button id="locateMeBtn" className="btn-card-toolbar" type="button" title="Locate My Position" aria-label="Locate My Position" onClick={onOpenGps}>
                  <i className="bi bi-crosshair" aria-hidden="true"></i>
                  <span className="btn-text">Locate Me</span>
                </button>
                <button className="btn-card-toolbar btn-card-toolbar-icon" type="button" title="Campus Info" aria-label="About Campus Information" onClick={onOpenInfo}>
                  <i className="bi bi-info-circle" aria-hidden="true"></i>
                  <span className="btn-text">Info</span>
                </button>
                <a href="../" className="btn-change-route" title="Choose a different route on Home">
                  <i className="bi bi-arrow-left" aria-hidden="true"></i>
                  <span>Change Route</span>
                </a>
              </div>
            </div>
          </div>

          <div className="selected-route-body" id="selectedRouteBody">
            <div className="empty-route-state">
              <div className="empty-icon-circle">
                <i className="bi bi-compass" aria-hidden="true"></i>
              </div>
              <h3>No Route Selected</h3>
              <p>Please select your starting point and destination on the CamMap Home Route Selector to view the walking path.</p>
              <a href="../" className="btn-primary-action">
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                <span>Plan Route on Home</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }

  /* ── Same Location: Warning Ticket ── */
  if (status === 'same-location') {
    return (
      <section className="selected-route-section my-4" id="selectedRouteSection">
        <div className="selected-route-card" id="selectedRouteCard">

          <span className="card-top-hairline" aria-hidden="true"></span>
          <span className="card-tick tick-tl" aria-hidden="true"></span>
          <span className="card-tick tick-tr" aria-hidden="true"></span>
          <span className="card-tick tick-bl" aria-hidden="true"></span>
          <span className="card-tick tick-br" aria-hidden="true"></span>
          <div className="card-doodle-layer" aria-hidden="true"></div>

          <div className="selected-route-header">
            <div className="selected-route-title-group">
              <span className="pulse-dot"></span>
              <span className="route-header-badge">SELECTED ROUTE</span>
              <span className="header-hairline-sep d-none d-sm-inline-block" aria-hidden="true"></span>
              <span className="header-subtitle d-none d-sm-inline">EMEA Campus Navigator</span>
            </div>

            <div className="selected-route-actions-group">
              <div id="routeStatusBadge">
                <span className="badge-pill bg-warning-subtle text-warning-emphasis">
                  <i className="bi bi-exclamation-triangle"></i> Same Location
                </span>
              </div>

              <div className="card-toolbar" role="toolbar" aria-label="Route actions">
                <button id="resetRouteBtn" className="btn-card-toolbar" type="button" title="Reset Current Route" aria-label="Reset Route" onClick={onResetRoute}>
                  <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
                  <span className="btn-text">Reset Route</span>
                </button>
                <button id="locateMeBtn" className="btn-card-toolbar" type="button" title="Locate My Position" aria-label="Locate My Position" onClick={onOpenGps}>
                  <i className="bi bi-crosshair" aria-hidden="true"></i>
                  <span className="btn-text">Locate Me</span>
                </button>
                <button className="btn-card-toolbar btn-card-toolbar-icon" type="button" title="Campus Info" aria-label="About Campus Information" onClick={onOpenInfo}>
                  <i className="bi bi-info-circle" aria-hidden="true"></i>
                  <span className="btn-text">Info</span>
                </button>
                <a href="../" className="btn-change-route" title="Choose a different route on Home">
                  <i className="bi bi-arrow-left" aria-hidden="true"></i>
                  <span>Change Route</span>
                </a>
              </div>
            </div>
          </div>

          <div className="selected-route-body" id="selectedRouteBody">
            <div className="empty-route-state">
              <div className="empty-icon-circle bg-amber-subtle">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
              </div>
              <h3 className="text-amber">You&apos;re already at your destination</h3>
              <p>Both starting point and destination are set to <strong>{from}</strong>. Please choose a different destination on the Home page to navigate.</p>
              <a href="../" className="btn-primary-action">
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
                <span>Change Destination on Home</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }

  /* Fallback: same as no-route */
  return null;
}
