import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : []; 
  });

  useEffect(() => {
    const initialProducts = [
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
            images: [
              "https://i.imghippo.com/files/odBsF1722159182.png",
              "https://m.media-amazon.com/images/I/61Jrsu9d3-L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/715zWp1q7rL._SX679_.jpg",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678674/Croma%20Assets/Communication/Mobiles/Images/300823_10_kj9wjc.png?tr=w-360",
            ],
            price: {
              "256 GB": "1,49,990",
              "512 GB": "1,69,990",
            },
          },

          "#F0F1F2": {
            images: [
              "https://i.imghippo.com/files/9xQok1722159207.png",
              "https://m.media-amazon.com/images/I/51hWMvjCV8L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71LB1euow1L._SX679_.jpg",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678648/Croma%20Assets/Communication/Mobiles/Images/300820_10_xheaea.png?tr=w-360",
            ],
            price: {
              "256 GB": "1,69,990",
              "512 GB": "1,78,990",
            },
          },

          "#273039": {
            images: [
              "https://i.imghippo.com/files/3Aebh1722159154.png",
              "https://m.media-amazon.com/images/I/61HZS-ZSCLL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71kGvmn-t8L._SX679_.jpg",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678750/Croma%20Assets/Communication/Mobiles/Images/300824_10_pul1r9.png?tr=w-360",
            ],
            price: {
              "256 GB": "1,59,990",
              "512 GB": "1,74,990",
            },
          },

          "#959188": {
            images: [
              "https://i.imghippo.com/files/d21Iw1722159117.png",
              "https://m.media-amazon.com/images/I/51UtwJ0576L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71lmRVkniLL._SX679_.jpg",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677748/Croma%20Assets/Communication/Mobiles/Images/300836_10_hnrutz.png?tr=w-360",
            ],
            price: {
              "256 GB": "1,49,990",
              "512 GB": "1,68,990",
            },
          },
        },
        specifications: {
          "In the box": "iPhone 15 Pro Max 1N, USB-C Charge Cable",
          "Model Name": "iPhone 15 Pro Max",
          "Display Size": "17.02 cm (6.7 inch)",
          "Processor Type": "A17 Pro Chip, 6 Core Processor",
          "Primary Camera": "48MP + 12MP + 12MP",
          "Network Type": "5G, 4G VOLTE, 4G, 3G, 2G",
          "Battery Capacity": "4441 mAh",
        },
        highlights: [
          "17.02 cm (6.7 inch)",
          "Super Retina XDR Display",
          "48MP + 12MP + 12MP | 12MP Front Camera",
          "A17 Pro Chip",
          "6 Core Processor Processor",
        ],
        shippingAndReturns: ["7 days replacement", "30 days exchange"],
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, praesentium.",
        reviews: ["great product", "great battery", "great cameras"],
      },
      {
        id: crypto.randomUUID(),
        category: "Smartphone",
        title: "Samsung S24 Ultra",
        cost: "1,79,990",
        originalCost: "1,99,990",
        sale: false,
        rating: 3.9,
        reviewCount: 42,
        storage: ["512 GB", "1 TB"],
        colors: {
          "#453F57": {
            images: [
              "https://i.imghippo.com/files/z7flt1722158064.png",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/b9869a24-9d53-4167-a21d-8a2e0967f41a24181113.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/ded31e03-3ed9-4168-b9c9-bdefe9e3d25924181113.jpg",
            ],
            price: {
              "512 GB": "1,79,990",
              "1 TB": "1,88,990",
            },
          },

          "#F0E1B9": {
            images: [
              "https://i.imghippo.com/files/DO4I31722158126.png",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/64b6eddf-dce4-4986-b6ae-5da8151a663f24181116.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/28b22cea-a34f-40b5-a4d1-9c021d37099824181117.jpg",
            ],
            price: {
              "512 GB": "1,79,990",
              "1 TB": "1,88,990",
            },
          },
        },
        specifications: {
          "In the box": "Galaxy S24 Ultra 5G, USB-C Charge Cable",
          "Model Name": "Galaxy S24 Ultra 5G",
          "Display Size": "17.27 cm (6.8 inch)",
          "Processor Type": "Snapdragon 8 Gen 3",
          "Primary Camera": "200MP + 50MP + 12MP + 10MP",
          "Network Type": "5G, 4G, 3G, 2G",
          "Battery Capacity": "5000 mAh",
        },
        highlights: [
          "12 GB RAM | 256 GB ROM",
          "17.27 cm (6.8 inch) Quad HD+ Display",
          "200MP + 50MP + 12MP + 10MP | 12MP Front Camera",
          "5000 mAh Battery",
          "Snapdragon 8 Gen 3 Processor",
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
          "#FFE2DA": {
            images: [
              "https://i.imghippo.com/files/rqY7f1726030399.png",
              "https://m.media-amazon.com/images/I/61Pw0CoYtCL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/61Yrsm9RCuL._SX679_.jpg",
            ],
            price: {
              "128 GB": "43,990",
              "256 GB": "50,990",
            },
          },

          "#6691B7": {
            images: [
              "https://i.imghippo.com/files/G3iXH1722158879.png",
              "https://m.media-amazon.com/images/I/61nlAS5+y4L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/61I7YQ4fk4L._SX679_.jpg",
            ],
            price: {
              "128 GB": "43,990",
              "256 GB": "50,990",
            },
          },
        },
        specifications: {
          "In the box": "Handset, User Manual, Warranty Card, Sim Eject Tool",
          "Model Name": "One Plus 12R",
          "Display Size": "17.22 cm (6.78 inch)",
          "Processor Type": "Snapdragon 8 Gen 2",
          "Primary Camera": "50MP Rear Camera",
          "Network Type": "5G",
          "Battery Capacity": "5500 mAh",
        },
        highlights: [
          "16 GB RAM",
          "17.22 cm (6.78 inch) Display",
          "50MP Rear Camera",
          "5500 mAh Battery",
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
            images: [
              "https://i.imghippo.com/files/HtMIv1722159041.png",
              "https://m.media-amazon.com/images/I/41e2K9w-tOL.jpg",
              "https://m.media-amazon.com/images/I/21BE5HyeubL.jpg",
            ],
            price: {
              "128 GB": "1,09,990",
              "256 GB": "1,19,990",
            },
          },

          "#FEDEC9": {
            images: [
              "https://i.imghippo.com/files/1dd6c1722159072.png",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724318715/Croma%20Assets/Communication/Mobiles/Images/309149_8_havjm1.png?tr=w-360",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724318718/Croma%20Assets/Communication/Mobiles/Images/309149_10_gsyxmq.png?tr=w-360",
            ],
            price: {
              "128 GB": "1,09,990",
              "256 GB": "1,19,990",
            },
          },
        },
        specifications: {
          "In the box":
            "Handset, 1 m USB-C to USB-C Cable (USB 2.0), Quick Switch Adaptor, Sim Tool",
          "Model Name": "Google Pixel 8 Pro",
          "Display Size": "17.02 cm (6.7 inch)",
          "Processor Type": "Tensor G3",
          "Primary Camera": "50MP + 48MP + 48MP",
          "Network Type": "5G, 4G, 3G",
          "Battery Capacity": "5050 mAh",
        },
        highlights: [
          "12 GB RAM",
          "17.02 cm (6.7 inch) Full HD+ AMOLED Display",
          "50MP + 48MP + 48MP | 10.5MP Front Camera",
          "5050 mAh Battery",
          "Tensor G3 Processor",
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
        storage: ["512 GB", "1 TB"],
        colors: {
          "#465066": {
            images: [
              "https://i.imghippo.com/files/4dDBx1722158230.png",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/eb6424de-a080-482c-bd5f-b4eaacfec1a024111203.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/048358d7-b3d8-4591-a3cc-1c7edbb9a12124111203.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/b9c08833-2256-44b3-975a-96cb7e4a83da24111203.jpg",
            ],
            price: {
              "512 GB": "1,64,999",
              "1 TB": "1,84,999",
            },
          },

          "#7E7E7E": {
            images: [
              "https://i.imghippo.com/files/c4TUe1722158339.png",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/5d75cd6e-e85a-4dfc-bf6d-5243da72721724111210.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/6ce24670-db11-4ce0-a3b5-299a9947bc5124111210.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/d7b41659-9184-4980-a7bd-0cb55a89345b24111210.jpg",
            ],
            price: {
              "512 GB": "1,64,999",
              "1 TB": "1,84,999",
            },
          },
          "#E9D6DB": {
            images: [
              "https://i.imghippo.com/files/DKtvy1722158286.png",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/80971c7e-2e9a-4971-8c99-a482851873e724111206.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/d20e3b7c-545e-44d3-8b42-6daf692896f224111206.jpg",
              "https://d2xamzlzrdbdbn.cloudfront.net/products/f0595eaf-b5f7-4635-abbd-95ee3b25585b24111206.jpg",
            ],
            price: {
              "512 GB": "1,64,999",
              "1 TB": "1,84,999",
            },
          },
        },
        specifications: {
          "In the box":
            "Handset, Data Cable (C to C), Sim Ejection Pin, Quick Start Guide, Protection Film (Main Screen Only)",
          "Model Name": "Samsung Z Fold6",
          "Display Size": "19.3 cm (7.6 inch)",
          "Processor Type": "Snapdragon 8 Gen 3",
          "Primary Camera": "50MP + 12MP + 10MP",
          "Network Type": "5G, 4G, 3G, 2G",
          "Battery Capacity": "4400 mAh",
        },
        highlights: [
          "12 GB RAM",
          "19.3 cm (7.6 inch) QXGA+ Display",
          "50MP + 12MP + 10MP | 10MP Front Camera",
          "4400 mAh Lithium ion Battery",
          "Snapdragon 8 Gen 3 Processor",
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
            images: [
              "https://i.imghippo.com/files/vhGY71722420758.png",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696519943/Croma%20Assets/Small%20Appliances/Fryers%20and%20Grills/Images/274978_1_mjk07y.png?tr=w-360",
              "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696519941/Croma%20Assets/Small%20Appliances/Fryers%20and%20Grills/Images/274978_2_hhxulj.png?tr=w-360",
            ],
            price: {
              Digital: "2,659",
              Manual: "2,499",
            },
          },

          "#3B3B3B": {
            images: [
              "https://i.imghippo.com/files/jJjjZ1723197300.png",
              "https://m.media-amazon.com/images/I/71rcWELOmpL._SL1500_.jpg",
              "https://m.media-amazon.com/images/I/71HSb6IHBpL._SL1500_.jpg",
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
        capacity: ["6 Litres", "10 Litres", "15 Litres"],
        images: [
          "https://i.imghippo.com/files/3UMZQ1722420676.png",
          "https://img3.gadgetsnow.com/gd/images/products/additional/large/G399696_View_2/electronics/geysers/crompton-arno-neo-6-l-5-star-rated-storage-water-heater-with-advanced-3-level-safety-white-.jpg",
          "https://img3.gadgetsnow.com/gd/images/products/additional/large/G399696_View_3/electronics/geysers/crompton-arno-neo-6-l-5-star-rated-storage-water-heater-with-advanced-3-level-safety-white-.jpg",
        ],
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
            images: [
              "https://i.imghippo.com/files/fnv3L1722420847.png",
              "https://m.media-amazon.com/images/I/71jb3heQEqL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71Ja7p8diQL._SX679_.jpg",
            ],
            price: {
              Solo: "7,490",
              Grill: "8,750",
            },
          },

          "#16151B": {
            images: [
              "https://i.imghippo.com/files/gG9jE1722938134.png",
              "https://m.media-amazon.com/images/I/81Ghge2NCJL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/81MdCw5gLbL._SX679_.jpg",
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
        capacity: ["530 Litres", "560 Litres", "600 Litres"],
        images: [
          "https://i.imghippo.com/files/MMnFK1722420738.png",
          "https://i.gadgets360cdn.com/products/large/1100768-366x416-1655292271293.jpeg?downsize=*:420&output-quality=80",
          "https://i.gadgets360cdn.com/products/large/1100765-296x416-1655292271290.jpeg?downsize=*:420&output-quality=80",
          "https://i.gadgets360cdn.com/products/large/1100767-217x416-1655292271292.jpeg?downsize=*:420&output-quality=80",
        ],
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
        capacity: ["1.5 Ton 3 Star", "2 Ton 4 Star", "2.2 Ton 5 Star"],
        images: [
          "https://i.imghippo.com/files/gHRSb1722420835.png",
          "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676981641/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/247185_3_n6mt2g.png?tr=w-360",
          "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689861472/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/247185_1_bqddqe.png?tr=w-360",
          "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676981647/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/247185_6_efkyhw.png?tr=w-360",
        ],
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
            images: [
              "https://i.imghippo.com/files/qsCJb1723198202.png",
              "https://m.media-amazon.com/images/I/61x8BQ8-5wL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71JsSoIns1L._SX679_.jpg",
            ],
            price: {
              "512 GB": "2,39,990",
              "1 TB": "3,79,990",
            },
          },

          "#F0F1F2": {
            images: [
              "https://i.imghippo.com/files/Tl4mP1723198222.png",
              "https://m.media-amazon.com/images/I/71dn8nJn7cL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71kYDd4gyfL._SX679_.jpg",
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
        images: [
          "https://i.imghippo.com/files/w63dX1723197583.png",
          "https://m.media-amazon.com/images/I/41krGNrAaHL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51jFTat+rLL._SX679_.jpg",
        ],
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
        images: [
          "https://i.imghippo.com/files/HiTzb1723197628.png",
          "https://m.media-amazon.com/images/I/71K8rEngU2L._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51yE9EWqM8L._SX679_.jpg",
        ],
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
        images: [
          "https://i.imghippo.com/files/883w31723197920.png",
          "https://m.media-amazon.com/images/I/61h2E3NtoHL._SX466_.jpg",
          "https://m.media-amazon.com/images/I/71ARN1Ls82L._SX450_.jpg",
        ],
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
        type: ["RF-S 18-150", "RF-S 18-45", "R10 Body Only"],
        colors: {
          "#2E2C2F": {
            images: [
              "https://i.imghippo.com/files/purjY1723716206.png",
              "https://m.media-amazon.com/images/I/71oIWnXZ4mL._SX450_.jpg",
              "https://m.media-amazon.com/images/I/71Ny4opowKL._SX450_.jpg",
            ],
            price: {
              "RF-S 18-150": "73,500",
              "RF-S 18-45": "79,990",
              "R10 Body Only": "95,190",
            },
          },

          "#F0F1F2": {
            images: [
              "https://i.imghippo.com/files/4vD3v1723716184.png",
              "https://m.media-amazon.com/images/I/51EQjEJqqqL._SY450_.jpg",
              "https://m.media-amazon.com/images/I/51pOVLo5s1L._SY450_.jpg",
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
        images: [
          "https://i.imghippo.com/files/qZcJx1723267265.png",
          "https://m.media-amazon.com/images/I/41x35W2DspS._SY606_.jpg",
          "https://m.media-amazon.com/images/I/21RstQv3q-L._SX450_.jpg",
        ],
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
        images: [
          "https://i.imghippo.com/files/kiH3P1723267325.png",
          "https://m.media-amazon.com/images/I/61l5DBXrZbL._SY450_.jpg",
          "https://m.media-amazon.com/images/I/61OdGMDL93L._SY450_.jpg",
        ],
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
        images: [
          "https://i.imghippo.com/files/b4U2b1723267046.png",
          "https://m.media-amazon.com/images/I/71aj0l-3qzL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/813RYxv7Z7L._SX679_.jpg",
        ],
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
            images: [
              "https://i.imghippo.com/files/Cpohd1723267074.png",
              "https://m.media-amazon.com/images/I/61Be1hb9f9L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/61nK+ppx34L._SX679_.jpg",
            ],
            price: "16,999",
          },

          "#F0F1F2": {
            images: [
              "https://i.imghippo.com/files/c4cSK1723267378.png",
              "https://m.media-amazon.com/images/I/61TYpVjnbLL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/61VmXBiO6XL._SX679_.jpg",
            ],
            price: "17,999",
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
            images: [
              "https://i.imghippo.com/files/rFioc1723267113.png",
              "https://m.media-amazon.com/images/I/61jRyJEPwRS._SX679_.jpg",
              "https://m.media-amazon.com/images/I/61qi+RBWp6S._SX679_.jpg",
            ],
            price: "5,499",
          },

          "#E7E7ED": {
            images: [
              "https://i.imghippo.com/files/TwYd61723267401.png",
              "https://m.media-amazon.com/images/I/41LFSXBdmcL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/41fExJ4qHjL._SX679_.jpg",
            ],
            price: "6,099",
          },

          "#4FBCF7": {
            images: [
              "https://i.imghippo.com/files/fJM2k1723267181.png",
              "https://m.media-amazon.com/images/I/41ClbPpUIbL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/41qx9Ohey1L._SX679_.jpg",
            ],
            price: "6,799",
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
    ];
    localStorage.setItem("products", JSON.stringify(initialProducts));
    setProducts(initialProducts);
  }, []);

  const currency = "₹";

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (id, color = null, variant = null) => {
    let cartData = structuredClone(cartItems);

    if (cartData[id]) {
      if (color && variant) {
        if (!cartData[id][color]) {
          cartData[id][color] = { [variant]: 1 };
        } else if (!cartData[id][color][variant]) {
          cartData[id][color][variant] = 1;
        } else {
          cartData[id][color][variant] += 1;
        }
      } else if (color && !variant) {
        if (!cartData[id][color]) {
          cartData[id][color] = 1;
        } else if (typeof cartData[id][color] === "number") {
          cartData[id][color] += 1;
        }
      } else if (!color && variant) {
        if (!cartData[id][variant]) {
          cartData[id][variant] = 1;
        } else {
          cartData[id][variant] += 1;
        }
      } else if (!color && !variant) {
        if (typeof cartData[id] === "number") {
          cartData[id] += 1;
        } else {
          cartData[id] = 1;
        }
      }
    } else {
      if (color && variant) {
        cartData[id] = { [color]: { [variant]: 1 } };
      } else if (color && !variant) {
        cartData[id] = { [color]: 1 };
      } else if (!color && variant) {
        cartData[id] = { [variant]: 1 };
      } else if (!color && !variant) {
        cartData[id] = 1;
      }
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const productId in cartItems) {
      const product = cartItems[productId];

      if (typeof product === "object") {
        for (const key in product) {
          if (typeof product[key] === "object") {
            for (const variant in product[key]) {
              totalCount += product[key][variant];
            }
          } else {
            totalCount += product[key];
          }
        }
      } else {
        totalCount += product;
      }
    }

    return totalCount;
  };

  const value = {
    products,
    setProducts,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
