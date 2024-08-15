import React, { useEffect } from "react";
import Image from "next/image";
import recorrido from "../../assets/recorrido.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const Recorrido = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="recorrido">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={recorrido}
        alt="recorrido del proyecto"
      />
      <div className="blue_screen" data-aos="zoom-in"></div>
      <div className="youtube_video">
        <iframe
          width={500}
          height={450}
          src="https://www.youtube.com/embed/mjz6o_cwL7E"
          title="Proyecto Bosque Alto - Recorrido 3D"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Recorrido;
