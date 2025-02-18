import React from "react";
import "./HostDetails.css";

const HostDetails = ({ host, rating }) => (
  host?.name &&
  host?.picture && (
    <div className="host-container">
      <div className="host">
        <img src={host.picture} alt={host.name} className="host-picture" />
        <div className="host-info">
          <p className="host-name">{host.name}</p>
          <div className="rating" aria-label={`Note : ${rating} sur 5`}>
            {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
          </div>
        </div>
      </div>
    </div>
  )
);

export default HostDetails;

  