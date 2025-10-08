import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Calendar, Users } from 'lucide-react';

const HeroSection = () => {
  const handleScheduleConsultation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnership = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="dark-container" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="dark-full-container">
        <div style={{ 
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Full-width Hero Title */}
          <div style={{ 
            width: '100%',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h1 className="display-huge artistic-display" style={{ 
              marginBottom: '24px',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Scientific Foresight for Cross-Industry Breakthroughs
            </h1>
          </div>

          {/* Two-column content below title */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px'
          }}>
            {/* Left side - Content */}
            <div style={{ flex: 1, paddingRight: '40px' }}>
              <div style={{ marginBottom: '40px' }}>
              
              <p className="body-large" style={{ 
                marginBottom: '48px',
                maxWidth: '600px',
                color: 'var(--text-secondary)'
              }}>
                Imagine this — a magazine entirely about your company, but written from the future.
                A unique edition from 2035, 2040, or even 2060, where your innovations, products, and impact are already shaping the world.
                Crafted with scientific intelligence and narrative design, it turns your long-term strategy into stories that inspire teams, partners, and investors.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <button 
                className="btn-primary dark-button-animate"
                onClick={handleScheduleConsultation}
              >
                <Calendar size={20} />
                Schedule Consultation
                <ArrowRight size={16} />
              </button>
              
              <button 
                className="btn-secondary dark-button-animate"
                onClick={handlePartnership}
              >
                <Users size={20} />
                Partnership Inquiry
              </button>
            </div>
            
            {/* Tagline */}
            <div style={{ marginTop: '60px' }}>
              <p className="body-small" style={{ 
                color: 'var(--brand-primary)',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                WHERE DISCIPLINES CONVERGE • INNOVATION IS BORN
              </p>
            </div>
          </div>
          
          {/* Right side - Original 3D Spline Animation */}
          <div style={{ 
            flex: 1,
            height: '700px',
            width: '100%',
            overflow: 'visible',
            position: 'relative'
          }}>
            <Spline 
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              style={{ 
                width: '100%', 
                height: '100%',
                background: 'transparent'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;