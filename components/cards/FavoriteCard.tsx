"use client";

import { Books, Courses } from "@/libs/types/tpes";
import React, { useState } from "react";
import { formatPrice, isFreePrice } from "@/libs/utils/formatPrice";
import { useRouter } from "next/navigation";

interface FavoriteCardProps {
  item: Books | Courses;
  type: "books" | "courses";
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ item, type }) => {
  const isBook = type === "books";
  const price = isBook ? (item as Books)?.price : (item as Courses)?.price;
  const cover = isBook ? (item as Books)?.image : (item as Courses)?.cover;
  const title = isBook ? (item as Books)?.name : (item as Courses)?.title;
  const teacher = isBook ? (item as Books)?.author : (item as Courses)?.teacher;
  const subject = isBook ? (item as Books)?.subject : (item as Courses)?.subject;
  const free = isFreePrice(price);
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const handlePurchase = () => {
    const itemId = isBook ? (item as Books)?.id : (item as Courses)?.id;
    const paymentType = isBook ? "book" : "course";
    router.push(`/payments/${paymentType}/${itemId}`);
  };

  const showImage = cover && !imgError;

  return (
    <div className="group w-full sm:w-[420px] bg-white rounded-[24px] border border-[#f1f1f2] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_24px_0px_rgba(38,87,124,0.12)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      <div className="p-3 flex gap-4">
        {/* Cover */}
        <div className="relative w-[130px] h-[130px] shrink-0 rounded-[18px] overflow-hidden bg-gradient-to-br from-[#fff2eb] to-[#f4f7fa]">
          {showImage ? (
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={cover}
              onError={() => setImgError(true)}
              alt={title || (isBook ? "كتاب" : "كورس")}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#26577c]/40">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isBook ? (
                  <path
                    d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM4 20.5A2.5 2.5 0 0 0 6.5 23H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <rect
                      x="3"
                      y="4.5"
                      width="18"
                      height="15"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10.5 9.2v5.6l4.5-2.8-4.5-2.8Z"
                      fill="currentColor"
                    />
                  </>
                )}
              </svg>
            </div>
          )}
          {/* Type badge */}
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[#26577c] text-[10px] font-bold shadow-sm">
            {isBook ? "كتاب" : "كورس"}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col items-end text-right gap-1.5">
          {(teacher || subject) && (
            <div className="flex items-center gap-1.5 text-[#26577c] text-xs">
              {subject && <span className="font-medium">{subject}</span>}
              {teacher && subject && (
                <span className="w-1 h-1 bg-[#26577c] rounded-full" />
              )}
              {teacher && <span className="font-light">{teacher}</span>}
            </div>
          )}

          <h3
            title={title}
            className="w-full text-right text-black text-[15px] font-bold font-sst-arabic leading-snug line-clamp-2"
          >
            {title || "بدون عنوان"}
          </h3>

          {/* Price pill */}
          <div className="mt-auto">
            {free ? (
              <span className="inline-block px-3 py-1 rounded-full bg-[#26577c]/10 text-[#26577c] text-xs font-bold">
                {formatPrice(price)}
              </span>
            ) : (
              <span className="inline-flex items-baseline gap-1 px-3 py-1 rounded-full bg-[#fff2eb] text-[#e55604] font-bold">
                <span className="text-base">{formatPrice(price)}</span>
                <span className="text-[10px]">جنيه</span>
              </span>
            )}
          </div>

          {/* Buy button */}
          <button
            onClick={handlePurchase}
            className="w-full mt-1 py-2.5 rounded-[12px] text-white text-sm font-bold font-sst-arabic bg-[#e55604] hover:bg-[#e55604]/90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.5h2l1.5 12.5a2 2 0 0 0 2 1.75h9.2a2 2 0 0 0 1.97-1.64l1.4-7.36H6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
              <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
            </svg>
            شراء الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
