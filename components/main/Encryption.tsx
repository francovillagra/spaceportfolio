"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

const Encryption = () => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden z-10">
      
      {/* Video de fondo */}
      <video 
        loop
        muted
        autoPlay
        playsInline
        preload="none"
        className="w-full h-full object-cover absolute top-0 left-0 z-10 mix-blend-screen opacity-[.5] brightness-[.85]"
        src="/encryption.webm"
      />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-2">

        {/* Candado + Encryption */}
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-4 transition-all duration-200 group-hover:translate-y-10"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 -mt-2"
          />

          {/* Etiqueta Encryption (más pequeña y sutil) */}
          <div className="Welcome-box mt-1 px-[5px] py-[1px] border border-[#7042f88b] opacity-[0.65] -mt-2 translate-x-[-19px]">
            <h1 className="text-[10px] text-gray-500 font-light tracking-wide">Encryption</h1>

          </div>
        </div>

    {/* Frase elegante en cursiva debajo de todo, al borde inferior */}
<div className="absolute bottom-[-150] left-1/2 -translate-x-[170px] w-full text-center px-4">
  <div className="text-[14px] italic font-serif text-gray-300 leading-tight whitespace-nowrap">
    Protege tus datos con cifrado de extremo a extremo
  </div>
</div>


        {/* Frase principal */}
        <motion.div
          variants={slideInFromTop(0.3)}
          initial="hidden"
          animate="visible"
          className="text-center text-gray-200 text-2xl font-semibold"
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
