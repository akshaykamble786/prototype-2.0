import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon, HeartIcon, UserIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center z-10 relative">
      <div className="flex space-x-4 ml-10">
        <Link className="text-xl flex items-center font-bold text-gray-800 lg:text-2xl" to="/">
          SHOPPIZ
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-950">Products</Link>
        <Link to="/mobiles" className="text-gray-600 hover:text-gray-950">Mobiles</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="appliances">Appliances</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/computing">Computing</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/accessories">Accessories</Link>
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

        <Link to="/wishlist" className="text-gray-500">
          <HeartIcon className="h-6 w-6" />
        </Link>

        <Link to="/userprofile" className="text-gray-500">
          <UserIcon className="h-6 w-6 mr-10" />
        </Link>

        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-gray-600 hover:text-gray-950">Products</Link>
          <Link to="/mobiles" className="text-gray-600 hover:text-gray-950">Mobiles</Link>
          <Link className="text-gray-600 hover:text-gray-950" to="/appliances">Appliances</Link>
          <Link className="text-gray-600 hover:text-gray-950" to="/computing">Computing</Link>
          <Link className="text-gray-600 hover:text-gray-950" to="/accessories">Accessories</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 px-2 rounded-md border border-gray-500"
            />
            <SearchIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
