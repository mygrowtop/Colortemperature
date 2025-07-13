import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  // 隐私政策页面的结构化数据
  const privacyPolicyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Color Temperature Analyzer",
    "description": "Privacy policy for the Color Temperature Analyzer tool, explaining how we handle your data and protect your privacy.",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <div className="page-container">
      <SEO 
        title="Privacy Policy"
        description="Our privacy policy explains how the Color Temperature Analyzer handles your data, protects your privacy, and ensures your images remain secure."
        keywords="privacy policy, data protection, image privacy, photography tool privacy"
        canonical="/privacy-policy"
        structuredData={privacyPolicyStructuredData}
      />

      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p className="subtitle">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="content-container">
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Color Temperature Analyzer. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website and tell 
            you about your privacy rights and how the law protects you.
          </p>
          <p>
            This privacy policy applies to all users of our color temperature analysis tool and website visitors.
          </p>
        </section>

        <section className="policy-section">
          <h2>Important Information</h2>
          <h3>Purpose of This Privacy Policy</h3>
          <p>
            This privacy policy aims to give you information on how we collect and process your data through your use of this 
            website, including any data you may provide through this website when you use our color temperature analyzer tool.
          </p>
          <p>
            It is important that you read this privacy policy together with any other privacy policy or fair processing policy 
            we may provide on specific occasions when we are collecting or processing personal data about you so that you are 
            fully aware of how and why we are using your data.
          </p>
        </section>

        <section className="policy-section">
          <h2>The Data We Collect About You</h2>
          <p>
            We collect minimal personal data through our website. The types of data we may collect include:
          </p>
          <ul>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>
          <h3>Image Data</h3>
          <p>
            <strong>Important:</strong> When you use our color temperature analyzer tool, your images are processed entirely within your browser. 
            We do not store, transmit, or have access to the images you upload. The image processing happens client-side using JavaScript, 
            ensuring your visual content remains private.
          </p>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
          </p>
          <p>
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          <h3>Types of Cookies We Use:</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or use a shopping cart.</li>
            <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact us.</p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="contact-list">
            <li>By email: privacy@colortemperature.com</li>
            <li>By visiting the contact page on our website: <a href="/contact">Contact Page</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 