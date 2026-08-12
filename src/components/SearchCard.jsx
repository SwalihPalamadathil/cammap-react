import { useState } from "react";
import "../styles/searchcard.css";

const CAMPUS_LOCATIONS = [
  "Main Gate",
  "Main Block",
  "Economics Department",
  "Language Department",
  "West Asian Studies Department",
  "Principal Room",
  "College Office",
  "Computer Science Department",
  "English Department",
  "Microbiology Department",
  "Seminar Hall",
  "Biochemistry Department",
  "Biotechnology Department",
  "Commerce Department",
  "Business Administration Department",
  "RUSA Building",
  "Mathematics & Physics Department",
  "BVoc Block",
  "Library",
  "Library Building",
  "Administrative Office",
  "Canteen",
  "Prayer Hall",
  "Cooperative Store",
  "Basketball Court",
  "Sports Hostel",
  "NSS/NCC Office",
  "Audio Visual Theater",
  "Bamboo Lake",
  "Boys Washroom",
  "Auditorium",
  "EMEA Training College",
  "Mahogany Park",
  "NCC Ground",
  "Ladies Hostel"
];

const POPULAR_LOCATIONS = [
  "Main Gate",
  "Library",
  "Canteen",
  "Computer Science Department",
  "Auditorium",
  "Main Block"
];

function SearchCard() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function getCurrentLocation() {
    alert("GPS feature coming soon!");
  }

  function handleSwap() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  function handleQuickPick(loc) {
    if (!from) {
      setFrom(loc);
    } else if (!to && loc !== from) {
      setTo(loc);
    } else {
      setTo(loc);
    }
  }

  function handleFindRoute() {
    if (from && to) {
      localStorage.setItem("from", from);
      localStorage.setItem("to", to);
      window.location.href = "map/index.html";
    }
  }

  return (
    <section id="search" className="search-section">
      <div className="search-container">
        <div className="search-header">
          <span className="search-badge">
            <i className="bi bi-compass-fill"></i> Route Selector
          </span>
          <h2>Plan Your Walking Route</h2>
          <p>Select your starting location and destination to get the shortest path across EMEA College campus.</p>
        </div>

        <div className="search-card">
          {/* Quick Pick Chips */}
          <div className="quick-picks">
            <span className="quick-picks-label">Quick Pick:</span>
            <div className="chips-wrapper">
              {POPULAR_LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className={`chip-btn ${from === loc ? "chip-from" : to === loc ? "chip-to" : ""}`}
                  onClick={() => handleQuickPick(loc)}
                >
                  <i className="bi bi-geo-alt"></i> {loc}
                </button>
              ))}
            </div>
          </div>

          <div className="search-form-grid">
            {/* FROM INPUT */}
            <div className="input-group">
              <div className="input-label-row">
                <label htmlFor="from-select">
                  <i className="bi bi-record-circle-fill text-blue"></i> Starting Point
                </label>
                <button
                  type="button"
                  className="gps-btn"
                  onClick={getCurrentLocation}
                  title="Use Current Location"
                >
                  <i className="bi bi-crosshair"></i>
                  <span>GPS</span>
                </button>
              </div>

              <div className="select-wrapper">
                <select
                  id="from-select"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="">Select Starting Point</option>
                  {CAMPUS_LOCATIONS.map((loc) => (
                    <option key={`from-${loc}`} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* SWAP BUTTON */}
            <div className="swap-wrapper">
              <button
                type="button"
                className="swap-btn"
                onClick={handleSwap}
                title="Swap Starting Point and Destination"
                disabled={!from && !to}
              >
                <i className="bi bi-arrow-down-up"></i>
              </button>
            </div>

            {/* TO INPUT */}
            <div className="input-group">
              <div className="input-label-row">
                <label htmlFor="to-select">
                  <i className="bi bi-geo-alt-fill text-gold"></i> Destination
                </label>
              </div>

              <div className="select-wrapper">
                <select
                  id="to-select"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="">Select Destination</option>
                  {CAMPUS_LOCATIONS.map((loc) => (
                    <option key={`to-${loc}`} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button
            type="button"
            className="route-btn"
            disabled={!from || !to}
            onClick={handleFindRoute}
          >
            <span>Find Walking Route</span>
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchCard;