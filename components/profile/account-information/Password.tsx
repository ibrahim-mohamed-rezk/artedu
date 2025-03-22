"use client";

import React, { useState } from "react";
import PasswordInput from "@/components/inputs/PasswordInput";
import { postData } from "@/libs/axios/backendServer";
import { useAppSelector } from "@/libs/store/hooks";
import { toast } from "react-toastify";
import axios from "axios";

const Password = () => {
  const { token } = useAppSelector((state) => state.user);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePassword = async () => {
    try {
      await postData(
        "change-password-api",
        {
          current_password: currentPassword,
          new_password: password,
          new_password_confirmation: confirmPassword,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      toast.success("تم تحديث الرقم السري بنجاح");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.msg);
      } else {
        toast.error("حدث خطأ أثناء تحديث الرقم السري");
      }
    }
  };

  return (
    <div className="w-full border border-[#F1F1F2] rounded-3xl p-4">
      <div className="flex flex-col md:flex-row justify-end items-start gap-6">
        <div className="flex flex-col justify-start items-end gap-[5px] w-full md:w-auto">
          <div className="h-5 rounded-[100px] flex justify-center items-center gap-2.5">
            <div className="justify-start text-Grey text-xs font-medium font-['SST_Arabic'] leading-tight">
              اعد ادخال الرقم السري الجديد
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
              ادخل الرقم السري الجديد
            </div>
          </div>
          <PasswordInput
            value={password}
            changePassword={setPassword}
            className="w-full md:w-[clamp(100px,16.6666664vw,1000px)]"
          />
        </div>
        <div className="flex flex-col justify-start items-end gap-[5px] w-full md:w-auto">
          <div className="h-5 rounded-[100px] flex justify-center items-center gap-2.5">
            <div className="justify-start text-Grey text-xs font-medium font-['SST_Arabic'] leading-tight">
              ادخال الرقم السري الحالي
            </div>
          </div>
          <PasswordInput
            value={currentPassword}
            changePassword={setCurrentPassword}
            className="w-full md:w-[clamp(100px,16.6666664vw,1000px)]"
          />
        </div>
      </div>
      <div className="w-full mt-[50px] flex justify-center items-center">
        <button
          onClick={updatePassword}
          className="text-center text-white rounded-2xl self-stretch px-10 py-2.5 bg-State-Layers-On-Primary-Opacity-08/10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] bg-orange-600  justify-center text-Schemes-On-Primary text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight"
        >
          حفظ
        </button>
      </div>
    </div>
  );
};

export default Password;
