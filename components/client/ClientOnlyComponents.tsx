'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });
const VideoOverlay = dynamic(() => import('@/components/main/VideoOverlay'), { ssr: false });

const ClientOnlyComponents = () => {
  return (
    <>
      <StarsCanvas />  // Fondo - z-[-2]
      <VideoOverlay /> // Blackhole - z-[-1]
      <Navbar />      // Encima - z-10 o superior
    </>
  );
};

export default ClientOnlyComponents;
