import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // ✅ fixed
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'blog', to: '/blog'}
  ];

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center text-violet-600 text-xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-1" viewBox="0 0 32 32" fill="currentColor">
            <path d="M27.912 7.289L17.588 1.328C17.133 1.06 16.586.903 16 .903s-1.133.158-1.604.433L4.072 7.289C3.117 7.85 2.486 8.871 2.484 10.039v11.922c.002 1.168.635 2.189 1.574 2.742l10.324 5.961c.455.267 1.004.425 1.59.425s1.131-.158 1.602-.433l10.324-5.961c.955-.561 1.586-1.582 1.588-2.75V10.039c-.002-1.168-.633-2.189-1.573-2.742z" />
          </svg>
          MySite
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded hover:text-violet-600 transition duration-200 ${
                  isActive ? 'text-violet-600 font-semibold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Buttons */}
          <button onClick={()=>navigate("/signin")} className="px-5 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
            Sign in
          </button>
          <button onClick={()=>navigate("/signup")} className="px-5 py-2 text-sm font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 transition">
            Sign up
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded hover:bg-violet-100 dark:hover:bg-gray-700"
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex space-x-2 mt-4">
            <button onClick={()=>navigate("/signin")} className="w-full px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
              Sign in
            </button>
            <button onClick={()=>navigate("/signup")} className="w-full px-4 py-2 rounded bg-violet-600 text-white hover:bg-violet-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
