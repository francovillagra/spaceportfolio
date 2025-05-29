'use client';

const VideoOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
      <video
        className="w-full h-full object-cover mix-blend-screen opacity-80 mask-blackhole"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/blackhole.webm" type="video/webm" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoOverlay;
