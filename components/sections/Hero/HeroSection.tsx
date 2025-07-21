'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import SectionWrapper from '@/components/layout/SectionWrapper';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <SectionWrapper className="flex flex-row items-center justify-center px-4 md:px-20 pt-20 w-full z-[20] min-h-screen">
      {/* Texto a la izquierda */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop(0.5)}
          className="Welcome-box py-2 px-1 border border-[#7042f88b] opacity-90 flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-1 h-3 w-3" />
          <p className="text-[10px] text-white font-medium uppercase tracking-tight font-sans">
            Portfolio Desarrollador Fullstack
          </p>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-3 mt-6">
          <Heading level={1}>
            Ofreciendo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              la mejor
            </span>{' '}
            experiencia de proyecto
          </Heading>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)}>
          <Paragraph className="text-lg text-gray-400 max-w-[600px]">
            Bienvenido a mi laboratorio digital, donde experimento con ideas, construyo soluciones y aprendo algo nuevo cada día. Disfruto resolver problemas con tecnología y transformar ideas en soluciones funcionales. Te invito a conocer mis proyectos.
          </Paragraph>
        </motion.div>

        <motion.div variants={slideInFromLeft(1)}>
          <Button variant="primary" className="mt-4 max-w-[200px]">
            Saber más!
          </Button>
        </motion.div>
      </div>

      {/* Imagen a la derecha */}
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
    </SectionWrapper>
  );
};

export default HeroSection;
