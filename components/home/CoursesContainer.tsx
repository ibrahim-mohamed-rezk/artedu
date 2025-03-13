import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useAppSelector } from "@/libs/store/hooks";
import CourseCard from "../cards/CourseCard";
import Link from "next/link";

interface course {
  title: string;
  subject: string;
  cover: string;
  teacher: string;
  price: number;
  id: number;
}

const CoursesContainer = () => {
  const { homeData } = useAppSelector((state) => state.home);

  console.log(homeData);
  return (
    <div className="flex flex-col w-full items-end gap-4 sm:gap-7 py-4 sm:py-6">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center justify-center gap-2 text-[#ffb001]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[31px] sm:h-[31px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.4678 5.85779C22.8718 6.20412 22.9186 6.81242 22.5723 7.21647L15.4012 15.5828L22.5723 23.9491C22.9186 24.3531 22.8718 24.9614 22.4678 25.3077C22.0637 25.6541 21.4554 25.6073 21.1091 25.2032L13.4005 16.2099C13.0912 15.849 13.0912 15.3165 13.4005 14.9557L21.1091 5.9623C21.4554 5.55825 22.0637 5.51145 22.4678 5.85779ZM17.3288 5.85792C17.7329 6.20425 17.7797 6.81255 17.4333 7.21661L10.2622 15.5829L17.4333 23.9492C17.7797 24.3532 17.7329 24.9615 17.3288 25.3079C16.9248 25.6542 16.3165 25.6074 15.9701 25.2034L8.26152 16.21C7.95222 15.8491 7.95222 15.3167 8.26152 14.9558L15.9701 5.96243C16.3165 5.55838 16.9248 5.51159 17.3288 5.85792Z"
              fill="currentColor"
            />
          </svg>
          <Link
            href={"/courses"}
            className="text-lg sm:text-xl font-medium font-sst-arabic mt-[-15px]"
          >
            عرض الجميع
          </Link>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-sst-arabic">
          كورساتنا المميزة
        </h2>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        className="w-full"
        dir="rtl"
        loop={true}
      >
        {homeData?.courses?.map((course: course, index: number) => {
          console.log(course);
          return (
            <SwiperSlide key={index} className="!w-auto">
              <CourseCard
                courseName={course?.title}
                courseSubject={course?.subject}
                courseImage={course?.cover}
                courseTeacher={course?.teacher}
                price={course?.price}
                courseId={course?.id}
                type={"courses"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CoursesContainer;
