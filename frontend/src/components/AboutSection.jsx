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
              We design the next generation of products, partnerships, and markets – beyond industry borders.
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
              maxWidth: '1000px',
              margin: '0 auto',
              position: 'relative',
              height: '500px',
              overflow: 'hidden'
            }}>
              {/* Animated Background Grid */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(0, 255, 209, 0.1) 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, rgba(0, 255, 209, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                animation: 'networkPulse 8s ease-in-out infinite',
                opacity: 0.3
              }} />

              {/* Connection Network SVG */}
              <svg style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
              }}>
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 255, 209, 0.6)" />
                    <stop offset="50%" stopColor="rgba(0, 255, 209, 0.3)" />
                    <stop offset="100%" stopColor="rgba(0, 255, 209, 0.1)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main connecting lines */}
                <path d="M 200 150 Q 400 100 600 150 Q 700 300 600 350 Q 400 400 200 350 Q 100 300 200 150" 
                      stroke="url(#connectionGradient)" 
                      strokeWidth="2" 
                      fill="none" 
                      filter="url(#glow)"
                      className="connection-path" />
                
                {/* Cross connections */}
                <line x1="200" y1="150" x2="600" y2="350" stroke="rgba(0, 255, 209, 0.2)" strokeWidth="1" className="cross-connection" />
                <line x1="600" y1="150" x2="200" y2="350" stroke="rgba(0, 255, 209, 0.2)" strokeWidth="1" className="cross-connection" />
                
                {/* Data flow particles */}
                <circle r="3" fill="var(--brand-primary)" className="flow-particle">
                  <animateMotion dur="8s" repeatCount="indefinite">
                    <mpath href="#connectionPath"/>
                  </animateMotion>
                </circle>
                
                <path id="connectionPath" d="M 200 150 Q 400 100 600 150 Q 700 300 600 350 Q 400 400 200 350 Q 100 300 200 150" 
                      stroke="none" fill="none" />
              </svg>

              {/* Element 1 - Top Left: Future Design */}
              <div
                className="network-element"
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '15%',
                  width: '220px',
                  textAlign: 'center',
                  background: `
                    linear-gradient(135deg, 
                      var(--bg-secondary) 0%, 
                      rgba(0, 255, 209, 0.05) 100%
                    )
                  `,
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                  cursor: 'pointer',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <Lightbulb size={32} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Future Design
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  Making tomorrow's breakthroughs tangible today
                </p>
              </div>

              {/* Element 2 - Top Right: Narrative Power */}
              <div
                className="network-element"
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '15%',
                  width: '220px',
                  textAlign: 'center',
                  background: `
                    linear-gradient(135deg, 
                      var(--bg-secondary) 0%, 
                      rgba(0, 255, 209, 0.05) 100%
                    )
                  `,
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                  cursor: 'pointer',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Zap size={32} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Narrative Power
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  Fiction that behaves like fact, stories that drive strategy
                </p>
              </div>

              {/* Element 3 - Bottom Left: Cross-Sector Fusion */}
              <div
                className="network-element"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '15%',
                  width: '220px',
                  textAlign: 'center',
                  background: `
                    linear-gradient(135deg, 
                      var(--bg-secondary) 0%, 
                      rgba(0, 255, 209, 0.05) 100%
                    )
                  `,
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                  cursor: 'pointer',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Network size={32} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Cross-Sector Fusion
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  Breaking silos to discover unexpected connections
                </p>
              </div>

              {/* Element 4 - Bottom Right: Science & Strategy */}
              <div
                className="network-element"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '15%',
                  width: '220px',
                  textAlign: 'center',
                  background: `
                    linear-gradient(135deg, 
                      var(--bg-secondary) 0%, 
                      rgba(0, 255, 209, 0.05) 100%
                    )
                  `,
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '25px 20px',
                  transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                  cursor: 'pointer',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Microscope size={32} />
                </div>
                <h4 className="heading-3" style={{ marginBottom: '12px', fontSize: '18px' }}>
                  Science & Strategy
                </h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.5' }}>
                  Where peer-reviewed research meets business innovation
                </p>
              </div>

              {/* Central Intersection Point */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `
                  radial-gradient(circle, 
                    var(--brand-primary) 0%, 
                    rgba(0, 255, 209, 0.3) 60%, 
                    transparent 100%
                  )
                `,
                animation: 'centralPulse 4s ease-in-out infinite',
                filter: 'blur(15px)',
                zIndex: 0
              }} />
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
              We are polymaths – scholars, scientists, strategists, and storytellers. 
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
              This magazine is your invitation to imagine – and then to act.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;