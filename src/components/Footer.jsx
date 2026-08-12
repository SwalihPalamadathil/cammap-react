import "../styles/footer.css";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="CamMap Logo" className="footer-logo" />
              <h2>
                CamMap <span className="version-tag">v1.0</span>
              </h2>
            </div>
            <p>
              Smart Campus Navigation System for EMEA College. Helping students, parents, staff, and visitors find their way easily.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Quick Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#search">Route Finder</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About System</a></li>
              <li><a href={`${import.meta.env.BASE_URL}map/index.html`}>Open Map</a></li>
            </ul>
          </div>

          <div className="footer-status-box">
            <h4>System Status</h4>
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Vector Map Engine Active</span>
            </div>
            <div className="footer-coming">
              🚀 Live GPS Navigation Coming Soon
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2026 CamMap • Developed by <strong>Muhammed Swalih P</strong></p>
          <p className="footer-subtext">EMEA College of Arts and Science, Kondotti</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;