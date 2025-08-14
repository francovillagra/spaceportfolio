'use client';

import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="es" className={inter.className}>
      <head />
      <body className="bg-[#030014] text-white relative overflow-hidden">
        
        {/* Fondo de partículas - Siempre fijo atrás */}
        <div className="fixed inset-0 -z-10">
          <ParticlesBackground />
        </div>

        {/* Contenido con animación de transición */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        
      </body>
    </html>
  );
}
