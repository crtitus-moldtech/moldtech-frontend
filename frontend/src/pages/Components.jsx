import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import './Components.css';

const capabilities = [
  { capacity: '< 50T', label: 'Capacity', title: 'SMALL SIZED COMPONENTS', color: 'teal' },
  { capacity: '< 120T', label: 'Capacity', title: 'MEDIUM SIZED COMPONENTS', color: 'orange' },
  { capacity: 'Specialized', label: 'Capacity', title: 'AUTOMOTIVE COMPONENTS', color: 'teal' },
  { capacity: 'Complex', label: 'Capacity', title: 'ASSEMBLY COMPONENTS', color: 'orange' },
  { capacity: 'Precision', label: 'Capacity', title: 'MEDICAL CLEAR COMPONENTS', color: 'teal' },
];

const provenComponents = [
  'Nebulizer & Air Bed Assembly',
  'Export Components – Spacer Top, Middle & Bottom',
  'TOY VACUUM CLEANER PROJECT',
  'Components with tight tolerance',
  'WEIGHING SCALE BASE',
  'METRO HANDLE',
  'BOBBIN',
  'IMPELLER',
  'SEAT BELT SHOULDER ANCHOR',
  'AIMING SCREW',
  'CLUTCH WASHERS',
  'MOTOR COVER',
  'BRACKET',
  'CASE',
  'WASHER AND LEVER',
  'GUIDE ANCHOR',
  'PILLAR LOOP',
  'CASING',
  'BOBBINS',
  'T-FRAME & Cu-35',
  'RESERVOIR',
  'HOLDER B',
  'RESERVOIR TOP & BOTTOM',
  'SPOOL',
  'IMPELLER DIA170',
  'WEBBING GUIDE',
  'DM SLEEVE',
  'LEVER',
  'SPRING LOCATOR CLIP',
  'IMPELLER DIA250',
  'IMPELLER DIA150',
  'SALT HOLDER & HOLDER BODY',
  'FRAME CU 375',
  'TFRAME – Hot Sprue 8 cavity layout',
  'TFRAME Silverline-4 Cavity layout',
  'Solid Rod – 8 Cavity layout',
  'Solid Rod Silverline – 4 Cavity layout',
  'IV Drip Control Parts',
];

const provenCategories = [
  {
    title: 'MEDICAL COMPONENTS',
    items: ['IV Drip Control Parts', 'Medical Clear Components', 'Precision Medical Devices'],
  },
  {
    title: 'AUTOMOTIVE PARTS',
    items: ['Seat Belt Components', 'Motor Covers', 'Clutch Washers'],
  },
  {
    title: 'SPECIALIZED LAYOUTS',
    items: ['Hot Sprue 8 Cavity Layout', 'Silverline 4 Cavity Layout', 'Multi-Cavity Designs'],
  },
];

const processes = [
  { number: '01', title: 'Design & Engineering', description: 'CAD design with flow simulation and analysis' },
  { number: '02', title: 'Tool Manufacturing', description: 'Precision machining using advanced equipment' },
  { number: '03', title: 'Injection Molding', description: 'High-precision molding with quality controls' },
  { number: '04', title: 'Quality Assurance', description: 'Comprehensive testing and validation' },
];

const Components = () => (
  <>
    <section className="components-hero" aria-labelledby="components-heading">
      <ScrollReveal className="components-hero-content" duration={800}>
        <h1 id="components-heading">Our Components</h1>
        <p>Precision-engineered components across diverse manufacturing capabilities</p>
      </ScrollReveal>
    </section>

    <section className="capabilities-section" aria-labelledby="capabilities-heading">
      <div className="container">
        <ScrollReveal className="capabilities-content" duration={800}>
          <header className="capabilities-heading-group">
            <h2 id="capabilities-heading">COMPONENT MANUFACTURING CAPABILITIES</h2>
            <p>Specialized manufacturing capabilities across different component categories</p>
          </header>

          <div className="capabilities-grid">
            {capabilities.map(({ capacity, label, title, color }) => (
              <article className="capability-card" key={title}>
                <div className={`capability-card-header capability-card-header-${color}`}>
                  <h3>{capacity}</h3>
                  <p>{label}</p>
                </div>
                <div className="capability-card-title">
                  <p>{title}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="proven-components-section" aria-labelledby="proven-components-heading">
      <div className="proven-components-container">
        <ScrollReveal className="proven-components-content" duration={800}>
          <header className="proven-components-heading-group">
            <h2 id="proven-components-heading">RECENTLY PROVEN COMPONENTS</h2>
            <p>Showcasing our diverse manufacturing capabilities across various industries</p>
          </header>

          <div className="proven-components-grid">
            {provenComponents.map((name) => (
              <div className="proven-component-item" key={name}>{name}</div>
            ))}
          </div>

          <div className="proven-categories-grid">
            {provenCategories.map(({ title, items }) => (
              <section className="proven-category" key={title} aria-labelledby={`category-${title.toLowerCase().replaceAll(' ', '-')}`}>
                <h3 id={`category-${title.toLowerCase().replaceAll(' ', '-')}`}>{title}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="manufacturing-process-section" aria-labelledby="manufacturing-process-heading">
      <div className="container">
        <ScrollReveal className="manufacturing-process-content" duration={800}>
          <header className="manufacturing-process-heading-group">
            <h2 id="manufacturing-process-heading">MANUFACTURING PROCESS</h2>
            <p>Our systematic approach ensures precision and quality in every component</p>
          </header>

          <div className="manufacturing-process-grid">
            {processes.map(({ number, title, description }) => (
              <article className="manufacturing-process-card" key={number}>
                <div className="manufacturing-process-number" aria-hidden="true">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Components;
