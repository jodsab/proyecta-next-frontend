import React from "react";
import { GoLocation } from "react-icons/go";
import "./styles.scss";

const SVGICONS = 65;

const TRDescription = () => {
  return (
    <div className="trdescription_container content">
      <p className="bold bigText">Descripción</p>
      <p className="textCenter description mediumText">Somos una inmobiliaria comprometida con el medio ambiente y la transformación de terrenos eriazos
      </p>
      <p className="textCenter description description2 mediumText">
        INVIERTE EN TERRENOS EN HUACHO CON ALTA RENTABILIDAD, LOTES DESDE LOS 100M2 HASTA LOS 1000M2
      </p>

      <div className="icons">
        <div className="icon_text">
          <GoLocation size={SVGICONS} />
          <p>Av. Arequipa 1860, Lince. Oficina 207
          </p>
        </div>
      </div>
    </div>
  );
};

export default TRDescription;
