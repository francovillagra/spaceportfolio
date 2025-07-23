'use client';

import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  projectLink?: string;
};

export default function ProjectCard({ title, description, imageUrl, techStack, projectLink }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-purple-500 transition-shadow">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto rounded overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between w-full md:w-2/3 text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="bg-purple-700 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition"
          >
            Ver proyecto
          </a>
        )}
      </div>
    </div>
  );
}
