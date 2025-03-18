"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/libs/store/hooks";
import { userMenueItems } from "@/libs/helpers/userMenueItems";
import { navbarItems } from "@/libs/helpers/navbarItems";
import "@/public/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenue, setShowProfileMenue] = useState(false);
  const { userData, token } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (token) setIsLoggedIn(true);
  }, [token]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div className="absolute p-4 z-[8999] right-0 top-0 w-full h-[72px] flex items-center justify-between bg-[#E5560433]">
          <div className="flex items-center gap-[10px]">
            <Link href="/">
              <img src="/images/logo.png" width={131} height={30} alt="logo" />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 p-2 bg-[#fff2eb] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      )}
      <div
        className={`${
          isMobile
            ? `fixed right-0 top-0 h-full w-[300px] transform gap-[10px] ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out z-40 `
            : "w-[120px] order-10 gap-[30px]"
        } pt-[40px] pb-[40px] bg-[#fff2eb] z-[9000] rounded-tl-[15px] rounded-bl-[15px] flex flex-col justify-start items-center `}
      >
        {/* close mobile menu button  */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute right-4 top-4 z-[9001] p-2 bg-[#fff2eb] rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        )}

        {/* auth buttons or user profile */}
        {isLoggedIn ? (
          // profile icon
          <div className="flex-col justify-end items-center gap-[24px] flex">
            <div className="w-[66px] h-[66px] relative flex items-center justify-center">
              <img
                className="w-full h-full cursor-pointer rounded-full object-cover"
                src={userData?.image || "/images/icons/userAvatar.png"}
                onClick={() => setShowProfileMenue((prev) => !prev)}
                alt="user profile"
              />

              {/* profile menue */}
              {showProfileMenue && !isMobile && (
                <div className="absolute z-[9000] top-[-15px] right-[80px]">
                  <div className="w-[430px] h-[748px] relative">
                    <div data-svg-wrapper className="left-0 top-0 absolute">
                      <svg
                        width="431"
                        height="748"
                        viewBox="0 0 431 748"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28 0C12.536 0 0 12.536 0 28V720C0 735.464 12.536 748 28 748H379C394.464 748 407 735.464 407 720V68.7681C407 66.2899 408.524 64.0667 410.835 63.1724L426.539 57.0957C431.652 55.1172 431.652 47.8828 426.539 45.9043L410.835 39.8276C408.524 38.9333 407 36.7101 407 34.2319V28C407 12.536 394.464 0 379 0H28Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="h-[695.95px] left-[25px] top-[27px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
                      <div className="self-stretch justify-start items-center gap-[65.04px] inline-flex">
                        <div className="grow shrink basis-0 h-[65.04px] justify-start items-center gap-[16.26px] flex">
                          <div className="grow shrink basis-0 flex-col justify-start items-end gap-[10.84px] inline-flex">
                            <div className="self-stretch text-right text-[#191a2c] text-xl font-bold font-['SST Arabic'] leading-loose">
                              نور محمد
                            </div>
                            <div className="w-[273.70px] text-right text-[#535662] text-[14.90px] font-medium font-['Inter'] leading-none">
                              +20 010 182 60 856
                            </div>
                          </div>
                          <div className="w-[65.04px] h-[65.04px] relative bg-[#ffd88d] rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={
                                userData?.image ||
                                "/images/icons/userAvatar.png"
                              }
                              alt="User Avatar"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full mx-auto border-b border-[#f1f1f2] block "></div>
                      <div className="self-stretch h-[600.91px] flex-col justify-start items-start gap-[15px] flex">
                        {userMenueItems.map((item, index) => (
                          <Link
                            href={item.fun ? "/login" : item.url || ""}
                            onClick={() => {
                              if (item.fun) {
                                item.fun();
                              }
                              setShowProfileMenue(false);
                            }}
                            key={index}
                            className={`self-stretch p-[16.40px] rounded-[10.93px] justify-start items-center gap-[16.40px] inline-flex hover:bg-[#26577C] cursor-pointer hover:text-white`}
                          >
                            <div className="grow shrink basis-0 h-[32.79px] justify-start items-center gap-[10.93px] flex">
                              <div
                                className={`grow shrink basis-0 text-right text-xl font-medium font-['SST Arabic'] leading-loose `}
                              >
                                {item.text}
                              </div>
                              <div className="relative">
                                <div
                                  className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center p-[5px]"
                                  dangerouslySetInnerHTML={{
                                    __html: item.icon,
                                  }}
                                />
                                {item.badge && (
                                  <div className="w-[6px] h-[6px] rounded-full border border-[#21212E] bg-[#FF0E00] absolute top-[6px] right-[8px]" />
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7387 27.0121C12.8602 28.4377 14.6219 29.3563 16.603 29.3563C18.5841 29.3563 20.3459 28.4377 21.4673 27.0121C18.2383 27.4496 14.9678 27.4496 11.7387 27.0121Z"
                  fill="#FFB001"
                />
                <path
                  d="M25.6019 12.023V12.9618C25.6019 14.0885 25.9234 15.1899 26.526 16.1273L28.0025 18.4245C29.3513 20.5228 28.3216 23.3749 25.9759 24.0384C19.8394 25.7742 13.3667 25.7742 7.23018 24.0384C4.88442 23.3749 3.85479 20.5228 5.20351 18.4245L6.68009 16.1273C7.28265 15.1899 7.60419 14.0885 7.60419 12.9618V12.023C7.60419 6.86834 11.6331 2.68967 16.603 2.68967C21.5729 2.68967 25.6019 6.86834 25.6019 12.023Z"
                  fill="#FFB001"
                />
              </svg>
              <div className="w-[10px] h-[10px] rounded-full border border-[#21212E] bg-[#FF0E00] absolute top-[1px] right-[4px]"></div>
            </div>
          </div>
        ) : (
          <div className="flex-col justify-end items-center gap-[20px] flex">
            <Link
              href="/login"
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
            <Link
              href={`/signup`}
              className="w-[80px] text-center text-[#26577c] text-lg font-medium font-sst-arabic leading-relaxed"
            >
              انضم الينا
            </Link>
          </div>
        )}

        {/* navigation links */}
        {isMobile ? (
          <div className="self-stretch px-[5px] flex-col justify-start items-start flex">
            {userMenueItems.map((item, index) => (
              <Link
                href={item.fun ? "/login" : item.url || ""}
                onClick={() => {
                  if (item.fun) {
                    item.fun();
                  }
                  setIsOpen(false);
                }}
                key={index}
                className={`self-stretch py-[12px] px-[16px] rounded-[10.93px] justify-start items-center gap-[16.40px] inline-flex ${
                  pathname === item.url ? "bg-[#26577C] text-white" : ""
                } hover:bg-[#26577C] cursor-pointer hover:text-white`}
              >
                <div className="grow shrink basis-0 h-[32.79px] justify-start items-center gap-[10.93px] flex">
                  <div
                    className={`grow shrink basis-0 text-right text-xl font-medium font-['SST Arabic'] leading-loose `}
                  >
                    {item.text}
                  </div>
                  <div className="relative">
                    <div
                      className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center p-[5px]"
                      dangerouslySetInnerHTML={{
                        __html: item.icon,
                      }}
                    />
                    {item.badge && (
                      <div className="w-[6px] h-[6px] rounded-full border border-[#21212E] bg-[#FF0E00] absolute top-[6px] right-[8px]" />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={`flex-col justify-center items-center  mt-[70px] flex overflow-hidden ${
              isMobile ? "gap-[15px]" : "gap-[30px]"
            }`}
          >
            {navbarItems.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.url}
                  className="pl-2 pr-2 py-2 rounded-[10px] flex-col justify-center items-center gap-2 inline-flex"
                >
                  <div className="flex-col justify-start items-center gap-2 inline-flex">
                    <div className="w-[40px] h-[40px] flex items-center justify-center relative overflow-hidden">
                      <div
                        className={`flex items-center justify-center p-[5px] ${
                          pathname === item.url
                            ? "navSvgContainerActive"
                            : "navSvgContainer"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: item.icon,
                        }}
                      />
                    </div>
                    <div
                      className={`text-center ${
                        pathname === item.url
                          ? "text-[#e55604]"
                          : "text-[#CBCBD4]"
                      } text-lg font-bold font-sst-arabic leading-tight`}
                    >
                      {item.label}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* logo */}
        <Link
          href={"/"}
          className={`flex-col justify-center  items-center gap-2 flex ${
            isMobile ? "" : "mt-[100px]"
          }`}
        >
          <div className="w-[50px] h-[50px] ">
            <div className="w-[40px] h-[20px]">
              <svg
                width="44"
                height="43"
                viewBox="0 0 44 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6144 20.3511C11.8586 15.5171 1.97076 14.2004 0.527773 17.4112C-0.153761 18.9278 1.17157 21.1816 3.89326 23.6485C2.59902 22.0364 2.07732 20.5643 2.56128 19.4252C3.93766 16.1855 12.9086 16.8983 22.5988 21.015C32.289 25.134 39.0289 31.0982 37.6525 34.3379C36.9776 35.9277 34.4691 36.5628 30.9482 36.3141C35.457 37.0602 38.6981 36.6494 39.4773 34.9152C40.9203 31.7044 33.3702 25.1828 22.6144 20.3489V20.3511Z"
                  fill="#22577D"
                />
                <path
                  d="M22.4812 35.9744C29.677 35.9744 35.5103 30.1398 35.5103 22.9425C35.5103 15.7451 29.677 9.91052 22.4812 9.91052C15.2855 9.91052 9.45215 15.7451 9.45215 22.9425C9.45215 30.1398 15.2855 35.9744 22.4812 35.9744Z"
                  fill="white"
                />
                <path
                  d="M28.7218 22.1386L18.8895 16.4609C18.2701 16.1034 17.4976 16.5497 17.4976 17.2647V28.6202C17.4976 29.3352 18.2701 29.7815 18.8895 29.424L28.7218 23.7462C29.3412 23.3887 29.3412 22.4961 28.7218 22.1386Z"
                  fill="#F15A22"
                />
                <path
                  d="M22.4816 34.9574C15.8571 34.9574 10.4692 29.5684 10.4692 22.9425C10.4692 16.3166 15.8571 10.9275 22.4816 10.9275C29.106 10.9275 34.4939 16.3166 34.4939 22.9425C34.4939 29.5684 29.106 34.9574 22.4816 34.9574ZM22.4816 12.8704C16.9294 12.8704 12.4117 17.3891 12.4117 22.9425C12.4117 28.4959 16.9294 33.0145 22.4816 33.0145C28.0337 33.0145 32.5514 28.4959 32.5514 22.9425C32.5514 17.3891 28.0337 12.8704 22.4816 12.8704Z"
                  fill="#22577D"
                />
                <path
                  d="M7.82056 20.3665L7.70068 20.9682C7.7806 20.7795 7.8139 20.5752 7.82056 20.3665Z"
                  fill="#22577D"
                />
                <path
                  d="M9.72118 17.642C9.75004 16.9692 9.08627 16.5251 9.03077 16.3075C8.60009 14.5866 9.35045 11.1715 9.03077 9.24639L11.6947 10.179V16.1232C13.9613 12.5505 17.9484 10.1723 22.4816 10.1723C27.0148 10.1723 31.0041 12.5505 33.2685 16.1232V10.3122C32.9333 10.4388 31.7767 10.9584 31.6724 10.3144L42.5902 6.8505L23.4273 0.839677L21.7468 0.779724L2.37305 6.84828L7.93854 8.73568C7.77648 10.9339 8.24934 13.654 7.9785 15.7812C7.87416 16.6006 7.17708 17.0513 7.18152 17.6331C7.18596 18.1882 7.8564 19.3518 7.8231 20.3621L7.96962 19.6338L8.2338 21.4967L8.76659 20.4309L9.29495 20.7018C8.90423 19.6648 9.69232 18.3104 9.72118 17.6398V17.642Z"
                  fill="#22577D"
                />
                <path
                  d="M38.7759 31.3868C40.8582 33.5806 41.7861 35.5946 41.149 37.0667C39.595 40.6595 29.3121 39.6669 18.1811 34.8507C9.6719 31.1669 3.13628 26.3174 1.22266 22.6314C1.75101 26.8148 9.05031 33.0987 19.129 37.6907C30.7107 42.9687 41.573 44.0124 43.389 40.0222C44.3702 37.8683 42.5121 34.6886 38.7736 31.389L38.7759 31.3868Z"
                  fill="#F15A22"
                />
                <path
                  d="M23.5094 0.577792L21.709 0.504517L1.47607 6.84175L7.6454 8.93565C7.59212 9.90822 7.64984 10.9763 7.70312 12.011C7.77194 13.2967 7.84298 14.6267 7.69868 15.7525C7.65206 16.1122 7.46558 16.3987 7.28576 16.6762C7.09485 16.9715 6.89727 17.2757 6.89949 17.6421C6.89949 17.9152 7.02159 18.2661 7.16367 18.6724C7.34792 19.2031 7.55438 19.8026 7.54106 20.3422L7.42562 20.9151L7.88516 21.055L8.08052 22.4206L8.88637 20.8107L9.80544 21.2793L9.55236 20.6087C9.32593 20.0091 9.57456 19.2253 9.77214 18.5947C9.88536 18.2306 9.98526 17.9175 9.99636 17.6577C10.0208 17.0892 9.6678 16.6784 9.43471 16.4053C9.38143 16.3431 9.30817 16.2565 9.29707 16.2432C9.08173 15.3861 9.18163 14.0139 9.27709 12.6883C9.35257 11.6313 9.43249 10.5433 9.35701 9.65953L11.4149 10.379V17.0803L11.9277 16.2743C14.241 12.6283 18.1859 10.4522 22.4815 10.4522C26.7772 10.4522 30.7221 12.6283 33.0353 16.2743L33.5481 17.0803V10.0148L43.5136 6.85285L23.5116 0.580013L23.5094 0.577792Z"
                  fill="white"
                />
                <path
                  d="M7.82056 20.3665L7.70068 20.9682C7.7806 20.7795 7.8139 20.5752 7.82056 20.3665Z"
                  fill="#22577D"
                />
                <path
                  d="M9.72118 17.642C9.75004 16.9692 9.08627 16.5251 9.03077 16.3075C8.60009 14.5866 9.35045 11.1715 9.03077 9.24639L11.6947 10.179V16.1232C13.9613 12.5505 17.9484 10.1723 22.4816 10.1723C27.0148 10.1723 31.0041 12.5505 33.2685 16.1232V10.3122C32.9333 10.4388 31.7767 10.9584 31.6724 10.3144L42.5902 6.8505L23.4273 0.839677L21.7468 0.779724L2.37305 6.84828L7.93854 8.73568C7.77648 10.9339 8.24934 13.654 7.9785 15.7812C7.87416 16.6006 7.17708 17.0513 7.18152 17.6331C7.18596 18.1882 7.8564 19.3518 7.8231 20.3621L7.96962 19.6338L8.2338 21.4967L8.76659 20.4309L9.29495 20.7018C8.90423 19.6648 9.69232 18.3104 9.72118 17.6398V17.642Z"
                  fill="#22577D"
                />
              </svg>
            </div>
          </div>
          <div className="w-[100px] h-[20px]">
            <div className="w-[50px] h-[15px]">
              <svg
                width="86"
                height="17"
                viewBox="0 0 86 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.7739 0.451355V2.81508H56.9883V0.451355H47.7739ZM47.7739 12.0685V14.4364H57.3254V12.0685H47.7739ZM50.5892 6.00918V6.00096H47.7739V8.37701H56.4623V6.00918H50.5892Z"
                  fill="#F15A22"
                />
                <path
                  d="M65.2161 0.451355H59.7253V2.81508H64.7558C65.6641 2.81508 66.3875 2.96717 66.93 3.26315C67.4725 3.55913 67.8752 4.04832 68.1342 4.7225C68.3931 5.39256 68.5246 6.30927 68.5246 7.4603C68.5246 8.61133 68.4054 9.54037 68.167 10.2063C67.9328 10.8682 67.5423 11.345 67.0039 11.6328C66.4656 11.9246 65.7299 12.0685 64.7969 12.0685H59.7212V14.4364H65.1833C67.3163 14.4364 68.8945 13.8238 69.9138 12.5947C70.933 11.3697 71.4468 9.68836 71.4468 7.54663C71.4468 2.81507 69.3671 0.451355 65.2161 0.451355Z"
                  fill="#F15A22"
                />
                <path
                  d="M82.0257 0.451289V8.74281C82.0257 9.6143 81.9518 10.2967 81.7997 10.7982C81.6476 11.2956 81.3805 11.6615 80.99 11.8999C80.8092 12.0068 80.5914 12.0931 80.3407 12.1507V14.6377C81.2654 14.5637 82.0257 14.3664 82.6258 14.0499C83.4108 13.6347 83.9779 12.9893 84.3232 12.1178C84.6684 11.2463 84.8369 10.0994 84.8369 8.67704V0.455397H82.0216L82.0257 0.451289ZM76.7856 10.7859C76.5924 10.2803 76.4938 9.61019 76.4938 8.7757V0.447174H73.6826V8.68937C73.6826 10.0583 73.8634 11.1805 74.2169 12.0479C74.5704 12.9153 75.1704 13.5689 76.0088 14.0088C76.6993 14.3746 77.5952 14.5843 78.6967 14.6418V12.2041C78.3063 12.1507 77.9734 12.0479 77.698 11.8917C77.2829 11.6574 76.9788 11.2874 76.7856 10.7818V10.7859Z"
                  fill="#F15A22"
                />
                <path
                  d="M7.29126 2.15713L2.50732 14.4361H5.51167L8.53245 5.64722L7.29126 2.16124V2.15713ZM10.7559 0.451141H8.27353L9.3421 3.45204H9.35032C9.35032 3.45204 9.35443 3.48081 9.35443 3.49314C9.35443 3.50137 9.35854 3.50548 9.35854 3.51781L9.43252 3.73157L10.0696 5.50745L13.2794 14.4361H16.3618L10.7518 0.451141H10.7559Z"
                  fill="#22577D"
                />
                <path
                  d="M27.5324 10.6706C27.2571 10.1116 27.0146 9.6717 26.7968 9.35106C26.5789 9.03042 26.3775 8.78788 26.1762 8.61934C25.9789 8.45901 25.7611 8.33158 25.5186 8.24114V8.20415C26.5543 7.89994 27.3187 7.43953 27.8201 6.80235C28.3215 6.16518 28.5722 5.35535 28.5722 4.36875C28.5722 3.10262 28.1407 2.13246 27.2899 1.45829C26.4392 0.788227 25.2309 0.451141 23.665 0.451141H17.8659V2.80664H23.402C24.1705 2.80664 24.7377 2.9423 25.1076 3.21772C25.4734 3.49315 25.6542 3.933 25.6542 4.54551C25.6542 5.21147 25.4364 5.6801 25.0007 5.95553C24.561 6.23095 23.9198 6.36661 23.0691 6.36661H17.8618V14.4403H20.673V8.59878H21.0634C21.6018 8.59878 22.0334 8.62756 22.3457 8.68922C22.6622 8.74677 22.9211 8.84132 23.1307 8.97697C23.3403 9.11263 23.5458 9.31407 23.7554 9.57305C24.0719 9.9718 24.4705 10.6583 24.935 11.6449L26.2707 14.4444H29.3613L27.5242 10.683L27.5324 10.6706Z"
                  fill="#22577D"
                />
                <path
                  d="M34.0832 4.1221V14.4361H36.8985V4.1221H34.0832ZM30.0391 0.451141V2.81486H40.9468V0.451141H30.0391Z"
                  fill="#22577D"
                />
                <path
                  d="M85.9998 15.8953H0V16.886H85.9998V15.8953Z"
                  fill="#22577D"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* mobile menue overlay  */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed z-[8000] w-[100vw] h-[100vh] top-0 left-0 bottom-0 right-0 bg-[#0000003b]"
        ></div>
      )}

      {/* mobile navbar */}
      {/* appears fixed in bottom in mobile screen */}
      {isMobile && (
        <div className="fixed w-full z-50 bottom-0">
          <div className="w-full h-20 rounded-t-[10px] bg-white relative shadow-[0px_-3px_4px_0px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="flex justify-around items-center h-full px-4">
              {navbarItems.map((item) => {
                return (
                  <Link
                    key={item.label}
                    href={item.url}
                    className="flex flex-col items-center"
                  >
                    <div className="w-[42px] h-[42px] relative overflow-hidden">
                      <div
                        className={`flex items-center justify-center p-[5px] ${
                          pathname === item.url
                            ? "navSvgContainerActive"
                            : "navSvgContainer"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: item.icon,
                        }}
                      />
                    </div>
                    <div
                      className={`text-center text-neutral-300 text-[10px] font-normal font-['SST_Arabic'] leading-3 mt-1 ${
                        pathname === item.url
                          ? "text-[#F15A22]"
                          : "text-neutral-300"
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
