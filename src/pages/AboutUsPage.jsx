import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import logo_light from '../assets/Logo.png'
// import '../components/AboutPage.css';
// import iconpng from "../assets/icon.png";

function AboutPage() {
  return (
    <div className="about-container">
        <div>
        <Link to="/about"></Link>
        <h1 className="about-greeting"> 💚Welcome to Monik Spa - "Belleza a la mexicana."💛 </h1>
        <br />
        <div className="about-contents">
            <img src={logo_light} alt="logo" className="about-image" />
                <br />
        <p className="about-paragraph">
          {" "}
          At Monik Spa, we believe in the beauty of Mexico's rich heritage and the transformative
          power of holistic skincare and wellness practices. Led by Monica Alvarado, a passionate 
          Mexican cosmetologist with over 7 years of experience, Monik Spa is dedicated to providing
           you with a rejuvenating spa experience unlike any other.{" "}
        </p>
        <br />
        <p className="about-paragraph">
          {" "}
          Monica Alvarado's journey in the world of skincare began with a deep appreciation for 
          Mexico's natural beauty and traditional wellness rituals. Drawing inspiration from her 
          cultural roots and years of expertise, Monica has curated a unique blend of treatments 
          and techniques designed to nourish your body, mind, and spirit.
        </p>
        <br />
        <p className="about-paragraph">
          {" "}
          As a former Manager form a recognized spa branch, Monica has honed her skills in advanced skincare treatments,
          always staying at the forefront of industry innovations. Her commitment to excellence and
          personalized care ensures that every client receives tailored solutions to address their 
          specific needs and concerns.
        </p>
        <br />
        <p className="about-paragraph"> 
          {" "}
          At Monik Spa, we offer a wide range of services, including luxurious facials, invigorating 
          body treatments, relaxing massages, and more. Whether you're seeking to refresh your skin, 
          unwind from the stresses of everyday life, or simply indulge in a moment of self-care, our 
          dedicated team is here to guide you on your wellness journey.
        </p>
        <br />
        <p className="about-paragraph"> 
          {" "}
          Come experience the magic of Monik Spa - where beauty meets tradition, and every treatment 
          is infused with the warmth and vibrancy of Mexican culture. Treat yourself to a pampering 
          session and discover the true essence of "belleza a la mexicana."
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;