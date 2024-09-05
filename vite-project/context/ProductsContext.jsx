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
      reviewCount: 19,
      size: ["512 GB", "1 TB"],
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
      category: "Appliance",
      title: "Pigeon Healthifry Air Fryer 4.2-L",
      cost: "2,659",
      originalCost: "4,999",
      sale: false,
      rating: 4.0,
      reviewCount: 25,
      type: ["Digital", "Manual"],
      colors: {
        "#33494F": {
          cardImages: ["https://i.imghippo.com/files/vhGY71722420758.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            Digital: "2,659",
            Manual: "2,499",
          },
        },

        "#3B3B3B": {
          cardImages: ["https://i.imghippo.com/files/jJjjZ1723197300.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            Digital: "2,759",
            Manual: "2,599",
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
      category: "Appliance",
      title: "Crompton Arno Neo 15-L Storage Water Heater",
      cost: "5,699",
      originalCost: "10,400",
      sale: true,
      rating: 4.5,
      reviewCount: 34,
      size: ["6 Litres", "10 Litres", "15 Litres"],
      cardImages: ["https://i.imghippo.com/files/3UMZQ1722420676.png"],
      detailImages: [""],
      price: {
        "6 Litres": "5,699",
        "10 Litres": "5,799",
        "15 Litres": "5,999",
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
    {
      id: crypto.randomUUID(),
      category: "Appliance",
      title: "LG 20-L Microwave Oven",
      cost: "7,490",
      originalCost: "4,999",
      sale: false,
      rating: 4.9,
      reviewCount: 25,
      type: ["Solo", "Grill"],
      colors: {
        "#80578D": {
          cardImages: ["https://i.imghippo.com/files/fnv3L1722420847.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            Solo: "7,490",
            Grill: "8,750",
          },
        },

        "#16151B": {
          cardImages: ["https://i.imghippo.com/files/gG9jE1722938134.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            Solo: "7,490",
            Grill: "8,750",
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
      category: "Appliance",
      title: "Godrej Frost Free Side-By-Side Refrigerator",
      cost: "56,990",
      originalCost: "90,000",
      sale: true,
      rating: 4.3,
      reviewCount: 39,
      size: ["530 Litres", "560 Litres", "600 Litres"],
      cardImages: ["https://i.imghippo.com/files/MMnFK1722420738.png"],
      detailImages: [""],
      price: {
        "530 Litres": "56,990",
        "560 Litres": "59,799",
        "600 Litres": "62,999",
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
    {
      id: crypto.randomUUID(),
      category: "Appliance",
      title: "Samsung Convertible Inverter Split AC",
      cost: "44,990",
      originalCost: "73,990",
      sale: true,
      rating: 4.8,
      reviewCount: 59,
      size: ["1.5 Ton 3 Star", "2 Ton 4 Star", "2.2 Ton 5 Star"],
      cardImages: ["https://i.imghippo.com/files/gHRSb1722420835.png"],
      detailImages: [""],
      price: {
        "1.5 Ton 3 Star": "44,990",
        "2 Ton 4 Star": "52,300",
        "2.2 Ton 5 Star": "62,999",
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

    {
      id: crypto.randomUUID(),
      category: "Computing",
      title: "Apple 2023 MacBook Pro",
      cost: "2,39,990",
      originalCost: "2,49,990",
      sale: false,
      rating: 4.5,
      reviewCount: 20,
      storage: ["512 GB", "1 TB"],
      colors: {
        "#2E2C2F": {
          cardImages: ["https://i.imghippo.com/files/qsCJb1723198202.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "2,39,990",
            "1 TB": "3,79,990",
          },
        },

        "#F0F1F2": {
          cardImages: ["https://i.imghippo.com/files/Tl4mP1723198222.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "512 GB": "2,39,990",
            "1 TB": "3,79,990",
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
      category: "Computing",
      title: "Dell Alienware 34-inch Curved Qd-OLED Gaming Monitor",
      cost: "91,500",
      originalCost: "1,11,842",
      sale: false,
      rating: 4.4,
      reviewCount: 29,
      cardImages: ["https://i.imghippo.com/files/w63dX1723197583.png"],
      detailImages: [""],
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
    {
      id: crypto.randomUUID(),
      category: "Computing",
      title: "Lenovo IdeaCentre 12th Gen Intel i5 27-inch FHD Desktop",
      cost: "62,990",
      originalCost: "78,990",
      sale: true,
      rating: 4.8,
      reviewCount: 11,
      cardImages: ["https://i.imghippo.com/files/HiTzb1723197628.png"],
      detailImages: [""],
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
    {
      id: crypto.randomUUID(),
      category: "Computing",
      title: "Intel Core i9-13900K Desktop Processor",
      cost: "45,499",
      originalCost: "82,350",
      sale: true,
      rating: 4.1,
      reviewCount: 31,
      cardImages: ["https://i.imghippo.com/files/883w31723197920.png"],
      detailImages: [""],
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
    {
      id: crypto.randomUUID(),
      category: "Computing",
      title: "Canon EOS R50 Mirrorless Camera",
      cost: "66,990",
      originalCost: "75,995",
      sale: false,
      rating: 4.9,
      reviewCount: 9,
      Lens: ["RF-S 18-150", "RF-S 18-45", "R10 Body Only"],
      colors: {
        "#2E2C2F": {
          cardImages: ["https://i.imghippo.com/files/purjY1723716206.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "RF-S 18-150": "73,500",
            "RF-S 18-45": "79,990",
            "R10 Body Only": "95,190",
          },
        },

        "#F0F1F2": {
          cardImages: ["https://i.imghippo.com/files/4vD3v1723716184.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: {
            "RF-S 18-150": "73,500",
            "RF-S 18-45": "79,990",
            "R10 Body Only": "95,190",
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
      category: "Accessories",
      title: "Apple 20W USB-C Power Adapter",
      cost: "1,549",
      originalCost: "1,900",
      sale: false,
      rating: 3.8,
      reviewCount: 65,
      cardImages: ["https://i.imghippo.com/files/qZcJx1723267265.png"],
      detailImages: [""],
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
    {
      id: crypto.randomUUID(),
      category: "Accessories",
      title: "Promate 130W Laptop Power Bank",
      cost: "6,999",
      originalCost: "15,999",
      sale: true,
      rating: 4.9,
      reviewCount: 12,
      capacity: ["10000 mAh", "20000 mAh", "27000 mAh"],
      cardImages: ["https://i.imghippo.com/files/kiH3P1723267325.png"],
      detailImages: [""],
      price: {
        "10000 mAh": "6,999",
        "20000 mAh": "7,999",
        "27000 mAh": "8,999",
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
    {
      id: crypto.randomUUID(),
      category: "Accessories",
      title: "MOKOBARA Unisex Multipurpose Laptop Backpack",
      cost: "7,599",
      originalCost: "13,999",
      sale: true,
      rating: 4.2,
      reviewCount: 16,
      cardImages: ["https://i.imghippo.com/files/b4U2b1723267046.png"],
      detailImages: [""],
      specifications: {
        "In the box": "Machine",
      },
      highlights: ["Efficient Performance"],
      shippingAndReturns: ["14 days replacement", "30 days exchange"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
      reviews: ["great product", "great performance"],
    },
    {
      id: crypto.randomUUID(),
      category: "Accessories",
      title: "Belkin Magsafe 2-in-1 Wireless Charging Dock",
      cost: "16,999",
      originalCost: "19,999",
      sale: false,
      rating: 4.0,
      reviewCount: 3,
      colors: {
        "#2E2C2F": {
          cardImages: ["https://i.imghippo.com/files/Cpohd1723267074.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: "16,999"
        },

        "#F0F1F2": {
          cardImages: ["https://i.imghippo.com/files/c4cSK1723267378.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: "17,999"
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
      category: "Accessories",
      title: "Sony DualSense Wireless Controller (PlayStation 5)",
      cost: "5,499",
      originalCost: "6,390",
      sale: false,
      rating: 4.7,
      reviewCount: 23,
      colors: {
        "#0B0C10": {
          cardImages: ["https://i.imghippo.com/files/rFioc1723267113.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: "5,499"
        },

        "#E7E7ED": {
          cardImages: ["https://i.imghippo.com/files/TwYd61723267401.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: "6,099"
        },

        "#4FBCF7": {
          cardImages: ["https://i.imghippo.com/files/fJM2k1723267181.png"],
          detailImages: [
            "https://i.imghippo.com/files/odBsF1722159182.png",
            "https://i.imghippo.com/files/9xQok1722159207.png",
          ],
          price: "6,799"
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

  const currency = "₹";

  return (
    <ProductContext.Provider value={{ products, setProducts, currency }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
