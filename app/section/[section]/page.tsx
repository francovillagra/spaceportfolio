// app/section/[section]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

import HeroSection from '@/components/Sections/Hero/HeroSection';
import SkillsSection from '@/components/Sections/Skills/SkillsSection';
import ProjectsSection from '@/components/Sections/Projects/ProjectsSection';
import ContactSection from '@/components/Sections/Contact/ContactSection';
import AboutSection from '@/components/Sections/About/AboutSection';

const sectionMap: Record<string, React.ReactNode> = {
  hero: <HeroSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
  about: <AboutSection />,
};

export default function DynamicSectionPage() {
  const params = useParams();
  const section = params.section as string;

  const content = sectionMap[section];

  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white">
      {content}
    </main>
  );
}
