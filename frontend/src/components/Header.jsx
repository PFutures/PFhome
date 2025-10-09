import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="dark-header">
      <div className="dark-logo" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px' 
      }}>
        <div style={{ 
          position: 'relative',
          height: '40px',
          width: '40px'
        }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/aen2dtcr_logo%20PF.jpeg"
            alt="Polymathic Futures Logo"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) saturate(100%)',
              position: 'relative',
              zIndex: 1
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #00ffd1 0%, #00b4d8 50%, #7209b7 100%)',
            mixBlendMode: 'multiply',
            borderRadius: '4px'
          }} />
        </div>
        <span style={{ 
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--brand-primary)'
        }}>
          Polymathic Futures
        </span>
      </div>
      
      <nav className="dark-nav">
        <a 
          href="#about" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a 
          href="#portfolio" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('portfolio');
          }}
        >
          Portfolio
        </a>
        <a 
          href="#services" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}
        >
          Services
        </a>
        <a 
          href="#team" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('team');
          }}
        >
          Team
        </a>
        <a 
          href="#contact" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;