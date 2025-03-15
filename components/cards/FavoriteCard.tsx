import React from "react";

const FavoriteCard = () => {
  return (
    <div className="w-full sm:w-96 relative bg-white rounded-3xl shadow-sm border border-zinc-100 mb-4">
      <div className="w-full h-full p-2.5 flex justify-between items-center">
        <div className="w-2/5 h-24 bg-slate-400/30 rounded-3xl flex justify-center items-center overflow-hidden">
          <img
            className="w-14 h-20 rounded-lg object-cover"
            src="https://placehold.co/58x83"
            alt="Book cover"
          />
        </div>
        <div className="w-3/5 flex flex-col items-end gap-2 px-2">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-cyan-800 text-xs">
              <span className="font-light">ا.وائل عيسي</span>
              <span className="w-1 h-1 bg-cyan-800 rounded-full"></span>
              <span>لغة عربية</span>
            </div>
            <div className="text-right text-black text-sm font-bold">
              بنك اسئلة الباب الاول
            </div>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-cyan-800 text-base font-bold">350</span>
            <span className="text-slate-400 text-xs">جنيه</span>
            <span className="text-black text-sm">السعر :</span>
          </div>
          <button
            className={`w-full py-2 rounded-lg text-white text-sm font-medium bg-orange-600`}
          >
            شراء الان
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
