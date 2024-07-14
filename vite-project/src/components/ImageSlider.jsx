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
        <img src="./assets/nothinh.webp" alt="Slide 1" className="w-full h-96 object-cover" />
      </div>
      <div>
        <img src="./assets/vivo.webp" alt="Slide 2" className="w-full h-96 object-cover" />
      </div>
      <div>
        <img src="./assets/watch.webp" alt="Slide 3" className="w-full h-96 object-cover" />
      </div>
      <div>
        <img src="./assets/ac.webp" alt="Slide 3" className="w-full h-96 object-cover" />
      </div>
      <div>
        <img src="./assets/pendrive.webp" alt="Slide 3" className="w-full h-96 object-cover" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
