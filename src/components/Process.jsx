import React from 'react';
import { UserCheck, Zap, Handshake } from 'lucide-react';

const Process = () => {
  return (
    <section id="about" className="section section-bg-navy">
      <div className="container">
        
        <div className="grid-2">
          
          {/* Radical Transparency Message */}
          <div>
            <span style={{ color: 'var(--accent-cta)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              The Local Advantage
            </span>
            <h2 className="heading-lg" style={{ color: '#FFFFFF' }}>
              Why working with a solo developer is your best move.
            </h2>
            <div style={{ color: '#E0E7FF', fontSize: '1.1rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                The traditional digital agency model is broken. When you hire a big agency, you are paying exorbitant fees to cover their fancy offices, bloated staff, and account managers. Often, your actual website is handed off to a junior developer.
              </p>
              <p>
                I built Mordex to be the exact opposite. I am an independent, dedicated developer based right here in Jacksonville. 
              </p>
              <p>
                Because I have low overhead, I can deliver <strong>faster turnarounds, leaner code, and significantly higher ROI</strong> than the big agencies, all while providing direct, one-on-one communication.
              </p>
            </div>
            
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent-cta)' }}>
                Founder & Lead Developer
              </p>
              <p style={{ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'serif', fontStyle: 'italic', marginTop: '0.5rem' }}>
                Jacksonville, FL
              </p>
            </div>
          </div>

          {/* The Proof Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="card" style={{ background: '#FFFFFF', color: 'var(--text-main)', border: 'none' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UserCheck size={24} color="var(--navy-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Direct Communication</h4>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>No confusing account managers or getting lost in the shuffle. You work directly with the person building your business.</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ background: '#FFFFFF', color: 'var(--text-main)', border: 'none' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={24} color="var(--accent-cta)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Agile & Fast</h4>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>Without corporate bureaucracy, we can launch your site and adapt to market changes faster than large firms.</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ background: '#FFFFFF', color: 'var(--text-main)', border: 'none' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Handshake size={24} color="var(--navy-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '0.5rem' }}>Local Partnership</h4>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>I succeed when your local business grows. I treat your revenue like my own investment.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
