import React, { useState, useContext } from "react";
import { post } from '../services/authService'
import { AuthContext } from "../context/auth.context";
import { useNavigate }  from "react-router-dom";
import { fileChange } from "../services/imageUpload";


function AddPromo({ refreshPromos }) {
  const { user } = useContext(AuthContext)
  const [image, setImage] = useState("");
  const [disabled, setDisabled] = useState(false)
  const navigate = useNavigate();

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

    const requestBody = {image}

    post('/promo', requestBody)
    .then((response) => {
      setImage("");
      navigate("/")
    })
    .catch((error) => console.log(error))
  };

  if(!user || user.role !== "admin") {
    navigate("/")
    return <div>Unauthorized</div>;
    }

  return (
    <div className="AddTreatment">
        <>
        <form onSubmit={handleSubmit}>
        <label>Insert image</label>
        <input type="file" onChange={handlePhotoChange}
        />
        <button disabled={disabled} type="submit">Create Promo</button>
        </form>
        </>
    </div>
  );
};

export default AddPromo;