import React from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import portada from "../../assets/portada.jpeg";
import { FaFileSignature, FaArrowAltCircleRight } from "react-icons/fa";
import "./styles.scss";

const Portada = () => {
  return (
    <div className="portada__container">
      <div className="portada__absolute">
        <Image src={portada} alt="Bosque Alto Portada" />
        <div className="black_screen"></div>
        <div className="portada_elements">
          <div className="title">
            <h2 className="montserrat">¡NUEVO LANZAMIENTO!</h2>
            <h1>Bosque Alto el Progreso</h1>
          </div>

          <div className="bottomText">
            <FaFileSignature size={40} />
            <p>CRÉDITO DIRECTO A SOLA FIRMA</p>
          </div>
          <Link
            className="actionButton"
            activeClass="active"
            to="proyectos"
            smooth
            spy
            duration={500}
            offset={-80}
          >
            <p>MÁS INFORMACIÓN</p>
            <FaArrowAltCircleRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portada;
