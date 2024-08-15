"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IoDocumentAttach } from "react-icons/io5";
import portico from "../../assets/portico.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const Portada = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="portada">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={portico}
        alt="portico del proyecto"
      />
      <div className="blue_area" data-aos="fade-left">
        <p className="proyecto">PROYECTO:</p>
        <h2>BOSQUE ALTO</h2>
        {/*         <div className="download">
          <a href="/assets/Plano_Bosque_alto.pdf" download>
            <IoDocumentAttach />
            <p>Descargar plano del proyecto PDF</p>
          </a>
        </div> */}
        <div className="green_area">
          <p>
            ¡Descubre la magia de Bosque Alto en Huacho: tu refugio natural
            perfecto!
          </p>
          <p className="contact">CONTÁCTANOS</p>
        </div>
      </div>
    </section>
  );
};

export default Portada;
