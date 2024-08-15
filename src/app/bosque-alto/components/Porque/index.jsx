import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import porque from "../../assets/porque.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const Porque = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="porque">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={porque}
        alt="visita proyecta"
      />
      <div className="porque_content" data-aos="fade-right">
        <h3>¿POR QUÉ COMPRAR EN BOSQUE ALTO?</h3>
        <p>
          Tenemos todos nuestros terrenos registrados en Sunarp, con servicios
          básicos de agua, luz y desagüe instalados, además de contar con los
          precios y opciones de financiamiento más competitivos del mercado.
        </p>
        <button>
          <FaArrowCircleRight />
          <p className="asesoria">ASESORAMIENTO AHORA</p>
        </button>
        <p className="notallowed">
          No dejes pasar esta oportunidad, conoce más de nosotros. ¡Agenda su
          visita a nuestras oficinas y sé el próximo propietario de este
          increible lugar natural!
        </p>
      </div>
    </section>
  );
};

export default Porque;
