import "../index.css";
import logo_light from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
      <a>Whatsapp</a>        
      </div>
      <div className="github-button">
        <a href="https://github.com/Luiz-elTlaloc">
          GitHub Repository 
        </a>
      </div>
      <div className="footer-nav">
        <div className="footer-bottom">
          <a href="https://www.facebook.com/Monikspamx?locale=es_LA"> Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;