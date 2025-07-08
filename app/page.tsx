// page.tsx - Página principal de la aplicación Next.js
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen w-full z-10">
        {/* Heading accesible para SEO */}
        <h1 className="sr-only">Portafolio de Franco Villagra</h1>

        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="encryption">
          <Encryption />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

// Este archivo define la estructura principal de la página de inicio de la aplicación Next.js
// Importa los componentes principales y los renderiza en el orden adecuado
// Utiliza Lazy Loading para el fondo de estrellas para mejorar el rendimiento
// Incluye una sección de encabezado accesible para SEO
// El componente Hero muestra la introducción y el nombre del desarrollador
// Skills muestra las habilidades del desarrollador
// Encryption muestra un componente relacionado con la criptografía
// Projects muestra los proyectos destacados del portafolio
// El uso de 'dynamic' permite cargar componentes pesados solo en el cliente, mejorando la carga inicial de la página
// Este enfoque modular permite una fácil actualización y mantenimiento del portafolio
// La estructura es compatible con Next.js y aprovecha sus características de renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG)
// Este archivo es parte de un portafolio personal desarrollado por Franco Villagra