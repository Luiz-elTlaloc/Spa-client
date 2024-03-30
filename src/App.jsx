import "./App.css";
import { Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutUsPage from "./pages/AboutUsPage";
import TreatmentCard from "./components/TreatmentCard";

function App() {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  // const treatment = {
  //   image:
  // }

  return (
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route element={<LoggedIn />}>



        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/treatment/:id" element={<TreatmentCard/>} />

        </Route>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
