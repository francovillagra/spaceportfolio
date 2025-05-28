'use client';

const VideoOverlay = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none mix-blend-screen opacity-70"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/blackhole.webm" type="video/webm" />
      Tu navegador no soporta la etiqueta de video.
    </video>
  );
};

export default VideoOverlay;
