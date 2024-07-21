import React from 'react';
import ApplianceCard from '../components/ApplianceCard';

const HomeAppliances = () => {

  const applianceProduct1 = {
    image: './assets/appliances/samsungac.png',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct2 = {
    image: './assets/appliances/lgoven.png',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct3 = {
    image: './assets/appliances/samsungtv.png',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct4 = {
    image: './assets/appliances/havellscooler.png',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct5 = {
    image: './assets/samsung/zfoldPeach',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct6 = {
    image: './assets/samsung/zfoldPeach',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct7 = {
    image: './assets/samsung/zfoldPeach',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct8 = {
    image: './assets/samsung/zfoldPeach',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct9 = {
    image: './assets/samsung/zfoldPeach',
    title: 'Samsung 5 Tonne Converter AC',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct = [applianceProduct1, applianceProduct2, applianceProduct3, applianceProduct4,
                            applianceProduct5, applianceProduct6, applianceProduct7, applianceProduct8,
                            applianceProduct9]

  return (
    <>
      <h1 className='text-center font-semibold text-3xl m-2 p-4 '>Home Appliances</h1>
      <div className="flex flex-wrap">

        {applianceProduct.map((applianceProduct, index) => (
          <ApplianceCard key={index} {...applianceProduct} />
        ))}
      </div>
    </>
  );
};

export default HomeAppliances;
