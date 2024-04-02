import React, { useState, useEffect } from "react";
import { post } from '../services/authService'

function AddProject({ refreshTreatments }) {
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {image}

    post('/', requestBody)
    .then((response) => {
      setImage("");
    })
    .catch((error) => console.log(error))
  };

  useEffect(() => {
    if(user.role !== "admin"){
      navigate("/set-promos")     //or somewhere else
  }
}, []);

  return (
    <div className="content">
        <>
        <form onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <button onClick={handleCreate}>Create Promo</button>
          <button onClick={handleDelete}>Delete Promo</button>
        </form>
        </>
    </div>
  );
};

export default AddProject;