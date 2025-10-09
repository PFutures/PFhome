import React, { useState, useEffect } from 'react';
import { Eye, Calendar, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PortfolioSection = () => {
  const [magazines, setMagazines] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMagazines();
  }, []);

  const fetchMagazines = async () => {
    try {
      const response = await axios.get(`${API}/magazines`);
      setMagazines(response.data);
    } catch (error) {
      console.error('Error fetching magazines:', error);
      setError('Failed to load magazines');
    } finally {
      setLoading(false);
    }
  };

  const openPreview = (magazine) => {
    setSelectedMagazine(magazine);
  };

  const closePreview = () => {
    setSelectedMagazine(null);
  };

  if (loading) {
    return (
      <section id="portfolio" className="dark-container" style={{ padding: '100px 0' }}>
        <div className="dark-full-container">
          <div className="dark-content-container" style={{ textAlign: 'center' }}>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Loading magazines from the future...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="dark-container" style={{ padding: '100px 0' }}>
        <div className="dark-full-container">
          <div className="dark-content-container" style={{ textAlign: 'center' }}>
            <p className="body-large" style={{ color: '#ff4444' }}>
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="dark-container" style={{ padding: '100px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Sci-Fi Prototyping Samples
            </h2>
            
            <p className="body-large" style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              See how we've helped companies make their breakthroughs tangible through 
              literal publications from tomorrow.
            </p>
          </div>
          
          {/* Magazine Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {magazines.map((magazine) => (
              <div
                key={magazine.id}
                className="dark-hover"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease-in-out'
                }}
                onClick={() => openPreview(magazine)}
              >
                {/* Magazine Cover */}
                <div style={{ 
                  height: '300px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={magazine.cover_image}
                    alt={`${magazine.title} cover`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.target.style.backgroundColor = 'var(--bg-secondary)';
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = 'var(--bg-secondary)';
                      e.target.parentElement.style.border = '2px dashed var(--border-subtle)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--brand-primary)',
                    color: '#000000',
                    padding: '8px 16px',
                    borderRadius: '0px',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}>
                    {magazine.year}
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: '40px 24px 24px 24px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'white'
                    }}>
                      <Eye size={20} />
                      <span className="body-small">Preview</span>
                    </div>
                  </div>
                </div>
                
                {/* Magazine Info */}
                <div style={{ padding: '24px' }}>
                  <h3 className="heading-3" style={{ marginBottom: '16px' }}>
                    {magazine.title}
                  </h3>
                  
                  <p className="body-small" style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}>
                    {magazine.description}
                  </p>
                  
                  {/* Industries Tags */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {magazine.industries.map((industry, index) => (
                      <span
                        key={index}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'var(--text-primary)',
                          padding: '4px 12px',
                          borderRadius: '0px',
                          fontSize: '12px',
                          fontWeight: '400',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--brand-primary)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <span>Read Preview</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Preview Modal */}
          {selectedMagazine && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,
                padding: '20px'
              }}
              onClick={closePreview}
            >
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '0px',
                  padding: '40px',
                  maxWidth: '600px',
                  width: '100%',
                  maxHeight: '80vh',
                  overflow: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ marginBottom: '24px' }}>
                  <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                    {selectedMagazine.title}
                  </h3>
                  
                  <p className="body-medium" style={{ 
                    color: 'var(--brand-primary)',
                    marginBottom: '20px'
                  }}>
                    Future Publication • {selectedMagazine.year}
                  </p>
                </div>
                
                <p className="body-medium" style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '32px'
                }}>
                  {selectedMagazine.preview}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px',
                  marginBottom: '32px'
                }}>
                  {selectedMagazine.industries.map((industry, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'var(--brand-primary)',
                        color: '#000000',
                        padding: '6px 16px',
                        borderRadius: '0px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                
                <button
                  className="btn-secondary"
                  onClick={closePreview}
                  style={{ width: '100%' }}
                >
                  Close Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;