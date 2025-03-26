import { Books } from "@/libs/types/tpes";
import Link from "next/link";
import React from "react";

const PaymentBook = ({ cartData }: { cartData: Books }) => {
  console.log(cartData);
  return (
    <Link href={`/books/${cartData.id}`} className="flex flex-row w-full lg:w-fit justify-between py-2 px-3 rounded-lg gap-6  ">
      <div className="bg-white w-full lg:w-fit rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-[clamp(10px,1.25vw,240px)]">
        <div className="flex flex-row gap-[clamp(30px,5.20834vw,500px)]">
          <img className="rounded-lg h-[clamp(150px,9.53125vw,500px)] w-[clamp(100px,5.46875vw,400px)]" src={cartData.image} alt="Product" />
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-[#26577c] text-sm mb-2">
                <span>{cartData.subject}</span>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.87943 1.84144C7.01014 1.95348 7.02528 2.15026 6.91324 2.28098L4.59337 4.98749L6.91324 7.694C7.02528 7.82471 7.01014 8.0215 6.87943 8.13354C6.74871 8.24557 6.55193 8.23044 6.43989 8.09973L3.94614 5.19035C3.84608 5.07362 3.84608 4.90136 3.94614 4.78462L6.43989 1.87525C6.55193 1.74454 6.74871 1.7294 6.87943 1.84144Z"
                    fill="#26577C"
                  />
                </svg>
                <span>{cartData.author}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{cartData.name}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#26577c] text-lg font-bold">
                {cartData.price} جنيه
              </span>
              <span className="text-black text-lg">السعر :</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PaymentBook;
