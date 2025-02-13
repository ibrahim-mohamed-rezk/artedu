"use client";

import HomeSwiper from "@/components/home/HomeSwiper";
import { useAppDispatch } from "@/libs/store/hooks";
import { useEffect } from "react";
import { getHomeData } from "@/libs/store/slices/homeSlice";
import TeatcheContainer from "@/components/home/TeatcheContainer";
import CoursesContainer from "@/components/home/CoursesContainer";
import Subjects from "@/components/home/Subjects";
import BooksContainer from "@/components/home/BooksContainer";

export default function Home() {
  const dispatch = useAppDispatch();

  // Fetch data from API
  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-start justify-start gap-[30px]">
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
