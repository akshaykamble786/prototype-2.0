import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import ProductContext from "../../context/ProductsContext";

const Computing = () => {

  // const computingProduct2 = {
  //   images: {
  //     "#2E2C2F": "https://i.imghippo.com/files/sTcbY1723197833.png",
  //     "#F0F1F2": "https://i.imghippo.com/files/Htv2R1723197865.png",
  //   },
  //   title: "Sennheiser Accentum Wireless Bluetooth Headphones",
  //   price: 10990,
  //   colorOptions: ["#2E2C2F", "#F0F1F2"],
  //   rating: 4.9,
  //   originalPrice: 15990,
  //   saleOrNot: true,
  // };

  // const computingProduct3 = {
  //   images: {
  //     "#2E2C2F": "https://i.imghippo.com/files/yINpm1723197668.png",
  //     "#F0F1F2": "https://i.imghippo.com/files/u6Vxo1723197695.png",
  //   },
  //   title: "Apple iPad Pro 13″ (M4)",
  //   price: 129900,
  //   colorOptions: ["#2E2C2F", "#F0F1F2"],
  //   rating: 4.1,
  //   originalPrice: 139990,
  // };

  // const computingProduct9 = {
  //   images: "https://i.imghippo.com/files/lgYrB1723197803.png",
  //   title: "SanDisk Ultra Dual 256GB USB Drive",
  //   price: 2051,
  //   rating: 4.5,
  //   originalPrice: 5600,
  // };
  

  // const computingProduct11 = {
  //   images: "https://i.imghippo.com/files/coYEL1723197358.png",
  //   title: "Apple AirPods 2nd Genertion",
  //   price: 19499,
  //   rating: 4.2,
  //   originalPrice: 25999,
  // };

  // const computingProduct12 = {
  //   images  :{
  //     "#2E2C2F": "https://i.imghippo.com/files/purjY1723716206.png",
  //     "#F0F1F2": "https://i.imghippo.com/files/4vD3v1723716184.png",
  //   },
  //   colorOptions:["#2E2C2F","#F0F1F2"],
  //   title: "Canon EOS R50 Mirrorless Camera",
  //   price: 66990,
  //   rating: 4.9,
  //   originalPrice: 75995,
  // };

  // const computingProducts = [
  //   computingProduct1,
  //   computingProduct4,
  //   computingProduct5,
  //   computingProduct6,
  //   computingProduct9,
  //   computingProduct2,
  //   computingProduct7,
  //   computingProduct8,
  //   computingProduct12,
  //   computingProduct3,
  //   computingProduct10,
  //   computingProduct11
  // ];

  const { products } = useContext(ProductContext);

  return (
    <>
      <h1 className="text-center font-semibold text-3xl m-2 p-4 ">Computing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(10,15).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Computing;
