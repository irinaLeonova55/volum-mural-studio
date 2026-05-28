import { AnimatePresence, motion } from 'motion/react';
import chevronIcon from '../assets/icons/chevron.svg';

interface SortBoxProps {
  title: string;
  items: string[];
  isOpen: boolean;
  selectedValue: string;
  onToggle: () => void;
  onChange: (value: string) => void;
}

const SortBox = ({
  title,
  items,
  isOpen,
  selectedValue,
  onToggle,
  onChange,
}: SortBoxProps) => {
  return (
    <div className="flex flex-col w-full items-start border border-[#D8D8D8] rounded-sm px-3 mb-2 cursor-pointer">
      <button
        className="flex justify-between items-center w-full py-4 hover:border-[#A18A68] hover:text-[#A18A68] "
        onClick={onToggle}
      >
        <h2 className="font-medium">{title}</h2>

        <img
          src={chevronIcon}
          alt="Open"
          className={`w-2 h-auto transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 pb-4">
              {items.map((item, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    name={item}
                    value={item}
                    className="mr-2 w-3 h-3 accent-[#A18A68]"
                    onChange={() => onChange(item)}
                    checked={selectedValue === item}
                  />

                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortBox;
