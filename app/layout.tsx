import './globals.css';
import { Inter, Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import ClientWrapper from '@/components/client/ClientWrapper'; // ✅ Import del wrapper

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal con tecnologías modernas',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${openSans.variable}`}>
      <body>
        <ClientWrapper /> {/* ✅ Este sí puede usar ssr: false */}
        {children}
      </body>
    </html>
  );
}
