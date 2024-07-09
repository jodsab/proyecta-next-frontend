import React from "react";
import Image from "next/image";
import TRForm from "@/components/app/Form/Form";
import portada from "../../assets/formulario.jpg";
import { FaLocationDot } from "react-icons/fa6";
import "./styles.scss";

const Formulario = () => {
  return (
    <div className="formulario_container">
      <Image className="form_portada" src={portada} alt="portada formulario" />
      <div className="white_screen"></div>

      <div className="area">
        <div className="flex_areas">
          <div className="info_area">
            <div className="circles">S/</div>
            <div className="text_area">
              <p className="top">AL MES DESDE</p>
              <p className="info">S/ 380</p>
            </div>
          </div>
          <div className="info_area">
            <div className="circles">S/</div>
            <div className="text_area">
              <p className="top">AL CONTADO DESDE</p>
              <p className="info">S/ 7,500</p>
            </div>
          </div>
          <div className="info_area">
            <div className="circles">
              <FaLocationDot />
            </div>
            <div className="text_area">
              <p className="top">SALA DE VENTAS</p>
              <p className="info ubicacion">
                AV. AREQUIPA 1860 - LINCE OFICINA 207- PISO 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
