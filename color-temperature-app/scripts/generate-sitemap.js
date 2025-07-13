const fs = require('fs');
const path = require('path');

// 网站URL
const SITE_URL = 'https://colortemperature.com';

// 页面路由和优先级配置
const pages = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/features', changefreq: 'monthly', priority: '0.8' },
  { path: '/how-it-works', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.4' }
];

// 获取当前日期，格式为 YYYY-MM-DD
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// 生成sitemap.xml内容
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // 为每个页面添加URL条目
  pages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${page.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// 将生成的sitemap写入文件
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

// 执行生成
writeSitemap(); 