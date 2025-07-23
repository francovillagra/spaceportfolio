'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Personal',
    description: 'Mi portfolio web moderno hecho con Next.js, Tailwind y React.',
    imageUrl: '/projects/portfolio.png',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    projectLink: 'https://tu-portfolio-url.com',
  },
  {
    title: 'App de Tareas',
    description: 'Aplicación para gestionar tareas con autenticación y backend en Node.js.',
    imageUrl: '/projects/tasks.png',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React'],
    projectLink: 'https://github.com/tuusuario/app-tareas',
  },
  // Agrega más proyectos aquí
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-[#030014] px-6 py-12 gap-12">
      <h2 className="text-4xl font-bold text-white mb-8">Proyectos</h2>
      <div className="max-w-5xl w-full flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
