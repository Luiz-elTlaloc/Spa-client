import { useEffect, useState } from 'react';
import { get } from '../services/authService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PromoCard = () => {

  const [promos, setPromos] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    rows: 1,
    slidesPerRow: 1,
    vertical: false
  };

  useEffect(() => {
    get('/promo')
      .then((response) => {
        console.log("these are our promos ===>", response.data)
        setPromos(response.data)
      })
      .catch((err) => {console.log(err)})
  }, [])

  return (
    <div className="promo-card">
        {
          promos.length > 0 &&
            <Slider {...settings}>
                
                  {
                    promos.map((promo) => {
                      return (
                      <div key={promo._id}>
                        <img src={promo.image} alt='promo-image' />
                      </div>
                      )
                    })
                  }
                
            </Slider>
}
    </div>
  );
};

export default PromoCard;