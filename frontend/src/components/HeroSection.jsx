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
          display: 'flex', 
          alignItems: 'center', 
          minHeight: 'calc(100vh - 80px)',
          gap: '60px'
        }}>
          {/* Left side - Content */}
          <div style={{ flex: 1, paddingRight: '40px' }}>
            <div style={{ marginBottom: '40px' }}>
              <h1 className="display-huge" style={{ marginBottom: '24px' }}>
                Sci-fi prototyping for cross-industry breakthroughs
              </h1>
              
              <p className="body-large" style={{ 
                marginBottom: '32px',
                maxWidth: '600px',
                color: 'var(--text-secondary)'
              }}>
                Imagine holding a magazine from 2040. We create literal magazines from the future, 
                written as if your company's breakthroughs already happened. The future isn't vague anymore—it's tangible.
              </p>
              
              <p className="body-medium" style={{ 
                marginBottom: '48px',
                maxWidth: '580px',
                color: 'var(--text-muted)'
              }}>
                Every company will face the future, but most won't own their story in it. 
                This is how you get there first.
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
          
          {/* Right side - 3D Spline */}
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