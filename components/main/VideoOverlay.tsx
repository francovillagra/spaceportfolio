'use client';

import React from 'react';

const VideoOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-70"
      >
        <source src="/blackhole.webm" type="video/webm" />

      </video>
    </div>
  );
};

export default VideoOverlay;
