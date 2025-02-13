import { useAppSelector } from "@/libs/store/hooks";

interface Subject {
  id: number;
  name: string;
  color: string;
  border: string;
}

const Subjects = () => {
  const { homeData } = useAppSelector((state) => state.home);
  const subjects = [
    { name: "لغة فرنسية", color: "#7d5260", border: "#633b48" },
    { name: "لغة انجليزية", color: "#4f378a", border: "#4f378a" },
    { name: "رياضيات", color: "#ffb001", border: "#ffb001" },
    { name: "لغة عربية", color: "#48fb77", border: "#48fb77" },
    { name: "أحياء", color: "#efb8c8", border: "#efb8c8" },
    { name: "كيمياء", color: "#26577c", border: "#26577c" },
    { name: "فيزياء", color: "#e55604", border: "#e55604" },
  ];

  return (
    <div className="flex flex-wrap justify-end items-center gap-4 p-4 w-full">
      {homeData?.subjects?.map((subject: Subject, index: number) => (
        <div
          key={subject.id}
          className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-3xl border-2 flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundColor: `${subjects[index]?.color}20`,
            borderColor: subjects[index]?.border,
          }}
        >
          <div className="text-right text-black text-base md:text-lg lg:text-xl font-medium font-sst-arabic capitalize">
            {subject.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
