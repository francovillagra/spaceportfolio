"use client";

import React from 'react';
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants/skillsData';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />

      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center my-4">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={image.Image}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-5 items-center my-4">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={image.Image}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-5 items-center my-4">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={image.Image}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-5 items-center my-4">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={image.Image}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
