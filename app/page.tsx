'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const services = [
    {
      name: 'AC Installation',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
      price: 'From $3,200',
      desc: 'High-efficiency central air conditioning systems sized and installed by NATE-certified technicians. We carry top brands including Carrier, Trane, Lennox, and Daikin with full manufacturer warranties up to 12 years. Every installation includes load calculations, ductwork evaluation, and a complete post-install performance test to ensure your new system runs at peak SEER2 efficiency from day one.',
    },
    {
      name: 'AC Repair',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      price: 'From $89',
      desc: 'Fast, accurate diagnosis and repair of all air conditioning makes and models. Our trucks carry over 500 OEM parts so most repairs are completed in a single visit. We service compressors, evaporator coils, refrigerant leaks, electrical faults, thermostat issues, and condensate drain problems. Emergency AC repair is available 24 hours a day, 7 days a week, including holidays.',
    },
    {
      name: 'Furnace Installation',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
      price: 'From $2,800',
      desc: 'Expert gas and electric furnace installation for new construction and replacements. We help you choose the right AFUE rating for your budget and home size, from standard 80% models to ultra-high-efficiency 98% condensing units. Every install includes gas line inspection, carbon monoxide testing, airflow balancing, and a comprehensive safety check. Financing available with 0% APR.',
    },
    {
      name: 'Heat Pump Systems',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      price: 'From $4,500',
      desc: 'Installation, repair, and maintenance of air-source and ground-source heat pump systems. Heat pumps provide both heating and cooling in a single, highly efficient unit — reducing energy bills by up to 50% compared to traditional systems. We install variable-speed inverter models that maintain consistent comfort year-round. Ask about federal tax credits and utility rebates.',
    },
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$15',
      period: '/mo',
      desc: 'Essential seasonal tune-ups for budget-conscious homeowners.',
      features: [
        '1 spring AC tune-up',
        '1 fall heating tune-up',
        '21-point system inspection',
        '10% discount on repairs',
        'Priority scheduling',
        'No overtime charges',
      ],
      highlight: false,
    },
    {
      name: 'Comfort',
      price: '$25',
      period: '/mo',
      desc: 'Our most popular plan — full coverage for year-round peace of mind.',
      features: [
        '2 seasonal tune-ups (spring & fall)',
        '21-point system inspection each visit',
        '15% discount on all repairs',
        'Priority same-day scheduling',
        'No overtime or after-hours fees',
        'Free filter replacements (standard sizes)',
        'Annual ductwork visual inspection',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$39',
      period: '/mo',
      desc: 'Maximum protection, maximum savings — the ultimate worry-free plan.',
      features: [
        '2 seasonal tune-ups (spring & fall)',
        '21-point system inspection each visit',
        '20% discount on all repairs',
        'VIP same-day emergency service',
        'No overtime or after-hours fees',
        'Free filter replacements (all sizes)',
        'Annual ductwork inspection',
        'Indoor air quality assessment',
        '1-year extended labor warranty',
        'Free refrigerant top-offs (up to 2 lbs)',
      ],
      highlight: false,
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer M.',
      location: 'Plano, TX',
      rating: 5,
      text: 'ArcticAir replaced our 20-year-old AC system in one day. The crew was professional, clean, and explained every step. Our energy bill dropped 40% the first month. Could not be happier with the new Carrier unit they installed.',
    },
    {
      name: 'Robert & Linda K.',
      location: 'Richardson, TX',
      rating: 5,
      text: 'We called at 10 PM on a Saturday night in July when our AC died. A technician arrived within 90 minutes and had us cooling again by midnight. They did not charge extra for the weekend emergency call. ArcticAir is the only HVAC company we will ever use.',
    },
    {
      name: 'Marcus T.',
      location: 'Frisco, TX',
      rating: 5,
      text: 'I have been on their Comfort maintenance plan for three years. They show up on time, do thorough inspections, and caught a failing capacitor before it could damage our compressor. Saved us a $2,000 repair. Honest, reliable, and fairly priced.',
    },
  ];

  const serviceAreas = [
    'Dallas', 'Plano', 'Frisco', 'Richardson', 'McKinney', 'Allen',
    'Garland', 'Mesquite', 'Irving', 'Grand Prairie', 'Carrollton',
    'Lewisville', 'Flower Mound', 'Denton', 'The Colony',
    'Prosper', 'Celina', 'Little Elm', 'Coppell', 'Southlake', 'Keller',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* === EMERGENCY BANNER === */}
      {bannerVisible && (
        <div className="emergency-banner">
          <div className="emergency-banner-inner">
            <span className="emergency-pulse-dot" />
            <span className="emergency-text">
              24/7 EMERGENCY SERVICE — NO OVERTIME FEES — CALL NOW:{' '}
              <a href="tel:(555) 901-2346" className="emergency-phone">
                (555) 901-2346
              </a>
            </span>
            <button
              onClick={() => setBannerVisible(false)}
              className="emergency-close"
              aria-label="Close banner"
            >
              x
            </button>
          </div>
        </div>
      )}

      {/* === NAVIGATION === */}
      <nav className={`nav-bar ${bannerVisible ? 'nav-with-banner' : 'nav-no-banner'}`}>
        <div className="nav-inner">
          <div className="nav-brand">
            <h1 className="nav-logo">ARCTICAIR</h1>
            <p className="nav-tagline">HVAC &bull; DALLAS, TX</p>
          </div>
          <div className="nav-links-desktop">
            <button onClick={() => scrollTo('services')} className="nav-link">Services</button>
            <button onClick={() => scrollTo('plans')} className="nav-link">Plans</button>
            <button onClick={() => scrollTo('testimonials')} className="nav-link">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="nav-link nav-cta">Free Estimate</button>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu">
            {['services', 'plans', 'testimonials', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-mobile-link">
                {id === 'contact' ? 'Free Estimate' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        {/* === HERO SECTION === */}
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="hero-inner">
            <div className="hero-content">
              <span className="badge">Licensed &amp; Insured — Est. 2001</span>
              <h2 className="hero-headline">
                YOUR COMFORT,<br />OUR <span className="text-cyan">MISSION.</span>
              </h2>
              <p className="hero-sub">
                Expert heating, cooling, and indoor air quality services for residential and commercial properties across the Dallas-Fort Worth metroplex. Available 24/7 for emergencies with no overtime fees, ever.
              </p>
              <div className="hero-actions">
                <button onClick={() => scrollTo('contact')} className="btn-primary">
                  Schedule Free Estimate
                </button>
                <a href="tel:(555) 901-2346" className="btn-outline">
                  Emergency Call
                </a>
              </div>
            </div>
            <div className="hero-stats">
              {[
                { value: '25+', label: 'Years in Business' },
                { value: '10K+', label: 'Homes Served' },
                { value: 'Same Day', label: 'Service Available' },
                { value: '24/7', label: 'Emergency Line' },
                { value: 'NATE', label: 'Certified Techs' },
                { value: '$0', label: 'Free Estimates' },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SERVICES WITH IMAGES === */}
        <section id="services" className="reveal services-section" aria-labelledby="services-heading">
          <div className="section-container">
            <div className="section-header">
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="section-title">Our HVAC Services</h2>
              <p className="section-subtitle">
                From emergency repairs to complete system installations, ArcticAir delivers fast, honest, and professional HVAC services backed by industry-leading warranties and a 100% satisfaction guarantee on every job we perform.
              </p>
            </div>
            <div className="services-grid">
              {services.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-card-image">
                    <img src={s.image} alt={s.name} loading="lazy" />
                    <div className="service-card-overlay" />
                    <span className="service-price-tag">{s.price}</span>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{s.name}</h3>
                    <p className="service-card-desc">{s.desc}</p>
                    <button onClick={() => scrollTo('contact')} className="service-card-link">
                      Get a Quote &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === MAINTENANCE PLANS === */}
        <section id="plans" className="reveal plans-section" aria-labelledby="plans-heading">
          <div className="section-container">
            <div className="section-header">
              <span className="badge">Save &amp; Protect</span>
              <h2 id="plans-heading" className="section-title">Maintenance Plans</h2>
              <p className="section-subtitle">
                Keep your HVAC system running at peak performance year-round with our preventive maintenance plans. Members enjoy priority service, discounted repairs, extended equipment life, and complete peace of mind knowing their comfort system is always in expert hands.
              </p>
            </div>
            <div className="plans-grid">
              {plans.map((plan, i) => (
                <div key={i} className={`plan-card ${plan.highlight ? 'plan-highlighted' : ''}`}>
                  {plan.highlight && <div className="plan-popular-badge">Most Popular</div>}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price-row">
                      <span className="plan-price">{plan.price}</span>
                      <span className="plan-period">{plan.period}</span>
                    </div>
                    <p className="plan-desc">{plan.desc}</p>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j} className="plan-feature">
                        <span className="plan-check">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`plan-btn ${plan.highlight ? 'plan-btn-primary' : 'plan-btn-outline'}`}>
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SERVICE AREAS === */}
        <section className="reveal areas-section" aria-labelledby="areas-heading">
          <div className="section-container">
            <div className="section-header">
              <span className="badge">Coverage</span>
              <h2 id="areas-heading" className="section-title">Service Areas</h2>
              <p className="section-subtitle">
                Proudly serving the Dallas-Fort Worth metroplex with fast, reliable HVAC services across a 30-mile radius from our Dallas headquarters. Our fleet of fully stocked service vehicles ensures we arrive prepared to solve your comfort issues on the first visit.
              </p>
            </div>
            <div className="areas-grid">
              {serviceAreas.map((area, i) => (
                <span key={i} className="area-tag">{area}</span>
              ))}
            </div>
            <p className="areas-note">Do not see your city? Call us — we likely serve your area.</p>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section id="testimonials" className="reveal testimonials-section" aria-labelledby="reviews-heading">
          <div className="section-container">
            <div className="section-header">
              <span className="badge">Customer Love</span>
              <h2 id="reviews-heading" className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle">
                Do not just take our word for it — hear from homeowners across the Dallas-Fort Worth metroplex who trust ArcticAir for their heating and cooling needs. Our 5-star reputation is built on honest service, expert craftsmanship, and genuine care for every customer.
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="star">&#9733;</span>
                    ))}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-location">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FREE ESTIMATE FORM === */}
        <section id="contact" className="reveal contact-section" aria-labelledby="contact-heading">
          <div className="section-container">
            <div className="section-header">
              <span className="badge">Get in Touch</span>
              <h2 id="contact-heading" className="section-title">Request Your Free Estimate</h2>
              <p className="section-subtitle">
                Schedule service or request a free, no-obligation estimate online. We typically respond within 30 minutes during business hours. For 24/7 emergency service, call us directly at (555) 901-2346 — no overtime fees, no voicemail runaround, just a live person ready to help.
              </p>
            </div>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">&#128222;</div>
                <div className="contact-info-label">Call Us</div>
                <a href="tel:(555) 901-2346" className="contact-info-value">(555) 901-2346</a>
                <div className="contact-info-note">24/7 Emergency Line</div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">&#128205;</div>
                <div className="contact-info-label">Visit Us</div>
                <div className="contact-info-value-sm">4510 Commerce Dr, Suite 200<br />Dallas, TX 75201</div>
                <div className="contact-info-note">Mon–Sat 7AM–8PM</div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">&#128176;</div>
                <div className="contact-info-label">Financing</div>
                <div className="contact-info-value-sm">0% APR for up to 60 months<br />on new system installs</div>
                <div className="contact-info-note">OAC — Ask for details</div>
              </div>
            </div>

            <div className="form-container">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">&#9989;</div>
                  <h3 className="form-success-title">Thank You!</h3>
                  <p className="form-success-text">Your request has been submitted. We will contact you within 30 minutes during business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="estimate-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" required placeholder="John Smith" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" required placeholder="(555) 123-4567" className="form-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input type="email" required placeholder="john@example.com" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Needed *</label>
                    <select required className="form-input">
                      <option value="">Select a service...</option>
                      <option>AC Installation</option>
                      <option>AC Repair</option>
                      <option>Furnace Installation</option>
                      <option>Furnace Repair</option>
                      <option>Heat Pump Service</option>
                      <option>Duct Cleaning</option>
                      <option>Indoor Air Quality</option>
                      <option>Maintenance Plan</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Date</label>
                    <input type="date" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell Us More</label>
                    <textarea rows={4} placeholder="Describe your HVAC issue or service request..." className="form-input form-textarea" />
                  </div>
                  <button type="submit" className="btn-primary form-submit">
                    Submit Request — It is Free
                  </button>
                  <p className="form-disclaimer">
                    By submitting, you agree to be contacted about your service request. We never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-brand">ARCTICAIR</h3>
              <p className="footer-about">
                Expert heating, cooling, and indoor air quality services for the Dallas-Fort Worth metroplex since 2001. Licensed, bonded, insured, and committed to your comfort.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li>AC Installation &amp; Repair</li>
                <li>Furnace Installation &amp; Repair</li>
                <li>Heat Pump Systems</li>
                <li>Duct Cleaning</li>
                <li>Indoor Air Quality</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>About ArcticAir</li>
                <li>Maintenance Plans</li>
                <li>Financing Options</li>
                <li>Service Areas</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li><a href="tel:(555) 901-2346" className="footer-link">(555) 901-2346</a></li>
                <li>info@arcticairhvac.com</li>
                <li>4510 Commerce Dr, Suite 200</li>
                <li>Dallas, TX 75201</li>
                <li>TACLA License #48291</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} ArcticAir HVAC. All rights reserved. Dallas, TX. Licensed, Bonded &amp; Insured.
          </div>
        </div>
      </footer>
    </div>
  );
}
