'use client';

import dynamic from 'next/dynamic';

// Ya estamos en un componente cliente, no hace falta `ssr: false`
const Navbar = dynamic(() => import('@/components/main/Navbar'));
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'));
const VideoOverlay = dynamic(() => import('@/components/main/VideoOverlay'));

const ClientOnlyComponents = () => {
  return (
    <>
      <StarsCanvas />  {/* Fondo - z-[-2] */}
      <VideoOverlay /> {/* Blackhole - z-[-1] */}
      <Navbar />       {/* Encima - z-10 o superior */}
    </>
  );
};

export default ClientOnlyComponents;
