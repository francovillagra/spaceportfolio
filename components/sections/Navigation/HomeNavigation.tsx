'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaUserAlt, FaEnvelope, FaTools, FaLaptopCode } from 'react-icons/fa';
import Button from '@/components/ui/Button';

type SectionKey = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'hero';

interface HomeNavigationProps {
  setActiveSection: (section: SectionKey) => void;
}

export default function HomeNavigation({ setActiveSection }: HomeNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (section: SectionKey) => {
    setActiveSection(section);
    setIsOpen(false); // cerrar menú móvil
  };

  return (
    <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold cursor-pointer" onClick={() => handleClick('hero')}>
        Franco Villagra
      </div>

      <nav className="hidden md:flex gap-6 items-center">
        <Button variant="link" onClick={() => handleClick('about')} className="flex items-center gap-1">
          <FaUserAlt /> Sobre mí
        </Button>
        <Button variant="link" onClick={() => handleClick('skills')} className="flex items-center gap-1">
          <FaTools /> Habilidades
        </Button>
        <Button variant="link" onClick={() => handleClick('projects')} className="flex items-center gap-1">
          <FaLaptopCode /> Proyectos
        </Button>
        <Button variant="link" onClick={() => handleClick('contact')} className="flex items-center gap-1">
          <FaEnvelope /> Contacto
        </Button>
      </nav>

      <Button onClick={toggleMenu} variant="icon" className="md:hidden text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          <Button variant="link" onClick={() => handleClick('about')} className="flex items-center gap-2">
            <FaUserAlt /> Sobre mí
          </Button>
          <Button variant="link" onClick={() => handleClick('skills')} className="flex items-center gap-2">
            <FaTools /> Habilidades
          </Button>
          <Button variant="link" onClick={() => handleClick('projects')} className="flex items-center gap-2">
            <FaLaptopCode /> Proyectos
          </Button>
          <Button variant="link" onClick={() => handleClick('contact')} className="flex items-center gap-2">
            <FaEnvelope /> Contacto
          </Button>
        </div>
      )}
    </header>
  );
}
