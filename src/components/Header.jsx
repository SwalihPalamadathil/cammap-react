import { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import logo from "../assets/logo1.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key or outside click, manage body scroll lock & focus
  useEffect(() => {
    if (!mobileMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header" ref={headerRef}>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <div className="header-container">
        {/* LEFT: BRAND */}
        <a href="#home" className="logoBox" onClick={closeMobileMenu} aria-label="CamMap Home">
          <img 
            src={logo} 
            alt="CamMap Logo" 
            className="logo" 
            width="38" 
            height="38" 
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
          <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
          <a href="#search" className="nav-link" onClick={closeMobileMenu}>Route Finder</a>
          <a href="#how-it-works" className="nav-link" onClick={closeMobileMenu}>How It Works</a>
          <a href="#features" className="nav-link" onClick={closeMobileMenu}>Features</a>
          <a href="#directory" className="nav-link" onClick={closeMobileMenu}>Directory</a>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
        </nav>

        {/* RIGHT: HAMBURGER TOGGLE */}
        <div className="header-actions">
          <button 
            ref={hamburgerRef}
            className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <div className="hamburger-icon">
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