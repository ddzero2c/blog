const fs = require('fs');
const path = require('path');
const { getSortedPostsData } = require('../lib/posts');

// Configuration
const SITE_URL = 'https://blog.ddzero2c.dev';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Add the home page -->
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add the about page -->
  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all blog posts -->
  ${posts
    .map(({ slug, date }) => {
      return `
  <url>
    <loc>${SITE_URL}/posts/${slug}</loc>
    <lastmod>${new Date(date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
</urlset>`;
}

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Generate the sitemap
const posts = getSortedPostsData();
const sitemap = generateSiteMap(posts);

// Write the sitemap to the public directory
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully');