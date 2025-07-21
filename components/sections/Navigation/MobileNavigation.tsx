'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="md:hidden relative">
      <button
        aria-label="Toggle menu"
        onClick={toggleMenu}
        className="text-2xl p-2 focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col gap-4 p-4 z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Inicio
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Sobre mí
          </Link>
          <Link href="/skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Habilidades
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Proyectos
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
