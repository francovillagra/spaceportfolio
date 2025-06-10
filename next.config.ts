import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Configuración para Three.js y react-three-fiber
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  // Configuración de Webpack para resolver problemas de rutas en Windows
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      'three': path.resolve('./node_modules/three')
    }
    return config
  },

  // Desactivar Turbopack temporalmente si es necesario
  experimental: {
    turbo: process.env.USE_TURBO === 'true' ? {
      resolveAlias: {
        'three': require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber')
      }
    } : false
  }
}

export default nextConfig