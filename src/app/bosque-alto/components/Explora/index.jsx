import React from "react";
import Image from "next/image";
import clubhouse from "../../assets/clubhouse.jpg";
import casaconflechas from "../../assets/casa con flechas.png";
import logo from "../../assets/logo.png";

import "./styles.scss";

const Explora = () => {
  return (
    <section className="explora">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={clubhouse}
        alt="clubhouse del proyecto"
      />
      <div className="blue_area">
        <Image
          className="logo_portada"
          width={100}
          height={100}
          src={logo}
          alt="logo del proyecto"
        />
        <Image
          className="img_circle"
          width={100}
          height={100}
          src={clubhouse}
          alt="clubhouse del proyecto"
        />
        <div className="proyecto">
          <Image
            className="icon"
            width={60}
            height={60}
            src={casaconflechas}
            alt="icon de casa"
          />
          <p>EXPLORA NUESTRO PROYECTO:</p>
        </div>

        <div className="text">
          <p>
            Bosque Alto no es solo un lugar para vivir, sino un estilo de vida
            comprometido con la preservación del medio ambiente. Al elegir
            Bosque Alto, estás optando por un espacio que respeta la naturaleza
            y contribuye a un futuro más sostenible para las generaciones
            venideras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explora;
