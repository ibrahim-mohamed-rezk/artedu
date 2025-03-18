import React from "react";

// interface Module {
//   name: string;
//   description: string;
//   duration: string;
//   teacher: string;
//   type: string | null;
//   details: {
//     thumbnail: string;
//   };
// }

const ExamCard = () => {
  return (
    <div className="bg-white rounded-[22px] shadow-sm border border-[#f1f1f2] p-4 w-full">
      <div className="flex flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-[161px] border border-[#f1f1f2] h-[120px] md:h-[92px] bg-black/20 rounded-[20px] flex items-center justify-center"></div>
        <div className="w-full flex flex-col items-end">
          <p className="text-[#8a8686] text-xs">الدرس الاول</p>
          <h3 className="text-black text-sm font-bold mt-1 text-center md:text-right">
            المعالجه علي التوازي
          </h3>
          <button className="mt-4 bg-[#b4b4b3] text-white text-sm rounded-full px-6 md:px-9 py-2 w-full md:w-auto">
            مشاهدة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
