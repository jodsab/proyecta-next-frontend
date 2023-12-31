import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { HiOutlineBookOpen } from "react-icons/hi";
import "./styles.scss";

const TRFooter = () => {
  return (
    <div className="trfooter_container content">
      <div className="logo_footer">
        <Image alt="logo" src={logo} />
      </div>
      <div>
        <p>¿Quieres estar al tanto de nuestras promociones?</p>
        <p>¡Suscríbete!</p>
        <div className="subscribe">
          <input placeholder="Escribe tu email aquí" />
          <button>
            <p className="bold mediumText">Suscribirme</p>
          </button>
        </div>

        <div className="book">
          <HiOutlineBookOpen size={35} />
          <p className="mediumText">Libro de reclamaciones</p>
        </div>
      </div>
    </div>
  );
};

export default TRFooter;
