'use client';

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#030014] px-6">
      <div className="max-w-3xl w-full text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
        <p className="text-lg text-gray-400">
          Tengo experiencia en el desarrollo Fullstack: desde interfaces modernas con React y Tailwind, hasta APIs robustas con Node.js, Express y bases de datos SQL/NoSQL. También he trabajado con herramientas de CI/CD y despliegue en la nube.
        </p>
      </div>
    </section>
  );
}
