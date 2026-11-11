import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo1.png';

export function MapHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close mobile menu on Escape key or outside click / touch
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="mapnav-header" ref={headerRef}>
      <div className="mapnav-container">
        {/* BRAND (LEFT) — LINK TO HOME */}
        <a href={`${import.meta.env.BASE_URL}#home`} className="mapnav-brand" onClick={closeMobileMenu} aria-label="CamMap Home">
          <img
            src={logo}
            alt="CamMap Logo"
            className="mapnav-logo"
            width="38"
            height="38"
            fetchPriority="high"
            decoding="async"
          />
          <div className="mapnav-brand-text">
            <span className="mapnav-brand-name">CamMap</span>
            <span className="mapnav-brand-sub">Smart Campus Navigation</span>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <nav
          id="mapnav-primary-navigation"
          className={`mapnav-nav ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Main Navigation"
        >
          <a href={`${import.meta.env.BASE_URL}#home`} className="mapnav-link" onClick={closeMobileMenu}>Home</a>
          <a href={`${import.meta.env.BASE_URL}#search`} className="mapnav-link" onClick={closeMobileMenu}>Route Finder</a>
          <a href={`${import.meta.env.BASE_URL}#how-it-works`} className="mapnav-link" onClick={closeMobileMenu}>How It Works</a>
          <a href={`${import.meta.env.BASE_URL}#features`} className="mapnav-link" onClick={closeMobileMenu}>Features</a>
          <a href={`${import.meta.env.BASE_URL}#directory`} className="mapnav-link" onClick={closeMobileMenu}>Directory</a>
          <a href={`${import.meta.env.BASE_URL}#about`} className="mapnav-link" onClick={closeMobileMenu}>About</a>
        </nav>

        {/* RIGHT: HAMBURGER TOGGLE */}
        <div className="mapnav-actions">
          <button
            type="button"
            className={`mapnav-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mapnav-primary-navigation"
          >
            <div className="mapnav-hamburger-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MapHeader;
