"use client";
import React from "react";
import Image from "next/image";
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import persona from "./assets/persona.png";
import "./styles.scss";

const RI_SIZE = 40;

const Ubicacion = () => {
  return (
    <div className="ubicacion_container">
      <div className="iframe_container_desktop">
        <Image className="img_absolute" src={persona} alt="persona img" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.3466636587557!2d-77.03593480125777!3d-12.083109743368734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f521e038d5%3A0x6e0b19422c64e9ec!2sAv.%20Arequipa%201860%2C%20Lince%2015046!5e0!3m2!1ses-419!2spe!4v1720541590473!5m2!1ses-419!2spe"
          className="iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="ubicacion_info">
        <div className="title anton">
          <span className="blue anton">LLEGAR A NUESTRAS OFICINAS ES </span>
          <span className="green anton"> ¡FACIL!</span>
        </div>
        <div className="iframe_container_mobile">
          <Image className="img_absolute" src={persona} alt="persona img" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.3466636587557!2d-77.03593480125777!3d-12.083109743368734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f521e038d5%3A0x6e0b19422c64e9ec!2sAv.%20Arequipa%201860%2C%20Lince%2015046!5e0!3m2!1ses-419!2spe!4v1720541590473!5m2!1ses-419!2spe"
            className="iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="icons">
          <div className="spaces">
            <div className="icon_container first">
              <FaLocationDot size={RI_SIZE} />
            </div>

            <p className="fullBlue anton">SALA DE VENTAS</p>
            <p className="leftText">
              AV. AREQUIPA 1860 - LINCE OFICINA 207- PISO 2
            </p>
          </div>
          <div className="spaces">
            <div className="icon_container second">
              <FaCalendarDays size={RI_SIZE} />
            </div>

            <p className="fullBlue anton">HORARIO DE ATENCIÓN</p>
            <p className="rightText">LUNES A SÁBADO DE 10:OO AM A 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
