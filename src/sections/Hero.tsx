import { useEffect, useState } from 'react';
import artwork6 from '../assets/images/artwork-6.png';
import artwork7 from '../assets/images/artwork-7.png';
import artwork9 from '../assets/images/artwork-9.png';

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const slides = [artwork6, artwork7, artwork9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70svh] lg:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-linear ${current === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-10000 ${current === index ? 'scale-102 sm:scale-105' : 'scale-100'}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent z-10"></div>

      <div className="absolute max-w-340 px-4 w-full left-1/2 -translate-x-1/2 bottom-5 sm:bottom-10 flex justify-start flex-col z-20 text-left">
        <h1 className="text-[#F5F1EA] font-[Allerta_Stencil] text-4xl sm:text-[50px] uppercase">
          Mural Studio
        </h1>
        <p className="max-w-100 text-lg sm:text-xl text-[#F5F1EA] mt-2">
          Contemporary murals
          <br /> for architecture & public spaces
        </p>
        <a
          href="/collection"
          className="w-50 flex justify-center items-center h-8 border-[#F5F1EA] bg-transparent text-[#F5F1EA] font-medium rounded-sm mt-2 sm:mt-5 uppercase text-xs border cursor-pointer tracking-wide hover:bg-[#F5F1EA] hover:text-black"
        >
          View Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
