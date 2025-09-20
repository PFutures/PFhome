import React from 'react';
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
                Scientific Foresight for Cross-Industry Breakthroughs
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
          
          {/* Right side - Custom Earth Ball */}
          <div style={{ 
            flex: 1,
            height: '700px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div 
              className="earth-ball"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: `
                  radial-gradient(circle at 30% 30%, 
                    #4a90e2 0%, 
                    #2e5c8a 25%, 
                    #1e3a5f 50%, 
                    #0f1f3d 75%, 
                    #000814 100%
                  ),
                  conic-gradient(from 0deg, 
                    #4a90e2, #2e8b57, #8fbc8f, #4a90e2, 
                    #2e8b57, #4a90e2, #2e5c8a
                  )
                `,
                backgroundBlendMode: 'multiply',
                boxShadow: `
                  inset -40px -40px 80px rgba(0, 8, 20, 0.8),
                  inset 20px 20px 60px rgba(74, 144, 226, 0.3),
                  0 0 100px rgba(0, 255, 209, 0.4),
                  0 0 200px rgba(0, 255, 209, 0.2)
                `,
                cursor: 'pointer',
                transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                position: 'relative',
                transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg)',
                animation: 'earthRotate 20s linear infinite',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-10deg) scale(1.05)';
                e.target.style.boxShadow = `
                  inset -40px -40px 80px rgba(0, 8, 20, 0.6),
                  inset 20px 20px 60px rgba(74, 144, 226, 0.5),
                  0 0 120px rgba(0, 255, 209, 0.6),
                  0 0 240px rgba(0, 255, 209, 0.3)
                `;
                e.target.style.filter = 'brightness(1.2) contrast(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(-15deg) scale(1)';
                e.target.style.boxShadow = `
                  inset -40px -40px 80px rgba(0, 8, 20, 0.8),
                  inset 20px 20px 60px rgba(74, 144, 226, 0.3),
                  0 0 100px rgba(0, 255, 209, 0.4),
                  0 0 200px rgba(0, 255, 209, 0.2)
                `;
                e.target.style.filter = 'brightness(1) contrast(1)';
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / rect.height) * -20;
                const rotateY = (mouseX / rect.width) * 20;
                
                e.target.style.transform = `
                  perspective(1000px) 
                  rotateX(${10 + rotateX}deg) 
                  rotateY(${-15 + rotateY}deg) 
                  scale(1.05)
                `;
              }}
            >
              {/* Continents overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `
                  radial-gradient(ellipse 60px 40px at 25% 35%, #2e8b57 0%, transparent 50%),
                  radial-gradient(ellipse 80px 60px at 70% 25%, #228b22 0%, transparent 50%),
                  radial-gradient(ellipse 50px 70px at 45% 65%, #2e8b57 0%, transparent 50%),
                  radial-gradient(ellipse 40px 30px at 80% 70%, #228b22 0%, transparent 50%)
                `,
                opacity: 0.7,
                animation: 'continentShift 25s linear infinite'
              }} />
              
              {/* Atmospheric glow */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                width: 'calc(100% + 20px)',
                height: 'calc(100% + 20px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, transparent 70%, rgba(0, 255, 209, 0.3) 100%)',
                pointerEvents: 'none'
              }} />
              
              {/* Water ripple effect */}
              <div 
                className="water-ripple"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0px',
                  height: '0px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 255, 209, 0.6)',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  animation: 'ripple 3s infinite'
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