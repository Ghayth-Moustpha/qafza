import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronLeft } from 'react-icons/fa';
import { CiMenuKebab } from "react-icons/ci";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isCurrentLocation = (pathname: string) => {
    return location.pathname === pathname;
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAcademicDropdownOpen(false); // Close dropdown on route change
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
      setIsAcademicDropdownOpen(false); // Close dropdown on route change
    }, 5000); 
    return () => clearTimeout(timer);
  }, [isMenuOpen,isAcademicDropdownOpen]);

  // Toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the academic dropdown
  const toggleAcademicDropdown = () => {
    setIsAcademicDropdownOpen(!isAcademicDropdownOpen);
  };
  const offAcadim= ()=>{
    setIsAcademicDropdownOpen(false);
  }
  const onAcadim= ()=>{
    setIsAcademicDropdownOpen(true);
  }
  // Close dropdown when clicking outside
  
  const navItems = [
    { path: '/', name: 'الرئيسية' },
    { path: '/academic', name: 'الأكاديمية', isDropdown: true, subItems: [
      { path: '/academic', name: 'البرامج التدريبية' },
      { path: '/academic/ads', name: 'الإعلانات' }
    ]},
    { path: '/library', name: 'المكتبة' },
    { path: '/services', name: 'خدماتنا' },
    { path: '/about', name: 'مَن قفزة' },
    { path: '/contact', name: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 m-1 p-2 h-20">
              <img src="./logo.png" alt="Qafza-tech-Logo" className='h-full '  />
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  item.isDropdown ? (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={onAcadim}
                      ref={dropdownRef}
                    >
                      <button
                        className={`hover:bg-purpleRoyal hover:text-white px-3 py-2 rounded-md text-lg ${isCurrentLocation(item.path) ? 'text-purpleRoyal font-bold' : ''}`}
                      >
                        {item.name}
                      </button>
                      {isAcademicDropdownOpen && (
                        <div 
                         className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-200 ease-in-out">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-purpleRoyal hover:text-white"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                    onMouseEnter={offAcadim}
                      key={index}
                      to={item.path}
                      className={`hover:bg-purpleRoyal hover:text-white px-3 py-2 rounded-md text-lg ${isCurrentLocation(item.path) ? 'text-purpleRoyal font-bold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button
              type="button"
              className="text-white bg-purpleRoyal hover:bg-purpleRoyal focus:ring-4 focus:outline-none font-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              احجز استشارتك المجانية الآن
            </button>
          </div>

          <div className="-mr-4 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-purpleRoyal hover:text-white hover:bg-purpleRoyal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purpleRoyal focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaChevronCircleLeft className="h-6 w-6" />
              ) : (
                <CiMenuKebab className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={` ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-[700px]'
        } shadow-lg transform md:hidden fixed top-0 right-0 w-80 h-full backdrop-blur transition-transform duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="text-lg px-4 py-5">
          <div className="flex justify-between items-center mb-5">
            <Link to="/" className="flex-shrink-0 m-1">
              <img src="./logo.png" alt="Qafza-tech-Logo" className="h-20" />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-red-300 hover:text-purpleRoyal"
            >
              <FaChevronCircleRight className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {navItems.map((item, index) => (
              item.isDropdown ? (
                <div key={index} className="relative">
                  <button
                    onClick={toggleAcademicDropdown}
                    className={`w-full hover:bg-purpleRoyal hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isCurrentLocation(item.path) ? 'bg-purpleRoyal text-white' : 'text-black'}`}
                  >
                    {item.name}
                  </button>
                  {isAcademicDropdownOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded-lg transition-opacity duration-200 ease-in-out">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-purpleRoyal hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`w-full text-center hover:bg-purpleRoyal hover:text-white block px-3 py-2 rounded-md text-base font-medium ${isCurrentLocation(item.path) ? 'bg-purpleRoyal text-white' : 'text-black'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <button
              type="button"
              className="mt-5 w-full text-white bg-purpleRoyal hover:bg-orchidPurple focus:ring-4 focus:outline-none font-2xl rounded-lg px-5 py-2.5 text-center inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
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
