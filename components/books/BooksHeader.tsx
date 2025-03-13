"use client";

import Link from "next/link";
import { useState } from "react";
import BooksFilters from "../popups/BooksFilters";

const BooksHeader = () => {
  const [openFilters, setOpenFilters] = useState(false);
  return (
    <div className="w-full relative">
      {openFilters && <BooksFilters setOpenFilters={setOpenFilters} />}

      <svg
        className="w-full h-auto"
        viewBox="0 0 1810 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1810V158.628C1810 158.628 1259.67 174.973 906.885 175C552.628 175.027 0 158.628 0 158.628V0Z"
          fill="#E55604"
          fillOpacity="0.2"
        />
      </svg>

      {/* buttons */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 sm:p-[2.76px] bg-white rounded-2xl sm:rounded-[20.69px] border border-[#f1f1f2] flex flex-col sm:flex-row items-center gap-2 sm:gap-[2.76px]">
        <div className="w-[322.70px] h-[70.33px] p-[2.76px] bg-white rounded-[20.69px] border border-[#f1f1f2] justify-start items-center gap-[2.76px] inline-flex">
          <Link
            href="/books"
            className="w-[317.19px] h-[64.82px] px-[24.82px] py-[16.55px] bg-[#e55604] rounded-[17.93px] justify-center items-center gap-[20.69px] flex"
          >
            <div className="text-center text-white text-xl font-medium font-['SST Arabic'] leading-7 tracking-tight">
              الكتب
            </div>
            <div data-svg-wrapper className="relative">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7527 5.44369C17.793 4.52495 15.5969 4.52495 13.6372 5.44369L4.4097 9.76976C2.92581 10.4654 2.53893 12.4271 3.24906 13.783L3.24906 20.614C3.24906 21.1852 3.71214 21.6483 4.28337 21.6483C4.8546 21.6483 5.31767 21.1852 5.31767 20.614V15.3349L13.6373 19.2354C15.597 20.1541 17.7931 20.1541 19.7528 19.2354L28.9803 14.9093C30.9875 13.9683 30.9875 10.7108 28.9804 9.76983L19.7527 5.44369Z"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  d="M7.0415 16.1431L13.6373 19.2353C15.597 20.1541 17.7931 20.1541 19.7528 19.2353L26.3485 16.1431V23.5448C26.3485 24.9349 25.6542 26.2365 24.438 26.9099C22.4131 28.0314 19.1718 29.5777 16.695 29.5777C14.2182 29.5777 10.977 28.0314 8.95198 26.9099C7.73587 26.2365 7.0415 24.9349 7.0415 23.5448V16.1431Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* search */}
      <div className="h-[72px] absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-start items-center gap-[15.90px] inline-flex">
        <div className="cursor-pointer" onClick={() => setOpenFilters(true)}>
          <svg
            width="86"
            height="86"
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
                fillRule="evenodd"
                clipRule="evenodd"
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
        <div className="pl-6 pr-[28.17px] pt-[16.26px] pb-[17.58px] bg-white rounded-[31.80px] shadow-[0px_4.76986837387085px_6.3598246574401855px_0px_rgba(0,0,0,0.03)] border-2 border-[#f1f1f2] justify-start items-center gap-[379.66px] flex overflow-hidden">
          <div className="relative">
            <svg
              width="40"
              height="39"
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
          <div className="text-right text-[#8d8d8d] text-base font-normal font-['SST Arabic'] leading-loose tracking-tight">
            محتاج تذاكر ايه انهاردة ....
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksHeader;
