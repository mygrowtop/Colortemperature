import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { organizationSchema, websiteSchema } from '../utils/structuredData';
import cameraIcon from '../assets/camera-icon.svg';

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Global structured data
  const globalStructuredData = [
    organizationSchema,
    websiteSchema
  ];

  return (
    <div className="site-container">
      <Helmet>
        {globalStructuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img 
              src={cameraIcon} 
              alt="Camera Icon" 
              style={{ 
                width: '24px', 
                height: '24px', 
                marginRight: '8px',
                verticalAlign: 'middle',
                color: '#2563eb'
              }} 
            />
            <span className="logo-text">ColorTemp</span>
            <span className="logo-accent">Analyzer</span>
          </Link>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="menu-icon"></span>
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/how-it-works" className="nav-link">How It Works</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="main-container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">ColorTemp Analyzer</h3>
              <p className="footer-description">
                Analyze the color temperature of your photos and get professional camera white balance recommendations.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">𝕏</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">📂</span>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Navigation</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Photography Tips</a></li>
                <li><a href="#">Color Theory Guide</a></li>
                <li><a href="#">White Balance Tutorial</a></li>
                <li><a href="#">Camera Settings</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Color Temperature Analyzer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 