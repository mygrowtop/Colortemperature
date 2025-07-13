import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website URL
const SITE_URL = 'https://colortemperature.com';

// Page routes and priority configuration
const pages = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/features', changefreq: 'monthly', priority: '0.8' },
  { path: '/how-it-works', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.4' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.4' }
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap.xml content
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add URL entry for each page
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

// Write generated sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

// Execute generation
writeSitemap(); 