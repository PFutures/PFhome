import React from 'react';

const FlagshipSection = () => {
  return (
    <section id="flagship" className="dark-container" style={{ padding: '100px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          
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

        </div>
      </div>
    </section>
  );
};

export default FlagshipSection;