// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import cliente1 from "./assets/F1.jpg";
import cliente2 from "./assets/F2.jpg";
import cliente3 from "./assets/F3.jpg";
import cliente4 from "./assets/F4.jpg";
import cliente5 from "./assets/F5.jpg";
import cliente6 from "./assets/F6.jpg";
import cliente7 from "./assets/F7.jpg";
import cliente8 from "./assets/F8.jpg";

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
      className="img_swiperfamily"
      src={src}
      width={500}
      height={500}
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
    cliente8,
  ].map((img, id) => ({ id: id + 1, img }));
  return (
    <div className="trcomentarios_container">
      <p className="bigText bold joinus">¡Únete a nuestra familia!</p>
      <div className="mobile_swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
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
      <div className="desktop_swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
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

    </div>
  );
};

export default TRFamilys;
