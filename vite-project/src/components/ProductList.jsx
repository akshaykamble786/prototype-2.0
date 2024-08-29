import React, { useContext } from 'react';
import ProductContext from '../../context/ProductsContext';

function ProductList() {
  const { products } = useContext(ProductContext);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
