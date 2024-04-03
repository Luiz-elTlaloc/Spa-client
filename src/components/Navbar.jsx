// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import logo_light from "../assets/Logo.png";

function Navbar() {
  const { logOutUser } = useContext(AuthContext);
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const [showTreatmentsMenu, setShowTreatmentMenu] = useState(false);


  const handleServicesButtonClick = () => {
    setShowTreatmentMenu(!showTreatmentsMenu);
  };

  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logo_light} alt="logo" className="logo" />{" "}
        </Link>
      </nav>
      <div class="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li id="servicesButton" onClick={handleServicesButtonClick}>
          <a href="/treatments">Services</a>
          </li>
          {showTreatmentsMenu && (
          <div id="treatmentsMenu" class="hidden">
            <ul>
              <li className="menu-item">
                <a href="/treatments">Treatment 1</a>
              </li>
              <li className="menu-item">
                <a href="/treatments">Treatment 2</a>
              </li>
            </ul>
          </div>
          )}
          {getToken() ? (  
            <>
          <li onClick={logOutUser}>Logout</li>
          <li>
          <a href="/edit-treatments">Edit treatments</a>
          </li>
          <li>
            <a href='/set-promos'>Promos</a>
          </li>
          </>
          ) : (
          <>
            <li>
            <a href="/signup">Signup</a>
            </li>
            <li>
            <a href="/login">Login</a></li>
          </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;