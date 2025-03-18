import CourseHeader from "@/components/courses/CourseHeader";
import Courses from "@/components/courses/Courses";

const page = () => {
  return (
    <div className="w-full">
      <CourseHeader />
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto mt-[180px] md:mt-0 ">
        <Courses />
      </div>
    </div>
  );
};

export default page;
