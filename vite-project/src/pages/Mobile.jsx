import React from 'react';
import ProductCard from '../components/ProductCard';

const Mobile = () => {

  const product1 = {
    image: './assets/i15.png',
    title: 'iPhone 15 Pro Max',
   // description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.',
    price: '1,45,600',
    colorOptions: ['Titanium ', 'Silver', 'Space Gray', 'Sky Blue', 'Pink'],
    typeOptions: ['Just the device', 'With AppleCare+']
  };

  const product2 = {
    image: './assets/foldp.png',
    title: 'Samsung Z Fold6',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,69,690',
    colorOptions: ['Blue', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product3 = {
    image: './assets/moto.png',
    title: '  Moto Razr 50 Ultra',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,19,699',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product4 = {
    image: './assets/pixel.png',
    title: 'Googel Pixel 8 Pro',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '89,990',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product5 = {
    image: './assets/gal.png',
    title: 'Samsung S24 Ultra',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,79,690',
    colorOptions: ['Grey', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product6 = {
    image: './assets/oppoflip.png',
    title: 'Oppo Flip N3',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,69,690',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product7 = {
    image: './assets/oneplus.png',
    title: 'One Plus 12R',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '55,550',
    colorOptions: ['Green', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product8 = {
    image: './assets/zflip.png',
    title: 'Samsung Z Flip 4',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '1,29,690',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };

  const product9 = {
    image: './assets/nothing.png',
    title: 'Nothing Phone 2',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '32,250',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };
  const product10 = {
    image: './assets/vivofold.png',
    title: 'Vivo X Fold3',
    //description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods',
    price: '99,690',
    colorOptions: ['Black', 'White'],
    typeOptions: ['Standard', 'Premium']
  };
  

  return (
    <>
        <h1 className='text-center font-semibold text-4xl m-2 p-4 '>Mobiles</h1> 
      <div className="flex flex-wrap">
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product5} />
        <ProductCard {...product4} />
        <ProductCard {...product3} />
        <ProductCard {...product6} />
        <ProductCard {...product7} />
        <ProductCard {...product8} />
        <ProductCard {...product9} />
        <ProductCard {...product10} />
      </div>
    </>
  );
};

export default Mobile;


