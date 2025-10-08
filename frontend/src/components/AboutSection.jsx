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
          
          {/* HOW IT WORKS - New Clear Process */}
          <div>
            <h3 className="heading-1 artistic-heading" style={{ 
              textAlign: 'center', 
              marginBottom: '30px',
              color: 'var(--brand-primary)'
            }}>
              How It Works
            </h3>
            
            <h4 className="heading-2 artistic-heading" style={{ 
              textAlign: 'center', 
              marginBottom: '40px',
              color: 'var(--text-primary)',
              fontWeight: '600'
            }}>
              From Vision to Artifact
            </h4>
            
            <p className="body-large" style={{ 
              textAlign: 'center',
              marginBottom: '80px',
              maxWidth: '700px',
              margin: '0 auto 80px auto',
              color: 'var(--text-secondary)'
            }}>
              Here's how your magazine from tomorrow takes shape:
            </p>
            
            {/* Process Steps */}
            <div style={{ 
              maxWidth: '1000px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '60px'
            }}>
              
              {/* Step 1 - Discover */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '40px',
                padding: '0 20px'
              }}>
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(0, 255, 209, 0.05) 100%)',
                  border: '2px solid rgba(0, 255, 209, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div style={{ flex: 1 }}>
                  <h5 className="heading-2 artistic-heading" style={{ 
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontSize: '28px'
                  }}>
                    Step 1 — Discover
                  </h5>
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '18px',
                    lineHeight: '1.7'
                  }}>
                    We begin with your essence — strategy, research, values, and ambitions.
                    Together, we identify key signals, emerging technologies, and long-horizon opportunities that define your future landscape.
                  </p>
                </div>
              </div>

              {/* Step 2 - Design */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '40px',
                padding: '0 20px'
              }}>
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(0, 255, 209, 0.05) 100%)',
                  border: '2px solid rgba(0, 255, 209, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div style={{ flex: 1 }}>
                  <h5 className="heading-2 artistic-heading" style={{ 
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontSize: '28px'
                  }}>
                    Step 2 — Design
                  </h5>
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '18px',
                    lineHeight: '1.7'
                  }}>
                    Our team of polymaths, foresight researchers, and creative writers translate these insights into science-based sci-fi articles, concept visuals, and future narratives.
                    Each story is designed to resonate — internally with teams, externally with partners and investors.
                  </p>
                </div>
              </div>

              {/* Step 3 - Deliver */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '40px',
                padding: '0 20px'
              }}>
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.2) 0%, rgba(0, 255, 209, 0.05) 100%)',
                  border: '2px solid rgba(0, 255, 209, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div style={{ flex: 1 }}>
                  <h5 className="heading-2" style={{ 
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontSize: '28px'
                  }}>
                    Step 3 — Deliver
                  </h5>
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '18px',
                    lineHeight: '1.7'
                  }}>
                    The result: a single, beautifully crafted magazine — printed and digital — that tells your future as if it were already real.
                    A tangible artifact for presentations, exhibitions, leadership retreats, or visionary launches.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div style={{
              textAlign: 'center',
              marginTop: '80px'
            }}>
              <button className="btn-primary" style={{
                fontSize: '18px',
                padding: '16px 32px'
              }}>
                → Begin Your Future Project
              </button>
            </div>
          </div>

          {/* WHY IT MATTERS - Ultra Creative Design */}
          <div style={{ marginTop: '160px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Floating Abstract Elements */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 0
            }}>
              {/* Floating Numbers/Spreadsheet Elements */}
              <div className="floating-element spreadsheet-1" style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                opacity: 0.1,
                fontSize: '48px',
                color: '#666',
                fontFamily: 'monospace',
                animation: 'floatAway 8s ease-in-out infinite'
              }}>
                Q4: 23%
              </div>
              <div className="floating-element spreadsheet-2" style={{
                position: 'absolute',
                top: '25%',
                right: '15%',
                opacity: 0.1,
                fontSize: '36px',
                color: '#666',
                fontFamily: 'monospace',
                animation: 'floatAway 10s ease-in-out infinite 2s'
              }}>
                ROI: 3.2x
              </div>
              <div className="floating-element spreadsheet-3" style={{
                position: 'absolute',
                bottom: '30%',
                left: '20%',
                opacity: 0.1,
                fontSize: '42px',
                color: '#666',
                fontFamily: 'monospace',
                animation: 'floatAway 9s ease-in-out infinite 4s'
              }}>
                KPI: +15%
              </div>

              {/* Floating Story Elements */}
              <div className="floating-element story-1" style={{
                position: 'absolute',
                top: '20%',
                right: '20%',
                opacity: 0.15,
                fontSize: '24px',
                color: 'var(--brand-primary)',
                fontStyle: 'italic',
                animation: 'storyFloat 12s ease-in-out infinite'
              }}>
                "In 2040..."
              </div>
              <div className="floating-element story-2" style={{
                position: 'absolute',
                bottom: '40%',
                right: '10%',
                opacity: 0.15,
                fontSize: '20px',
                color: 'var(--brand-primary)',
                fontStyle: 'italic',
                animation: 'storyFloat 14s ease-in-out infinite 3s'
              }}>
                "Revolutionary breakthrough..."
              </div>
            </div>

            <h3 className="heading-1 artistic-heading" style={{ 
              textAlign: 'center', 
              marginBottom: '40px',
              color: 'var(--brand-primary)',
              position: 'relative',
              zIndex: 2
            }}>
              Why It Matters
            </h3>
            
            <h4 className="display-medium artistic-heading" style={{ 
              textAlign: 'center', 
              marginBottom: '80px',
              color: 'var(--text-primary)',
              fontWeight: '600',
              position: 'relative',
              zIndex: 2
            }}>
              Why Create a Magazine from the Future?
            </h4>

            {/* Central Interactive Magazine Visual */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="future-magazine" style={{
                width: '300px',
                height: '400px',
                background: `
                  linear-gradient(135deg, 
                    rgba(0, 255, 209, 0.1) 0%, 
                    rgba(0, 255, 209, 0.03) 50%,
                    rgba(18, 18, 18, 0.9) 100%
                  )
                `,
                border: '2px solid rgba(0, 255, 209, 0.3)',
                borderRadius: '8px',
                position: 'relative',
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                animation: 'magazineFloat 6s ease-in-out infinite',
                boxShadow: `
                  0 20px 40px rgba(0, 0, 0, 0.4),
                  0 0 20px rgba(0, 255, 209, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                overflow: 'hidden'
              }}>
                {/* Magazine Cover Content */}
                <div style={{
                  padding: '30px 20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--brand-primary)',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      YOUR COMPANY • 2040 EDITION
                    </div>
                    <h5 style={{
                      fontSize: '20px',
                      color: 'var(--text-primary)',
                      marginBottom: '15px',
                      lineHeight: '1.2'
                    }}>
                      The Innovation That Changed Everything
                    </h5>
                    <p style={{
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>
                      How your breakthrough transformed three industries and created $2.3B in new value...
                    </p>
                  </div>
                  
                  {/* Animated Pages Effect */}
                  <div style={{
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                    width: '60px',
                    height: '80px'
                  }}>
                    <div className="page-flip page-1" style={{
                      position: 'absolute',
                      width: '60px',
                      height: '80px',
                      background: 'rgba(0, 255, 209, 0.1)',
                      border: '1px solid rgba(0, 255, 209, 0.2)',
                      borderRadius: '2px',
                      transformOrigin: 'left center',
                      animation: 'pageFlip1 4s ease-in-out infinite'
                    }} />
                    <div className="page-flip page-2" style={{
                      position: 'absolute',
                      width: '60px',
                      height: '80px',
                      background: 'rgba(0, 255, 209, 0.05)',
                      border: '1px solid rgba(0, 255, 209, 0.15)',
                      borderRadius: '2px',
                      transformOrigin: 'left center',
                      animation: 'pageFlip2 4s ease-in-out infinite 1s'
                    }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content with Typewriter Effect */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              
              {/* Main Body Text */}
              <div style={{ marginBottom: '60px' }}>
                <p className="body-large typewriter-text" style={{ 
                  marginBottom: '30px',
                  color: 'var(--text-primary)',
                  fontSize: '22px',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  Because strategy alone rarely inspires.<br />
                  Because the future is not a spreadsheet — it's a story waiting to be told.
                </p>
                
                <p className="body-large" style={{ 
                  marginBottom: '30px',
                  color: 'var(--text-secondary)',
                  fontSize: '20px',
                  lineHeight: '1.7',
                  maxWidth: '800px',
                  margin: '0 auto 30px auto'
                }}>
                  When your company's long-term vision becomes a narrative people can see, feel, and believe, 
                  it shifts how they think and act today. A magazine from tomorrow makes the abstract concrete — 
                  turning foresight into alignment, imagination into innovation, and leadership into shared excitement.
                </p>
              </div>

              {/* Dramatic Closing Line */}
              <div style={{
                padding: '60px 40px',
                background: `
                  linear-gradient(135deg, 
                    rgba(0, 255, 209, 0.05) 0%, 
                    rgba(0, 0, 0, 0.8) 50%,
                    rgba(0, 255, 209, 0.05) 100%
                  )
                `,
                border: '1px solid rgba(0, 255, 209, 0.2)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '60px'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, rgba(0, 255, 209, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(0, 255, 209, 0.02) 0%, transparent 50%)
                  `,
                  animation: 'patternShift 8s ease-in-out infinite'
                }} />
                
                <p className="display-medium dramatic-text artistic-italic" style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  marginBottom: '0',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 0 20px rgba(0, 255, 209, 0.3)'
                }}>
                  You don't predict the future.<br />
                  <span style={{ color: 'var(--text-primary)' }}>You publish it.</span>
                </p>
              </div>

              {/* Creative CTAs */}
              <div style={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button className="btn-primary cta-magazine" style={{
                  fontSize: '18px',
                  padding: '18px 36px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    → Commission Your 2040 Magazine
                  </span>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                    animation: 'buttonShine 3s ease-in-out infinite'
                  }} />
                </button>
                
                <button className="btn-secondary" style={{
                  fontSize: '18px',
                  padding: '18px 36px'
                }}>
                  → Explore Sample Narratives
                </button>
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