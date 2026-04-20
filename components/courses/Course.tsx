"use client";

import { useEffect, useRef, useState } from "react";
import { getData } from "@/libs/axios/backendServer";
import VedioCard from "./VedioCard";
import ExamCard from "./ExamCard";
import { useParams, useRouter } from "next/navigation";
import "@/public/css/course.css";
import { useAddToFavorites } from "@/libs/hooks/useAddToFavorites";
import { useAppSelector } from "@/libs/store/hooks";
import { toast } from "react-toastify";
import { formatPrice, isFreePrice } from "@/libs/utils/formatPrice";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  teacher: string;
  subject: string;
  image: string;
  is_favorite: boolean;
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
    from: string;
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
  const router = useRouter();

  const { addToFavorites } = useAddToFavorites();
  const { token } = useAppSelector((state) => state.user);
  const [isFav, setIsFav] = useState<boolean>(course.is_favorite);

  // Add JSON-LD schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course?.title || "",
    description: course?.description || "",
    provider: {
      "@type": "Organization",
      name: "EduHub Academy",
      sameAs: "https://example.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      location: {
        "@type": "VirtualLocation",
        url: typeof window !== "undefined" ? window.location.href : "",
      },
      offers: {
        "@type": "Offer",
        url: typeof window !== "undefined" ? window.location.href : "",
        price: course?.price?.toString() || "0",
        priceCurrency: "EGP",
        availability: "https://schema.org/InStock",
      },
    },
  };

  //   get course data from backend
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getData(
          `course/show/${courseId}`,
          {},
          {
            authorization: `Bearer ${token}`,
          }
        );
        setCourse(response.data);
        console.log(response.data);
        setOpenedModuleId(response.data.modules[0].id);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [courseId, token]);

  useEffect(() => {
    setIsFav(course.is_favorite);
  }, [course, courseId]);

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

  // handle course purchase
  const handlePurchase = () => {
    if (!token) {
      router.push("/login");
    } else {
      router.push(`/payments/course/${courseId}`);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <div className=" w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto bg-white rounded-xl overflow-hidden">
        <div className=" w-full mx-auto py-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full h-fit order-2 lg:order-1 lg:w-1/3 bg-white rounded-[25px] shadow-md border border-[#f1f1f2] overflow-hidden">
            <div className="bg-[#26577c]/10 p-4">
              <h2 className="text-right text-[#26577c] text-xl font-medium">
                المحتوي
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-right text-[#26577c] text-sm">
                {course?.title}
              </p>
              <div className="space-y-4">
                {course?.modules?.map((module, index) => {
                  if (index === 0) {
                    return (
                      <div
                        onClick={() => setOpenedModuleId(module.id)}
                        key={module.id}
                        className="cursor-pointer"
                      >
                        <VedioCard index={index} module={module} />
                      </div>
                    );
                  }
                })}
                {Array.from({ length: 3 }).map((_, index) => (
                  <ExamCard key={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Course details */}
          <div className="w-full lg:w-2/3 space-y-6 order-1 lg:order-2">
            {/* Message instead of video */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#26577c]/10 to-[#26577c]/5 rounded-[30px] lg:rounded-[58px] aspect-video border-2 border-[#26577c]/20">
              <div className="text-center px-8 py-12">
                <svg
                  className="w-20 h-20 mx-auto mb-6 text-[#26577c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#26577c] mb-4 font-['SST Arabic']">
                  مشاهدة كافة الكورسات على التطبيق فقط
                </h3>
                <p className="text-base lg:text-lg text-gray-600 font-['SST Arabic']">
                  للاستمتاع بتجربة أفضل ومشاهدة جميع الدروس، يرجى تحميل التطبيق
                </p>
              </div>
            </div>

            {/* Course title and price */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Purchase button and price */}
              <div className="space-y-2 order-2 lg:order-1 w-full lg:w-auto">
                <div className="flex flex-row items-center justify-between lg:justify-start gap-5 lg:gap-[35px]">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        if (token) {
                          e.preventDefault();
                          addToFavorites(
                            courseId?.toString() || null,
                            "courses"
                          );
                          setIsFav((prev) => !prev);
                        } else {
                          toast.error("يرجى تسجيل الدخول");
                        }
                      }}
                      className="flex items-center justify-center border-[3px] border-[#E55604] w-[50px] h-[50px] lg:w-[76px] lg:h-[66px] rounded-[8px] lg:rounded-[14px]  "
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
                    <button
                      onClick={handlePurchase}
                      className="text-white text-[15px] font-medium font-sst-arabic text-nowrap h-[58px] w-full lg:w-[178px] px-4 lg:px-14 bg-[#e55604] rounded-[14px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border flex justify-center items-center"
                    >
                      اشتري الان
                    </button>
                  </div>
                  <div className=" flex mt-4 lg:mt-0">
                    {isFreePrice(course?.price) ? (
                      <>
                        <div className="text-right text-[#26577c] text-lg font-bold font-sst-arabic">
                          {formatPrice(course?.price)}
                        </div>
                        <div className="text-right text-black text-xs font-medium font-sst-arabic mr-2">
                          : السعر
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" flex justify-end items-end gap-1">
                          <div className="text-right text-[#8c9ec5] text-xs font-medium font-sst-arabic capitalize">
                            جنيه
                          </div>
                          <div className=" mb-[-5px] text-right text-[#26577c] text-[25px] font-bold font-sst-arabic capitalize">
                            {formatPrice(course?.price)}
                          </div>
                        </div>
                        <div className=" text-right text-black text-xs font-medium font-sst-arabic">
                          : السعر
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Course name */}
              <div className="w-full order-1 lg:order-2 lg:w-[216.65px] flex-col justify-start items-end  inline-flex mt-4 lg:mt-0">
                <div className="text-[#8a8686] text-[21.27px] font-normal font-sst-arabic leading-9 tracking-tight">
                  الدرس الاول
                </div>
                <div className="self-stretch text-right text-black text-[24.81px] font-bold font-sst-arabic leading-9 tracking-tight">
                  {course?.title || ""}
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
                {course?.description || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;