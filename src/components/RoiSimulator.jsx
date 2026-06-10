import React, { useState, useEffect } from 'react';

const RoiSimulator = () => {
  const [visitors, setVisitors] = useState(1000);
  const [customerValue, setCustomerValue] = useState(500);
  const [revenue, setRevenue] = useState(0);

  // Industry average conversion rate improvement for a high-performance site (e.g., 2.5% boost)
  const CONVERSION_BOOST = 0.025; 

  useEffect(() => {
    // Calculate potential additional monthly revenue
    const newLeads = visitors * CONVERSION_BOOST;
    const additionalRevenue = newLeads * customerValue;
    setRevenue(Math.round(additionalRevenue));
  }, [visitors, customerValue]);

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', background: '#FFFFFF', position: 'relative' }}>
      
      {/* Small badge */}
      <div style={{ 
        position: 'absolute', top: '-15px', right: '20px', 
        background: 'var(--navy-primary)', color: '#FFF', 
        padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold',
        boxShadow: 'var(--shadow-sm)'
      }}>
        ROI Simulator
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--navy-primary)' }}>
        Calculate Your Lost Revenue
      </h3>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
          <span>Current Monthly Website Visitors</span>
          <span style={{ color: 'var(--accent-cta)' }}>{visitors.toLocaleString()}</span>
        </label>
        <input 
          type="range" 
          min="100" 
          max="10000" 
          step="100" 
          value={visitors} 
          onChange={(e) => setVisitors(Number(e.target.value))}
          style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cta)' }}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
          <span>Average Customer Lifetime Value</span>
          <span style={{ color: 'var(--accent-cta)' }}>${customerValue.toLocaleString()}</span>
        </label>
        <input 
          type="range" 
          min="100" 
          max="5000" 
          step="50" 
          value={customerValue} 
          onChange={(e) => setCustomerValue(Number(e.target.value))}
          style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cta)' }}
        />
      </div>

      <div style={{ 
        background: 'var(--bg-secondary)', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        textAlign: 'center',
        marginBottom: '1.5rem',
        border: '1px solid var(--border-light)'
      }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Estimated Additional Monthly Revenue
        </p>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--navy-primary)', lineHeight: '1' }}>
          ${revenue.toLocaleString()}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          *This is a conservative estimate. Want to see the exact math for your industry?
        </p>
        <a href="#contact" className="btn-primary" style={{ width: '100%' }}>
          Get Your Free Custom ROI Projection
        </a>
      </div>

    </div>
  );
};

export default RoiSimulator;
