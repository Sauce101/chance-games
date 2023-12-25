import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type Active = {
  isActive: boolean;
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setNavbarOpen(false);
  });

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const navLinkStyles = ({ isActive }: Active) => ({
    fontWeight: isActive ? 'bold' : '',
    opacity: isActive ? 1 : 0.8,
  });

  const PAGES = [
    { name: 'craps', game: 'Craps' },
    { name: 'highcard', game: 'High Card' },
    { name: 'pokerdice', game: 'Poker Dice' },
  ];

  return (
    <nav className="px-2 bg-stone-600 top-0 left-0 right-0 fixed z-10">
      <div
        ref={ref}
        className="mx-auto flex flex-wrap items-center justify-between px-4"
      >
        <div className="relative flex w-full justify-between md:block md:w-auto lg:static lg:justify-start">
          <NavLink
            className="mr-4 inline-block whitespace-nowrap py-2 text-lg font-bold uppercase leading-relaxed text-white"
            to="/"
          >
            Games of Chance
          </NavLink>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none md:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex-grow items-center md:flex
            ${navbarOpen ? 'flex' : 'hidden'}`}
          id="example-navbar-danger"
        >
          <div className="flex flex-col md:ml-auto md:flex-row">
            {PAGES.map((page) => (
              <NavLink
                onClick={closeMenu}
                key={page.name}
                to={page.name}
                style={navLinkStyles}
                className="items-center px-3 py-2 text-base font-medium leading-snug text-white"
              >
                {page.game}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
