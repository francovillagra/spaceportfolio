import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      'three': path.resolve('./node_modules/three')
    }
    return config
  },

  // Configuración turbo corregida
  experimental: process.env.USE_TURBO === 'true' ? {
    turbo: {
      resolveAlias: {
        'three': require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber')
      }
    }
  } : undefined // Usamos undefined en lugar de false
}

export default nextConfig