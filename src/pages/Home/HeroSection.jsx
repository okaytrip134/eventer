import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // ✅ All image URLs
  const images = [
    "//static.showit.co/2400/Hl6HVQmAWJaqGFXNvFVq8g/69014/sharice_ryan_the_griffin_house_oregon_wedding_photographer_super_8_videographer_backcountry_bohemians_-_previews-50.jpg",
    "//static.showit.co/2400/bWNiwuUtgHS-ZGMB6GyrhA/69014/2022_06_25_brian_stephanie_wedding_-_675_websize.jpg",
    "//static.showit.co/2400/JioQzdtEPExDbXn-N0h6Zg/69014/sharice_ryan_the_griffin_house_oregonwedding_photographer_super_8videographer_backcountry_bohemians_--382.jpg",
    "//static.showit.co/2400/AHOTj-Wy_RtLXvYWEehthw/69014/summer-grace-photo-la-wedding-photographer-l_e-the-griffin-house-760.jpg",
    "//static.showit.co/2400/bBJWhBH8SK65ipdirRz5-A/69014/7_13_2013_mary_ryan_wedding-7_13_2013_mary_ryan_wedding-0043.jpg",
    "//static.showit.co/2400/_ewLb1HXRUuRvL-RF6tyTw/69014/jen_and_tomanniversary--577.jpg",
    "//static.showit.co/2400/YDfQJ2RtP6ym9TJEzUGYig/69014/picsart_25-01-03_13-03-36-855.png",
    "//static.showit.co/2400/u2ejPfxzSA2vguqUeCW6Lw/69014/jake_and_aaron_sneakpeek-22.jpg",
    "//static.showit.co/2400/qBw3bk7LRW6rUbTQsMYiNg/69014/jrp_5931.jpg",
    "//static.showit.co/2400/Uovh2a1QQ9OjjkwBdGaARQ/69014/img_0995_1.jpg",
    "//static.showit.co/2400/YT0C54T7SZe6hVgCnDRofA/69014/melissamarshall5-48.jpg",
    "//static.showit.co/2400/z07Hxh6SQSifYWtLolOnYA/69014/img_1067_1.jpg",
    "//static.showit.co/2400/xrCd5RzOSS-S3kGcnTiUww/69014/336794849_930278104836379_3626226327519969216_n.jpg",
    "//static.showit.co/2400/E-yJxne-1dNr3uCkylsSMw/69014/wedding2022-859.jpg",
    "//static.showit.co/2400/Lw_LUDmiRmSWYk5eWTY25Q/69014/0256.jpg",
    "//static.showit.co/2400/6rMyMMncTQG18yY2x0UfHA/69014/ab7a2045jenny_chok_photo_portland_wedding_photographer_davis_castaway_wedding_second.jpg",
    "//static.showit.co/2400/Idt-Q7hAQoCEss8YMe-Vlg/69014/jos_studios_portland_wedding_photographers_the_knot_event_luxe_event_productions-0191.jpg",
    "//static.showit.co/2400/9mpMlWFXSauZzf2A-num7w/69014/img_8327.jpg",
    "//static.showit.co/2400/RNt7NYg2QGOnqFtbgcZI4g/69014/bridal-veil-lakes095.jpg",
    "//static.showit.co/2400/4kPy3mRihZr8uv7cxIZJdA/69014/linda_and_ryan_137_of_509.jpg",
    "//static.showit.co/2400/u7n1gverTk6Evcz8aAC3Pg/69014/0357.jpg",
    "//static.showit.co/2400/lWVkMTqbS-W_Nm0ljZGS1w/69014/lm5_2385.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Change image every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 w-full h-full px-10 object-cover transition-opacity duration-900 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-8xl font-[--font-secondary] mb-4 leading-tight">
          Wedding & Event Planner <br /> Portland & Seattle
        </h2>
        <p className="uppercase tracking-widest text-sm md:text-base max-w-2xl " style={{ fontFamily: 'var(--font-primary)' }}>
          Specializing in private estate, outdoor, and editorial-style weddings
          across the Pacific Northwest
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
