import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden">
      {/* Contenedor del video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div
          className="video-wrapper absolute w-full h-full transform -translate-y-[480px] rotate-180 scale-80"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            role="presentation"
            aria-label="Video de fondo: agujero negro"
            className="w-full h-full object-cover mix-blend-screen mask-blackhole"
          >
            <source src="/blackhole.webm" type="video/webm" />
            <source src="/blackhole.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      {/* Contenido principal */}
      <HeroContent />
    </div>
  );
};

export default Hero;
// Este componente Hero muestra un video de fondo de un agujero negro con un contenido superpuesto.