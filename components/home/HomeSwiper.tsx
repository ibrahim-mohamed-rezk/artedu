"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <div className="w-full  h-[500px] lg:h-[578px] relative bg-white rounded-[25px] border-2 border-white overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full horizontal-swiper"
        navigation={{
          nextEl: ".horizontal-swiper .swiper-button-next",
          prevEl: ".horizontal-swiper .swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".horizontal-swiper .swiper-pagination1",
          type: "bullets",
          bulletClass: "custom-bullet-horizontal",
          bulletActiveClass: "custom-bullet-horizontal-active",
          horizontalClass: "custom-bullet-horizontal",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* {blogs.map((item, index) => ( */}
          <SwiperSlide  >
            <img
              className="w-full h-full object-cover"
              // src={item.image}
              alt="News thumbnail"
            />
          </SwiperSlide>
        {/* ))} */}
        <div className="swiper-pagination1 !flex !justify-center absolute z-10 !bottom-[10px] !left-0 !right-0 !w-full !h-[10px] !gap-2" />
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
