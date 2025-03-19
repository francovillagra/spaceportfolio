import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-full overflow-hidden'>
      {/* Contenedor del video (fondo) */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-[1]'>
        <div
          style={{
            position: 'absolute',
            top: '10%', // Ajusta la posición vertical
            left: '50%',
            width: '120%', // Ajusta el tamaño del contenedor interno
            height: '120%', // Ajusta el tamaño del contenedor interno
            transform: 'translate(-50%, -50%) rotate(180deg) scale(0.6)',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '110%',
              objectFit: 'cover',
            }}
          >
            <source src='/blackhole.webm' type='video/webm' />
            <source src='/blackhole.mp4' type='video/mp4' /> {/* Formato alternativo */}
            El navegador no soporta el elemento de video.
          </video>
          <HeroContent />
        </div> {/* Cierre del div interno */}
      </div>

      {/* Contenido sobre el video */}
      <div className='relative z-[2] text-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hero Section</h1>
        <p className='text-lg md:text-xl'>Search</p>
      </div>
    </div>
  );
};

export default Hero;