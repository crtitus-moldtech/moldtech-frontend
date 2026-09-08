import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import moldtechLogo from '../assets/moldtech-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="logo-container">
              <img className="brand-logo" src={moldtechLogo} alt="Moldtech logo" />
              <div className="logo-text">
                <div className="brand-name">MOLDTECH</div>
                <div className="brand-subtitle">TOOL & DIE MAKERS</div>
              </div>
            </div>
            <p className="footer-desc">
              MOLDTECH is a Bangalore based company specialized in design and manufacturing high precision multi cavity plastic injection moulds, proto injection moulds, injection moulded parts, jigs and fixtures with tight tolerance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col links-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Machines</a></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Contact Info</h3>
            
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div className="contact-text">
                2nd Main Road, 2763/2104, New no<br />
                135/10,<br />
                Shiva Farm, Magadi Main Road,<br />
                Kamakshipalya, Bangalore–560079<br />
                KARNATAKA, INDIA
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div className="contact-text">
                +91-9449644669<br />
                +91-9886889688
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div className="contact-text">
                moldtech97@yahoo.com<br />
                crtitus@moldtech.in
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="copyright">
            © 2026 MOLDTECH. All rights reserved. | ISO 9001:2015 Certified
          </div>
          <div className="legal-info">
            <span className="gst">GST: 29ABDPT7797F1ZV</span>
            <span className="pan">PAN: ABDPT7797F</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
