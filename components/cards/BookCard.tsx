"use client";

import { useAddToFavorites } from "@/libs/hooks/useAddToFavorites";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  title?: string;
  author?: string;
  price?: number;
  image?: string;
  id?: number;
  is_favorite?: boolean;
}

const BookCard = ({ title, author, price, image, id, is_favorite }: Props) => {
  const { addToFavorites } = useAddToFavorites();
  const [isFav, setIsFav] = useState(is_favorite);

  useEffect(() => {
    setIsFav(is_favorite);
  }, [is_favorite]);

  return (
    <div className="w-[200px] h-[352px] p-[7px] bg-white rounded-[18px] shadow-md border border-[#f1f1f2] overflow-hidden flex flex-col">
      <Link href={`/books/${id}`}>
        <div className="relative">
          <img
            className="w-full h-[250px] object-cover rounded-t-[18px]"
            src={image || "https://placehold.co/200x260"}
            alt={title}
          />
          <div
            onClick={(e) => {
              e.preventDefault();
              addToFavorites(id?.toString() || null, "books");
              setIsFav((prev) => !prev);
            }}
            className="absolute top-2 left-2 cursor-pointer z-50"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.12158 12.0092C3.12158 18.3077 8.32757 21.6641 12.1385 24.6683C13.4832 25.7284 14.7784 26.7266 16.0737 26.7266C17.3689 26.7266 18.6641 25.7284 20.0088 24.6683C23.8197 21.6641 29.0257 18.3077 29.0257 12.0092C29.0257 5.71073 21.9019 1.24395 16.0737 7.29926C10.2454 1.24395 3.12158 5.71073 3.12158 12.0092Z"
                fill={isFav ? "red" : "#F1F1F2"}
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-right text-black text-base font-bold font-['SST Arabic'] leading-snug mb-1">
              {title}
            </h3>
            <p className="text-right text-[#6c7278] text-sm font-normal font-['SST Arabic']">
              {author}
            </p>
          </div>
          <div className="flex justify-start items-center w-full">
            <span className="text-black text-base font-medium font-['SST Arabic']">
              السعر :
            </span>
            <span className="text-[#26577c] text-xl font-bold font-['SST Arabic']">
              {price}
            </span>
            <span className="text-[#8c9ec5] text-xs font-medium font-['SST Arabic'] ml-1">
              جنيه
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
