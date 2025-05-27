"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  console.log(`SkillDataProvider: index ${index}`, { src, width, height }); // Agrego console.log para debuggear los datos

  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0}
  };

    // Validar datos
  if (!src || typeof src !== 'string' || typeof width !== 'number' || typeof height !== 'number' ) {
    console.error(`SkillDataProvider: Datos invalidos para index ${index}:`, { src, width, height});
    return null; // Esto previene el crash si src es undefined
  }

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
        custom={index}
        transition={{
          delay: index * 0.3,
          duration: 0.6,
          ease: "easeOut"
        }}
        >
          <Image
            src={src}
            width={width}
            height={height}
            alt="skill image"
            style={{ height: 'auto' }} // Esto asegura que una dimensión sea automatica
            onError={() => console.error("Error loading image", src)}
          />
        </motion.div>
    );
};

export default SkillDataProvider;
