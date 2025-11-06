import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    // With HashRouter, we need to navigate to home first if not there
    if (!isHomePage) {
      // Navigate to home page first
      window.location.hash = '#/';
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const offsetTop = element.offsetTop - headerHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 200);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="dark-header">
      <Link 
        to="/" 
        className="dark-logo" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/a12kivud_LOGO%20simple%20big.jpg"
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
      </Link>
      
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
          href="#articles" 
          className="dark-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('articles');
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
        <Link 
          to="/blog" 
          className="dark-nav-link"
        >
          Blog
        </Link>
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