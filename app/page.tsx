'use client';

import Link from 'next/link';
import HeroSection from '@/components/sections/Hero';
import { ProjectsSection } from '@/components/sections/Projects';

export default function Home() {
  return (
    <>
      {/* Sección principal del Hero */}
      <HeroSection />

      {/* Bienvenida + links a secciones individuales */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Bienvenido a mi Portfolio
        </h1>
        <p className="text-lg mb-12 text-center max-w-xl">
          Elige una sección para explorar más detalles sobre mi trabajo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <Link
            href="/section/hero"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-6 text-center hover:opacity-90 transition"
          >
            Ver Hero
          </Link>
          <Link
            href="/section/skills"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-6 text-center hover:opacity-90 transition"
          >
            Ver Skills
          </Link>
          <Link
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-6 text-center hover:opacity-90 transition"
          >
            Ver Projects
          </Link>
        </div>
      </main>

      {/* Sección de proyectos con ID y animación */}
      <ProjectsSection />
    </>
  );
}
