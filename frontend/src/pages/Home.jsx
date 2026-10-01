import { ChevronRight, Printer, Cog, Calendar, FileText, Check, CheckCircle, Eye } from 'lucide-react';
import heroImg from '../assets/hero.png';
import servicesImg from '../assets/home-component.jpg';
import component1 from '../assets/C-1.jpg';
import component2 from '../assets/C-2.jpg';
import component3 from '../assets/C-3.jpg';
import component4 from '../assets/C-4.jpg';
import component5 from '../assets/C-5.jpg';
import component6 from '../assets/C-6.jpg';
import component7 from '../assets/C-7.jpg';
import component8 from '../assets/C-8.jpg';
import component9 from '../assets/C-9.jpg';
import component10 from '../assets/C-10.jpg';
import component11 from '../assets/C-11.jpg';
import component12 from '../assets/C-12.jpg';
import component13 from '../assets/C-13.jpg';
import component14 from '../assets/C-14.jpg';
import component15 from '../assets/C-15.jpg';
import component16 from '../assets/C-16.jpg';
import component17 from '../assets/C-17.jpg';
import component18 from '../assets/C-18.jpg';
import component19 from '../assets/C-19.jpg';
import component20 from '../assets/C-20.jpg';
import component21 from '../assets/C-21.jpg';
import component22 from '../assets/C-22.jpg';
import component23 from '../assets/C-23.jpg';
import component24 from '../assets/C-24.jpg';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import './Home.css';

const components = [
  component1, component2, component3, component4, component5, component6,
  component7, component8, component9, component10, component11, component12,
  component13, component14, component15, component16, component17, component18,
  component19, component20, component21, component22, component23, component24,
].map((image, index) => ({
  image,
  name: `Component ${String(index + 1).padStart(3, '0')}`,
}));

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <ScrollReveal className="hero-content">
            <h1 className="hero-heading">
              Engineering Plastics,<br />
              <span className="text-blue">Precision </span> 
              <span className="text-orange">Injection</span><br />
              Moulding
            </h1>
            <button className="btn btn-teal hero-btn">
              Request a Quote <ChevronRight size={18} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container services-container">
          <div className="services-image-col">
            <img src={servicesImg} alt="Precision gears and components" className="services-image" />
          </div>
          <ScrollReveal className="services-grid-col" stagger={120}>
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
          </ScrollReveal>
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

          <ScrollReveal className="industries-content">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section" aria-labelledby="vision-heading">
        <ScrollReveal className="vision-content">
          <h2 id="vision-heading" className="vision-heading">VISION</h2>
          <div className="vision-card">
            <p className="vision-statement">
              To be a part of global supplier chain by offering{' '}
              <strong>engineering and manufacturing solutions</strong>, satisfying customer expectations by providing{' '}
              <strong>quality services, timely delivery and cost effective solutions</strong>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* About Us Section */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <ScrollReveal className="about-grid" duration={800}>
            <div className="about-content">
              <h2 id="about-heading" className="about-heading">ABOUT US</h2>
              <p className="about-copy">
                <strong>MOLDTECH</strong> is a Bangalore based company started in the year{' '}
                <span className="about-highlight">1999</span>, specialized in design and manufacturing high precision multi cavity plastic injection moulds, proto injection moulds, injection moulded parts, jigs and fixtures with tight tolerance.
              </p>
              <p className="about-copy about-copy-secondary">
                Backed by <strong>four decades of experience</strong> in the field, Supported by tooling professionals with over{' '}
                <strong className="about-highlight">100 man years of experience.</strong>
              </p>

              <h3 className="about-verticals-heading">Verticals supported</h3>
              <div className="about-verticals-grid">
                <div className="about-vertical">Automotive</div>
                <div className="about-vertical">Medical</div>
                <div className="about-vertical">Home Appliances</div>
                <div className="about-vertical">Electronics</div>
              </div>
            </div>

            <div className="about-certification-card">
              <div className="about-certification-badge">
                <div className="about-certification-icon"><Check size={36} strokeWidth={3} /></div>
              </div>
              <p className="about-certification-title">ISO 9001:2015 Certified</p>
              <p className="about-certification-subtitle">Quality Assured Manufacturing</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Components Section */}
      <section className="quality-components-section" aria-labelledby="quality-components-heading">
        <ScrollReveal className="quality-components-content" duration={800}>
          <header className="quality-components-header">
            <h2 id="quality-components-heading"><span>Our Quality</span> <span>Components</span></h2>
            <div className="quality-components-underline" aria-hidden="true" />
            <p>Precision-engineered plastic components crafted with excellence and attention to detail</p>
          </header>

          <div className="quality-components-grid">
            {components.map((component) => (
              <article className="quality-component-card" key={component.name}>
                <img src={component.image} alt={component.name} />
                <div className="quality-component-name">{component.name}</div>
              </article>
            ))}
          </div>

          <a className="quality-components-button" href="/components" aria-label="View All Components">
            <Eye size={18} aria-hidden="true" />
            <span>View All Components</span>
          </a>
        </ScrollReveal>
      </section>

      {/* Certifications Section */}
      <section className="certifications section">
        <div className="container">
          <ScrollReveal className="certifications-header">
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle">
              We maintain the highest standards of quality and compliance in our manufacturing processes
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="cert-grid" stagger={120}>
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
