"use client";

import { useState } from "react";
import { postData } from "@/libs/axios/backendServer";
import PhoneInput from "@/components/inputs/PhoneInput";
import PasswordInput from "../inputs/PasswordInput";
import Link from "next/link";

interface LoginProps {
  className?: string;
}

const Login = ({ className = "" }: LoginProps) => {
  const [countryCode, setCountryCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("password", password);
    // formData.append("country_code", countryCode);
    // formData.append("_token", csrfToken); // Include CSRF token in the request

    try {
      const response = await postData("login-api", formData);

      if (response) {
        // Handle successful login
        console.log("Login successful", response);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form
      onSubmit={handelLogin}
      className={`w-full flex flex-col gap-4 mt-[25px] ${className}`}
    >
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-500 w-full text-end text-xs font-medium font-['SST Arabic']">
          رقم هاتف ولي الامر
        </label>
        <PhoneInput
          value={phone}
          countryCode={countryCode}
          onChangeFun={setPhone}
          onCountryCodeChange={setCountryCode}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-500 text-xs font-medium font-['SST Arabic'] w-full text-end">
          الرقم السري
        </label>
        <PasswordInput changePassword={setPassword} value={password} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-2">
        <Link
          href="/forgot-password"
          className="text-right text-[#26577c] text-xs font-bold font-['SST Arabic'] leading-none"
        >
          هل نسيت الرقم السري ؟
        </Link>
        <div className="flex items-center gap-2">
          <div className="text-center text-[#6c7278] text-xs font-medium font-['SST Arabic'] leading-[18px]">
            تذكرني
          </div>
          <div className="w-5 h-5 relative overflow-hidden">
            <input type="checkbox" className="w-full h-full cursor-pointer" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-4 px-6 py-3 bg-orange-600 text-white rounded-xl text-center font-medium hover:bg-orange-700 transition-colors"
      >
        تسجيل الدخول
      </button>
    </form>
  );
};

export default Login;
