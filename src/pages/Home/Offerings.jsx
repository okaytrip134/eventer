import { useState } from "react";

const offerings = [
  {
    title: "WEDDING",
    img: "//static.showit.co/2400/Hl6HVQmAWJaqGFXNvFVq8g/69014/sharice_ryan_the_griffin_house_oregon_wedding_photographer_super_8_videographer_backcountry_bohemians_-_previews-50.jpg",
  },
  {
    title: "SOCIAL EVENTS",
    img: "https://static.showit.co/file/pAuSe6QCOdaZDJgub1YRmw/69014/inshot_20241106_124952724.gif",
  },
  {
    title: "QUEER WEDDINGS",
    img: "https://static.showit.co/file/OeYWutCpAHUY6mbhOUuriA/69014/inshot_20241106_125553623.gif",
  },
  {
    title: "PUBLIC EVENTS",
    img: "//static.showit.co/2400/bWNiwuUtgHS-ZGMB6GyrhA/69014/2022_06_25_brian_stephanie_wedding_-_675_websize.jpg",
  },
];

export default function Offerings() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative py-20 text-center">
      <p className="uppercase text-sm tracking-widest text-gray-500 mb-6">
        Our Offerings
      </p>

      <div className="relative w-[90%] mx-auto">
        <ul
          className="space-y-10 font-serif font-light leading-tight 
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: "var(--font-third)" }}
        >
          {offerings.map((item, index) => (
            <li
              key={index}
              className={`relative inline-block cursor-pointer transition-colors duration-300 ${hovered === index ? "text-[#6D989C]" : "text-black"
                }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.title}
              {/* Small image over text */}
              {hovered === index && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    w-28 h-40 sm:w-32 sm:h-48 md:w-40 md:h-56 
    overflow-hidden rounded-md shadow-lg pointer-events-none">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
