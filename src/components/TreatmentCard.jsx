import React from "react";
import "../index.css";

function TreatmentCard({ image, title, description, details }) {
  return (
    <div className="treatment-card">
      <div className="treatment-image">
        <img src={image} alt={title} />
      </div>
      <div className="treatment-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="treatment-details">
        <h3>Treatment Details</h3>
        <table>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.label}</td>
                <td>{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TreatmentCard;