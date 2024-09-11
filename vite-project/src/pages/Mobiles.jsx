import React from 'react';
import ProductCard from '../components/ProductCard'
import useProductsContext from '../hooks/useProductsContext';

const Mobiles = () => {

  const { products } = useProductsContext()

  return (
    <>
      <h1 className='text-center font-semibold text-3xl m-2 p-4 '>Mobiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {products.slice(0,5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Mobiles;