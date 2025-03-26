"use client";

import { useEffect, useState } from "react";
import { getData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import Link from "next/link";
import FavoriteCard from "../cards/FavoriteCard";

const Purchase = () => {
  const [cartData, setcartData] = useState([]);
  const token = useAppSelector((state) => state.user.token);
  const [type, setType] = useState("courses");

  console.log(cartData);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await getData(
          "purchases-api",
          { type: type },
          { Authorization: `Bearer ${token}` }
        );
        setcartData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartData();
  }, [token, type]);

  return (
    <div className="w-full md:px-[50px]">
      <div className="w-full mx-auto">
        {/* body */}
        <div className="w-full pt-[50px] inline-flex flex-col justify-start order-2 md:order-1 items-start gap-5">
          <div className="w-full  flex flex-col gap-5 bg-white rounded-2xl border border-zinc-100 p-5">
            <div className="flex border border-[#F1F1F2] w-fit items-center justify-center mx-auto rounded-xl gap-2 ">
              <button
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  type === "courses"
                    ? "bg-orange-600 text-white"
                    : "text-neutral-400"
                }`}
                onClick={() => setType("courses")}
              >
                الكورسات
              </button>
              <button
                className={`px-4 py-3 rounded-xl  text-sm font-medium ${
                  type === "books"
                    ? "bg-orange-600 text-white"
                    : "text-neutral-400"
                }`}
                onClick={() => setType("books")}
              >
                الكتب
              </button>
            </div>
            <div className="self-stretch w-full inline-flex flex-wrap justify-center md:justify-end items-center gap-5">
              {!cartData || cartData?.length <= 0 ? (
                <div className="w-full inline-flex flex-col justify-center items-center gap-5">
                  <div className="text-black text-[18px] font-bold font-sst-arabic mt-5">
                    لا يوجد لديك اي مشتريات
                  </div>
                  <div className="mt-3">
                    <Link href="/courses">
                      <button className="px-4 py-2 bg-[#e55604] text-white rounded-md hover:bg-[#e55604]/80 transition-colors font-sst-arabic">
                        تصفح {type === "courses" ? "الكورسات" : "الكتب"}
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                cartData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="md:px-[50px] mx-auto flex flex-col md:flex-row items-start gap-[20px] pt-[50px] justify-end w-full"
                    >
                      {type === "courses" ? <FavoriteCard item={item} type="courses" /> : <FavoriteCard item={item} type="books" />}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
