import React from 'react';
import ProductCard from '../components/ProductCard';

const Mobile = () => {

  const product1 = {
    image: './assets/igreen.png',
    title: 'iPhone 13 Pro Max',
   // description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.',
    price: '1,45,600',
    colorOptions: ['Green', 'Silver', 'Space Gray', 'Sky Blue', 'Pink'],
    typeOptions: ['Just the device', 'With AppleCare+']
  };

  const product2 = {
    image: './assets/foldp.png',
    title: 'Samsung Fold 6',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,69,690',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };
  

  return (
    <>
      <div className="flex flex-wrap">
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product1} />
        <ProductCard {...product2} />
      </div>
    </>
  );
};

export default Mobile;


