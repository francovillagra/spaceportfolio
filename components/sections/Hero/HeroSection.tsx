'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { Card } from '@/components/ui/Card';
import Title from '@/components/ui/Title';
import Paragraph from '@/components/ui/Paragraph';

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 pt-20 w-full z-[20] min-h-screen"
    >
      {/* Texto izquierda */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop(0.5)}>
          <Card className="py-2 px-1 border border-[#7042f88b] opacity-90 flex items-center Welcome-box">
            <SparklesIcon className="text-[#b49bff] mr-1 h-3 w-3" />
            <Paragraph size="xs" className="text-white font-medium uppercase tracking-tight font-sans">
              Portfolio Desarrollador Fullstack
            </Paragraph>
          </Card>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <Title level="h1">
            Ofreciendo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              la mejor
            </span>
          </Title>
          <Title level="h1">experiencia de proyecto</Title>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)}>
          <Paragraph className="text-gray-400 my-5 max-w-[600px] text-lg">
            Bienvenido a mi laboratorio digital, donde experimento con ideas, construyo soluciones y aprendo algo nuevo cada día. Disfruto resolver problemas con tecnología y transformar ideas en soluciones funcionales. Te invito a conocer mis proyectos.
          </Paragraph>
        </motion.div>

        <motion.div variants={slideInFromLeft(1)}>
          <Button variant="primary" className="max-w-[200px]">
            Saber más!
          </Button>
        </motion.div>
      </div>

      {/* Imagen derecha */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative w-full md:w-1/2 h-auto flex justify-center items-center"
      >
        <div className="relative w-[800px] h-auto transform-image-shift">
          <Image
            src="/mainIconsdark.svg"
            alt="Iconos de herramientas de desarrollo"
            height={900}
            width={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
