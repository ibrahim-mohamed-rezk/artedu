import { useAddToFavorites } from "@/libs/hooks/useAddToFavorites";
import Link from "next/link";

interface Props {
  courseName: string;
  courseImage: string;
  courseSubject: string;
  courseTeacher: string;
  price: number;
  courseId: number;
  type: string;
}

const CourseCard = ({
  courseName,
  courseImage,
  courseSubject,
  courseTeacher,
  price,
  courseId,
  type,
}: Props) => {
  const { addToFavorites } = useAddToFavorites();
  return (
    <Link href={`/${type}/${courseId}`}>
      <div className="w-[235px] h-[330px] relative bg-white rounded-[30px] shadow-md border-2 border-[#f1f1f2] overflow-hidden">
        <img
          className="w-full h-[220px] object-cover"
          src={courseImage}
          alt="Course"
        />
        <div className="p-4">
          <div className="flex items-center justify-start text-xs text-[#26577c]">
            <span className="font-normal">{courseSubject}</span>
            <svg
              className="mx-1"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5589 2.67167C8.7182 2.80821 8.73665 3.04804 8.60011 3.20734L5.77283 6.50583L8.60011 9.80432C8.73665 9.96362 8.7182 10.2034 8.5589 10.34C8.3996 10.4765 8.15977 10.4581 8.02323 10.2988L4.98404 6.75306C4.86209 6.61079 4.86209 6.40086 4.98404 6.25859L8.02323 2.71287C8.15977 2.55357 8.3996 2.53512 8.5589 2.67167Z"
                fill="#26577C"
              />
            </svg>
            <span className="font-light ml-1">{courseTeacher}</span>
          </div>
          <h3 className="text-lg font-bold text-black font-sst-arabic">
            {courseName}
          </h3>
          <div className="flex justify-start items-center gap-2">
            <div className="text-lg font-medium text-black font-sst-arabic">
              السعر :
            </div>
            <div className="text-right">
              <span className="text-[#26577c] text-[23px] font-bold font-sst-arabic">
                {price}
              </span>
              <span className="text-[#8c9ec5] text-xs font-medium font-sst-arabic">
                جنيه
              </span>
            </div>
          </div>
        </div>
        <div onClick={(e) => {
          e.preventDefault();
          addToFavorites(courseId?.toString() || null, "courses");
        }} className="absolute top-4 left-4 cursor-pointer z-50">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.28369 14.412C3.28369 21.8017 9.39159 25.7395 13.8627 29.2642C15.4405 30.508 16.96 31.679 18.4796 31.679C19.9992 31.679 21.5188 30.508 23.0966 29.2642C27.5677 25.7395 33.6756 21.8017 33.6756 14.412C33.6756 7.0223 25.3176 1.78168 18.4796 8.88604C11.6417 1.78168 3.28369 7.0223 3.28369 14.412Z"
              fill="#F1F1F2"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
