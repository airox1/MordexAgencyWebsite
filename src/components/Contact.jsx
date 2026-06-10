import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API or email service
    alert("Thanks! Your request for a free audit has been received.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--accent-cta)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Take Action
            </span>
            <h2 className="heading-lg" style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>
              Get Your Free ROI Projection & Web Audit
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Fill out the form below. I will personally review your current website (if you have one) and local market, and send you a custom breakdown of how much revenue you are leaving on the table. Zero obligations.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy-primary)' }}>Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--bg-secondary)' }}
                  placeholder="John Doe"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy-primary)' }}>Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--bg-secondary)' }}
                  placeholder="john@business.com"
                />
              </div>
            </div>

            <div className="grid-2" style={{ gap: '1.5rem', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="phone" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy-primary)' }}>Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--bg-secondary)' }}
                  placeholder="(904) 555-0123"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="website" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy-primary)' }}>Current Website URL (Optional)</label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  value={formData.website}
                  onChange={handleChange}
                  style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--bg-secondary)' }}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--navy-primary)' }}>What's your primary business goal right now?</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={{ padding: '12px 16px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', fontSize: '1rem', background: 'var(--bg-secondary)', resize: 'vertical' }}
                placeholder="E.g., We need more residential HVAC leads..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginTop: '1rem' }}>
              Request Free Audit & Projection
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              100% free. No high-pressure sales pitches.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
