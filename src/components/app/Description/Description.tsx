import React from "react";
import { GoLocation } from "react-icons/go";
import "./styles.scss";

const SVGICONS = 65;

const TRDescription = () => {
  return (
    <div className="trdescription_container content">
      <p className="bold bigText">Descripción</p>
      <p className="textCenter description mediumText">Somos una Inmobiliaria comprometida con el
        medio ambiente y la transformación de terrenos
        eriazos.
      </p>
      <p className="textCenter description mediumText">
        🏡𝐋𝐀 𝐌𝐄𝐉𝐎𝐑 𝐈𝐍𝐕𝐄𝐑𝐒𝐈Ó𝐍 𝐏𝐀𝐑𝐀 𝐓𝐔 𝐅𝐀𝐌𝐈𝐋𝐈𝐀 👨‍👩‍👧‍👦 𝐄𝐍 𝐇𝐔𝐀𝐂𝐇𝐎 🌱𝐋𝐎𝐓𝐄𝐒 𝐃𝐄 𝟏𝟖𝟎𝐌𝟐 𝐀 𝐒/𝟏𝟐.𝟓𝟎𝟎 𝐒𝐎𝐋𝐄𝐒 😲🚨
      </p>

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
