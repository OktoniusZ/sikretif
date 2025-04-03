import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <NavLink to="/" >
              <h1 className="text-2xl text-bold">SIKRETIF</h1>
            </NavLink>
          </div>

          {/* Links on the right (desktop) */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 hover:text-primary ${
                  isActive ? "font-bold text-primary" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-gray-800 hover:text-primary ${
                  isActive ? "font-bold text-primary" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-gray-800 hover:text-primary ${
                  isActive ? "font-bold text-primary" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/article"
              className={({ isActive }) =>
                `text-gray-800 hover:text-primary ${
                  isActive ? "font-bold text-primary" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                size="lg"
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu (dropdown) */}
        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 hover:text-orange-600 ${
                  isActive ? "font-bold text-orange-600" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-800 hover:text-orange-600 ${
                  isActive ? "font-bold text-orange-600" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-gray-800 hover:text-orange-600 ${
                  isActive ? "font-bold text-orange-600" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/article"
              className={({ isActive }) =>
                `text-gray-800 hover:text-orange-600 ${
                  isActive ? "font-bold text-orange-600" : ""
                }`
              }
            >
              Articles
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
