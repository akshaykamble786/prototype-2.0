import React, { useState } from "react";
import { MdCompare } from "react-icons/md";
import Wishlist from "./Wishlist";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [selectedStorage, setSelectedStorage] = useState("256 GB");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("general");

  const productData = {
    Gray: {
      price: {
        "256 GB": "1,39,990",
        "512 GB": "1,68,990",
        "1 TB": "1,99,990",
      },
      images: [
        "https://i.imghippo.com/files/odBsF1722159182.png",
        "https://m.media-amazon.com/images/I/61Jrsu9d3-L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/715zWp1q7rL._SX679_.jpg",
      ],
    },

    Black: {
      price: {
        "256 GB": "1,39,990",
        "512 GB": "1,68,990",
        "1 TB": "1,99,990",
      },
      images: [
        "https://i.imghippo.com/files/d21Iw1722159117.png",
        "https://m.media-amazon.com/images/I/51UtwJ0576L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71lmRVkniLL._SX679_.jpg",
      ],
    },

    White: {
      price: {
        "256 GB": "1,39,990",
        "512 GB": "1,68,990",
        "1 TB": "1,99,990",
      },
      images: [
        "https://i.imghippo.com/files/9xQok1722159207.png",
        "https://m.media-amazon.com/images/I/51hWMvjCV8L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LB1euow1L._SX679_.jpg",
      ],
    },

    RoyalBlue: {
      price: {
        "256 GB": "1,39,990",
        "512 GB": "1,68,990",
        "1 TB": "1,99,990",
      },
      images: [
        "https://i.imghippo.com/files/3Aebh1722159154.png",
        "https://m.media-amazon.com/images/I/61HZS-ZSCLL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71kGvmn-t8L._SX679_.jpg",
      ],
    },
  };

  const colors = Object.keys(productData);
  const storages = ["256 GB", "512 GB", "1 TB"];

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

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Thumbnails and Main Image */}
      <div className="relative flex flex-col">
        <img
          src={productData[selectedColor].images[selectedImage]}
          alt="Product"
          className="w-full h-auto rounded-lg mb-4"
        />
        <Wishlist className="w-8 h-8 absolute top-5 right-9 text-gray-400" />
        <MdCompare className="w-8 h-8 absolute top-5 right-0 text-gray-400" />
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
            Apple iPhone 15 Pro Max ({selectedColor}, {selectedStorage})
          </h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 ml-2 text-sm">(517)</span>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">
            &#8377;
            {productData[selectedColor].price[selectedStorage]}
          </span>
          <span className="text-gray-500 ml-2 line-through">&#8377;280</span>
        </div>

        <p className="text-gray-600 mt-4">
          Embrace innovation by elevating mobile experience with the iPhone 15
          Pro Max, a titanium marvel, boasts an aerospace-grade build, making it
          the lightest Pro model ever. The A17 Pro Chip and the 48 MP Main
          camera system marks a historic leap, delivering unparalleled graphics
          performance and remarkably detailed images.
        </p>

        <div className="flex flex-col md:flex-row">
          {/* Color Options */}
          <div className="mt-6 md:mr-8">
            <span className="text-gray-700 font-semibold">Color</span>
            <div className="flex space-x-4 mt-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Storage Options */}
          <div className="mt-6">
            <span className="text-gray-700 font-semibold">Storage</span>
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
        </div>

        {/* Quantity Feature */}
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
          <button className="w-full md:w-auto px-6 py-2 bg-custom-darkblue text-white rounded-lg">
            Add to Cart
          </button>
          <button className="w-full md:w-auto px-6 py-2 border border-gray-500 text-black rounded-lg">
            Buy Now
          </button>
        </div>
      </div>

      {/* Tabs for Additional Information */}
      <div className="mt-8">
        <div className="border-b border-gray-500">
          <nav className="flex">
            <button
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "general" ? "font-semibold" : "text-gray-600"
              }`}
              onClick={() => handleTabClick("general")}
            >
              Highlights
            </button>
            <button
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "features" ? "font-semibold" : "text-gray-600"
              }`}
              onClick={() => handleTabClick("features")}
            >
              Specifications
            </button>
            <button
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "shipping" ? "font-semibold" : "text-gray-600"
              }`}
              onClick={() => handleTabClick("shipping")}
            >
              Shipping & returns
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="border border-gray-500 p-4 mt-[-2px]">
          {activeTab === "general" && (
            <div className="text-sm text-gray-600 grid grid-cols-2 gap-4">
              <ul className="list-disc ml-4">
                <li>{selectedStorage}</li>
                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor Processor</li>
              </ul>
            </div>
          )}
          {activeTab === "features" && (
            <div className="text-sm text-gray-600">
              <table border="1" cellPadding="10" cellSpacing="0">
                <tr>
                  <th>In The Box</th>
                  <td>Handset, USB C Charge Cable (1m), Documentation</td>
                </tr>
                <tr>
                  <th>Model Number</th>
                  <td>MTP43HN/A</td>
                </tr>
                <tr>
                  <th>Model Name</th>
                  <td>iPhone 15 Pro Max</td>
                </tr>
                <tr>
                  <th>Color</th>
                  <td>{selectedColor}</td>
                </tr>
                <tr>
                  <th>Browse Type</th>
                  <td>Smartphones</td>
                </tr>
                <tr>
                  <th>SIM Type</th>
                  <td>Dual Sim (Nano + eSIM)</td>
                </tr>
                <tr>
                  <th>Hybrid Sim Slot</th>
                  <td>No</td>
                </tr>
                <tr>
                  <th>Touchscreen</th>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>OTG Compatible</th>
                  <td>No</td>
                </tr>
                <tr>
                  <th>Sound Enhancements</th>
                  <td>Built-in Stereo Speaker</td>
                </tr>
              </table>
            </div>
          )}
          {activeTab === "shipping" && (
            <div className="text-sm text-gray-600">
              Shipping content
              <ul className="list-disc ml-4">
                <li>7 days Service Centre Replacement</li>
                <li>Free Delivery</li>
                <li>Warranty Policy</li>
                <li>Top Brand</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* review section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Customer Reviews
        </h3>
        <div className="mt-4 space-y-4">
          <div className="p-4 border border-gray-500 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
              <span className="text-gray-500 text-sm">
                John Doe - July 2024
              </span>
            </div>
            <p className="mt-2 text-gray-600">
              The vacuum cleaner works great! It easily picks up dirt and debris
              from my hardwood floors and carpets. The battery life is
              impressive, and I love the sleek design.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-gray-500">
            <div className="flex items-center justify-between">
              <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
              <span className="text-gray-500 text-sm">
                Jane Smith - August 2024
              </span>
            </div>
            <p className="mt-2 text-gray-600">
              This vacuum cleaner is a game-changer! It’s quiet, efficient, and
              the app control makes it so easy to schedule cleanings. Highly
              recommend!
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Related Products
        </h2>
      </div>
    </div>
  );
};

export default ProductDetail;




