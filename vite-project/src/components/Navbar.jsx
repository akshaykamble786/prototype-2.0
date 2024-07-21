import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon, HeartIcon, UserIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center">

      <div className="flex space-x-4 ml-10">
        <Link className="text-xl flex items center font-bold text-gray-800 lg:text-2xl" to="/">
          SHOPPIZ
        </Link>
      </div>

      <div className="flex-1 flex justify-center space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-950">Products</Link>
        <Link to="/mobiles" className="text-gray-600 hover:text-gray-950">Mobiles</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/home-appliances">Home Appliances</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/computing">Computing</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/accessories">Accessories</Link>
      </div>

      <div className="flex items-center space-x-10">
        <div className="relative ">
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
      </div>
    </nav>
  );
};

export default Navbar;
