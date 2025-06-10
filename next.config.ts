import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        'tailwindcss': require.resolve('tailwindcss'),
        'postcss': require.resolve('postcss'),
        'autoprefixer': require.resolve('autoprefixer'),
        'three': require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber')
      },
      
      // CONFIGURACIÓN CORREGIDA DE LOADERS:
      loaders: {
        '.css': ['postcss'] // Ahora es un array como requiere Turbopack
      }
    },
    optimizeCss: true,
    optimizeServerReact: true
  },

  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  compiler: {
    styledComponents: false
  }
}

export default nextConfig