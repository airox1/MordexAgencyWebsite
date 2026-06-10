import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

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
        background: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(8px)' : 'none',
        boxShadow: scrolled || mobileMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid var(--border-light)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          {/* Your Custom Logo */}
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Mordex Logo" 
            style={{ 
              height: '56px', 
              width: '56px',
              objectFit: 'contain'
            }} 
          />
          <span style={{ fontWeight: '800', letterSpacing: '1px', fontSize: '1.25rem', color: 'var(--navy-primary)' }}>MORDEX</span>
        </a>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#services" onClick={closeMenu} style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Services</a>
          <a href="#work" onClick={closeMenu} style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Case Studies</a>
          <a href="#about" onClick={closeMenu} style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>About Us</a>
          <a href="#contact" onClick={closeMenu} className="btn-primary" style={{ padding: '10px 24px' }}>Get a Free Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
