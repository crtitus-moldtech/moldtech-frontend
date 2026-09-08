import React from 'react';
import { ChevronRight, Printer, Cog, Calendar, Settings, FileText, CheckCircle, Eye } from 'lucide-react';
import heroImg from '../assets/hero.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              Engineering Plastics,<br />
              <span className="text-blue">Precision </span> 
              <span className="text-orange">Injection</span><br />
              Moulding
            </h1>
            <button className="btn btn-teal hero-btn">
              Request a Quote <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container services-container">
          <div className="services-image-col">
            <img src={heroImg} alt="Precision manufacturing" className="services-image" />
          </div>
          <div className="services-grid-col">
            <div className="service-card">
              <div className="service-icon"><Printer size={32} /></div>
              <h3 className="service-title">3D Printing & Prototyping</h3>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><CheckCircle size={32} className="text-orange-icon" /></div>
              <h3 className="service-title">Injection Moulding up to 350T</h3>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><Cog size={32} className="text-orange-icon" /></div>
              <h3 className="service-title">Tool Design & Manufacture</h3>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><Calendar size={32} /></div>
              <h3 className="service-title">Gauges, Fixtures & SPM parts</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries section">
        <div className="container industries-container">
          {/* Decorative elements */}
          <div className="deco deco-top-left">
            <div className="circle circle-teal"></div>
            <div className="circle circle-orange"></div>
            <div className="circle circle-light"></div>
          </div>
          
          <div className="deco deco-right">
            <div className="circle circle-orange-lg"></div>
            <div className="circle circle-light-md"></div>
            <div className="circle circle-beige-sm"></div>
          </div>

          <div className="industries-content">
            <div className="industry-line">
              <h2 className="industry-text">Automotive Industries</h2>
              <div className="underline underline-teal"></div>
            </div>
            
            <div className="industry-line">
              <h2 className="industry-text">Medical Grade Plastics</h2>
              <div className="underline underline-orange"></div>
            </div>
            
            <div className="industry-line">
              <h2 className="industry-text">Electrical Industry & Machinery</h2>
              <div className="underline underline-teal"></div>
            </div>
            
            <div className="industry-line">
              <h2 className="industry-text">Semi-Commercial &</h2>
              <div className="underline underline-orange"></div>
            </div>
            
            <div className="industry-line">
              <h2 className="industry-text">Electronics</h2>
              <div className="underline underline-teal"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications section">
        <div className="container">
          <div className="certifications-header">
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle">
              We maintain the highest standards of quality and compliance in our manufacturing processes
            </p>
          </div>
          
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FileText size={32} className="cert-icon" />
              </div>
              <h3 className="cert-title">ISO certificate</h3>
              <p className="cert-desc">Quality Management System Certification</p>
              <button className="btn btn-teal cert-btn">
                <Eye size={18} /> View Certificate
              </button>
            </div>
            
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FileText size={32} className="cert-icon" />
              </div>
              <h3 className="cert-title">MSME Sustainable ZED<br />Certification</h3>
              <p className="cert-desc">Zero Defect Zero Effect Manufacturing<br />Certification</p>
              <button className="btn btn-teal cert-btn">
                <Eye size={18} /> View Certificate
              </button>
            </div>
            
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FileText size={32} className="cert-icon" />
              </div>
              <h3 className="cert-title">UDYAM Registration Certificate</h3>
              <p className="cert-desc">Micro, Small and Medium Enterprises<br />Registration</p>
              <button className="btn btn-teal cert-btn">
                <Eye size={18} /> View Certificate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
