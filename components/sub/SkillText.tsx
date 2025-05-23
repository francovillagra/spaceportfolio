"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(0.5)}
        className="Welcome-box py-2 px-1 border border-[#7042f88b] opacity-90 flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-1 h-3 w-3" />
        <h1 className="text-[10px] text-white font-medium uppercase tracking-tight font-sans">
          Think better with Next.js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
