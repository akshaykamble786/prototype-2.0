import React, { useState } from "react";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [selectedStorage, setSelectedStorage] = useState("64GB");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("general");

  const productData = {
    Gray: {
      price: {
        "64GB": 246.04,
        "128GB": 266.04,
        "256GB": 296.04,
      },
      images: [
        "https://i.imghippo.com/files/odBsF1722159182.png",
        "https://i.imghippo.com/files/9xQok1722159207.png",
        "https://i.imghippo.com/files/3Aebh1722159154.png",
        "https://i.imghippo.com/files/d21Iw1722159117.png",
      ],
    },
    White: {
      price: {
        "64GB": 256.04,
        "128GB": 276.04,
        "256GB": 306.04,
      },
      images: [
        "https://i.imghippo.com/files/3Aebh1722159154.png",
        "https://i.imghippo.com/files/d21Iw1722159117.png",
        "https://i.imghippo.com/files/9xQok1722159207.png",
        "https://i.imghippo.com/files/odBsF1722159182.png",
      ],
    },
    Blue: {
      price: {
        "64GB": 266.04,
        "128GB": 286.04,
        "256GB": 316.04,
      },
      images: [
        "https://i.imghippo.com/files/d21Iw1722159117.png",
        "https://i.imghippo.com/files/3Aebh1722159154.png",
        "https://i.imghippo.com/files/odBsF1722159182.png",
        "https://i.imghippo.com/files/9xQok1722159207.png",
      ],
    },
  };

  const colors = Object.keys(productData);
  const storages = ["64GB", "128GB", "256GB"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(0); // Reset to the first image of the new color
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

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Thumbnails and Main Image */}
      <div className="flex flex-col">
        <img
          src={productData[selectedColor].images[selectedImage]}
          alt="Product"
          className="w-full h-auto rounded-lg mb-4"
        />
        <div className="flex space-x-2">
          {productData[selectedColor].images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-cover cursor-pointer rounded-lg border ${
                selectedImage === index ? "border-black" : "border-gray-300"
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Apple iPhone 15 ({selectedColor}, {selectedStorage})
          </h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-2 text-sm">(517)</span>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">
            ${productData[selectedColor].price[selectedStorage].toFixed(2)}
          </span>
          <span className="text-gray-500 ml-2 line-through">$280</span>
        </div>

        <p className="text-gray-600 mt-4">
          DEXP LF-800 robot vacuum cleaner with 22W power. Vacuum-collector
          capacity 600 ml. Cleaning – dry/wet, dust canister – 0.6 l, display,
          docking station.
        </p>

        {/* Color Options */}
        <div className="mt-6">
          <span className="text-gray-700 font-semibold">Color:</span>
          <div className="flex space-x-4 mt-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === color ? "border-red-500" : "border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
          </div>
        </div>

        {/* Storage Options */}
        <div className="mt-6">
          <span className="text-gray-700 font-semibold">Storage:</span>
          <div className="flex space-x-4 mt-2">
            {storages.map((storage, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-lg ${
                  selectedStorage === storage
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onClick={() => handleStorageChange(storage)}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Feature */}
        <div className="mt-4 flex items-center">
          <span className="text-gray-700 font-semibold">Quantity:</span>
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
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-black text-white rounded-lg">
            Add to Cart
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-lg">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-lg border border-black">
            Add to Wishlist
          </button>
        </div>

        {/* Tabs for Additional Information */}
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-6">
            <button
                className={`py-4 ${
                  activeTab === "offers"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("offers")}
              >
                Offers
              </button>
              <button
                className={`py-4 ${
                  activeTab === "general"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("general")}
              >
                Highlights
              </button>
              <button
                className={`py-4 ${
                  activeTab === "features"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("features")}
              >
                Specifications
              </button>
              <button
                className={`py-4 ${
                  activeTab === "shipping"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("shipping")}
              >
                Shipping & returns
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "general" && (
              <div className="text-sm text-gray-600 grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold">Model:</span> DEXP LF-800
                </div>
                <div>
                  <span className="font-semibold">Cleaning:</span> Dry/Wet
                </div>
                <div>
                  <span className="font-semibold">Power:</span> 22W
                </div>
                <div>
                  <span className="font-semibold">Battery life:</span> 60 min
                </div>
              </div>
            )}
            {activeTab === "features" && (
              <div className="text-sm text-gray-600">
                {/* Feature content */}
                <ul className="list-disc ml-4">
                  <li>22W motor with powerful suction.</li>
                  <li>Dual cleaning modes: dry and wet.</li>
                  <li>Large 600ml dust container for extended cleaning.</li>
                  <li>Intelligent path planning for efficient cleaning.</li>
                </ul>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="text-sm text-gray-600">
                {/* Shipping content */}
                <p>
                  Free shipping on orders over $50. Standard delivery within 5-7
                  business days. Expedited shipping options available at
                  checkout. Easy returns within 30 days of purchase.
                </p>
              </div>
            )}
            {activeTab === "offers" && (
              <div className="text-sm text-gray-600">
                {/* Shipping content */}
                <p>
                  Free shipping on orders over $50. Standard delivery within 5-7
                  business days. Expedited shipping options available at
                  checkout. Easy returns within 30 days of purchase.
                </p>
              </div>
            )}
          </div>

          {/* review section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">
              Customer Reviews
            </h3>
            <div className="mt-4 space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  <span className="text-gray-500 text-sm">
                    John Doe - July 2024
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  The vacuum cleaner works great! It easily picks up dirt and
                  debris from my hardwood floors and carpets. The battery life
                  is impressive, and I love the sleek design.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  <span className="text-gray-500 text-sm">
                    Jane Smith - August 2024
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  This vacuum cleaner is a game-changer! It’s quiet, efficient,
                  and the app control makes it so easy to schedule cleanings.
                  Highly recommend!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
