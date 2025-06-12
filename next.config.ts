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

  // Nueva ubicación para paquetes externos
  serverExternalPackages: ['three', '@react-three/fiber'],

  // Configuración de Webpack (elimina esmExternals)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      'three': path.resolve('./node_modules/three'),
      '@': path.resolve(__dirname),
    }
    return config
  },

  // Opcional: Desactiva Turbopack si prefieres Webpack
  // experimental: {
  //   turbo: false
  // }
}

export default nextConfig