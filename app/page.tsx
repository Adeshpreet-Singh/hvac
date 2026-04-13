'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    { name: 'AC Installation', icon: '❄️', price: 'From $3,200', desc: 'High-efficiency central air conditioning systems sized and installed by NATE-certified technicians. We carry top brands including Carrier, Trane, Lennox, and Daikin with full manufacturer warranties up to 12 years. Every installation includes load calculations, ductwork evaluation, and a complete post-install performance test to ensure your new system runs at peak SEER2 efficiency from day one.' },
    { name: 'AC Repair', icon: '🔧', price: 'From $89', desc: 'Fast, accurate diagnosis and repair of all air conditioning makes and models. Our trucks carry over 500 OEM parts so most repairs are completed in a single visit. We service compressors, evaporator coils, refrigerant leaks, electrical faults, thermostat issues, and condensate drain problems. Emergency AC repair is available 24 hours a day, 7 days a week, including holidays — because a Texas summer waits for nobody.' },
    { name: 'Furnace Installation', icon: '🔥', price: 'From $2,800', desc: 'Expert gas and electric furnace installation for new construction and replacements. We help you choose the right AFUE rating for your budget and home size, from standard 80% models to ultra-high-efficiency 98% condensing units. Every install includes gas line inspection, carbon monoxide testing, airflow balancing, and a comprehensive safety check. Financing options available with 0% APR for qualified buyers.' },
    { name: 'Furnace Repair', icon: '🛠️', price: 'From $99', desc: 'Complete heating system repair services for gas furnaces, electric furnaces, and hybrid systems. Common repairs include ignitor replacement, blower motor service, heat exchanger inspection, flame sensor cleaning, and control board diagnostics. We stock parts for all major brands and provide honest, upfront pricing before any work begins. If your furnace is blowing cold air, cycling erratically, or making unusual noises, call us for same-day service.' },
    { name: 'Heat Pumps', icon: '♻️', price: 'From $4,500', desc: 'Installation, repair, and maintenance of air-source and ground-source heat pump systems. Heat pumps provide both heating and cooling in a single, highly efficient unit — reducing energy bills by up to 50% compared to traditional systems. We install variable-speed inverter models that maintain consistent comfort year-round. Ask about federal tax credits and utility rebates that can save you thousands on a new heat pump installation.' },
    { name: 'Duct Cleaning', icon: '🌀', price: 'From $299', desc: 'Professional air duct cleaning removes dust, allergens, mold spores, pet dander, and debris from your entire ductwork system. Our truck-mounted HEPA vacuum equipment and agitation tools clean every branch and trunk line, improving airflow and indoor air quality. Recommended every 3-5 years or after renovations. Includes before-and-after photo documentation and a full system inspection report.' },
    { name: 'Indoor Air Quality', icon: '💨', price: 'From $199', desc: 'Comprehensive indoor air quality solutions including whole-home air purifiers, UV germicidal lights, HEPA filtration systems, humidifiers, dehumidifiers, and ERV/HRV ventilation systems. We test your indoor air for particulates, VOCs, humidity levels, and carbon dioxide to recommend the right solution. Ideal for allergy sufferers, homes with pets, and families concerned about airborne pathogens and pollutants.' },
    { name: 'Maintenance Plans', icon: '📋', price: 'From $15/mo', desc: 'Preventive maintenance plans keep your HVAC system running efficiently, extend equipment life, and help you avoid costly emergency repairs. Members receive priority scheduling, discounted repairs, and no overtime charges. We perform a comprehensive 21-point inspection and tune-up during each visit, including refrigerant checks, electrical testing, coil cleaning, and safety controls verification. Enroll today and save.' },
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$15',
      period: '/mo',
      desc: 'Essential seasonal tune-ups for budget-conscious homeowners.',
      features: ['1 spring AC tune-up', '1 fall heating tune-up', '21-point system inspection', '10% discount on repairs', 'Priority scheduling', 'No overtime charges'],
      highlight: false,
    },
    {
      name: 'Comfort',
      price: '$25',
      period: '/mo',
      desc: 'Our most popular plan — full coverage for year-round peace of mind.',
      features: ['2 seasonal tune-ups (spring & fall)', '21-point system inspection each visit', '15% discount on all repairs', 'Priority same-day scheduling', 'No overtime or after-hours fees', 'Free filter replacements (standard sizes)', 'Annual ductwork visual inspection'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$39',
      period: '/mo',
      desc: 'Maximum protection, maximum savings — the ultimate worry-free plan.',
      features: ['2 seasonal tune-ups (spring & fall)', '21-point system inspection each visit', '20% discount on all repairs', 'VIP same-day emergency service', 'No overtime or after-hours fees', 'Free filter replacements (all sizes)', 'Annual ductwork inspection', 'Indoor air quality assessment', '1-year extended labor warranty', 'Free refrigerant top-offs (up to 2 lbs)'],
      highlight: false,
    },
  ];

  const whyUs = [
    { title: 'Licensed & Insured', icon: '🛡️', text: 'Fully licensed HVAC contractors in the state of Texas with comprehensive liability insurance and workers\' compensation coverage. License #TACLA-48291.' },
    { title: 'NATE Certified', icon: '🏅', text: 'Our technicians hold NATE (North American Technician Excellence) certification — the HVAC industry\'s most rigorous and respected credential, requiring ongoing continuing education.' },
    { title: 'Upfront Pricing', icon: '💲', text: 'We quote the exact price before starting any work. No hidden fees, no surprise charges, no bait-and-switch. The price we quote is the price you pay — guaranteed.' },
    { title: 'Satisfaction Guarantee', icon: '✅', text: 'If you\'re not completely satisfied with our work, we\'ll make it right at no additional cost. Every repair comes with a 1-year parts and labor warranty, and every installation is backed by our 100% comfort guarantee.' },
  ];

  const tips = [
    { season: 'Spring', icon: '🌸', title: 'Schedule Your AC Tune-Up', text: 'Book your spring AC maintenance before the first heat wave. A pre-season tune-up ensures your system is clean, charged, and ready to handle summer heat efficiently. Clean coils and proper refrigerant levels can improve efficiency by 15-25%.' },
    { season: 'Summer', icon: '☀️', title: 'Optimize Your Thermostat', text: 'Set your thermostat to 78°F when home and 85°F when away. Each degree below 78°F increases energy use by 3-5%. A programmable or smart thermostat can save up to $180 per year on cooling costs.' },
    { season: 'Fall', icon: '🍂', title: 'Inspect Your Heating System', text: 'Run your furnace for 15-20 minutes before cold weather arrives. Check for unusual smells, noises, or uneven heating. Replace your air filter and test your carbon monoxide detectors for safety.' },
    { season: 'Winter', icon: '❄️', title: 'Protect Pipes & Efficiency', text: 'Set your thermostat no lower than 55°F to prevent frozen pipes. Seal air leaks around windows and doors with weatherstripping. Reverse your ceiling fans to clockwise to push warm air down from the ceiling.' },
  ];

  const testimonials = [
    { name: 'Jennifer M.', location: 'Plano, TX', rating: 5, text: 'ArcticAir replaced our 20-year-old AC system in one day. The crew was professional, clean, and explained every step. Our energy bill dropped 40% the first month. Couldn\'t be happier with the service and the new Carrier unit they installed.' },
    { name: 'Robert & Linda K.', location: 'Richardson, TX', rating: 5, text: 'We called at 10 PM on a Saturday night in July when our AC died. A technician arrived within 90 minutes and had us cooling again by midnight. They didn\'t charge extra for the weekend emergency call. ArcticAir is the only HVAC company we\'ll ever use.' },
    { name: 'Marcus T.', location: 'Frisco, TX', rating: 5, text: 'I\'ve been on their Comfort maintenance plan for three years. They show up on time, do thorough inspections, and caught a failing capacitor before it could damage our compressor. Saved us a $2,000 repair. Honest, reliable, and fairly priced.' },
  ];

  const faqs = [
    {
      q: 'How often should I have my HVAC system serviced?',
      a: 'We recommend professional maintenance twice per year — once in spring for your cooling system and once in fall for your heating system. Regular maintenance extends equipment life by 5-7 years on average, maintains manufacturer warranty compliance, and can reduce energy costs by up to 15%. Our maintenance plans include both seasonal visits at a discounted rate.',
    },
    {
      q: 'How long does an air conditioning system typically last?',
      a: 'With proper maintenance, a central air conditioning system typically lasts 15-20 years. Heat pumps average 12-15 years, and gas furnaces can last 20-30 years. Factors that affect lifespan include installation quality, maintenance frequency, usage patterns, and local climate. If your system is over 12 years old and requiring frequent repairs, replacement may be more cost-effective than continued repair costs.',
    },
    {
      q: 'How can I reduce my energy bills with my HVAC system?',
      a: 'Several strategies can significantly reduce HVAC energy costs: install a programmable or smart thermostat (saves 10-15%), change air filters monthly during peak season (dirty filters increase energy use 5-15%), seal and insulate ductwork (can save 20-30%), ensure proper system sizing through professional load calculations, upgrade to a high-SEER2 or ENERGY STAR unit, and use ceiling fans to supplement cooling. Our technicians can perform an energy audit to identify specific savings opportunities in your home.',
    },
    {
      q: 'What are the warning signs that my HVAC system needs repair?',
      a: 'Watch for these common warning signs: unusual noises (grinding, squealing, banging), weak or inconsistent airflow from vents, warm air blowing from cooling vents, frequent cycling on and off, unexplained increases in energy bills, excessive humidity or dryness indoors, strange odors from vents (musty, burning, or chemical smells), water leaks around the indoor unit, and thermostat not reaching set temperature. If you notice any of these issues, call us promptly — early repair prevents costlier damage.',
    },
    {
      q: 'What temperature should I set my thermostat to?',
      a: 'The U.S. Department of Energy recommends 78°F when you\'re home in summer and 68°F when you\'re home in winter. When away or sleeping, raise summer settings to 85°F and lower winter settings to 62-65°F. A smart thermostat can automate these adjustments and learn your schedule. Avoid drastic temperature swings, as they force your system to work harder and use more energy. Each degree of adjustment can save approximately 3% on your energy bill.',
    },
    {
      q: 'Do you offer financing for new HVAC installations?',
      a: 'Yes! We offer flexible financing options through our lending partners, including 0% APR financing for up to 60 months for qualified buyers on new system installations. We also accept all major credit cards and can help you identify available federal tax credits, manufacturer rebates, and local utility incentives that can reduce your out-of-pocket cost. During your free estimate, our comfort advisor will present all available payment options and help you find the best fit for your budget.',
    },
  ];

  const serviceAreas = [
    'Dallas', 'Plano', 'Frisco', 'Richardson', 'McKinney', 'Allen',
    'Garland', 'Mesquite', 'Irving', 'Grand Prairie', 'Carrollton',
    'Lewisville', 'Flower Mound', 'Allen', 'Denton', 'The Colony',
    'Prosper', 'Celina', 'Little Elm', 'Coppell', 'Southlake', 'Keller',
  ];

  return (
    <div className="min-h-screen bg-[#0c1929] text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>

      {/* === EMERGENCY BANNER === */}
      <div className="bg-red-600 text-white py-2.5 text-center text-sm font-bold tracking-wide">
        <span className="mr-2">🚨</span>
        24/7 Emergency Heating & Cooling Service — No Overtime Fees —{' '}
        <a href="tel:(555) 901-2346" className="underline hover:text-red-200 ml-1">Call (555) 901-2346 Now</a>
      </div>

      {/* === NAVIGATION === */}
      <nav className="fixed top-[40px] left-0 right-0 z-50 bg-[#0c1929]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-sky-400">ArcticAir</h1>
            <p className="text-base tracking-[0.2em] text-slate-400 uppercase">HVAC — Dallas, TX</p>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="btn text-base text-slate-400 hover:text-sky-400 transition-colors">Services</button>
            <button onClick={() => scrollTo('plans')} className="btn text-base text-slate-400 hover:text-sky-400 transition-colors">Plans</button>
            <button onClick={() => scrollTo('testimonials')} className="btn text-base text-slate-400 hover:text-sky-400 transition-colors">Reviews</button>
            <button onClick={() => scrollTo('faq')} className="btn text-base text-slate-400 hover:text-sky-400 transition-colors">FAQ</button>
            <button onClick={() => scrollTo('contact')} className="btn bg-sky-600 text-white px-5 py-2.5 text-base rounded-full hover:bg-sky-500 transition-colors">Schedule Service</button>
          </div>
          <button className="md:hidden text-slate-400" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0c1929] px-6 py-4 space-y-3">
            {['services', 'plans', 'testimonials', 'faq', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="btn block w-full text-left text-slate-300 hover:text-sky-400 py-2 capitalize">{id}</button>
            ))}
          </div>
        )}
      </nav>

      <main id="main">
        {/* === HERO SECTION === */}
        <section className="hero pt-[100px]">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Licensed & Insured — Est. 2001</span>
              <h2 className="heading text-5xl md:text-7xl font-bold leading-[0.9] mb-6 mt-4">
                Your comfort,<br />our <span className="text-sky-400">mission.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-md mb-8 leading-relaxed">
                Expert heating, cooling, and indoor air quality services for residential and commercial properties across the Dallas-Fort Worth metroplex. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="btn btn text-base px-8 py-4">Schedule Free Estimate</button>
                <a href="tel:(555) 901-2346" className="btn-outline text-base px-8 py-4">Emergency Call</a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: '25+', label: 'Years in Business' },
                { value: '10K+', label: 'Homes Served' },
                { value: 'Same Day', label: 'Service Available' },
                { value: '24/7', label: 'Emergency Line' },
                { value: 'NATE', label: 'Certified Techs' },
                { value: '$0', label: 'Free Estimates' },
              ].map((stat, i) => (
                <div key={i} className="card text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sky-400">{stat.value}</div>
                  <div className="text-sm md:text-xs text-slate-400 uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SERVICES === */}
        <section id="services" className="reveal py-24 bg-slate-900/30" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Our HVAC Services</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From emergency repairs to complete system installations, ArcticAir delivers fast, honest, and professional HVAC services backed by industry-leading warranties.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="card">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl shrink-0">{s.icon}</div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{s.name}</h3>
                        <span className="text-sky-400 font-bold text-sm">{s.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === MAINTENANCE PLANS === */}
        <section id="plans" className="reveal py-24" aria-labelledby="plans-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Save & Protect</span>
              <h2 id="plans-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Maintenance Plans</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Keep your HVAC system running at peak performance year-round with our preventive maintenance plans. Members enjoy priority service, discounted repairs, and extended equipment life.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div key={i} className={`card relative ${plan.highlight ? 'border-sky-500 ring-1 ring-sky-500/30' : ''}`}>
                  {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge">Most Popular</div>}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-sky-400">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm mt-2">{plan.desc}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-sky-400 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${plan.highlight ? 'btn' : 'btn-outline'}`}>
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === WHY CHOOSE US === */}
        <section className="reveal py-24 section-alt" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">The ArcticAir Difference</span>
              <h2 id="why-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Why Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SEASONAL TIPS === */}
        <section className="reveal py-24" aria-labelledby="tips-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Stay Comfortable</span>
              <h2 id="tips-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Seasonal Tips</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Expert advice to keep your home comfortable and your energy bills low throughout the year.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, i) => (
                <div key={i} className="card text-center">
                  <div className="text-4xl mb-3">{tip.icon}</div>
                  <span className="badge mb-3">{tip.season}</span>
                  <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SERVICE AREAS === */}
        <section className="reveal py-24 section-alt" aria-labelledby="areas-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="badge">Coverage</span>
              <h2 id="areas-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Service Areas</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Proudly serving the Dallas-Fort Worth metroplex with fast, reliable HVAC services across a 30-mile radius from our Dallas headquarters.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, i) => (
                <span key={i} className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-default">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-8">Don&apos;t see your city? Call us — we likely serve your area.</p>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section id="testimonials" className="reveal py-24" aria-labelledby="reviews-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Customer Love</span>
              <h2 id="reviews-heading" className="heading text-4xl md:text-5xl font-bold mt-4">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-slate-400 text-sm">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section id="faq" className="reveal py-24 section-alt" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Questions?</span>
              <h2 id="faq-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base pr-4">{faq.q}</h3>
                    <span className="text-sky-400 text-xl shrink-0 transition-transform" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-slate-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/10">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CONTACT === */}
        <section id="contact" className="reveal py-24" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Get in Touch</span>
              <h2 id="contact-heading" className="heading text-4xl md:text-5xl font-bold mt-4">Schedule Your Service</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Request a free estimate or schedule service online. We typically respond within 30 minutes during business hours, or call us anytime for 24/7 emergency service.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
              <div className="card">
                <div className="text-4xl mb-3">📞</div>
                <div className="font-bold mb-1">Call Us</div>
                <a href="tel:(555) 901-2346" className="text-sky-400 text-xl font-bold hover:underline">(555) 901-2346</a>
                <p className="text-slate-400 text-sm mt-1">24/7 Emergency Line</p>
              </div>
              <div className="card">
                <div className="text-4xl mb-3">📍</div>
                <div className="font-bold mb-1">Visit Us</div>
                <p className="text-slate-400">4510 Commerce Dr, Suite 200<br />Dallas, TX 75201</p>
                <p className="text-slate-400 text-sm mt-1">Mon–Sat 7AM–8PM</p>
              </div>
              <div className="card">
                <div className="text-4xl mb-3">💰</div>
                <div className="font-bold mb-1">Financing</div>
                <p className="text-slate-400">0% APR for up to 60 months<br />on new system installs</p>
                <p className="text-slate-400 text-sm mt-1">OAC — Ask for details</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <div className="card text-center py-16">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-slate-400">Your request has been submitted. We&apos;ll contact you within 30 minutes during business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn mt-6">Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input type="text" required placeholder="John Smith" className="w-full border border-gray-300 " />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                      <input type="tel" required placeholder="(555) 123-4567" className="w-full border border-gray-300 " />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input type="email" required placeholder="john@example.com" className="w-full border border-gray-300 " />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Needed *</label>
                    <select required className="w-full border border-gray-300 ">
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
                  <div>
                    <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                    <input type="date" className="w-full border border-gray-300 " />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Tell Us More</label>
                    <textarea rows={4} placeholder="Describe your HVAC issue or service request..." className="w-full border border-gray-300 "></textarea>
                  </div>
                  <button type="submit" className="btn w-full text-center text-base py-4">Submit Request — It&apos;s Free</button>
                  <p className="text-slate-400 text-xs text-center">By submitting, you agree to be contacted about your service request. We never share your information.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-sky-400 mb-3">ArcticAir</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Expert heating, cooling, and indoor air quality services for the Dallas-Fort Worth metroplex since 2001.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>AC Installation & Repair</li>
                <li>Furnace Installation & Repair</li>
                <li>Heat Pump Systems</li>
                <li>Duct Cleaning</li>
                <li>Indoor Air Quality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>About ArcticAir</li>
                <li>Maintenance Plans</li>
                <li>Financing Options</li>
                <li>Service Areas</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="tel:(555) 901-2346" className="hover:text-sky-400">(555) 901-2346</a></li>
                <li>info@arcticairhvac.com</li>
                <li>4510 Commerce Dr, Suite 200</li>
                <li>Dallas, TX 75201</li>
                <li>TACLA License #48291</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} ArcticAir HVAC. All rights reserved. Dallas, TX. Licensed, Bonded & Insured.
          </div>
        </div>
      </footer>
    </div>
  );
}
