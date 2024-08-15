import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({
    categories,
    slidesToShow = 6,
    slidesToScroll = 2,
    className = "bg-white py-4",
    iconClassName = "text-slate-900",
    categoryClassName = "text-sm text-slate-900",
    bgClassName = "bg-gray-100",
    imageClassName = "w-full h-20 object-contain mb-2",
    autoplay=true,
    autoplaySpeed=3000,
    breakpoints = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]

}) => {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-400 p-2 rounded-full cursor-pointer z-10"
                onClick={onClick}
            >
                <FaChevronLeft className="text-white" />
            </div>
        );
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-400 p-2 rounded-full cursor-pointer z-10"
                onClick={onClick}
            >
                <FaChevronRight className="text-white" />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        autoplay,
        autoplaySpeed,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: breakpoints
    };

    return (
        <div className={className}>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className="flex justify-center px-1">
                        <div className={`text-white flex flex-col justify-center items-center p-4 ${bgClassName} rounded-lg h-32 border border-black-700`}>
                        {category.image && (
                                <img src={category.image} className={imageClassName} alt={`${category.name}`} />
                            )}
                            <div className={`text-4xl mb-2 ${iconClassName}`}>{category.icon}</div>
                            <p className={categoryClassName}>{category.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
