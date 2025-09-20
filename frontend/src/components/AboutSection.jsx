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
          
          {/* HOW WE WORK - Clear Visual Hierarchy */}
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
            
            {/* Modern Grid Layout */}
            <div style={{ 
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              padding: '0 20px'
            }}>
              
              {convergenceAreas.map((area, index) => (
                <div
                  key={index}
                  className="process-card"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(18, 18, 18, 0.9) 0%, 
                        rgba(25, 25, 25, 0.8) 100%
                      )
                    `,
                    border: '1px solid rgba(0, 255, 209, 0.2)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                    cursor: 'pointer',
                    animation: `cardSlideIn 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      radial-gradient(circle at top right, rgba(0, 255, 209, 0.05) 0%, transparent 60%),
                      linear-gradient(135deg, transparent 0%, rgba(0, 255, 209, 0.02) 100%)
                    `,
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                  }} className="card-bg-pattern" />

                  {/* Process Number */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 209, 0.1)',
                    border: '1px solid rgba(0, 255, 209, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--brand-primary)'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Icon Container */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: `
                      linear-gradient(135deg, 
                        rgba(0, 255, 209, 0.15) 0%, 
                        rgba(0, 255, 209, 0.05) 100%
                      )
                    `,
                    border: '1px solid rgba(0, 255, 209, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                    marginBottom: '30px',
                    position: 'relative',
                    transition: 'all 0.4s ease'
                  }} className="process-icon">
                    {/* Icon Glow */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '16px',
                      background: 'rgba(0, 255, 209, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      animation: `iconPulse 3s ease-in-out infinite ${index * 0.5}s`
                    }} />
                    {area.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="heading-2" style={{ 
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    lineHeight: '1.3'
                  }}>
                    {area.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '17px',
                    lineHeight: '1.7',
                    marginBottom: '25px'
                  }}>
                    {area.description}
                  </p>

                  {/* Process Flow Arrow */}
                  {index < convergenceAreas.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '2px',
                      height: '40px',
                      background: 'linear-gradient(180deg, var(--brand-primary) 0%, transparent 100%)',
                      opacity: 0.6
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderTop: '8px solid var(--brand-primary)',
                        opacity: 0.8
                      }} />
                    </div>
                  )}

                  {/* Interaction Indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--brand-primary)',
                    opacity: 0.6,
                    animation: `indicatorPulse 2s ease-in-out infinite ${index * 0.2}s`
                  }} />
                </div>
              ))}
            </div>

            {/* Process Flow Summary */}
            <div style={{
              textAlign: 'center',
              marginTop: '80px',
              padding: '40px',
              background: 'rgba(0, 255, 209, 0.03)',
              border: '1px solid rgba(0, 255, 209, 0.1)',
              borderRadius: '16px',
              maxWidth: '800px',
              margin: '80px auto 0 auto'
            }}>
              <h4 className="heading-2" style={{ 
                marginBottom: '20px',
                color: 'var(--brand-primary)'
              }}>
                The Polymathic Process
              </h4>
              <p className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                fontSize: '16px',
                lineHeight: '1.6'
              }}>
                Our methodology seamlessly weaves together these four disciplines, creating a unified approach 
                where science fiction becomes strategic reality. Each process feeds into the next, generating 
                breakthrough innovations that transcend traditional industry boundaries.
              </p>
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