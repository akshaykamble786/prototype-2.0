import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CogIcon,
  HeartIcon,
  ClipboardListIcon,
} from "@heroicons/react/solid";
import { ListOrderedIcon, LogOutIcon, ShoppingCart } from "lucide-react";
import { CiUser, CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    if (isDropdownOpen) setDropdownOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 relative">
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
            <CiSearch size={30} className="text-gray-600" />
            <Link to="/cart" className="text-gray-600 relative">
              <ShoppingCart strokeWidth={1.25} />
              <p className="absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-custom-darkblue text-white aspect-square rounded-full text-xs">0</p>
            </Link>
            <button
              onClick={toggleDropdown}
              className="text-gray-500 focus:outline-none"
            >
              <CiUser className="text-gray-700 h-6 w-6" onClick={()=>navigate('/signup')}/>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 flex flex-col text-center m-4 bg-white z-50">
            <Link
              to="/mobiles"
              className="text-gray-600 hover:text-gray-950 hover:underline p-2"
              onClick={toggleMenu}
            >
              Mobiles
            </Link>
            <hr />
            <Link
              to="/appliances"
              className="text-gray-600 hover:text-gray-950 hover:underline p-2"
              onClick={toggleMenu}
            >
              Appliances
            </Link>
            <hr />
            <Link
              to="/computing"
              className="text-gray-600 hover:text-gray-950 hover:underline p-2"
              onClick={toggleMenu}
            >
              Computing
            </Link>
            <hr />
            <Link
              to="/accessories"
              className="text-gray-600 hover:text-gray-950 hover:underline p-2"
              onClick={toggleMenu}
            >
              Accessories
            </Link>
            <hr />
          </div>
        )}

        {/* Dropdown for Mobile View */}
        {isDropdownOpen && (
          <div className="absolute top-full right-2 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
            <div className="flex flex-col text-center space-y-2">
              <Link
                to="/account"
                className="flex items-center px-3 py-2 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <UserIcon className="h-5 w-5 mr-2 text-gray-500" />
                My Account
              </Link>
              <Link
                to="/orders"
                className="flex items-center px-3 py-2 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <ClipboardListIcon className="h-5 w-5 mr-2 text-gray-500" />
                Orders
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center px-3 py-2 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <HeartIcon className="h-5 w-5 mr-2 text-gray-500" />
                Wishlist
              </Link>
              <Link
                to="/admin"
                className="flex items-center px-3 py-2 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <CogIcon className="h-5 w-5 mr-2 text-gray-500" />
                Admin Panel
              </Link>
              <Link
                to="/admin"
                className="flex items-center px-3 py-2 hover:bg-gray-100"
                onClick={toggleDropdown}
              >
                <LogOutIcon className="h-5 w-5 mr-2 text-gray-500" />
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center">
        {/* Left: Brand Name */}
        <Link className="text-2xl font-bold ml-10 text-gray-800" to="/">
          ELEKTRA
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/mobiles"
            className="text-gray-600 hover:text-gray-950 flex flex-col items-center gap-1"
          >
            Mobiles
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/appliances"
            className="text-gray-600 hover:text-gray-950 flex flex-col items-center gap-1"
          >
            Appliances
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/computing"
            className="text-gray-600 hover:text-gray-950 flex flex-col items-center gap-1"
          >
            Computing
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/accessories"
            className="text-gray-600 hover:text-gray-950 flex flex-col items-center gap-1"
          >
            Accessories
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </div>

        {/* Right: Search Bar and Icons */}
        <div className="flex items-center space-x-8 mr-12">
          <div className="relative">
            <CiSearch size={30} className="text-gray-600" />
          </div>

          <Link to="/cart" className="text-gray-700 relative">
            <ShoppingCart strokeWidth={1.25} />
            <p className="absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-custom-darkblue text-white aspect-square rounded-full text-xs">0</p>
          </Link>

          <div className="relative z-50">
            <button onClick={toggleDropdown} className="flex items-center">
              <CiUser className="text-gray-800 h-6 w-6" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-2">
                  <Link
                    to="/account"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <UserIcon className="h-5 w-5 mr-3 text-gray-500" />
                    My Account
                  </Link>

                  <Link
                    to="/orders"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <ClipboardListIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Orders
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <HeartIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Wishlist
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <ListOrderedIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Theme
                  </Link>
                  <Link
                    to="/admin"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <CogIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Admin Panel
                  </Link>
                  <Link
                    to="/admin"
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <LogOutIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Logout
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
