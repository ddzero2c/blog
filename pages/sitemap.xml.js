import { getSortedPostsData } from '../lib/posts'

const SITE_URL = 'https://blog.ddzero2c.dev'

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
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  // Get all posts
  const posts = getSortedPostsData()

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  // getServerSideProps will handle this
  return null
}