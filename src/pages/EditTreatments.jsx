import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { get, put, axiosDelete } from "../services/authService";

function EditTreatmentsPage() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState([{ label: "", value: "" }]);
    const [disabled, setDisabled] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
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

  const { treatmentId } = useParams();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { image, title, description, details };
    
    put(`/treatments/update/${treatmentId}`, requestBody)
    .then((response) => {
      navigate(`/treatments/${treatmentId}`);
    })
    .catch((error) => {
      setErrorMessage(error.response.data.message)
      console.log(error)});
  };
  
  const deleteProject = () => {
    axiosDelete(`/treatments/delete/${treatmentId}`)
    .then(() => {
      navigate("/treatments");
    })
    .catch((err) => {
      setErrorMessage(err.response.data.message)
      console.log(err)});
  };

  useEffect(() => {
    get(`/treatments/details/${treatmentId}`)
      .then((response) => {
        const oneTreatment = response.data;
        setImage(oneTreatment.image);
        setTitle(oneTreatment.title);
        setDescription(oneTreatment.description);
        setDetails(oneTreatment.details)
      })
      .catch((error) => console.log(error));
  }, [treatmentId]);

  return (
    <div className="AddTreatment">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
      <label>Change Image:</label>
        <input type="file" onChange={handlePhotoChange}
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

        <button disabled={disabled} type="submit">Submit</button>
      </form>

      <button onClick={deleteProject}>Delete Treatment</button>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default EditTreatmentsPage;