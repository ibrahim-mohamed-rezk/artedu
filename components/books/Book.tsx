"use client";

import React, { useEffect, useState } from "react";
import BookImageSwiper from "./BookImageSwiper";
import { useParams, useRouter } from "next/navigation";
import { getData } from "@/libs/axios/backendServer";
import BooksContainer from "../home/BooksContainer";
import { useAddToFavorites } from "@/libs/hooks/useAddToFavorites";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { getHomeData } from "@/libs/store/slices/homeSlice";
import { toast } from "react-toastify";

interface Book {
  id: number;
  image: string;
  name: string;
  author: string;
  price: number;
  teacher: string;
  description: string;
  subject: string;
  teacherImage: string;
  is_favorite: boolean;
}

const Book = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book>();
  const [isFav, setIsFav] = useState<boolean>(book?.is_favorite || false);
  const { addToFavorites } = useAddToFavorites();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const getBook = async () => {
      const response = await getData(
        `book/show/${bookId}`,
        {},
        {
          authorization: `Bearer ${token}`,
        }
      );
      setBook(response.data);
    };

    getBook();
  }, [bookId, token]);

  useEffect(() => {
    setIsFav(book?.is_favorite || false);
    dispatch(getHomeData(token));
  }, [book, bookId]);

  // handle course purchase
  const handlePurchase = () => {
    if (!token) {
      router.push("/login");
    } else {
      router.push(`/payments/book/${bookId}`);
    }
  };


  return (
    <div className="w-[95%] mx-auto lg:w-[clamp(100px,79.0625vw,30000px)] mt-[30px] lg:mt-[60px] px-4 lg:px-0">
      <div className="w-full mx-auto">
        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-5 lg:gap-[30px]">
            <div className="w-full lg:w-[clamp(100px,22.6041668vw,1000px)] aspect-[.723/1]">
              <BookImageSwiper image={book?.image} />
            </div>
            <div className="w-full lg:w-[clamp(100px,56.40625vw,3000px)] flex flex-col items-start justify-start">
              {/* book name */}
              <div className="w-full flex flex-col lg:flex-row justify-end items-start lg:items-center">
                <div className="text-right order-1 lg:order-2 w-full lg:w-auto">
                  <div className="text-[#8a8686] text-lg lg:text-[21.27px] font-normal font-['SST Arabic'] leading-normal lg:leading-9 tracking-tight">
                    كتب
                  </div>
                  <div className="text-black text-xl lg:text-[24.81px] font-bold font-['SST Arabic'] leading-normal lg:leading-9 tracking-tight">
                    {book?.name}
                  </div>
                </div>
              </div>

              {/* book auther */}
              <div className="w-full order-3  flex flex-col items-center lg:items-end mt-4 lg:mt-4">
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
                <div className="flex flex-col lg:flex-row justify-start items-center gap-3 lg:gap-[15px] my-4">
                  <div className="flex flex-col justify-start items-center gap-2 lg:gap-3.5 order-2 lg:order-1">
                    <div className="text-center lg:text-right text-black text-xs lg:text-sm font-bold font-['SST Arabic']">
                      {book?.teacher}
                    </div>
                    <div className="text-center lg:text-right text-black text-xs font-normal font-['SST Arabic']">
                      {book?.subject}
                    </div>
                  </div>
                  <img
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-[70px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] order-1 lg:order-2"
                    src={
                      book?.teacherImage ||
                      `https://placehold.co/48x48/e55604/fff?text=${book?.teacher.slice(
                        0,
                        1
                      )}`
                    }
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

              {/* About Book */}
              <div className="w-full mt-4 order-last lg:order-3">
                <div className="w-full h-auto lg:h-[54px] relative bg-[#26577c]/10 p-3 lg:p-4  flex items-center">
                  <div className="text-right text-[#26577c] text-base lg:text-lg font-medium font-['SST Arabic'] leading-normal lg:leading-[15px] flex-grow">
                    نبذه عن الكتاب
                  </div>
                  <div className="w-[10px] lg:w-[13px] h-3 lg:h-4 bg-[#26577c] rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-sm" />
                </div>
                <div className="w-full text-right text-black text-sm lg:text-base font-normal font-['SST Arabic'] leading-[20px] lg:leading-[25px] mt-3 lg:mt-4">
                  {book?.description}
                </div>
              </div>

              {/* Add to favorites and buy buttons */}
              <div className="w-full order-2 lg:order-last flex justify-between lg:justify-center gap-6 lg:gap-[70px] items-center mt-10 lg:mt-[100px]">
                <div className="flex flex-row justify-end items-center gap-3 lg:gap-5 w-full lg:w-auto">
                  <button
                    onClick={(e) => {
                      if (token) {
                        e.preventDefault();
                        addToFavorites(book?.id.toString() || "", "books");
                        setIsFav((prev) => !prev);
                      } else {
                        toast.error("يرجى تسجيل الدخول");
                      }
                    }}
                    className="flex items-center justify-center border-[3px] border-[#E55604] w-[40px] h-[40px] lg:w-[66px] lg:h-[58px] rounded-[8px] lg:rounded-[14px]  "
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.09766 14.5654C3.09766 22.098 9.32367 26.112 13.8812 29.7048C15.4895 30.9726 17.0385 32.1663 18.5875 32.1663C20.1364 32.1663 21.6854 30.9726 23.2937 29.7048C27.8512 26.112 34.0772 22.098 34.0772 14.5654C34.0772 7.03283 25.5576 1.69087 18.5875 8.93261C11.6173 1.69087 3.09766 7.03283 3.09766 14.5654Z"
                        fill={isFav ? "#E55604" : "none"}
                        stroke={"#E55604"}
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                  <div
                    onClick={handlePurchase}
                    className="w-full cursor-pointer lg:w-[402px] h-[45px] lg:h-[58px] px-3 md:px-4 lg:px-14 py-[7px] bg-[#e55604] rounded-[14px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] flex justify-center items-center"
                  >
                    <div className="text-white text-sm lg:text-[15px] font-medium font-['SST Arabic']">
                      اشتري الان
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[164px] h-auto lg:h-[55.70px] relative mt-4 lg:mt-0 flex flex-row items-end justify-end">
                  <div className="text-right text-[#8c9ec5] text-sm md:text-base lg:text-lg font-medium font-['SST Arabic'] capitalize">
                    جنيه
                  </div>
                  <div className="flex items-end gap-1 md:gap-2 lg:gap-[6.19px]">
                    <div className="text-right text-[#26577c] text-2xl lg:text-3xl lg:text-[38.68px] font-bold font-['SST Arabic'] capitalize">
                      {book?.price}
                    </div>
                  </div>
                  <div className="text-right text-nowrap mb-[20px] lg:mb-[30px] text-black text-base lg:text-lg font-medium font-['SST Arabic'] mr-1 lg:mr-2">
                    : السعر
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 lg:mt-12">
            <BooksContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
