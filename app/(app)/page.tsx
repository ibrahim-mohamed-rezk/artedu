"use client";

import HomeSwiper from "@/components/home/HomeSwiper";
import { getData } from "@/libs/axios/backendServer";
import { useEffect, useState } from "react";

export default function Home() {
  const [homeData, setHomeData] = useState({});

  // Fetch data from API
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await getData("home-api");
        setHomeData(response);
      } catch (error) {
        console.error("Failed to fetch home data", error);
      }
    };
    fetchHomeData();
  }, []);

  console.log(homeData)

  return (
    <div className="w-full min-h-[200vh]">
      <div className="container mx-auto">
        <HomeSwiper />
      </div>
    </div>
  );
}
