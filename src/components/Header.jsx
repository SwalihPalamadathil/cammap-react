import { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import logo from "../assets/logo1.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* LEFT: BRAND */}
        <a href="#" className="logoBox" onClick={closeMobileMenu} aria-label="CamMap Home">
          <img 
            src={logo} 
            alt="CamMap Logo" 
            className="logo" 
            width="42" 
            height="42" 
            fetchPriority="high" 
            decoding="async" 
          />
          <div className="logoText">
            <span className="brandName">CamMap</span>
            <span className="brandSub">Smart Campus Navigation</span>
          </div>
        </a>

        {/* CENTER: NAV LINKS */}
        <nav 
          id="primary-navigation" 
          className={`navbar ${mobileMenuOpen ? "active" : ""}`}
          aria-label="Main Navigation"
        >
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#search" onClick={closeMobileMenu}>Route Finder</a>
          <a href="#how-it-works" onClick={closeMobileMenu}>How It Works</a>
          <a href="#features" onClick={closeMobileMenu}>Features</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
        </nav>

        {/* RIGHT: HAMBURGER TOGGLE */}
        <div className="header-actions">
          <button 
            className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;