"use client";

import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants/skillsData';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  const allSkillGroups = [Frontend_skill, Backend_skill, Full_stack, Other_skill];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 scale-90"
    >
      <SkillText />

      <div className="flex flex-col gap-8 w-full">
        {allSkillGroups.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-wrap items-center justify-center gap-5 my-4"
          >
            {group.map((image, index) => (
              <SkillDataProvider
                key={image.Image}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            playsInline
            loop
            muted
            autoPlay
            preload="none"
            aria-hidden="true"
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Este componente Skills muestra las habilidades para el portfolio
// Importa datos de habilidades desde un archivo de constantes
// Utiliza SkillDataProvider para renderizar cada habiliadad
// Agrupa las habilidad en secciones
// Incluye un fondo de video para mejorar la estética visual