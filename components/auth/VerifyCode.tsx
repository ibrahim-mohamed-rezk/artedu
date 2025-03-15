"use client";

import { postData } from "@/libs/axios/backendServer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyCode = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (!phone) {
      router.push("/");
    } else {
      setPhone(phone);
    }
  }, []);

  const verifyCode = async () => {
    try {
      const formData = new FormData();
      formData.append("phone", phone!);
      formData.append("code", code);
      const response = await postData("verify-code-register", formData);
      toast.success("تم التحقق من الهاتف بنجاح");
      if (typeof window !== "undefined") {
        localStorage.removeItem("phone");
        localStorage.setItem("token", response.token);
      }
      router.push("/");
    } catch (error) {
      console.error("Error verifying code:", error);
      toast.error("خطأ في تحقق من الهاتف");
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden "
      style={{
        backgroundImage: "url('/images/login/loginBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex items-center justify-center overflow-hidden my-[50px]">
        <div className="bg-white rounded-3xl w-[534px] flex items-center justify-center flex-col p-8">
          {/* login header */}
          <div className="flex w-full items-center justify-center flex-col gap-8">
            {/* logo */}
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-14 w-full mt-[30px]">
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full max-w-[471.38px] px-4 sm:px-5 py-6 sm:py-[30px] bg-white rounded-[40px] shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] justify-center items-center gap-2.5 inline-flex">
                <div className="flex-col justify-center items-center gap-8 sm:gap-11 inline-flex w-full">
                  <div className="text-black text-2xl sm:text-[40px] font-medium font-sst-arabic">
                    تحقق من رقم الجوال
                  </div>
                  <div className="flex-col justify-start items-center gap-4 sm:gap-[17px] flex">
                    <div className="text-center text-black text-lg sm:text-xl font-medium font-sst-arabic">
                      تم ارسال كود 4 ارقام لرقم
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-black text-sm sm:text-base font-normal font-sst-arabic">
                        {/* {email} */}
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-5 flex w-full">
                    <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-[300px]">
                      {[...Array(4)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-full h-[40px] sm:h-[60px] bg-[#d9d9d9] rounded-xl text-center text-lg sm:text-2xl font-sst-arabic"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value && index < 5) {
                              (
                                e.target.nextElementSibling as HTMLInputElement
                              )?.focus();
                            }
                            setCode((prev) => prev + value);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={verifyCode}
                    // disabled={loading}
                    className="w-full h-[50px] sm:h-[65px] px-4 sm:px-[100px] py-[11px] bg-[#239d60] rounded-xl justify-center items-center gap-2.5 inline-flex disabled:opacity-20"
                  >
                    <div className="text-white text-lg sm:text-xl font-medium font-sst-arabic">
                      {"Confirm"}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
