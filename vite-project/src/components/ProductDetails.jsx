import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdCompare, MdOutlineShare } from "react-icons/md";
import useProductsContext from "../hooks/useProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, currency } = useProductsContext();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
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

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
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

  // const currentCost =
  //   selectedVariant && product.price && product.price[selectedVariant]
  //     ? product.price[selectedVariant]
  //     : selectedColor &&
  //       product.colors &&
  //       product.colors[selectedColor] &&
  //       product.colors[selectedColor].price &&
  //       selectedVariant
  //     ? product.colors[selectedColor].price[selectedVariant]
  //     : product.cost;

  const currentCost = (() => {
    if (selectedColor && product.colors && product.colors[selectedColor]) {
      const colorData = product.colors[selectedColor];

      if (
        selectedVariant &&
        colorData.price &&
        typeof colorData.price === "object" &&
        colorData.price[selectedVariant]
      ) {
        return colorData.price[selectedVariant];
      } else if (colorData.price && typeof colorData.price !== "object") {
        return colorData.price;
      }
    }

    if (selectedVariant && product.price && product.price[selectedVariant]) {
      return product.price[selectedVariant];
    }

    return product.cost;
  })();

  const variantType = product.storage
    ? "storage"
    : product.capacity
    ? "capacity"
    : product.lens
    ? "lens"
    : product.type
    ? "type"
    : null;

  const variantOptions = variantType ? product[variantType] : [];

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Thumbnails and Main Image */}

      <div className="relative flex flex-col">
        <img
          src={
            selectedColor && product.colors && product.colors[selectedColor]
              ? product.colors[selectedColor].images[selectedImage]
              : product.images
              ? product.images[selectedImage]
              : Object.values(product.colors || {})[0]?.images[selectedImage]
          }
          alt={product.title}
          className="w-full h-96 object-contain rounded-lg mb-4"
        />

        <MdCompare className="w-8 h-8 absolute top-5 right-0 text-gray-400" />
        <MdOutlineShare className="w-8 h-8 absolute top-5 right-10 text-gray-400" />

        <div className="flex space-x-2">
          {(selectedColor && product.colors && product.colors[selectedColor]
            ? product.colors[selectedColor].images
            : product.images
          ).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 object-contain cursor-pointer rounded-lg border ${
                selectedImage === index ? "border-black" : "border-gray-300"
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
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
                      selectedColor === color
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Variant Options */}
          {variantOptions.length > 0 && (
            <div className="mt-6">
              <span className="text-gray-700 font-semibold">
                {variantType.charAt(0).toUpperCase() + variantType.slice(1)}
              </span>
              <div className="flex space-x-2 mt-2">
                {variantOptions.map((variant) => (
                  <button
                    key={variant}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedVariant === variant && "border-black bg-gray-200"
                    }`}
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant}
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
          <button className="w-full md:w-auto px-8 py-2 bg-white border border-black text-black rounded-md">
            Add to Wishlist
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
                activeTab === "highlights" && "bg-gray-200"
              }`}
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "specifications" && "bg-gray-200"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("shippingAndReturns")}
              className={`py-3 border border-gray-500 px-2 ${
                activeTab === "shippingAndReturns" &&
                "bg-gray-200"
              }`}
            >
              Shipping & Returns
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="border border-gray-500 p-4 mt-[-2px]">
          {activeTab === "highlights" && (
            <ul className="list-disc pl-5 text-sm">
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}

          {activeTab === "specifications" && (
            <table className="text-sm">
              <tbody>
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {key}
                      </td>
                      <td className="px-4 py-2">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}

          {activeTab === "shippingAndReturns" && (
            <ul className="list-disc pl-5 text-sm">
              {product.shippingAndReturns.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
