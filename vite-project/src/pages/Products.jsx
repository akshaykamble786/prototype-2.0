import HeroSection from "../components/ImageSlider";
import React from "react";
import Timer from "../components/Timer";
import Carousel from "../components/Carousel";
import {
  Home,
  Tablet,
  Watch,
  Speaker,
  Refrigerator,
  Headphones,
  Fan,
  Microwave,
  Camera,
} from "lucide-react";

const Products = () => {
  const imacOfferEndTime = new Date().getTime() + 7 * 60 * 60 * 1000;
  const washOfferEndTime = new Date().getTime() + 9 * 60 * 60 * 1000;

  const electronicsCategories = [
    { name: "Home Theatres", icon: <Home className="text-slate-900" /> },
    { name: "Mobiles", icon: <Tablet className="text-slate-900" /> },
    { name: "Wearables", icon: <Watch className="text-slate-900" /> },
    { name: "Media Players", icon: <Speaker className="text-slate-900" /> },
    { name: "Appliances", icon: <Refrigerator className="text-slate-900" /> },
    { name: "Accessories", icon: <Headphones className="text-slate-900" /> },
    { name: "Fans", icon: <Fan className="text-slate-900" /> },
    { name: "Microwaves", icon: <Microwave className="text-slate-900" /> },
    { name: "Cameras", icon: <Camera className="text-slate-900" /> },
  ];

  const brandCategories = [
    {
      image: "./applelogo.png",
    },
    {
      image: "lg.png",
    },
    {
      image: "./samsung.png",
    },
    {
      image: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Dell_logo.png",
    },
    {
      image: "senn.png",
    },
    {
      image: "cannon.png",
    },
    {
      image: "havells.png",
    },
    {
      image: "phil.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 text-center">
      <HeroSection />

      <Carousel
        categories={electronicsCategories}
        slidesToShow={6}
        slidesToScroll={1}
        autoplay={false}
        className="bg-white py-8"
        categoryClassName="text-md text-blue-900"
        bgClassName="bg-gray-100"
        nextArrow={true}
        prevArrow={true}
      />

      <h2 className="text-3xl text-left font-medium mt-4">What's Hot</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        <div className="bg-pink-100 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
          <img
            className="w-full h-40 sm:h-60 object-contain object-center mb-4 sm:mb-6"
            src="https://i.imghippo.com/files/BFWPa1723372627.png"
            alt="Product 1"
          />
          <h2 className="text-md sm:text-lg text-gray-900 font-semibold title-font mb-2 sm:mb-4">
            LG 139 cm 4K Ultra HD Smart LED TV
          </h2>
          <p className="leading-relaxed text-sm sm:text-base mb-2 sm:mb-4">
            4K Upscaling & AI Sound{" "}
          </p>
          <p className="text-lg sm:text-xl font-extrabold mb-2 sm:mb-4">
            Starting from &#8377; 43,990
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded">
            Shop Now
          </button>
        </div>

        <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
          <img
            className="w-full h-40 sm:h-60 object-contain object-center mb-4 sm:mb-6"
            src="https://i.imghippo.com/files/DDELZ1723371819.png"
            alt="Product 2"
          />
          <h2 className="text-md sm:text-lg text-gray-900 font-semibold title-font mb-2 sm:mb-4">
            Dell XPS 13, Ultra Thin
          </h2>
          <p className="leading-relaxed text-sm sm:text-base mb-2 sm:mb-4">
            Intel's latest 12th-gen Alder Lake CPUs
          </p>
          <p className="text-lg sm:text-xl font-extrabold mb-2 sm:mb-4">
            Starting from &#8377; 1,68,899
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded">
            Shop Now
          </button>
        </div>

        <div className="bg-purple-100 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
          <img
            className="w-full h-40 sm:h-60 object-contain object-center mb-4 sm:mb-6"
            src="https://i.imghippo.com/files/urJPH1723371865.png"
            alt="Product 3"
          />
          <h2 className="text-md sm:text-lg text-gray-900 font-semibold title-font mb-2 sm:mb-4">
            Samsung Galaxy S23 Ultra
          </h2>
          <p className="leading-relaxed text-sm sm:text-base mb-2 sm:mb-4">
            Get up to 3% Daily Cash back
          </p>
          <p className="text-lg sm:text-xl font-extrabold mb-2 sm:mb-4">
            Starting from &#8377; 1,59,999
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-green-100 p-8 sm:p-12 rounded-lg flex flex-col-reverse sm:flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start max-w-md text-left">
          <h2 className="text-xl sm:text-3xl text-gray-900 font-extrabold title-font mb-4">
            Apple iPhone 13
          </h2>
          <p className="leading-relaxed text-md sm:text-lg mb-4">
            Available in Alpine Green, Sierra Blue and Silver
          </p>
          <p className="text-lg sm:text-2xl font-extrabold mb-4">
            &#8377; 49,300
            <span className="line-through text-gray-500">&#8377; 58,300</span>
          </p>
          <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-32 rounded mb-3">
            Buy Now
          </button>
          <button className="bg-green-100 text-black border-2 border-gray-800 border-solid px-3 py-2 w-full sm:w-32 rounded mb-1">
            Read More
          </button>
        </div>

        <div className="mt-6 sm:mt-0 h-full flex items-center justify-center">
          <img
            className="w-full sm:w-80 h-auto object-cover object-center"
            src="https://i.imghippo.com/files/iaD6L1723371901.png"
            alt="Product 4"
          />
        </div>
      </div>

      <h2 className="text-3xl text-left font-medium mt-8">Deals of The Day</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
        <div className="bg-orange-200 p-4 h-96 rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-violet-100 p-4 h-96 rounded-lg flex flex-col items-center justify center"></div>
        <div className="bg-teal-200 p-4 h-96 rounded-lg flex flex-col items-center justify center"></div>
        <div className="bg-rose-300 p-4 h-96 rounded-lg flex flex-col items-center justify center"></div>
      </div>

      <h2 className="text-3xl text-left font-medium mt-6">
        Limited Time Deals
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">

        <div className="bg-indigo-300 p-4 h-auto rounded-lg sm:flex flex-col-reverse">
          <div className="relative flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 h-full">
            <div className="flex flex-col items-start justify-center w-full sm:w-1/2">
              <h2 className="text-white text-left text-lg font-bold mb-2">
                iMac Now Starting From &#8377; 89,999
              </h2>
              <Timer initialTime={imacOfferEndTime} />
              <button className="mt-4 px-6 py-2 bg-black text-white rounded">
                Buy Now
              </button>
              <p className="mt-4 text-white text-xs text-left">
                *Buy now and win a free magic keyboard
              </p>
            </div>
            <img
              src="imac2.png"
              alt="iMac Offer"
              className="h-auto w-full sm:w-1/2 mt-4 sm:mt-0 ml-0 sm:ml-8"
            />
          </div>
        </div>

        <div className="bg-emerald-200 p-4 h-auto rounded-lg sm:flex flex-col-reverse">
          <div className="relative flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 h-full">
            <div className="flex flex-col items-start justify-center w-full sm:w-1/2">
              <h2 className="text-white text-left text-lg font-bold mb-2">
                Headphones Now Starting From &#8377; 34,999
              </h2>
              <Timer initialTime={washOfferEndTime} />
              <button className="mt-4 px-6 py-2 bg-black text-white rounded">
                Buy Now
              </button>
              <p className="mt-4 text-white text-xs text-left">
                *Buy now and win a free magic keyboard
              </p>
            </div>
            <img
              src="https://i.imghippo.com/files/Htv2R1723197865.png"
              alt="iMac Offer"
              className="h-auto w-full sm:w-1/2 mt-4 sm:mt-0 ml-0 sm:ml-8"
            />
          </div>
        </div>

      </div>

      <div>
        <h2 className="text-3xl text-left font-medium mt-6">Top Brands</h2>
        <Carousel
          categories={brandCategories}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          className="bg-white py-4"
          bgClassName="bg-gray-100 h-36"
        />
      </div>
    </div>
  );
};

export default Products;
