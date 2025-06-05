"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden z-10">
      
      {/* Video de fondo con mezcla */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 mix-blend-screen brightness-75"
        src="/encryption.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenido centrado: candado arriba, texto debajo */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        {/* Candado */}
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        {/* Texto */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-center text-gray-200 text-3xl font-semibold"
        >
          <span className="font-sans">
            Performance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              &amp;
            </span>{" "}
            Seguridad
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Encryption;
