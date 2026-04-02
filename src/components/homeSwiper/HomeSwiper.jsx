import React from "react";
import "./homeSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import swiperImg from "../../assets/1.jpg";
import swiperImg2 from "../../assets/2.jpg";
import swiperImg3 from "../../assets/3.jpg";
import swiperImg4 from "../../assets/4.jpg";
import swiperBtn from "../../assets/button.svg";
import swiperBtn2 from "../../assets/button2.svg";

function HomeSwiper() {
  return (
    <div className="container">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiperNext",
          prevEl: ".swiperPrev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
      >
        <button className="swiperNext">
          <img src={swiperBtn} alt="swiperNextBtn" />
        </button>
        <button className="swiperPrev">
          <img src={swiperBtn2} alt="swiperPrevBtn" />
        </button>

        <SwiperSlide className="swiper-slide">
          <img src={swiperImg} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={swiperImg2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={swiperImg3} alt="slide3" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={swiperImg4} alt="slide4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
