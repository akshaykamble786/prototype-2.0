import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col">
        <div className="flex justify-between items-center">
          {/* Left: Burger menu and brand name */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
            <Link className="text-xl font-bold text-gray-800" to="/">
              ELEKTRA
            </Link>
          </div>

          {/* Right: Cart and User Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-500">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link to="/userprofile" className="text-gray-500">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Search Bar under icons */}
        <div className="mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-3 rounded-md border border-gray-500"
            />
            <SearchIcon className="absolute top-1/2 transform -translate-y-1/2 right-3 h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="flex flex-col text-center space-y-4 mt-4">
            {/* <Link
              to="/"
              className="text-gray-600 hover:text-gray-950 hover:underline"
              onClick={toggleMenu}
            >
              Products
            </Link> */}
            <Link
              to="/mobiles"
              className="text-gray-600 hover:text-gray-950 hover:underline"
              onClick={toggleMenu}
            >
              Mobiles
            </Link>
            <Link
              to="/appliances"
              className="text-gray-600 hover:text-gray-950 hover:underline"
              onClick={toggleMenu}
            >
              Appliances
            </Link>
            <Link
              to="/computing"
              className="text-gray-600 hover:text-gray-950 hover:underline"
              onClick={toggleMenu}
            >
              Computing
            </Link>
            <Link
              to="/accessories"
              className="text-gray-600 hover:text-gray-950 hover:underline"
              onClick={toggleMenu}
            >
              Accessories
            </Link>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center">
        {/* Left: Brand Name */}
        <Link className="text-2xl font-bold ml-12 text-gray-800" to="/">
          ELEKTRA
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6">
          {/* <Link to="/" className="text-gray-600 hover:text-gray-950 hover:underline">
            Products
          </Link> */}
          <Link to="/mobiles" className="text-gray-600 hover:text-gray-950 hover:underline">
            Mobiles
          </Link>
          <Link to="/appliances" className="text-gray-600 hover:text-gray-950 hover:underline">
            Appliances
          </Link>
          <Link to="/computing" className="text-gray-600 hover:text-gray-950 hover:underline">
            Computing
          </Link>
          <Link to="/accessories" className="text-gray-600 hover:text-gray-950 hover:underline">
            Accessories
          </Link>
        </div>

        {/* Right: Search Bar and Icons */}
        <div className="flex items-center space-x-8 mr-12">
          <div className="relative">
            <CiSearch size={30} className="text-gray-600"/>
          </div>
          <Link to="/cart" className="text-gray-500">
            <ShoppingCartIcon className="h-6 w-6 " />
          </Link>
          <Link to="/userprofile" className="text-gray-500">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
