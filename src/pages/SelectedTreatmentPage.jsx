import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TreatmentCard from "../components/TreatmentCard";
import { get } from "../services/authService";

function SelectedTreatmentPage() {
  const { treatmentId } = useParams();
  const [treatment, setTreatment] = useState(null);

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

  return (
    <div>
      {treatment ? (
        <TreatmentCard
          image={treatment.image}
          title={treatment.title}
          description={treatment.description}
          details={treatment.details}
          _id={treatment._id}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default SelectedTreatmentPage;