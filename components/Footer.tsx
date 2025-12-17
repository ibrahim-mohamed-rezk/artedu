import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full mb-[80px] md:mb-0 mt-[20px] mx-auto p-6 lg:px-[50px] lg:py-[32px] bg-[#fff2eb] rounded-[25px] flex flex-col items-start overflow-hidden">
      <div className="container mx-auto flex flex-col items-start">
        {/* footer top */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[30px] items-start mt-4">
          {/* footer top left */}
          <div className="flex order-2 lg:order-1 gap-[30px] lg:gap-[77px] flex-col lg:flex-row w-full lg:w-[60%] mb-4">
            <div className="w-full lg:w-[214px] mb-4 order-3 lg:order-1">
              <div className="text-right text-[#0f2136] text-lg font-medium font-sst-arabic leading-[30px]">
                التواصل
              </div>
              <div className="flex flex-row lg:flex-col items-end gap-[20px] mt-[10px] justify-end lg:justify-start lg:items-end ">
                <div className="flex items-center gap-2.5">
                  <div className="text-[#02073e] text-[15px] font-normal font-dm-sans leading-[37.50px]">
                    Facebook
                  </div>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.862793"
                      width="20"
                      height="20"
                      rx="10"
                      fill="#3B5998"
                    />
                    <path
                      d="M12.7736 10.8503H10.9893V17.3874H8.28579V10.8503H7V8.55285H8.28579V7.06616C8.28579 6.00302 8.79079 4.33826 11.0133 4.33826L13.0159 4.34663V6.57666H11.5629C11.3246 6.57666 10.9894 6.69574 10.9894 7.20289V8.55498H13.0098L12.7736 10.8503Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2 text-[15px] font-normal font-dm-sans leading-[37.50px]">
                  <div className="text-[#02073e] text-[15px] font-normal font-dm-sans leading-[37.50px]">
                    Facebook
                  </div>
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2.66003C19.2641 2.98637 18.4733 3.20694 17.6433 3.30614C18.4905 2.79829 19.1411 1.99416 19.4475 1.03605C18.6547 1.50622 17.7765 1.84771 16.8419 2.03177C16.0933 1.2343 15.027 0.735962 13.8468 0.735962C11.5807 0.735962 9.74344 2.57312 9.74344 4.83911C9.74344 5.1607 9.7798 5.47388 9.84974 5.77419C6.43952 5.60308 3.41607 3.96951 1.3923 1.48705C1.0391 2.09307 0.836753 2.79792 0.836753 3.54989C0.836753 4.97342 1.56121 6.22936 2.6622 6.96516C1.98954 6.94387 1.35689 6.7593 0.803614 6.45197C0.803321 6.46909 0.803321 6.48628 0.803321 6.50355C0.803321 8.49162 2.21771 10.1501 4.09481 10.527C3.75047 10.6207 3.38798 10.6709 3.01372 10.6709C2.74933 10.6709 2.49226 10.6452 2.24178 10.5973C2.76389 12.2275 4.27923 13.4137 6.07476 13.4469C4.67047 14.5474 2.9012 15.2034 0.978821 15.2034C0.647646 15.2034 0.321007 15.184 0 15.1461C1.81587 16.3103 3.97271 16.9895 6.28992 16.9895C13.8372 16.9895 17.9644 10.7371 17.9644 5.31492C17.9644 5.137 17.9604 4.96004 17.9525 4.7841C18.7542 4.20558 19.4499 3.48288 20 2.66003Z"
                      fill="#55ACEE"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[161px] mb-4 order-1 lg:order-2">
              <div className="text-right text-[#0f2136] text-lg font-medium font-sst-arabic leading-[30px]">
                <Link href={"/"}>الصفحة الرئيسية</Link>
              </div>
              <ul className="opacity-80 text-right text-[#02073e] text-[15px] font-normal font-sst-arabic leading-[37.50px] flex gap-[20px] mt-[10px] flex-row lg:flex-col justify-end lg:justify-start lg:items-end">
                <li>
                  {" "}
                  <Link href={"/teachers"}>مدرسينا</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>مقالات</Link>
                </li>
                <li>
                  <Link href={"/join-us"}>التوظيف</Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-[164px] mb-4 order-2 lg:order-3">
              <div className="text-right text-[#0f2136] text-lg font-medium font-sst-arabic leading-[30px]">
                <Link href={"/about"}>معلومات عنا</Link>
              </div>
              <ul className="opacity-80 text-right text-[#02073e] text-[15px] font-normal font-sst-arabic leading-[37.50px] flex gap-[20px] mt-[10px] flex-row lg:flex-col justify-end lg:justify-start lg:items-end">
                <li>
                  <Link href={"/contact-us"}>مركز الدعم</Link>
                </li>
                {/* <li>دعم العملاء</li> */}
                {/* <li>نبذة عنا</li> */}
                <li>
                  <Link href={"/terms-and-conditions"}>حقوق النشر</Link>
                </li>
                <li>
                  <Link href={"/privacy"}>الخصوصية</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* footer top right */}
          <div className="flex order-1 lg:order-2 flex-col w-full lg:w-[40%] lg:max-w-[420px]  items-end mb-4 ">
            <div>
              <Link href={"/"}>
                <img src="/images/footerLogo.png" alt="logo" className="mb-4" />
              </Link>
            </div>
            <div className="w-full flex flex-col justify-start mt-[24px] lg:mt-[40px] items-end gap-4">
              <div className="self-stretch text-right text-black text-base font-medium font-sst-arabic leading-normal">
                الحصول علي احدث الاخبار
              </div>
              <div className="self-stretch px-2.5 py-2.5 bg-[#26577c] rounded-[10px] border border-[#868686] flex-col justify-start items-center gap-2.5 flex">
                <div className="w-full flex justify-between items-center">
                  <button className="w-[30%] py-2 bg-white rounded-[10px] border border-[#868686] flex justify-center items-center">
                    <div className="text-[#4e4f5d] text-lg font-bold font-sst-arabic leading-normal">
                      اشترك
                    </div>
                  </button>
                  <input
                    type="email"
                    placeholder="ادخل بريدك الالكتروني"
                    className="w-full text-right px-2.5 py-2 bg-transparent rounded-[10px] text-white text-lg font-normal font-sst-arabic leading-normal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center mt-4">
          <div className="opacity-60 text-center lg:text-left order-2 lg:order-1">
            <span className="text-[#0f2136] text-sm font-normal font-dm-sans">
              Copyright by 2019{" "}
            </span>
            <span className="text-[#0f2136] text-sm font-normal font-dm-sans underline">
              devunity
            </span>
            <span className="text-[#0f2136] text-sm font-normal font-dm-sans">
              , Inc
            </span>
          </div>
          <div className="text-[#0F2137] text-sm font-normal font-sst-arabic text-center lg:text-right order-1 lg:order-2">
            <Link href={"/terms-and-conditions"} className="hover:underline">
              شروط الاستخدام
            </Link>
            {" | "}
            <Link href={"/privacy"} className="hover:underline">
              الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
