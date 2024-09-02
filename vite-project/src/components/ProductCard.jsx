import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Wishlist from "./Wishlist";
import ProductContext from "../../context/ProductsContext";

const ProductCard = ({
  images,
  title,
  price,
  originalPrice,
  colorOptions = [],
  rating,
  saleOrNot,
}) => {

  const {currency} = useContext(ProductContext)

  const [selectedColor, setSelectedColor] = useState(
    colorOptions.length > 0 ? colorOptions[0] : "default"
  ); 

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const imageSrc = images[selectedColor] || images;

  const navigate = useNavigate()

  return (
    <div className="relative max-w-xs w-96 max-h-[500px] flex flex-col rounded-xl overflow-hidden shadow-lg bg-gray-200 p-4 mx-auto mb-8">
      <div className="h-72 w-full flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          src={imageSrc}
          alt={title}
          onClick={()=>navigate('/product-detail')}
        />
      </div>
       <Wishlist className='size-9 absolute top-4 right-4 cursor-pointer'/>

      {saleOrNot && (
        <span className="absolute top-4 -left-2 w-20 transform -rotate-45 bg-custom-darkestblue text-white text-xs font-semibold px-1 py-1 text-center">
          SALE
        </span>
      )}

      <div className="flex flex-col flex-1 justify-between px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        <div className="mt-2 mb-2 flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className="h-4 w-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}

          <span className="text-xs font-semibold bg-yellow-200 px-2 py-1 rounded">
            {rating}
          </span>
        </div>

        {colorOptions.length > 0 && (
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {colorOptions.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(color)}
                className={`h-6 w-6 rounded-full border-2 ${
                  selectedColor === color ? "border-red-500" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        )}

        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 line-through">
             {currency} {originalPrice}
            </p>
            <p className="text-lg font-bold text-gray-900"> {currency} {price}</p>
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







