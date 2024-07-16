import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, price, colorOptions, typeOptions }) => {
  return (
    <>
      <div className="max-w-sm h-auto rounded-xl overflow-hidden shadow-lg bg-white p-4 m-6">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {/* <p className="text-gray-700 text-base">
          {description}
        </p> */}
        </div>
        <div className="px-6 py-4">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                Color
              </label>
              <select
                id="color"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {colorOptions.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                Type
              </label>
              <select
                id="type"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {typeOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${price}</span>
            <Link to='/cart'>
              <button className="bg-green-500 hover:bg-green-700 w-40 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
