import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronLeft, FaEnvelopeOpen } from 'react-icons/fa';
import { CiMenuKebab } from "react-icons/ci";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrentLocation = (pathname :string) => {
    return location.pathname === pathname;
  };

  useEffect(() => {
    setIsMenuOpen(false);
    
    
    
    window.scrollTo(0, 0);

  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', name: 'حلول قفزة' },
    { path: '/Services', name: 'خدماتنا' },
    { path: '/programs', name: 'البرامج' },

    { path: '/about', name: 'عن قفزة' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 left-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 ">
          <div className="flex items-center ">
            <Link to="/" className="flex-shrink-0 m-1">
            <img src="./logo.png" alt="Qafza-tech-Logo" className="h-20" />

            </Link>
           

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={` hover:bg-orchidPurple  hover:text-white px-3 py-2 rounded-md  text-lg ${
                      isCurrentLocation(item.path) ? 'text-orchidPurple font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
              </div>
            
            </div>
           
          </div>
          <div className="hidden lg:block">
          <button
            type="button"
            className="text-white bg-purpleRoyal hover:bg-orchidPurple focus:ring-4 focus:outline-none font-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            احجز استشارتك المجانية الآن
          </button>
        </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-purpleRoyal hover:text-white hover:bg-purpleRoyal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purpleRoyal focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaChevronCircleLeft className="h-6 w-6" />
              ) : (
                <CiMenuKebab  className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg transform md:hidden fixed top-0 right-0 w-64 h-full backdrop-blur	 transition-transform duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-4 py-5">
          <div className="flex justify-between items-center mb-5">
          <Link to="/" className="flex-shrink-0 m-1">
            <img src="./logo.png" alt="Qafza-tech-Logo" className="h-20" />

            </Link>            <button
              onClick={toggleMenu}
              className="text-red-300 hover:text-purpleRoyal"
            >
              {isMenuOpen ? (
                <FaChevronCircleRight className="h-6 w-6" />
              ) : (
                <FaChevronLeft className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={` hover:bg-purpleRoyal hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isCurrentLocation(item.path) ? 'bg-purpleRoyal text-white' : 'text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
               <button
            type="button"
            className="text-white bg-purpleRoyal hover:bg-orchidPurple focus:ring-4 focus:outline-none font-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            احجز استشارتك المجانية الآن
          </button>
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Nav;