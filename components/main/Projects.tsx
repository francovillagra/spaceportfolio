import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className="relative z-10 flex flex-col items-center py-20 bg-transparent">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Mis Proyectos
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Portfolio creado con tecnologías modernas como Next.js, Tailwind y más."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Diseños de tarjetas animadas e interactivas para mostrar contenido."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Diseño con temática espacial y fondo dinámico de estrellas."
        />
      </div>
    </div>
  );
};

export default Projects;
