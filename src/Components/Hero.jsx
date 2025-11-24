import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import { SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div>
      <Swiper
        className="w-full"
        spaceBetween={20}
        autoplay={true}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation,Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div>
            <img
              className="w-full rounded-md h-60 md:h-100"
              src="https://i.ibb.co.com/TD5dSZRn/painting.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full rounded-md h-60 md:h-100"
              src="https://i.ibb.co.com/1fmLbY4L/painting-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full rounded-md h-60 md:h-100"
              src="https://i.ibb.co.com/XZcMbD2h/painting-2.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
