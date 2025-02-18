import React from "react";
import "./Home.css";
import featuredImage from "./home-pics.png";
import logements from "../Asset/logements.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section className="about">
        <div className="image-container">
          <img src={featuredImage} alt="Featured" className="featured-image" />
          <div className="overlay-text">Chez vous, partout et ailleurs</div>
        </div>
      </section>

      <section className="gallery">
        {logements.map((logement) => (
          <Link to={"/annonce/" + logement.id} key={logement.id}>
            <div className="gallery-item">
              <img src={logement.cover} alt={logement.title} />
              <div className="gallery-item-title">{logement.title}</div>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
