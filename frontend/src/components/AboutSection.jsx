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
    <section id="about" className="dark-container" style={{ padding: '100px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Main About Content */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="display-large artistic-heading" style={{ 
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '500',
              fontSize: '28px'
            }}>
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
            
            {/* Creative Entanglement Showcase */}
            <div style={{ 
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative'
            }}>
              
              {/* Opening Statement */}
              {/* Opening statement removed as requested */}

              {/* Interactive Concept Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
                marginBottom: '40px'
              }}>

                {/* Concept 1: Porous Micro-Concrete */}
                <div style={{
                  position: 'relative',
                  background: 'rgba(0, 255, 209, 0.05)',
                  border: '1px solid rgba(0, 255, 209, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 209, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  <div style={{
                    height: '200px',
                    backgroundImage: `url('https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/zqxq0uyn_7b7d766c-9adc-49ad-b02c-6302f3797be3-Picsart-AiImageEnhancer.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                      padding: '30px 20px 20px',
                      color: 'white'
                    }}>
                      <h5 style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--brand-primary)'
                      }}>
                        Porous micro-concrete designed to tune human health.
                      </h5>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: 'var(--brand-primary)',
                      margin: '0 auto 15px',
                      borderRadius: '2px'
                    }} />
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>
                      Where materials become medicine
                    </p>
                  </div>
                </div>

                {/* Concept 2: Air as Architecture */}
                <div style={{
                  position: 'relative',
                  background: 'rgba(0, 255, 209, 0.05)',
                  border: '1px solid rgba(0, 255, 209, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 209, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  <div style={{
                    height: '200px',
                    backgroundImage: `url('https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/316iyye9_35c91ea9-e496-4b09-bfb5-8e5cf59872a1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                      padding: '30px 20px 20px',
                      color: 'white'
                    }}>
                      <h5 style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--brand-primary)'
                      }}>
                        Air as architecture.
                      </h5>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: 'var(--brand-primary)',
                      margin: '0 auto 15px',
                      borderRadius: '2px'
                    }} />
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>
                      Where atmosphere becomes structure
                    </p>
                  </div>
                </div>

                {/* Concept 3: Sensing Tires */}
                <div style={{
                  position: 'relative',
                  background: 'rgba(0, 255, 209, 0.05)',
                  border: '1px solid rgba(0, 255, 209, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 209, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  
                  <div style={{
                    height: '200px',
                    backgroundImage: `url('https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/gkdm80sv_fc014d76-2212-4771-a18e-242054c61e00%20%283%29.jfif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                      padding: '30px 20px 20px',
                      color: 'white'
                    }}>
                      <h5 style={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--brand-primary)'
                      }}>
                        Car tires that sense and respond like fingertips.
                      </h5>
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '2px',
                      background: 'var(--brand-primary)',
                      margin: '0 auto 15px',
                      borderRadius: '2px'
                    }} />
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4'
                    }}>
                      Where rubber becomes intuition
                    </p>
                  </div>
                </div>

              </div>

              {/* Connecting Lines Animation */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                right: '0',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, var(--brand-primary) 50%, transparent 100%)',
                opacity: '0.3',
                zIndex: '-1',
                animation: 'pulseConnection 3s ease-in-out infinite'
              }} />
              
            </div>
          </div>
          
          {/* How It Works section removed as requested */}

          {/* WHY IT MATTERS - Ultra Creative Design */}
          <div style={{ marginTop: '60px', position: 'relative', overflow: 'hidden' }}>
            
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

            {/* "Why It Matters" heading removed as requested */}
            
            <h4 className="display-medium artistic-heading" style={{ 
              textAlign: 'center', 
              marginTop: '60px',
              marginBottom: '80px',
              color: 'var(--text-primary)',
              fontWeight: '500',
              fontSize: '28px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              position: 'relative',
              zIndex: 2
            }}>
              OUR FLAGSHIP PRODUCT
            </h4>

            {/* Magazine Mockup on Left Side */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '80px',
              marginBottom: '80px',
              position: 'relative',
              zIndex: 2,
              maxWidth: '1200px',
              margin: '0 auto 80px auto'
            }}>
              {/* Left Side - Magazine Image */}
              <div style={{
                flex: '0 0 400px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  transform: 'perspective(1000px) rotateY(-10deg) rotateX(2deg)',
                  animation: 'magazineFloat 6s ease-in-out infinite'
                }}>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/07jqqyb2_upscaled%20COVER.jpeg"
                    alt="Polymathic Futures Magazine Cover"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '500px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: `
                        0 25px 50px rgba(0, 0, 0, 0.5),
                        0 0 30px rgba(0, 255, 209, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      border: '2px solid rgba(0, 255, 209, 0.3)'
                    }}
                  />
                  {/* Subtle Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.1), transparent)',
                    borderRadius: '12px',
                    zIndex: -1,
                    filter: 'blur(10px)'
                  }} />
                </div>
              </div>

              {/* Right Side - Content */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
              }}>
                <div>
                  <h5 style={{
                    fontSize: '28px',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    lineHeight: '1.3',
                    fontWeight: '600'
                  }}>
                    Your company's future, visualized today
                  </h5>
                  
                  <p style={{
                    fontSize: '22px',
                    color: 'var(--brand-primary)',
                    marginBottom: '24px',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    letterSpacing: '-0.01em'
                  }}>
                    A magazine from tomorrow
                  </p>
                  
                  <p style={{
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    A magazine carrying the <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>weight and wonder of a tangible artifact from your future</span>. 
                    A conversation starter, a strategy tool, and a vision made real.
                  </p>
                  
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    Imagine walking into a board meeting, investor pitch, or team retreat with this in your hands—
                    your company's story told from 2035, 2040, or even 2060.
                  </p>
                </div>

                <div style={{
                  padding: '25px',
                  background: 'rgba(0, 255, 209, 0.05)',
                  border: '1px solid rgba(0, 255, 209, 0.2)',
                  borderRadius: '8px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--brand-primary)',
                    fontStyle: 'italic',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    "The future isn't predicted—it's prototyped."
                  </p>
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
              
              {/* Creative Strategy vs Narrative section removed as requested */}
                
                <p className="body-large" style={{ 
                  marginBottom: '30px',
                  color: 'var(--text-secondary)',
                  fontSize: '20px',
                  lineHeight: '1.7',
                  maxWidth: '800px',
                  margin: '0 auto 30px auto'
                }}>
                  A magazine from tomorrow makes the abstract concrete — turning <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>foresight into alignment</span>, <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>imagination into innovation</span>, and <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>leadership into shared excitement</span>.
                </p>
              </div>

              {/* Dramatic closing line removed as requested */}

              {/* Buttons removed as requested */}
            </div>
          
          {/* Why Us section removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;