'use client';

import dynamic from "next/dynamic";
import React from "react";
import StarsCanvas from './StarBackground';
import VideoOverlay from '@/components/main/VideoOverlay';
import Navbar from '@/components/main/Navbar'; // Probando con Dynamic, sino lo saco

const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });

const ClientOnlyComponents = () => {
  return (
    <>
      <StarsCanvas /> // Fondo de estrellas
      <VideoOverlay /> 
      <Navbar />
    </>
  );
};

export default ClientOnlyComponents;
