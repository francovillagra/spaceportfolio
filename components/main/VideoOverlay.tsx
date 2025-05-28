'use client';

import React from 'react';

const VideoOverlay = () => {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover z-[-1] pointer-events-none"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/blackhole.webm" type="video/webm" />
      Mi navegador no soporta la etiqueta de video
    </video>
  );
};

export default VideoOverlay;
