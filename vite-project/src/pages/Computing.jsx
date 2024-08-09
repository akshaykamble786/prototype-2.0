import React from "react";
import ProductCard from "../components/ProductCard";

const Computing = () => {
  const computingProduct1 = {
    images: {
      "#2E2C2F": "https://i.imghippo.com/files/qsCJb1723198202.png",
      "#F0F1F2": "https://i.imghippo.com/files/Tl4mP1723198222.png",
    },
    title: "Apple 2023 MacBook Pro",
    price: 179990,
    colorOptions: ["#2E2C2F", "#F0F1F2"],
    rating: 4.5,
    originalPrice: 199900,
  };

  const computingProduct2 = {
    images: {
      "#2E2C2F": "https://i.imghippo.com/files/sTcbY1723197833.png",
      "#F0F1F2": "https://i.imghippo.com/files/Htv2R1723197865.png",
    },
    title: "Sennheiser Accentum Wireless Bluetooth Headphones",
    price: 10990,
    colorOptions: ["#2E2C2F", "#F0F1F2"],
    rating: 4.9,
    originalPrice: 15990,
    saleOrNot: true,
  };

  const computingProduct3 = {
    images: {
      "#2E2C2F": "https://i.imghippo.com/files/yINpm1723197668.png",
      "#F0F1F2": "https://i.imghippo.com/files/u6Vxo1723197695.png",
    },
    title: "Apple iPad Pro 13″ (M4)",
    price: 129900,
    colorOptions: ["#2E2C2F", "#F0F1F2"],
    rating: 4.1,
    originalPrice: 139990,
  };

  const computingProduct4 = {
    images: "https://i.imghippo.com/files/w63dX1723197583.png",
    title: "Dell Alienware 34-inch Curved Qd-OLED Gaming Monitor",
    price: 116699,
    rating: 4.4,
    originalPrice: 134600,
    saleOrNot:true,
  };

  const computingProduct5 = {
    images: "https://i.imghippo.com/files/HiTzb1723197628.png",
    title: "Lenovo IdeaCentre 12th Gen Intel i5 27-inch FHD Desktop",
    price: 62490,
    rating: 4.0,
    originalPrice: 79890,
    saleOrNot:true
  };

  const computingProduct6 = {
    images: "https://i.imghippo.com/files/EW2ut1723197948.png",
    title: "Philips SPA9160 2.0CH Multimedia tower speakers",
    price: 25490,
    rating: 4.6,
    originalPrice: 30990,
  };

  const computingProduct7 = {
    images: "https://i.imghippo.com/files/a30CY1723196999.png",
    title: "TP-Link Archer Dual Band Wireless Wi-Fi 6 Router",
    price: 7999,
    rating: 4.8,
    originalPrice: 12999,
    saleOrNot:true
  };

  const computingProduct8 = {
    images: "https://i.imghippo.com/files/4butG1723197890.png",
    title: "Canon PIXMA All in One Colour Printer",
    price: 7499,
    rating: 4.4,
    originalPrice: 9625,
  };

  const computingProduct9 = {
    images: "https://i.imghippo.com/files/lgYrB1723197803.png",
    title: "SanDisk Ultra Dual 256GB USB Drive",
    price: 2051,
    rating: 4.5,
    originalPrice: 5600,
  };
  
  const computingProduct10 = {
    images: "https://i.imghippo.com/files/883w31723197920.png",
    title: "Intel Core i9-13900K Desktop Processor",
    price: 45499,
    rating: 4.1,
    originalPrice: 82350,
    saleOrNot:true
  };

  const computingProduct11 = {
    images: "https://i.imghippo.com/files/coYEL1723197358.png",
    title: "Apple AirPods 2nd Genertion",
    price: 19499,
    rating: 4.2,
    originalPrice: 25999,
  };

  const computingProducts = [
    computingProduct1,
    computingProduct4,
    computingProduct5,
    computingProduct6,
    computingProduct2,
    computingProduct7,
    computingProduct8,
    computingProduct9,
    computingProduct3,
    computingProduct10,
    computingProduct11
  ];

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4 ">Computing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {computingProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Computing;
