import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full  bg-white flex justify-between text-[15px] items-center px-12 h-28 border-b border-gray-200">
        {/* Left Links */}
        <nav className="flex items-center text-center space-x-8  tracking-widest text-black uppercase cursor-pointer">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Wedding<br />Planning</a>
        </nav>

        {/* Logo */}
        <h1 className="text-3xl tracking-widest cursor-pointer " style={{ fontFamily: 'var(--font-font-third)' }}>
          AS PRODUCTIONS
        </h1>

        {/* Right Links */}
        <nav className="flex items-center text-center space-x-8  tracking-widest text-black uppercase cursor-pointer">
          <a href="#">Event<br />Planning</a>
          <a href="#">Blog</a>
          <a href="#" className="italic underline font-[--font-primary]">Inquire</a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-4 flex flex-col space-y-1"
          >
            <span className="block w-6 h-[3px] bg-black"></span>
            <span className="block w-6 h-[3px] bg-black"></span>
            <span className="block w-6 h-[3px] bg-black"></span>
          </button>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#97A5A7] text-white flex z-50">
          {/* Left Side */}
          <div className="w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-6xl  leading-none">LU<br />XE</h2>

            {/* Social icons */}
            <div className="flex space-x-4 mt-6 text-xl">
              <a href="#">🎵</a>
              <a href="#">📸</a>
              <a href="#">📘</a>
              <a href="#">📌</a>
            </div>

            {/* Image */}
            <div className="mt-10">
              <img
                src="your-image.jpg"
                alt="Wedding Event"
                className="w-80 object-cover"
              />
            </div>

            {/* Text */}
            <p className="mt-6 text-sm max-w-xs">
              Serving the great Wild West, our teams are based in Portland Oregon
              and Seattle Washington.
            </p>
            <p className="mt-4 text-sm max-w-xs">
              We believe that there's not much a dance party won’t cure.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-1/2 p-12 flex flex-col justify-center items-start space-y-6">
            {[
              "Home",
              "About",
              "Portfolio",
              "Weddings",
              "Queer Weddings",
              "Special Events",
              "Blog",
              "Contact",
            ].map((item, idx) => (
              <div key={item} className="flex items-baseline space-x-3">
                <span className="text-xs ">{`0${idx + 1}`}</span>
                <a href="#" className="text-4xl  hover:opacity-70">
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-10 text-white text-2xl"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
