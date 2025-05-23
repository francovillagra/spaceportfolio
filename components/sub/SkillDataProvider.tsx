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
  const { ref, inView } = useInView({ triggerOnce: true })

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: customIndex * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

console.log("Rendering image", src);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      custom={index}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        onError={(e) => console.error("Error loading image", src)}
      />
    </motion.div>
  );
};

export default SkillDataProvider;
