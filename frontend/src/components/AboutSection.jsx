import React from 'react';
import { Zap, Microscope, Lightbulb, Network } from 'lucide-react';

const AboutSection = () => {
  const convergenceAreas = [
    {
      icon: <Lightbulb size={32} />,
      title: "Future Design",
      description: "Making tomorrow's breakthroughs tangible today"
    },
    {
      icon: <Zap size={32} />,
      title: "Narrative Power",
      description: "Fiction that behaves like fact, stories that drive strategy"
    },
    {
      icon: <Microscope size={32} />,
      title: "Science & Strategy",
      description: "Where peer-reviewed research meets business innovation"
    },
    {
      icon: <Network size={32} />,
      title: "Cross-Sector Fusion",
      description: "Breaking silos to discover unexpected connections"
    }
  ];

  return (
    <section id="about" className="dark-container" style={{ padding: '160px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Main About Content */}
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 className="display-large" style={{ marginBottom: '32px' }}>
              At the intersection of science and strategy
            </h2>
            
            <p className="body-large" style={{ 
              marginBottom: '40px',
              maxWidth: '800px',
              margin: '0 auto 40px auto',
              color: 'var(--text-secondary)'
            }}>
              We design the next generation of products, partnerships, and markets — beyond industry borders.
            </p>
            
            <div style={{ 
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              padding: '40px',
              borderRadius: '0px',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <p className="body-medium" style={{ 
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: '1.6'
              }}>
                "Polymathic Futures works where disciplines entangle: when city streets are built from 
                self-healing materials, when chocolate molecules are re-engineered to deliver personalized 
                medicine, when culture and code fuse into markets no one has yet imagined."
              </p>
            </div>
          </div>
          
          {/* Convergence Areas Grid */}
          <div>
            <h3 className="heading-1" style={{ 
              textAlign: 'center', 
              marginBottom: '60px',
              color: 'var(--brand-primary)'
            }}>
              HOW WE WORK
            </h3>
            
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
              height: '600px'
            }}>
              {/* Central Hub */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: `
                  radial-gradient(circle, 
                    var(--brand-primary) 0%, 
                    rgba(0, 255, 209, 0.3) 70%, 
                    transparent 100%
                  )
                `,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(0, 255, 209, 0.4)',
                animation: 'gentleGlow 3s ease-in-out infinite alternate'
              }}>
                <span style={{
                  color: '#000000',
                  fontWeight: '600',
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  POLYMATHIC<br/>METHOD
                </span>
              </div>

              {/* Element 1 - Top */}
              <div
                className="method-element"
                style={{
                  position: 'absolute',
                  top: '0%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  textAlign: 'center',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  padding: '30px 20px',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Lightbulb size={28} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Future Design
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.4' }}>
                  Making tomorrow's breakthroughs tangible today
                </p>
              </div>

              {/* Element 2 - Right */}
              <div
                className="method-element"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '0%',
                  transform: 'translate(50%, -50%)',
                  width: '200px',
                  textAlign: 'center',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  padding: '30px 20px',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Zap size={28} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Narrative Power
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.4' }}>
                  Fiction that behaves like fact, stories that drive strategy
                </p>
              </div>

              {/* Element 3 - Bottom */}
              <div
                className="method-element"
                style={{
                  position: 'absolute',
                  bottom: '0%',
                  left: '50%',
                  transform: 'translate(-50%, 50%)',
                  width: '200px',
                  textAlign: 'center',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  padding: '30px 20px',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Microscope size={28} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Science & Strategy
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.4' }}>
                  Where peer-reviewed research meets business innovation
                </p>
              </div>

              {/* Element 4 - Left */}
              <div
                className="method-element"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  textAlign: 'center',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  padding: '30px 20px',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Network size={28} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Cross-Sector Fusion
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.4' }}>
                  Breaking silos to discover unexpected connections
                </p>
              </div>

              {/* Connecting Lines */}
              <svg style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
              }}>
                <defs>
                  <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 255, 209, 0.6)" />
                    <stop offset="100%" stopColor="rgba(0, 255, 209, 0.1)" />
                  </radialGradient>
                </defs>
                {/* Cross lines connecting all elements through center */}
                <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="15%" y1="50%" x2="85%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" />
                {/* Diagonal connections */}
                <line x1="35%" y1="35%" x2="65%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
                <line x1="65%" y1="35%" x2="35%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </div>
          
          {/* Why Us Section */}
          <div style={{ marginTop: '120px', textAlign: 'center' }}>
            <h3 className="heading-1" style={{ marginBottom: '40px' }}>
              Why Us?
            </h3>
            
            <p className="body-large" style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              marginBottom: '32px'
            }}>
              We are polymaths — scholars, scientists, strategists, and storytellers. 
              Our method braids peer-reviewed research, emergent technology scouting, 
              and narrative design into one act.
            </p>
            
            <p className="body-medium" style={{ 
              color: 'var(--text-muted)',
              marginBottom: '40px'
            }}>
              Where consultancies offer scenarios, we deliver fiction that behaves like fact.
            </p>
            
            <div style={{ 
              background: 'var(--brand-primary)',
              color: '#000000',
              padding: '32px 48px',
              borderRadius: '0px',
              display: 'inline-block',
              fontWeight: '500',
              fontSize: '20px'
            }}>
              Every company will face the future. Few will own their story in it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;