import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import galleryImage1 from '../assets/C-1.jpg';
import galleryImage2 from '../assets/C-2.jpg';
import galleryImage3 from '../assets/C-3.jpg';
import galleryImage4 from '../assets/C-4.jpg';
import galleryImage5 from '../assets/C-5.jpg';
import galleryImage6 from '../assets/C-6.jpg';
import galleryImage7 from '../assets/C-7.jpg';
import galleryImage8 from '../assets/C-8.jpg';
import galleryImage9 from '../assets/C-9.jpg';
import galleryImage10 from '../assets/C-10.jpg';
import galleryImage11 from '../assets/C-11.jpg';
import galleryImage12 from '../assets/C-12.jpg';
import galleryImage13 from '../assets/C-13.jpg';
import galleryImage14 from '../assets/C-14.jpg';
import galleryImage15 from '../assets/C-15.jpg';
import galleryImage16 from '../assets/C-16.jpg';
import galleryImage17 from '../assets/C-17.jpg';
import galleryImage18 from '../assets/C-18.jpg';
import galleryImage19 from '../assets/C-19.jpg';
import galleryImage20 from '../assets/C-20.jpg';
import galleryImage21 from '../assets/C-21.jpg';
import galleryImage22 from '../assets/C-22.jpg';
import galleryImage23 from '../assets/C-23.jpg';
import galleryImage24 from '../assets/C-24.jpg';
import galleryImageM31 from '../assets/M-31.jpg';
import galleryImageM32 from '../assets/M-32.jpg';
import galleryImageM33 from '../assets/M-33.jpg';
import galleryImageM34 from '../assets/M-34.jpg';
import galleryImageM35 from '../assets/M-35.jpg';
import galleryImageM36 from '../assets/M-36.jpg';
import galleryImageM37 from '../assets/M-37.jpg';
import galleryImageM38 from '../assets/M-38.jpg';
import galleryImageM39 from '../assets/M-39.jpg';
import galleryImageM40 from '../assets/M-40.jpg';
import galleryImageM41 from '../assets/M-41.jpg';
import galleryImageM42 from '../assets/M-42.jpg';
import galleryImageM43 from '../assets/M-43.jpg';
import galleryImageM44 from '../assets/M-44.jpg';
import galleryImageM45 from '../assets/M-45.jpg';
import galleryImageM46 from '../assets/M-46.jpg';
import galleryImageM47 from '../assets/M-47.jpg';
import galleryImageM48 from '../assets/M-48.jpg';
import galleryImageM49 from '../assets/M-49.jpg';
import galleryImageM50 from '../assets/M-50.jpg';
import galleryImageS52 from '../assets/S-52.jpg';
import galleryImageS53 from '../assets/S-53.jpg';
import galleryImageS54 from '../assets/S-54.jpg';
import galleryImageS55 from '../assets/S-55.jpg';
import galleryImageS56 from '../assets/S-56.jpg';
import galleryImageS57 from '../assets/S-57.jpg';
import galleryImageS58 from '../assets/S-58.jpg';
import galleryImageS59 from '../assets/S-59.jpg';
import galleryImageS60 from '../assets/S-60.jpg';
import galleryImageS61 from '../assets/S-61.jpg';
import galleryImageS62 from '../assets/S-62.jpg';
import galleryImageS63 from '../assets/S-63.jpg';
import galleryImageS64 from '../assets/S-64.jpg';
import galleryImageS65 from '../assets/S-65.jpg';
import galleryImageS66 from '../assets/S-66.jpg';
import galleryImageS67 from '../assets/S-67.jpg';
import galleryImageS68 from '../assets/S-68.jpg';
import galleryImageS69 from '../assets/S-69.jpg';
import galleryImageS70 from '../assets/S-70.jpg';
import galleryImageS71 from '../assets/S-71.jpg';
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

const galleryComponents = [
  { id: 7, image: galleryImage1 },
  { id: 8, image: galleryImage2 },
  { id: 9, image: galleryImage3 },
  { id: 10, image: galleryImage4 },
  { id: 11, image: galleryImage5 },
  { id: 12, image: galleryImage6 },
  { id: 13, image: galleryImage7 },
  { id: 14, image: galleryImage8 },
  { id: 15, image: galleryImage9 },
  { id: 16, image: galleryImage10 },
  { id: 17, image: galleryImage11 },
  { id: 18, image: galleryImage12 },
  { id: 19, image: galleryImage13 },
  { id: 20, image: galleryImage14 },
  { id: 21, image: galleryImage15 },
  { id: 22, image: galleryImage16 },
  { id: 23, image: galleryImage17 },
  { id: 24, image: galleryImage18 },
  { id: 25, image: galleryImage19 },
  { id: 26, image: galleryImage20 },
  { id: 27, image: galleryImage21 },
  { id: 28, image: galleryImage22 },
  { id: 29, image: galleryImage23 },
  { id: 30, image: galleryImage24 },
  { id: 32, image: galleryImageM31 },
  { id: 33, image: galleryImageM32 },
  { id: 34, image: galleryImageM33 },
  { id: 35, image: galleryImageM34 },
  { id: 36, image: galleryImageM35 },
  { id: 37, image: galleryImageM36 },
  { id: 38, image: galleryImageM37 },
  { id: 39, image: galleryImageM38 },
  { id: 40, image: galleryImageM39 },
  { id: 41, image: galleryImageM40 },
  { id: 42, image: galleryImageM41 },
  { id: 43, image: galleryImageM42 },
  { id: 44, image: galleryImageM43 },
  { id: 45, image: galleryImageM44 },
  { id: 46, image: galleryImageM45 },
  { id: 47, image: galleryImageM46 },
  { id: 48, image: galleryImageM47 },
  { id: 49, image: galleryImageM48 },
  { id: 50, image: galleryImageM49 },
  { id: 51, image: galleryImageM50 },
  { id: 52, image: galleryImageS52 },
  { id: 53, image: galleryImageS53 },
  { id: 54, image: galleryImageS54 },
  { id: 55, image: galleryImageS55 },
  { id: 56, image: galleryImageS56 },
  { id: 57, image: galleryImageS57 },
  { id: 58, image: galleryImageS58 },
  { id: 59, image: galleryImageS59 },
  { id: 60, image: galleryImageS60 },
  { id: 61, image: galleryImageS61 },
  { id: 62, image: galleryImageS62 },
  { id: 63, image: galleryImageS63 },
  { id: 64, image: galleryImageS64 },
  { id: 65, image: galleryImageS65 },
  { id: 66, image: galleryImageS66 },
  { id: 67, image: galleryImageS67 },
  { id: 68, image: galleryImageS68 },
  { id: 69, image: galleryImageS69 },
  { id: 70, image: galleryImageS70 },
  { id: 71, image: galleryImageS71 }
];

const eSeriesImages = import.meta.glob('../assets/E-*.jpeg', {
  eager: true,
  import: 'default',
});

const eSeriesComponents = Object.entries(eSeriesImages)
  .map(([path, image]) => ({
    id: Number(path.match(/E-(\d+)\.jpeg$/)?.[1]),
    image,
  }))
  .sort((first, second) => first.id - second.id);

galleryComponents.push(...eSeriesComponents);

function Components() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (!selectedComponent) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedComponent(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedComponent]);

  return (
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

    <section className="component-gallery-section" aria-labelledby="component-gallery-heading">
      <div className="component-gallery-container">
        <ScrollReveal className="component-gallery-content" duration={800}>
          <header className="component-gallery-heading-group">
            <h2 id="component-gallery-heading">COMPONENT GALLERY</h2>
            <p>Explore our extensive range of precision-manufactured components</p>
          </header>

          <div className="component-gallery-grid">
            {galleryComponents.map((component) => (
              <article className="component-gallery-card" key={component.id}>
                <img src={component.image} alt={`Component ${component.id}`} />
                <div className="component-gallery-overlay" aria-hidden="true" />
                <span className="component-gallery-name" aria-hidden="true">Component {component.id}</span>
                <button
                  className="component-gallery-zoom"
                  type="button"
                  aria-label={`Zoom Component ${component.id}`}
                  onClick={() => setSelectedComponent(component)}
                >
                  <ZoomIn size={24} aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
      {selectedComponent && (
        <div
          className="component-image-modal"
          role="presentation"
          onClick={() => setSelectedComponent(null)}
        >
          <div
            className="component-image-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Component ${selectedComponent.id} image preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="component-image-close"
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedComponent(null)}
            >
              <X size={32} aria-hidden="true" />
            </button>
            <img src={selectedComponent.image} alt={`Component ${selectedComponent.id}`} />
            <p>Component {selectedComponent.id}</p>
          </div>
        </div>
      )}
    </section>
  </>
  );
}

export default Components;
