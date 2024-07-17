import React from 'react';
import ProductCard from '../components/ProductCard';

const Mobile = () => {

  const product1 = {
    images: {
      '#d3d3d3': './assets/i15.png',
      '#808080': './assets/moto.png',
      '#ff0000': './assets/vivofold.png',
      '#0000ff': './assets/oneplus.png',
    },
    title: 'iPhone 15 Pro Max',
    price: 134999,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };
  
  const product2 = {
    images: {
      '#d3d3d3': './assets/foldp.png',
      '#808080': './assets/igreen.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Samsung Z Fold6',
    price: 179999,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product3 = {
    images: {
      '#d3d3d3': './assets/gal.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Samsung S24 Ultra',
    price: 119900,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product4 = {
    images: {
      '#d3d3d3': './assets/pixel.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Google Pixel 8 Pro',
    price: 89990,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product5 = {
    images: {
      '#d3d3d3': './assets/zflip.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Samsung Z Flip 4',
    price: 109999,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product6 = {
    images: {
      '#d3d3d3': './assets/oneplus.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'One Plus 12R',
    price: 45550,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product7 = {
    images: {
      '#d3d3d3': './assets/moto.png',
      '#808080': './assets/igreen.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Moto Razr 50 Ultra',
    price: 99550,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product8 = {
    images: {
      '#d3d3d3': './assets/nothing.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Nothing Phone 2',
    price: 35999,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product9 = {
    images: {
      '#d3d3d3': './assets/vivofold.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Vivo X Fold 3',
    price: 85990,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  const product10 = {
    images: {
      '#d3d3d3': './assets/oppoflip.png',
      '#808080': './assets/moto.png',
      '#0000ff': './assets/oneplus.png',
      '#ff0000': './assets/vivofold.png'
    },
    title: 'Oppo Find N3',
    price: 79559,
    colorOptions: ['#d3d3d3', '#808080', '#0000ff', '#ff0000']
  };

  return (
    <>
        <h1 className='text-center font-semibold text-3xl m-2 p-4 '>Mobiles</h1> 
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


