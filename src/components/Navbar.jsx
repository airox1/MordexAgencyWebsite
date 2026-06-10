import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          {/* Your Custom Logo */}
          <img 
            src="/logo.png" 
            alt="Mordex Logo" 
            style={{ 
              height: '56px', 
              width: '56px',
              objectFit: 'contain'
            }} 
          />
          <span style={{ fontWeight: '800', letterSpacing: '1px', fontSize: '1.25rem', color: 'var(--navy-primary)' }}>MORDEX</span>
        </a>
        
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#services" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Services</a>
          <a href="#work" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Case Studies</a>
          <a href="#about" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>About Us</a>
          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px' }}>Get a Free Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
