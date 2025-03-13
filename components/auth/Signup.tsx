"use client";

import { useState, useEffect } from "react";
import PhoneInput from "@/components/inputs/PhoneInput";
import PasswordInput from "../inputs/PasswordInput";
import { postData, getData } from "@/libs/axios/backendServer"; // Assuming getData is a function to fetch data
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface LoginProps {
  className?: string;
}

interface Level {
  id: string;
  name: string;
}

interface Governorate {
  id: string;
  name: string;
}

const Signup = ({ className = "" }: LoginProps) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [educationalStage, setEducationalStage] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [area, setArea] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+20");
  const [parentCountryCode, setParentCountryCode] = useState("+20");
  const [levels, setLevels] = useState<Level[]>([]);
  const [governorates, setGovernorates] = useState<Governorate[]>([]);
  const [areas, setAreas] = useState<any[]>([]);

  const router = useRouter();

  // get levels data from api
  useEffect(() => {
    // get levels data from api
    const fetchLevels = async () => {
      try {
        const response = await getData("/levels-api");
        setLevels(response.data);

        // Set the first level as the default educational stage
        if (response.data.length > 0) {
          setEducationalStage(response.data[0].id);
        }
      } catch (error) {
        console.error("فشل في جلب المستويات", error);
      }
    };

    // get governorates data from api
    const fetchGovernorates = async () => {
      try {
        const response = await getData("/governorates-api");
        setGovernorates(response.data);

        // Set the first governorate as the default governorate
        if (response.data.length > 0) {
          setGovernorate(response.data[0].id);
        }
      } catch (error) {
        console.error("فشل في جلب المحافظات", error);
      }
    };

    fetchLevels();
    fetchGovernorates();
  }, []);

  useEffect(() => {
    // fetch areas data from api based on governorate
    const fetchAreas = async () => {
      try {
        const response = await getData(`/areas-api/${governorate}`);
        setAreas(response.data);

        // Set the first area as the default area
        if (response.data.length > 0) {
          setArea(response.data[0].id);
        }
      } catch (error) {
        console.error("فشل في جلب المناطق", error);
      }
    };

    fetchAreas();
  }, [governorate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !fullName ||
      !phone ||
      !password ||
      !rePassword ||
      !educationalStage ||
      !governorate ||
      !area ||
      !schoolName ||
      !parentPhone
    ) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      console.log(
        fullName,
        phone,
        password,
        rePassword,
        educationalStage,
        governorate,
        area,
        schoolName,
        parentPhone
      );
      return;
    }

    if (password !== rePassword) {
      toast.error("كلمات المرور غير متطابقة");
      return;
    }

    try {
      const response = await postData("/register-api", {
        full_name: fullName,
        phone,
        password,
        password_confirmation: rePassword,
        level_id: educationalStage,
        governorate_id: governorate,
        area_id: area,
        school_name: schoolName,
        father_phone: parentPhone,
        country_code: countryCode,
        father_country_code: parentCountryCode,
      });

      if (response) {
        // Handle successful registration
        toast.success("تم التسجيل بنجاح");
        if (typeof window !== "undefined") {
          localStorage.setItem("phone", phone);
        }
        router.push("/signup/verify-code");
      }
    } catch (error) {
      // Handle registration error
      console.error("فشل التسجيل", error);
      toast.error("فشل التسجيل");
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className={`w-full flex flex-col gap-4 mt-[25px] ${className}`}
    >
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          الاسم كامل
        </label>
        <input
          type="text"
          placeholder="ادخل الاسم كامل"
          className="w-full px-4 py-3 bg-white rounded-[15px] border border-[#F1F1F2] text-right"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-bold font-['SST Arabic'] text-right">
          رقم الهاتف
        </label>
        <PhoneInput
          value={phone}
          onChangeFun={(e) => setPhone(e)}
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          className="rounded-[15px] border border-[#F1F1F2]"
        />
      </div>

      {/* Parent Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          رقم هاتف ولي الامر
        </label>
        <PhoneInput
          value={parentPhone}
          onChangeFun={(e) => setParentPhone(e)}
          countryCode={parentCountryCode}
          onCountryCodeChange={setParentCountryCode}
          className="rounded-[15px] border border-[#F1F1F2]"
        />
      </div>

      {/* Educational Stage */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          المرحلة الدراسية
        </label>
        <select
          className="w-full px-4 py-3 bg-white rounded-[15px] border border-[#F1F1F2] text-right appearance-none"
          value={educationalStage}
          onChange={(e) => setEducationalStage(e.target.value)}
        >
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}
            </option>
          ))}
        </select>
      </div>

      {/* Governorate */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          المحافظة
        </label>
        <select
          className="w-full px-4 py-3 bg-white rounded-[15px] border border-[#F1F1F2] text-right appearance-none"
          value={governorate}
          onChange={(e) => setGovernorate(e.target.value)}
        >
          {governorates.map((gov) => (
            <option key={gov.id} value={gov.id}>
              {gov.name}
            </option>
          ))}
        </select>
      </div>

      {/* Area */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          المنطقة
        </label>
        <select
          className="w-full px-4 py-3 bg-white rounded-[15px] border border-[#f1f1f2] text-right appearance-none"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          {areas.map((areaItem) => (
            <option key={areaItem.id} value={areaItem.id}>
              {areaItem.name}
            </option>
          ))}
        </select>
      </div>

      {/* School Name */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          اسم المدرسة
        </label>
        <input
          type="text"
          placeholder="ادخل اسم المدرسة"
          className="w-full px-4 py-3 bg-white rounded-[15px] border border-[#F1F1F2] text-right"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          الرقم السري
        </label>
        <PasswordInput changePassword={setPassword} value={password} />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6C7278] text-xs font-medium font-['SST Arabic'] text-right">
          اعد ادخال الرقم السري
        </label>
        <PasswordInput changePassword={setRePassword} value={rePassword} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 px-6 py-3 bg-[#E55604] text-white rounded-xl text-center font-medium hover:bg-[#d14e03] transition-colors"
      >
        الدخول
      </button>
    </form>
  );
};

export default Signup;
