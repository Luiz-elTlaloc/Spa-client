// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { get } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import logo_light from "../assets/Logo.png";
import { SERVER_URL } from "../services/SERVER_URL";

function Navbar() {
  const { logOutUser } = useContext(AuthContext);
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const [showTreatmentsMenu, setShowTreatmentMenu] = useState(false);
  const [treatments, setTreatments] = useState([])

  const fetchTreatments = () => {
    get('/treatments')
    .then((response) => {
      console.log("These are the found treatments===>", response.data)
      setTreatments(response.data)})
    .catch((error) => console.error('Error fetching treatments', error));
  };

  useEffect(() => {
    fetchTreatments()
  }, []);


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
          <li id="servicesButton">
          <a href="#" onClick={handleServicesButtonClick}>Services</a>
          </li>
          {showTreatmentsMenu && (
          <div id="treatmentsMenu">
            <ul>
            {treatments.map((treatment) => (
              <Link to={`/treatments/${treatment._id}`}>
                  <li key={treatment._id}>{treatment.title}</li>
              </Link>
            ))}
              {/* <li className="menu-item">
                <a href="/treatments">Treatment 1</a>
              </li>
              <li className="menu-item">
                <a href="/treatments">Treatment 2</a>
              </li> */}
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