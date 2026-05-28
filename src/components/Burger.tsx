import closeIcon from '../assets/icons/close.svg';
import Navbar from './Navbar';

interface BurgerProps {
  onClose: () => void;
  isBurger: boolean;
}

const Burger = ({ onClose, isBurger }: BurgerProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-end z-1200 transition-opacity duration-500 ease-out bg-black/40 ${isBurger ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col max-w-100 w-full bg-white h-screen p-4 overflow-y-auto transition-transform duration-300 ease-out ${isBurger ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="w-full flex justify-between items-start mb-10">
          <span className="font-[Allerta_Stencil] text-xl sm:text-3xl uppercase">
            Volume
          </span>
          <button onClick={onClose} className="cursor-pointer">
            <img src={closeIcon} alt="Close" className="w-4 h-auto" />
          </button>
        </div>
        <Navbar extrastyle="flex-col gap-6" onClick={onClose} />
      </div>
    </div>
  );
};

export default Burger;
