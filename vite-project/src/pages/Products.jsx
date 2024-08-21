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
  Truck,
  Gift,
  Headset,
  ShieldCheck,
  CreditCard
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
    { image: "./applelogo.png" },
    { image: "lg.png" },
    { image: "./samsung.png" },
    { image: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Dell_logo.png" },
    { image: "senn.png" },
    { image: "cannon.png" },
    { image: "havells.png" },
    { image: "phil.png" },
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
        <div className="bg-gradient-to-b from-pink-300 via-orange-100 to-rose-200 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
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

        <div className="bg-gradient-to-b from-yellow-200 via-amber-200 to-orange-300 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
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

        <div className="bg-gradient-to-b from-purple-300 via-indigo-200 to-blue-300 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-center">
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

      <div className="bg-gradient-to-r from-green-200 to-lime-300 p-8 sm:p-12 rounded-lg flex flex-col-reverse sm:flex-row items-center justify-between w-full">
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

      <h2 className="text-3xl text-left font-medium mt-8">Deals Of The Day</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
        <div className="bg-gradient-to-br from-[#13172c] via-[#030825] via-[#4a3f7a] to-[#263b59]
 p-4 h-auto rounded-lg flex flex-col items-center justify-center text-white">
          <img src="phil.png" className="h-12" alt="" />
          <h3 className="text-xl font-semibold">Kitchen Appliances</h3>
          <img
            src="https://i.imghippo.com/files/jJjjZ1723197300.png"
            alt="Microwave & Ovens"
            className="h-38 w-52 object-cover mb-6"
          />
          <p className="mt-2 text-center">
            Starting at ₹7,690*
            <br />
            Inclusive of Exchange Benefits
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded mt-2">
            Shop Now
          </button>
        </div>

        <div
          className="bg-gradient-to-b from-rose-300 to-teal-400
 p-4 h-auto rounded-lg flex flex-col items-center justify-center text-white"
        >
          <div className="flex mb-4">
            <img src="./samsung.png" className="h-8 mr-2" alt="samsung offer" />
            <img src="lg.png" alt="lg offer" className="h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-6">Air Conditioners</h3>
          <img
            src="ac.png"
            alt="43 inch led tv"
            className="h-40 w-52 object-contain mb-4"
          />
          <p className="mt-2 text-center">
            Starting at ₹15,749*
            <br />
            Inclusive of Bank Offer & Exchange Benefits
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded mt-4">
            Shop Now
          </button>
        </div>

        <div className="bg-gradient-to-b from-gray-400 to-gray-700 p-4 h-auto rounded-lg flex flex-col items-center justify-center text-white">
          <div className="flex mb-4">
            <img src="applelogo.png" className="h-12 mr-2" alt="" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Dell_logo.png"
              className="h-12"
              alt=""
            />
          </div>
          <h3 className="text-xl font-semibold">Latest Laptops</h3>
          <img
            src="https://i.imghippo.com/files/Tl4mP1723198222.png"
            alt="MacBook"
            className="h-50 w-48 object-cover "
          />
          <p className="mt-4 mb-1 text-center">
            Starting at ₹91,090*
            <br />
            *Including Bank Offer
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded mt-4">
            Shop Now
          </button>
        </div>

        <div className="bg-gradient-to-b from-yellow-400 to-indigo-400
 p-4 h-auto rounded-lg flex flex-col items-center justify-center text-white">
          <img src="cannon.png" alt="" className="h-10 w-24" />
          <h3 className="text-xl font-semibold mt-2">Digital Cameras</h3>
          <img
            src="cam.png"
            alt="Mobile Accessories"
            className="h-38 w-52 object-cover mb-4 mt-4"
          />
          <p className="mt-2 mb-1 text-center">
            Starting at &#8377; 21,999
            <br />
            Up to 86% Off
          </p>
          <button className="bg-black text-white px-4 py-2 w-full sm:w-32 rounded mt-7">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="text-3xl text-left font-medium mt-6">
        Limited Time Deals
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
        <div className="bg-gradient-to-r from-teal-300 via-blue-300 to-blue-400 rounded-lg relative flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 h-full">
          <div className="flex flex-col items-start justify-center w-full sm:w-1/2">
            <img src="applelogo.png" className="h-9 w-9" alt="apple offer" />
            <h2 className="text-white text-left text-lg font-bold mb-2 mt-2">
              iMac Now Starting From &#8377; 119,999
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
            src="imac.png"
            alt="iMac Offer"
            className="h-auto w-full sm:w-1/2 mt-4 sm:mt-0 ml-0 sm:ml-8"
          />
        </div>

        <div className="bg-gradient-to-r from-purple-400 via-pink-300 to-pink-400 rounded-lg relative flex flex-col-reverse sm:flex-row items-center justify-between p-4 sm:p-6 h-full">
          <div className="flex flex-col items-start justify-center w-full sm:w-1/2">
            <div className="flex mb-2">
              <img
                src="senn.png"
                className="h-9 w-9 mr-4"
                alt="sennheiser offer"
              />
              <img src="boat.png" className="h-9 w-9" alt="boat offer" />
            </div>
            <h2 className="text-white text-left text-lg font-bold mb-2">
              Headphones Now Starting From &#8377; 15,999
            </h2>
            <Timer initialTime={washOfferEndTime} />
            <button className="mt-4 px-6 py-2 bg-black text-white rounded">
              Buy Now
            </button>
            <p className="mt-4 text-white text-xs text-left">
              *Buy now and win free earbuds
            </p>
          </div>
          <img
            src="https://i.imghippo.com/files/Htv2R1723197865.png"
            alt="iMac Offer"
            className="h-auto w-full sm:w-1/2 mt-4 sm:mt-0 ml-0 sm:ml-8"
          />
        </div>
      </div>

        <h2 className="text-3xl font-medium text-left mt-6">Why Elektra?</h2>
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg mt-4 p-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-12">
            <div className="text-center flex flex-col items-center">
              <Truck strokeWidth={1.3} size={72} />
              <h4 className="text-lg font-bold mt-1">Free Shipping</h4>
              <p className="text-sm">From all orders over &#8377; 1000</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Gift strokeWidth={1.3} size={72} />
              <h4 className="text-lg font-bold mt-1">Support 24/7</h4>
              <p className="text-sm">Call us anytime</p>
            </div>
            <div className="text-center flex flex-col items-center">
            <Headset size={72} strokeWidth={1.3} />
              <h4 className="text-lg font-bold mt-1">100% Money Back</h4>
              <p className="text-sm">30 days for free return</p>
            </div>
            <div className="text-center flex flex-col items-center">
            <ShieldCheck size={72} strokeWidth={1.3} />
              <h4 className="text-md font-bold mt-1">Payment Secure</h4>
              <p className="text-sm">100% secure payment</p>
            </div>
            <div className="text-center flex flex-col items-center">
            <CreditCard size={72} strokeWidth={1.3} />
              <h4 className="text-md font-bold mt-1">Easy Tracking</h4>
              <p className="text-sm">Track your order easily</p>
            </div>
          </div>
        </div>

      <div>
        <h2 className="text-3xl text-left font-medium mt-8">Top Brands</h2>
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
