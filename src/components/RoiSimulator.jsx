import React, { useState, useEffect } from 'react';

const RoiSimulator = () => {
  const [hasWebsite, setHasWebsite] = useState(true);
  const [trafficMetric, setTrafficMetric] = useState(1000); // Represents visitors OR local searches
  const [customerValue, setCustomerValue] = useState(500);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    let calculatedRevenue = 0;
    
    if (hasWebsite) {
      // Scenario 1: Has a website (Calculating Additional Revenue from better conversion)
      // Assume a conservative 2.5% boost in conversion rate
      calculatedRevenue = (trafficMetric * 0.025) * customerValue;
    } else {
      // Scenario 2: No website (Calculating Uncaptured Revenue)
      // Assume capturing just 5% of the local search market
      calculatedRevenue = (trafficMetric * 0.05) * customerValue;
    }

    setRevenue(Math.round(calculatedRevenue));
  }, [hasWebsite, trafficMetric, customerValue]);

  // Handle Tab Switch (reset slider to an appropriate default for the context)
  const handleTabSwitch = (isWebsite) => {
    setHasWebsite(isWebsite);
    setTrafficMetric(isWebsite ? 1000 : 2000); 
  };

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', background: '#FFFFFF', padding: '0', overflow: 'hidden' }}>
      
      {/* Tab Header */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', background: 'var(--bg-secondary)' }}>
        <button 
          onClick={() => handleTabSwitch(true)}
          style={{
            flex: 1, padding: '1rem', fontWeight: '600', fontSize: '0.95rem',
            background: hasWebsite ? '#FFFFFF' : 'transparent',
            color: hasWebsite ? 'var(--navy-primary)' : 'var(--text-muted)',
            borderBottom: hasWebsite ? '2px solid var(--accent-cta)' : '2px solid transparent',
            transition: 'all 0.2s ease'
          }}
        >
          I have a website
        </button>
        <button 
          onClick={() => handleTabSwitch(false)}
          style={{
            flex: 1, padding: '1rem', fontWeight: '600', fontSize: '0.95rem',
            background: !hasWebsite ? '#FFFFFF' : 'transparent',
            color: !hasWebsite ? 'var(--navy-primary)' : 'var(--text-muted)',
            borderBottom: !hasWebsite ? '2px solid var(--accent-cta)' : '2px solid transparent',
            transition: 'all 0.2s ease'
          }}
        >
          I don't have a website
        </button>
      </div>

      <div style={{ padding: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--navy-primary)' }}>
          Calculate Your {hasWebsite ? 'Lost' : 'Uncaptured'} Revenue
        </h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
            <span>{hasWebsite ? 'Current Monthly Website Visitors' : 'Estimated Local Monthly Searches'}</span>
            <span style={{ color: 'var(--accent-cta)' }}>{trafficMetric.toLocaleString()}</span>
          </label>
          <input 
            type="range" 
            min="100" 
            max="10000" 
            step="100" 
            value={trafficMetric} 
            onChange={(e) => setTrafficMetric(Number(e.target.value))}
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
            {hasWebsite ? 'Estimated Additional Monthly Revenue' : 'Estimated Uncaptured Monthly Revenue'}
          </p>
          <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--navy-primary)', lineHeight: '1' }}>
            ${revenue.toLocaleString()}
          </div>
        </div>

        {/* The Escape Hatch UX */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.4' }}>
            *This is a conservative estimate based on industry averages.<br/><br/>
            <strong style={{ color: 'var(--navy-primary)' }}>Don't know your numbers? Most business owners don't.</strong>
          </p>
          <a href="#contact" className="btn-primary" style={{ width: '100%' }}>
            Get Your Free Custom ROI Projection
          </a>
        </div>
      </div>

    </div>
  );
};

export default RoiSimulator;
