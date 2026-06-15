import React from 'react';
import RoiSimulator from './RoiSimulator';

const Hero = () => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        paddingTop: '10rem', // Account for navbar
        paddingBottom: '8rem', // Extra padding at bottom for the overlap effect
        backgroundColor: 'var(--navy-primary)',
        color: '#FFFFFF',
        overflow: 'visible' // CRITICAL: Allows the card to bleed out of the section
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* We return to the proven F-Pattern Grid, but unified and floating */}
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Side: The Story */}
          <div style={{ paddingTop: '2rem' }}>
            <span style={{ 
              color: 'var(--accent-cta)', 
              fontWeight: '700', 
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              display: 'block',
              marginBottom: '1.5rem'
            }}>
              Jacksonville's ROI-Focused Web Partner
            </span>
            
            <h1 className="heading-xl" style={{ color: '#FFFFFF' }}>
              We engineer websites that make the phone <span className="ring-animate">ring.</span>
            </h1>
            
            <p className="text-lead" style={{ marginTop: '1.5rem', marginBottom: '2.5rem', color: '#E0E7FF' }}>
              Stop leaving local market share on the table. Whether you need a massive upgrade or your very first site, we build bespoke digital assets that turn local searches into paying customers.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
              <a href="#contact" className="btn-primary">Get Your Free Web Audit</a>
              <a href="#services" style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontWeight: '600',
                padding: '14px 32px',
                borderRadius: '6px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.2s ease',
                display: 'inline-block',
                textAlign: 'center'
              }}
              onMouseOver={(e) => e.target.style.borderColor = '#FFFFFF'}
              onMouseOut={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              >View Our Services</a>
            </div>
          </div>

          {/* Right Side: The Floating Logic (Overlaps the bottom edge) */}
          <div style={{ 
            position: 'relative',
            zIndex: 10,
            transform: 'translateY(15%)', 
            color: 'var(--text-main)' /* CRITICAL: Resets text color so the calculator text isn't white */
          }}>
            <div style={{ 
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)', /* Deeper shadow + subtle border for dark mode contrast */
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              overflow: 'hidden'
            }}>
              <RoiSimulator />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
