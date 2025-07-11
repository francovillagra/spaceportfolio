'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/main/Navbar'), { ssr: false });

type Props = {
  children?: ReactNode;
};

const ClientOnlyComponents = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ClientOnlyComponents;
