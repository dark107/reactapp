import React from "react";
import "./About.css";
import imgPeople from "../media/people.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3> Déjame decirte algo sobre mi </h3>
        <p>
        Es la aptitud para procurar ser mejor en todos los ámbitos posibles, sin conformarse con lo que se puede dar, sino buscando una mejora continua de las propias capacidades.

Eso sí, para que sea una cualidad positiva, la autoexigencia debe tener un límite. No se debe causar daño a otros o a nosotros mismos en la búsqueda de ese ideal de superación
        </p>
      </div>
      <div className="about-img">
        <img className="img-p" src={imgPeople} alt="about" />
      </div>
    </div>
  );
};

export default About;
