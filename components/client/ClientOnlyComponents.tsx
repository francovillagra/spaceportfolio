'use client';

import dynamic from "next/dynamic";
import React from "react";
import VideoOverlay from '@/components/main/VideoOverlay';

const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });

const ClientOnlyComponents = () => {
  return (
    <>
      <StarsCanvas />
      <VideoOverlay />
      <Navbar />
    </>
  );
};

export default ClientOnlyComponents;
