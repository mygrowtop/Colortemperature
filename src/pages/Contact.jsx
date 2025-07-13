import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For this demo, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Contact页面的结构化数据
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Color Temperature Analyzer",
    "description": "Contact us with questions about our color temperature analyzer tool or for support with photography color temperature analysis.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Color Temperature Analyzer",
      "email": "support@colortemperature.com",
      "url": "https://colortemperature.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@colortemperature.com",
        "availableLanguage": ["English"]
      }
    }
  };

  return (
    <div className="page-container">
      <SEO 
        title="Contact Us"
        description="Contact our team with questions about color temperature analysis, white balance recommendations, or for support with our photography tools."
        keywords="contact, support, color temperature help, photography assistance, white balance help"
        canonical="/contact"
        structuredData={contactStructuredData}
      />

      <div className="page-header">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Have questions about our color temperature analyzer? We're here to help!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>support@colortemperature.com</p>
              <p className="note">We typically respond within 24 hours</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available Monday-Friday</p>
              <p className="note">9:00 AM - 5:00 PM EST</p>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="faq-link-container">
            <h3>Common Questions</h3>
            <p>Before reaching out, you might find your answer in our FAQ section.</p>
            <a href="/faq" className="secondary-button">View FAQ</a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          
          {formStatus.submitted ? (
            <div className="success-message">
              <p>{formStatus.message}</p>
              <button 
                className="secondary-button" 
                onClick={() => setFormStatus({submitted: false, error: false, message: ''})}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="error-message">
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <button type="submit" className="primary-button">Send Message</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact; 