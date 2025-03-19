"use client"; // Solo si estás usando Next.js 13+

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion"; // Importa todas las animaciones
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'; // Importa Image de next/image

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Contenedor de la izquierda (texto) */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Sección del título */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop(0.5)} // Animación de deslizamiento desde arriba
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1
            className="Welcome-text font-cursive"
            style={{
              fontSize: '10px', // Tamaño de la fuente
              color: '#ffffff', // Color del texto
              fontFamily: 'Arial, sans-serif', // Fuente
              fontWeight: 'bold', // Texto en negrita
              textTransform: 'uppercase', // Texto en mayúsculas
              letterSpacing: '-1px', // Espacio entre letras
            }}
          >
            Portfolio Desarrollador Fullstack
          </h1>
        </motion.div>

        {/* Título principal */}
        <motion.div
          initial="hidden" // Estado incial
          animate="visible" // Estado final
          variants={slideInFromLeft(0.5)} // Animación de deslizamiento desde la izquierda
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            The best
          </span>
          project experience
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={slideInFromLeft(0.8)} // Animación de deslizamiento desde la izquierda
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a FullStack Developer. I enjoy programming and technology, building software applications, and exploring new ways to improve their efficiency.
 
       </motion.p>

        {/* Botón "Learn more" */}
        <motion.a
          variants={slideInFromLeft(1)} // Animación de deslizamiento desde la izquierda
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Saber más!
        </motion.a>
      </div>

      {/* Contenedor de la derecha (imagen) */}
<motion.div
  variants={slideInFromRight(0.8)} // Animación de deslizamiento desde la derecha
  className="w-1/2 h-full flex justify-end items-center" // Cambia justify-center a justify-end
>
  <Image
    src="/mainIconsdark.svg" // Ruta de la imagen
    alt="work icons"
    height={800} // Reducir el tamaño de la imagen
    width={2300}
    className="max-w-full h-auto" // Hacer la imagen responsive
  />
</motion.div>
    </motion.div>
  );
};

export default HeroContent; // Exportación correcta