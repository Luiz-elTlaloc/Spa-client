import "./App.css";
import { Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutUsPage from "./pages/AboutUsPage";
import TreatmentCard from "./components/TreatmentCard";
import EditTreatmentsPage from "./pages/EditTreatments";
import AddPromo from "./components/AddPromo";
import AddTreatment from "./components/AddTreatment";
import SelectedTreatmentPage from "./pages/SelectedTreatmentPage";
import DeletePromos from "./pages/DeletePromo";

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
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/treatments/:treatmentId" element={<SelectedTreatmentPage/>} />


        <Route element={<LoggedIn />}>
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/edit-treatments" element={<AddTreatment/>} />
          <Route path="/set-promos" element={<AddPromo/>} />
          <Route path="/treatments/update/:treatmentId" element={<EditTreatmentsPage/>} />
          <Route path="/treatments/delete/:treatmentId" element={<EditTreatmentsPage/>} />
          <Route path="/treatments/details/:treatmentId" element={<EditTreatmentsPage/>} />
          <Route path="/promo/delete/:promoId" element={<DeletePromos/>} />
          
          <Route path="/treatments/:treatmentId" element={<SelectedTreatmentPage/>} />



        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/treatments/:treatmentId" element={<SelectedTreatmentPage/>} />

        </Route>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
