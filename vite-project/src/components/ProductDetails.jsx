import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  
  // Find product by ID
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.colors[Object.keys(product.colors)[0]].cardImages[0]}
        alt={product.title}
        className="w-full h-auto object-contain mb-4"
      />
      <p className="text-lg">{product.description}</p>
      {/* Display more details like price, color options, etc. */}
    </div>
  );
};

export default ProductDetails;
