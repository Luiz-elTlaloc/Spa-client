// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import logo_light from "../assets/Logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const [showTreatmentsMenu, setShowTreatmentMenu] = useState(false);
  // const getToken = () => {
  //   return localStorage.getItem("authToken");
  // }; esto hya que ver si funciona despues


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
          <li id="servicesButton" onClick={handleServicesButtonClick}><a href="/treatments/:id">Services</a>
          </li>
          <div id="treatmentsMenu" class="hidden">
            <ul>
              <li>
                <a href="/treatments/:id">Treatment 1</a>
              </li>
              <li>
                <a herf="/treatments/:id">Treatment 2</a>
              </li>
            </ul>
          </div>
          <li><a href="/signup">Signup</a></li>  
        </ul>
      </div>
    </div>

    //   {/*    UPDATE     */}
    //   {getToken() ? (
    //     <>
    //       <button onClick={logOutUser}>Logout</button>
    //       {/* <span>{user && user.name}</span> */}
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <button>Sign Up</button>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <button>Login</button>{" "}
    //       </Link>
    //     </>
    //   )}
    //   </div>
  );
}

export default Navbar;
