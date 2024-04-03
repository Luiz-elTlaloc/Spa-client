import React, { useState, useEffect, useContext } from "react";
import { post } from '../services/authService'
import { AuthContext } from "../context/auth.context";

function AddTreatment({ refreshTreatments }) {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([{ label: "", value: "" }]);
  
  
  const handleDetailChange = (index, key, value) => {
    const updatedDetails = [...details];
    updatedDetails[index][key] = value;
    setDetails(updatedDetails);
  };
  
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
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Title:</label>
        <input
          type="text"
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTreatment;