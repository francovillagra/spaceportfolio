'use client';

import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-[#030014] text-white flex flex-col">
      {children}
    </div>
  );
}

/**
 * MainLayout.tsx
 *
 * Este componente define el diseño general de la aplicación.
 * Su función es envolver todas las páginas o secciones con un estilo consistente,
 * aplicando fondo oscuro y texto blanco en todo el contenido.
 *
 * - Asegura un fondo uniforme para toda la página.
 * - Organiza el contenido en un layout flexible y vertical.
 * - Es reutilizable: cualquier contenido se renderiza dentro de él con `children`.
 * - Sirve como estructura base para todo el portafolio.
 */
