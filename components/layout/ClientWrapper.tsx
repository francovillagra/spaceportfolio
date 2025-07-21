'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type SectionKey = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'hero';

interface SectionContextProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection debe usarse dentro de un ClientWrapper');
  }
  return context;
};

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}
