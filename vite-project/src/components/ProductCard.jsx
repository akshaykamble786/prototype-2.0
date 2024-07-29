import React, { useState } from 'react';

const ProductCard = ({ images, title, price, originalPrice, colorOptions, rating }) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="relative max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 m-12 mb-4">

      <div className="h-72 w-72 flex items-center justify-center">
        <img className="max-h-full w-full object-contain hover:scale-105" src={images[selectedColor]} alt={title} />
      </div>

      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-custom-darkblue text-center text-xs text-white z-10">SALE</span>

      <div className="px-6 py-2.5">
        <span className="font-bold text-xl">{title}</span>
      </div>

      <div className="px-6 py-3">
        <div className="flex space-x-4 mb-4">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(color)}
              className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? 'border-red-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>

        <div className="mt-2.5 mb-4 flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">&#8377; {price}</span>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;