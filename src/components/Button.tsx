import { Link } from 'react-router-dom';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button = ({ onClick, text, type, href }: ButtonProps) => {
  if (href) {
    return (
      <Link
        to={href}
        className="w-full flex justify-center items-center h-8 border-black bg-black text-white font-medium rounded-sm mt-10 uppercase text-xs border cursor-pointer tracking-wide hover:border-black hover:text-black hover:bg-transparent"
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full flex justify-center items-center h-8 border-black bg-black text-white font-medium rounded-sm mt-10 uppercase text-xs border cursor-pointer tracking-wide hover:border-black hover:text-black hover:bg-transparent"
    >
      {text}
    </button>
  );
};

export default Button;
