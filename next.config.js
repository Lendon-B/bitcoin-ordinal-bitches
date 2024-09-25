/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ordinals.com',
        pathname: '/content/**',
      },
    ],
  },
}

module.exports = nextConfig
