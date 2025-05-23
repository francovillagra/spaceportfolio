"use client";

import dynamic from "next/dynamic";
import React from "react";

// Importamos los componentes con SSR deshabilitado
const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });

const ClientOnlyComponents = () => {
  return (
    <>
      <Navbar />
      <StarsCanvas />
    </>
  );
};

export default ClientOnlyComponents;
