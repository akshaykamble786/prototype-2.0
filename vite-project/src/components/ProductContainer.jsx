import React, { useContext } from "react";
import ProductContext from "../../context/ProductsContext";
import ProductList from "./ProductList"; // Import ProductList

const ProductContainer = () => {
  const { products } = useContext(ProductContext); // Get products from context

  console.log("Products array:", products);

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
