import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import useProductsContext from "../hooks/useProductsContext";

const ProductCard = ({ product }) => {
  const { currency } = useProductsContext()
  const hasColors = product.colors && Object.keys(product.colors).length > 0;

  const [selectedColor, setSelectedColor] = useState(
    hasColors ? Object.keys(product.colors)[0] : null
  );

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const categoryRoute = getCategoryRoute(product.category);

  const handleProductClick = () => {
    localStorage.setItem('selectedProduct',JSON.stringify(product));
  }

  return (
    <div className="relative max-w-xs w-96 max-h-[500px] flex flex-col rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 mx-auto mb-8">
      <div className="h-72 w-full flex items-center justify-center overflow-hidden">
        <Link to={`/${categoryRoute}/${product.id}`} onClick={handleProductClick}>
          <img
            className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
            src={
              hasColors
                ? product.colors[selectedColor].images[0]
                : product.images[0]
            }
            alt={product.title}
          />
        </Link>
      </div>
      <Wishlist className="size-9 absolute top-4 right-4 cursor-pointer" />

      {product.sale && (
        <span className="absolute top-4 -left-2 w-20 transform -rotate-45 bg-custom-darkestblue text-white text-xs font-semibold px-1 py-1 text-center">
          SALE
        </span>
      )}

      <div className="flex flex-col flex-1 justify-between px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>

        <div className="mt-2 mb-2 flex items-center space-x-2">
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
                  : "text-gray-500"
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

          <span className="text-xs font-semibold bg-yellow-200 px-2 py-1 rounded">
            {product.rating}
          </span>
        </div>

        {hasColors && (
          <div className="flex space-x-2 mt-2 mb-2">
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

        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 line-through">
              {currency} {product.originalCost}
            </p>
            <p className="text-lg font-bold text-gray-900">
              {currency} {product.cost}
            </p>
          </div>
          <a
            href="#"
            className="mt-2 flex items-center justify-center rounded-md bg-custom-darkblue px-4 py-2 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const getCategoryRoute = (category) => {
  switch (category.toLowerCase()) {
    case "smartphone":
      return "mobiles";
    case "appliance":
      return "appliances";
    case "computing":
      return "computing";
    case "accessories":
      return "accessories";
    default:
      return "mobiles"; // Fallback category
  }
}