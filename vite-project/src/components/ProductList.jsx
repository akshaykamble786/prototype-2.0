import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  const hasColors = product.colors && Object.keys(product.colors).length > 0;

  const [selectedColor, setSelectedColor] = useState(
    hasColors ? Object.keys(product.colors)[0] : null
  );

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="relative max-w-xs w-96 max-h-[500px] flex flex-col rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 mx-auto mb-8">
      {/* Heart Icon */}
      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12l5.25 5.25L21 6"
            />
          </svg>
        </button>
      </div>

      {/* Product Image */}
      <Link to={`/container/${product.id}`}>
        {" "}
        {/* Navigate to ProductDetail */}
        <img
          src={
            hasColors
              ? product.colors[selectedColor].cardImages[0]
              : product.cardImages[0] // Use cardImages if no colors
          }
          alt={product.title}
          className="w-full h-48 object-contain mb-4 cursor-pointer"
        />
      </Link>

      {/* Product Info */}
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <div className="flex items-center my-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={
                index < Math.floor(product.rating) ? "currentColor" : "none"
              }
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-4 h-4 ${
                index < Math.floor(product.rating)
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.148 6.6a1 1 0 00.95.69h6.6c.92 0 1.3 1.18.707 1.707l-5.347 4.4a1 1 0 00-.364 1.118l2.148 6.6c.3.92-.755 1.688-1.536 1.118l-5.347-4.4a1 1 0 00-1.178 0l-5.347 4.4c-.781.57-1.836-.198-1.536-1.118l2.148-6.6a1 1 0 00-.364-1.118l-5.347-4.4c-.592-.527-.213-1.707.707-1.707h6.6a1 1 0 00.95-.69l2.148-6.6z"
              />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm bg-yellow-100 text-yellow-700 px-2 rounded">
          {product.rating}
        </span>
      </div>

      {/* Price Display */}
      <div className="text-gray-500 line-through text-sm mb-1">
        ₹{product.originalCost}
      </div>
      <div className="text-xl font-bold">
        ₹
        {/* If the product has colors, display the main price; otherwise, show the default cost */}
        {product.colors ? product.cost : product.price[product.size[0]]}
      </div>

      {/* Color Options */}
      {hasColors && (
        <div className="flex space-x-2 mt-4">
          {Object.keys(product.colors).map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === color ? "border-red-500" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>
      )}

      {/* Add to Cart Button */}
      <button className="bg-blue-900 text-white w-full py-2 mt-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2m0 0l1.2 6M5.4 5h13.2l1.2 6m-15.6-6L4.8 18m0 0H19.2m-14.4 0a1.8 1.8 0 11-3.6 0m17.4 0a1.8 1.8 0 11-3.6 0m1.2-6h-6"
          />
        </svg>
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductList;
