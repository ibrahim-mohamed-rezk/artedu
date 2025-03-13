"use client";

import { useEffect, useState } from "react";
import BookCard from "../cards/BookCard";
import { getData } from "@/libs/axios/backendServer";

interface Book {
  name: string;
  author: string;
  image: string;
  price: number;
  id: number;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getData("books-api");
      setBooks(response.data.items);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full pt-4 sm:pt-8 md:pt-12 lg:pt-16">
          {/* filters */}
          <div className="w-full max-w-[1518px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 bg-[#e55604]/20 rounded-lg shadow-sm border border-[#f1f1f2] flex items-center gap-2">
                <div className="relative">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.376 3.78223C15.5813 3.78223 15.7746 3.87887 15.8977 4.04309L18.5063 7.52121C18.7224 7.80935 18.664 8.21812 18.3759 8.43422C18.0878 8.65032 17.679 8.59193 17.4629 8.30379L16.0282 6.39082V16.3904L17.4629 14.4775C17.679 14.1893 18.0878 14.1309 18.3759 14.347C18.664 14.5631 18.7224 14.9719 18.5063 15.26L15.8977 18.7382C15.7746 18.9024 15.5813 18.999 15.376 18.999C15.1707 18.999 14.9775 18.9024 14.8543 18.7382L12.2457 15.26C12.0296 14.9719 12.088 14.5631 12.3761 14.347C12.6643 14.1309 13.073 14.1893 13.2891 14.4775L14.7239 16.3904V6.39082L13.2891 8.30379C13.073 8.59193 12.6643 8.65032 12.3761 8.43422C12.088 8.21812 12.0296 7.80935 12.2457 7.52121L14.8543 4.04309C14.9775 3.87887 15.1707 3.78223 15.376 3.78223Z"
                      fill="#26577C"
                    />
                    <g opacity="0.5">
                      <path
                        d="M3.41992 7.04296C3.41992 6.68278 3.7119 6.39081 4.07207 6.39081H10.1588C10.519 6.39081 10.8109 6.68278 10.8109 7.04296C10.8109 7.40313 10.519 7.69511 10.1588 7.69511H4.07207C3.7119 7.69511 3.41992 7.40313 3.41992 7.04296Z"
                        fill="#26577C"
                      />
                      <path
                        d="M3.41992 11.3906C3.41992 11.0304 3.7119 10.7385 4.07207 10.7385H10.1588C10.519 10.7385 10.8109 11.0304 10.8109 11.3906C10.8109 11.7508 10.519 12.0428 10.1588 12.0428H4.07207C3.7119 12.0428 3.41992 11.7508 3.41992 11.3906Z"
                        fill="#26577C"
                      />
                      <path
                        d="M3.41992 15.7383C3.41992 15.3781 3.7119 15.0861 4.07207 15.0861H10.1588C10.519 15.0861 10.8109 15.3781 10.8109 15.7383C10.8109 16.0984 10.519 16.3904 10.1588 16.3904H4.07207C3.7119 16.3904 3.41992 16.0984 3.41992 15.7383Z"
                        fill="#26577C"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-[#26577c] text-xs sm:text-sm font-normal font-['SST Arabic']">
                  ترتيب حسب
                </div>
              </div>
            </div>
            <div className="text-right text-black text-sm sm:text-base font-normal font-['SST Arabic'] leading-[23.19px] tracking-tight">
              البحث بناء علي
            </div>
          </div>

          {/* teachers grid */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
            {books?.map((book: Book) => (
              <BookCard
                key={book?.id}
                title={book?.name}
                author={book?.author}
                price={book?.price}
                image={book?.image}
                id={book?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
