import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is color temperature?",
      answer: "Color temperature is a characteristic of visible light that is measured in Kelvin (K). It describes the warmth or coolness of a light source. Lower color temperatures (2000-3000K) appear warm (yellow/orange), while higher color temperatures (5000K+) appear cool (blue). In photography, understanding color temperature is crucial for proper white balance settings."
    },
    {
      question: "How accurate is the color temperature analyzer?",
      answer: "Our color temperature analyzer uses the McCamy formula, which provides accurate estimates for most photographic scenarios. While not as precise as specialized hardware colorimeters, it offers reliable results for photography purposes. The accuracy may vary depending on image quality, lighting complexity, and whether the image has been post-processed."
    },
    {
      question: "What is a good color temperature for photography?",
      answer: "There's no single 'good' color temperature for photography as it depends on your creative intent. However, daylight is typically around 5500K, which is often considered a neutral reference. Warm scenes (sunset, indoor tungsten lighting) range from 2000-3500K, while cool scenes (shade, overcast) range from 6500-8000K. The key is matching your camera's white balance to the light source for accurate colors."
    },
    {
      question: "How can I improve my white balance settings?",
      answer: "To improve white balance settings: 1) Use our analyzer to determine the color temperature of your scene, 2) Set your camera's white balance to the recommended Kelvin value or preset, 3) For mixed lighting, prioritize the main subject's light source, 4) Consider using a gray card for critical work, 5) Shoot in RAW format when possible to allow white balance adjustments in post-processing."
    },
    {
      question: "Does the analyzer work with all image formats?",
      answer: "Yes, our analyzer works with all common image formats including JPEG, PNG, WebP, and GIF. For best results, use uncompressed or minimally compressed images. RAW files must be converted to one of these formats before analysis."
    },
    {
      question: "Are my images stored on your servers?",
      answer: "No. Our color temperature analyzer processes your images entirely within your browser using client-side JavaScript. Your images are never uploaded to our servers, ensuring complete privacy and data security."
    },
    {
      question: "Why might the analyzer results differ from my camera's readings?",
      answer: "Differences can occur due to: 1) Different algorithms - cameras use proprietary methods while we use the McCamy formula, 2) Image processing - your camera or editing software may have applied adjustments, 3) Mixed lighting in the scene, 4) Camera sensor characteristics, 5) JPEG compression and color space differences."
    },
    {
      question: "How does color temperature affect my photos?",
      answer: "Color temperature affects the mood and color accuracy of your photos. Incorrect white balance settings can result in images that appear too yellow/orange (when set too low) or too blue (when set too high). Proper color temperature settings ensure natural skin tones and accurate color reproduction. Creatively, you can use color temperature to convey warmth, coolness, or specific atmospheric conditions."
    },
    {
      question: "Can I analyze color temperature in specific areas of my image?",
      answer: "Currently, our analyzer calculates the average color temperature across the entire image. For professional work requiring analysis of specific image areas, we recommend using specialized software like Adobe Lightroom or Photoshop with color sampling tools."
    },
    {
      question: "How do I use the color temperature recommendations?",
      answer: "Our recommendations include both a specific Kelvin range and camera preset modes. For best results: 1) If your camera allows direct Kelvin input, use the suggested range, 2) Otherwise, use the recommended preset (Daylight, Shade, Tungsten, etc.), 3) Take a test shot and adjust as needed, 4) Consider the recommendations as starting points rather than absolute values."
    }
  ];

  // FAQ页面的结构化数据
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="page-container">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about color temperature, white balance, and using our color temperature analyzer tool for photography."
        keywords="color temperature FAQ, white balance questions, photography color temperature, kelvin photography, image analysis FAQ"
        canonical="/faq"
        structuredData={faqStructuredData}
      />

      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">
          Everything you need to know about color temperature analysis and our tool
        </p>
      </div>

      <section className="faq-section">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-categories">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Getting Started</h3>
            <ul>
              <li>What is color temperature?</li>
              <li>How to upload images</li>
              <li>Understanding results</li>
            </ul>
          </div>
          <div className="category-card">
            <h3>Technical Questions</h3>
            <ul>
              <li>Accuracy and precision</li>
              <li>Supported formats</li>
              <li>Privacy and security</li>
            </ul>
          </div>
          <div className="category-card">
            <h3>Photography Tips</h3>
            <ul>
              <li>White balance settings</li>
              <li>Lighting techniques</li>
              <li>Color correction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="still-have-questions">
        <h2>Still Have Questions?</h2>
        <p>Can't find the answer you're looking for? Check our detailed guide or contact us directly.</p>
        <div className="question-buttons">
          <Link to="/how-it-works" className="secondary-button">Read Our Guide</Link>
          <Link to="/contact" className="primary-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 