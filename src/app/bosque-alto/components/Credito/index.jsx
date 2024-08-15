import React, { useEffect } from "react";
import Image from "next/image";
import manos from "../../assets/manos.png";
import casa from "../../assets/casa.png";
import hoja from "../../assets/hoja.png";
import credito from "../../assets/credito.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const Credito = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="credito">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={credito}
        alt="recorrido del proyecto"
      />
      <div className="green_area">
        <div className="area_cards" data-aos="fade-left">
          <div className="areas yellow">
            <div className="icon_container_hoja">
              <Image
                className="img_hoja"
                width={100}
                height={100}
                src={hoja}
                alt="casa"
              />
            </div>
            <p className="areas_text_ofrece">
              <strong>
                Más de 5000 arboles frutales para los propietarios,
              </strong>{" "}
              a 5 minutos de la Laguna Encantada y a 20 minutos de la ciudad de
              Huacho.
            </p>
          </div>
          <div className="areas green">
            <div className="icon_container_casa">
              <Image
                className="img_casa"
                width={100}
                height={100}
                src={casa}
                alt="hoja"
              />
            </div>
            <p className="areas_text_ofrece">
              <strong>
                Piscina para adultos y niños, baños termales, salón de
                recepciones, campo de fútbol,
              </strong>{" "}
              estacionamiento, zona de parrillas, restaurantes, juegos para
              niños, cerco perimétrico y pórtico de ingreso.
            </p>
          </div>
        </div>

        <div className="credito_text">
          <Image
            className="manos"
            width={60}
            height={60}
            src={manos}
            alt="manos"
          />
          <p>Crédito directo y a sola FIRMA</p>
        </div>
      </div>
    </section>
  );
};

export default Credito;
