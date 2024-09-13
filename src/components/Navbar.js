import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa'; 
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after scrolling
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  console.log(location.pathname);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="text-slate-800 px-4">
      <div className="max-w-[1300px] mx-auto w-full flex justify-between items-center">
        <div className="text-xl font-bold p-4">
          <NavLink to="/">Logo</NavLink>
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
              } cursor-pointer border-b-4  hover:border-yellow-500`}
            >
              <NavLink
                to={item.path}
                end
                className="block p-4"
              >
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
          } transition-transform duration-300 ease-in-out md:hidden w-64`}
        >

            <h2 className='px-6 py-5 '>Menu</h2>
          <ul className="flex flex-col items-start pl-6 ">
            {navLinks.map((item) => (
              <li
                key={item.path}
                className={`w-full ${
                  item.path === location.pathname
                    ? " border-yellow-500"
                    : "border-white"
                } border-r-8  hover:border-yellow-500 py-2`}
              >
                <NavLink
                  to={item.path}
                  end
                  className="block py-2"
                  onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <button
                onClick={scrollToContact}
                className="block w-full text-left py-4 border-r-8 border-white  hover:border-yellow-500"
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
