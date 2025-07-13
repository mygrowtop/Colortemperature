import React from 'react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  // 服务条款页面的结构化数据
  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Color Temperature Analyzer",
    "description": "Terms of service for the Color Temperature Analyzer tool, outlining the rules and guidelines for using our color temperature analysis service.",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <div className="page-container">
      <SEO 
        title="Terms of Service"
        description="Our terms of service outline the rules and guidelines for using the Color Temperature Analyzer tool, including acceptable use and intellectual property rights."
        keywords="terms of service, user agreement, acceptable use policy, image analysis terms"
        canonical="/terms-of-service"
        structuredData={termsStructuredData}
      />

      <div className="page-header">
        <h1>Terms of Service</h1>
        <p className="subtitle">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="content-container">
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Color Temperature Analyzer. These Terms of Service govern your use of our website and the color temperature analysis tool provided by us.
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Use of Service</h2>
          <p>
            The Color Temperature Analyzer is provided as a free service for analyzing the color temperature of images. You may use this service for personal or professional purposes, subject to these Terms.
          </p>
          <h3>Acceptable Use</h3>
          <p>You agree not to use the service:</p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>In any way that could disable, overburden, damage, or impair the service or interfere with any other party's use of the service</li>
            <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the service, the server on which the service is stored, or any server, computer, or database connected to the service</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of Color Temperature Analyzer and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent.
          </p>
          <h3>User Content</h3>
          <p>
            When you upload images to our service for analysis, you retain all your ownership rights in your images. However, by uploading images, you grant us the technical permissions necessary to process your images for the purpose of providing the color temperature analysis service.
          </p>
          <p>
            <strong>Important:</strong> We do not store, transmit to our servers, or retain any copies of your images. All image processing occurs within your browser using client-side JavaScript.
          </p>
        </section>

        <section className="policy-section">
          <h2>Disclaimer of Warranties</h2>
          <p>
            The service is provided on an "AS IS" and "AS AVAILABLE" basis. The company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, the company does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the service or otherwise relating to the service or on any sites linked to the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall the company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ol>
            <li>Your access to or use of or inability to access or use the service;</li>
            <li>Any conduct or content of any third party on the service;</li>
            <li>Any content obtained from the service; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless the company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to Terms of Service</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="contact-list">
            <li>By email: legal@colortemperature.com</li>
            <li>By visiting the contact page on our website: <a href="/contact">Contact Page</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 