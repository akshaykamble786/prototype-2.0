import React, { useState } from 'react';

const ProductCard = ({ images, title, price, colorOptions }) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 m-12 mb-4">
      <div className="h-80 w-80 flex items-center justify-center">
        <img className="max-h-full w-full object-contain" src={images[selectedColor]} alt={title} />
      </div>
      <div className="px-6 py-2.5">
        <div className="font-bold text-xl">{title}</div>
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
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">&#8377; {price}</span>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;