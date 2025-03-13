import CourseHeader from "@/components/courses/CourseHeader";
import Courses from "@/components/courses/Courses";

const page = () => {
  return (
    <div className="w-full">
      <CourseHeader />
      <div className="container mx-auto">
        <Courses />
      </div>
    </div>
  );
};

export default page;
