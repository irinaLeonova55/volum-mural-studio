import Navbar from './Navbar';
import Social from './Social';
import arrowIcon from '../assets/icons/arrow.svg';
import { useState } from 'react';

const Footer = () => {
  const [getNews, setGetnews] = useState<string>('');

  return (
    <footer className="max-w-340 px-4 mx-auto border-t border-[#D8D8D8] pb-10 sm:pb-30">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between gap-10 py-10">
        <div className="flex justify-between w-full sm:max-w-100 border-b border-black pb-2">
          <input
            value={getNews}
            onChange={(e) => setGetnews(e.target.value)}
            placeholder="Give an email, get the newsletter."
            className="block w-full focus:outline-none"
          />
          <img
            src={arrowIcon}
            alt="Get the newsletter"
            className="w-6 h-auto"
          />
        </div>
        <div className="uppercase text-[#707070]">
          <Navbar extrastyle="flex-col sm:flex-row gap-2 sm:gap-10" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse justify-between gap-10 sm:gap-2">
        <div className="flex items-center">
          <span className="block sm:hidden mr-8 text-base uppercase">
            Follow us
          </span>
          <Social />
        </div>

        <span>
          © 2026 Mural.{' '}
          <span className="text-[#707070] cursor-pointer hover:text-black">
            Therms of use
          </span>{' '}
          and{' '}
          <span className="text-[#707070] cursor-pointer hover:text-black">
            privacy policy.
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
