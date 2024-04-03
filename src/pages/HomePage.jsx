import React from 'react';
import { Link } from "react-router-dom";
import PromoCard from "../components/PromoCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
    return (
      <div className="content">
      <br/>
        <PromoCard />
      </div>
    );
  }
  
  export default HomePage;