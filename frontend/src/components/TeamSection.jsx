import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, User } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${API}/team`);
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
      setError('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="team" className="dark-container" style={{ padding: '160px 0' }}>
        <div className="dark-full-container">
          <div className="dark-content-container" style={{ textAlign: 'center' }}>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Loading our polymaths...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="team" className="dark-container" style={{ padding: '160px 0' }}>
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
    <section id="team" className="dark-container" style={{ padding: '160px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="display-large" style={{ marginBottom: '24px' }}>
              Meet the Polymaths
            </h2>
            
            <p className="body-large" style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              Scholars, scientists, strategists, and storytellers. Our diverse expertise 
              enables breakthrough insights across disciplinary boundaries.
            </p>
          </div>
          
          {/* Team Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="dark-hover"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                {/* Member Photo */}
                <div style={{ 
                  height: '300px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%'
                    }}
                    onError={(e) => {
                      e.target.style.backgroundColor = 'var(--bg-secondary)';
                      e.target.style.display = 'none';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: '40px 24px 24px 24px'
                  }}>
                    <h3 className="heading-2" style={{ 
                      color: 'white',
                      marginBottom: '8px'
                    }}>
                      {member.name}
                    </h3>
                    
                    <p style={{ 
                      color: 'var(--brand-primary)',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                
                {/* Member Info */}
                <div style={{ padding: '32px' }}>
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                    lineHeight: '1.5'
                  }}>
                    {member.background}
                  </p>
                  
                  {/* Academic Background */}
                  {member.academicBackground && (
                    <div style={{ marginBottom: '16px' }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        Academic Background
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '15px',
                        fontStyle: 'italic'
                      }}>
                        {member.academicBackground}
                      </p>
                    </div>
                  )}

                  {/* Publications */}
                  {member.publications && (
                    <div style={{ marginBottom: '16px' }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        Publications
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '15px',
                        fontStyle: 'italic'
                      }}>
                        {member.publications}
                      </p>
                    </div>
                  )}

                  {/* Role at Polymathic Futures */}
                  {member.description && (
                    <div style={{
                      background: 'rgba(0, 255, 209, 0.03)',
                      border: '1px solid rgba(0, 255, 209, 0.1)',
                      borderRadius: '8px',
                      padding: '20px',
                      marginBottom: '20px'
                    }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '12px'
                      }}>
                        {member.name === 'Aksinya Staar' ? 'Role in Polymathic Futures' : 
                         member.name === 'Dr. Philipp Kozin' ? 'Approach & Method' : 
                         'At Polymathic Futures'}
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        fontSize: '15px'
                      }}>
                        {member.description}
                      </p>
                    </div>
                  )}
                  
                  {/* Expertise Tags */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 className="body-large" style={{ 
                      marginBottom: '16px',
                      color: 'var(--text-primary)',
                      fontWeight: '600'
                    }}>
                      Expertise:
                    </h4>
                    
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px'
                    }}>
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'var(--text-primary)',
                            padding: '6px 12px',
                            borderRadius: '0px',
                            fontSize: '14px',
                            fontWeight: '400',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Actions */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    <a
                      href={member.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--brand-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        padding: '8px',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--brand-primary)'}
                    >
                      <Linkedin size={16} />
                      Connect
                    </a>
                    
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--brand-primary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        padding: '8px',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--brand-primary)'}
                    >
                      <Mail size={16} />
                      Email
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Join Team CTA */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '0px',
            padding: '60px',
            textAlign: 'center'
          }}>
            <User size={48} color="var(--brand-primary)" style={{ marginBottom: '24px' }} />
            
            <h3 className="heading-1" style={{ marginBottom: '20px' }}>
              Join Our Network
            </h3>
            
            <p className="body-large" style={{ 
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px auto',
              color: 'var(--text-secondary)'
            }}>
              We're always looking for brilliant minds from diverse disciplines. 
              If you're passionate about cross-sector innovation, we'd love to hear from you.
            </p>
            
            <button 
              className="btn-primary dark-button-animate"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;