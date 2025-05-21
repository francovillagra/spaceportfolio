import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden">
      {/* Contenedor del video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="video-wrapper absolute w-full h-full transform"
          style={{
            transform: 'translateY(-480px) rotate(180deg) scale(0.8)',  // lo rotás y lo escalás
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video de fondo: agujero negro"
            className="w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
            <source src="/blackhole.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      {/* Contenido sobre el video */}
      <HeroContent />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hero Section</h1>
        <p className="text-lg md:text-xl">Search</p>
      </div>
    </div>
  );
};

export default Hero;
