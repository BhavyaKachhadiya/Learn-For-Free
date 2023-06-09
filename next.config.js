/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js

module.exports = {
  experimental: {
    serverActions: true
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'yt3.googleusercontent.com'
        },
      ],
    },
  }