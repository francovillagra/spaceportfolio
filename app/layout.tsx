import './globals.css';
import { Inter, Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import ClientWrapper from '@/components/client/ClientWrapper';
import StarBackground from '@/components/main/StarBackground'; // Ajusta ruta si hace falta
import VideoOverlay from '@/components/main/VideoOverlay'; // Ajusta ruta si hace falta

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
        {/* Fondo de estrellas */}
        <StarBackground />

        {/* Video overlay agujero negro */}
        <VideoOverlay />

        {/* Wrapper cliente si tiene lógica interactiva */}
        <ClientWrapper />

        {/* Contenido principal */}
        {children}
      </body>
    </html>
  );
}
