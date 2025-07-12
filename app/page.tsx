// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-[#030014] px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">¡Bienvenido a mi Portfolio!</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8">
        Soy Franco Villagra, desarrollador fullstack.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/about"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-6 rounded-lg text-white hover:opacity-90 transition"
        >
          Sobre mí
        </Link>
        <Link
          href="/skills"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-6 rounded-lg text-white hover:opacity-90 transition"
        >
          Habilidades
        </Link>
        <Link
          href="/projects"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-6 rounded-lg text-white hover:opacity-90 transition"
        >
          Proyectos
        </Link>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-6 rounded-lg text-white hover:opacity-90 transition"
        >
          Contacto
        </Link>
      </div>
    </main>
  );
}
/**
 * Home.tsx
 * * Este es el componente principal de la página de inicio del portfolio.
 * * * Su objetivo es dar la bienvenida al visitante y ofrecer enlaces a las secciones principales del portfolio,
 * * * como "Sobre mí", "Habilidades", "Proyectos" y "Contacto".
 */