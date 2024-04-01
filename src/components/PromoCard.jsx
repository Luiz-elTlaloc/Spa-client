import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const PromoCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="promo-card">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Promo 1" />
        </div>
        <div>
          <img src={image2} alt="Promo 2" />
        </div>
        <div>
          <img src={image3} alt="Promo 3" />
        </div>
      </Slider>
    </div>
  );
};

export default PromoCard;