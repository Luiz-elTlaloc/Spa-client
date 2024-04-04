import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TreatmentCard from "../components/TreatmentCard";
import { get } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import EditTreatmentsPage from "./EditTreatments";

function SelectedTreatmentPage() {
  const { treatmentId } = useParams();
  const [treatment, setTreatment] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("This is the treatment id====>", treatmentId)
    get(`/treatments/details/${treatmentId}`)
      .then(response => {
        console.log("This is the found treatment", response.data)
        setTreatment(response.data);
      })
      .catch(error => {
        console.error("Error fetching treatment:", error);
      });
  }, [treatmentId]);

  const handleEdit = () => {
    navigate(`/treatments/update/${treatmentId}`);
  };

  return (
    <div>
      {treatment ? (
        <>
        <TreatmentCard
          image={treatment.image}
          title={treatment.title}
          description={treatment.description}
          details={treatment.details}
          _id={treatment._id}
        />
        {user && user.role === 'admin' && (
            <button className="editing-button" onClick={handleEdit}> Edit Treatment </button>  
        )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SelectedTreatmentPage;