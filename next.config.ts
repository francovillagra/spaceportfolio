import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Para Turbopack: usar solo serverExternalPackages
  serverExternalPackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      'three': path.resolve('./node_modules/three'),
      '@': path.resolve(__dirname),
    }
    return config
  },

  experimental: {
    turbo: {} // ✅ Formato correcto en Next.js 15+
  }
}

export default nextConfig
