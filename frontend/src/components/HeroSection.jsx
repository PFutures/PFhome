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
                  {' '}— shaping the world with groundbreaking innovations!
                </p>
              </div>

              {/* Value Proposition Grid */}
              <div style={{
                background: 'rgba(0, 255, 209, 0.03)',
                border: '1px solid rgba(0, 255, 209, 0.15)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '40px',
                maxWidth: '700px'
              }}>
                
                {/* What We Do */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--brand-primary)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🚀</span> What We Do
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: 'var(--text-primary)',
                    marginBottom: '20px'
                  }}>
                    We help you explore that future and tell its story — through{' '}
                    <span style={{ 
                      background: 'rgba(0, 255, 209, 0.2)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: '500'
                    }}>magazines</span>,{' '}
                    <span style={{ 
                      background: 'rgba(0, 255, 209, 0.2)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: '500'
                    }}>workshops</span>, or{' '}
                    <span style={{ 
                      background: 'rgba(0, 255, 209, 0.2)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: '500'
                    }}>one-to-one sessions</span>.
                  </p>
                </div>

                {/* How We Do It */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--brand-primary)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🧬</span> How We Do It
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '12px'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Scientific Foresight
                      </span>
                    </div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Polymathic Analysis
                      </span>
                    </div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Creative Storytelling
                      </span>
                    </div>
                  </div>
                </div>

                {/* The Impact */}
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--brand-primary)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>⚡</span> The Impact
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: 'var(--text-primary)',
                    marginBottom: '16px'
                  }}>
                    We create narratives that <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>inspire</span>,{' '}
                    <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>engage</span>, and{' '}
                    <span style={{ color: 'var(--brand-primary)', fontWeight: '600' }}>persuade</span>.
                  </p>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.1) 0%, rgba(0, 255, 209, 0.05) 100%)',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    border: '1px solid rgba(0, 255, 209, 0.2)'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      color: 'var(--brand-primary)',
                      fontWeight: '500',
                      margin: '0',
                      textAlign: 'center'
                    }}>
                      Perfect for strategy • marketing • communication
                    </p>
                  </div>
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