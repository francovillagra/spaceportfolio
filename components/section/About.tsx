'use client';

import SectionContainer from '../Layout/SectionContainer';

export default function About() {
  return (
    <SectionContainer id="about">
      <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
      <p className="text-lg text-gray-300">
        Esta sección contendrá información sobre quién soy, mi experiencia y
        mi enfoque como desarrollador Fullstack.
      </p>
    </SectionContainer>
  );
}
/**
 * About.tsx
 * * Este componente representa la sección "Sobre mí" del portfolio.
 * * Su objetivo es presentar al visitante una breve introducción sobre el desarrollador,
 * * incluyendo su experiencia, habilidades y enfoque profesional.
 */