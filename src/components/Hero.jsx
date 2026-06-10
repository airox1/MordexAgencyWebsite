import React from 'react';
import RoiSimulator from './RoiSimulator';

const Hero = () => {
  return (
    <section className="section section-bg-secondary" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Corporate Overlay (Removed CSS Blur to fix massive FPS lag) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(244, 247, 250, 0.85)', /* 85% opacity light gray */
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2">
          
          {/* Left Side: Messaging */}
          <div style={{ zIndex: 1 }}>
            <span style={{ 
              color: 'var(--accent-cta)', 
              fontWeight: '700', 
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Jacksonville's ROI-Focused Web Partner
            </span>
            
            <h1 className="heading-xl">
              We build lead generation machines for local businesses.
            </h1>
            
            <p className="text-lead">
              Stop losing local customers to competitors with better websites. 
              We engineer high-converting digital experiences that turn clicks into phone calls and consultations.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'var(--space-md)', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">Get Your Free Web Audit</a>
              <a href="#services" className="btn-secondary">View Our Services</a>
            </div>
            
            {/* Trust Signals Under Hero CTA */}
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cta)' }}></div>
                No Bloated Agency Fees
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cta)' }}></div>
                Direct Developer Access
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cta)' }}></div>
                Data-Driven Results
              </div>
            </div>
          </div>

          {/* Right Side: ROI Simulator */}
          <div style={{ zIndex: 1 }}>
            <RoiSimulator />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
