import React from "react";
import ProductCard from "../components/ProductCard";

const Appliances = () => {
  const applianceProduct1 = {
    images: "https://i.imghippo.com/files/JLoFx1722420867.png",
    title: "Havells Altima 70L Desert Air Cooler",
    price: 8999,
    originalPrice: 10999,
    rating: 4.1,
    saleOrNot: false,
  };

  const applianceProduct2 = {
    images: "https://i.imghippo.com/files/MMnFK1722420738.png",
    title: "Godrej 564 L Frost Free Side-By-Side Refrigerator",
    price: 56990,
    originalPrice: 90000,
    rating: 4.3,
    saleOrNot: false,
  };

  const applianceProduct3 = {
    images: "https://i.imghippo.com/files/9jgrV1722420642.png",
    title: "AGARO Ace Wet & Dry Vacuum Cleaner",
    price: 7999,
    originalPrice: 9999,
    rating: 4.4,
    saleOrNot: false,
  };

  const applianceProduct4 = {
    images: "https://i.imghippo.com/files/3UMZQ1722420676.png",
    title: "Crompton Arno Neo 15-L Storage Water Heater",
    price: 5699,
    originalPrice: 10400,
    rating: 4.5,
    saleOrNot: true,
  };

  const applianceProduct5 = {
    images: {
      "#33494F":"https://i.imghippo.com/files/vhGY71722420758.png",
      "#3B3B3B":"https://i.imghippo.com/files/jJjjZ1723197300.png",
    },
    colorOptions:["#33494F","#3B3B3B"],
    title: "Pigeon Healthifry Digital Air Fryer",
    price: 2659,
    originalPrice: 4999,
    rating: 4.0,
    saleOrNot: false,
  };

  const applianceProduct6 = {
    images: {
      "#80578D":"https://i.imghippo.com/files/fnv3L1722420847.png",
      "#16151B":"https://i.imghippo.com/files/gG9jE1722938134.png",
    },
    colorOptions:["#80578D","#16151B"],
    title: "LG 20 L Solo Microwave Oven",
    price: 6990,
    originalPrice: 8199,
    rating: 4.9,
    saleOrNot: false,
  };

  const applianceProduct7 = {
    images: "https://i.imghippo.com/files/gHRSb1722420835.png",
    title: "Samsung 1.5 Ton 5 Star Convertible Inverter Split AC",
    price: 44990,
    originalPrice: 73990,
    rating: 4.8,
    saleOrNot: true,
  };

  const applianceProduct8 = {
    images: "https://i.imghippo.com/files/D3Iw81722420883.png",
    title: "Samsung 43 inches 4K Smart LED TV",
    price: 31490,
    originalPrice: 49990,
    rating: 4.2,
    saleOrNot: true,
  };

  const applianceProduct9 = {
    images: "https://i.imghippo.com/files/44UcI1722420572.png",
    title: "LG 5 Star Fully Automatic Washing Machine",
    price: 16490,
    originalPrice: 24990,
    rating: 4.1,
    saleOrNot: false,
  };

  const applianceProducts = [
    applianceProduct1,
    applianceProduct2,
    applianceProduct3,
    applianceProduct4,
    applianceProduct5,
    applianceProduct6,
    applianceProduct7,
    applianceProduct8,
    applianceProduct9,
  ];

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4">Appliances</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {applianceProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Appliances;
