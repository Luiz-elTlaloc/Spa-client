import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { get, axiosDelete } from "../services/authService";

function DeletePromos() {
  const [errorMessage, setErrorMessage] = useState("");


  const { promoId } = useParams();

  const navigate = useNavigate();
  

    const deletePromo = () => {
      axiosDelete(`/promo/delete/${promoId}`)
        .then(() => {
          navigate("/promo");
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          console.log(err);
        });
    };

    return (
      <div className="AddTreatment">
        <>
        <button className="editing-button" onClick={deletePromo}>Delete Promo</button>
        </>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };

export default DeletePromos;
