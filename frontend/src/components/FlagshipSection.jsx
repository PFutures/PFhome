import React, { useState } from 'react';

const FlagshipSection = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="flagship" className="dark-container" style={{ padding: '60px 0 80px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Our Flagship Product
            </h2>
          </div>

          {/* Content - Centered */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 60px auto',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '22px',
              color: 'var(--brand-primary)',
              marginBottom: '24px',
              fontWeight: '500',
              fontStyle: 'italic',
              letterSpacing: '-0.01em'
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

          {/* Two Ways to Experience */}
          <div style={{ marginTop: '80px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '60px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              
              {/* Column 1: Sample Edition */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'var(--brand-primary)',
                  marginBottom: '30px'
                }}>
                  1. Explore our Sample Edition
                </h4>

                <img 
                  src="https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/07jqqyb2_upscaled%20COVER.jpeg"
                  alt="Sample Magazine Cover"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    marginBottom: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-landing-4/artifacts/07jqqyb2_upscaled%20COVER.jpeg")}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />

                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '30px',
                  flexGrow: 1
                }}>
                  A collectible magazine from the future — featuring grounded in science sci-fi prototypes and foresight stories inspired by real breakthroughs across industries.
                  <br/><br/>
                  Discover how different sectors — from biotech to design, from mobility to luxury — imagine their next horizon.
                </p>

                {/* Sample magazine covers - CLICKABLE */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/6rpy95cz_WhatsApp%20Image%202025-10-15%20at%2018.05.09.jpeg" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Sample 1"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/6rpy95cz_WhatsApp%20Image%202025-10-15%20at%2018.05.09.jpeg")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/ec3wxi7l_WhatsApp%20Image%202025-10-15%20at%2017.24.14.jpeg" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Sample 2"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/ec3wxi7l_WhatsApp%20Image%202025-10-15%20at%2017.24.14.jpeg")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/h9fnuppi_967dafba-95e4-472f-9693-486759a91125.jfif" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Sample 3"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/h9fnuppi_967dafba-95e4-472f-9693-486759a91125.jfif")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>

                <button
                  className="btn-primary dark-button-animate"
                  style={{ width: '100%' }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🔹 Order Sample Magazine
                </button>
              </div>

              {/* Column 2: Custom Edition */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'var(--brand-primary)',
                  marginBottom: '30px'
                }}>
                  2. Order Your company's Sci-Fi Futures edition
                </h4>

                {/* Article covers grid - MOVED HERE, CLICKABLE */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/kf61ma5v_7cabefac-c0dc-4c06-8ba9-893b718bc34e.webp" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Cover 1"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/kf61ma5v_7cabefac-c0dc-4c06-8ba9-893b718bc34e.webp")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/thhjm9pd_81c9965e-7ca8-4e86-bc8c-221f22e77e02.jfif" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Cover 2"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/thhjm9pd_81c9965e-7ca8-4e86-bc8c-221f22e77e02.jfif")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <img 
                    src="https://customer-assets.emergentagent.com/job_future-magazine/artifacts/vuvy5uso_WhatsApp%20Image%202025-10-11%20at%2021.17.42.jpeg" 
                    style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease' }} 
                    alt="Cover 3"
                    onClick={() => openLightbox("https://customer-assets.emergentagent.com/job_future-magazine/artifacts/vuvy5uso_WhatsApp%20Image%202025-10-11%20at%2021.17.42.jpeg")}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>

                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '30px',
                  flexGrow: 1
                }}>
                  An entire magazine dedicated to your company's possible futures: visionary product prototypes, new market constellations, and bold scenarios brought to life through story and design.
                  <br/><br/>
                  Developed through a consultation with our team of futurists, scientists, and polymathic thinkers.
                </p>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Check the covers of magazines we've already created — and imagine yours among them.
                </p>

                <button
                  className="btn-primary dark-button-animate"
                  style={{ width: '100%' }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🔸 Order Your Future Edition
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            cursor: 'pointer'
          }}
          onClick={closeLightbox}
        >
          <img 
            src={lightboxImage}
            alt="Magazine Cover"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 0 50px rgba(0, 255, 209, 0.5)'
            }}
          />
          <button
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'var(--brand-primary)',
              color: '#000',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={closeLightbox}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default FlagshipSection;
