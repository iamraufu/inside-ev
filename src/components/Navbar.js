import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      // Navigate to the homepage first
      navigate('/');
    }

    // Scroll to the contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false); // Close the menu after scrolling
    }, 100); // Delay to ensure the navigation is complete before scrolling
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="text-slate-800 px-4 sticky top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-[1300px] mx-auto w-full flex justify-between items-center">
        <div className="text-xl font-bold p-4">
          <NavLink 
          onClick={() => { window.scrollTo(0, 0) }}
          to="/"><img src={logo} alt="logo" className='w-16' /></NavLink>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <CiMenuBurger size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {navLinks.map((item) => (
            <li
              key={item.path}
              className={`${
                item.path === location.pathname
                  ? "border-b-4 border-yellow-500"
                  : "border-white"
              } cursor-pointer border-b-4 hover:border-yellow-500`}
            >
              <NavLink 
              onClick={() => { window.scrollTo(0, 0); }}
              to={item.path} end className="block p-4">
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="cursor-pointer hover:border-b-4 border-yellow-500">
            <button onClick={scrollToContact} className="p-4">
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden w-64 z-40`}
        >
          <h2 className="px-6 py-5">Menu</h2>
          <ul className="flex flex-col items-start pl-6">
            {navLinks.map((item) => (
              <li
                key={item.path}
                className={`w-full ${
                  item.path === location.pathname
                    ? "border-yellow-500"
                    : "border-white"
                } border-r-8 hover:border-yellow-500 py-2`}
              >
                <NavLink
                  to={item.path}
                  end
                  className="block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <button
                onClick={scrollToContact}
                className="block w-full text-left py-4 border-r-8 border-white hover:border-yellow-500"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
