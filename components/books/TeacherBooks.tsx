"use client";

import BookCard from "../cards/BookCard";

const TeacherBooks = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-[27.84px] p-4">
      <div className="w-full flex flex-col lg:flex-row justify-between items-end">
        <div className="w-[122.51px] h-[29.70px] relative mt-4 lg:mt-0">
          <div data-svg-wrapper className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6424 5.78269C22.0316 6.11628 22.0766 6.70221 21.743 7.09139L14.8358 15.1499L21.743 23.2084C22.0766 23.5975 22.0316 24.1835 21.6424 24.5171C21.2532 24.8507 20.6673 24.8056 20.3337 24.4164L12.9087 15.7539C12.6108 15.4063 12.6108 14.8934 12.9087 14.5459L20.3337 5.88336C20.6673 5.49417 21.2532 5.4491 21.6424 5.78269ZM16.6925 5.78282C17.0817 6.11641 17.1268 6.70233 16.7932 7.09152L9.88589 15.15L16.7932 23.2085C17.1268 23.5977 17.0817 24.1836 16.6925 24.5172C16.3033 24.8508 15.7174 24.8057 15.3838 24.4165L7.95879 15.754C7.66087 15.4064 7.66087 14.8936 7.95879 14.546L15.3838 5.88349C15.7174 5.4943 16.3033 5.44923 16.6925 5.78282Z"
                fill="#FFB001"
              />
            </svg>
            <div className="ml-2 text-right text-[#ffb001] text-lg font-medium font-['SST Arabic'] underline">
              عرض الجميع
            </div>
          </div>
        </div>
        <div className="text-right text-black text-[22.27px] font-bold font-['SST Arabic'] leading-[31.18px]">
          كتب نفس المدرس لمواد مختلفة
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-end items-start gap-[18.56px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard title="" author="" price={0} image="" id={0} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TeacherBooks;
