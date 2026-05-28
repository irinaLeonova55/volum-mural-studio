import Navbar from './Navbar';
import menuIcon from '../assets/icons/menu.svg';

interface BurgerProps {
  openBurger: () => void;
}

const Header = ({ openBurger }: BurgerProps) => {
  return (
    <header className="w-full min-h-[10%] flex items-end pt-4 sm:pt-10">
      <div className="flex justify-between items-center max-w-340 px-4 w-full mx-auto sm:border-b sm:border-[#D8D8D8] pb-3  sm:pb-6">
        <a href="/">
          <div className="font-[Allerta_Stencil] text-xl sm:text-3xl uppercase focus:outline-none">
            Volume
          </div>
        </a>
        <div className="hidden sm:block">
          <Navbar extrastyle="gap-10" />
        </div>
        <button onClick={openBurger} className="block sm:hidden cursor-pointer">
          <img src={menuIcon} alt="Menu" className="w-5 h-auto" />
        </button>
      </div>
    </header>
  );
};

export default Header;
