import Teachers from "@/components/teachers/Teachers";
import TeachersHeader from "@/components/teachers/TeachersHeader";

const page = () => {
  return (
    <div className="w-full">
      <TeachersHeader />
      <Teachers />
    </div>
  );
};

export default page;
