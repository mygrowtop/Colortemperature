/**
 * 全局组织结构化数据
 * 用于在所有页面中提供一致的组织信息
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Color Temperature Analyzer",
  "url": "https://colortemperature.com",
  "logo": "https://colortemperature.com/logo.png",
  "sameAs": [
    "https://twitter.com/colortemp",
    "https://www.instagram.com/colortemperature",
    "https://www.linkedin.com/company/color-temperature-analyzer"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "email": "support@colortemperature.com",
    "availableLanguage": ["English"]
  }
};

/**
 * 网站结构化数据
 * 提供网站的整体结构和导航信息
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Color Temperature Analyzer",
  "url": "https://colortemperature.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://colortemperature.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

/**
 * 面包屑导航结构化数据生成器
 * @param {Array} items - 导航项数组，每项包含 name 和 item
 * @returns {Object} - 面包屑结构化数据
 */
export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://colortemperature.com${item.path}`
    }))
  };
};

/**
 * 合并多个结构化数据对象
 * @param {...Object} schemas - 结构化数据对象
 * @returns {Array} - 合并后的结构化数据数组
 */
export const combineSchemas = (...schemas) => {
  return schemas.filter(schema => schema !== null && schema !== undefined);
}; 