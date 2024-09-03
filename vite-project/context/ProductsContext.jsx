import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: crypto.randomUUID(),
      category: "Smartphone",
      title: "Apple iPhone 15 Pro Max",
      cost: "1,49,990",
      originalCost: "1,69,990",
      sale: true,
      rating: 4.2,
      reviewCount: 32,
      storage: ["256 GB", "512 GB"],
      colors: {
        "#414141": {
          cardImages: ["https://i.imghippo.com/files/odBsF1722159182.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,39,990",
            "512 GB": "1,68,990",
          },
        },

        "#DEDBD2": {
          cardImages: ["https://i.imghippo.com/files/9xQok1722159207.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,69,990",
            "512 GB": "1,78,990",
          },
        },

        "#273039": {
          cardImages: ["https://i.imghippo.com/files/3Aebh1722159154.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,59,990",
            "512 GB": "1,74,990",
          },
        },

        "#959188": {
          cardImages: ["https://i.imghippo.com/files/d21Iw1722159117.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "256 GB": "1,49,990",
            "512 GB": "1,68,990",
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
      category: "Smartphone",
      title: "Samsung S24 Ultra",
      cost: "1,69,990",
      originalCost: "1,79,990",
      sale: false,
      rating: 3.9,
      reviewCount: 42,
      storage: ["512 GB", "1 TB"],
      colors: {
        "#453F57": {
          cardImages: ["https://i.imghippo.com/files/z7flt1722158064.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "1,79,990",
            "1 TB": "1,88,990",
          },
        },

        "#F0E1B9": {
          cardImages: ["https://i.imghippo.com/files/DO4I31722158126.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "1,79,990",
            "1 TB": "1,88,990",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block, Earbuds",
      },
      highlights: [
        "Fast Charging",
        "Efficient Performance",
        "Great Gaming Experience",
      ],
      shippingAndReturns: ["7 days replacement", "21 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: [
        "great product",
        "great battery",
        "great cameras",
        "great performance",
      ],
    },
    {
      id: crypto.randomUUID(),
      category: "Smartphone",
      title: "One Plus 12R",
      cost: "43,999",
      originalCost: "56,777",
      sale: true,
      rating: 4.0,
      reviewCount: 33,
      storage: ["128 GB", "256 GB"],
      colors: {
        "#6C8582": {
          cardImages: ["https://i.imghippo.com/files/7AUxZ1722158911.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "128 GB": "43,990",
            "256 GB": "50,990",
          },
        },

        "#6691B7": {
          cardImages: ["https://i.imghippo.com/files/G3iXH1722158879.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "128 GB": "43,990",
            "256 GB": "50,990",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block, Earbuds",
      },
      highlights: [
        "Fast Charging",
        "Efficient Performance",
        "Great Gaming Experience",
      ],
      shippingAndReturns: ["7 days replacement", "21 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: [
        "great product",
        "great battery",
        "great cameras",
        "great performance",
      ],
    },
    {
      id: crypto.randomUUID(),
      category: "Smartphone",
      title: "Google Pixel 8 Pro",
      cost: "97,999",
      originalCost: "1,09,990",
      sale: false,
      rating: 4.5,
      reviewCount: 19,
      storage: ["128 GB", "256 GB"],
      colors: {
        "#252525": {
          cardImages: ["https://i.imghippo.com/files/HtMIv1722159041.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "128 GB": "1,09,990",
            "256 GB": "1,19,990",
          },
        },

        "#FEDEC9": {
          cardImages: ["https://i.imghippo.com/files/1dd6c1722159072.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "128 GB": "1,09,990",
            "256 GB": "1,19,990",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block, Earbuds",
      },
      highlights: [
        "Fast Charging",
        "Efficient Performance",
        "Great Gaming Experience",
      ],
      shippingAndReturns: ["7 days replacement", "21 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: [
        "great product",
        "great battery",
        "great cameras",
        "great performance",
      ],
    },
    {
      id: crypto.randomUUID(),
      category: "Smartphone",
      title: "Samsung Z Fold6",
      cost: "1,64,999",
      originalCost: "1,79,990",
      sale: true,
      rating: 4.4,
      reviewCount: 15,
      storage: ["512 GB", "1 TB"],
      colors: {
        "#465066": {
          cardImages: ["https://i.imghippo.com/files/4dDBx1722158230.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "1,64,999",
            "1 TB": "1,84,999",
          },
        },

        "#7E7E7E": {
          cardImages: ["https://i.imghippo.com/files/c4TUe1722158339.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "1,64,999",
            "1 TB": "1,84,999",
          },
        },
        "#E9D6DB": {
          cardImages: ["https://i.imghippo.com/files/DKtvy1722158286.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "1,64,999",
            "1 TB": "1,84,999",
          },
        },
      },
      specifications: {
        "In the box": "Handset, Charging Block, Earbuds",
      },
      highlights: [
        "Fast Charging",
        "Efficient Performance",
        "Great Gaming Experience",
      ],
      shippingAndReturns: ["7 days replacement", "21 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: [
        "great product",
        "great battery",
        "great cameras",
        "great performance",
      ],
    },
    {
      id: crypto.randomUUID(),
      category: "Appliances",
      title: "Pigeon Air Fryer",
      cost: "9,990",
      originalCost: "19,990",
      sale: true,
      rating: 4.8,
      reviewCount: 22,
      size: ["6 Litres", "10 Litres", "15 Litres"],
      cardImages: ["https://i.imghippo.com/files/D3Iw81722420883.png"],
      detailImages: [""],
      price: {
        "6 Litres": "9,990",
        "10 Litres": "11,990",
        "15 Litres": "13,990",
      },
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
  ]);

  const currency = "₹";

  return (
    <ProductContext.Provider value={{ products, setProducts, currency }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
