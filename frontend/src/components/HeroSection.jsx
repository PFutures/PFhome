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
          
          {/* Right side - Spectacular Animated Sphere */}
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
            {/* Main Container */}
            <div 
              className="spectacular-sphere-container"
              style={{
                width: '450px',
                height: '450px',
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const container = e.currentTarget;
                container.style.transform = 'scale(1.1)';
                const sphere = container.querySelector('.main-sphere');
                if (sphere) {
                  sphere.style.animationDuration = '8s';
                  sphere.style.filter = 'brightness(1.4) contrast(1.2) saturate(1.3)';
                }
              }}
              onMouseLeave={(e) => {
                const container = e.currentTarget;
                container.style.transform = 'scale(1)';
                const sphere = container.querySelector('.main-sphere');
                if (sphere) {
                  sphere.style.animationDuration = '20s';
                  sphere.style.filter = 'brightness(1) contrast(1) saturate(1)';
                }
              }}
            >
              {/* Outer Energy Ring */}
              <div 
                className="energy-ring-outer"
                style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  width: 'calc(100% + 60px)',
                  height: 'calc(100% + 60px)',
                  borderRadius: '50%',
                  background: `
                    conic-gradient(from 0deg, 
                      transparent, 
                      rgba(0, 255, 209, 0.4), 
                      transparent, 
                      rgba(0, 191, 255, 0.3), 
                      transparent, 
                      rgba(0, 255, 209, 0.4), 
                      transparent
                    )
                  `,
                  animation: 'energyRingRotate 12s linear infinite',
                  filter: 'blur(2px)'
                }}
              />

              {/* Inner Energy Ring */}
              <div 
                className="energy-ring-inner"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  width: 'calc(100% + 30px)',
                  height: 'calc(100% + 30px)',
                  borderRadius: '50%',
                  background: `
                    conic-gradient(from 180deg, 
                      transparent, 
                      rgba(0, 255, 209, 0.6), 
                      transparent, 
                      rgba(135, 206, 235, 0.4), 
                      transparent
                    )
                  `,
                  animation: 'energyRingRotate 8s linear infinite reverse',
                  filter: 'blur(1px)'
                }}
              />

              {/* Main Earth Sphere - True 3D Rotating Globe */}
              <div 
                className="main-sphere"
                style={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50px',
                  left: '50px',
                  background: `
                    radial-gradient(circle at 25% 25%, 
                      rgba(255, 255, 255, 0.4) 0%, 
                      rgba(255, 255, 255, 0.1) 15%, 
                      transparent 35%
                    ),
                    radial-gradient(circle at 75% 75%, 
                      rgba(0, 0, 0, 0.8) 0%, 
                      rgba(0, 0, 0, 0.4) 25%, 
                      transparent 50%
                    ),
                    url('https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.jpg')
                  `,
                  backgroundSize: '200% 100%',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'repeat-x',
                  boxShadow: `
                    inset -120px -120px 200px rgba(0, 0, 0, 0.9),
                    inset 60px 60px 120px rgba(255, 255, 255, 0.15),
                    0 0 120px rgba(0, 255, 209, 0.8),
                    0 0 200px rgba(0, 255, 209, 0.4),
                    0 30px 60px rgba(0, 0, 0, 0.7)
                  `,
                  animation: 'trueGlobeRotate 60s linear infinite, earthPulse 25s ease-in-out infinite',
                  transition: 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)',
                  overflow: 'hidden',
                  transform: 'rotateX(15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Earth's Atmosphere Layer */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  width: 'calc(100% + 16px)',
                  height: 'calc(100% + 16px)',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle, 
                      transparent 70%, 
                      rgba(135, 206, 235, 0.3) 75%, 
                      rgba(0, 191, 255, 0.2) 85%, 
                      transparent 100%
                    )
                  `,
                  pointerEvents: 'none',
                  animation: 'atmosphereGlow 8s ease-in-out infinite alternate'
                }} />

                {/* Realistic Cloud Layer - Rotating with Globe */}
                <div 
                  className="cloud-layer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `
                      radial-gradient(ellipse 140px 70px at 15% 30%, rgba(255,255,255,0.6) 0%, transparent 70%),
                      radial-gradient(ellipse 100px 50px at 65% 25%, rgba(255,255,255,0.5) 0%, transparent 70%),
                      radial-gradient(ellipse 120px 60px at 35% 65%, rgba(255,255,255,0.55) 0%, transparent 70%),
                      radial-gradient(ellipse 80px 40px at 85% 15%, rgba(255,255,255,0.4) 0%, transparent 70%),
                      radial-gradient(ellipse 110px 55px at 10% 80%, rgba(255,255,255,0.5) 0%, transparent 70%),
                      radial-gradient(ellipse 90px 45px at 75% 75%, rgba(255,255,255,0.45) 0%, transparent 70%)
                    `,
                    opacity: 0.8,
                    animation: 'cloudRotate 80s linear infinite',
                    pointerEvents: 'none',
                    transform: 'rotateY(0deg)'
                  }}
                />

                {/* City Lights Layer - Rotating with Globe */}
                <div 
                  className="city-lights-layer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `
                      radial-gradient(ellipse 4px 2px at 25% 45%, rgba(255, 255, 150, 0.8) 0%, transparent 70%),
                      radial-gradient(ellipse 3px 2px at 30% 50%, rgba(255, 255, 100, 0.7) 0%, transparent 70%),
                      radial-gradient(ellipse 2px 1px at 35% 40%, rgba(255, 255, 200, 0.6) 0%, transparent 70%),
                      radial-gradient(ellipse 5px 3px at 28% 60%, rgba(255, 255, 150, 0.5) 0%, transparent 70%),
                      radial-gradient(ellipse 3px 2px at 32% 35%, rgba(255, 255, 180, 0.6) 0%, transparent 70%)
                    `,
                    opacity: 0.7,
                    animation: 'cityLightsRotate 90s linear infinite',
                    pointerEvents: 'none',
                    transform: 'rotateY(0deg)'
                  }}
                />

                {/* Hyperrealistic Sun Reflection */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '15%',
                  width: '45%',
                  height: '45%',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(ellipse at center, 
                      rgba(255, 255, 255, 0.9) 0%, 
                      rgba(255, 255, 255, 0.6) 20%, 
                      rgba(255, 255, 255, 0.3) 40%, 
                      rgba(255, 255, 255, 0.1) 60%, 
                      transparent 80%
                    )
                  `,
                  filter: 'blur(12px)',
                  animation: 'sunReflection 30s ease-in-out infinite',
                  pointerEvents: 'none'
                }} />

                {/* Ocean Shimmer Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(ellipse 60px 30px at 40% 35%, rgba(0, 191, 255, 0.3) 0%, transparent 70%),
                    radial-gradient(ellipse 80px 40px at 60% 55%, rgba(0, 206, 209, 0.2) 0%, transparent 70%),
                    radial-gradient(ellipse 50px 25px at 25% 70%, rgba(135, 206, 235, 0.25) 0%, transparent 70%)
                  `,
                  opacity: 0.6,
                  animation: 'oceanShimmer 25s ease-in-out infinite',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Floating Particles */}
              <div className="particle particle-1" style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 209, 0.8)',
                top: '20%',
                left: '15%',
                animation: 'particleFloat1 12s ease-in-out infinite',
                boxShadow: '0 0 10px rgba(0, 255, 209, 0.8)'
              }} />

              <div className="particle particle-2" style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                borderRadius: '50%',
                background: 'rgba(135, 206, 235, 0.9)',
                top: '60%',
                right: '20%',
                animation: 'particleFloat2 15s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(135, 206, 235, 0.8)'
              }} />

              <div className="particle particle-3" style={{
                position: 'absolute',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'rgba(0, 191, 255, 0.7)',
                top: '80%',
                left: '30%',
                animation: 'particleFloat3 10s ease-in-out infinite',
                boxShadow: '0 0 12px rgba(0, 191, 255, 0.7)'
              }} />

              <div className="particle particle-4" style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 209, 1)',
                top: '35%',
                right: '10%',
                animation: 'particleFloat4 14s ease-in-out infinite',
                boxShadow: '0 0 6px rgba(0, 255, 209, 1)'
              }} />

              {/* Dynamic Ripples */}
              <div 
                className="dynamic-ripple-1"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0px',
                  height: '0px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 255, 209, 0.6)',
                  transform: 'translate(-50%, -50%)',
                  animation: 'dynamicRipple 8s ease-out infinite',
                  pointerEvents: 'none'
                }}
              />

              <div 
                className="dynamic-ripple-2"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0px',
                  height: '0px',
                  borderRadius: '50%',
                  border: '1px solid rgba(135, 206, 235, 0.4)',
                  transform: 'translate(-50%, -50%)',
                  animation: 'dynamicRipple 8s ease-out infinite 2s',
                  pointerEvents: 'none'
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