"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "../ProfileHeader";
import ProfileMenue from "../ProfileMenue";
import { getData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";

const UserAnalytics = () => {
  const [userAnalytics, setUserAnalytics] = useState([]);
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    const fetchUserAnalytics = async () => {
      try {
        const response = await getData(
          "statistics-api",
          {},
          { Authorization: `Bearer ${token}` }
        );
        setUserAnalytics(response.data.items);
      } catch (error) {}
    };

    fetchUserAnalytics();
  }, [token]);

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        {/* header */}
        <ProfileHeader title="احصائياتي" />
        {/* body */}
        <div className="md:px-[50px] mx-auto flex flex-col md:flex-row items-start gap-[20px] pt-[50px] justify-end w-full">
          <div className="w-full inline-flex flex-col justify-start order-2 md:order-1 items-start gap-5">
            <div className="self-stretch w-full inline-flex flex-wrap justify-center md:justify-end items-center gap-5">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[350px] p-4 relative bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-100 overflow-hidden mb-3 md:mb-0"
                >
                  <div className="text-white w-16 h-7 flex items-center justify-center bg-indigo-400 top-0 left-0 absolute text-xs font-normal font-sst-arabic">
                    ناجح
                  </div>
                  <div className="flex flex-col gap-[15px] h-full">
                    <div className="flex justify-end items-center">
                      <div className="flex items-center gap-2.5">
                        <div className="flex flex-col items-end gap-2">
                          <div className="text-right text-black text-xs font-bold font-sst-arabic leading-tight">
                            إمتحان شهر ديسمبر
                          </div>
                          <div className="text-right text-neutral-500 text-[10px] font-normal font-sst-arabic leading-tight">
                            23 - 12 - 2025
                          </div>
                        </div>
                        <div className="w-6 h-6 relative overflow-hidden">
                          <div className="w-2 h-2 left-[7.54px] top-[13.09px] absolute bg-cyan-800" />
                          <div className="w-5 h-4 left-[2px] top-[2px] absolute opacity-50 bg-cyan-800" />
                          <div className="w-3 h-[5px] left-[6.25px] top-[5.25px] absolute bg-cyan-800" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="w-11 h-11 text-cyan-800 text-xs font-bold font-sst-arabic rounded-full border border-cyan-800 flex items-center justify-center">
                        17
                      </div>
                      <div className="text-right text-black text-xs font-normal font-sst-arabic leading-tight max-w-[240px]">
                        المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                        دلوقتى على قناة الينبوع
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default UserAnalytics;
