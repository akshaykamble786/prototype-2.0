import React from 'react';
import ProductCard from '../components/ProductCard'

const Mobiles = () => {

  const product1 = {
    images: {
      '#414141': './assets/apple/appleNatTitan.png',
      '#DEDBD2': './assets/apple/appleWhiteTitan.png',
      '#273039': './assets/apple/appleBlueTitan.png',
      '#959188': './assets/apple/appleBlackTitan.png',
    },
    title: 'iPhone 15 Pro Max',
    price: 159990,
    colorOptions: ['#414141', '#DEDBD2', '#273039', '#959188']
  };

  const product2 = {
    images: {
      '#465066': './assets/samsung/zfoldNavy.png',
      '#7E7E7E': './assets/samsung/zfoldSilverShadow.png',
      '#E9D6DB': './assets/samsung/zfoldPeach.png',
    },
    title: 'Samsung Z Fold6',
    price: 164999,
    colorOptions: ['#465066','#7E7E7E', '#E9D6DB']
  };

  const product3 = {
    images: {
      '#453F57': './assets/samsung/s24TitanViolet.png',
      '#F0E1B9': './assets/samsung/s24TitanYellow.png',
    },
    title: 'Samsung S24 Ultra',
    price: 129999,
    colorOptions: ['#453F57', '#F0E1B9']
  };

  const product4 = {
    images: {
      '#252525': './assets/google/pixelObsidian.png',
      '#FEDEC9': './assets/google/pixelRose.png'
    },
    title: 'Google Pixel 8 Pro',
    price: 97999,
    colorOptions: ['#252525', '#FEDEC9']
  };

  const product5 = {
    images: {
      '#FFBC9E': './assets/samsung/zflipPeach.png',
      '#CFE9DF': './assets/samsung/zflipMint.png',
      '#CBD7E7': './assets/samsung/zflipBlue.png',
    },
    title: 'Samsung Z Flip6',
    price: 109999,
    colorOptions: ['#FFBC9E', '#CFE9DF', '#CBD7E7']
  };

  const product6 = {
    images: {
      '#2C2D33': './assets/oneplus/oneplusFlowyEmerald.png',
      '#6691B7': './assets/oneplus/oneplusCoolBlue.png',
    },
    title: 'One Plus 12R',
    price: 43999,
    colorOptions: ['#2C2D33', '#6691B7']
  };

  const product7 = {
    images: {
      '#B83964': './assets/moto/motoHotPink.png',
      '#4E5F44': './assets/moto/motoSpringGreen.png',
    },
    title: 'Moto Razr 50 Ultra',
    price: 89999,
    colorOptions: ['#4E5F44', '#B83964']
  };

  const product8 = {
    images: {
      '#2E363A': './assets/nothing/nothing.png',
      '#E1E5DD': './assets/nothing/nothingWhite.png',
    },
    title: 'Nothing Phone 2',
    price: 39999,
    colorOptions: ['#2E363A', '#E1E5DD']
  };

  const product9 = {
    images: {
      '#161A20': './assets/vivo/vivofold.png',
    },
    title: 'Vivo X Fold3 Pro',
    price: 159999,
    colorOptions: ['#161A20']
  };

  const product10 = {
    images: {
      '#2E363A': './assets/oppo/oppoSleekBlack.png',
      '#EFE6D2': './assets/oppo/oppoCreamGold.png',
    },
    title: 'Oppo Find N3 Flip',
    price: 74999,
    colorOptions: ['#2E363A', '#EFE6D2']
  };

  const products = [product1, product2, product3, product4, product5,
                    product6, product7, product8, product9, product10]

  return (
    <>
      <h1 className='text-center font-semibold text-3xl m-2 p-4 '>Mobiles</h1>
      <div className="flex flex-wrap">        
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Mobiles;