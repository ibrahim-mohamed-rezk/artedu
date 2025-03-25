import React from "react";

interface Module {
  description: string;
  duration: string;
  teacher: string;
  type: string | null;
  details: {
    title: string;
    thumbnail: string;
  };
}

const ExamCard = ({ module }: { module: Module }) => {
  return (
    <div className="bg-gray-100 rounded-[22px] shadow-sm border border-[#f1f1f2] p-4 w-full opacity-70 cursor-not-allowed">
      <div className="flex flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-[161px] border border-[#f1f1f2] h-[120px] md:h-[92px] overflow-hidden rounded-[20px] flex items-center justify-center">
          <img
            src={module?.details?.thumbnail}
            alt={module?.details?.title}
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="w-full flex flex-col items-end">
          <p className="text-[#8a8686] text-xs">{module?.details?.title}</p>
          <h3 className="text-black text-sm font-bold mt-1 text-center md:text-right">
            {module?.description}
          </h3>
          <button className="mt-4 cursor-not-allowed bg-[#b4b4b3] text-white text-sm rounded-full px-6 md:px-9 py-2 w-full md:w-auto">
            مشاهدة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
