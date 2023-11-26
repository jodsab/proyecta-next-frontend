import React from "react";
import { GoLocation } from "react-icons/go";
import "./styles.scss";

const SVGICONS = 65;

const TRDescription = () => {
  return (
    <div className="trdescription_container content">
      <p className="bold bigText">Descripción</p>
      <p className="textCenter description mediumText">La descripción</p>
      <div className="icons">
        <div className="icon_text">
          <GoLocation size={SVGICONS} />
          <p>Centro Comercial, Av. Primavera 120, Santiago de Surco 15038</p>
        </div>
      </div>
    </div>
  );
};

export default TRDescription;
