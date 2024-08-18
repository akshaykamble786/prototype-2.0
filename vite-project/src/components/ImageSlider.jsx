import React from "react";
import Slider from "react-slick";
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

  return (
    <Slider {...settings} className="mb-4 w-full">
      <div className="relative w-full">
        <img
          srcSet="
            https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Monitors_17Aug2024_rjecns.jpg 768w,
            https://media.croma.com/image/upload/v1723872344/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_Monitors_17Aug2024_zzqmml.jpg 1200w
          "
          sizes="(max-width: 768px) 100vw, 50vw"
          src="https://media.croma.com/image/upload/v1723872344/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_Monitors_17Aug2024_zzqmml.jpg"
          alt="Slide 1"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative w-full">
        <img
          srcSet="
            https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_TV_17Aug2024_pbus3s.jpg 768w,
             https://media.croma.com/image/upload/v1723872346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_TV_17Aug2024_zfkznm.jpg 1200w
          "
          sizes="(max-width: 768px) 100vw, 50vw"
          src="https://media.croma.com/image/upload/v1723872346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_TV_17Aug2024_zfkznm.jpg"
          alt="Slide 2"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative w-full">
        <img
          srcSet="
            https://media.croma.com/image/upload/v1723872361/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_WM_17Aug2024_lvrtpw.jpg 768w,
            https://media.croma.com/image/upload/v1723872345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_WM_17Aug2024_umpcsl.jpg 1200w
          "
          sizes="(max-width: 768px) 100vw, 50vw"
          src="https://media.croma.com/image/upload/v1723872345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/MHP_Rotating_WM_17Aug2024_umpcsl.jpg"
          alt="Slide 3"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative w-full">
        <img
          srcSet="
            https://media.croma.com/image/upload/v1723872324/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/17082024/HP_Rotating_Laptops_17Aug2024_czstif.jpg 768w,
            https://media.croma.com/image/upload/v1723784191/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/16082024/MHP_Rotating_laptop_16Aug2024_krsetp.jpg 1200w
          "
          sizes="(max-width: 768px) 100vw, 50vw"
          src="https://media.croma.com/image/upload/v1723784191/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/16082024/MHP_Rotating_laptop_16Aug2024_krsetp.jpg"
          alt="Slide 5"
          className="w-full h-auto object-cover"
        />
      </div>
    </Slider>
  );
};

export default HeroSection;
