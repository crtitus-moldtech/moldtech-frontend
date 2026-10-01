import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import moldtechLogo from '../assets/moldtech-logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Machines', href: '/machines' },
    { label: 'Components', href: '/components' },
  ];

  const isCurrentPage = (href) => currentPath === href;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo Area */}
        <a className="logo-container" href="/" aria-label="Moldtech home" onClick={closeMobileMenu}>
          <img className="brand-logo" src={moldtechLogo} alt="Moldtech logo" />
          <div className="logo-text">
            <div className="brand-name">MOLDTECH</div>
            <div className="brand-subtitle">TOOL & DIE MAKERS</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links" aria-label="Main navigation">
            {navItems.map(({ label, href }) => {
              const active = isCurrentPage(href);
              return (
                <li key={href}>
                  <a href={href} className={`nav-link${active ? ' active' : ''}`} aria-current={active ? 'page' : undefined}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="/contact-us" className={`btn btn-orange contact-btn${isCurrentPage('/contact-us') ? ' contact-btn-active' : ''}`} aria-current={isCurrentPage('/contact-us') ? 'page' : undefined}>
            Contact <ChevronRight size={18} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          <ul className="mobile-nav-links">
            {navItems.map(({ label, href }) => {
              const active = isCurrentPage(href);
              return (
                <li key={href}>
                  <a href={href} className={`mobile-nav-link${active ? ' active' : ''}`} aria-current={active ? 'page' : undefined} onClick={closeMobileMenu}>
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="/contact-us" className={`btn btn-orange mobile-contact-btn${isCurrentPage('/contact-us') ? ' contact-btn-active' : ''}`} aria-current={isCurrentPage('/contact-us') ? 'page' : undefined} onClick={closeMobileMenu}>
                Contact <ChevronRight size={18} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
