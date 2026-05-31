/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/adtivio-landing',
  assetPrefix: '/adtivio-landing/',
};

module.exports = nextConfig;
