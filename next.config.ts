import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Paquetes que necesitan transpilación
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  // Configuración de Webpack
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Aliases para Three.js
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      'three': path.resolve('./node_modules/three'),
      
      // Alias principal para tu proyecto (sin src/)
      '@': path.resolve(__dirname), // Apunta al directorio raíz
    }
    return config
  },

  // Configuración experimental para Turbopack
  experimental: {
    // Configuración turbo opcional
    turbo: process.env.USE_TURBO === 'true' ? {
      resolveAlias: {
        'three': require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber'),
        '@': path.resolve(__dirname) // Alias para Turbopack
      }
    } : undefined,
    
    // Otras configuraciones experimentales
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['three', '@react-three/fiber']
  }
}

export default nextConfig