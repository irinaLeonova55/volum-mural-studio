import artwork5 from '../assets/images/artwork-5.png';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useScroll, useTransform, motion } from 'motion/react';

const FullScreenImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section
      ref={ref}
      className="sticky top-0 w-full h-[80svh] lg:h-screen z-0"
    >
      <div className="h-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
          <img
            src={artwork5}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/10 scale-110" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3">
          <h2 className="flex flex-col items-center justify-center text-3xl sm:text-4xl text-center text-[#F5F1EA]">
            Murals, objects and surfaces designed for contemporary spaces.
          </h2>
          <Link
            to="/collection"
            className="mx-auto w-50 flex justify-center items-center h-8 border-[#F5F1EA] bg-transparent text-[#F5F1EA] font-medium rounded-sm mt-5 sm:mt-10 uppercase text-xs border cursor-pointer tracking-wide hover:bg-[#F5F1EA] hover:text-black"
          >
            See All Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullScreenImage;
