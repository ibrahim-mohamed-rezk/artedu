"use client";

import React, { useState } from "react";
import PasswordInput from "@/components/inputs/PasswordInput";

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-full border border-[#F1F1F2] rounded-3xl p-4">
      <div className="flex flex-col md:flex-row justify-end items-start gap-6">
        <div className="flex flex-col justify-start items-end gap-[5px] w-full md:w-auto">
          <div className="h-5 rounded-[100px] flex justify-center items-center gap-2.5">
            <div className="justify-start text-Grey text-xs font-medium font-['SST_Arabic'] leading-tight">
              اعد ادخال الرقم السري
            </div>
          </div>
          <PasswordInput
            value={confirmPassword}
            changePassword={setConfirmPassword}
            className="w-full md:w-[clamp(100px,16.6666664vw,1000px)]"
          />
        </div>
        <div className="flex flex-col justify-start items-end gap-[5px] w-full md:w-auto">
          <div className="h-5 rounded-[100px] flex justify-center items-center gap-2.5">
            <div className="justify-start text-Grey text-xs font-medium font-['SST_Arabic'] leading-tight">
              ادخل الرقم السري
            </div>
          </div>
          <PasswordInput
            value={password}
            changePassword={setPassword}
            className="w-full md:w-[clamp(100px,16.6666664vw,1000px)]"
          />
        </div>
      </div>
      <div className="w-full mt-[50px] flex justify-center items-center">
        <button className="text-center text-white rounded-2xl self-stretch px-10 py-2.5 bg-State-Layers-On-Primary-Opacity-08/10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] bg-orange-600  justify-center text-Schemes-On-Primary text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight">
          حفظ
        </button>
      </div>
    </div>
  );
};

export default Password;
