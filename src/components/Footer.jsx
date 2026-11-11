import "../styles/footer.css";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img 
                src={logo} 
                alt="CamMap — EMEA College Campus Navigation Logo" 
                className="footer-logo" 
                width="36" 
                height="36" 
                loading="lazy" 
                decoding="async" 
              />
              <span className="footer-brand-title">
                CamMap <span className="version-tag">v1.0</span>
              </span>
            </div>
            <p>
              Smart Campus Navigation System for EMEA College of Arts and Science. Helping students, parents, staff, and visitors navigate campus with ease.
            </p>
          </div>

          <div className="footer-col-divider" aria-hidden="true"></div>

          {/* Column 2: Quick Navigation */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <span className="footer-heading">Quick Navigation</span>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#search">Route Finder</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#directory">Campus Directory</a></li>
              <li><a href="#about">About CamMap</a></li>
            </ul>
          </nav>

          <div className="footer-col-divider" aria-hidden="true"></div>

          {/* Column 3: System Status */}
          <div className="footer-status-box">
            <span className="footer-heading">System Status</span>
            <div className="status-badge">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Vector Map Engine Active</span>
            </div>
            <div className="footer-coming">
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              <span>Live GPS Navigation Coming Soon</span>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-bottom">
          <p>© 2026 CamMap • Developed by <strong>Muhammed Swalih P</strong></p>
          <p className="footer-subtext">EMEA College of Arts and Science, Kondotti</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
