import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinkClass = (path) =>
    `font-medium ${
      location.pathname === path ? 'text-red-600' : 'text-white'
    } hover:text-red-600`;

  return (
    <>
      <nav className="w-full absolute z-50">
        <div className="flex justify-between items-center px-4 mx-auto max-w-7xl h-20 sm:px-6 lg:px-8">
          <div className="relative z-10 flex-shrink-0">
            <img 
              className="w-28 sm:w-36 transition-transform duration-300 hover:scale-105" 
              src="images/uploads/2024/09/Viralish-Logo-Red-White.png" 
              alt="Viralish Logo" 
            />
          </div>

          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <li>
              <Link 
                to="/" 
                className={`${navLinkClass('/')} text-sm lg:text-base transition-all duration-300 hover:scale-105`}
              >
                Home
              </Link>
            </li>
            <li>
              <a 
                href="#work-with-us" 
                className={`${navLinkClass('/creators')} text-sm lg:text-base transition-all duration-300 hover:scale-105`}
              >
                Creators
              </a>
            </li>
            <li>
              <a 
                href="#brandscarousel" 
                className={`${navLinkClass('/brand')} text-sm lg:text-base transition-all duration-300 hover:scale-105`}
              >
                Brands
              </a>
            </li>
          </ul>

          <button 
            onClick={toggleMenu}
            className="md:hidden relative z-10 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[280px] bg-gray-900 shadow-xl z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6">
          <ul className="flex flex-col space-y-6">
            <li>
              <Link 
                to="/" 
                className={`${navLinkClass('/')} block text-lg font-medium transition-all duration-300 hover:translate-x-2`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/creators" 
                className={`${navLinkClass('/creators')} block text-lg font-medium transition-all duration-300 hover:translate-x-2`}
                onClick={() => setIsOpen(false)}
              >
                Creators
              </Link>
            </li>
            <li>
              <Link 
                to="/brand" 
                className={`${navLinkClass('/brand')} block text-lg font-medium transition-all duration-300 hover:translate-x-2`}
                onClick={() => setIsOpen(false)}
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
