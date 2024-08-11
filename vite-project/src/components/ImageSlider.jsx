import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
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
    <Slider {...settings}>
      <div>
        <img src="https://i.imghippo.com/files/b9FXU1723372102.webp" alt="Slide 1" className="w-full h-auto object-cover object" />
      </div>
      <div>
        <img src="https://i.imghippo.com/files/Kk1lw1723372065.webp" alt="Slide 2" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="https://i.imghippo.com/files/Xcmlx1723372135.webp" alt="Slide 3" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="https://i.imghippo.com/files/eImNf1723371931.webp" alt="Slide 3" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="https://i.imghippo.com/files/cpUKh1723371954.webp" alt="Slide 3" className="w-full h-auto object-cover" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
