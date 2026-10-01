import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { Mail, MapPin, Phone, UserRound } from 'lucide-react';
import ctaBackground from '../assets/machine-5.jpg';
import './ContactUs.css';

const ContactUs = () => {
  const [state, handleSubmit] = useForm('xgavbpdv');
  const formRef = useRef(null);
  const primaryPhone = '+91-9449464469';
  const primaryEmail = 'moldtech97@yahoo.com';

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset();
  }, [state.succeeded]);

  return (
    <>
      <section className="contact-us-hero" aria-labelledby="contact-us-heading">
        <ScrollReveal className="contact-us-hero-content">
          <h1 id="contact-us-heading">Contact Us</h1>
          <p>Get in touch with our expert team for your precision molding requirements</p>
        </ScrollReveal>
      </section>

      <section className="contact-details-section" aria-labelledby="get-in-touch-heading">
        <div className="container contact-details-grid">
          <ScrollReveal className="contact-info-column" duration={800}>
            <h2 id="get-in-touch-heading">Get In Touch</h2>
            <p className="contact-intro">Ready to discuss your project requirements? Our experienced team is here to help you with precision injection molding solutions tailored to your needs.</p>

            <div className="primary-contact-card">
              <h3>Primary Contact</h3>
              <div className="primary-contact-person">
                <span className="primary-contact-icon" aria-hidden="true"><UserRound size={20} /></span>
                <span><strong>CYRIL WILSON TITUS</strong><small>PROPRIETOR</small></span>
              </div>
            </div>

            <div className="contact-information-list">
              <div className="contact-information-item">
                <span className="contact-information-icon phone-icon" aria-hidden="true"><Phone size={20} /></span>
                <div><h3>Phone Numbers</h3><p>{primaryPhone}<br />+91-9886889688</p></div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon email-icon" aria-hidden="true"><Mail size={20} /></span>
                <div><h3>Email Addresses</h3><p>{primaryEmail}<br />crtius@moldtech.in</p></div>
              </div>
              <div className="contact-information-item">
                <span className="contact-information-icon address-icon" aria-hidden="true"><MapPin size={20} /></span>
                <div><h3>Registered Address</h3><p>2nd Main Road, 2763/2104, New no 135/10,<br />Shiva Farm, Magadi Main Road,<br />Kamaksipalaya, Bangalore – 560079<br />KARNATAKA, INDIA</p></div>
              </div>
            </div>

            <div className="business-details-card">
              <h3>Business Details</h3>
              <p>GST Number: 29ABDPT7797F1ZV</p>
              <p>PAN Number: ABDPT7797F</p>
              <p>Certification: ISO 9001:2015</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="contact-form-card" duration={800} delay={100}>
            <h2>Send us a Message</h2>
            {state.succeeded && (
              <p className="contact-form-status contact-form-status-success" role="status">
                <strong>Message sent successfully!</strong> Thank you for contacting us. Our team will get back to you shortly.
              </p>
            )}
            {state.errors && (
              <p className="contact-form-status contact-form-status-error" role="alert">
                Unable to send your message right now. Please try again.
              </p>
            )}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="contact-form-fields">
                <label htmlFor="full-name">Full Name *<input id="full-name" name="fullName" type="text" placeholder="Your full name" autoComplete="name" required /><ValidationError className="contact-field-error" prefix="Full Name" field="fullName" errors={state.errors} /></label>
                <label htmlFor="email">Email Address *<input id="email" name="email" type="email" placeholder="your.email@example.com" autoComplete="email" required /><ValidationError className="contact-field-error" prefix="Email" field="email" errors={state.errors} /></label>
                <label htmlFor="phone">Phone Number<input id="phone" name="phone" type="tel" placeholder="+91-9999999999" autoComplete="tel" /></label>
                <label htmlFor="company">Company Name<input id="company" name="company" type="text" placeholder="Your company name" autoComplete="organization" /></label>
              </div>
              <label htmlFor="subject">Subject *
                <select id="subject" name="subject" defaultValue="" required>
                  <option value="">Select a subject</option>
                  <option>General Enquiry</option>
                  <option>Request a Quote</option>
                  <option>Precision CNC Machining</option>
                  <option>Injection Molding</option>
                  <option>Advanced Tooling Solutions</option>
                  <option>Sheet Metal Fabrication</option>
                  <option>Sub Assembly Services</option>
                  <option>Design &amp; Prototyping</option>
                  <option>Research &amp; Development</option>
                  <option>Other</option>
                </select>
                <ValidationError className="contact-field-error" prefix="Subject" field="subject" errors={state.errors} />
              </label>
              <label htmlFor="message">Message *<textarea id="message" name="message" placeholder="Please describe your project requirements, specifications, or any questions you have..." required></textarea><ValidationError className="contact-field-error" prefix="Message" field="message" errors={state.errors} /></label>
              <button type="submit" disabled={state.submitting}>{state.submitting ? 'Sending...' : 'Send Message'}</button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="visit-facility-section" aria-labelledby="visit-facility-heading">
        <div className="container">
          <ScrollReveal className="visit-facility-content" duration={800}>
            <header className="visit-facility-heading-group">
              <h2 id="visit-facility-heading">Visit Our Facility</h2>
              <p>Located in the heart of Bangalore's industrial area</p>
            </header>
            <div className="facility-map-frame">
              <iframe
                title="Google Maps location of our facility"
                src="https://www.google.com/maps?q=12.9874067,77.5200081&z=15&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="contact-cta-section"
        aria-labelledby="contact-cta-heading"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="contact-cta-overlay" aria-hidden="true" />
        <ScrollReveal className="contact-cta-content" duration={800}>
          <h2 id="contact-cta-heading">Ready to Start Your Project?</h2>
          <p>Contact us today to discuss your precision injection molding requirements. Our experienced team is ready to provide you with cost-effective solutions.</p>
          <div className="contact-cta-actions">
            <a className="contact-cta-button contact-cta-call" href={`tel:${primaryPhone}`} aria-label="Call Now">
              <Phone size={18} aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a className="contact-cta-button contact-cta-email" href={`mailto:${primaryEmail}`} aria-label="Email Us">
              <Mail size={18} aria-hidden="true" />
              <span>Email Us</span>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default ContactUs;
