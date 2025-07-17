// components/SectionManager.tsx
'use client';

import { useState } from 'react';
import HomeNavigation from './Sections/Navigation/HomeNavigation';
import AboutSection from './Sections/About/AboutSection';
import SkillsSection from './Sections/Skills/SkillsSection';
import ProjectsSection from './Sections/Projects/ProjectsSection';
import ContactSection from './Sections/Contact/ContactSection';
import HeroSection from './Sections/Hero/HeroSection';

type SectionKey = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'hero';

export default function SectionManager() {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <SectionWrapper section={<AboutSection />} onBack={() => setActiveSection('home')} />;
      case 'skills':
        return <SectionWrapper section={<SkillsSection />} onBack={() => setActiveSection('home')} />;
      case 'projects':
        return <SectionWrapper section={<ProjectsSection />} onBack={() => setActiveSection('home')} />;
      case 'contact':
        return <SectionWrapper section={<ContactSection />} onBack={() => setActiveSection('home')} />;
      case 'hero':
        return <SectionWrapper section={<HeroSection />} onBack={() => setActiveSection('home')} />;
      default:
        return <HomeNavigation setActiveSection={setActiveSection} />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white transition-all duration-500">
      {renderSection()}
    </main>
  );
}

function SectionWrapper({ section, onBack }: { section: React.ReactNode; onBack: () => void }) {
  return (
    <div>
      {section}
      <div className="text-center mt-8">
        <button onClick={onBack} className="mt-4 px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
          ← Volver al inicio
        </button>
      </div>
    </div>
  );
}
