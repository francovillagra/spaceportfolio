'use client';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';
import Title from '@/components/ui/Title';
import Paragraph from '@/components/ui/Paragraph';
import Container from '@/components/ui/Container'; // si lo estás usando

export default function AboutSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center px-6 md:px-20"
    >
      <motion.div
        variants={slideInFromTop(0.3)}
        className="max-w-3xl text-center flex flex-col gap-6"
      >
        <Title text="Sobre Mí" className="text-4xl md:text-5xl" />

        <motion.div variants={slideInFromLeft(0.5)}>
          <Paragraph>
            Soy <span className="text-purple-400 font-semibold">Franco Villagra</span>, desarrollador
            Fullstack apasionado por construir soluciones tecnológicas funcionales y elegantes.
            Me encanta experimentar, aprender constantemente y trabajar en proyectos que generen impacto.
          </Paragraph>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
