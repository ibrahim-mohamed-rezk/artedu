import React from "react";

interface Module {
  name: string;
  description: string;
  duration: string;
  teacher: string;
  type: string | null;
  details: {
    thumbnail: string;
  };
}

const ExamCard = () => {
  return (
    <div className="bg-white rounded-[22px] shadow-sm border border-[#f1f1f2] p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-1/3 bg-black/20 rounded-[20px] h-24 flex items-center justify-center mb-4 sm:mb-0"></div>
        <div className="w-full sm:w-2/3 sm:pl-4 text-center sm:text-right">
          <p className="text-[#8a8686] text-xs">الدرس الاول</p>
          <h3 className="text-black text-sm font-bold mt-1">
            المعالجه علي التوازي
          </h3>
          <button className="mt-2 bg-[#b4b4b3] text-white text-sm rounded-full px-6 py-2">
            مشاهدة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
