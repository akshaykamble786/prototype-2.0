// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <div className="flex space-x-4">
//           <Link className="text-xl flex items center font-bold text-gray-800 lg:text-2xl" to="/">
//             SHOPPIZ
//           </Link>
//           <div className="relative">
//             <input type="text" className="h-10 pl-4 pr-8 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search" />
//             <button className="absolute right-0 top-0 mt-2 mr-2">
//               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-4.15A7.5 7.5 0 1112 4.5a7.5 7.5 0 017.5 7.5z"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
// //         <div className="flex items-center space-x-9">
// //           <Link className="text-gray-600 hover:text-gray-950" to="/">Home</Link>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/mobile">Mobiles</Link>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/home-appliances">Home Appliances</Link>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/gadgets">Gadgets</Link>
// //         </div>

// //         <div className='flex items-center space-x-9'>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/wishlist">Wishlist</Link>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/cart">Cart</Link>
// //           <Link className="text-gray-600 hover:text-gray-950" to="/profile">Profile</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// export default Navbar;


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

      <div className="flex-1 flex justify-center space-x-10">
        <Link to="/" className="text-gray-600 hover:text-gray-950">Home</Link>
        <Link to="/mobiles" className="text-gray-600 hover:text-gray-950">Mobiles</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/home-appliances">Home Appliances</Link>
        <Link className="text-gray-600 hover:text-gray-950" to="/gadgets">Gadgets</Link>
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
