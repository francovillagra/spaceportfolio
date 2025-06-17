'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });
const StarBackground = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });
const VideoOverlay = dynamic(() => import('@/components/main/VideoOverlay'), { ssr: false });

type Props = {
  children?: ReactNode;
};

const ClientOnlyComponents = ({ children }: Props) => {
  return (
    <>
      <StarBackground />  {/* Fondo - z-[-2] */}
      <VideoOverlay />  {/* Blackhole - z-[-1] */}
      <Navbar />        {/* Encima - z-10 o superior */}
      {children}
    </>
  );
};

export default ClientOnlyComponents;
