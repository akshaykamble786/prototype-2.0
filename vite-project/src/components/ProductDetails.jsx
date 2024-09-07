// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ProductContext from "../context/ProductContext";
// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products } = useContext(ProductContext);
//   const [product, setProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedStorage, setSelectedStorage] = useState(null);
//   const [activeTab, setActiveTab] = useState("highlights"); // Default tab

//   useEffect(() => {
//     const storedProduct = localStorage.getItem("selectedProduct");

//     if (storedProduct) {
//       const parsedProduct = JSON.parse(storedProduct);
//       if (parsedProduct.id === id) {
//         setProduct(parsedProduct);
//         setSelectedColor(Object.keys(parsedProduct.colors)[0]); // Set default color
//         setSelectedStorage(parsedProduct.storage[0]); // Set default storage
//       } else {
//         const foundProduct = products.find((prod) => prod.id === id);
//         setProduct(foundProduct);
//         setSelectedColor(
//           foundProduct ? Object.keys(foundProduct.colors)[0] : null
//         ); // Default color
//         setSelectedStorage(foundProduct ? foundProduct.storage[0] : null); // Default storage

//         if (foundProduct)
//           localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
//       }
//     } else {
//       const foundProduct = products.find((prod) => prod.id === id);
//       setProduct(foundProduct);
//       setSelectedColor(
//         foundProduct ? Object.keys(foundProduct.colors)[0] : null
//       ); // Default color
//       setSelectedStorage(foundProduct ? foundProduct.storage[0] : null); // Default storage

//       if (foundProduct)
//         localStorage.setItem("selectedProduct", JSON.stringify(foundProduct));
//     }
//   }, [id, products]);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // Function to handle color change
//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   // Function to handle storage change
//   const handleStorageChange = (storage) => {
//     setSelectedStorage(storage);
//   };

//   // Determine the displayed image based on selected color
//   const displayedImage = selectedColor
//     ? product.colors[selectedColor].detailImages[0]
//     : product.detailImages[0];

//   // Determine the price based on selected storage
//   const displayedPrice = selectedStorage
//     ? product.storage[selectedStorage]
//     : product.cost;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{product.title}</h1>
//       <p className="text-sm text-gray-600 mb-4">{product.category}</p>

//       {/* Product Image and Details */}
//       <div className="flex">
//         {/* Display the first image of the product */}
//         <img
//           src={displayedImage}
//           alt={product.title}
//           className="w-64 h-64 object-contain"
//         />

//         {/* Product Details */}
//         <div className="ml-4">
//           <p className="text-lg mb-2">{product.description}</p>
//           <div className="text-gray-500 line-through mb-1">
//             ₹{product.originalCost}
//           </div>
//           <div className="text-xl font-bold">₹{displayedPrice}</div>

//           {/* Display color options if available */}
//           {product.colors && (
//             <div className="flex space-x-2 mt-4">
//               {Object.keys(product.colors).map((color) => (
//                 <button
//                   key={color}
//                   className={`w-6 h-6 rounded-full border-2 ${
//                     color === selectedColor ? "border-black" : ""
//                   }`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => handleColorChange(color)}
//                 ></button>
//               ))}
//             </div>
//           )}

//           {/* Display storage options if available */}
//           {product.storage && (
//             <div className="flex space-x-2 mt-4">
//               {product.storage.map((storageOption) => (
//                 <button
//                   key={storageOption}
//                   className={`px-4 py-2 border rounded ${
//                     storageOption === selectedStorage ? "bg-gray-200" : ""
//                   }`}
//                   onClick={() => handleStorageChange(storageOption)}
//                 >
//                   {storageOption}
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Review Count and Rating */}
//           <div className="flex items-center mt-4">
//             <span className="text-yellow-500 text-xl font-bold">
//               {product.rating}
//             </span>
//             <span className="text-gray-600 ml-2">
//               ({product.reviewCount} reviews)
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Tabs for Highlights, Specifications, Shipping & Returns, Reviews */}
//       <div className="mt-6">
//         <div className="flex space-x-4 border-b">
//           <button
//             className={`pb-2 ${
//               activeTab === "highlights" ? "border-b-2 border-black" : ""
//             }`}
//             onClick={() => setActiveTab("highlights")}
//           >
//             Highlights
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "specifications" ? "border-b-2 border-black" : ""
//             }`}
//             onClick={() => setActiveTab("specifications")}
//           >
//             Specifications
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "shipping" ? "border-b-2 border-black" : ""
//             }`}
//             onClick={() => setActiveTab("shipping")}
//           >
//             Shipping & Returns
//           </button>
//           <button
//             className={`pb-2 ${
//               activeTab === "reviews" ? "border-b-2 border-black" : ""
//             }`}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//         </div>

//         {/* Content for each tab */}
//         <div className="mt-4">
//           {activeTab === "highlights" && (
//             <ul className="list-disc pl-5">
//               {product.highlights.map((highlight, index) => (
//                 <li key={index}>{highlight}</li>
//               ))}
//             </ul>
//           )}
//           {activeTab === "specifications" && (
//             <table className="min-w-full border border-gray-300 mt-4">
//               <tbody>
//                 {Object.entries(product.specifications).map(
//                   ([key, value], index) => (
//                     <tr key={index} className="border-b border-gray-300">
//                       <td className="px-4 py-2 font-medium text-gray-700">
//                         {key}
//                       </td>
//                       <td className="px-4 py-2">{value}</td>
//                     </tr>
//                   )
//                 )}
//               </tbody>
//             </table>
//           )}

//           {activeTab === "shipping" && <div>{product.shippingAndReturns}</div>}
//           {activeTab === "reviews" && (
//             <div>
//               {/* Replace with actual reviews */}
//               <p>Customer reviews coming soon...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


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

export default ProductDetails;
