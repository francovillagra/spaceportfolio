import React from 'react';

const VideoOverlay = () => {
  return (
    <div className="video-container mask-blackhole">
      <video
        src="/blackhole.mp4" // Asegúrate de tener este video en public/
        autoPlay
        loop
        muted
        playsInline
        className="video-container mask-blackhole opacity-70 mix-blend-screen"
      />
    </div>
  );
};

export default VideoOverlay;
