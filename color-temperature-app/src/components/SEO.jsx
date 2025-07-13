import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  image,
  structuredData,
  children 
}) => {
  // Default values and site constants
  const siteName = "Color Temperature Analyzer";
  const siteUrl = "https://colortemperature.com";
  
  // Build full title
  const fullTitle = title 
    ? `${title} | ${siteName}` 
    : "Color Temperature Analyzer - Analyze Photo Color Temperature";
  
  // Use provided description or default
  const metaDescription = description || "Upload your photo to analyze its color temperature in Kelvin and get professional camera white balance recommendations. Free online tool for photographers.";
  
  // Use provided keywords or default
  const metaKeywords = keywords || "color temperature, photo analysis, white balance, kelvin, photography tool, camera settings, image analysis";
  
  // Use provided canonical URL or default
  const canonicalLink = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  // Use provided image or default
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  const twitterImage = image || `${siteUrl}/twitter-image.jpg`;

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        {/* Basic meta tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={siteName} />
        
        {/* Canonical link */}
        <link rel="canonical" href={canonicalLink} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalLink} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={fullTitle} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalLink} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:image:alt" content={fullTitle} />
        <meta name="twitter:creator" content="@colortemp" />
        <meta name="twitter:site" content="@colortemp" />
        
        {/* Other important meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Structured data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  structuredData: PropTypes.object,
  children: PropTypes.node
};

export default SEO; 