import React from "react";
import ProductCard from "../components/ProductCard";
import useProductsContext from "../hooks/useProductsContext";

const Accessories = () => {

  const { products } = useProductsContext()

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4">
        Accessories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {products.slice(15,20).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Accessories;
