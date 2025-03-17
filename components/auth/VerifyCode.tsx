"use client";

import { postData } from "@/libs/axios/backendServer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyCode = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (!phone) {
      router.push("/");
    } else {
      setPhone(phone);
    }
  }, [router]);

  const verifyCode = async () => {
    if (code.length !== 4) {
      toast.error("الرجاء إدخال الرمز المكون من 4 أرقام");
      return;
    }

    setLoading(true);
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
      toast.error("خطأ في تحقق من الهاتف");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      // Create array from current code
      const codeArray = code.split('');
      // Update the value at specific index
      codeArray[index] = value;
      // Join back to string and trim to max 4 chars
      setCode(codeArray.join('').slice(0, 4));
      
      // Move focus to next input
      if (value && index < 3) {
        const inputs = document.querySelectorAll('input[type="text"]');
        (inputs[index + 1] as HTMLInputElement)?.focus();
      }
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/login/loginBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center overflow-hidden my-10 md:my-[50px]">
        <div className="bg-white rounded-3xl w-full max-w-[534px] flex items-center justify-center flex-col p-4 md:p-8">
          <div className="flex w-full items-center justify-center flex-col gap-4 md:gap-8">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" className="h-10 md:h-auto" />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-14 w-full mt-4 md:mt-[30px]">
            <div className="w-full flex flex-col items-center gap-4 md:gap-6">
              <div className="w-full max-w-[471.38px] px-4 py-5 md:px-5 md:py-[30px] bg-white rounded-[20px] md:rounded-[40px] shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] justify-center items-center gap-2.5 inline-flex">
                <div className="flex-col justify-center items-center gap-6 md:gap-11 inline-flex w-full">
                  <div className="text-black text-xl md:text-[40px] font-medium font-sst-arabic text-center">
                    تحقق من رقم الجوال
                  </div>
                  <div className="flex-col justify-start items-center gap-3 md:gap-[17px] flex">
                    <div className="text-center text-black text-base md:text-xl font-medium font-sst-arabic">
                      تم ارسال كود 4 ارقام لرقم
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-black text-sm md:text-base font-normal font-sst-arabic">
                        {phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-center gap-4 md:gap-5 flex w-full">
                    <div className="grid grid-cols-4 gap-2 md:gap-3.5 w-full max-w-[300px]">
                      {[...Array(4)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={code[index] || ''}
                          className="w-full h-[40px] md:h-[60px] bg-[#f2f2f2] border border-gray-200 rounded-xl text-center text-lg md:text-2xl font-sst-arabic focus:outline-none focus:border-[#239d60] focus:bg-white"
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Backspace' && !code[index] && index > 0) {
                              const inputs = document.querySelectorAll('input[type="text"]');
                              (inputs[index - 1] as HTMLInputElement)?.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={verifyCode}
                    disabled={loading || code.length !== 4}
                    className="w-full h-[45px] md:h-[65px] px-4 md:px-[100px] py-[11px] bg-[#239d60] rounded-xl justify-center items-center gap-2.5 inline-flex disabled:opacity-50 transition-all duration-300 hover:bg-[#1c8851]"
                  >
                    <div className="text-white text-base md:text-xl font-medium font-sst-arabic">
                      {loading ? "جاري التحقق..." : "تأكيد"}
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
