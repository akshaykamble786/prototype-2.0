import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [activeTab, setActiveTab] = useState("highlights");

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');

    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      if (parsedProduct.id === id) {
        setProduct(parsedProduct);
      } else {
        const foundProduct = products.find((prod) => prod.id === id);
        setProduct(foundProduct);

        if (foundProduct) localStorage.setItem('selectedProduct', JSON.stringify(foundProduct));
      }
    } else {
      const foundProduct = products.find((prod) => prod.id === id);
      setProduct(foundProduct);

      if (foundProduct) localStorage.setItem('selectedProduct', JSON.stringify(foundProduct));
    }
  }, [id, products]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSelectedStorage(null); // Reset storage selection when color changes
  };

  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  // Determine the cost based on selected color and storage
  const currentCost = selectedColor && selectedStorage
    ? product.colors[selectedColor].price[selectedStorage]
    : product.cost;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-600">{product.category}</p>
      <div className="flex">
        <img
          src={
            selectedColor && product.colors[selectedColor]
              ? product.colors[selectedColor].detailImages[0]
              : Object.values(product.colors)[0].detailImages[0] // Default to the first color if none is selected
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
          <div className="text-xl font-bold">₹{currentCost}</div>

          {/* Display color options if available */}
          {product.colors && (
            <div className="flex space-x-2 mt-4">
              {Object.keys(product.colors).map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                ></button>
              ))}
            </div>
          )}

          {/* Display storage options if available and color is selected */}
          {selectedColor && product.colors[selectedColor].price && (
            <div className="flex space-x-2 mt-4">
              {Object.keys(product.colors[selectedColor].price).map((storage) => (
                <button
                  key={storage}
                  className={`px-4 py-2 border-2 rounded ${selectedStorage === storage ? 'border-black' : 'border-gray-300'}`}
                  onClick={() => handleStorageSelect(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          )}

          {/* Tabs for highlights, specifications, and shipping & returns */}
          <div className="mt-4">
            <div className="flex space-x-4 mb-4">
              <button onClick={() => setActiveTab('highlights')} className={activeTab === 'highlights' ? 'font-bold' : ''}>Highlights</button>
              <button onClick={() => setActiveTab('specifications')} className={activeTab === 'specifications' ? 'font-bold' : ''}>Specifications</button>
              <button onClick={() => setActiveTab('shippingAndReturns')} className={activeTab === 'shippingAndReturns' ? 'font-bold' : ''}>Shipping & Returns</button>
            </div>

            {activeTab === 'highlights' && (
              <ul className="list-disc pl-5">
                {product.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}

            {activeTab === 'specifications' && (
              <table className="border border-gray-600">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 font-medium text-gray-700">{key}</td>
                      <td className="px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'shippingAndReturns' && (
              <ul className="list-disc pl-5">
                {product.shippingAndReturns.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;S