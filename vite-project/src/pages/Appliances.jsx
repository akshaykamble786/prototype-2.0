import React from "react";
import ProductCard from "../components/ProductCard";

const Appliances = () => {
  const approduct1 = {
    images:{
        "default": "https://i.imghippo.com/files/JLoFx1722420867.png",
    },
    colorOptions:["default"],
    title: "Agarro Vacuum",
    price: 7999,
    originalPrice: 9999,
    rating: 4.1,
    saleOrNot: false,
  };
  const approduct2 = {
    images: {
      "#414141": "https://i.imghippo.com/files/odBsF1722159182.png",
      "#DEDBD2": "https://i.imghippo.com/files/9xQok1722159207.png",
      "#273039": "https://i.imghippo.com/files/3Aebh1722159154.png",
      "#959188": "https://i.imghippo.com/files/d21Iw1722159117.png",
    },
    colorOptions: ['#414141', '#DEDBD2', '#273039', '#959188'],
    title: "Agarro Vacuum",
    price: 7999,
    originalPrice: 9999,
    rating: 4.1,
    saleOrNot: false,
  };
  const approduct3 = {
    images: "https://i.imghippo.com/files/9jgrV1722420642.png",
    title: "Agarro Vacuum",
    price: 7999,
    originalPrice: 9999,
    rating: 4.1,
    saleOrNot: false,
  };

  const approducts = [approduct1, approduct2, approduct3];

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4">Appliances</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {approducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Appliances;
