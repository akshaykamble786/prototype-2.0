import React from 'react';
import ApplianceCard from '../components/ApplianceCard';

const HomeAppliances = () => {

  const applianceProduct1 = {
    image: './assets/appliances/samsungac.png',
    title: 'Samsung Convertible 5-in-1 Inverter Split AC',
    description: 'AR24AY4YATA, 6.00kW (2.0 T) 4 Star',
    price: 48990,
  }

  const applianceProduct2 = {
    image: './assets/appliances/lgoven.png',
    title: 'LG 20 L Solo Microwave Oven ',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 6890,
  }

  const applianceProduct3 = {
    image: './assets/appliances/samsungtv.png',
    title: 'Samsung D Series Crystal 4K Smart LED TV 189 cm (75 inches)',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 114990,
  }

  const applianceProduct4 = {
    image: './assets/appliances/havellscooler.png',
    title: 'Havells 70 L Desert Air Cooler',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 13984,
  }

  const applianceProduct5 = {
    image: './assets/appliances/agarovacuum.png',
    title: 'AGARO Ace Wet & Dry Vacuum Cleaner',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 5999,
  }

  const applianceProduct6 = {
    image: './assets/appliances/fridge.png',
    title: 'Godrej 564 L Frost Free Side-By-Side Refrigerator',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 59990,
  }

  const applianceProduct7 = {
    image: './assets/appliances/geyser.png',
    title: 'Crompton Arno Neo Water Heater',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct8 = {
    image: './assets/appliances/pigeonairfry.png',
    title: 'Pigeon Healthifry Digital Airfryer',
    description: 'this is a very good converter AC with lots of efficiency',
    price: 68990,
  }

  const applianceProduct9 = {
    image: './assets/appliances/washh.png',
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
