'use client';

import { useState } from 'react';
import MainMenu from '@/components/navigation/MainMenu';
import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';
import Encryption from '@/components/main/Encryption';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleBack = () => setActiveSection(null);

  return (
    <main className="relative min-h-screen w-full z-10 bg-[#030014] text-white">
      {activeSection === null && <MainMenu onSelectSection={setActiveSection} />}

      {activeSection === 'hero' && (
        <>
          <Hero />
          <div className="text-center mt-10">
            <button onClick={handleBack} className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition">
              Volver al Menú
            </button>
          </div>
        </>
      )}

      {activeSection === 'skills' && (
        <>
          <Skills />
          <div className="text-center mt-10">
            <button onClick={handleBack} className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition">
              Volver al Menú
            </button>
          </div>
        </>
      )}

      {activeSection === 'projects' && (
        <>
          <Projects />
          <div className="text-center mt-10">
            <button onClick={handleBack} className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition">
              Volver al Menú
            </button>
          </div>
        </>
      )}

      {activeSection === 'encryption' && (
        <>
          <Encryption />
          <div className="text-center mt-10">
            <button onClick={handleBack} className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg transition">
              Volver al Menú
            </button>
          </div>
        </>
      )}
    </main>
  );
}
