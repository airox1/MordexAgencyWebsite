import React from 'react';
import { LayoutTemplate, Search, ShieldCheck } from 'lucide-react';

const Value = () => {
  return (
    <section id="services" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--navy-primary)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Our Expertise
          </span>
          <h2 className="heading-lg" style={{ color: 'var(--navy-primary)' }}>
            Everything a local business needs to dominate online.
          </h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>
            We don't do fluff. We focus purely on the three pillars of digital growth that actually impact your bottom line.
          </p>
        </div>

        <div className="grid-3">
          
          {/* Service 1 */}
          <div className="card">
            <div style={{ 
              width: '56px', height: '56px', borderRadius: '12px', 
              background: 'var(--navy-light)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <LayoutTemplate size={28} color="var(--navy-primary)" />
            </div>
            <h3 className="heading-md" style={{ color: 'var(--navy-primary)' }}>High-Converting Web Design</h3>
            <p className="text-muted">
              Beautiful websites are useless if they don't generate leads. We engineer psychology-driven layouts designed specifically to turn your visitors into paying customers.
            </p>
          </div>

          {/* Service 2 */}
          <div className="card">
            <div style={{ 
              width: '56px', height: '56px', borderRadius: '12px', 
              background: 'var(--navy-light)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Search size={28} color="var(--navy-primary)" />
            </div>
            <h3 className="heading-md" style={{ color: 'var(--navy-primary)' }}>Local SEO Optimization</h3>
            <p className="text-muted">
              When people in Jacksonville search for your services, you need to be at the top. We optimize your technical foundation so Google ranks you above the competition.
            </p>
          </div>

          {/* Service 3 */}
          <div className="card">
            <div style={{ 
              width: '56px', height: '56px', borderRadius: '12px', 
              background: 'var(--navy-light)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <ShieldCheck size={28} color="var(--navy-primary)" />
            </div>
            <h3 className="heading-md" style={{ color: 'var(--navy-primary)' }}>Performance & Security</h3>
            <p className="text-muted">
              Slow websites kill conversions. We build lightning-fast, highly secure platforms that provide a flawless experience on both mobile and desktop devices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Value;
