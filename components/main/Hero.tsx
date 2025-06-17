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
            transform: 'translateY(-480px) rotate(180deg) scale(0.8)', // Rotar y escalar
          }}
        >
          <video
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video de fondo: agujero negro"
          className="w-full h-full object-cover mix-blend-screen"
          style={{
            // maskImage: Crea una máscara radial que parte del centro.
            // El centro (10%) es negro opaco -> se ve con total claridad
            // Zona intermedia (50%) va aclarando progresivamente
            // Los bordes (90% en adelante) son completamente transparentes -> dejan ver el fondo de estrellas
              maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 90%)',
            // Prefijo para compatibilidad con navegadores basados en WebKit (Chrome, Safari)  
              WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
            // Evita que la mascara se repita  
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            // Hace que la máscara cubra todo el contenedor  
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
}}

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
