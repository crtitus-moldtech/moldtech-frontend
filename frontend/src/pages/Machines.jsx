import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import machineOne from '../assets/machine-1.png';
import machineTwo from '../assets/machine-2.jpg';
import machineThree from '../assets/machine-3.webp';
import machineFour from '../assets/machine-4.png';
import machineFive from '../assets/machine-5.jpg';
import './Machines.css';

const machines = [
  { id: 1, image: machineOne, name: 'BFW Milling Machine' },
  { id: 2, image: machineTwo, name: 'DECKEL FP2 Universal Milling Machine' },
  { id: 3, image: machineThree, name: 'HAAS VF2 VMC(USA)' },
  { id: 4, image: machineFour, name: 'OSCAR MAX SPARK EDM S430S (Taiwan)' },
  { id: 5, image: machineFive, name: 'SCHAFFNER Cylindrical Grinding Machine' },
];

const Machines = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    if (!selectedMachine) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedMachine(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedMachine]);

  return (
    <>
      <section className="machines-hero" aria-labelledby="machines-heading">
        <ScrollReveal className="machines-hero-content">
          <h1 id="machines-heading">Our Machines</h1>
          <p>A glimpse of our advanced manufacturing equipment</p>
        </ScrollReveal>
      </section>

      <section className="machinery-gallery-section" aria-labelledby="machinery-gallery-heading">
        <div className="container">
          <ScrollReveal className="machinery-gallery-reveal" duration={800}>
            <div className="machinery-gallery-heading-group">
              <h2 id="machinery-gallery-heading">MACHINERY GALLERY</h2>
              <p>Explore our core machines used for precision manufacturing</p>
            </div>

            <div className="machine-gallery-grid">
              {machines.map((machine) => (
                <button
                  className="machine-gallery-card"
                  key={machine.id}
                  type="button"
                  aria-label={`View ${machine.name}`}
                  onClick={() => setSelectedMachine(machine)}
                >
                  <div className="machine-image-wrapper">
                    <img className="machine-image" src={machine.image} alt={machine.name} />
                    <div className="machine-name-overlay" aria-hidden="true">{machine.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selectedMachine && (
        <div className="machine-lightbox" role="dialog" aria-modal="true" aria-label={selectedMachine.name} onClick={() => setSelectedMachine(null)}>
          <button className="machine-lightbox-close" type="button" aria-label="Close image" onClick={() => setSelectedMachine(null)}>
            <X size={34} />
          </button>
          <div className="machine-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedMachine.image} alt={selectedMachine.name} />
          </div>
        </div>
      )}
    </>
  );
};

export default Machines;
