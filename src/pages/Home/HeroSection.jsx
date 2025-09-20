import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  // ✅ Video constants
  const VIDEOS = ["/Video 1.mp4", "/Video 2.mp4"];

  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  // ✅ When video ends, play the next one
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* ✅ Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src={VIDEOS[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-[--font-secondary] mb-4 leading-tight">
          Wedding & Event Planner <br /> Portland & Seattle
        </h2>
        <p
          className="uppercase tracking-widest text-sm md:text-base max-w-2xl"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Specializing in private estate, outdoor, and editorial-style weddings
          across the Pacific Northwest
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
