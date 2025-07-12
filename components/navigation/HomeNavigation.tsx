'use client';

import React from 'react';

const HomeNavigation = () => {
  const handleSectionClick = (section: string) => {
    console.log(`Navegar a la sección: ${section}`);
    // Más adelante implementaremos la navegación con animaciones
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-white bg-[#030014] px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Bienvenido a mi Portfolio
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => handleSectionClick('about')}
          className="py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
        >
          Sobre mí
        </button>
        <button
          onClick={() => handleSectionClick('skills')}
          className="py-3 px-6 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition"
        >
          Habilidades
        </button>
        <button
          onClick={() => handleSectionClick('projects')}
          className="py-3 px-6 bg-pink-600 hover:bg-pink-700 rounded-lg transition"
        >
          Proyectos
        </button>
        <button
          onClick={() => handleSectionClick('contact')}
          className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
        >
          Contacto
        </button>
      </div>
    </div>
  );
};

export default HomeNavigation;
/**
 * HomeNavigation.tsx
 * Objetivo del componente:
 * * Mostrar los botones principales del portfolio (Ej: "Sobre mí", "Habilidades", "Proyectos", "Contacto", etc.).
    Cada botón, al hacer clic, dispara una transición de vista mostrando esa sección.
    No hay scroll: se reemplaza el contenido de la pantalla con animaciones (lo haremos luego).
