import React from "react";
import { useState } from "react";

const Pordcard = ({
  colorOptions = [],
  description,
  images,
  title,
  originalPrice,
  price,
  rating,
  reviewAmount,
  saleOrNot,
}) => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="relative flex items-center justify-center h-full mb-12">
        <div className="max-w-sm rounded-lg border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg w-80 h-64 object-contain"
            src={images[selectedColor]}
            alt={title}
          ></img>

          <div className="p-5">
            {saleOrNot ? (
              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-custom-gradient text-center text-xs text-white">
                SALE
              </span>
            ) : (
              ""
            )}

            <div className="flex items-center mb-3">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-500 ml-2">{rating}</span>
              <span className="ml-2 text-gray-500">{reviewAmount}</span>
            </div>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-2 text-xl font-light text-gray-600 dark:text-white">{description}</p>
            <div className="flex space-x-4 mb-4">
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => handleColorChange(color)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>

            <p className="mb-1 text-gray-500 line-through dark:text-gray-400">
              {originalPrice}
            </p>
            <p className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              {price}
            </p>
            <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pordcard;




