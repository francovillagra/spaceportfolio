// components/Sections/Projects/ProjectsSection.tsx
'use client';

import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import Paragraph from '@/components/ui/Paragraph';

export default function ProjectsSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#030014] px-6 py-12">
      <Container>
        <Title>Proyectos</Title>
        <Paragraph>
          Aquí puedes explorar algunos de los proyectos en los que he trabajado. Cada uno refleja mi pasión
          por resolver problemas con tecnología y crear soluciones funcionales.
        </Paragraph>

        {/* Aquí podrías agregar un listado de proyectos en el futuro */}
      </Container>
    </section>
  );
}
