"use client";

import Link from "next/link";
import { useState } from "react";
import CourseFilters from "../popups/CourseFilters";

const CourseHeader = () => {
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      {openFilters && <CourseFilters setOpenFilters={setOpenFilters} />}

      <svg
        className="w-full h-auto md:min-h-[120px]"
        viewBox="0 0 1810 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1810V158.628C1810 158.628 1259.67 174.973 906.885 175C552.628 175.027 0 158.628 0 158.628V0Z"
          fill="#E55604"
          fillOpacity="0.2"
        />
      </svg>

      {/* buttons */}
      <div className="absolute top-[95px] sm:top-[110px] md:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[2.76px] bg-white rounded-[10px] md:rounded-[20.69px] border border-[#f1f1f2] w-[95%] md:w-auto flex flex-row items-center gap-[2px]">
        <div className="w-full md:w-auto px-[22.07px] py-[16.55px] bg-white rounded-[10px] md:rounded-[17.93px] flex justify-center items-center">
          <div className="text-center text-[#8d8d8d] text-lg sm:text-xl font-medium font-['SST Arabic'] leading-7 tracking-tight">
            <Link href="/QuestionsBanck">بنك الاسئلة</Link>
          </div>
        </div>
        <div className="w-full md:w-auto px-[24.82px] py-[16.55px] bg-[#e55604] rounded-[10px] md:rounded-[17.93px] flex justify-center items-center gap-[6.90px]">
          <div className="text-center text-white text-lg sm:text-xl font-medium font-['SST Arabic'] leading-7 tracking-tight">
            <Link href="/courses">الكورسات</Link>
          </div>
          <div data-svg-wrapper className="relative">
            <svg
              className="w-8 h-8 sm:w-[34px] sm:h-[34px]"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.52832 17.1663C3.52832 15.4608 3.52832 13.979 3.56479 12.6844H31.0733C31.1098 13.979 31.1098 15.4608 31.1098 17.1663C31.1098 23.6673 31.1098 26.9179 29.0902 28.9375C27.0706 30.9571 23.8201 30.9571 17.319 30.9571C10.818 30.9571 7.56753 30.9571 5.54792 28.9375C3.52832 26.9179 3.52832 23.6673 3.52832 17.1663Z"
                fill="white"
              />
              <path
                d="M21.4564 20.614C21.4564 19.7406 20.5434 19.1515 18.7175 17.9734C16.8666 16.7792 15.9412 16.1821 15.2511 16.6205C14.561 17.0589 14.561 18.2439 14.561 20.614C14.561 22.9841 14.561 24.1691 15.2511 24.6076C15.9412 25.046 16.8667 24.4489 18.7175 23.2546C20.5434 22.0765 21.4564 21.4875 21.4564 20.614Z"
                fill="white"
              />
              <path
                d="M17.3189 3.37561C19.8636 3.37561 21.9103 3.37561 23.58 3.49673L18.834 10.6158H12.3562L17.183 3.37561H17.3189Z"
                fill="white"
              />
              <path
                d="M5.54781 5.39522C7.27491 3.66811 9.90219 3.41797 14.6927 3.38175L9.87002 10.6158H3.67188C3.87494 8.18296 4.36503 6.578 5.54781 5.39522Z"
                fill="white"
              />
              <path
                d="M30.966 10.6158C30.7629 8.18296 30.2728 6.578 29.09 5.39522C28.2663 4.57146 27.2378 4.0837 25.8674 3.79489L21.3202 10.6158H30.966Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* search */}
      <div className="w-[95%] mx-auto md:w-auto absolute top-[170px] sm:top-[190px] md:top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-start items-center gap-[8px] md:gap-[15px] inline-flex">
        <div onClick={() => setOpenFilters(true)} className="cursor-pointer">
          <svg
            className="w-[55px] h-[55px] md:w-[86px] md:h-[86px]"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_780_3302)">
              <rect
                x="7"
                y="2"
                width="72"
                height="72"
                rx="31.7991"
                fill="white"
                shape-rendering="crispEdges"
              />
              <rect
                x="7.79498"
                y="2.79498"
                width="70.41"
                height="70.41"
                rx="31.0041"
                stroke="#F1F1F2"
                stroke-width="1.58996"
                shape-rendering="crispEdges"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.6526 23.6904H51.3471L39.2026 39.8831C39.0122 39.2225 38.7069 38.6554 38.2747 38.1551C38.003 37.8406 37.6236 37.5558 36.8647 36.9862L33.391 34.379C32.2599 33.53 31.6943 33.1055 31.3848 32.4215C31.0752 31.7376 31.0752 30.9125 31.0752 29.2624V28.1656C31.0752 26.056 31.0752 25.0012 31.5991 24.3458C32.123 23.6904 32.9662 23.6904 34.6526 23.6904Z"
                fill="#E55604"
              />
              <path
                opacity="0.5"
                d="M54.9241 29.2624V28.1656C54.9241 26.056 54.9241 25.0012 54.4002 24.3458C53.8763 23.6904 53.0331 23.6904 51.3467 23.6904L39.2021 39.8831C39.261 40.0874 39.3089 40.3006 39.3462 40.5235C39.422 40.9768 39.422 41.5071 39.422 42.5678L39.422 46.8122C39.422 48.2583 39.422 48.9814 39.7224 49.5451C40.0228 50.1088 40.5564 50.3869 41.6235 50.9431C43.8637 52.1108 44.9838 52.6946 45.7803 52.0304C46.5768 51.3661 46.5768 49.8481 46.5768 46.8122V42.5678C46.5768 41.5071 46.5768 40.9768 46.6526 40.5235C46.8104 39.5796 47.1588 38.8101 47.7245 38.1551C47.9962 37.8406 48.3757 37.5558 49.1346 36.9862L52.6083 34.379C53.7394 33.53 54.305 33.1055 54.6145 32.4215C54.9241 31.7376 54.9241 30.9125 54.9241 29.2624Z"
                fill="#E55604"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_780_3302"
                x="0.640175"
                y="0.410044"
                width="84.7196"
                height="84.7196"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4.76987" />
                <feGaussianBlur stdDeviation="3.17991" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_780_3302"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_780_3302"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pl-6 pr-[28.17px] py-[5px] md:py-[16px] bg-white rounded-[15px] md:rounded-[31px] shadow-[0px_4.76986837387085px_6.3598246574401855px_0px_rgba(0,0,0,0.03)] border-2 border-[#f1f1f2] justify-between items-center flex overflow-hidden w-full max-w-[500px] sm:max-w-full">
          <div className="relative">
            <svg
              className="w-[20px] h-[20px] sm:w-8 sm:h-8 md:w-10 md:h-10"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M33.213 17.9979C33.213 26.0384 26.6948 32.5565 18.6543 32.5565C10.6138 32.5565 4.0957 26.0384 4.0957 17.9979C4.0957 9.95739 10.6138 3.43927 18.6543 3.43927C26.6948 3.43927 33.213 9.95739 33.213 17.9979Z"
                fill="#E55604"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.8689 30.212C31.3177 29.7632 32.0455 29.7632 32.4943 30.212L35.5593 33.277C36.0081 33.7259 36.0081 34.4536 35.5593 34.9025C35.1104 35.3513 34.3827 35.3513 33.9338 34.9025L30.8689 31.8375C30.42 31.3886 30.42 30.6609 30.8689 30.212Z"
                fill="#E55604"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="...ابحث عن الكورسات"
            className="text-right w-full md:w-[400px] text-[#8d8d8d] text-base font-normal font-['SST Arabic'] leading-loose tracking-tight flex-grow px-4 sm:text-sm md:text-xs lg:text-sm outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
