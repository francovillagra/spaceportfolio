import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import ClientOnlyComponents from '@/components/client/ClientOnlyComponents'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal con tecnologías modernas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${openSans.className}`}>
        <ClientOnlyComponents /> // Acá se renderiza StarCanvas (el fondo de estrellas)
        {children}
      </body>
    </html>
  )
}
