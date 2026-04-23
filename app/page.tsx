'use client';

import { useState } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [bannerVisible, setBannerVisible] = useState(true);
 const [formSubmitted, setFormSubmitted] = useState(false);

 const scrollToSection = (id: string) => {
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 }
 setMenuOpen(false);
 };

 const services = [
 { title: 'AC Installation', desc: 'High-efficiency central air, ductless mini-splits, and heat pump systems. Energy Star certified units.', price: 'From $3,499', icon: '' },
 { title: 'Heating Systems', desc: 'Furnace installation, boiler services, and radiant heating for year-round comfort.', price: 'From $2,999', icon: '' },
 { title: 'Repair & Service', desc: 'Fast diagnostics and repairs for all brands. Same-day service for no-heat/no-cool emergencies.', price: 'From $89', icon: '' },
 { title: 'Maintenance Plans', desc: 'Seasonal tune-ups, filter changes, and preventive care to extend system life and efficiency.', price: '$19/mo', icon: '' },
 { title: 'Indoor Air Quality', desc: 'Air purifiers, humidifiers, UV lights, and ventilation systems for healthier indoor air.', price: 'From $299', icon: '' },
 { title: 'Ductwork Services', desc: 'Duct cleaning, sealing, and new installations for optimal airflow and efficiency.', price: 'From $399', icon: '' },
 ];

 const plans = [
 {
 name: 'Basic',
 price: '$19',
 period: '/month',
 desc: 'Essential maintenance for budget-conscious homeowners',
 features: ['1 seasonal tune-up', 'Filter replacement', '15% repair discount', 'Priority scheduling', 'Phone support'],
 highlighted: false,
 },
 {
 name: 'Premium',
 price: '$39',
 period: '/month',
 desc: 'Complete coverage for total peace of mind',
 features: ['2 seasonal tune-ups', 'Filter replacement', '25% repair discount', 'Same-day priority', 'No overtime fees', 'Annual duct inspection', 'Thermostat calibration'],
 highlighted: true,
 },
 {
 name: 'Commercial',
 price: '$79',
 period: '/month',
 desc: 'Tailored plans for businesses and multi-unit properties',
 features: ['Quarterly maintenance', 'Full system diagnostics', '30% repair discount', '24/7 emergency response', 'Dedicated account manager', 'Compliance reporting', 'Multi-unit discounts'],
 highlighted: false,
 },
 ];

 const serviceAreas = [
 'Downtown', 'Westside', 'Eastside', 'North Hills', 'South Bay',
 'Midtown', 'Uptown', 'Harbor District', 'Lakewood', 'Riverside',
 'Oak Park', 'Maple Heights', 'Cedar Grove', 'Pine Valley', 'Elm District',
 ];

 const testimonials = [
 { name: 'William Johnson', role: 'Homeowner', text: 'ArcticAir replaced our 20-year-old AC with a high-efficiency heat pump. Our energy bills dropped 40% and the house has never been more comfortable. Best investment we\'ve made.', rating: 5 },
 { name: 'Sandra Lee', role: 'Office Manager', text: 'They maintain HVAC systems across all 5 of our office locations. Their preventive maintenance has virtually eliminated emergency breakdowns. True professionals.', rating: 5 },
 { name: 'Robert Garcia', role: 'Homeowner', text: 'Our furnace died at 11 PM on the coldest night of the year. ArcticAir had a tech there within an hour with a space heater to keep us warm while they diagnosed the issue.', rating: 5 },
 ];

 return (
 <div className="min-h-screen">
 {/* Emergency Banner */}
 {bannerVisible && (
 <div className="emergency-banner" role="alert">
 <div className="emergency-banner-inner">
 <div className="emergency-pulse-dot" aria-hidden="true" />
 <span className="emergency-text">
 24/7 Emergency Service &mdash; Call Now:{' '}
 <a href="tel:+91 98765 43210" className="emergency-phone">+91 98765 43210</a>
 </span>
 <button
 className="emergency-close min-h-[44px] min-w-[44px] flex items-center justify-center"
 onClick={() => setBannerVisible(false)}
 aria-label="Close emergency banner"
 >
 
 </button>
 </div>
 </div>
 )}

 {/* Skip Link */}
 <a
 href="#main-content"
 className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] font-bold"
 >
 Skip to main content
 </a>

 {/* Navigation */}
 <header>
 <nav
 role="navigation"
 aria-label="Main navigation"
 className={`fixed left-0 right-0 z-50 glass ${bannerVisible ? 'top-[42px]' : 'top-0'}`}

 >
 <div className=" section-container">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow" aria-hidden="true">
 
 </div>
 <div>
 <button onClick={() => scrollToSection('hero')} className="text-lg font-bold text-white nav-logo-text">
 ArcticAir
 </button>
 <p className="text-[9px] text-neon tracking-widest">HVAC</p>
 </div>
 </div>

 <div className="hidden md:flex items-center gap-8">
 {['Services', 'Plans', 'About', 'Reviews', 'Contact'].map(item => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 aria-label={`Navigate to ${item} section`}
 className="text-sm text-white-soft hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded px-3 py-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
 >
 {item}
 </button>
 ))}
 <a
 href="tel:+91 98765 43210"
 className="bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2"
 >
 Free Estimate
 </a>
 </div>

 <button
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded min-h-[48px] min-w-[48px] flex items-center justify-center"
 onClick={() => setMenuOpen(!menuOpen)}
 >
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </div>

 {menuOpen && (
 <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-4">
 {['Services', 'Plans', 'About', 'Reviews', 'Contact'].map(item => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="block w-full text-left text-white-soft hover:text-neon py-3 min-h-[44px]"
 >
 {item}
 </button>
 ))}
 <a
 href="tel:+91 98765 43210"
 className="block w-full text-center bg-neon text-dark px-6 py-4 rounded-full font-bold min-h-[48px] flex items-center justify-center"
 >
 Free Estimate
 </a>
 </div>
 )}
 </nav>
 </header>

 <main id="main-content" role="main">
 {/* Hero Section */}
 <section id="hero" aria-labelledby="hero-heading" className="pt-32 pb-16 relative overflow-hidden grid-bg">
 <div className="absolute inset-0" aria-hidden="true">
 <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]" />
 <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]" />
 </div>
 <div className="relative section-container">
 <div>
 <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up">
 COMFORT SPECIALISTS SINCE 2004
 </p>
 <h2
 id="hero-heading"
 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1"
 >
 Year-Round<br />
 <span className="text-neon neon-text">Perfect Comfort.</span>
 </h2>
 <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2">
 Expert HVAC installation, repair, and maintenance. Energy-efficient systems that keep you comfortable while saving money.
 </p>
 <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3">
 <a
 href="#contact"
 className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 min-h-[48px] inline-flex items-center"
 >
 Free Estimate
 </a>
 <a
 href="tel:+91 98765 43210"
 className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 min-h-[48px] inline-flex items-center"
 >
 Emergency: 24/7
 </a>
 </div>
 <div className="flex items-center gap-6 md:gap-8">
 {[
 { num: '15K+', label: 'Systems Installed' },
 { num: '40%', label: 'Energy Savings' },
 { num: '24/7', label: 'Emergency' },
 ].map((s, i) => (
 <div key={i} className="text-center md:text-left">
 <div className="text-xl md:text-2xl font-bold text-neon">{s.num}</div>
 <div className="text-xs md:text-sm text-slate-text">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 <div className="glass rounded-3xl p-8 neon-glow">
 <img
 src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
 alt="HVAC technician servicing an air conditioning unit"
 className="w-full rounded-2xl opacity-90"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Services Section */}
 <section id="services" aria-labelledby="services-heading" className="py-16 md:py-20 relative">
 <div className=" section-container">
 <div className="text-center mb-16">
 <p className="text-neon text-sm font-bold tracking-widest mb-4">WHAT WE DO</p>
 <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">
 HVAC Services
 </h2>
 <p className="text-slate-text max-w-2xl mx-auto">
 Complete heating, cooling, and air quality solutions for residential and commercial properties.
 </p>
 </div>
 <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 gap-6">
 {services.map((s, i) => (
 <article
 key={i}
 className="glass rounded-2xl p-6 hover:border-neon/30 transition-all hover:scale-105 group cursor-pointer"
 role="button"
 tabIndex={0}
 aria-label={`${s.title} - ${s.price}`}
 >
 <div className="text-3xl md:text-4xl mb-4" aria-hidden="true">{s.icon}</div>
 <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
 {s.title}
 </h3>
 <p className="text-white-soft text-sm mb-3 leading-relaxed">{s.desc}</p>
 <div className="text-neon font-bold text-sm">{s.price}</div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Maintenance Plans Section */}
 <section id="plans" aria-labelledby="plans-heading" className="plans-section">
 <div className="section-container">
 <div className="section-header">
 <p className="badge">MAINTENANCE PLANS</p>
 <h2 id="plans-heading" className="section-title">Protect Your Investment</h2>
 <p className="section-subtitle">
 Regular maintenance extends system life, improves efficiency, and prevents costly breakdowns. Choose the plan that fits your needs.
 </p>
 </div>
 <div className="plans-grid">
 {plans.map((plan, i) => (
 <div key={i} className={`plan-card ${plan.highlighted ? 'plan-highlighted' : ''}`}>
 {plan.highlighted && <div className="plan-popular-badge">Most Popular</div>}
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
 <span className="plan-check"></span>
 <span>{f}</span>
 </li>
 ))}
 </ul>
 <a
 href="#contact"
 className={`plan-btn ${plan.highlighted ? 'plan-btn-primary' : 'plan-btn-outline'} min-h-[48px] flex items-center justify-center`}
 >
 Get Started
 </a>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* About Section */}
 <section id="about" aria-labelledby="about-heading" className="py-16 md:py-20 relative">
 <div className="absolute inset-0" aria-hidden="true">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]" />
 </div>
 <div className="relative section-container">
 <div className="glass rounded-3xl p-8">
 <img
 src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
 alt="ArcticAir HVAC certified technicians"
 className="w-full rounded-2xl opacity-90"
 />
 </div>
 <div>
 <p className="text-neon text-sm font-bold tracking-widest mb-4">WHY ARCTICAIR</p>
 <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">
 15,000+ Systems Installed
 </h2>
 <p className="text-slate-text mb-8">
 ArcticAir HVAC has been keeping homes and businesses comfortable since 2004. Our NATE-certified
 technicians are factory-trained on all major brands and committed to energy-efficient solutions.
 </p>
 <div className="grid grid-cols-2 gap-4 mb-8">
 {[
 { icon: '', text: 'NATE Certified' },
 { icon: '', text: 'Energy Star Partner' },
 { icon: '', text: 'All Brands Serviced' },
 { icon: '', text: 'Financing Available' },
 { icon: '', text: '10-Year Warranty' },
 { icon: '', text: '24/7 Emergency' },
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2">
 <span className="text-neon" aria-hidden="true">{item.icon}</span>
 <span className="text-sm text-white-soft">{item.text}</span>
 </div>
 ))}
 </div>
 {/* Financing CTA */}
 <div className="glass rounded-xl p-6 border-neon/20">
 <h3 className="text-lg font-bold text-white mb-2">Flexible Financing</h3>
 <p className="text-slate-text text-sm mb-4">
 0% APR for 12 months on new installations. No credit check options available. Ask about our payment plans.
 </p>
 <a
 href="#contact"
 className="inline-block bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors"
 >
 Apply Today
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Service Area Section */}
 <section aria-labelledby="areas-heading" className="areas-section">
 <div className="section-container">
 <div className="section-header">
 <p className="badge">SERVICE AREA</p>
 <h2 id="areas-heading" className="section-title">Proudly Serving the Metro Region</h2>
 <p className="section-subtitle">
 Our fleet of fully-stocked service vehicles covers the entire metropolitan area. Same-day service available in most locations.
 </p>
 </div>
 <div className="areas-grid">
 {serviceAreas.map((area, i) => (
 <span key={i} className="area-tag">{area}</span>
 ))}
 </div>
 <p className="areas-note">
 Don&apos;t see your area? <a href="tel:+91 98765 43210" className="text-neon hover:underline">Call us</a> — we likely serve your neighborhood too.
 </p>
 </div>
 </section>

 {/* Reviews Section */}
 <section id="reviews" aria-labelledby="reviews-heading" className="py-16 md:py-20 relative">
 <div className=" section-container">
 <div className="text-center mb-16">
 <p className="text-neon text-sm font-bold tracking-widest mb-4">TESTIMONIALS</p>
 <h2 id="reviews-heading" className="text-4xl font-bold text-white mb-4">
 What Our Clients Say
 </h2>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {testimonials.map((t, i) => (
 <article key={i} className="glass rounded-2xl p-6">
 <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
 {[...Array(t.rating)].map((_, j) => (
 <span key={j} className="text-amber" aria-hidden="true"></span>
 ))}
 </div>
 <p className="text-white-soft mb-6 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
 <div>
 <p className="font-bold text-white">{t.name}</p>
 <p className="text-sm text-slate-text">{t.role}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20 relative">
 <div className=" section-container">
 <div className="text-center mb-16">
 <p className="text-neon text-sm font-bold tracking-widest mb-4">GET COMFORTABLE</p>
 <h2 id="contact-heading" className="text-4xl font-bold text-white mb-4">
 Request Your Free Estimate
 </h2>
 <p className="text-slate-text max-w-2xl mx-auto">
 Tell us about your heating and cooling needs. We&apos;ll provide a detailed estimate with energy-saving recommendations.
 </p>
 </div>

 {/* Contact Info Cards */}
 <div className="contact-info-cards">
 <div className="contact-info-card">
 <div className="contact-info-icon"></div>
 <p className="contact-info-label">24/7 Service Line</p>
 <a href="tel:+91 98765 43210" className="contact-info-value min-h-[44px] inline-flex items-center">+91 98765 43210</a>
 <p className="contact-info-note">Emergency calls answered anytime</p>
 </div>
 <div className="contact-info-card">
 <div className="contact-info-icon"></div>
 <p className="contact-info-label">Email Us</p>
 <a href="mailto:[EMAIL]" className="contact-info-value contact-info-value-sm min-h-[44px] inline-flex items-center">
 [EMAIL]
 </a>
 <p className="contact-info-note">Response within 2 hours</p>
 </div>
 <div className="contact-info-card">
 <div className="contact-info-icon"></div>
 <p className="contact-info-label">Business Hours</p>
 <div className="contact-info-value-sm">
 <p>Mon-Fri: 7AM - 8PM</p>
 <p>Sat: 8AM - 5PM</p>
 <p>Sun: 9AM - 3PM</p>
 </div>
 <p className="contact-info-note">24/7 Emergency Service</p>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-12">
 {/* Contact Form with Web3Forms */}
 <div className="glass rounded-2xl p-8">
 {formSubmitted ? (
 <div className="form-success">
 <div className="form-success-icon"></div>
 <h3 className="form-success-title">Thank You!</h3>
 <p className="form-success-text">
 We&apos;ve received your estimate request. A comfort specialist will contact you within 1 business hour.
 </p>
 <button
 onClick={() => setFormSubmitted(false)}
 className="btn-outline"
 >
 Submit Another Request
 </button>
 </div>
 ) : (
 <form
 action="https://api.web3forms.com/submit"
 method="POST"
 className="estimate-form"
 onSubmit={() => setFormSubmitted(true)}
 >
 <input type="hidden" name="access_key" value="[WEB3FORMS_KEY]" />
 <input type="hidden" name="subject" value="New HVAC Estimate Request from ArcticAir Website" />
 <input type="checkbox" name="botcheck" className="hidden" />

 <div className="form-row">
 <div className="form-group">
 <label htmlFor="name" className="form-label">Your Name</label>
 <input
 id="name"
 name="name"
 type="text"
 required
 placeholder="John Smith"
 autoComplete="name"
 aria-required="true"
 className="form-input"
 />
 </div>
 <div className="form-group">
 <label htmlFor="email" className="form-label">Email</label>
 <input
 id="email"
 name="email"
 type="email"
 required
 placeholder="john@example.com"
 autoComplete="email"
 aria-required="true"
 className="form-input"
 />
 </div>
 </div>

 <div className="form-row">
 <div className="form-group">
 <label htmlFor="phone" className="form-label">Phone</label>
 <input
 id="phone"
 name="phone"
 type="tel"
 required
 placeholder="+91 98765 43210"
 autoComplete="tel"
 aria-required="true"
 className="form-input"
 />
 </div>
 <div className="form-group">
 <label htmlFor="service-type" className="form-label">Service Needed</label>
 <select id="service-type" name="service" className="form-input" aria-label="Service type">
 <option value="">Select service</option>
 <option value="ac-install">AC Installation</option>
 <option value="heating">Heating System</option>
 <option value="repair">Repair Service</option>
 <option value="maintenance">Maintenance Plan</option>
 <option value="air-quality">Indoor Air Quality</option>
 <option value="ductwork">Ductwork Services</option>
 </select>
 </div>
 </div>

 <div className="form-group">
 <label htmlFor="details" className="form-label">Describe Your Needs</label>
 <textarea
 id="details"
 name="message"
 rows={4}
 placeholder="Tell us about your HVAC needs, property type, and any current issues..."
 aria-label="Describe your HVAC needs"
 className="form-input form-textarea"
 />
 </div>

 <button type="submit" className="btn-primary form-submit min-h-[48px]">
 Get Free Estimate
 </button>
 <p className="form-disclaimer">
 No obligation. We respect your privacy and will never share your information.
 </p>
 </form>
 )}
 </div>

 {/* Google Maps Embed */}
 <div className="glass rounded-2xl overflow-hidden">
 <iframe
 src="[WEBSITE]/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629814256789!5m2!1sen!2sus"
 width="100%"
 height="100%"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 title="ArcticAir HVAC service area map"
 />
 </div>
 </div>
 </div>
 </section>
 </main>

 {/* WhatsApp Floating Button */}
 <a
 href="https://wa.me/+91 98765 43210?text=Hi%20ArcticAir%2C%20I%27d%20like%20to%20request%20an%20HVAC%20estimate."
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Chat with us on WhatsApp"
 className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
 >
 <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
 </svg>
 </a>

 {/* Footer */}
 <footer role="contentinfo" className="site-footer">
 <div className="footer-inner">
 <div className="footer-grid">
 {/* Brand Column */}
 <div>
 <div className="footer-brand">ArcticAir HVAC</div>
 <p className="footer-about">
 Keeping homes and businesses comfortable since 2004. NATE-certified technicians,
 Energy Star partner, and your trusted HVAC experts available 24/7.
 </p>
 <div className="flex gap-4 mt-4">
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-text hover:text-neon transition-colors">
 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
 </a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-text hover:text-neon transition-colors">
 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
 </a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-text hover:text-neon transition-colors">
 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
 </a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-text hover:text-neon transition-colors">
 <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
 </a>
 </div>
 </div>

 {/* Services Column */}
 <div>
 <h3 className="footer-heading">Services</h3>
 <ul className="footer-list">
 <li><button onClick={() => scrollToSection('services')} className="footer-link py-1 min-h-[44px] flex items-center">AC Installation</button></li>
 <li><button onClick={() => scrollToSection('services')} className="footer-link py-1 min-h-[44px] flex items-center">Heating Systems</button></li>
 <li><button onClick={() => scrollToSection('services')} className="footer-link py-1 min-h-[44px] flex items-center">Repair & Service</button></li>
 <li><button onClick={() => scrollToSection('services')} className="footer-link py-1 min-h-[44px] flex items-center">Duct Cleaning</button></li>
 <li><button onClick={() => scrollToSection('services')} className="footer-link py-1 min-h-[44px] flex items-center">Air Quality</button></li>
 </ul>
 </div>

 {/* Company Column */}
 <div>
 <h3 className="footer-heading">Company</h3>
 <ul className="footer-list">
 <li><button onClick={() => scrollToSection('about')} className="footer-link py-1 min-h-[44px] flex items-center">About Us</button></li>
 <li><button onClick={() => scrollToSection('plans')} className="footer-link py-1 min-h-[44px] flex items-center">Maintenance Plans</button></li>
 <li><button onClick={() => scrollToSection('reviews')} className="footer-link py-1 min-h-[44px] flex items-center">Reviews</button></li>
 <li><button onClick={() => scrollToSection('contact')} className="footer-link py-1 min-h-[44px] flex items-center">Contact</button></li>
 <li><a href="tel:+91 98765 43210" className="footer-link py-1 min-h-[44px] flex items-center">Emergency Service</a></li>
 </ul>
 </div>

 {/* Contact Column */}
 <div>
 <h3 className="footer-heading">Contact</h3>
 <ul className="footer-list">
 <li>
 <a href="tel:+91 98765 43210" className="footer-link min-h-[44px] inline-flex items-center">
 +91 98765 43210
 </a>
 </li>
 <li>
 <a href="mailto:[EMAIL]" className="footer-link min-h-[44px] inline-flex items-center">
 [EMAIL]
 </a>
 </li>
 <li className="text-slate-text">
 Entire Metro Region
 </li>
 <li className="text-slate-text">
 Mon-Fri: 7AM - 8PM
 </li>
 <li className="text-slate-text">
 Sat: 8AM - 5PM | Sun: 9AM - 3PM
 </li>
 <li className="text-neon font-bold">
 24/7 Emergency Service
 </li>
 <li>
 <a href="/privacy-policy" className="footer-link py-1 min-h-[44px] flex items-center">Privacy Policy</a>
 </li>
 <li>
 <a href="/terms-of-service" className="footer-link py-1 min-h-[44px] flex items-center">Terms of Service</a>
 </li>
 </ul>
 </div>
 </div>

 <div className="footer-bottom">
 <p>NATE Certified | Energy Star Partner | ACCA Member</p>
 <p className="mt-2">© {new Date().getFullYear()} ArcticAir HVAC. All rights reserved. License #HV-2004-7789</p>
<div className="text-center py-3 text-xs opacity-50 hover:opacity-80 transition-opacity"><span>Designed by </span><a href="https://adeshpreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Adeshpreet Singh</a></div>
 </div>
 </div>
 </footer>
 </div>
 );
}
