"use client";

import Link from "next/link";
import QuestionsBankFilters from "../popups/QuestionsBankFilters";
import { useState } from "react";

const QuestionsBankHeader = () => {
  const [openFilters, setOpenFilters] = useState(false);
  return (
    <div className="w-full relative">
      {openFilters && <QuestionsBankFilters setOpenFilters={setOpenFilters} />}

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
      <div className="absolute top-[95px] sm:top-[110px] md:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[2.76px] bg-white rounded-[10px] md:rounded-[20.69px] border border-[#f1f1f2] w-[95%] md:w-auto flex flex-row items-center gap-2 sm:gap-[2.76px]">
        <div className="w-full md:w-auto px-[24.82px] py-[16.55px] bg-[#e55604] rounded-[10px] md:rounded-[17.93px] flex justify-center items-center gap-[6.90px]">
          <div className="text-center text-white text-lg sm:text-xl font-medium font-sst-arabic leading-7 tracking-tight">
            <Link href="/questionsBanck">بنك الاسئلة</Link>
          </div>
          <div data-svg-wrapper className="relative w-6 h-6 sm:w-8 sm:h-8">
            <svg
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-[34px] sm:h-[34px]"
            >
              <path
                opacity="0.5"
                d="M17.0261 28.2379V25.4408H11.5098L11.5098 28.2379C11.5098 28.6201 11.5098 28.8112 11.6406 28.8885C11.7714 28.9657 11.9503 28.8803 12.3081 28.7093L14.0212 27.8909C14.1423 27.8331 14.2028 27.8042 14.2679 27.8042C14.333 27.8042 14.3936 27.8331 14.5146 27.8909L16.2277 28.7093C16.5855 28.8803 16.7644 28.9657 16.8952 28.8885C17.0261 28.8112 17.0261 28.6201 17.0261 28.2379Z"
                fill="white"
              />
              <path
                d="M11.5095 25.4408H10.7178C9.22344 25.4408 8.701 25.4487 8.30064 25.5348C7.59264 25.687 6.97714 26.0133 6.52839 26.454C6.37706 26.6026 6.3014 26.6769 6.12687 27.1505C5.95235 27.624 5.97999 27.8249 6.03527 28.2266C6.04503 28.2974 6.05553 28.3666 6.06685 28.4342C6.21755 29.3336 6.4932 29.81 6.91599 30.1492C7.33877 30.4885 7.93235 30.7097 9.05327 30.8306C10.2071 30.9551 11.7364 30.9571 13.9292 30.9571H20.0396C22.2323 30.9571 23.7616 30.9551 24.9155 30.8306C26.0364 30.7097 26.63 30.4885 27.0528 30.1492C27.4756 29.81 27.7512 29.3336 27.9019 28.4342C28.0285 27.6787 28.0534 26.7228 28.0583 25.4408H17.0257V28.2379C17.0257 28.6201 17.0257 28.8112 16.8949 28.8885C16.7641 28.9657 16.5852 28.8803 16.2274 28.7093L14.5143 27.8909C14.3932 27.8331 14.3327 27.8042 14.2676 27.8042C14.2025 27.8042 14.142 27.8331 14.0209 27.8909L12.3078 28.7093C11.95 28.8803 11.7711 28.9657 11.6403 28.8885C11.5095 28.8112 11.5095 28.6201 11.5095 28.2379V25.4408Z"
                fill="white"
              />
              <path
                opacity="0.5"
                d="M6.996 4.38695C7.41716 3.96223 8.00847 3.68532 9.12508 3.53393C10.2745 3.37809 11.7979 3.37564 13.9823 3.37564H20.0692C22.2535 3.37564 23.777 3.37809 24.9264 3.53393C26.043 3.68532 26.6343 3.96223 27.0555 4.38695C27.4766 4.81166 27.7512 5.40796 27.9014 6.534C28.0559 7.69315 28.0583 9.22944 28.0583 11.4322L28.0583 25.4408H10.7178C9.22344 25.4408 8.701 25.4487 8.30064 25.5348C7.59264 25.687 6.97714 26.0133 6.52839 26.454C6.37706 26.6026 6.3014 26.6769 6.12687 27.1505C6.02675 27.4222 5.99316 27.6041 5.99316 27.7857V11.4322C5.99316 9.22944 5.99559 7.69315 6.15013 6.534C6.30025 5.40796 6.57484 4.81166 6.996 4.38695Z"
                fill="white"
              />
              <path
                d="M10.4751 10.271C10.4751 9.69977 10.9382 9.23669 11.5094 9.23669H22.542C23.1132 9.23669 23.5763 9.69977 23.5763 10.271C23.5763 10.8422 23.1132 11.3053 22.542 11.3053H11.5094C10.9382 11.3053 10.4751 10.8422 10.4751 10.271Z"
                fill="white"
              />
              <path
                d="M11.5094 14.0634C10.9382 14.0634 10.4751 14.5265 10.4751 15.0978C10.4751 15.669 10.9382 16.1321 11.5094 16.1321H18.4048C18.976 16.1321 19.4391 15.669 19.4391 15.0978C19.4391 14.5265 18.976 14.0634 18.4048 14.0634H11.5094Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-auto px-4 sm:px-[24.82px] py-3 sm:py-[16.55px] bg-[#fffefe] rounded-xl sm:rounded-[17.93px] flex justify-center items-center">
          <div className="text-center text-[#8d8d8d] text-lg sm:text-xl font-medium font-sst-arabic leading-6 sm:leading-7 tracking-tight">
            <Link href="/courses">الكورسات</Link>
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
            placeholder="...ابحث عن الاسئلة"
            className="text-right w-full md:w-[400px] text-[#8d8d8d] text-base font-normal font-sst-arabic leading-loose tracking-tight flex-grow px-4 sm:text-sm md:text-xs lg:text-sm outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionsBankHeader;
