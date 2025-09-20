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
          
          {/* Right side - Proper 3D Earth Globe */}
          <div style={{ 
            flex: 1,
            height: '700px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            perspective: '1000px'
          }}>
            <div 
              className="earth-globe-3d"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                position: 'relative',
                background: `
                  radial-gradient(circle at 30% 30%, 
                    rgba(255,255,255,0.6) 0%, 
                    rgba(255,255,255,0.2) 20%, 
                    transparent 50%
                  ),
                  radial-gradient(circle at 70% 70%, 
                    rgba(0,0,0,0.8) 0%, 
                    rgba(0,0,0,0.4) 40%, 
                    transparent 70%
                  ),
                  url('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.jpg')
                `,
                backgroundSize: '400% 200%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                boxShadow: `
                  inset -60px -60px 100px rgba(0, 0, 0, 0.8),
                  inset 30px 30px 60px rgba(255, 255, 255, 0.2),
                  0 0 80px rgba(0, 255, 209, 0.4),
                  0 0 120px rgba(0, 255, 209, 0.2),
                  0 20px 40px rgba(0, 0, 0, 0.5)
                `,
                cursor: 'pointer',
                transition: 'all 0.5s ease',
                transform: 'rotateX(15deg) rotateY(-10deg)',
                animation: 'slowEarthRotate 120s linear infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'rotateX(10deg) rotateY(-5deg) scale(1.1)';
                e.target.style.boxShadow = `
                  inset -60px -60px 100px rgba(0, 0, 0, 0.6),
                  inset 30px 30px 60px rgba(255, 255, 255, 0.3),
                  0 0 100px rgba(0, 255, 209, 0.6),
                  0 0 150px rgba(0, 255, 209, 0.3),
                  0 25px 50px rgba(0, 0, 0, 0.6)
                `;
                e.target.style.filter = 'brightness(1.2) contrast(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'rotateX(15deg) rotateY(-10deg) scale(1)';
                e.target.style.boxShadow = `
                  inset -60px -60px 100px rgba(0, 0, 0, 0.8),
                  inset 30px 30px 60px rgba(255, 255, 255, 0.2),
                  0 0 80px rgba(0, 255, 209, 0.4),
                  0 0 120px rgba(0, 255, 209, 0.2),
                  0 20px 40px rgba(0, 0, 0, 0.5)
                `;
                e.target.style.filter = 'brightness(1) contrast(1)';
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = 15 + (mouseY / rect.height) * -20;
                const rotateY = -10 + (mouseX / rect.width) * 20;
                
                e.target.style.transform = `
                  rotateX(${rotateX}deg) 
                  rotateY(${rotateY}deg) 
                  scale(1.1)
                `;
              }}
            >
              {/* Simple atmospheric glow */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                width: 'calc(100% + 20px)',
                height: 'calc(100% + 20px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, transparent 70%, rgba(0, 255, 209, 0.3) 85%, transparent 100%)',
                pointerEvents: 'none',
                animation: 'gentleGlow 3s ease-in-out infinite alternate'
              }} />
              
              {/* Water ripple on hover */}
              <div 
                className="simple-ripple"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0px',
                  height: '0px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 255, 209, 0.7)',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  opacity: 0
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