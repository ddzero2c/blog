/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
  },
  // Adjust based on your GitHub username and repository name
  // e.g. if your repo is github.com/ddzero2c/blog
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
}

module.exports = nextConfig