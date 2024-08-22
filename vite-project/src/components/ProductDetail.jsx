import React, { useState } from "react";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("general");

  const images = [
    "https://i.imghippo.com/files/odBsF1722159182.png",
    "https://i.imghippo.com/files/9xQok1722159207.png",
    "https://i.imghippo.com/files/3Aebh1722159154.png",
    "https://i.imghippo.com/files/d21Iw1722159117.png",
  ];

  const colors = ["#414141", "#DEDBD2", "#273039", "#959188"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Thumbnails and Main Image */}

      <div className="flex flex-col">
        <img
          src={images[selectedImage]}
          alt="Robot vacuum cleaner"
          className="w-full h-auto rounded-lg mb-4"
        />
        <div className="flex space-x-2">
          {images.map((image, index) => (
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
            Robot vacuum cleaner LF-800 gray
          </h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-2 text-sm">(517)</span>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">$246.04</span>
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
        <div className="mt-4 flex space-x-4">
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
                  activeTab === "general"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("general")}
              >
                General parameters
              </button>
              <button
                className={`py-4 ${
                  activeTab === "features"
                    ? "text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("features")}
              >
                Main features
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
                  <span className="font-semibold">Producer code:</span> X782
                </div>
                <div>
                  <span className="font-semibold">Main color:</span>{" "}
                  {selectedColor}
                </div>
                <div>
                  <span className="font-semibold">Secondary color:</span> Black
                </div>
                <div>
                  <span className="font-semibold">Power consumption:</span> 22 W
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="text-sm text-gray-600">
                <p>
                  The LF-800 robot vacuum cleaner features advanced navigation,
                  multiple cleaning modes, and voice control compatibility. It's
                  designed to efficiently clean both carpeted and hard floors,
                  and it automatically returns to its docking station when the
                  battery is low.
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="text-sm text-gray-600">
                <p>
                  We offer free shipping on all orders over $50. Returns are
                  accepted within 30 days of purchase, and the product must be
                  in its original condition. Please contact our customer service
                  for more information.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
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
                debris from my hardwood floors and carpets. The battery life is
                impressive, and I love the sleek design.
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
  );
};

export default ProductDetail;
