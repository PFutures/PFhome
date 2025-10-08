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
              
              {/* Opening Hook */}
              <p className="body-large" style={{ 
                marginBottom: '24px',
                maxWidth: '650px',
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                fontWeight: '500',
                lineHeight: '1.4'
              }}>
                Imagine your company in 2035, 2040, or even 2060 — where your innovations are already transforming the world.
              </p>
              
              {/* Main Content */}
              <div style={{ 
                marginBottom: '32px',
                maxWidth: '650px'
              }}>
                <p className="body-large" style={{ 
                  marginBottom: '20px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  We help you explore that future and tell its story — through a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>printed magazine</span>, a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>short movie</span>, a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>workshop</span>, or even a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>one-to-one brainstorming session</span>.
                </p>
                
                <p className="body-large" style={{ 
                  marginBottom: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  The results we deliver are <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>sci-fi prototypes of the future</span> — tangible artifacts that bring vision to life.
                </p>
                
                <p className="body-large" style={{ 
                  marginBottom: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Sometimes it's a beautifully crafted <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>magazine</span>, created as a single, collectible piece for presentations, exhibitions, leadership retreats, or visionary launches.
                </p>
                
                <p className="body-large" style={{ 
                  marginBottom: '20px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Other times, it takes the form of a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>short film</span>, an <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>immersive workshop</span>, or a <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>one-to-one brainstorming journey</span> — each designed to make the future feel real, here and now.
                </p>
                
                <p className="body-medium" style={{ 
                  color: 'var(--brand-primary)',
                  fontWeight: '500',
                  fontStyle: 'italic',
                  lineHeight: '1.5'
                }}>
                  Powerful tools for strategy, marketing, and communication, giving your company a unique voice in shaping what's ahead.
                </p>
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