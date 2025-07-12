'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
};

export default function SectionContainer({ children, id }: Props) {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl w-full">{children}</div>
    </section>
  );
}
/**
 * SectionContainer.tsx
 * Objetivo del componente:
 * * * Contener el contenido de cada sección del portfolio.
 * * Permite centrar el contenido vertical y horizontalmente.
 * * * Acepta un `id` para anclar (scroll a secciones si se necesita).
 * * * * Agrega padding y centrado por defecot para todas las secciones.
 * * * * * Muy fácil de extender: transiciones, estilos condicionales, etc.
 * 
 */