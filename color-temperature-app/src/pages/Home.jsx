import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageUploader from '../components/ImageUploader';
import ColorTemperatureResult from '../components/ColorTemperatureResult';
import { analyzeImageColorTemperature } from '../utils/colorTemperature';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, combineSchemas } from '../utils/structuredData';

const Home = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    try {
      setAnalyzing(true);
      setError(null);
      
      // Analyze image color temperature
      const analysis = await analyzeImageColorTemperature(file);
      setResult(analysis);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError('An error occurred while analyzing the image. Please ensure you upload a valid image file.');
    } finally {
      setAnalyzing(false);
    }
  };

  // Homepage structured data
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Color Temperature Analyzer",
    "url": "https://colortemperature.com",
    "description": "Upload your photo to analyze its color temperature in Kelvin and get professional camera white balance recommendations.",
    "applicationCategory": "Photography",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "screenshot": "https://colortemperature.com/screenshot.jpg",
    "featureList": "Color temperature analysis, Camera white balance recommendations, Image metadata display",
    "author": {
      "@type": "Organization",
      "name": "Color Temperature Analyzer",
      "url": "https://colortemperature.com"
    }
  };

  // Combine structured data
  const combinedStructuredData = combineSchemas(
    homeStructuredData,
    organizationSchema,
    websiteSchema
  );

  return (
    <div>
      <SEO 
        canonical="/"
        structuredData={combinedStructuredData}
      />

      <div className="page-header">
        <h1>Color Temperature Analyzer</h1>
        <p className="subtitle">
          Upload your photo to analyze its color temperature and get camera white balance recommendations
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">Instant</div>
          <div className="stat-label">Analysis</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Precise</div>
          <div className="stat-label">Temperature</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Expert</div>
          <div className="stat-label">Recommendations</div>
        </div>
      </div>

      {/* Upload Image Section - Full Width */}
      <section className="upload-section full-width">
        <h2>Upload Image</h2>
        <ImageUploader 
          onImageUploaded={handleImageUpload} 
          isAnalyzing={analyzing}
        />
        
        {analyzing && (
          <div className="analyzing">
            <div className="analyzing-spinner"></div>
            <p>Analyzing color temperature...</p>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </section>

      {/* Features Section - Added from Features page */}
      {!result && (
        <section className="feature-section full-width">
          <h2>Key Features</h2>
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
              <div className="feature-icon">🔄</div>
              <h3>Multiple Format Support</h3>
              <p>Upload images in various formats including JPEG, PNG, WebP, and GIF. Our analyzer works with all common image file types.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Privacy-Focused</h3>
              <p>All processing happens directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and data security.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '20px' }}>
            <Link to="/features" className="secondary-button">View All Features</Link>
          </div>
        </section>
      )}

      {/* Results or How It Works - Full Width */}
      <main className="app-content">
        {result ? (
          <ColorTemperatureResult result={result} />
        ) : (
          <section className="result-container">
            <h2>How It Works</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Upload Your Photo</h3>
                <p>Drag and drop or click to upload any image file. We support JPEG, PNG, WebP, and GIF formats.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Instant Analysis</h3>
                <p>Our algorithm analyzes the image to determine its color temperature in Kelvin (K).</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Get Recommendations</h3>
                <p>Receive professional camera white balance settings based on the detected temperature.</p>
              </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <h3>Why Color Temperature Matters</h3>
              <p>Color temperature affects the mood and realism of your photos. Proper white balance settings ensure your images have natural colors without unwanted color casts.</p>
              
              <h3 style={{ marginTop: '20px' }}>Common Color Temperatures</h3>
              <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                <li><strong>1500-2000K:</strong> Candlelight, fire</li>
                <li><strong>2500-3000K:</strong> Incandescent bulbs, sunrise/sunset</li>
                <li><strong>3500-4100K:</strong> Fluorescent lights</li>
                <li><strong>5000-5500K:</strong> Daylight, flash</li>
                <li><strong>6000-7000K:</strong> Overcast sky</li>
                <li><strong>8000-10000K:</strong> Shade, blue sky</li>
              </ul>
            </div>
          </section>
        )}
      </main>
      
      <section className="learn-more-section">
        <h2>Learn More About Color Temperature</h2>
        <div className="learn-more-grid">
          <Link to="/features" className="learn-more-card">
            <h3>Explore Features</h3>
            <p>Discover all the powerful features our color temperature analyzer offers</p>
            <span className="learn-more-link">View Features →</span>
          </Link>
          <Link to="/how-it-works" className="learn-more-card">
            <h3>How It Works</h3>
            <p>Learn about the technology behind our accurate color temperature analysis</p>
            <span className="learn-more-link">Read More →</span>
          </Link>
          <Link to="/faq" className="learn-more-card">
            <h3>Common Questions</h3>
            <p>Find answers to frequently asked questions about color temperature</p>
            <span className="learn-more-link">View FAQ →</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 