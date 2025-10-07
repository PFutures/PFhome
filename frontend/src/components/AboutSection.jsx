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
            <h3 className="heading-1" style={{ 
              textAlign: 'center', 
              marginBottom: '30px',
              color: 'var(--brand-primary)'
            }}>
              How It Works
            </h3>
            
            <h4 className="heading-2" style={{ 
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
              Every future has to be imagined before it can be built.<br />
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
                  <h5 className="heading-2" style={{ 
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
                  <h5 className="heading-2" style={{ 
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