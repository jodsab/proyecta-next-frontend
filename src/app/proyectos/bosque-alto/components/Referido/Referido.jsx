import React from "react";
import Image from "next/image";
import referido from "../../assets/referido.png";
import "./styles.scss";

const Referido = () => {
  return (
    <div className="referido_container">
      <div className="referido_content">
        <h3 className="title bold">
          TRAE TU REFERIDO Y GANA CON <span className="blus">#PROYECTA</span>
        </h3>
        <div className="blue_area">
          <span className="text">
            <span className="bold">Si ya eres propietario,</span> recomienda un
            proyecto a tus amigos o familiares, por cada lote que adquieran.
          </span>
          <p className="money bold">GANARAS S/500</p>
          <p className="reclama bold">¡RECLAMA TU PREMIO EN EFECTIVO!</p>
        </div>
        <p className="how">¿CÓMO LO HAGO?</p>
      </div>
      <div className="referido_img_container">
        <Image src={referido} alt="referido" />
      </div>
    </div>
  );
};

export default Referido;
