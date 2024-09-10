import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import useProductsContext from "../hooks/useProductsContext";

const Computing = () => {

  const { products } = useProductsContext()

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4 ">Computing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(10,15).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Computing;
