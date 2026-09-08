import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import moldtechLogo from '../assets/moldtech-logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo Area */}
        <div className="logo-container">
          <img className="brand-logo" src={moldtechLogo} alt="Moldtech logo" />
          <div className="logo-text">
            <div className="brand-name">MOLDTECH</div>
            <div className="brand-subtitle">TOOL & DIE MAKERS</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">About Us</a></li>
            <li><a href="#" className="nav-link">Machines</a></li>
            <li><a href="#" className="nav-link">Components</a></li>
          </ul>
          <a href="#" className="btn btn-orange contact-btn">
            Contact <ChevronRight size={18} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            <li><a href="#" className="mobile-nav-link active">Home</a></li>
            <li><a href="#" className="mobile-nav-link">About Us</a></li>
            <li><a href="#" className="mobile-nav-link">Machines</a></li>
            <li><a href="#" className="mobile-nav-link">Components</a></li>
            <li>
              <a href="#" className="btn btn-orange mobile-contact-btn">
                Contact <ChevronRight size={18} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
