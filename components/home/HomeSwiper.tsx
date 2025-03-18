"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useAppSelector } from "@/libs/store/hooks";
import "swiper/css";
import "@/public/css/home.css";

interface BannerItem {
  image: string;
}

const HomeSwiper = () => {
  const { homeData } = useAppSelector((state) => state.home);

  return (
    <div className="w-full relative bg-white border-2 border-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] rounded-[clamp(10px,1.04166665vw,20px)] aspect-[2.62629/1] horizontal-swiper"
        pagination={{
          clickable: true,
          el: ".horizontal-swiper .swiper-pagination1",
          type: "bullets",
          bulletClass: "custom-bullet-horizontal",
          bulletActiveClass: "custom-bullet-horizontal-active",
          horizontalClass: "custom-bullet-horizontal-container",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {homeData?.banners?.map((item: BannerItem, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={item.image}
              alt={`News thumbnail ${index}`}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
        {/* custom bullets */}
        <div className="swiper-pagination1 !flex !justify-center absolute z-10 !bottom-[10px] !left-0 !right-0 !w-full !h-[10px] !gap-2" />
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
