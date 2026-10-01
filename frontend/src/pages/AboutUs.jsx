import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { CarFront, CircleCheck, Eye, FilePlus2, FileText, Lightbulb, Menu, Star, Users } from 'lucide-react';
import founderOne from '../assets/found-1.jpg';
import founderTwo from '../assets/found-2.jpg';
import sample52 from '../assets/S-52.jpg';
import sample53 from '../assets/S-53.jpg';
import sample54 from '../assets/S-54.jpg';
import sample55 from '../assets/S-55.jpg';
import sample56 from '../assets/S-56.jpg';
import sample57 from '../assets/S-57.jpg';
import sample58 from '../assets/S-58.jpg';
import sample59 from '../assets/S-59.jpg';
import sample60 from '../assets/S-60.jpg';
import sample61 from '../assets/S-61.jpg';
import sample62 from '../assets/S-62.jpg';
import sample63 from '../assets/S-63.jpg';
import sample64 from '../assets/S-64.jpg';
import sample65 from '../assets/S-65.jpg';
import sample66 from '../assets/S-66.jpg';
import sample67 from '../assets/S-67.jpg';
import sample68 from '../assets/S-68.jpg';
import sample69 from '../assets/S-69.jpg';
import sample70 from '../assets/S-70.jpg';
import sample71 from '../assets/S-71.jpg';
import './AboutUs.css';

const coreValues = [
  {
    title: 'Quality',
    description: 'Uncompromising commitment to delivering precision and excellence in every project.',
    icon: Star,
  },
  {
    title: 'Innovation',
    description: 'Continuously advancing our technology and processes to stay ahead of industry trends.',
    icon: Lightbulb,
  },
  {
    title: 'Partnership',
    description: 'Building long-term relationships based on trust, transparency, and mutual success.',
    icon: Users,
  },
  {
    title: 'Reliability',
    description: 'Delivering on our promises with consistent quality and on-time performance.',
    icon: CircleCheck,
  },
];

const expertiseItems = [
  { highlight: '100+', supporting: 'Man Years', title: 'Experienced Professionals', description: 'Combined experience of our skilled workforce' },
  { highlight: '4', supporting: 'Decades', title: 'Industry Expertise', description: 'Of continuous innovation and excellence' },
  { highlight: 'ISO', supporting: '9001:2015', title: 'Quality Standards', description: 'Certified quality management system' },
  { highlight: 'Multi', supporting: 'National', title: 'Global Reach', description: 'Serving clients across different countries' },
  { highlight: 'State', supporting: 'of Art', title: 'Technology Focus', description: 'Latest machinery and manufacturing processes' },
  { highlight: 'Leading', supporting: 'Institutes', title: 'Industry Partnerships', description: 'Collaborations with NTTF, GTTC, KGPT' },
];

const industries = [
  { title: 'Automotive', description: 'Precision components for automotive applications', icon: CarFront },
  { title: 'Medical', description: 'Medical grade plastic components and devices', icon: FilePlus2 },
  { title: 'Home Appliances', description: 'Components for home appliance manufacturers', icon: FileText },
  { title: 'Electronics', description: 'Electronic component housings and parts', icon: Menu },
];

const manufacturingSamples = [
  { id: 52, image: sample52 },
  { id: 53, image: sample53 },
  { id: 54, image: sample54 },
  { id: 55, image: sample55 },
  { id: 56, image: sample56 },
  { id: 57, image: sample57 },
  { id: 58, image: sample58 },
  { id: 59, image: sample59 },
  { id: 60, image: sample60 },
  { id: 61, image: sample61 },
  { id: 62, image: sample62 },
  { id: 63, image: sample63 },
  { id: 64, image: sample64 },
  { id: 65, image: sample65 },
  { id: 66, image: sample66 },
  { id: 67, image: sample67 },
  { id: 68, image: sample68 },
  { id: 69, image: sample69 },
  { id: 70, image: sample70 },
  { id: 71, image: sample71 }
];

const AboutUs = () => {
  return (
    <>
      <section className="about-us-hero" aria-labelledby="about-us-page-heading">
        <ScrollReveal className="about-us-hero-content">
          <h1 id="about-us-page-heading">About MOLDTECH</h1>
          <p>Four decades of excellence in precision tool making and injection molding</p>
        </ScrollReveal>
      </section>

      <section className="our-story-section" aria-labelledby="our-story-heading">
        <div className="container">
          <ScrollReveal className="our-story-reveal" duration={800}>
          <div className="our-story-heading-group">
            <h2 id="our-story-heading">Our Story</h2>
            <div className="our-story-underline" aria-hidden="true"></div>
          </div>

          <div className="our-story-grid">
            <div className="our-story-content">
              <p>
                <strong>MOLDTECH</strong> began its journey in <strong className="story-highlight">1999</strong> in Bangalore, with a vision to become a leading provider of precision injection molding solutions.
              </p>
              <p>
                Founded with a commitment to excellence, we have grown from a small tool room to a comprehensive manufacturing facility, serving clients across <strong>automotive, medical, electronics, and home appliances</strong> industries.
              </p>
              <p>
                Our journey of over two decades has been marked by continuous innovation, investment in cutting-edge technology, and an unwavering focus on quality that earned us the <strong className="story-highlight">ISO 9001:2015 certification.</strong>
              </p>

              <div className="founders">
                <h3>Our Founders</h3>
                <div className="founder-images">
                  <div className="founder-image founder-image-one">
                    <img src={founderOne} alt="Moldtech founder" />
                  </div>
                  <div className="founder-image founder-image-two">
                    <img src={founderTwo} alt="Moldtech founder" />
                  </div>
                </div>
              </div>
            </div>

            <aside className="story-statistics" aria-label="Moldtech company statistics">
              <div className="story-stat">
                <strong>25+</strong>
                <span>Years of Excellence</span>
              </div>
              <div className="story-stat story-stat-orange">
                <strong>100+</strong>
                <span>Man Years Experience</span>
              </div>
              <div className="story-stat">
                <strong>4</strong>
                <span>Decades of Heritage</span>
              </div>
            </aside>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="vision-mission-section" aria-label="Our vision and mission">
        <div className="container">
          <ScrollReveal className="vision-mission-grid" duration={800}>
            <article className="vision-mission-card">
              <div className="vision-mission-icon vision-icon" aria-hidden="true"><Eye size={25} /></div>
              <h2>Our Vision</h2>
              <p>To be a part of global supplier chain by offering engineering and manufacturing solutions, satisfying customer expectations by providing quality services, timely delivery and cost effective solutions.</p>
            </article>

            <article className="vision-mission-card">
              <div className="vision-mission-icon mission-icon" aria-hidden="true"><CircleCheck size={23} /></div>
              <h2>Our Mission</h2>
              <p>To deliver precision-engineered injection molding solutions that exceed industry standards, while building lasting partnerships through innovation, quality, and exceptional service.</p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="core-values-section" aria-labelledby="core-values-heading">
        <div className="container">
          <ScrollReveal className="core-values-reveal" duration={800}>
            <div className="core-values-heading-group">
              <h2 id="core-values-heading">Our Core Values</h2>
              <div className="core-values-underline" aria-hidden="true"></div>
            </div>

            <div className="core-values-grid">
              {coreValues.map(({ title, description, icon: Icon }) => (
                <article className="core-value" key={title}>
                  <div className="core-value-icon" aria-hidden="true"><Icon size={25} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="expertise-section" aria-labelledby="expertise-heading">
        <div className="container">
          <ScrollReveal className="expertise-reveal" duration={800}>
            <div className="expertise-heading-group">
              <h2 id="expertise-heading">Our Expertise</h2>
              <p>Backed by decades of experience and a team of dedicated professionals</p>
            </div>

            <div className="expertise-grid">
              {expertiseItems.map(({ highlight, supporting, title, description }) => (
                <article className="expertise-card" key={title}>
                  <strong className="expertise-highlight">{highlight}</strong>
                  <span className="expertise-supporting">{supporting}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="industries-serve-section" aria-labelledby="industries-serve-heading">
        <div className="container">
          <ScrollReveal className="industries-serve-reveal" duration={800}>
            <div className="industries-serve-heading-group">
              <h2 id="industries-serve-heading">Industries We Serve</h2>
              <p>Providing specialized solutions across diverse industry verticals</p>
            </div>

            <div className="industries-serve-grid">
              {industries.map(({ title, description, icon: Icon }) => (
                <article className="industry-serve-card" key={title}>
                  <div className="industry-serve-icon" aria-hidden="true"><Icon size={38} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="precision-manufacturing-section" aria-labelledby="precision-manufacturing-heading">
        <div className="container">
          <ScrollReveal className="precision-manufacturing-reveal" duration={800}>
            <header className="precision-manufacturing-heading">
              <h2 id="precision-manufacturing-heading">Precision Manufacturing</h2>
              <div className="precision-manufacturing-underline" aria-hidden="true" />
              <p>Showcasing our expertise in creating high-quality plastic components with exceptional precision and finish</p>
            </header>

            <div className="precision-manufacturing-grid">
              {manufacturingSamples.map(({ id, image }) => (
                <article className="precision-sample-card" key={id}>
                  <img src={image} alt={`Sample #${id} - Precision Engineered`} />
                  <div className="precision-sample-overlay" aria-hidden="true">
                    <div className="precision-sample-copy">
                      <h3>Sample #{id}</h3>
                      <p>Precision Engineered</p>
                    </div>
                  </div>
                  <span className="precision-sample-featured" aria-hidden="true">★</span>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="quality-cta-section" aria-labelledby="quality-cta-heading">
        <div className="container">
          <ScrollReveal className="quality-cta-banner" duration={800}>
            <h2 id="quality-cta-heading">Experience Our Quality</h2>
            <p>Each component reflects our commitment to precision, quality, and excellence in manufacturing</p>
            <a className="quality-cta-button" href="/portfolio">Explore Full Portfolio</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
