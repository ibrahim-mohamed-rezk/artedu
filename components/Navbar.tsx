"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className={`right-0 top-0 w-[120px] order-10 h-[100vh] pt-[40px] pb-[40px] bg-[#fff2eb] rounded-tl-[15px] rounded-bl-[15px] flex flex-col justify-start items-center gap-[30px] overflow-hidden`}
    >
      <div className="flex-col justify-end items-center gap-[20px] flex">
        <Link
          href={`/login`}
          className="self-stretch px-2 py-3 bg-[#26577c] rounded-[15px] flex-col justify-center items-center inline-flex"
        >
          <div className="w-8 h-8 relative rounded-[5px] overflow-hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9453 1.25C13.5778 1.24998 12.4754 1.24996 11.6085 1.36652C10.7084 1.48754 9.95048 1.74643 9.34857 2.34835C8.82363 2.87328 8.55839 3.51836 8.41916 4.27635C8.28387 5.01291 8.25799 5.9143 8.25196 6.99583C8.24966 7.41003 8.58357 7.74768 8.99778 7.74999C9.41199 7.7523 9.74964 7.41838 9.75194 7.00418C9.75803 5.91068 9.78643 5.1356 9.89448 4.54735C9.99859 3.98054 10.1658 3.65246 10.4092 3.40901C10.686 3.13225 11.0746 2.9518 11.8083 2.85315C12.5637 2.75159 13.5648 2.75 15.0002 2.75H16.0002C17.4356 2.75 18.4367 2.75159 19.1921 2.85315C19.9259 2.9518 20.3144 3.13225 20.5912 3.40901C20.868 3.68577 21.0484 4.07435 21.1471 4.80812C21.2486 5.56347 21.2502 6.56459 21.2502 8V16C21.2502 17.4354 21.2486 18.4365 21.1471 19.1919C21.0484 19.9257 20.868 20.3142 20.5912 20.591C20.3144 20.8678 19.9259 21.0482 19.1921 21.1469C18.4367 21.2484 17.4356 21.25 16.0002 21.25H15.0002C13.5648 21.25 12.5637 21.2484 11.8083 21.1469C11.0746 21.0482 10.686 20.8678 10.4092 20.591C10.1658 20.3475 9.99859 20.0195 9.89448 19.4527C9.78643 18.8644 9.75803 18.0893 9.75194 16.9958C9.74964 16.5816 9.41199 16.2477 8.99778 16.25C8.58357 16.2523 8.24966 16.59 8.25196 17.0042C8.25799 18.0857 8.28387 18.9871 8.41916 19.7236C8.55839 20.4816 8.82363 21.1267 9.34857 21.6517C9.95048 22.2536 10.7084 22.5125 11.6085 22.6335C12.4754 22.75 13.5778 22.75 14.9453 22.75H16.0551C17.4227 22.75 18.525 22.75 19.392 22.6335C20.2921 22.5125 21.0499 22.2536 21.6519 21.6517C22.2538 21.0497 22.5127 20.2919 22.6337 19.3918C22.7503 18.5248 22.7502 17.4225 22.7502 16.0549V7.94513C22.7502 6.57754 22.7503 5.47522 22.6337 4.60825C22.5127 3.70814 22.2538 2.95027 21.6519 2.34835C21.0499 1.74643 20.2921 1.48754 19.392 1.36652C18.525 1.24996 17.4227 1.24998 16.0551 1.25H14.9453Z"
                fill="white"
              />
              <path
                d="M2.00098 11.249C1.58676 11.249 1.25098 11.5848 1.25098 11.999C1.25098 12.4132 1.58676 12.749 2.00098 12.749L13.9735 12.749L12.0129 14.4296C11.6984 14.6991 11.662 15.1726 11.9315 15.4871C12.2011 15.8016 12.6746 15.838 12.9891 15.5685L16.4891 12.5685C16.6553 12.426 16.751 12.218 16.751 11.999C16.751 11.7801 16.6553 11.5721 16.4891 11.4296L12.9891 8.42958C12.6746 8.16002 12.2011 8.19644 11.9315 8.51093C11.662 8.82543 11.6984 9.2989 12.0129 9.56847L13.9735 11.249L2.00098 11.249Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-[80px] text-center text-white text-lg font-medium font-sst-arabic leading-relaxed">
            تسجيل الدخول
          </div>
        </Link>
        <div className="w-[80px] text-center text-[#26577c] text-lg font-medium font-sst-arabic leading-relaxed">
          انضم الينا
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-[30px] flex overflow-hidden">
        <div className="pl-2 pr-2 py-2 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-[40px] h-[40px] relative overflow-hidden bg-gray-200"></div>
            <div className="text-center text-[#e55604] text-lg font-bold font-sst-arabic leading-tight">
              الرئيسية
            </div>
          </div>
        </div>
        <div className="pl-2 pr-2 py-2 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="w-[40px] h-[40px] relative overflow-hidden bg-gray-200"></div>
            <div className="text-center text-[#cbcbd4] text-lg font-normal font-sst-arabic leading-tight">
              الكورسات
            </div>
          </div>
        </div>
        <div className="pl-2 pr-2 py-2 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[40px] h-[40px] relative overflow-hidden bg-gray-200"></div>
          <div className="text-center text-[#cbcbd4] text-lg font-normal font-sst-arabic leading-tight">
            مشترياتي
          </div>
        </div>
        <div className="pl-2 pr-2 py-2 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-[40px] h-[40px] relative overflow-hidden bg-gray-200"></div>
          <div className="text-center text-[#cbcbd4] text-lg font-normal font-sst-arabic leading-tight">
            الكتب
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-2 flex">
        <div className="w-[50px] h-[50px] relative">
          <div className="w-[40px] h-[20px] left-[5px] top-[5px] absolute bg-gray-300"></div>
        </div>
        <div className="w-[100px] h-[20px] relative">
          <div className="w-[50px] h-[15px] left-[50px] top-0 absolute bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
