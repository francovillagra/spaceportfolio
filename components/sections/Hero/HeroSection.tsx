"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20 w-full z-[20] min-h-screen"
    >
      {/* Fondo de partículas */}
      <ParticlesBackground />

      {/* Texto izquierda */}
      <div className="w-full flex flex-col gap-5 justify-center text-start">
        {/* Bienvenida */}
        <motion.div variants={slideInFromTop(0.5)}>
          <div className="py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center Welcome-box">
            <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4" />
            <Paragraph size="xs" className="text-white font-medium uppercase tracking-tight font-sans">
              Portfolio Desarrollador Fullstack
            </Paragraph>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-2 mt-6 text-white max-w-[600px] leading-tight">
          <Title level="h1">
            Ofreciendo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              la mejor
            </span>
          </Title>
          <Title level="h1">experiencia de proyecto</Title>
        </motion.div>

        {/* Descripción */}
        <motion.div variants={slideInFromLeft(0.8)}>
          <Paragraph className="text-gray-400 my-5 max-w-[600px] text-lg">
            Bienvenido a mi laboratorio digital, donde experimento con ideas, construyo soluciones y aprendo algo nuevo cada día. Disfruto resolver problemas con tecnología y transformar ideas en soluciones funcionales. Te invito a conocer mis proyectos.
          </Paragraph>
        </motion.div>

        {/* Botón */}
        <motion.div variants={slideInFromLeft(1)}>
          <Button variant="primary" className="max-w-[200px]">
            Saber más!
          </Button>
        </motion.div>
      </div>

      {/* Imagen derecha */}
      <motion.div variants={slideInFromRight(0.8)} className="relative w-full md:w-1/2 h-auto flex justify-center items-center mt-10 md:mt-0">
        <div className="relative w-[300px] md:w-[600px] lg:w-[800px] h-auto transform-image-shift">
          <Image
            src="/mainIconsdark.svg"
            alt="Iconos de herramientas de desarrollo"
            height={900}
            width={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
