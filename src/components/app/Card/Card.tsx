import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiBadgeCheck } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./styles.scss";

const SVGSIZE = 25;
const BIGSVGSIZE = 26;

const TRCard = () => {
  return (
    <div className="trcard_container content">
      <div className="card_container">
        <div className="card_header">
          <div className="flexAlign iconText primaryColor">
            <BiBadgeCheck size={BIGSVGSIZE} />
            <p className="bold">Entrega final Diciembre 2024</p>
          </div>
        </div>
        <div className="card_body">
          <div className="flex_body_left">
            <div>
              <p className="semiBold bigText">CONDOMINIO CAMPESTRE</p>
              <p className="bold bigText">BOSQUE ALTO</p>
            </div>
            <div className="descuento">
              <p>
                Descuento de hasta <strong>30%</strong> por pago al contado
              </p>
            </div>
          </div>
        </div>
        <div className="social_icons">
          <p className="visit_us">Visítanos!</p>
          <div className="icons_container">
            <a href="https://www.facebook.com/proyectainnovatr" target="_blank">
              <AiFillFacebook size={SVGSIZE} />
            </a>
            <a
              href="https://www.instagram.com/proyectainnovatr_/"
              target="_blank"
            >
              <AiOutlineInstagram size={SVGSIZE} />
            </a>
            <a href="https://www.tiktok.com/@proyecta.innova.t" target="_blank">
              <FaTiktok size={SVGSIZE} />
            </a>
            <a href="https://www.facebook.com/proyectainnovatr" target="_blank">
              <BsWhatsapp size={SVGSIZE} />
            </a>
            <a
              href="https://www.youtube.com/@ProyectaInnovaTrInmobiliaria"
              target="_blank"
            >
              <AiFillYoutube size={SVGSIZE} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRCard;
