import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Fuentes optimizadas
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const openSans = Open_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-open-sans',
  display: 'swap'
})

// Carga dinámica del componente que requiere Three.js
const ClientOnlyComponents = dynamic(
  () => import('@/components/client/ClientOnlyComponents'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[-1]" /> // Placeholder para el fondo de estrellas
  }
)

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal con tecnologías modernas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${openSans.variable}`}>
      <body>
        <ClientOnlyComponents />
        {children}
      </body>
    </html>
  )
}