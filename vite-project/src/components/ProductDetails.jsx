import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductsContext";
import { MdCompare, MdOutlineShare } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, currency } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("highlights");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");

    if (storedProduct) {
      const parsedProduct = JSON.parse(storedProduct);
      if (parsedProduct.id === id) {
        setProduct(parsedProduct);
        if (parsedProduct.colors) {
          setSelectedColor(Object.keys(parsedProduct.colors)[0]); // Set default color if colors exist
        }
      } else {
        const foundProduct = products.find((prod) => prod.id === id);
        setProduct(foundProduct);
        if (foundProduct) {
          localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
          if (foundProduct.colors) {
            setSelectedColor(Object.keys(foundProduct.colors)[0]); // Set default color if colors exist
          }
        }
      }
    } else {
      const foundProduct = products.find((prod) => prod.id === id);
      setProduct(foundProduct);
      if (foundProduct) {
        localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
        if (foundProduct.colors) {
          setSelectedColor(Object.keys(foundProduct.colors)[0]); // Set default color if colors exist
        }
      }
    }
  }, [id, products]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(0);
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  // Determine the cost based on selected color and storage
  const currentCost =
    selectedColor && product.colors && product.colors[selectedColor] && selectedStorage
      ? product.colors[selectedColor].price[selectedStorage]
      : product.cost;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Thumbnails and Main Image */}
      <div className="relative flex flex-col">
        <img
          src={
            selectedColor && product.colors && product.colors[selectedColor]
              ? product.colors[selectedColor].detailImages[0]
              : product.cardImages
              ? product.cardImages[0]
              : Object.values(product.colors || {})[0]?.detailImages[0]
          }
          alt={product.title}
          className="w-full h-auto object-contain rounded-lg mb-4"
        />
        <MdCompare className="w-8 h-8 absolute top-5 right-0 text-gray-400" />
        <MdOutlineShare className="w-8 h-8 absolute top-5 right-10 text-gray-400" />
      </div>

      {/* Right: Product Details */}
      <div className="mt-9 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-2 text-sm">
            ({product.reviewCount})
          </span>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">
            {currency}
            {currentCost}
          </span>
          {product.originalCost && (
            <span className="text-gray-500 ml-2 line-through">
              {currency}
              {product.originalCost}
            </span>
          )}
        </div>

        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="flex flex-col md:flex-row">
          {/* Color options */}
          {product.colors && Object.keys(product.colors).length > 0 && (
            <div className="mt-6 md:mr-8">
              <span className="text-gray-700 font-semibold">Color</span>
              <div className="flex space-x-2 mt-4">
                {Object.keys(product.colors).map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-red-500" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Storage/Type/Capacity options */}
          {selectedColor &&
            product.colors &&
            product.colors[selectedColor]?.price &&
            Object.keys(product.colors[selectedColor].price).length > 0 && (
              <div className="mt-6">
                <span className="text-gray-700 font-semibold">Storage</span>
                <div className="flex space-x-2 mt-2">
                  {Object.keys(product.colors[selectedColor].price).map((storage) => (
                    <button
                      key={storage}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedStorage === storage ? "border-black" : "border-gray-300"
                      }`}
                      onClick={() => handleStorageChange(storage)}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

          {/* Capacity Options */}
          {product.capacity && (
            <div className="mt-6">
              <span className="text-gray-700 font-semibold">Capacity</span>
              <div className="flex space-x-2 mt-2">
                {product.capacity.map((cap) => (
                  <button
                    key={cap}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedStorage === cap ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => handleStorageChange(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quantity feature */}
        <div className="mt-4 flex items-center">
          <span className="text-gray-700 font-semibold">Quantity</span>
          <button
            className="ml-4 border border-gray p-2"
            onClick={() =>
              setQuantity((prevQuantity) =>
                prevQuantity > 1 ? prevQuantity - 1 : 1
              )
            }
          >
            -
          </button>
          <span className="border border-gray p-2 px-6">{quantity}</span>
          <button
            className="border border-gray p-2"
            onClick={() => setQuantity((prevQuantity) => quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="w-full md:w-auto px-8 py-2 bg-custom-darkblue text-white rounded-md">
            Add to Cart
          </button>
          <button className="flex w-full md:w-auto px-8 py-2 border border-gray-500 text-black rounded-md">
            Add to wishlist
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="border-b border-gray-500">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("highlights")}
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "highlights" ? "text-blue-500" : ""
              }`}
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab("description")}
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "description" ? "text-blue-500" : ""
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "shipping" ? "text-blue-500" : ""
              }`}
            >
              Shipping & Returns
            </button>
          </nav>
        </div>

        {activeTab === "highlights" && (
          <div className="p-4 mt-3">
            <ul className="list-disc list-inside">
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "description" && (
          <div className="p-4">{product.description}</div>
        )}
        {activeTab === "shipping" && (
          <div className="p-4">{product.shippingAndReturns}</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

