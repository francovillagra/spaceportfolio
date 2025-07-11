
'use client';

import { useState } from 'react';
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import MainMenu from "@/components/navigation/MainMenu";
import BackButton from "@/components/shared/BackButton";
import TransitionWrapper from "@/components/shared/TransitionWrapper";

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | 'hero' | 'skills' | 'projects'>(null);

  return (
    <main className="relative min-h-screen w-full z-10">
      {/* Fondo accesible */}
      <h1 className="sr-only">Portafolio de Franco Villagra</h1>

      {!activeSection && (
        <MainMenu setSection={setActiveSection} />
      )}

      {activeSection && (
        <>
          <TransitionWrapper>
            {activeSection === 'hero' && <Hero />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'projects' && <Projects />}
          </TransitionWrapper>
          <BackButton onClick={() => setActiveSection(null)} />
        </>
      )}
    </main>
  );
}


