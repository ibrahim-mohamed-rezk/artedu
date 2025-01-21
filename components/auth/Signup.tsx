"use client"

import { useState } from "react";
import PhoneInput from "@/components/inputs/PhoneInput";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [parentPhone, setParentPhone] = useState("")
  return (
    <div className="w-full flex flex-col gap-4 mt-[25px]">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          الاسم كامل
        </label>
        <input
          type="text"
          placeholder="ادخل الاسم كامل"
          className="w-full px-4 py-3 bg-white rounded-xl border border-[#F1F1F2] text-right"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-[#E55604] text-xs font-bold font-['SST Arabic'] text-right">
          رقم الهاتف
        </label>
        <PhoneInput value={phone} onChangeFun={(e) => setPhone(e)} />
      </div>

      {/* Parent Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          رقم هاتف ولي الامر
        </label>
        <PhoneInput value={parentPhone} onChangeFun={(e) => setParentPhone(e)} />
      </div>

      {/* Educational Stage */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          المرحلة الدراسية
        </label>
        <select className="w-full px-4 py-3 bg-white rounded-xl border border-[#F1F1F2] text-right appearance-none">
          <option value="">المرحلة الدراسية</option>
        </select>
      </div>

      {/* Governorate */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          المحافظة
        </label>
        <select className="w-full px-4 py-3 bg-white rounded-xl border border-[#F1F1F2] text-right appearance-none">
          <option value="">ادخل محافظتك</option>
        </select>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          الرقم السري
        </label>
        <input
          type="password"
          placeholder="*******"
          className="w-full px-4 py-3 bg-white rounded-xl border border-[#F1F1F2] text-right"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          اعد ادخال الرقم السري
        </label>
        <input
          type="password"
          placeholder="*******"
          className="w-full px-4 py-3 bg-white rounded-xl border border-[#F1F1F2] text-right"
        />
      </div>

      {/* Submit Button */}
      <button className="w-full mt-4 px-6 py-3 bg-[#E55604] text-white rounded-xl text-center font-medium hover:bg-[#d14e03] transition-colors">
        الدخول
      </button>
    </div>
  );
};

export default Signup;
