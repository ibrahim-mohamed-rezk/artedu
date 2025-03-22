"use client";

import { useEffect, useRef, useState } from "react";
import { getData } from "@/libs/axios/backendServer";
import VedioCard from "./VedioCard";
import ExamCard from "./ExamCard";
import { useParams } from "next/navigation";
import "@/public/css/course.css";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  teacher: string;
  subject: string;
  image: string;
  modules: Module[];
}

interface Module {
  type: string | null;
  id: number;
  name: string;
  description: string;
  duration: string;
  teacher: string;
  details: {
    course_name: string;
    thumbnail: string;
    title: string;
    url: string;
  };
}

const Course = () => {
  const [course, setCourse] = useState<Course>({} as Course);
  const [openedModuleId, setOpenedModuleId] = useState<number | null>(1);
  const [openedModuleType, setOpenedModuleType] = useState<string | null>(null);
  const { courseId } = useParams();
  const [openModuleData, setOpenModuleData] = useState<Module | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoRun, setVideoRun] = useState<boolean>(false);

  //   get course data from backend
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getData(`course/show/${courseId}`);
        setCourse(response.data);
        setOpenedModuleId(response.data.modules[0].id);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  //   get curren module data
  useEffect(() => {
    const myModule = course?.modules?.find(
      (module) => module.id === openedModuleId
    );
    setOpenedModuleType(myModule?.type || null);
    setOpenModuleData(myModule || null);
  }, [openedModuleId, course]);

  //   video controle
  useEffect(() => {
    const handlePause = () => {
      setVideoRun(false);
    };

    const handleOpen = () => {
      setVideoRun(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("play", handleOpen);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("play", handleOpen);
      }
    };
  }, [videoRef, videoRun, openedModuleId, course]);

  return (
    <div className=" w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto bg-white rounded-xl overflow-hidden">
      <div className=" w-full mx-auto py-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full order-2 lg:order-1 lg:w-1/3 bg-white rounded-[25px] shadow-md border border-[#f1f1f2] overflow-hidden">
          <div className="bg-[#26577c]/10 p-4">
            <h2 className="text-right text-[#26577c] text-xl font-medium">
              المحتوي
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-right text-[#26577c] text-sm">{course?.title}</p>
            <div className="space-y-4">
              {course?.modules?.map((module) => {
                if (module?.type === "video") {
                  return (
                    <div
                      onClick={() => setOpenedModuleId(module.id)}
                      key={module.id}
                      className="cursor-pointer"
                    >
                      <VedioCard module={module} />
                    </div>
                  );
                } else if (module?.type === "exam") {
                  return (
                    <div
                      onClick={() => setOpenedModuleId(module.id)}
                      key={module.id}
                      className="cursor-pointer"
                    >
                      <ExamCard />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        {/* Right side - Course details */}
        <div className="w-full lg:w-2/3 space-y-6 order-1 lg:order-2">
          {/* open video screen */}
          {openModuleData && openedModuleType === "video" && (
            <div className="relative flex items-center justify-center bg-black/20 rounded-[58px] aspect-video cursor-pointer video-player">
              <video
                className=" w-full rounded-[10px] lg:rounded-[30px] object-cover"
                controls
                src={openModuleData?.details?.url}
                ref={videoRef}
              >
                Your browser does not support the video tag.
              </video>

              <div className="absolute w-[180px] h-[180px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                        setVideoRun(true);
                      } else {
                        videoRef.current.pause();
                        setVideoRun(false);
                      }
                    }
                  }}
                  className="focus:outline-none play-button"
                >
                  {videoRun ? (
                    <svg
                      width="182"
                      height="182"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1/2 h-1/2 lg:w-auto lg:h-auto"
                    >
                      <rect
                        width="512"
                        height="512"
                        rx="256"
                        fill="#D9D9D9"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M144 128C117.5 128 96 149.5 96 176V336C96 362.5 117.5 384 144 384H176C202.5 384 224 362.5 224 336V176C224 149.5 202.5 128 176 128H144ZM336 128C309.5 128 288 149.5 288 176V336C288 362.5 309.5 384 336 384H368C394.5 384 416 362.5 416 336V176C416 149.5 394.5 128 368 128H336Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="182"
                      height="182"
                      viewBox="0 0 182 182"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1/2 h-1/2 lg:w-auto lg:h-auto"
                    >
                      <rect
                        x="0.447266"
                        y="0.368622"
                        width="181.241"
                        height="181.241"
                        rx="90.6203"
                        fill="#D9D9D9"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M66.6808 49.7506L138.975 90.4882L67.548 132.728L66.6808 49.7506Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* open exam screen */}
          {openModuleData && openedModuleType === "exam" && (
            <div className=" flex items-center justify-center overflow-hidden rounded-[58px]">
              <img
                className="w-full h-full"
                src={openModuleData?.details?.thumbnail}
                alt=""
              />
            </div>
          )}

          {/* Course title and price */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Purchase button and price */}
            <div className="space-y-2 order-2 lg:order-1 w-full lg:w-auto">
              <div className="flex flex-row items-center justify-between lg:justify-start gap-5 lg:gap-[35px]">
                <div className="flex items-center justify-center gap-3">
                  <button className="flex items-center justify-center border-[3px] border-[#E55604] w-[50px] h-[50px] lg:w-[76px] lg:h-[66px] rounded-[8px] lg:rounded-[14px]  ">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.09766 14.5654C3.09766 22.098 9.32367 26.112 13.8812 29.7048C15.4895 30.9726 17.0385 32.1663 18.5875 32.1663C20.1364 32.1663 21.6854 30.9726 23.2937 29.7048C27.8512 26.112 34.0772 22.098 34.0772 14.5654C34.0772 7.03283 25.5576 1.69087 18.5875 8.93261C11.6173 1.69087 3.09766 7.03283 3.09766 14.5654Z"
                        fill="#E55604"
                      />
                    </svg>
                  </button>
                  <button className="text-white text-[15px] font-medium font-sst-arabic text-nowrap h-[58px] w-full lg:w-[178px] px-4 lg:px-14 bg-[#e55604] rounded-[14px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border flex justify-center items-center">
                    اشتري الان
                  </button>
                </div>
                <div className=" flex mt-4 lg:mt-0">
                  <div className=" flex justify-end items-end gap-1">
                    <div className="text-right text-[#8c9ec5] text-xs font-medium font-sst-arabic capitalize">
                      جنيه
                    </div>
                    <div className=" mb-[-5px] text-right text-[#26577c] text-[25px] font-bold font-sst-arabic capitalize">
                      350
                    </div>
                  </div>
                  <div className=" text-right text-black text-xs font-medium font-sst-arabic">
                    : السعر
                  </div>
                </div>
              </div>
            </div>

            {/* Course name */}
            <div className="w-full order-1 lg:order-2 lg:w-[216.65px] flex-col justify-start items-end  inline-flex mt-4 lg:mt-0">
              <div className="text-[#8a8686] text-[21.27px] font-normal font-sst-arabic leading-9 tracking-tight">
                الدرس الاول
              </div>
              <div className="self-stretch text-right text-black text-[24.81px] font-bold font-sst-arabic leading-9 tracking-tight">
                المعالجه علي التوازي
              </div>
            </div>
          </div>

          {/* Course description */}
          <div className=" ">
            <h2 className=" flex items-center justify-end gap-2 bg-[#26577c]/10 p-4 rounded-lg  ">
              <span className=" text-[#26577c] font-sst-arabic text-xl font-medium text-right">
                نبذه عن الكورس
              </span>
              <svg
                className="mt-[12px]"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 2.68629 2.68629 0 6 0H11C12.1046 0 13 0.895431 13 2V14C13 15.1046 12.1046 16 11 16H6C2.68629 16 0 13.3137 0 10V6Z"
                  fill="#26577C"
                />
              </svg>
            </h2>
            <p className="text-right  px-4 text-black leading-relaxed font-sst-arabic">
              المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا المراجعة
              الشهرية التانية لطلاب تالتة ثانوي تابعوها مجانا المراجعة الشهرية
              التانية لطلاب تالتة ثانوي تابعوها مجانا المراجعة الشهرية التانية
              لطلاب تالتة ثانوي تابعوها مجانا المراجعة الشهرية التانية لطلاب
              تالتة ثانوي تابعوها مجانا المراجعة الشهرية التانية لطلاب تالتة
              ثانوي تابعوها مجانا المراجعة الشهرية التانية لطلاب تالتة ثانوي
              تابعوها مجانا المراجعة الشهرية التانية لطلاب تالتة ثانوي تابعوها
              مجانا
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
