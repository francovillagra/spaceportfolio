'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a <span className="text-indigo-500">Francoverse</span>
      </motion.h1>

      <motion.h2
        className="text-lg md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Desarrollador Fullstack | Explorando tecnologías modernas
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Construyo soluciones web combinando rendimiento, diseño y creatividad.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Button className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700">
          Ver proyectos
        </Button>
        <a
          href="/FrancoVillagra-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="px-6 py-2 border-gray-500">
            Descargar CV
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
