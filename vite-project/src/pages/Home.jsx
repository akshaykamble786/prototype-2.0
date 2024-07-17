import React from 'react';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-8 text-center ">
      <ImageSlider />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-pink-100 p-6 rounded-lg flex flex-col items-center justify-center">
          <img className="w-full h-60 object-cover object-center mb-6" src="./assets/tv2.webp" alt="Product 1" />
          <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">LG 139 cm 4K Ultra HD Smart LED TV</h2>
          <p className="leading-relaxed text-base mb-4">4K Upscaling & AI Sound </p>
          <p className="text-xl font-extrabold mb-4">Starting from &#8377; 43,990</p>
          <button className="bg-black text-white px-4 py-2 w-32 rounded-lg">Shop Now</button>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center justify-center">
          <img className="w-full h-60 object-contain object-center mb-6" src="./assets/dellxps.png" alt="Product 2" />
          <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">Dell XPS 13, Ultra Thin</h2>
          <p className="leading-relaxed text-base mb-4">Intel’s latest 12th-gen Alder Lake CPUs</p>
          <p className="text-xl font-extrabold mb-4">Starting from &#8377; 1,68,899</p>
          <button className="bg-black text-white px-4 py-2 w-32 rounded-lg">Shop Now</button>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg flex flex-col items-center justify-center">
          <img className="w-full h-60 object-contain object-center mb-6" src="./assets/foldp.png" alt="Product 3" />
          <h2 className="text-lg text-gray-900 font-semibold title-font mb-4">Samsung Galaxy S23 Ultra</h2>
          <p className="leading-relaxed text-base mb-4">Get up to 3% Daily Cash back</p>
          <p className="text-xl font-extrabold mb-4">Starting from &#8377; 1,59,999</p>
          <button className="bg-black text-white px-4 py-2 w-32 rounded-lg">Shop Now</button>
        </div>
      </div>

      <div className="bg-green-100 p-12 rounded-lg mt-8 flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start max-w-md">
          <h2 className="text-3xl text-gray-900 font-extrabold title-font mb-4">Apple iPhone 15 Pro Max</h2>
          <p className="leading-relaxed text-lg mb-4">Available in Alpine Green, Sierra Blue and Silver</p>
          <p className="text-2xl font-extrabold mb-6">&#8377; 58,300 <span className="line-through text-gray-500">&#8377; 49,300</span></p>
          <button className="bg-black text-white px-6 py-3 w-32 rounded-lg mb-3">Buy Now</button>
          <button className="bg-green-100 text-black border-2 border-gray-800 border-solid px-3 py-2 w-32 rounded-lg mb-1">Read More</button>

        </div>
        <div className="h-full flex items-center justify-center">
          <img className="w-96 h-96 object-cover object-center" src='./assets/igreen.png' alt="Product 4" />
        </div>
      </div>

    </div>
  );
};

export default Home;
