"use client";

import React from "react";
import "swiper/css";

const BookImageSwiper = ({ image }: { image: string | undefined }) => {
  return (
    <div className="w-full h-full relative" dir="rtl">
      <div className="w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-[#8c9ec5]/20 to-[#8c9ec5]/40 rounded-[25px] md:rounded-[50px] shadow-lg border border-[#f1f1f2] relative flex justify-center items-center overflow-hidden">
          <div className="absolute top-4 right-4 w-8 md:w-10 h-[35px] md:h-[45px] z-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path
                opacity="0.6"
                d="M5.90898 4.16665C6.29072 3.78169 6.82668 3.5307 7.83879 3.39347C8.88065 3.25222 10.2615 3.25 12.2414 3.25H17.7586C19.7385 3.25 21.1193 3.25222 22.1612 3.39347C23.1733 3.5307 23.7093 3.78169 24.091 4.16665C24.4728 4.55162 24.7217 5.09211 24.8577 6.11276C24.9978 7.16341 25 8.55592 25 10.5525L25 23.25H9.28247C7.92795 23.25 7.4544 23.2572 7.09151 23.3352C6.44977 23.4732 5.89188 23.7689 5.48513 24.1684C5.34797 24.3031 5.27938 24.3704 5.12119 24.7997C5.03044 25.0459 5 25.2108 5 25.3754V10.5525C5 8.55592 5.0022 7.16341 5.14227 6.11276C5.27835 5.09211 5.52724 4.55162 5.90898 4.16665Z"
                fill="white"
              />
              <path
                d="M25 23.25H9.28247C7.92795 23.25 7.4544 23.2572 7.09151 23.3352C6.44977 23.4732 5.89188 23.7689 5.48513 24.1684C5.34797 24.3031 5.27938 24.3704 5.12119 24.7997C4.96301 25.2289 4.98806 25.411 5.03817 25.7751C5.04701 25.8393 5.05653 25.902 5.06679 25.9632C5.20339 26.7785 5.45324 27.2103 5.83645 27.5178C6.21967 27.8253 6.75769 28.0258 7.7737 28.1354C8.81958 28.2482 10.2057 28.25 12.1933 28.25H17.7318C19.7193 28.25 21.1055 28.2482 22.1513 28.1354C23.1673 28.0258 23.7054 27.8253 24.0886 27.5178C24.3381 27.3175 24.5311 27.0646 24.6731 26.6875H10C9.48223 26.6875 9.0625 26.2678 9.0625 25.75C9.0625 25.2322 9.48223 24.8125 10 24.8125H24.9692C24.9908 24.3585 24.9977 23.8427 25 23.25Z"
                fill="white"
              />
              <path
                d="M9.0625 9.5C9.0625 8.98223 9.48223 8.5625 10 8.5625H20C20.5178 8.5625 20.9375 8.98223 20.9375 9.5C20.9375 10.0178 20.5178 10.4375 20 10.4375H10C9.48223 10.4375 9.0625 10.0178 9.0625 9.5Z"
                fill="white"
              />
              <path
                d="M10 12.9375C9.48223 12.9375 9.0625 13.3572 9.0625 13.875C9.0625 14.3928 9.48223 14.8125 10 14.8125H16.25C16.7678 14.8125 17.1875 14.3928 17.1875 13.875C17.1875 13.3572 16.7678 12.9375 16.25 12.9375H10Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="relative w-[85%] md:w-[80%] h-[85%] md:h-[80%] transition-all duration-300 hover:scale-105">
            <img
              className="w-full h-full rounded-[15px] md:rounded-[25px] object-cover shadow-md transition-all duration-300"
              src={image || "https://placehold.co/361x504"}
              alt="Book cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-[15px] md:rounded-[25px] shadow-inner pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookImageSwiper;
