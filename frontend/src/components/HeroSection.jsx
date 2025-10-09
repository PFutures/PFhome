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
            textAlign: 'left',
            marginBottom: '40px',
            paddingLeft: '0px'
          }}>
            <h1 className="display-huge artistic-display" style={{ 
              marginBottom: '24px',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              maxWidth: '100%'
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
              
              {/* Hero Hook - Large Impact Statement */}
              <div style={{
                marginBottom: '40px',
                maxWidth: '700px'
              }}>
                <p style={{ 
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: '300',
                  lineHeight: '1.3',
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  letterSpacing: '-0.02em'
                }}>
                  Imagine your company in{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, var(--brand-primary), #00b4d8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '600'
                  }}>
                    2035, 2040, or even 2060
                  </span>
                  {' '}— advancing innovation that truly matters.
                </p>
              </div>

              {/* Core Value Proposition */}
              <div style={{
                background: 'rgba(0, 255, 209, 0.03)',
                border: '1px solid rgba(0, 255, 209, 0.15)',
                borderRadius: '16px',
                padding: '40px',
                marginBottom: '40px',
                maxWidth: '700px',
                textAlign: 'center'
              }}>
                
                {/* Main Value Statement */}
                <p style={{
                  fontSize: '22px',
                  lineHeight: '1.5',
                  color: 'var(--text-primary)',
                  marginBottom: '32px',
                  fontWeight: '400'
                }}>
                  We help you explore the future of your company through{' '}
                  <span style={{ 
                    color: 'var(--brand-primary)',
                    fontWeight: '600'
                  }}>sci-fi prototyping</span> and{' '}
                  <span style={{ 
                    color: 'var(--brand-primary)',
                    fontWeight: '600'
                  }}>storytelling</span>.
                </p>

                {/* Methodology */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  padding: '24px',
                  borderRadius: '12px',
                  marginBottom: '32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px'
                  }}>
                    By combining{' '}
                    <span style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>foresight</span> and{' '}
                    <span style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>polymathic analysis</span>
                  </p>
                  
                  <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--brand-primary) 50%, transparent 100%)',
                    margin: '20px 0',
                    opacity: '0.5'
                  }} />
                  
                  <p style={{
                    fontSize: '20px',
                    lineHeight: '1.5',
                    color: 'var(--text-primary)',
                    margin: '0'
                  }}>
                    We empower leaders in{' '}
                    <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>strategy</span>,{' '}
                    <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>marketing</span>, and{' '}
                    <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>communications</span>{' '}
                    to <strong style={{ color: 'var(--brand-primary)' }}>inspire, lead, and change</strong>.
                  </p>
                </div>

              </div>
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
      </div>
    </section>
  );
};

export default HeroSection;