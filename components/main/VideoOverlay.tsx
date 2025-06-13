import React from 'react';

const VideoOverlay = () => {
  return (
    <div className="video-container mask-blackhole">
      <video
        src="/blackhole.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-70 mix-blend-screen"
      />
    </div>
  );
};

export default VideoOverlay;
