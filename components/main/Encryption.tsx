"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="none"
        src="/encryption.webm"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 mix-blend-screen z-0"
      />

      {/* Título */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] z-20">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="font-sans text-5xl font-bold">
            Performance{" "}
            <span className="font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              &nbsp;&
            </span>
          </span>{" "}
          <span className="font-sans text-5xl font-bold">Seguridad</span>
        </motion.div>
      </div>

      {/* Candado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
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
      </div>
    </div>
  );
};

export default Encryption;
