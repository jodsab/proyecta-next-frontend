import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const TRSwiper = ({ data }) => {
  const handleSlideChange = (swiper) => {
    // Puedes hacer lo que quieras con el índice de la diapositiva activa
  };

  const ArrData = data?.map((slide: any, index: number) => {
    return (
      <SwiperSlide key={index}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image src={slide.img.src} alt="image" width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} loading="lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {
          ArrData
        }

      </Swiper>
    </>
  );
}

export default TRSwiper;