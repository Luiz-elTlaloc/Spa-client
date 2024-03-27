import "../index.css";
import logo_light from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
      <img src={logo_light} alt="" />        
      </div>
      <div className="github-button">
        <a href="https://github.com/emelygomezio/react-app">
          GitHub Repository 
        </a>
      </div>
      <div className="footer-nav">
        <div className="footer-bottom">
          <p> made with ❤️ for Ironhack!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;