"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center z-10'>
      <p className="text-white">TEST VIDEO</p> // Prueba para ver si Encryption se renderiza

      {/* Título animado */}
      <div className='absolute top-0 z-10'>
        <motion.div
          variants={slideInFromTop}
          className='text-[40px] font-medium text-center text-gray-200'
        >
          <span className="font-sans text-5xl font-bold">
            Performance{" "}
            <span className="font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              &
            </span>
          </span>
          <span className="font-sans text-5xl font-bold">Seguridad</span>
        </motion.div>
      </div>

      {/* Íconos */}
      <div className='absolute z-20 flex flex-col items-center justify-center translate-y-[-50px]'>
        <div className='flex flex-col items-center group cursor-pointer'>
          <Image
            src="/LockTop.png"
            alt='Lock top'
            width={50}
            height={50}
            className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
          />
          <Image
            src="/LockMain.png"
            alt='Lock Main'
            width={70}
            height={70}
            className='z-10'
          />
        </div>
      </div>

      {/* Video */}
      <div className='w-full min-h-[400px] object-cover opacity-80'>
        <video 
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className='w-full h-full object-cover z-20'
          style={{ zIndex: 50, position: 'absolute', top: 0, left: 0 }}
          src="/encryption.webm"
        />
      </div>

    </div>
  );
};

export default Encryption;
