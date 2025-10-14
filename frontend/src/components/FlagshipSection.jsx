import React from 'react';

const FlagshipSection = () => {
  return (
    <section id="flagship" className="dark-container" style={{ padding: '60px 0 80px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Our Flagship Product
            </h2>
          </div>

          {/* Magazine Mockup on Left Side */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '80px',
            marginBottom: '60px',
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            margin: '0 auto 60px auto'
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
                <p style={{
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: '300',
                  lineHeight: '1.3',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                  letterSpacing: '-0.02em'
                }}>
                  A Sci-Fi magazine of your company's tomorrow
                </p>
                
                <p style={{
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  A tangible artifact from your organization's future — carrying the <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>thrill of possibility</span> and the <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>clarity of vision</span>. A conversation starter, a strategy tool, and a bold future made real.
                </p>
                
                <p style={{
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Imagine walking into a board meeting, investor pitch, or team retreat with this magazine in your hands. Make people <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>see, feel, and believe your vision</span> — and watch how it shifts the way they think and act today.
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