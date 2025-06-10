import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Nueva ubicación para configuración Turbopack
  turbopack: {
    resolveAlias: {
      'tailwindcss': require.resolve('tailwindcss'),
      'postcss': require.resolve('postcss'),
      'autoprefixer': require.resolve('autoprefixer'),
      'three': require.resolve('three'),
      '@react-three/fiber': require.resolve('@react-three/fiber')
    },
    // Nueva sintaxis para reglas (reemplaza loaders)
    rules: {
      '*.css': ['postcss']
    }
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