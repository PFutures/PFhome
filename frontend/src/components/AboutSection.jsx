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
          
          {/* HOW WE WORK - Elegant Timeline Design */}
          <div>
            <h3 className="heading-1" style={{ 
              textAlign: 'center', 
              marginBottom: '80px',
              color: 'var(--brand-primary)',
              position: 'relative'
            }}>
              HOW WE WORK
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, var(--brand-primary) 50%, transparent 100%)',
                animation: 'lineGlow 3s ease-in-out infinite'
              }} />
            </h3>
            
            {/* Sophisticated Flow Container */}
            <div style={{ 
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative',
              padding: '60px 0'
            }}>
              
              {/* Background Ambient Effects */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `
                  radial-gradient(circle at 20% 30%, rgba(0, 255, 209, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(0, 255, 209, 0.05) 0%, transparent 60%),
                  radial-gradient(circle at 50% 50%, rgba(0, 255, 209, 0.02) 0%, transparent 40%)
                `,
                animation: 'ambientFlow 12s ease-in-out infinite',
                zIndex: 0
              }} />

              {/* Central Timeline Spine */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '60%',
                background: 'linear-gradient(180deg, transparent 0%, var(--brand-primary) 20%, var(--brand-primary) 80%, transparent 100%)',
                opacity: 0.6,
                zIndex: 1
              }} />

              {/* Elegant Method Cards */}
              {convergenceAreas.map((area, index) => {
                const positions = [
                  { top: '0%', left: index % 2 === 0 ? '5%' : '55%', delay: 0 },
                  { top: '25%', left: index % 2 === 0 ? '55%' : '5%', delay: 0.2 },
                  { top: '50%', left: index % 2 === 0 ? '5%' : '55%', delay: 0.4 },
                  { top: '75%', left: index % 2 === 0 ? '55%' : '5%', delay: 0.6 }
                ];
                
                return (
                  <div
                    key={index}
                    className="method-card"
                    style={{
                      position: 'absolute',
                      top: positions[index].top,
                      left: positions[index].left,
                      width: '420px',
                      padding: '40px 35px',
                      background: `
                        linear-gradient(135deg, 
                          rgba(18, 18, 18, 0.95) 0%, 
                          rgba(18, 18, 18, 0.85) 100%
                        )
                      `,
                      border: '1px solid rgba(0, 255, 209, 0.15)',
                      borderRadius: '16px',
                      backdropFilter: 'blur(20px)',
                      boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                      cursor: 'pointer',
                      zIndex: 10,
                      animation: `methodCardAppear 0.8s ease-out ${positions[index].delay}s both`,
                      transformOrigin: index % 2 === 0 ? 'left center' : 'right center'
                    }}
                  >
                    {/* Card Glow Effect */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.1) 0%, transparent 50%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none'
                    }} className="card-glow" />
                    
                    {/* Method Icon with Sophisticated Animation */}
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '24px'
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '12px',
                        background: `
                          linear-gradient(135deg, 
                            rgba(0, 255, 209, 0.15) 0%, 
                            rgba(0, 255, 209, 0.05) 100%
                          )
                        `,
                        border: '1px solid rgba(0, 255, 209, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-primary)',
                        marginRight: '20px',
                        transition: 'all 0.4s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }} className="method-icon">
                        {/* Icon shimmer effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          width: '200%',
                          height: '200%',
                          background: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 209, 0.1) 50%, transparent 70%)',
                          animation: 'iconShimmer 3s ease-in-out infinite',
                          animationDelay: `${index * 0.5}s`
                        }} />
                        {area.icon}
                      </div>
                      
                      {/* Method Title */}
                      <div>
                        <h4 className="heading-2" style={{ 
                          marginBottom: '8px',
                          fontSize: '22px',
                          fontWeight: '600',
                          background: 'linear-gradient(135deg, var(--text-primary) 0%, rgba(0, 255, 209, 0.8) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {area.title}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Method Description */}
                    <p className="body-medium" style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      {area.description}
                    </p>

                    {/* Connection Line to Center */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      [index % 2 === 0 ? 'right' : 'left']: '-60px',
                      width: '60px',
                      height: '1px',
                      background: `linear-gradient(${index % 2 === 0 ? '90deg' : '-90deg'}, rgba(0, 255, 209, 0.4) 0%, transparent 100%)`,
                      transform: 'translateY(-50%)',
                      opacity: 0.6,
                      animation: `connectionPulse 2s ease-in-out infinite ${index * 0.3}s`
                    }} />
                  </div>
                );
              })}

              {/* Central Convergence Hub */}
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
                    rgba(0, 255, 209, 0.2) 0%, 
                    rgba(0, 255, 209, 0.1) 40%, 
                    transparent 70%
                  )
                `,
                border: '2px solid rgba(0, 255, 209, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'hubPulse 4s ease-in-out infinite',
                zIndex: 5
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `
                    linear-gradient(135deg, 
                      rgba(0, 255, 209, 0.15) 0%, 
                      rgba(0, 255, 209, 0.05) 100%
                    )
                  `,
                  border: '1px solid rgba(0, 255, 209, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--brand-primary)',
                  textAlign: 'center',
                  animation: 'hubRotate 20s linear infinite'
                }}>
                  CONVERGENCE
                </div>
              </div>
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