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
          
          {/* Right side - 3D Earth Globe */}
          <div style={{ 
            flex: 1,
            height: '700px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            perspective: '1200px'
          }}>
            <div 
              className="earth-3d-container"
              style={{
                width: '400px',
                height: '400px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                animation: 'rotate3D 60s linear infinite'
              }}
            >
              {/* Main Earth Sphere */}
              <div 
                className="earth-sphere"
                style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  background: `
                    radial-gradient(circle at 25% 25%, 
                      rgba(255,255,255,0.8) 0%, 
                      rgba(255,255,255,0.4) 15%, 
                      rgba(255,255,255,0.1) 25%, 
                      transparent 40%
                    ),
                    radial-gradient(circle at 75% 75%, 
                      rgba(0,0,0,0.6) 0%, 
                      rgba(0,0,0,0.3) 30%, 
                      transparent 50%
                    ),
                    url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg')
                  `,
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% center',
                  backgroundRepeat: 'no-repeat',
                  boxShadow: `
                    inset -100px -100px 150px rgba(0, 0, 0, 0.9),
                    inset 60px 60px 100px rgba(255, 255, 255, 0.15),
                    0 0 120px rgba(0, 255, 209, 0.5),
                    0 0 200px rgba(0, 255, 209, 0.3),
                    0 30px 60px rgba(0, 0, 0, 0.6)
                  `,
                  cursor: 'pointer',
                  transition: 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)',
                  transform: 'rotateX(15deg) rotateY(-20deg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateX(10deg) rotateY(-15deg) scale(1.15)';
                  e.currentTarget.style.boxShadow = `
                    inset -100px -100px 150px rgba(0, 0, 0, 0.7),
                    inset 60px 60px 100px rgba(255, 255, 255, 0.25),
                    0 0 150px rgba(0, 255, 209, 0.7),
                    0 0 300px rgba(0, 255, 209, 0.4),
                    0 40px 80px rgba(0, 0, 0, 0.7)
                  `;
                  e.currentTarget.style.filter = 'brightness(1.4) contrast(1.3) saturate(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(15deg) rotateY(-20deg) scale(1)';
                  e.currentTarget.style.boxShadow = `
                    inset -100px -100px 150px rgba(0, 0, 0, 0.9),
                    inset 60px 60px 100px rgba(255, 255, 255, 0.15),
                    0 0 120px rgba(0, 255, 209, 0.5),
                    0 0 200px rgba(0, 255, 209, 0.3),
                    0 30px 60px rgba(0, 0, 0, 0.6)
                  `;
                  e.currentTarget.style.filter = 'brightness(1) contrast(1) saturate(1)';
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  const mouseX = e.clientX - centerX;
                  const mouseY = e.clientY - centerY;
                  
                  const rotateX = 15 + (mouseY / rect.height) * -40;
                  const rotateY = -20 + (mouseX / rect.width) * 40;
                  
                  e.currentTarget.style.transform = `
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    scale(1.15)
                  `;
                  
                  // Create dynamic water ripple
                  const ripples = e.currentTarget.querySelectorAll('.water-ripple');
                  ripples.forEach((ripple, index) => {
                    setTimeout(() => {
                      ripple.style.animation = 'none';
                      ripple.offsetHeight;
                      ripple.style.animation = 'ripple3D 2.5s ease-out';
                    }, index * 200);
                  });
                }}
              >
                {/* 3D Atmospheric Layers */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: 'calc(100% + 40px)',
                  height: 'calc(100% + 40px)',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 30% 30%, 
                      rgba(135, 206, 235, 0.4) 0%, 
                      rgba(100, 149, 237, 0.3) 30%, 
                      rgba(0, 255, 209, 0.2) 60%, 
                      transparent 80%
                    )
                  `,
                  pointerEvents: 'none',
                  animation: 'atmospherePulse 6s ease-in-out infinite alternate',
                  transform: 'translateZ(20px)'
                }} />
                
                {/* Outer Atmosphere */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  left: '-40px',
                  width: 'calc(100% + 80px)',
                  height: 'calc(100% + 80px)',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle, 
                      transparent 60%, 
                      rgba(0, 191, 255, 0.15) 70%, 
                      rgba(0, 255, 209, 0.1) 85%, 
                      transparent 100%
                    )
                  `,
                  pointerEvents: 'none',
                  animation: 'outerAtmosphere 8s ease-in-out infinite alternate',
                  transform: 'translateZ(30px)'
                }} />
                
                {/* Dynamic Cloud Layer */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(ellipse 120px 60px at 20% 25%, rgba(255,255,255,0.4) 0%, transparent 70%),
                    radial-gradient(ellipse 80px 40px at 75% 35%, rgba(255,255,255,0.3) 0%, transparent 70%),
                    radial-gradient(ellipse 100px 50px at 40% 70%, rgba(255,255,255,0.35) 0%, transparent 70%),
                    radial-gradient(ellipse 60px 30px at 85% 15%, rgba(255,255,255,0.25) 0%, transparent 70%),
                    radial-gradient(ellipse 90px 45px at 10% 80%, rgba(255,255,255,0.3) 0%, transparent 70%)
                  `,
                  opacity: 0.7,
                  animation: 'cloudFlow 45s linear infinite',
                  pointerEvents: 'none',
                  transform: 'translateZ(10px)'
                }} />
                
                {/* Specular Highlight */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '20%',
                  width: '35%',
                  height: '35%',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle, 
                      rgba(255,255,255,0.6) 0%, 
                      rgba(255,255,255,0.3) 30%, 
                      rgba(255,255,255,0.1) 60%, 
                      transparent 100%
                    )
                  `,
                  pointerEvents: 'none',
                  filter: 'blur(15px)',
                  transform: 'translateZ(15px)',
                  animation: 'specularShine 4s ease-in-out infinite alternate'
                }} />
                
                {/* Multiple Water Ripples */}
                <div 
                  className="water-ripple"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '0px',
                    height: '0px',
                    borderRadius: '50%',
                    border: '3px solid rgba(0, 255, 209, 0.8)',
                    transform: 'translate(-50%, -50%) translateZ(25px)',
                    pointerEvents: 'none'
                  }}
                />
                
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
                    transform: 'translate(-50%, -50%) translateZ(20px)',
                    pointerEvents: 'none'
                  }}
                />
                
                <div 
                  className="water-ripple"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '0px',
                    height: '0px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 255, 209, 0.4)',
                    transform: 'translate(-50%, -50%) translateZ(15px)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;