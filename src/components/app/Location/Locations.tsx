import React, { useState } from "react";
import { FaWaze } from "react-icons/fa";
import { TfiMapAlt } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { GiForestCamp } from "react-icons/gi";
import "./styles.scss";

const ICON_SIZE = 24;
const SVG_ICONS = 25;
const WAZE_BASE_URL = "https://waze.com/ul";

const TRLocation = () => {
  const [toggleLocation, setToggleLocation] = useState(true);
  return (
    <div className="trlocation_container">
      <div className="location">
        <p className="bold mediumText title_location">¡UBICACIÓN PERFECTA!</p>
      </div>
      <div className="buttons_options">
        <div className="buttons_container">
          <label
            className={`buttons  ${toggleLocation ? "active" : "disabled"}`}
            onClick={() => setToggleLocation(true)}
          >
            <BsBuildings size={ICON_SIZE} />
            <p className={`semiBold`}>Oficinas</p>
          </label>
          <label
            className={`buttons  ${!toggleLocation ? "active" : "disabled"}`}
            onClick={() => setToggleLocation(false)}
          >
            <GiForestCamp size={ICON_SIZE} />
            <p className="semiBold">Lotes</p>
          </label>
        </div>
      </div>
      <div className="map_container">
        <iframe
          src={
            toggleLocation
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5516.862184775248!2d-76.9932687640077!3d-12.111422442449285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7403a8cd151%3A0x9811fa9f1a7dab1b!2sProyecta%20Innova%20Trasciende%20Sac!5e0!3m2!1ses-419!2spe!4v1684968948292!5m2!1ses-419!2spe"
              : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3914.491887888356!2d-77.5039181!3d-11.1511697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106e16cff8be89d%3A0xe7d0cf855130c659!2sBosque%20Alto%20El%20Progreso!5e0!3m2!1ses!2spe!4v1696281520910!5m2!1ses!2spe"
          }
          className="iframe_map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="direction_buttons">
        <a
          className="flexAlign button"
          href={
            toggleLocation
              ? `${WAZE_BASE_URL}?ll=-12.1114224,-76.9932688&navigate=yes`
              : `${WAZE_BASE_URL}?ll=-11.1511697,-77.5039181,17&navigate=yes`
          }
          target="_blank"
        >
          <FaWaze size={SVG_ICONS} />
          <p className="bold">Ir con Waze</p>
        </a>
        <a
          className="flexAlign button"
          href={
            toggleLocation
              ? "https://maps.google.com/maps?daddr=-12.1114224,-76.9932688"
              : "https://maps.google.com/maps?daddr=-11.1511697,-77.5039181"
          }
          target="_blank"
        >
          <TfiMapAlt size={SVG_ICONS} />
          <p className="bold">Ir con Maps</p>
        </a>
      </div>
    </div>
  );
};

export default TRLocation;
