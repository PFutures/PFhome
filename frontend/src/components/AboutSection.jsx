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
            
            {/* Compact 2x2 Square Layout with Connections */}
            <div style={{ 
              maxWidth: '900px',
              margin: '0 auto',
              position: 'relative',
              padding: '0 20px'
            }}>
              
              {/* Animated Connection Network */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                zIndex: 1
              }}>
                <svg style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute'
                }}>
                  <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 255, 209, 0.6)" />
                      <stop offset="50%" stopColor="rgba(0, 255, 209, 0.3)" />
                      <stop offset="100%" stopColor="rgba(0, 255, 209, 0.1)" />
                    </linearGradient>
                    <filter id="lineGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Horizontal connection lines */}
                  <line 
                    x1="45%" y1="35%" 
                    x2="55%" y2="35%" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="2" 
                    filter="url(#lineGlow)"
                    className="connection-line horizontal-top"
                  />
                  <line 
                    x1="45%" y1="65%" 
                    x2="55%" y2="65%" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="2" 
                    filter="url(#lineGlow)"
                    className="connection-line horizontal-bottom"
                  />
                  
                  {/* Vertical connection lines */}
                  <line 
                    x1="25%" y1="45%" 
                    x2="25%" y2="55%" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="2" 
                    filter="url(#lineGlow)"
                    className="connection-line vertical-left"
                  />
                  <line 
                    x1="75%" y1="45%" 
                    x2="75%" y2="55%" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="2" 
                    filter="url(#lineGlow)"
                    className="connection-line vertical-right"
                  />
                  
                  {/* Cross connections */}
                  <line 
                    x1="40%" y1="40%" 
                    x2="60%" y2="60%" 
                    stroke="rgba(0, 255, 209, 0.2)" 
                    strokeWidth="1" 
                    className="cross-connection diagonal-1"
                  />
                  <line 
                    x1="60%" y1="40%" 
                    x2="40%" y2="60%" 
                    stroke="rgba(0, 255, 209, 0.2)" 
                    strokeWidth="1" 
                    className="cross-connection diagonal-2"
                  />
                  
                  {/* Central convergence point */}
                  <circle 
                    cx="50%" 
                    cy="50%" 
                    r="8" 
                    fill="rgba(0, 255, 209, 0.4)" 
                    stroke="rgba(0, 255, 209, 0.6)" 
                    strokeWidth="2"
                    className="convergence-point"
                  />
                  
                  {/* Flowing particles */}
                  <circle r="3" fill="var(--brand-primary)" className="flow-particle particle-1">
                    <animateMotion dur="6s" repeatCount="indefinite">
                      <mpath href="#flowPath1"/>
                    </animateMotion>
                  </circle>
                  <circle r="2" fill="rgba(0, 255, 209, 0.7)" className="flow-particle particle-2">
                    <animateMotion dur="8s" repeatCount="indefinite">
                      <mpath href="#flowPath2"/>
                    </animateMotion>
                  </circle>
                  
                  {/* Invisible paths for particle animation */}
                  <path id="flowPath1" d="M 25 35 L 75 35 L 75 65 L 25 65 Z" stroke="none" fill="none" />
                  <path id="flowPath2" d="M 75 35 L 25 65 L 75 65 L 25 35 Z" stroke="none" fill="none" />
                </svg>
              </div>

              {/* Grid Container */}
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '30px',
                position: 'relative',
                zIndex: 2
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
                    borderRadius: '16px',
                    padding: '30px 25px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)',
                    cursor: 'pointer',
                    animation: `cardSlideIn 0.6s ease-out ${index * 0.15}s both`,
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column'
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
                    top: '15px',
                    right: '15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 209, 0.1)',
                    border: '1px solid rgba(0, 255, 209, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--brand-primary)'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Icon Container */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
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
                    marginBottom: '20px',
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
                      borderRadius: '12px',
                      background: 'rgba(0, 255, 209, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      animation: `iconPulse 3s ease-in-out infinite ${index * 0.5}s`
                    }} />
                    <div style={{ transform: 'scale(0.8)' }}>
                      {area.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="heading-3" style={{ 
                    marginBottom: '15px',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    lineHeight: '1.3'
                  }}>
                    {area.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    marginBottom: '0',
                    flex: 1
                  }}>
                    {area.description}
                  </p>

                  {/* Removed flow arrows for compact square layout */}

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