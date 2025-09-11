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
      <div className="dark-logo">
        Polymathic Futures
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