import React, { useEffect } from "react";
import Image from "next/image";
import sticker from "../../../assets/home/sticker.png";
import portada from "../../../assets/home/mobilePortada.jpg";

import "./styles.scss";

const TRPortada = () => {
  useEffect(() => {
    console.log(portada);
  }, [portada]);
  return (
    <div className="portada_container">
      <div className="lotes_container">
        <Image alt="sticker" className="lotes" src={sticker} />
      </div>
      <div className="video_container">
        <Image alt="portada" className="gif_portada" src={portada} />
      </div>
    </div>
  );
};

export default TRPortada;
