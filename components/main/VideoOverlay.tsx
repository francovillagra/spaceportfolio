'use client';

const VideoOverlay = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <video
        className="w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/blackhole.webm" type="video/webm" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute inset-0 bg-black opacity-40 mix-blend-screen"></div>
    </div>
  );
};

export default VideoOverlay;
