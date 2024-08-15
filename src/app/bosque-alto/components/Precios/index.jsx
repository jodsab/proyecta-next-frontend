import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import precios from "../../assets/precios.jpg";
import m2 from "../../assets/m2.png";
import "aos/dist/aos.css";

import "./styles.scss";

const MEDIDAS = [
  {
    id: 1,
    lote: "100",
    precio: "7,500",
  },
  {
    id: 2,
    lote: "180",
    precio: "12,500",
  },
  {
    id: 3,
    lote: "200",
    precio: "14,999",
  },
  {
    id: 4,
    lote: "250",
    precio: "21,500",
  },
  {
    id: 5,
    lote: "1,000",
    precio: "75,000",
  },
];

const Precios = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="precios">
      <Image
        className="img_portada"
        width={800}
        height={800}
        src={precios}
        alt="precios del proyecto"
      />
      <div className="blue_area" data-aos="fade-left">
        <ul>
          {MEDIDAS.map((medida) => {
            return (
              <li key={medida.id}>
                <div className="metrajes_precios">
                  <Image
                    className="m2_icon"
                    width={50}
                    height={50}
                    src={m2}
                    alt="metraje de casa"
                  />
                  <div className="lotes">
                    <p className="lote">LOTE DE</p>
                    <p className="medida">{medida.lote} m2</p>
                  </div>
                  <div className="contado">
                    <p className="text">Al contado:</p>
                    <p className="price">s/{medida.precio}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Precios;
