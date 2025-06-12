'use client';

import dynamic from 'next/dynamic';

// Aquí sí se puede usar ssr: false
const ClientOnlyComponents = dynamic(
  () => import('@/components/client/ClientOnlyComponents'),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[-1]" />
  }
);

const ClientWrapper = () => {
  return <ClientOnlyComponents />;
};

export default ClientWrapper;
