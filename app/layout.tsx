// layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import ClientOnlyComponents from '@/components/client/ClientOnlyComponents'
import Footer from '@/components/main/Footer'

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal con tecnologías modernas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ Import manual de Open Sans desde Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@400;700&display=swap"
        />
      </head>
      <body className="font-sans">
        <ClientOnlyComponents />
        {children}
        <Footer />
      </body>
    </html>
  )
}
