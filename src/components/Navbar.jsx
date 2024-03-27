// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import logo_light from '../assets/Logo.png'

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD

  const getToken = () => {
    return localStorage.getItem("authToken");
  };
  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <div>
    <nav>

    <Link to="/">
        <img src={logo_light} alt='logo' className='logo' /> </Link>
    </nav>
    <div class="sidebar">
        <h2>My Sidebar</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div class="content">
        <h2>Main Content Area</h2>
        <p>This is where your main content goes.</p>
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