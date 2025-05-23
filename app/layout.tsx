import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'
import ClientOnlyComponents from '@/components/client/ClientOnlyComponents'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Tu Portafolio',
  description: 'Portafolio personal con Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${openSans.className} relative bg-[#030014]`}>
        <ClientOnlyComponents />
        {children}
      </body>
    </html>
  )
}
