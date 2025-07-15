'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/shared/Navbar'), { ssr: false });
const Particles = dynamic(() => import('@/components/shared/InteractiveParticles'), { ssr: false });

type Props = {
  children?: ReactNode;
};

const ClientOnlyComponents = ({ children }: Props) => {
  return (
    <>
      <Particles />
      <Navbar />
      {children}
    </>
  );
};

export default ClientOnlyComponents;
