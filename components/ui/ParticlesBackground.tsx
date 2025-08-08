'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="particles-bg">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: 'transparent',
          },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse', // se alejan del mouse
              },
              onClick: {
                enable: true,
                mode: 'push', // agrega partículas al click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 3,
              },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: 'out',
            },
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.6 },
            shape: { type: 'circle' },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
