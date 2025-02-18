import React from "react";
import { useParams } from "react-router-dom";
import logementData from "../Asset/logements.json";
import Slider from "./Slider";
import HostDetails from "./HostDetails";
import Tags from "./Tags";
import Collapse from "./Collapse";
import Footer from "./Footer";
import "./Annonce.css";

const Annonce = () => {
  const { id } = useParams();
  const logement = logementData.find((a) => a.id === id);

  if (!logement) {
    return <div className="error">Logement introuvable</div>;
  }

  const { title, location, pictures, host, rating, tags, description, equipments } = logement;

  if (!title || !location || !host) {
    return <div className="error">Données du logement manquantes ou corrompues</div>;
  }

  return (
    <div className="annonce-container">
      {pictures?.length > 0 && <Slider pictures={pictures} />}
      <div className="header-info">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <HostDetails host={host} rating={rating} />
      </div>
      <Tags tags={tags} />
      <div className="details-container">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Équipement"
          content={
            equipments && equipments.length > 0 ? (
              <ul>
                {equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            ) : (
              <p>Aucun équipement disponible</p>
            )
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Annonce;


