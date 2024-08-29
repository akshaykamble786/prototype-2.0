// src/contexts/ProductContext.js
import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max",
      price: 139990,
      colors: {
        "#414141": {
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://m.media-amazon.com/images/I/61Jrsu9d3-L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/715zWp1q7rL._SX679_.jpg",
          ],
        },
        "#DEDBD2": {
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/d21Iw1722159117.png",
            "https://m.media-amazon.com/images/I/51UtwJ0576L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71lmRVkniLL._SX679_.jpg",
          ],
        },
        "#273039": {
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/9xQok1722159207.png",
            "https://m.media-amazon.com/images/I/51hWMvjCV8L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71LB1euow1L._SX679_.jpg",
          ],
        },
        "#959188": {
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/3Aebh1722159154.png",
            "https://m.media-amazon.com/images/I/61HZS-ZSCLL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/71kGvmn-t8L._SX679_.jpg",
          ],
        },
      },
      rating: 4.3,
      reviewCount: 23,
      originalPrice: 179990,
      sale: true,
      storage: ["256 GB", "512 GB", "1 TB"],
      highlights: ["lorem", "dioodf", "sfbssf", "sfcd"],
      specifications: ["fage", "zeg"],
      shippingAndReturns: ["gsrgedse"],
      reviews: ["jvkfjb;fkj", "kjgsighsihgr"],
    },
    {
      id: 2,
      title: "Samsung Z Fold6",
      price: 168990,
      colors: {
        "#465066": {
          price: {
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://m.media-amazon.com/images/I/61Jrsu9d3-L._SX679_.jpg",
          ],
        },
        "#7E7E7E": {
          price: {
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/d21Iw1722159117.png",
            "https://m.media-amazon.com/images/I/71lmRVkniLL._SX679_.jpg",
          ],
        },
        "#E9D6DB": {
          price: {
            "512 GB": "1,68,990",
            "1 TB": "1,99,990",
          },
          images: [
            "https://i.imghippo.com/files/9xQok1722159207.png",
            "https://m.media-amazon.com/images/I/51hWMvjCV8L._SX679_.jpg",
          ],
        },
      },
      rating: 4.9,
      reviewCount: 27,
      originalPrice: 179990,
      sale: false,
      storage: ["512 GB", "1 TB"],
      highlights: ["DBgfsbf", "Gsdgrs"],
      specifications: ["dgsdgbsf"],
      shippingAndReturns: ["gesdgsf"],
      reviews: ["jvkfjb;fkj", "kjgsighsihgr"],
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
