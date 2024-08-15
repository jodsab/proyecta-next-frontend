import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiBadgeCheck } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
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
              <p className="semiBold mediumText">CONDOMINIO CAMPESTRE</p>
              <Link className="btn_bosque_alto" href='/bosque-alto'><p className="bold bigText">BOSQUE ALTO</p></Link>
            </div>
            <div className="descuento">
              <p>
                Descuento de hasta <strong>30%</strong> por pago al contado de lotes de 200m2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRCard;
