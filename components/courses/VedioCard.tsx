import React from "react";

interface Module {
  details: {
    title: string;
    thumbnail: string;
  };
}

const VedioCard = ({ module, index }: { module: Module; index: number }) => {
  return (
    <div
      className={` rounded-[22px] shadow-sm border border-[#f1f1f2] p-4 w-full ${
        index !== 0 ? "opacity-70 cursor-not-allowed bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex flex-row items-center md:items-start gap-4">
        <div
          style={{ backgroundImage: `url(${module?.details?.thumbnail})` }}
          className="w-full md:w-[161px] border border-[#f1f1f2] h-[120px] md:h-[92px] bg-cover bg-center rounded-[20px] overflow-hidden flex items-center justify-center"
        >
          <svg
            width="49"
            height="52"
            viewBox="0 0 49 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-12 md:h-12"
          >
            <rect
              x="0.764648"
              y="0.666687"
              width="47.9167"
              height="51.1111"
              rx="23.9583"
              fill="#D9D9D9"
              fillOpacity="0.2"
            />
            <path
              d="M17.145 12.0646L41.9645 26.0503L17.4427 40.5518L17.145 12.0646Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="w-full flex flex-col items-end">
          <p className="text-[#8a8686] text-xs">الدرس الاول</p>
          <h3 className="text-black text-sm font-bold mt-1 text-center md:text-right">
            {module?.details?.title}
          </h3>
          <button className={`mt-4 bg-[#E55604] text-white text-sm rounded-full px-6 md:px-9 py-2 w-full md:w-auto ${index !== 0 ? "opacity-70 cursor-not-allowed" : ""}`}>
            مشاهدة
          </button>
        </div>
      </div>
    </div>
  );
};

export default VedioCard;
