import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configuración básica
  reactStrictMode: true,
  
  // Configuración experimental para Turbopack
  experimental: {
    turbo: {
      resolveAlias: {
        // Soluciona problemas comunes con Tailwind
        'tailwindcss': require.resolve('tailwindcss'),
        'postcss': require.resolve('postcss'),
        'autoprefixer': require.resolve('autoprefixer'),
        
        // Aliases para Three.js si es necesario
        'three': require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber')
      },
      
      // Opciones adicionales de Turbopack
      loaders: {
        '.css': 'postcss' // Asegura el procesamiento correcto de CSS
      }
    },
    
    // Otras optimizaciones
    optimizeCss: true, // Puedes activarlo con esta configuración
    optimizeServerReact: true
  },

  // Transpilación de paquetes necesarios
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath'
  ],

  // Configuración del compilador
  compiler: {
    styledComponents: false // Mantener false si no usas esta librería
  }
}

export default nextConfig