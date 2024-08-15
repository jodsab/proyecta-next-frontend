import React, { useEffect } from "react";
import Image from "next/image";
import fresas from "../../assets/FRESAS.jpg";
import papayas from "../../assets/PAPAYAS.jpg";
import mandarinas from "../../assets/MANDARINAS.jpg";
import fresa from "../../assets/FRESA.png";
import conoce from "../../assets/conoce.webp";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const Avances = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="avances">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={conoce}
        alt="portada"
      />
      <div className="avances_container">
        <div className="avances_content" data-aos="fade-right">
          <h3 className="conoce_mobile">CONOCE NUESTROS AVANCES:</h3>
          <div className="images">
            <Image width={500} height={500} src={fresas} alt="fresas" />
            <Image width={500} height={500} src={papayas} alt="papayas" />
            <Image width={500} height={500} src={mandarinas} alt="mandarinas" />
          </div>
          <div className="conoce_bottom">
            <h3 className="conoce_desktop">CONOCE NUESTROS AVANCES:</h3>
            <p className="enterate">
              Entérate más de todas las plantas frutales que tenemos en nuestro
              huerto y todo lo avanzamos pensando en los propietarios.
            </p>
            <div className="darkgreen_area">
              <div className="fresa">
                <Image width={50} height={50} src={fresa} alt="fresa" />
              </div>
              <p className="recoleccion">RECOLECCIÓN DE FRUTAS FRESCAS</p>
              <p className="comprueba">
                Comprueba la satisfacción de saborear frutas deliciosas recién
                recolectadas para tu familia y tus seres amados. Disfruta de
                campos abiertos, ver el amanecer y crear memorias inolvidables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avances;
