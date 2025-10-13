import React, { useState } from 'react';
import { consultationTypes } from './mock';
import { Send, Calendar, Users, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry_type: 'consultation',
    consultation_type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');
    
    try {
      const response = await axios.post(`${API}/inquiries`, formData);
      
      if (response.status === 201) {
        setSubmitMessage(response.data.message);
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiry_type: 'consultation',
          consultation_type: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      if (error.response?.data?.detail) {
        setSubmitError(error.response.data.detail);
      } else {
        setSubmitError('Something went wrong. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="dark-container" style={{ padding: '60px 0 80px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Let's Prototype Your Futures
            </h2>
            
            <p className="body-large" style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              Ready to own your story in tomorrow's world? Schedule a consultation or 
              explore partnership opportunities with our team.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} style={{ 
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px',
                padding: '40px'
              }}>
                <h3 className="heading-2" style={{ marginBottom: '32px' }}>
                  Get Started
                </h3>
                
                {/* Inquiry Type Selection */}
                <div style={{ marginBottom: '24px' }}>
                  <label className="body-medium" style={{ 
                    display: 'block',
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}>
                    I'm interested in:
                  </label>
                  
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)'
                    }}>
                      <input
                        type="radio"
                        name="inquiry_type"
                        value="consultation"
                        checked={formData.inquiry_type === 'consultation'}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--brand-primary)' }}
                      />
                      <Calendar size={16} />
                      Schedule Consultation
                    </label>
                    
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)'
                    }}>
                      <input
                        type="radio"
                        name="inquiry_type"
                        value="partnership"
                        checked={formData.inquiry_type === 'partnership'}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--brand-primary)' }}
                      />
                      <Users size={16} />
                      Partnership Inquiry
                    </label>
                  </div>
                </div>
                
                {/* Consultation Type (conditional) */}
                {formData.inquiry_type === 'consultation' && (
                  <div style={{ marginBottom: '24px' }}>
                    <label className="body-medium" style={{ 
                      display: 'block',
                      marginBottom: '12px',
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Consultation Type:
                    </label>
                    
                    <select
                      name="consultation_type"
                      value={formData.consultation_type}
                      onChange={handleInputChange}
                      required={formData.inquiry_type === 'consultation'}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px'
                      }}
                    >
                      <option value="">Select consultation type</option>
                      {consultationTypes.map((type) => (
                        <option key={type.id} value={type.type}>
                          {type.type} ({type.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                {/* Basic Info Fields */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="body-medium" style={{ 
                      display: 'block',
                      marginBottom: '8px',
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <label className="body-medium" style={{ 
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)',
                      fontSize: '16px'
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: '32px' }}>
                  <label className="body-medium" style={{ 
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, or questions..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary dark-button-animate"
                  style={{ 
                    width: '100%',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} />
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                
                {/* Success Message */}
                {submitMessage && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: 'var(--brand-primary)',
                    color: '#000000',
                    borderRadius: '0px',
                    textAlign: 'center',
                    fontWeight: '500'
                  }}>
                    {submitMessage}
                  </div>
                )}
                
                {/* Error Message */}
                {submitError && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: '#ff4444',
                    color: '#ffffff',
                    borderRadius: '0px',
                    textAlign: 'center',
                    fontWeight: '500'
                  }}>
                    {submitError}
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info & CTA */}
            <div>
              {/* Direct Contact */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px',
                padding: '40px',
                marginBottom: '32px'
              }}>
                <h3 className="heading-2" style={{ marginBottom: '24px' }}>
                  Direct Contact
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <Mail size={20} color="var(--brand-primary)" />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      hello@polymathicfutures.com
                    </span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <Phone size={20} color="var(--brand-primary)" />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      +1 (555) 123-4567
                    </span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px'
                  }}>
                    <MapPin size={20} color="var(--brand-primary)" />
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      Global • Remote-First
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick Info */}
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0px',
                padding: '40px'
              }}>
                <h3 className="heading-3" style={{ 
                  marginBottom: '20px',
                  color: 'var(--brand-primary)'
                }}>
                  Response Time
                </h3>
                
                <p className="body-medium" style={{ 
                  color: 'var(--text-secondary)',
                  marginBottom: '16px'
                }}>
                  We typically respond within 24 hours for consultation inquiries 
                  and within 48 hours for partnership discussions.
                </p>
                
                <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;