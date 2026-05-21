import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*.loca.lt'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

export default nextConfig
