// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import cliente1 from "../../../assets/galeriaclientes/cliente1.webp";
import cliente2 from "../../../assets/galeriaclientes/cliente2.webp";
import cliente3 from "../../../assets/galeriaclientes/cliente3.webp";
import cliente4 from "../../../assets/galeriaclientes/cliente4.webp";
import cliente5 from "../../../assets/galeriaclientes/cliente5.webp";
import cliente6 from "../../../assets/galeriaclientes/cliente6.webp";
import cliente7 from "../../../assets/galeriaclientes/cliente7.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "./styles.scss";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperFamily = ({ src }: any) => {
  return (
    <Image
      alt="swiper container"
      className="swiperfamily_container"
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      loading="lazy"
    />
  );
};

const TRFamilys = () => {
  const portadas = [];
  for (var i = 0; i < 5; i++) {
    portadas[i] = i + 1;
  }

  const galleryFamily = [
    cliente1,
    cliente2,
    cliente3,
    cliente4,
    cliente5,
    cliente6,
    cliente7,
  ].map((img, id) => ({ id: id + 1, img }));
  return (
    <div className="trcomentarios_container">
      <p className="bigText bold joinus">¡Únete a nuestra familia!</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Esto permite que el autoplay continúe incluso después de interactuar con el carrusel.
        }}
        className="mySwiper"
      >
        {galleryFamily?.map((gf, index) => (
          <SwiperSlide key={index}>
            <SwiperFamily src={gf.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TRFamilys;
