import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import imageUploadSvg from '../assets/image-upload.svg';
import imageProcessingSvg from '../assets/image-processing.svg';
import colorAnalysisSvg from '../assets/color-analysis.svg';
import temperatureCalculationSvg from '../assets/temperature-calculation.svg';
import recommendationSvg from '../assets/recommendation.svg';

const HowItWorks = () => {
  // HowItWorks page structured data
  const howItWorksStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Color Temperature Analysis Works",
    "description": "Learn how our color temperature analyzer processes images to calculate accurate color temperature in Kelvin and provide camera white balance recommendations.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Image Upload",
        "text": "The process begins when you upload your image through our secure interface. Our system accepts various image formats including JPEG, PNG, WebP, and GIF.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Image Processing",
        "text": "Once uploaded, your image is processed using HTML5 Canvas technology. We extract pixel data from your image while respecting your privacy - no images are stored on our servers.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Color Analysis",
        "text": "Our algorithm analyzes the RGB values of all pixels in your image and calculates an average color representation of the entire image.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Temperature Calculation",
        "text": "Using the McCamy formula, we convert the RGB values to XYZ color space, then to chromaticity coordinates, and finally calculate the correlated color temperature in Kelvin.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Recommendation Generation",
        "text": "Based on the calculated color temperature, our system generates professional camera white balance recommendations tailored to your specific image.",
        "position": 5
      }
    ]
  };

  return (
    <div className="page-container">
      <SEO 
        title="How It Works"
        description="Learn how our color temperature analyzer processes images to calculate accurate color temperature in Kelvin and provide camera white balance recommendations."
        keywords="color temperature calculation, McCamy formula, RGB analysis, image processing, white balance technology"
        canonical="/how-it-works"
        structuredData={howItWorksStructuredData}
      />

      <div className="page-header">
        <h1>How Our Color Temperature Analyzer Works</h1>
        <p className="subtitle">
          Understanding the science and technology behind our accurate color temperature analysis
        </p>
      </div>

      <section className="process-section">
        <h2>The Color Temperature Analysis Process</h2>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Image Upload</h3>
            <p>The process begins when you upload your image through our secure interface. Our system accepts various image formats including JPEG, PNG, WebP, and GIF.</p>
            <div className="step-image">
              <img src={imageUploadSvg} alt="Image Upload Illustration" style={{width: '100%', maxWidth: '400px'}} />
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Image Processing</h3>
            <p>Once uploaded, your image is processed using HTML5 Canvas technology. We extract pixel data from your image while respecting your privacy - no images are stored on our servers.</p>
            <div className="step-image">
              <img src={imageProcessingSvg} alt="Image Processing Illustration" style={{width: '100%', maxWidth: '400px'}} />
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Color Analysis</h3>
            <p>Our algorithm analyzes the RGB values of all pixels in your image and calculates an average color representation of the entire image.</p>
            <div className="step-image">
              <img src={colorAnalysisSvg} alt="Color Analysis Illustration" style={{width: '100%', maxWidth: '400px'}} />
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Temperature Calculation</h3>
            <p>Using the McCamy formula, we convert the RGB values to XYZ color space, then to chromaticity coordinates, and finally calculate the correlated color temperature in Kelvin.</p>
            <div className="step-image">
              <img src={temperatureCalculationSvg} alt="Temperature Calculation Illustration" style={{width: '100%', maxWidth: '400px'}} />
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Recommendation Generation</h3>
            <p>Based on the calculated color temperature, our system generates professional camera white balance recommendations tailored to your specific image.</p>
            <div className="step-image">
              <img src={recommendationSvg} alt="Recommendation Illustration" style={{width: '100%', maxWidth: '400px'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <h2>The Technology Behind Our Analyzer</h2>
        
        <div className="tech-details">
          <div className="tech-item">
            <h3>McCamy's Formula</h3>
            <p>We use McCamy's formula, a scientifically validated method for calculating correlated color temperature from chromaticity coordinates. This formula provides accurate results across a wide range of color temperatures.</p>
            <pre className="code-block">
              {`// McCamy's formula implementation
const n = (x - 0.3320) / (0.1858 - y);
const CCT = 449 * Math.pow(n, 3) + 3525 * Math.pow(n, 2) + 6823.3 * n + 5520.33;`}
            </pre>
          </div>
          
          <div className="tech-item">
            <h3>RGB to XYZ Conversion</h3>
            <p>To calculate color temperature, we first convert RGB values to the CIE XYZ color space using standard transformation matrices, ensuring accurate color representation.</p>
          </div>
          
          <div className="tech-item">
            <h3>Client-Side Processing</h3>
            <p>All processing happens directly in your browser using JavaScript and HTML5 Canvas API. This ensures fast results and complete privacy as your images never leave your device.</p>
          </div>
        </div>
      </section>

      <section className="accuracy-section">
        <h2>Accuracy and Limitations</h2>
        
        <div className="accuracy-details">
          <p>Our color temperature analyzer provides accurate estimates for most photographic scenarios, but there are some important factors to consider:</p>
          
          <ul className="accuracy-list">
            <li><strong>Mixed Lighting:</strong> Images with multiple light sources of different color temperatures may produce averaged results.</li>
            <li><strong>Extreme Colors:</strong> Images dominated by a single color might skew temperature readings.</li>
            <li><strong>Approximation:</strong> While our algorithm is highly accurate, it provides an approximation rather than laboratory-grade measurements.</li>
            <li><strong>Camera Processing:</strong> Images that have undergone heavy post-processing or white balance adjustments may show different results than expected.</li>
          </ul>
          
          <p>For most photography applications, our analyzer provides sufficiently accurate results to help you improve your camera settings and understand lighting conditions.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to analyze your photos?</h2>
        <p>Now that you understand how our tool works, try it yourself and see the results!</p>
        <Link to="/" className="primary-button">Start Analyzing Now</Link>
      </section>
    </div>
  );
};

export default HowItWorks; 