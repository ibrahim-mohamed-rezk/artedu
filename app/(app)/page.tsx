"use client";

import HomeSwiper from "@/components/home/HomeSwiper";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { useEffect } from "react";
import { getHomeData } from "@/libs/store/slices/homeSlice";
import TeatcheContainer from "@/components/home/TeatcheContainer";
import CoursesContainer from "@/components/home/CoursesContainer";
import Subjects from "@/components/home/Subjects";
import BooksContainer from "@/components/home/BooksContainer";

export default function Home() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  // Fetch data from API
  useEffect(() => {
    dispatch(getHomeData(token));
  }, [token, dispatch]);

  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)]">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[30px]">
          <HomeSwiper />
          <div className="w-full h-[1px] bg-[#f1f1f2] "></div>
          <TeatcheContainer />
          <div className="w-full h-[1px] bg-[#f1f1f2] "></div>
          <CoursesContainer />
          <div className="w-full h-[1px] bg-[#f1f1f2] "></div>
          <Subjects />
          <div className="w-full h-[1px] bg-[#f1f1f2] "></div>
          <BooksContainer />
        </div>
      </div>
    </div>
  );
}
