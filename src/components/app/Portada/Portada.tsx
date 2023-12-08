import React, { useEffect } from "react";
import Image from "next/image";
import sticker from "../../../assets/home/sticker.png";
import portada from "../../../assets/home/mobilePortada.jpg";
import TRCard from "../Card/Card";

import "./styles.scss";

const TRPortada = () => {
  return (
    <div className="portada_container">
      <div className="lotes_container">
        <Image alt="sticker" className="lotes" src={sticker} />
      </div>
      <div className="video_container">
        <Image alt="portada" className="gif_portada" src={portada} />
      </div>
      <div className="card_desktop_container">
        <TRCard />
      </div>
    </div>
  );
};

export default TRPortada;
