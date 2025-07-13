import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, combineSchemas, generateBreadcrumbSchema } from '../utils/structuredData';

const Features = () => {
  // 特性页面的结构化数据
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Color Temperature Analyzer Features",
    "description": "Discover the powerful features of our color temperature analyzer tool including precise temperature analysis, RGB breakdown, and camera setting recommendations.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Precise Temperature Analysis",
          "description": "Our algorithm accurately calculates the color temperature of any image using advanced color science and the McCamy formula for precise Kelvin values."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Detailed RGB Breakdown",
          "description": "Get comprehensive RGB values from your images to understand the color composition and make informed adjustments to your photography setup."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Camera Setting Recommendations",
          "description": "Receive professional white balance recommendations tailored to your image's color temperature, including preset modes and specific Kelvin settings."
        }
      ]
    }
  };

  // 生成面包屑结构化数据
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" }
  ]);

  // 合并结构化数据
  const combinedStructuredData = combineSchemas(
    featuresStructuredData,
    organizationSchema,
    websiteSchema,
    breadcrumbSchema
  );

  return (
    <div className="page-container">
      <SEO 
        title="Features"
        description="Discover the powerful features of our color temperature analyzer tool including precise temperature analysis, RGB breakdown, and camera setting recommendations."
        keywords="color temperature features, RGB analysis, white balance recommendations, photography tools, image analysis features"
        canonical="/features"
        structuredData={combinedStructuredData}
      />

      <div className="page-header">
        <h1>Color Temperature Analyzer Features</h1>
        <p className="subtitle">
          Discover the powerful features that make our color temperature analyzer the best choice for photographers
        </p>
      </div>

      <section className="feature-section">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Precise Temperature Analysis</h3>
            <p>Our algorithm accurately calculates the color temperature of any image using advanced color science and the McCamy formula for precise Kelvin values.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Detailed RGB Breakdown</h3>
            <p>Get comprehensive RGB values from your images to understand the color composition and make informed adjustments to your photography setup.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📷</div>
            <h3>Camera Setting Recommendations</h3>
            <p>Receive professional white balance recommendations tailored to your image's color temperature, including preset modes and specific Kelvin settings.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Analysis</h3>
            <p>Upload your image and get results in seconds. No waiting, no complicated setup - just fast, accurate color temperature information.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Cross-Device Compatibility</h3>
            <p>Use our tool on any device - desktop, tablet, or mobile. The responsive design ensures a seamless experience regardless of screen size.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Multiple Format Support</h3>
            <p>Upload images in various formats including JPEG, PNG, WebP, and GIF. Our analyzer works with all common image file types.</p>
          </div>
        </div>
      </section>

      <section className="advanced-features">
        <h2>Advanced Features for Professional Photographers</h2>
        
        <div className="feature-comparison">
          <div className="comparison-item">
            <h3>Image Metadata Analysis</h3>
            <p>Our tool extracts and displays important image information such as dimensions and aspect ratio, helping you understand your image properties.</p>
          </div>
          
          <div className="comparison-item">
            <h3>Visual Color Representation</h3>
            <p>See a visual representation of your image's color temperature, making it easier to understand the warmth or coolness of your lighting conditions.</p>
          </div>
          
          <div className="comparison-item">
            <h3>Educational Resources</h3>
            <p>Access comprehensive information about color temperature and its impact on photography, helping you improve your skills and knowledge.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to analyze your photos?</h2>
        <p>Try our color temperature analyzer now - it's free, accurate, and takes only seconds!</p>
        <Link to="/" className="primary-button">Start Analyzing Now</Link>
      </section>
    </div>
  );
};

export default Features; 