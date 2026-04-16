'use client';
import { useState, useEffect, useRef } from 'react';

export default function HVACPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('comfort');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      {/* ====== EMERGENCY BANNER ====== */}
      {bannerVisible && (
        <div className="emergency-banner">
          <div className="emergency-banner-inner">
            <div className="emergency-pulse-dot" />/
            <p className="emergency-text">
              AC or Heat Out? Call <a href="tel:18005553456" className="emergency-phone">(800) 555-3456</a> for 24/7 Emergency HVAC Service
            </p>/
            <button className="emergency-close" onClick={() => setBannerVisible(false)}>×</button>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

      <section className="section reveal" style={{  background: 'var(--bg-secondary)'  }>>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'  }>>
            Our Process
          </h2>/
          <p className="text-center" style={{ color: 'var(--text-secondary)', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            fontSize: '1.125rem'
           }>>
            A structured approach that ensures quality, efficiency, and client satisfaction.
          </p>/
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'  }>>
            <div style={{ textAlign: 'center'  }>>
              <div style={{ width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: '#0891b2', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
               }>>1</div>/
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'  }>>Discovery</h3>/
              <p style={{ color: 'var(--text-secondary)'  }>>
                We start by understanding your business, goals, and challenges.
              </p>/
            </div>/
            <div style={{ textAlign: 'center'  }>>
              <div style={{ width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: '#0891b2', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
               }>>2</div>/
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'  }>>Planning</h3>/
              <p style={{ color: 'var(--text-secondary)'  }>>
                We develop a comprehensive strategy and roadmap for success.
              </p>/
            </div>/
            <div style={{ textAlign: 'center'  }>>
              <div style={{ width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: '#0891b2', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
               }>>3</div>/
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'  }>>Execution</h3>/
              <p style={{ color: 'var(--text-secondary)'  }>>
                Our team brings the plan to life with precision and creativity.
              </p>/
            </div>/
            <div style={{ textAlign: 'center'  }>>
              <div style={{ width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: '#0891b2', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
               }>>4</div>/
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'  }>>Delivery</h3>/
              <p style={{ color: 'var(--text-secondary)'  }>>
                We deliver exceptional results with ongoing support and optimization.
              </p>/
            </div>/
          </div>/
        </div>/
      </section>/


    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      )}

      {/* ====== NAVIGATION ====== */}
      <nav className="nav-bar" style={{ position: bannerVisible ? 'fixed' : 'sticky', top: bannerVisible ? '42px' : 0, zIndex: 50, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--dark-border)', padding: '16px 24px' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }>>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--cyan)', lineHeight: 1 }>>ARCTICAIR
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--text-secondary)', textTransform: 'uppercase' }>>Climate Solutions
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }>>
            {['Services', 'Maintenance', 'Why Us', 'Reviews', 'Contact'].map((item) => (
              <button key={item} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }> onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}>{item}</button>/
            ))}
            <button className="btn-primary" style={{ padding: '10px 24px', borderRadius: '3px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em' }>>Get Quote</button>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </nav>/

      {/* ====== HERO ====== */}
      <section className="hero-section" style={{ paddingTop: bannerVisible ? '160px' : '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden', background: 'var(--dark)' }>>
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)', pointerEvents: 'none', animation: 'hero-glow-pulse 6s ease-in-out infinite alternate' }> />/
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }>>
          <div>
            <span className="badge">NATE Certified Technicians</span>/
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '4.5rem', fontWeight: 700, lineHeight: 0.92, letterSpacing: '0.02em', marginTop: '20px', marginBottom: '28px' }>>
              PERFECT <span style={{ color: 'var(--cyan)' }>>CLIMATE</span>, YEAR ROUND/
            </h1>/
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '1rem' }>>
              ArcticAir HVAC delivers precision climate control for homes and businesses across the region. From high-efficiency furnace installations to smart thermostat programming, our certified technicians optimize your comfort while minimizing energy costs. We work with all major brands and systems.
            </p>/
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '36px' }>>
              Our comprehensive approach includes load calculations, ductwork analysis, indoor air quality assessments, and ongoing maintenance plans that keep your system running at peak performance for years to come. We believe every family deserves clean, comfortable air at a price they can afford, which is why we offer transparent pricing, flexible financing, and a satisfaction guarantee on every job.
            </p>/
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }>>
              <button className="btn-primary">Schedule Service</button>/
              <button className="btn-outline">View Maintenance Plans</button>/
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '3rem' }>>
              {[
                { val: '22+', label: 'Years Experience' },
                { val: '8K+', label: 'Systems Installed' },
                { val: '4.9★', label: 'Google Rating' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '6px', padding: '24px 16px', textAlign: 'center' }>>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--cyan)', lineHeight: 1, whiteSpace: 'nowrap' }>>{s.val}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px', whiteSpace: 'nowrap' }>>{s.label}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }>>
            <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=700&fit=crop" alt="HVAC technician" style={{ width: '100%', height: '32rem', objectFit: 'cover', display: 'block' }> />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.7) 100%)', pointerEvents: 'none' }> />/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== SERVICES ====== */}
      <section id="services" style={{ padding: '80px 24px', background: 'rgba(0,229,255,0.02)', borderTop: '1px solid rgba(0,229,255,0.06)', borderBottom: '1px solid rgba(0,229,255,0.06)' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }>>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }>>
            <span className="badge">Full-Service HVAC</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px', marginBottom: '16px' }>>Heating, Cooling & Air Quality</h2>/
            <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }>>From the hottest summer days to the coldest winter nights, ArcticAir keeps your indoor environment perfectly comfortable. Our comprehensive HVAC services cover every aspect of your climate control needs.</p>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }>>
            {[
              { icon: '❄️', name: 'Air Conditioning', desc: 'Central AC installation, repair, and replacement. We service all brands including Carrier, Trane, Lennox, and Rheem. High-SEER units available for maximum energy savings. Our technicians perform load calculations to ensure proper sizing, preventing short cycling and ensuring consistent comfort throughout your home.', img: 'https://images.unsplash.com/photo-1631545806609-d2e4c3befed5?w=600&h=400&fit=crop' },/
              { icon: '🔥', name: 'Heating Systems', desc: 'Furnace and boiler installation, repair, and maintenance. Gas, electric, and oil systems serviced by certified technicians. High-efficiency options up to 98% AFUE rating available. We also install radiant floor heating and heat pump systems for year-round comfort with lower operating costs.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },/
              { icon: '🌡️', name: 'Heat Pump Systems', desc: 'Energy-efficient heating and cooling in one system. Air-source and ground-source heat pump installation with expert sizing and design. Perfect for moderate climates and available with federal tax credits and local utility rebates.', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },/
              { icon: '💨', name: 'Indoor Air Quality', desc: 'Breathe cleaner air with whole-home air purifiers, UV germicidal lights, humidifiers, dehumidifiers, and advanced filtration systems including HEPA and media filters. We test your indoor air quality and recommend targeted solutions.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop' },/
              { icon: '🔧', name: 'Ductwork Services', desc: 'Duct cleaning, sealing, insulation, and new ductwork installation. Properly designed and sealed ductwork can improve system efficiency by up to 30% and eliminate hot/cold spots throughout your home.', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop' },
              { icon: '🏠', name: 'Smart Thermostats', desc: 'Smart thermostat installation and programming including Nest, Ecobee, and Honeywell. Zoning systems for room-by-room temperature control. Wi-Fi enabled controls for remote access and energy monitoring from your phone.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },/
            ].map((service) => (
              <div key={service.name} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '0', overflow: 'hidden', borderRadius: '8px' }>>
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px' }>>
                  <img src={service.img} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }> />/
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 60%, var(--dark-card) 100%)' }> />/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }>>
                  <span style={{ fontSize: '2rem', marginBottom: '0.75rem' }>>{service.icon}</span>/
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }>>{service.name}</h3>/
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-secondary)', flex: 1 }>>{service.desc}</p>/
                  <button style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'var(--cyan)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer', textAlign: 'left', padding: 0 }>>Learn More →</button>/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== MAINTENANCE PLANS ====== */}
      <section id="maintenance" style={{ padding: '80px 24px' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }>>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }>>
            <span className="badge">Maintenance Plans</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px', marginBottom: '16px' }>>Protect Your Investment</h2>/
            <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }>>Regular maintenance extends equipment life, reduces energy bills by up to 30%, and prevents costly breakdowns. Choose the plan that fits your needs and budget.</p>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }>>
            {[
              { name: 'Basic', price: '$14.99/mo', annual: '$179/yr', desc: 'Essential seasonal tune-ups', features: ['1 spring AC tune-up', '1 fall heating tune-up', 'Priority scheduling', '15% off repairs', 'Filter reminders', 'No overtime fees'], highlight: false },
              { name: 'Comfort', price: '$24.99/mo', annual: '$299/yr', desc: 'Complete care coverage', features: ['2 seasonal tune-ups', 'Comprehensive cleaning', '20% off all repairs', 'Free diagnostic visits', '1-year parts warranty', 'Priority emergency service', 'Thermostat calibration', 'Refrigerant check'], highlight: true },
              { name: 'Elite', price: '$39.99/mo', annual: '$479/yr', desc: 'Total peace of mind', features: ['4 quarterly visits', '25% off all repairs', 'Free emergency calls', '2-year parts warranty', 'Air quality testing', 'Duct inspection', 'Energy audit report', 'New filter quarterly', 'Lifetime repair guarantee'], highlight: false },
            ].map((plan) => (
              <div key={plan.name} className="card" style={{ textAlign: 'center', position: 'relative', border: plan.highlight ? '2px solid var(--cyan)' : undefined, padding: '2rem', borderRadius: '8px', cursor: 'pointer' }> onClick={() => setSelectedPlan(plan.name.toLowerCase())}>
                {plan.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--cyan), #00b8d4)', color: '#000', fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', padding: '4px 16px', borderRadius: '2px' }>>Best Value
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>}/
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }>>{plan.name}</h3>/
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }>>{plan.desc}</p>/
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: '0.25rem', textShadow: '0 0 20px rgba(0,229,255,0.3)' }>>{plan.price}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2rem' }>>or {plan.annual}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div style={{ textAlign: 'left', marginBottom: '2rem' }>>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', fontSize: '0.82rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--dark-border)' }>>
                      <span style={{ color: 'var(--cyan)' }>>✓</span> {f}/
                    
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                  ))}
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <button className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%' }>>Choose {plan.name}</button>/
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== WHY CHOOSE US ====== */}
      <section id="why-us" style={{ padding: '80px 24px', background: 'rgba(0,229,255,0.02)', borderTop: '1px solid rgba(0,229,255,0.06)', borderBottom: '1px solid rgba(0,229,255,0.06)' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }>>
          <div className="reveal-left">
            <span className="badge">Why ArcticAir</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px', marginBottom: '16px', lineHeight: 1.05 }>>Comfort You Can Count On</h2>/
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }>>
              ArcticAir HVAC has been the regions most trusted climate control provider for over two decades. Our NATE-certified technicians undergo continuous training to stay current with the latest HVAC technologies, refrigerant regulations, and energy efficiency standards.
            </p>/
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }>>
              We understand that your HVAC system is one of the largest investments in your home. Thats why we take a consultative approach, performing detailed load calculations, analyzing your existing ductwork, and recommending solutions that optimize comfort, efficiency, and longevity. Every installation comes with our exclusive ArcticAir Assurance including a 10-year parts warranty and lifetime workmanship guarantee.
            </p>/
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }>>
              {['NATE Certified', 'Licensed & Insured', 'Energy Star Partner', 'BBB A+ Rated', 'Financing Available', 'Same-Day Service', 'All Brands Serviced', '10-Year Warranty'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }>>
                  <span style={{ color: 'var(--cyan)' }>>✓</span> {item}/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="reveal-scale" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }>>
            <img src="https://images.unsplash.com/photo-1631545806609-d2e4c3befed5?w=400&h=300&fit=crop" alt="AC unit" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
            <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop" alt="HVAC work" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" alt="Thermostat" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop" alt="Ductwork" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== REVIEWS ====== */}
      <section id="reviews" style={{ padding: '80px 24px' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }>>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }>>
            <span className="badge">Customer Reviews</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px' }>>What Homeowners Say</h2>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }>>
            {[
              { name: 'Robert K.', text: 'ArcticAir replaced our 20-year-old AC and furnace with a high-efficiency heat pump system. Our energy bills dropped 40% and the house has never been more comfortable. The installers were professional, clean, and finished ahead of schedule.', loc: 'Summit, NJ' },
              { name: 'Maria S.', text: 'I signed up for the Comfort maintenance plan and it has been worth every penny. They caught a failing capacitor before it left us without AC on the hottest day of the year. Their technicians are knowledgeable, polite, and always on time.', loc: 'Princeton, NJ' },
              { name: 'Tom D.', text: 'Had an emergency furnace failure on Christmas Eve. ArcticAir had a tech there within an hour who diagnosed and repaired the issue on the spot. They saved our holiday. Cannot recommend them highly enough!', loc: 'Westfield, NJ' },
            ].map((r) => (
              <div key={r.name} className="card" style={{ padding: '2rem' }>>
                <div style={{ color: '#facc15', fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '1rem' }>>★★★★★
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }>>{r.text}</p>/
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }>>{r.name}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }>>{r.loc}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== GALLERY ====== */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,229,255,0.02)', borderTop: '1px solid rgba(0,229,255,0.06)' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }>>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }>>
            <span className="badge">Our Work</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px' }>>Recent Installations</h2>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }>>
            {[
              { img: 'https://images.unsplash.com/photo-1631545806609-d2e4c3befed5?w=500&h=400&fit=crop', label: 'Central AC Install' },/
              { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=400&fit=crop', label: 'Furnace Replacement' },/
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=400&fit=crop', label: 'Smart Thermostat' },/
              { img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=400&fit=crop', label: 'Ductwork Design' },/
              { img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=400&fit=crop', label: 'Heat Pump System' },/
              { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop', label: 'Commercial HVAC' },/
            ].map((item) => (
              <div key={item.label} style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', aspectRatio: '4/3', border: '1px solid var(--dark-border)' }>>/
                <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }> />/
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)', display: 'flex', alignItems: 'flex-end', padding: '1rem' }>>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }>>{item.label}</span>/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== CONTACT / BOOKING ====== */}/
      <section id="contact" style={{ padding: '80px 24px' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }>>
          <div className="reveal-left">
            <span className="badge">Contact Us</span>/
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, marginTop: '16px', marginBottom: '16px', lineHeight: 1.05 }>>Schedule Your Service</h2>/
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }>>
              Ready to upgrade your comfort? Fill out the form and our team will contact you within 2 hours to schedule your service. For emergencies, call (800) 555-3456 for immediate assistance from our 24/7 on-call technicians./
            </p>/
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }>>
              {[
                { icon: '📞', label: 'Phone', value: '(800) 555-3456' },
                { icon: '✉️', label: 'Email', value: 'comfort@arcticairhvac.com' },
                { icon: '🕐', label: 'Hours', value: 'Mon-Fri 7am-7pm, Sat 8am-4pm' },
                { icon: '🚨', label: 'Emergency', value: '24/7 Available' },/
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }>>
                  <span style={{ fontSize: '1.5rem' }>>{item.icon}</span>/
                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }>>{item.label}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                    <div style={{ fontSize: '0.95rem', fontWeight: 500 }>>{item.value}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                  
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <img src="https://images.unsplash.com/photo-1631545806609-d2e4c3befed5?w=600&h=250&fit=crop" alt="ArcticAir service" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px', marginTop: '2rem' }> />
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div className="reveal-scale">
            <div className="card" style={{ padding: '2rem', borderRadius: '8px' }>>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }>>Request Service</h3>/
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }>>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }>>✅
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }>>Thank You!</h4>/
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }>>Our team will contact you within 2 hours to confirm your appointment.</p>/
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
                  <input type="text" placeholder="Full Name" value={formData.name> onChange={(e) => setFormData({ ...formData, name: e.target.value })} required style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }} />/
                  <input type="tel" placeholder="Phone Number" value={formData.phone> onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }} />/
                  <input type="email" placeholder="Email Address" value={formData.email> onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }} />/
                  <select value={formData.service> onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    <option value="">Select Service</option>/
                    <option>AC Repair</option>/
                    <option>AC Installation</option>/
                    <option>Heating Repair</option>/
                    <option>Heating Installation</option>/
                    <option>Maintenance Plan</option>/
                    <option>Indoor Air Quality</option>/
                    <option>Emergency Service</option>/
                    <option>Other</option>/
                  </select>/
                  <textarea placeholder="Describe your needs..." rows={4} value={formData.message> onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', resize: 'vertical' }} />/
                  <button type="submit" className="btn-primary" style={{ width: '100%' }>>Submit Request</button>/
                </form>/
              )}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </section>/

      {/* ====== FOOTER ====== */}
      <footer style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)', padding: '4rem 24px 2rem' }>>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }>>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }>>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: '0.15em', marginBottom: '1rem' }>>ARCTICAIR HVAC
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }>>Professional heating, cooling, and indoor air quality services. NATE-certified technicians delivering comfort solutions since 2002.</p>/
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }>>License #HVAC-3847291</p>/
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--cyan)' }>>Services</h4>/
              {['AC Installation', 'Heating Systems', 'Heat Pumps', 'Air Quality', 'Ductwork', 'Smart Controls'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', cursor: 'pointer' }>>{s}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--cyan)' }>>Company</h4>/
              {['About Us', 'Careers', 'Blog', 'Financing', 'Maintenance Plans', 'Contact'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', cursor: 'pointer' }>>{s}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--cyan)' }>>Contact</h4>/
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 2 }>>
                <div>(800) 555-3456
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div>comfort@arcticairhvac.com
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
                <div>789 Climate Ave<br />Summit, NJ 07901/
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }>>
            © 2026 ArcticAir HVAC. All rights reserved. | Privacy Policy | Terms of Service
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }>>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }>>Frequently Asked Questions</h2>/
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>How long does it take to build a website?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>'/
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>Do you offer ongoing maintenance?</summary>/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>/
            <details className="card" style={{ padding: '1.5rem' }>>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }>>What's included in your pricing?</summary>'/
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }>>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>/
            </details>/
          </div>/
        </div>/
      </section>/

    </div>/
      </footer>/
    </>/
  );
}
