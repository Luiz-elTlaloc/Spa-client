import React, { useState, useEffect, useContext } from "react";
import { post } from '../services/authService'
import { AuthContext } from "../context/auth.context";
import TreatmentCard from "./TreatmentCard";
import { fileChange } from "../services/imageUpload";

function AddTreatment({ refreshTreatments }) {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([{ label: "", value: "" }]);
  const [createdTreatment, setCreatedTreatment] = useState(null);

  const [disabled, setDisabled] = useState(false)
  
  
  const handleDetailChange = (index, key, value) => {
    const updatedDetails = [...details];
    updatedDetails[index][key] = value;
    setDetails(updatedDetails);
  };
  
  const handlePhotoChange = (e) => {
    setDisabled(true)
      fileChange(e)
        .then((response) => {
          setImage(response.data.image)
          setDisabled(false)
        })
        .catch((err) => {
          console.log(err)
          setDisabled(false)
        })
    }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestBody = {
      image,
      title,
      description,
      details,
    };
  
    post('/treatments', requestBody)
    .then((response) => {
      setCreatedTreatment(response.data);
      setImage("");
      setTitle("");
      setDescription("");
      setDetails([{ label: "", value: "" }]);
    })
    .catch((error) => console.log(error))
  };
  
      if(!user || user.role !== "admin") {
      return <div>Unauthorized</div>;
      }
  

  return (
    <div className="AddTreatment">
      <h3>Add Treatment</h3>

      <form onSubmit={handleSubmit}>
        <label>Insert image</label>
        <input type="file" onChange={handlePhotoChange}
        />

        <label>Title:</label>
        <input
          src="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <h3>Treatment Details</h3>
        {details.map((detail, index) => (
          <div key={index}>
            <input
              type="text"
              value={detail.label}
              onChange={(e) => handleDetailChange(index, "label", e.target.value)}
              placeholder="Label"
            />
            <input
              type="text"
              value={detail.value}
              onChange={(e) => handleDetailChange(index, "value", e.target.value)}
              placeholder="Value"
            />
          </div>
        ))}
        <button type="button" onClick={() => setDetails([...details, { label: "", value: "" }])}>
          Add Detail
        </button>

        <button disabled={disabled} type="submit">Submit</button>
      </form>

      {createdTreatment && (
        <TreatmentCard
        image={createdTreatment.image}
        title={createdTreatment.title}
        description={createdTreatment.description}
        details={createdTreatment.details}
        _id={createdTreatment._id}
        />
      )}
    </div>
  );
}

export default AddTreatment;