'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0c1929] text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <div className="bg-sky-600 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency HVAC — Call Now</div>
      <nav className="fixed top-8 left-0 right-0 z-50 bg-[#0c1929]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-sky-400">ClimateRight</h1><p className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">HVAC — Dallas</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-slate-400 hover:text-sky-400">Services</button>
            <button onClick={() => scrollTo('contact')} className="bg-sky-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-sky-500">Schedule Service</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-16">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-400 text-sm tracking-[0.3em] uppercase mb-4">Licensed & Insured — Est. 2009</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6">Perfect climate,<br />every <span className="text-sky-400">season.</span></h2>
              <p className="text-xl text-slate-400 max-w-md mb-8">Expert heating, cooling, and indoor air quality services. Licensed, insured, and available 24/7.</p>
              <div className="flex gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-sky-600 text-white px-8 py-4 text-lg rounded-full hover:bg-sky-500">Schedule Service</button>
                <a href="tel:(555) 901-2346" className="border-2 border-slate-600 text-slate-300 px-8 py-4 text-lg rounded-full hover:border-sky-500">Emergency Call</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-sky-400">24/7</div><div className="text-xs text-slate-500 uppercase">Emergency</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-sky-400">90min</div><div className="text-xs text-slate-500 uppercase">Response</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-sky-400">15K+</div><div className="text-xs text-slate-500 uppercase">Systems</div></div>
              <div className="bg-slate-800/50 rounded-xl p-6"><div className="text-3xl font-bold text-sky-400">$0</div><div className="text-xs text-slate-500 uppercase">Estimates</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="reveal py-24 bg-slate-900/30" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-bold">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AC Repair', desc: 'Fast diagnosis and repair for all AC brands.', icon: '❄️', price: 'From $89' },
                { name: 'Heating', desc: 'Furnace and heat pump service and installation.', icon: '🔥', price: 'From $99' },
                { name: 'New Installation', desc: 'High-efficiency system installation with warranty.', icon: '⚙️', price: 'From $3,500' },
                { name: 'Ductwork', desc: 'Duct cleaning, sealing, and new installation.', icon: '🌀', price: 'From $299' },
                { name: 'Air Quality', desc: 'Filtration, purification, and humidity control.', icon: '💨', price: 'From $199' },
                { name: 'Maintenance', desc: 'Seasonal tune-up plans to prevent breakdowns.', icon: '🔧', price: '$199/year' },
              ].map((s, i) => (
                <div key={i} className="border border-slate-800 rounded-lg p-8 hover:border-sky-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <p className="text-slate-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-sky-400 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8"><div className="text-3xl mb-3">📞</div><div className="font-bold">Emergency</div><a href="tel:(555) 901-2346" className="text-sky-400 text-xl font-bold hover:underline">(555) 901-2346</a></div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8"><div className="text-3xl mb-3">📍</div><div className="font-bold">Service Area</div><p className="text-slate-400">Metro Dallas, TX<br />30-mile radius</p></div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-8"><div className="text-3xl mb-3">💰</div><div className="font-bold">Financing</div><p className="text-slate-400">0% for 60 months<br />on new systems</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-slate-600 text-sm">© {new Date().getFullYear()} ClimateRight HVAC. Dallas, TX. Licensed & Insured.</div></footer>
    </div>
  );
}
