import { Books, Courses } from "@/libs/types/tpes";
import React from "react";

interface FavoriteCardProps {
  item: Books | Courses;
  type: "books" | "courses";
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ item, type }) => {
  const isBook = type === "books";

  return (
    <div className="w-full sm:w-96 relative bg-white rounded-3xl shadow-sm border border-zinc-100 mb-4">
      <div className="w-full h-full p-2.5 flex justify-between items-center">
        {/* صورة العنصر */}
        <div className="w-2/5 h-24  rounded-3xl flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={isBook ? (item as Books)?.image : (item as Courses)?.cover}
            alt={isBook ? "Book cover" : "Course cover"}
          />
        </div>

        {/* معلومات العنصر */}
        <div className="w-3/5 flex flex-col items-end gap-2 px-2">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-cyan-800 text-xs">
              <span className="font-light">
                {isBook ? (item as Books)?.author : (item as Courses)?.teacher}
              </span>
              <span className="w-1 h-1 bg-cyan-800 rounded-full"></span>
              <span>
                {isBook ? (item as Books)?.subject : (item as Courses)?.subject}
              </span>
            </div>
            <div className="text-right text-black text-sm font-bold">
              {isBook ? (item as Books)?.name : (item as Courses)?.title}
            </div>
          </div>

          {/* السعر */}
          <div className="flex items-end gap-1">
            <span className="text-slate-400 text-xs">جنيه</span>
            <span className="text-cyan-800 text-base font-bold">
              {isBook
                ? (item as Books)?.price || 0
                : (item as Courses)?.price || 0}
            </span>
            <span className="text-black text-sm">: السعر </span>
          </div>

          {/* زر الشراء */}
          <button className="w-full py-2 rounded-lg text-white text-sm font-medium bg-orange-600">
            شراء الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
