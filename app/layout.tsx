// layout.tsx - Estructura raíz de la aplicación Next.js
import './globals.css'
import { ReactNode } from 'react'
import ClientOnlyComponents from '@/components/client/ClientOnlyComponents'
import Footer from '@/components/main/Footer'
import { Inter, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal con tecnologías modernas',
  keywords: ['portafolio', 'desarrollador', 'React', 'Next.js'],
  authors: [{ name: 'Franco Villagra' }],
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${openSans.className}`}>
        <ClientOnlyComponents />
        {children}
        <Footer />
      </body>
    </html>
  )
}
