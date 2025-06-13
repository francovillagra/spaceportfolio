'use client';

import dynamic from 'next/dynamic';

const ClientOnlyComponents = dynamic(
  () => import('@/components/client/ClientOnlyComponents'),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[-1]" />
  }
);

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ClientOnlyComponents>{children}</ClientOnlyComponents>;
};

export default ClientWrapper;
