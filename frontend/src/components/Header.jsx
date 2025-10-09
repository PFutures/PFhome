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
        <img 
          src="https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/aen2dtcr_logo%20PF.jpeg"
          alt="Polymathic Futures Logo"
          style={{
            height: '60px',
            width: 'auto',
            objectFit: 'contain',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
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