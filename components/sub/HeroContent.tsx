"use client"; // ✅ Correcto para Next.js 13+

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 pt-20 w-full z-[20] min-h-screen"
    >
      {/* Contenedor de la izquierda (texto) */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Sección del título */}
<motion.div
  variants={slideInFromTop(0.5)}
  className="Welcome-box py-2 px-1 border border-[#7042f88b] opacity-90 flex items-center"
>
  <SparklesIcon className="text-[#b49bff] mr-1 h-3 w-3" />
  <h1 className="text-[10px] text-white font-medium uppercase tracking-tight font-sans">
    Portfolio Desarrollador Fullstack
  </h1>
</motion.div>


        {/* Título principal */}
<motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-3 mt-6 text-white max-w-[600px] w-auto h-auto leading-tight"
>
  <span className="font-sans text-5xl font-bold">
    Ofreciendo{" "}
    <span className="font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      la mejor
    </span>
  </span>
  <span className="font-sans text-5xl font-bold">experiencia de proyecto</span>
</motion.div>



        {/* Descripción */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Bienvenido a mi laboratorio digital, donde experimento con ideas, construyo soluciones y aprendo algo nuevo cada día. Disfruto resolver problemas con tecnología y transformar ideas en soluciones funcionales. Te invito a conocer mis proyectos.
        </motion.p>

        {/* Botón "Saber más" */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-4 rounded-lg text-white text-center cursor-pointer hover:opacity-90 transition max-w-[200px]"
        >
          Saber más!
        </motion.a>
      </div>

{/* Contenedor de la derecha (imagen) */}
<motion.div
  variants={slideInFromRight(0.8)}
  className="relative w-full md:w-1/2 h-auto felx justify-center items-center"
>
  <div className="relative w-[800px] h-auto"
    style={{
      transform: 'translateY(-10px) translateX(60px)',
    }}
  >
    <Image
      src="/mainIconsdark.svg"
      alt="work icons"
      height={900}
      width={600}
      className="w-full h-auto object-contain"
    />
  </div>
</motion.div> // </motion.div>

);
};

export default HeroContent;