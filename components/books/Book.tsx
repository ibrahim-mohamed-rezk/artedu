"use client";

import React, { useEffect, useState } from "react";
import BookImageSwiper from "./BookImageSwiper";
import TeacherBooks from "./TeacherBooks";
import { useParams } from "next/navigation";
import { getData } from "@/libs/axios/backendServer";

interface Book {
  image: string;
  name: string;
  author: string;
  price: number;
  teacher: string;
  description: string;
  subject: string;
  teacherImage: string;
}

const Book = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const getBook = async () => {
      const response = await getData(`book/show/${bookId}`);
      setBook(response.data);
    };

    getBook();
  }, [bookId]);

  return (
    <div className="w-[95%] mx-auto md:w-[clamp(100px,79.0625vw,30000px)] mt-[30px] md:mt-[60px] px-4 md:px-0">
      <div className="w-full mx-auto">
        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-5 md:gap-[30px]">
            <div className="w-full lg:w-[clamp(100px,22.6041668vw,1000px)] aspect-[.723/1]">
              <BookImageSwiper image={book?.image} />
            </div>
            <div className="w-full lg:w-[clamp(100px,56.40625vw,3000px)] flex flex-col items-start justify-start">
              <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex justify-start items-center gap-4 md:gap-[26px] mt-4 lg:mt-0 order-2 lg:order-1">
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-[38px] md:h-[38px]"
                    >
                      <path
                        d="M3.50977 14.1532C3.50977 21.6858 9.73578 25.6997 14.2933 29.2926C15.9016 30.5604 17.4506 31.7541 18.9996 31.7541C20.5485 31.7541 22.0975 30.5604 23.7058 29.2926C28.2633 25.6997 34.4894 21.6858 34.4894 14.1532C34.4894 6.62059 25.9697 1.27862 18.9996 8.52036C12.0294 1.27862 3.50977 6.62059 3.50977 14.1532Z"
                        fill="#CBCBD4"
                      />
                    </svg>
                  </div>
                  <div className="text-black text-sm md:text-[15px] font-medium font-['SST Arabic'] leading-normal md:leading-9 tracking-tight">
                    أضف الي المفضلة
                  </div>
                </div>

                <div className="text-right order-1 lg:order-2 w-full lg:w-auto">
                  <div className="text-[#8a8686] text-lg md:text-[21.27px] font-normal font-['SST Arabic'] leading-normal md:leading-9 tracking-tight">
                    كتب
                  </div>
                  <div className="text-black text-xl md:text-[24.81px] font-bold font-['SST Arabic'] leading-normal md:leading-9 tracking-tight">
                    {book?.name}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center lg:items-end mt-4 lg:mt-4">
                <div className="w-full" data-svg-wrapper>
                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 1037 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 1L1037 0.999909"
                      stroke="#F1F1F2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <div className="flex flex-col lg:flex-row justify-start items-center gap-3 md:gap-[15px] my-4">
                  <div className="flex flex-col justify-start items-center gap-2 md:gap-3.5 order-2 lg:order-1">
                    <div className="text-center lg:text-right text-black text-xs md:text-sm font-bold font-['SST Arabic']">
                      {book?.teacher}
                    </div>
                    <div className="text-center lg:text-right text-black text-xs font-normal font-['SST Arabic']">
                      {book?.subject}
                    </div>
                  </div>
                  <img
                    className="w-12 h-12 md:w-14 md:h-14 rounded-[70px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] order-1 lg:order-2"
                    src={book?.teacherImage || "subject"}
                    alt="Teacher"
                  />
                </div>
                <div className="w-full" data-svg-wrapper>
                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 1037 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 1L1037 1.00009"
                      stroke="#F1F1F2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="w-full h-auto lg:h-[54px] relative bg-[#26577c]/10 p-3 md:p-4 lg:p-0 flex items-center">
                  <div className="text-right text-[#26577c] text-base md:text-lg font-medium font-['SST Arabic'] leading-normal md:leading-[15px] flex-grow">
                    نبذه عن الكتاب
                  </div>
                  <div className="w-[10px] md:w-[13px] h-3 md:h-4 bg-[#26577c] rounded-tl-md rounded-tr-sm rounded-bl-md rounded-br-sm" />
                </div>
                <div className="w-full text-right text-black text-sm md:text-base font-normal font-['SST Arabic'] leading-[20px] md:leading-[25px] mt-3 md:mt-4">
                  {book?.description}
                </div>
              </div>

              <div className="w-full flex flex-col lg:flex-row justify-end gap-6 md:gap-[70px] items-center mt-10 md:mt-[100px]">
                <div className="flex flex-col lg:flex-row justify-end items-center gap-3 md:gap-5 w-full lg:w-auto">
                  <div
                    data-svg-wrapper
                    className="w-full lg:w-auto flex justify-center lg:justify-start"
                  >
                    <svg
                      width="60"
                      height="52"
                      viewBox="0 0 76 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-10 md:w-16 md:h-14 lg:w-[76px] lg:h-[66px]"
                    >
                      <g filter="url(#filter0_d_1202_18317)">
                        <rect
                          x="5"
                          y="2"
                          width="65.1755"
                          height="56"
                          rx="13"
                          stroke="#E55604"
                          strokeWidth="2"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M22.0977 25.5654C22.0977 33.098 28.3237 37.112 32.8812 40.7048C34.4895 41.9726 36.0385 43.1663 37.5875 43.1663C39.1364 43.1663 40.6854 41.9726 42.2937 40.7048C46.8512 37.112 53.0772 33.098 53.0772 25.5654C53.0772 18.0328 44.5576 12.6909 37.5875 19.9326C30.6173 12.6909 22.0977 18.0328 22.0977 25.5654Z"
                          fill="#E55604"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_1202_18317"
                          x="0"
                          y="0"
                          width="75.1758"
                          height="66"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="3" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1202_18317"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1202_18317"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-full lg:w-[402px] h-[45px] md:h-[58px] px-3 md:px-4 lg:px-14 py-[7px] bg-[#e55604] rounded-[14px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] flex justify-center items-center">
                    <div className="text-white text-sm md:text-[15px] font-medium font-['SST Arabic']">
                      اشتري الان
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[164px] h-auto lg:h-[55.70px] relative mt-4 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-end justify-end">
                  <div className="text-right text-[#8c9ec5] text-sm md:text-base lg:text-lg font-medium font-['SST Arabic'] capitalize">
                    جنيه
                  </div>
                  <div className="flex items-end gap-1 md:gap-2 lg:gap-[6.19px]">
                    <div className="text-right text-[#26577c] text-2xl md:text-3xl lg:text-[38.68px] font-bold font-['SST Arabic'] capitalize">
                      {book?.price}
                    </div>
                  </div>
                  <div className="text-right text-nowrap mb-[20px] md:mb-[30px] text-black text-base md:text-lg font-medium font-['SST Arabic'] mr-1 md:mr-2">
                    : السعر
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 md:mt-12">
            <TeacherBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
