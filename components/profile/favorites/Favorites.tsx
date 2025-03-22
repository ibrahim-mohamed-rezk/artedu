"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "../ProfileHeader";
import ProfileMenue from "../ProfileMenue";
import { getData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import FavoriteCard from "@/components/cards/FavoriteCard";

const Favorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  const token = useAppSelector((state) => state.user.token);
  const [selectedType, setSelectedType] = useState("courses");

  console.log(userFavorites);
  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const response = await getData(
          `favourites-api?type=${selectedType}`,
          {},
          { Authorization: `Bearer ${token}` }
        );
        setUserFavorites(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserFavorites();
  }, [token, selectedType]);

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        {/* header */}
        <ProfileHeader title="احصائياتي" />

        {/* body */}
        <div className="md:px-[50px] mx-auto flex flex-col md:flex-row items-start gap-[20px] pt-[50px] justify-end w-full">
          <div className="w-full inline-flex flex-col justify-start order-2 md:order-1 items-start gap-5">
            <div className="w-full flex flex-col gap-5 bg-white rounded-2xl border border-zinc-100 p-5">
              <div className="flex border border-[#F1F1F2] w-fit items-center justify-center mx-auto rounded-xl gap-2 ">
                <button
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    selectedType === "courses"
                      ? "bg-orange-600 text-white"
                      : "text-neutral-400"
                  }`}
                  onClick={() => setSelectedType("courses")}
                >
                  الكورسات
                </button>
                <button
                  className={`px-4 py-3 rounded-xl  text-sm font-medium ${
                    selectedType === "books"
                      ? "bg-orange-600 text-white"
                      : "text-neutral-400"
                  }`}
                  onClick={() => setSelectedType("books")}
                >
                  الكتب
                </button>
              </div>

              <div className="w-full flex flex-wrap items-center justify-end gap-6">
                {userFavorites.map((item, idx) => {
                  console.log(item);
                  return <FavoriteCard  key={idx} />;
                })}
              </div>
            </div>
          </div>

          {/* menue */}
          <div className="order-1 md:order-2 w-full md:w-fit">
            <ProfileMenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
