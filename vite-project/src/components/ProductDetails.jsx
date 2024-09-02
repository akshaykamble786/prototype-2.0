import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../context/ProductsContext"; // Make sure this path is correct

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product id from the URL
  const { products } = useContext(ProductContext); // Get products from context

  // Find the product by ID
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex">
        {/* Display the first image of the product */}
        <img
          src={
            product.colors
              ? Object.values(product.colors)[0].detailImages[0]
              : product.detailImages[0] // For products without color options
          }
          alt={product.title}
          className="w-64 h-64 object-contain"
        />

        {/* Product Details */}
        <div className="ml-4">
          <p className="text-lg mb-2">{product.description}</p>
          <div className="text-gray-500 line-through mb-1">
            ₹{product.originalCost}
          </div>
          <div className="text-xl font-bold">₹{product.cost}</div>

          {/* Display color options if available */}
          {product.colors && (
            <div className="flex space-x-2 mt-4">
              {Object.keys(product.colors).map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          )}
          
          {/* Additional information like highlights, reviews, etc. */}
          <ul className="list-disc pl-5 mt-4">
            {product.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
