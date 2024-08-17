// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const isMobile = window.innerWidth <= 768;

//   return (
//     <Slider {...settings} className='mb-4'>
//       <div className="slider-item">
//         <img 
//           src={isMobile ? "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Monitors_17Aug2024_rjecns.jpg" : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872344/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_Monitors_17Aug2024_zzqmml.jpg"} 
//           alt="Slide 1" 
//           className="slider-image" 
//         />
//       </div>
//       <div className="slider-item">
//         <img 
//           src={isMobile ? "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_TV_17Aug2024_pbus3s.jpg" : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_TV_17Aug2024_zfkznm.jpg "} 
//           alt="Slide 2" 
//           className="slider-image" 
//         />
//       </div>
//       <div className="slider-item">
//         <img 
//           src={isMobile ? "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_WM_17Aug2024_lvrtpw.jpg" : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_WM_17Aug2024_umpcsl.jpg "} 
//           alt="Slide 3" 
//           className="slider-image" 
//         />
//       </div>
//       <div className="slider-item">
//         <img 
//           src={isMobile ? "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723809451/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Aug/17082024/Desktop/HP_Rotating_TWS_17Aug2024_kcqjbm.jpg" : ""} 
//           alt="Slide 4" 
//           className="slider-image" 
//         />
//       </div>
//       <div className="slider-item">
//         <img 
//           src={isMobile ? "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Laptops_17Aug2024_czstif.jpg" : "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723784191/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/16082024/MHP_Rotating_laptop_16Aug2024_krsetp.jpg "} 
//           alt="Slide 5" 
//           className="slider-image" 
//         />
//       </div>
//     </Slider>
//   );
// };

// export default HeroSection;


import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <Slider {...settings} className='mb-4'>
      <div className="slider-item">
        <img 
          src={isMobile ? "https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Monitors_17Aug2024_rjecns.jpg" : "https://media.croma.com/image/upload/v1723872344/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_Monitors_17Aug2024_zzqmml.jpg"} 
          alt="Slide 1" 
          className="slider-image" 
        />
      </div>
      <div className="slider-item">
        <img 
          src={isMobile ? "https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_TV_17Aug2024_pbus3s.jpg" : "https://media.croma.com/image/upload/v1723872346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_TV_17Aug2024_zfkznm.jpg"} 
          alt="Slide 2" 
          className="slider-image" 
        />
      </div>
      <div className="slider-item">
        <img 
          src={isMobile ? "https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_WM_17Aug2024_lvrtpw.jpg" : "https://media.croma.com/image/upload/v1723872345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_WM_17Aug2024_umpcsl.jpg"} 
          alt="Slide 3" 
          className="slider-image" 
        />
      </div>
      <div className="slider-item">
        <img 
          src={isMobile ? "https://media.croma.com/image/upload/v1723809451/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Aug/17082024/Desktop/HP_Rotating_TWS_17Aug2024_kcqjbm.jpg" : "https://media.croma.com/image/upload/v1723872347/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_TWS_17Aug2024_kcqjbm.jpg"} 
          alt="Slide 4" 
          className="slider-image" 
        />
      </div>
      <div className="slider-item">
        <img 
          src={isMobile ? "https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Laptops_17Aug2024_czstif.jpg" : "https://media.croma.com/image/upload/v1723784191/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/16082024/MHP_Rotating_laptop_16Aug2024_krsetp.jpg"} 
          alt="Slide 5" 
          className="slider-image" 
        />
      </div>
    </Slider>
  );
};

export default HeroSection;
