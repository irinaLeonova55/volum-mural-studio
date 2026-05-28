import { NavLink } from 'react-router-dom';

interface NavbarProps {
  extrastyle?: string;
  onClick?: () => void;
}

const Navbar = ({ extrastyle, onClick }: NavbarProps) => {
  const links = [
    {
      id: 1,
      href: '/',
      text: 'Home',
    },
    {
      id: 2,
      href: '/collection',
      text: 'Collection',
    },
    {
      id: 3,
      href: '/story',
      text: 'Our Story',
    },
    {
      id: 4,
      href: '/contacts',
      text: 'Contacts',
    },
  ];

  return (
    <nav>
      <ul className={`flex text-base ${extrastyle}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.href}
              onClick={onClick}
              className={({ isActive }) =>
                `
            relative inline-block lg:py-1.5
            lg:after:absolute
            lg:after:left-0
            lg:after:-bottom-1.5
            lg:after:h-px
            lg:after:w-full
            lg:after:bg-black/80
            lg:after:origin-left
            lg:after:transition-transform
            lg:after:duration-300
            lg:hover:after:scale-x-100
            ${isActive ? 'lg:after:scale-x-100' : 'lg:after:scale-x-0'}
          `
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
