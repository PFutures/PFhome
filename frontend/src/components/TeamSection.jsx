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
      <section id="team" className="dark-container" style={{ padding: '100px 0' }}>
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
      <section id="team" className="dark-container" style={{ padding: '100px 0' }}>
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
    <section id="team" className="dark-container" style={{ padding: '100px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Meet the Polymaths
            </h2>
            
            {/* Elegant Team Philosophy Design */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              position: 'relative'
            }}>
              
              {/* Core Team Types - Interactive Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '20px',
                marginBottom: '40px',
                textAlign: 'center'
              }}>
                {[
                  { title: 'Scholars', icon: '📚' },
                  { title: 'Scientists', icon: '🔬' },
                  { title: 'Strategists', icon: '🎯' },
                  { title: 'Storytellers', icon: '✍️' }
                ].map((role, index) => (
                  <div 
                    key={role.title}
                    style={{
                      background: 'rgba(0, 255, 209, 0.05)',
                      border: '1px solid rgba(0, 255, 209, 0.15)',
                      borderRadius: '8px',
                      padding: '20px 16px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 255, 209, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 255, 209, 0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 255, 209, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      fontSize: '24px',
                      marginBottom: '8px',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease'
                    }}>
                      {role.icon}
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: '500',
                      color: 'var(--brand-primary)'
                    }}>
                      {role.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Philosophy Statement */}
              <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.03) 0%, rgba(0, 255, 209, 0.01) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 255, 209, 0.1)',
                position: 'relative'
              }}>
                <p style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: 'var(--text-primary)',
                  margin: '0 0 20px 0',
                  fontStyle: 'italic'
                }}>
                  Our team thrives at the <span style={{ 
                    background: 'linear-gradient(135deg, var(--brand-primary), #00b4d8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '600'
                  }}>intersections</span> where ideas collide and new possibilities emerge.
                </p>
              </div>

              {/* Network Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                marginBottom: '40px',
                flexWrap: 'wrap'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: 'var(--brand-primary)',
                    lineHeight: '1',
                    marginBottom: '8px',
                    background: 'linear-gradient(135deg, var(--brand-primary), #00b4d8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    200+
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Global Network
                  </p>
                </div>
                
                <div style={{
                  width: '1px',
                  height: '60px',
                  background: 'linear-gradient(180deg, transparent 0%, var(--brand-primary) 50%, transparent 100%)',
                  opacity: '0.5'
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px 30px',
                  textAlign: 'center'
                }}>
                  {['Scientists', 'Startups', 'Visionaries', 'Experts'].map((type, index) => (
                    <div key={type} style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      fontWeight: '400'
                    }}>
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Statement */}
              <div style={{
                textAlign: 'center',
                padding: '25px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: 'var(--text-primary)',
                  margin: 0,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  We generate breakthrough insights that{' '}
                  <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>cross disciplines</span>,{' '}
                  <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>connect worlds</span>, and{' '}
                  <span style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>turn complexity into opportunity</span>.
                </p>
              </div>

            </div>
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
                  height: '400px',
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
                      objectPosition: member.name === 'Aksinya Staar' ? 'center 25%' : 
                                    member.name === 'Dr. Philipp Kozin' ? 'center 25%' :
                                    'center 20%'
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
                    marginBottom: '12px',
                    lineHeight: '1.4',
                    fontSize: '14px'
                  }}>
                    {member.background}
                  </p>
                  
                  {/* Academic Background */}
                  {member.academicBackground && (
                    <div style={{ marginBottom: '12px' }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        Academic Background
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '13px',
                        fontStyle: 'italic'
                      }}>
                        {member.academicBackground}
                      </p>
                    </div>
                  )}

                  {/* Publications */}
                  {member.publications && (
                    <div style={{ marginBottom: '12px' }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        Publications
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '13px',
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
                      padding: '16px',
                      marginBottom: '16px'
                    }}>
                      <h5 style={{
                        color: 'var(--brand-primary)',
                        fontSize: '12px',
                        fontWeight: '600',
                        marginBottom: '8px'
                      }}>
                        {member.name === 'Aksinya Staar' ? 'Role in Polymathic Futures' : 
                         member.name === 'Dr. Philipp Kozin' ? 'Approach & Method' : 
                         'At Polymathic Futures'}
                      </h5>
                      <p className="body-medium" style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                        fontSize: '14px'
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
          
          {/* Join Our Network section removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;