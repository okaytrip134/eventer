import React, { useState, useEffect } from "react";

const AboutSection = () => {
  // ✅ GIF sources
  const gifs = [
    "//static.showit.co/file/pAuSe6QCOdaZDJgub1YRmw/69014/inshot_20241106_124952724.gif",
    "//static.showit.co/file/OeYWutCpAHUY6mbhOUuriA/69014/inshot_20241106_125553623.gif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gifs.length);
    }, 5000); // ⏱ Change every 5 seconds
    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <section className="bg-[#f6f8f9] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">
        {/* Left Column */}
        <div>
          {/* Logo */}
          <h2 className="text-6xl font-serif leading-none mb-8">
            AS
            <br />
            Production
          </h2>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            We plan, produce, coordinate, design, style, promote and live for a{" "}
            <span className="italic">good party.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed mb-6"  style={{ fontFamily: 'var(--font-primary)' }}>
            Established in 2009, we've produced hundreds (and hundreds!) of
            events. We take an agency approach to your event planning – meaning{" "}
            <span className="italic">
              you get an entire team advocating for your event.
            </span>
          </p>

          {/* Sub Label */}
          <p className="uppercase tracking-widest text-sm font-semibold"  style={{ fontFamily: 'var(--font-primary)' }}>
            Agency Leadership
          </p>
        </div>

        {/* Right Column (GIF Slideshow) */}
        <div className="w-[450px] h-[650px] ms-auto overflow-hidden">
          <img
            src={gifs[currentIndex]}
            alt="Event Celebration"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
