import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center z-10 relative">
      <div className="flex space-x-4 ml-10">
        <Link
          className="text-xl flex items-center font-bold text-gray-800 lg:text-2xl"
          to="/"
        >
          ELEKTRA
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-950">
          Products
        </Link>
        <Link to="/mobiles" className="text-gray-600 hover:text-gray-950">
          Mobiles
        </Link>
        <Link to="/appliances" className="text-gray-600 hover:text-gray-950">
          Appliances
        </Link>
        <Link to="/computing" className="text-gray-600 hover:text-gray-950">
          Computing
        </Link>
        <Link to="/accessories" className="text-gray-600 hover:text-gray-950">
          Accessories
        </Link>
      </div>

      <div className="flex items-center space-x-10">
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-2 rounded-md border border-gray-500"
          />
          <SearchIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 h-5 w-5 text-gray-500" />
        </div>

        <Link to="/cart" className="text-gray-500">
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>

        <Link to="/userprofile" className="text-gray-500">
          <UserIcon className="h-6 w-6 mr-10" />
        </Link>

        <button
          className="lg:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-20">
          <div className="flex flex-col text-center space-y-4 p-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-950"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/mobiles"
              className="text-gray-600 hover:text-gray-950"
              onClick={toggleMenu}
            >
              Mobiles
            </Link>
            <Link
              to="/appliances"
              className="text-gray-600 hover:text-gray-950"
              onClick={toggleMenu}
            >
              Appliances
            </Link>
            <Link
              to="/computing"
              className="text-gray-600 hover:text-gray-950"
              onClick={toggleMenu}
            >
              Computing
            </Link>
            <Link
              to="/accessories"
              className="text-gray-600 hover:text-gray-950"
              onClick={toggleMenu}
            >
              Accessories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
