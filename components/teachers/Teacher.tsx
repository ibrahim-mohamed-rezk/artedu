"use client";

import { getData } from "@/libs/axios/backendServer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Teacher {
  id: number;
  full_name: string;
  avatar: string;
  subject: string;
}

const Teacher = () => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const { teacherId } = useParams();

  // get teatcher data from api
  useEffect(() => {
    const fetchTeacher = async () => {
      const response = await getData(`teacher/show/${teacherId}`);
      setTeacher(response.data);
    };

    fetchTeacher();
  }, [teacherId]);

  return (
    <div className="relative w-full overflow-hidden bg-white rounded-xl font-['SST_Arabic'] text-base text-[#cbcbd4] text-right flex flex-col items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#f1f1f2] w-full my-8"></div>

        <div className="relative w-full z-10">
          <img
            className="w-full h-[200px] sm:h-[300px] md:h-[380px] object-cover rounded-[20px]"
            alt="Teacher background"
            src={teacher?.avatar}
          />
        </div>

        <div className="flex flex-col z-50 relative items-center -mt-16 sm:-mt-20 md:-mt-24">
          <img
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-cover rounded-full border-4 border-white"
            alt="Teacher profile"
            src={teacher?.avatar}
          />

          <div className="mt-4 flex flex-col items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
              {teacher?.full_name}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-black">
              {teacher?.subject}
            </p>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-12 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4 order-2 md:order-1">
            <div className="bg-white rounded-[30px] border border-[#f1f1f2] p-6">
              <div className="flex flex-col gap-4">
                <button className="w-full py-4 px-6 bg-[#e55604] rounded-xl text-white font-medium text-center">
                  كورساتي
                </button>
                <button className="w-full py-4 px-6 bg-[rgba(229,86,4,0.1)] border border-[#e55604] rounded-xl text-[#e55604] font-medium text-center">
                  كتبي
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 order-1 md:order-2">
            <div className="w-full">
              <div className="w-full bg-[rgba(38,87,124,0.1)] p-4 overflow-hidden flex items-center justify-end">
                <span className="text-[#26577c] font-medium ml-2">
                  نبذه عن المدرس
                </span>
                <div className="w-[13px] h-[16px] bg-[#26577c] rounded-[6px_2px_2px_6px]"></div>
              </div>

              <div className="mt-6 text-black leading-relaxed">
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
                المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
