import React from "react";
import ProductCard from "../components/ProductCard";

const Accessories = () => {
  const accessoryProduct1 = {
    images: "https://i.imghippo.com/files/qZcJx1723267265.png",
    title: "Apple 20W USB-C Power Adapter",
    price: 1549,
    originalPrice: 1900,
    rating: 4.2,
  };

  const accessoryProduct2 = {
    images: "https://i.imghippo.com/files/lN8cz1723267232.png",
    title: "Ringke Silicone Magnetic Samsung Galaxy S24 Ultra Case Cover",
    price: 2843,
    originalPrice: 4500,
    rating: 4.2,
  };

  const accessoryProduct3 = {
    images: "https://i.imghippo.com/files/B0sXA1723267208.png",
    title: "Apple USB-C to Lightning Cable ",
    price: 1599,
    originalPrice: 2000,
    rating: 4.2,
  };

  const accessoryProduct4 = {
    images: "https://i.imghippo.com/files/kiH3P1723267325.png",
    title: "Promate 130W Laptop Power Bank (20000mAh)",
    price: 6999,
    originalPrice: 15999,
    rating: 4.2,
    saleOrNot: true,
  };

  const accessoryProduct5 = {
    images: {
      "#0B0C10": "https://i.imghippo.com/files/rFioc1723267113.png",
      "#E7E7ED": "https://i.imghippo.com/files/TwYd61723267401.png",
      "#4FBCF7": "https://i.imghippo.com/files/fJM2k1723267181.png",
    },
    title: "Sony DualSense Wireless Controller (PlayStation 5)",
    colorOptions: ["#0B0C10", "#E7E7ED", "#4FBCF7"],
    price: 5499,
    originalPrice: 6390,
    rating: 4.2,
  };

  const accessoryProduct6 = {
    images: "https://i.imghippo.com/files/Q0mpe1723267295.png",
    title: "Redragon K556 PRO Wireless RGB Gaming Keyboard",
    price: 5970,
    originalPrice: 7990,
    rating: 4.2,
  };

  const accessoryProduct7 = {
    images: {
      "#2E2C2F": "https://i.imghippo.com/files/Cpohd1723267074.png",
      "#F0F1F2": "https://i.imghippo.com/files/c4cSK1723267378.png",
    },
    title: "Belkin Magsafe 2-in-1 Wireless Charging Dock",
    price: 16999,
    colorOptions: ["#2E2C2F", "#F0F1F2"],
    originalPrice: 19999,
    rating: 4.2,
  };

  const accessoryProduct8 = {
    images: {
      "#2E2C2F": "https://i.imghippo.com/files/TD1NE1723267134.png",
      "#F0F1F2": "https://i.imghippo.com/files/YgpZJ1723267424.png",
    },
    title: "Logitech MX Master Wireless Performance Mouse",
    colorOptions: ["#2E2C2F", "#F0F1F2"],
    price: 8495,
    originalPrice: 12495,
    rating: 4.2,
  };

  const accessoryProduct9 = {
    images: "https://i.imghippo.com/files/7YH5T1723267354.png",
    title: "SARAH ™ Adjustable Refrigerator / Washing Machine Stand",
    price: 3499,
    originalPrice: 5999,
    rating: 4.2,
  };

  const accessoryProduct10 = {
    images: "https://i.imghippo.com/files/b4U2b1723267046.png",
    title: "MOKOBARA 19L Unisex Multipurpose Laptop Backpack",
    price: 7599,
    originalPrice: 13999,
    rating: 4.2,
    saleOrNot:true
  };

  const accessoryProduct11 = {
    images: "https://i.imghippo.com/files/ypNm81723267016.png",
    title: "TAFTA Heavy Duty Air Conditioner Mounting Brackets",
    price: 566,
    originalPrice: 1599,
    rating: 4.2,
    saleOrNot:true
  };

  const accessoryProducts = [
    accessoryProduct1,
    accessoryProduct2,
    accessoryProduct3,
    accessoryProduct4,
    accessoryProduct5,
    accessoryProduct6,
    accessoryProduct7,
    accessoryProduct9,
    accessoryProduct10,
    accessoryProduct8,
    accessoryProduct11
  ];

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4">
        Accessories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {accessoryProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Accessories;
