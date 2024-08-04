import React from 'react';
import ProductCard from '../components/ProductCard'

const Mobiles = () => {

  const product1 = {
    images: {
      '#414141': 'https://i.imghippo.com/files/odBsF1722159182.png',
      '#DEDBD2': 'https://i.imghippo.com/files/9xQok1722159207.png',
      '#273039': 'https://i.imghippo.com/files/3Aebh1722159154.png',
      '#959188': 'https://i.imghippo.com/files/d21Iw1722159117.png',
    },
    title: 'iPhone 15 Pro Max',
    price: 159990,
    colorOptions: ['#414141', '#DEDBD2', '#273039', '#959188'],
    rating : 4.3,
    originalPrice : 179990,
    saleOrNot : true
  };

  const product2 = {
    images: {
      '#465066': 'https://i.imghippo.com/files/4dDBx1722158230.png',
      '#7E7E7E': 'https://i.imghippo.com/files/c4TUe1722158339.png',
      '#E9D6DB': 'https://i.imghippo.com/files/DKtvy1722158286.png',
    },
    title: 'Samsung Z Fold6',
    price: 164999,
    colorOptions: ['#465066', '#7E7E7E', '#E9D6DB'],
    rating : 4.4,
    originalPrice : 179990
  };

  const product3 = {
    images: {
      '#453F57': 'https://i.imghippo.com/files/z7flt1722158064.png',
      '#F0E1B9': 'https://i.imghippo.com/files/DO4I31722158126.png',
    },
    title: 'Samsung S24 Ultra',
    price: 129999,
    colorOptions: ['#453F57', '#F0E1B9'],
    rating : 4.1,
    originalPrice : 179990,
    saleOrNot : true
  };

  const product4 = {
    images: {
      '#252525': 'https://i.imghippo.com/files/HtMIv1722159041.png',
      '#FEDEC9': 'https://i.imghippo.com/files/1dd6c1722159072.png'
    },
    title: 'Google Pixel 8 Pro',
    price: 97999,
    colorOptions: ['#252525', '#FEDEC9'],
    rating : 4.5,
    originalPrice : 179990
  };

  const product5 = {
    images: {
      '#FFBC9E': 'https://i.imghippo.com/files/vAsLd1722158553.png',
      '#CFE9DF': 'https://i.imghippo.com/files/0uGWu1722158473.png',
      '#CBD7E7': 'https://i.imghippo.com/files/UFszO1722158419.png',
    },
    title: 'Samsung Z Flip6',
    price: 109999,
    colorOptions: ['#FFBC9E', '#CFE9DF', '#CBD7E7'],
    rating : 4.6,
    originalPrice : 179990
  };

  const product6 = {
    images: {
      '#6C8582': 'https://i.imghippo.com/files/7AUxZ1722158911.png',
      '#6691B7': 'https://i.imghippo.com/files/G3iXH1722158879.png',
    },
    title: 'One Plus 12R',
    price: 43999,
    colorOptions: ['#6C8582', '#6691B7'],
    rating : 4.0,
    originalPrice : 56777,
    saleOrNot : true
  };

  const product7 = {
    images: {
      '#B83964': 'https://i.imghippo.com/files/iNjSb1722157434.png',
      '#4E5F44': 'https://i.imghippo.com/files/5goC21722158828.png',
    },
    title: 'Moto Razr 50 Ultra',
    price: 89999,
    colorOptions: ['#4E5F44', '#B83964'],
    rating : 4.2,
    originalPrice : 179990
  };

  const product8 = {
    images: {
      '#2E363A': 'https://i.imghippo.com/files/x6N2E1722158686.png',
      '#E1E5DD': 'https://i.imghippo.com/files/dgUdC1722158652.png',
    },
    title: 'Nothing Phone 2',
    price: 39999,
    colorOptions: ['#2E363A', '#E1E5DD'],
    rating : 4.4,
    originalPrice : 179990,
    saleOrNot : true
  };

  const product9 = {
    images: {
      '#161A20': 'https://i.imghippo.com/files/DiaHb1722158611.png',
    },
    title: 'Vivo X Fold3 Pro',
    price: 159999,
    colorOptions: ['#161A20'],
    rating : 4.5,
    originalPrice : 179990
  };

  const product10 = {
    images: {
      '#2E363A': 'https://i.imghippo.com/files/YiOBI1722158784.png',
      '#EFE6D2': 'https://i.imghippo.com/files/HBzzt1722158746.png',
    },
    title: 'Oppo Find N3 Flip',
    price: 74999,
    colorOptions: ['#2E363A', '#EFE6D2'],
    rating : 4.7,
    originalPrice : 179990,
    saleOrNot : true
  };

  const products = [product1, product2, product3, product4, product5,
    product6, product7, product8, product9, product10]

  return (
    <>
      <h1 className='text-center font-semibold text-3xl m-2 p-4 '>Mobiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Mobiles;