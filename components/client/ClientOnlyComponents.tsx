'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Navbar = dynamic(() => import('@/components/main/Navbar'));
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'));
const VideoOverlay = dynamic(() => import('@/components/main/VideoOverlay'));

const ClientOnlyComponents = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <StarsCanvas />
      <VideoOverlay />
      <Navbar />
      <main className="relative z-10">{children}</main> {/* Aquí va tu contenido principal */}
    </>
  );
};

export default ClientOnlyComponents;
