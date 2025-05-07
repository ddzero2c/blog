/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
  },
  // When using a custom domain, we don't need basePath
  basePath: '',
}

module.exports = nextConfig