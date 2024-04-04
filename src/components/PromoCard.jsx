import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { get } from '../services/authService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PromoCard = () => {

  const [promos, setPromos] = useState([])
  const { user } = useContext(AuthContext)

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
        {promos.length > 0 && (
            <Slider {...settings}>
                  {promos.map((promo) => (
                    <div key={promo._id}>
                    {user && user.role === "admin" ? (
                      <Link to={`/promo/delete/${promo._id}`}>
                      <img src={promo.image} alt='promo-image' />
                      </Link>
                    ) : (
                      <img src={promo.image} alt='promo-image' />
                      )}
                      </div>
                    ))}
            </Slider>
)}
    </div>
  );
};

export default PromoCard;