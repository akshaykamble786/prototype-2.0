// src/contexts/ProductContext.js
import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: crypto.randomUUID(),
      category: "Smartphone",
      title: "Apple iPhone 15 Pro Max",
      price: "1,49,990",
      originalPrice: "1,69,990",
      sale: true,
      rating: 4.2,
      reviewCount: 32,
      storage: ["256 GB", "512 GB"],
      cardImage: {
        "#414141": "https://i.imghippo.com/files/odBsF1722159182.png",
        "#DEDBD2": "https://i.imghippo.com/files/9xQok1722159207.png",
      },
      colors: {
        "#414141": {
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
          },
        },

        "#DEDBD2": {
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,69,990",
            "512 GB": "1,78,990",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block",
      },
      highlights: ["Fast Charging", "Efficient Performance"],
      shippingAndReturns: ["7 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great battery", "great cameras"],
    },
    {
      id: crypto.randomUUID(),
      category: "Appliance",
      title: "Pigeon Air Fryer",
      price: "4,990",
      originalPrice: "6,990",
      sale: false,
      rating: 4.1,
      reviewCount: 22,
      power: ["2 kW", "4 kW"],
      cardImage: {
        "#33494F": "https://i.imghippo.com/files/vhGY71722420758.png",
        "#3B3B3B": "https://i.imghippo.com/files/jJjjZ1723197300.png",
      },
      colors: {
        "#33494F": {
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "2 kW": "9,990",
            "4 kW": "8,990",
          },
        },

        "#3B3B3B": {
          images: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "2 kW": "7,990",
            "4 kW": "4,990",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block",
      },
      highlights: ["Fast Charging", "Efficient Performance"],
      shippingAndReturns: ["7 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great battery", "great cameras"],
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
