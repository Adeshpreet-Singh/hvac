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
    { title: 'Heating Systems', desc: 'Furnace repair, heat pumps, and installation', icon: '\uD83D\uDD25', temp: 'Warm' },
    { title: 'Cooling Systems', desc: 'AC repair, replacement, and maintenance', icon: '\u2744\uFE0F', temp: 'Cool' },
    { title: 'Ventilation', desc: 'Air quality, duct cleaning, and airflow', icon: '\uD83D\uDCA8', temp: 'Fresh' },
    { title: 'Maintenance Plans', desc: 'Annual tune-ups and priority service', icon: '\uD83D\uDD27', temp: 'Save' },
  ];

  return (
    <div className="bg-sky-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83C\uDF21\uFE0F</div>
              <div><h1 className="text-lg font-bold text-gray-900">ClimatePro</h1><p className="text-[9px] text-blue-600 tracking-wider">HVAC SOLUTIONS</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Why Us','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ','-'))} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Schedule HVAC service" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Schedule Service</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"/>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 text-sm font-bold tracking-widest mb-4">COMFORT ALL YEAR ROUND</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Perfect<br/><span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Climate</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Licensed HVAC technicians keeping your home comfortable in every season. 24/7 emergency service with upfront pricing.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Schedule HVAC service today" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Schedule Service</button>
                <button aria-label="Call for emergency HVAC repair" className="border-2 border-orange-500 text-orange-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-orange-500 focus-visible:outline-offset-2">Emergency: 24/7</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'20+',label:'Years Experience'},{num:'10K+',label:'Homes Served'},{num:'4.9',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-blue-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" alt="Modern HVAC thermostat showing comfortable temperature" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">WHAT WE DO</p><h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">Complete HVAC Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-sky-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="flex items-center justify-between mb-4"><div className="text-4xl" aria-hidden="true">{s.icon}</div><span className={`text-xs font-bold px-3 py-1 rounded-full ${s.temp==='Warm'?'bg-orange-100 text-orange-700':s.temp==='Cool'?'bg-blue-100 text-blue-700':s.temp==='Fresh'?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-700'}`}>{s.temp}</span></div><h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm">{s.desc}</p></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-blue-600 text-sm font-bold tracking-widest mb-4">GET COMFORTABLE</p><h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-6">Need HVAC Service?</h2><p className="text-gray-600 mb-8">Whether it&#39;s too hot, too cold, or just not right, we&#39;ll fix it fast.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Chris Climate" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label><select id="service-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors"><option value="">Select service</option><option value="heating">Heating Repair</option><option value="cooling">AC Repair</option><option value="maintenance">Maintenance Plan</option><option value="emergency">Emergency Service</option></select></div>
                <button type="submit" aria-label="Request HVAC service" className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-orange-600 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2">Request Service</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-gray-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83C\uDF21\uFE0F</div><span className="text-white font-bold">ClimatePro HVAC</span></div><p className="text-gray-400 text-sm">Licensed & Insured | 24/7 Emergency</p></div></footer>
    </div>
  );
}