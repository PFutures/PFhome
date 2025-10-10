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
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              At the Intersection of Science and Strategy
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
                      Where building materials heal
                    </p>
                  </div>
                </div>

                {/* Concept 2: Diamond as Diary */}
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

            {/* OUR FLAGSHIP PRODUCT section moved to separate component */}

            {/* Magazine section content moved to separate component */}

            {/* Content with Typewriter Effect */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              
              {/* Creative Strategy vs Narrative section removed as requested */}
                
                {/* Magazine description paragraph removed as requested */}
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