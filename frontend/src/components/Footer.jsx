import React from 'react';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-container" style={{ 
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 0 40px 0'
    }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Main Footer Content */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {/* Company Info */}
            <div>
              <h3 className="heading-2" style={{ 
                marginBottom: '20px',
                color: 'var(--brand-primary)'
              }}>
                Polymathic Futures
              </h3>
              
              <p className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Scientific Foresight for Cross-Industry Breakthroughs. 
                We create magazines from the future so you can own your story in tomorrow's world.
              </p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand-primary)';
                    e.target.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  <Linkedin size={20} />
                </a>
                
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand-primary)';
                    e.target.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  <Twitter size={20} />
                </a>
                
                <a
                  href="mailto:hello@polymathicfutures.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand-primary)';
                    e.target.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="heading-3" style={{ marginBottom: '20px' }}>
                Quick Links
              </h4>
              
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="#about"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </a>
                
                <a
                  href="#portfolio"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Portfolio
                </a>
                
                <a
                  href="#services"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Services
                </a>
                
                <a
                  href="#team"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Team
                </a>
                
                <a
                  href="#contact"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="heading-3" style={{ marginBottom: '20px' }}>
                Contact Info
              </h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={16} color="var(--brand-primary)" />
                  <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    contact@polymathicfutures.com
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={16} color="var(--brand-primary)" />
                  <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={16} color="var(--brand-primary)" />
                  <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Global • Remote–First
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div style={{ 
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p className="body-small" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} Polymathic Futures. All rights reserved.
            </p>
            
            <div style={{ display: 'flex', gap: '24px' }}>
              <a
                href="#"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                Privacy Policy
              </a>
              
              <a
                href="#"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;