import React, { useState, useEffect } from 'react';
import { BookOpen, Network, Zap, Clock, Target, ArrowRight } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API}/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const serviceIcons = {
    0: <BookOpen size={32} />,
    1: <Network size={32} />,
    2: <Zap size={32} />
  };

  const handleGetStarted = (serviceName) => {
    // This would typically open a contact form or booking system
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="services" className="dark-container" style={{ padding: '100px 0' }}>
        <div className="dark-full-container">
          <div className="dark-content-container" style={{ textAlign: 'center' }}>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Loading our services...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="dark-container" style={{ padding: '100px 0' }}>
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
    <section id="services" className="dark-container" style={{ padding: '100px 0' }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="display-large artistic-heading" style={{ marginBottom: '24px' }}>
              Our Services
            </h2>
            
            <p className="body-large" style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              From tangible future artifacts to breakthrough innovation strategies, 
              we help you own your story in tomorrow's world.
            </p>
          </div>
          
          {/* Services Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className="dark-hover"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px',
                  padding: '40px',
                  transition: 'all 0.4s ease-in-out',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Service Icon */}
                <div style={{ 
                  color: 'var(--brand-primary)', 
                  marginBottom: '24px'
                }}>
                  {serviceIcons[index]}
                </div>
                
                {/* Service Header */}
                <div style={{ marginBottom: '24px' }}>
                  <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                    {service.title}
                  </h3>
                  
                  <p className="body-medium" style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    {service.description}
                  </p>
                </div>
                
                {/* Service Features */}
                <div style={{ marginBottom: '32px', flexGrow: 1 }}>
                  <h4 className="body-large" style={{ 
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: '600'
                  }}>
                    What's Included:
                  </h4>
                  
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          color: 'var(--text-secondary)',
                          fontSize: '16px'
                        }}
                      >
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: 'var(--brand-primary)',
                          borderRadius: '50%',
                          flexShrink: 0
                        }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Service Meta Info */}
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '0px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} color="var(--brand-primary)" />
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {service.timeframe}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Target size={16} color="var(--brand-primary)" />
                    <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {service.ideal_for.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button
                  className="btn-primary dark-button-animate"
                  onClick={() => handleGetStarted(service.title)}
                  style={{ width: '100%' }}
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
          
          {/* Process Overview section removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;