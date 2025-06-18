'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {/* Imagen con opacidad ajustada */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover opacity-60" // 👈 bajá más si querés más transparencia (0.7, 0.6, etc.)
      />

      {/* Contenido textual sobre la imagen */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
