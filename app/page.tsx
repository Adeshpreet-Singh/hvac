'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'AC Installation', desc: 'High-efficiency central air, ductless mini-splits, and heat pump systems. Energy Star certified units.', price: 'From $3,499', icon: '❄️' },
    { title: 'Heating Systems', desc: 'Furnace installation, boiler services, and radiant heating for year-round comfort.', price: 'From $2,999', icon: '🔥' },
    { title: 'Repair & Service', desc: 'Fast diagnostics and repairs for all brands. Same-day service for no-heat/no-cool emergencies.', price: 'From $89', icon: '🔧' },
    { title: 'Maintenance Plans', desc: 'Seasonal tune-ups, filter changes, and preventive care to extend system life and efficiency.', price: '$19/mo', icon: '✅' },
    { title: 'Indoor Air Quality', desc: 'Air purifiers, humidifiers, UV lights, and ventilation systems for healthier indoor air.', price: 'From $299', icon: '🌬️' },
    { title: 'Ductwork Services', desc: 'Duct cleaning, sealing, and new installations for optimal airflow and efficiency.', price: 'From $399', icon: '🏗️' },
  ];

  const testimonials = [
    { name: 'William Johnson', role: 'Homeowner', text: 'ArcticAir replaced our 20-year-old AC with a high-efficiency heat pump. Our energy bills dropped 40% and the house has never been more comfortable. Best investment we&apos;ve made.', rating: 5 },
    { name: 'Sandra Lee', role: 'Office Manager', text: 'They maintain HVAC systems across all 5 of our office locations. Their preventive maintenance has virtually eliminated emergency breakdowns. True professionals.', rating: 5 },
    { name: 'Robert Garcia', role: 'Homeowner', text: 'Our furnace died at 11 PM on the coldest night of the year. ArcticAir had a tech there within an hour with a space heater to keep us warm while they diagnosed the issue.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow" aria-hidden="true">❄️</div>
              <div><h1 className="text-lg font-bold text-white">ArcticAir</h1><p className="text-[9px] text-neon tracking-widest">HVAC</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-text hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free HVAC estimate" className="bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Estimate</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-4">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left text-slate-text hover:text-neon py-2">{item}</button>))}
              <button className="w-full bg-neon text-dark px-6 py-3 rounded-full font-bold">Free Estimate</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden grid-bg">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]"/>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up">COMFORT SPECIALISTS SINCE 2004</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1">Year-Round<br/><span className="text-neon neon-text">Perfect Comfort.</span></h2>
              <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2">Expert HVAC installation, repair, and maintenance. Energy-efficient systems that keep you comfortable while saving money.</p>
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3">
                <button aria-label="Get your free HVAC estimate" className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Estimate</button>
                <button aria-label="Call for emergency HVAC service" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Emergency: 24/7</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'15K+',label:'Systems Installed'},{num:'40%',label:'Energy Savings'},{num:'24/7',label:'Emergency'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-neon">{s.num}</div><div className="text-sm text-slate-text">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8 neon-glow">
                <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" alt="HVAC technician servicing an air conditioning unit" className="w-full rounded-2xl opacity-90"/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHAT WE DO</p>
              <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">HVAC Services</h2>
              <p className="text-slate-text max-w-2xl mx-auto">Complete heating, cooling, and air quality solutions for residential and commercial properties.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s,i) => (
                <article key={i} className="glass rounded-2xl p-6 hover:border-neon/30 transition-all hover:scale-105 group">
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{s.title}</h3>
                  <p className="text-slate-text text-sm mb-3">{s.desc}</p>
                  <div className="text-neon font-bold text-sm">{s.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-24 relative">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl p-8">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="ArcticAir HVAC certified technicians" className="w-full rounded-2xl opacity-90"/>
            </div>
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHY ARCTICAIR</p>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">15,000+ Systems Installed</h2>
              <p className="text-slate-text mb-8">ArcticAir HVAC has been keeping homes and businesses comfortable since 2004. Our NATE-certified technicians are factory-trained on all major brands and committed to energy-efficient solutions.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'NATE Certified' },
                  { icon: '✓', text: 'Energy Star Partner' },
                  { icon: '✓', text: 'All Brands Serviced' },
                  { icon: '✓', text: 'Financing Available' },
                  { icon: '✓', text: '10-Year Warranty' },
                  { icon: '✓', text: '24/7 Emergency' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-neon" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm text-white-soft">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">TESTIMONIALS</p>
              <h2 id="reviews-heading" className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article key={i} className="glass rounded-2xl p-6">
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-white-soft mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-text">{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">GET COMFORTABLE</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request Your Free Estimate</h2>
              <p className="text-slate-text mb-8">Tell us about your heating and cooling needs. We&apos;ll provide a detailed estimate with energy-saving recommendations.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📞</div>
                  <div><p className="text-sm text-slate-text">24/7 Service Line</p><p className="text-white font-bold">(555) 789-COOL</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📍</div>
                  <div><p className="text-sm text-slate-text">Service Area</p><p className="text-white font-bold">Entire Metro Region</p></div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <form noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white-soft mb-2">Your Name</label>
                  <input id="name" type="text" aria-required="true" placeholder="John Smith" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white-soft mb-2">Phone</label>
                  <input id="phone" type="tel" aria-required="true" placeholder="(555) 000-0000" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-white-soft mb-2">Service Needed</label>
                  <select id="service-type" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors">
                    <option value="">Select service</option>
                    <option value="ac-install">AC Installation</option>
                    <option value="heating">Heating System</option>
                    <option value="repair">Repair Service</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="air-quality">Indoor Air Quality</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-white-soft mb-2">Describe Your Needs</label>
                  <textarea id="details" rows={3} placeholder="Tell us about your HVAC needs..." className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors resize-none"/>
                </div>
                <button type="submit" aria-label="Request your free HVAC estimate" className="w-full bg-neon text-dark py-4 rounded-xl font-bold hover:bg-neon-dim transition-all hover:scale-[1.02] neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Get Free Estimate</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center text-neon" aria-hidden="true">❄️</div>
              <span className="text-white font-bold">ArcticAir HVAC</span>
            </div>
            <p className="text-slate-text text-sm">NATE Certified | Energy Star Partner | ACCA Member</p>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-border text-center">
            <p className="text-slate-text/60 text-xs">© 2024 ArcticAir HVAC. All rights reserved. License #HV-2004-7789</p>
          </div>
        </div>
      </footer>
    </div>
  );
}