import React from 'react';
import ProductCard from '../components/ProductCard';

const Mobile = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center mt-6">Mobiles</h1>
      <div className="container mx-auto px-6 py-8 text-center flex space-x-6 justify-center">
        <ProductCard
          img="/assets/tv2.webp"
          title="Iphone 14 Pro Max"
          description="dhghghgjdhgjdhgjhajfhasjfgjgjasgjahgjahsgjhasjhash"
          price="1,23,300"
        />
        <ProductCard
          img="/assets/igreen.png"
          title="Iphone 14 Pro Max"
          description="dhghghgjdhgjdhgjhajfhasjfgjgjasgjahgjahsgjhasjhash"
          price="1,23,300"
        />
        <ProductCard
          img="/assets/foldp.png"
          title="Iphone 14 Pro Max"
          description="dhghghgjdhgjdhgjhajfhasjfgjgjasgjahgjahsgjhasjhash"
          price="1,23,300"
        />
        <ProductCard
          img="/assets/dellxps.png"
          title="Iphone 14 Pro Max"
          description="dhghghgjdhgjdhgjhajfhasjfgjgjasgjahgjahsgjhasjhash"
          price="1,23,300"
        />
      </div>
    </>
  );
};

export default Mobile;
