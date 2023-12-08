import React, { useState, useEffect } from "react";
import TRSwiper from "@/components/core/Swiper/Swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsImages } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";

import lote1 from "../../../assets/galerialotes/lote1.jpeg";
import lote2 from "../../../assets/galerialotes/lote2.jpeg";
import lote3 from "../../../assets/galerialotes/lote3.jpeg";
import lote4 from "../../../assets/galerialotes/lote4.jpeg";
import lote5 from "../../../assets/galerialotes/lote5.jpeg";
import lote6 from "../../../assets/galerialotes/lote6.jpeg";
import lote7 from "../../../assets/galerialotes/lote7.jpeg";
import lote8 from "../../../assets/galerialotes/lote8.jpeg";
import lote9 from "../../../assets/galerialotes/lote9.jpeg";
import lote10 from "../../../assets/galerialotes/lote10.jpeg";
import lote11 from "../../../assets/galerialotes/lote11.jpeg";
import lote12 from "../../../assets/galerialotes/lote12.jpeg";

// import required modules
import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Navigation]);

const ICON_SIZE = 24;

const TRGallery = () => {
  const [toggleGallery, setToggleGallery] = useState(true);

  const galleryLotes = [
    lote1,
    lote2,
    lote3,
    lote4,
    lote5,
    lote6,
    lote7,
    lote8,
    lote9,
    lote10,
    lote11,
    lote12,
  ].map((img, id) => ({ id: id + 1, img }));

  return (
    <div className="galery_container">
      <div className="coment_div">
        <p className="bold mediumText comentarios">Galería interactiva</p>
      </div>
      <div className="content">
        {toggleGallery && galleryLotes ? (
          <div className="swiper_container">
            <TRSwiper data={galleryLotes} />
          </div>
        ) : (
          <div className="video_container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mjz6o_cwL7E"
              title="Proyecto Bosque Alto - Recorrido 3D"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="buttons_options">
        <div className="buttons_container">
          <label
            className={`buttons  ${toggleGallery ? "active" : "disabled"}`}
            onClick={() => setToggleGallery(true)}
          >
            <BsImages size={ICON_SIZE} />
            <p className={`semiBold`}>Fotos</p>
          </label>
          <label
            className={`buttons  ${!toggleGallery ? "active" : "disabled"}`}
            onClick={() => setToggleGallery(false)}
          >
            <MdOutlineOndemandVideo size={ICON_SIZE} />
            <p className="semiBold">Video</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TRGallery;
