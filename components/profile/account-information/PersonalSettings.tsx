"use client";

import { getData } from "@/libs/axios/backendServer";
import { useEffect, useState } from "react";

interface Governorate {
  id: number;
  name: string;
}

interface Area {
  id: number;
  name: string;
}

const PersonalSettings = () => {
  const [governorate, setGovernorate] = useState<Governorate[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState<
    Governorate | undefined
  >();

  useEffect(() => {
    const fetchGovernorate = async () => {
      const response = await getData("governorates-api");
      setGovernorate(response.data);
      setSelectedGovernorate(response.data[0]);
    };

    fetchGovernorate();
  }, []);

  // get areas based on governorate id
  useEffect(() => {
    const fetchAreas = async () => {
      const response = await getData(`areas-api/${selectedGovernorate?.id}`);
      setAreas(response.data);
    };

    fetchAreas();
  }, [selectedGovernorate]);

  return (
    <div className="w-full max-w-[1163px]">
      <div className="bg-white rounded-3xl shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputField
            label="الاسم كامل"
            placeholder="نور محمد"
            isRequired={true}
          />
          <InputField
            label="رقم الهاتف"
            placeholder="10 182 608 56"
            type="tel"
          />
          <InputField
            label="رقم هاتف ولي الامر"
            placeholder="10 182 608 56"
            type="tel"
          />
          <InputField label="اسم المدرسة" placeholder="ادخل اسم المدرسه" />
          <SelectField
            options={areas}
            label="المنطقة"
            placeholder="ادخل منطقتك"
          />
          <SelectField
            options={governorate}
            label="المحافظة"
            placeholder="ادخل محافظتك"
          />
        </div>
        <div className="w-full mt-[50px] flex justify-center items-center">
          <button className="text-center text-white rounded-2xl self-stretch px-10 py-2.5 bg-State-Layers-On-Primary-Opacity-08/10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] bg-orange-600  justify-center text-Schemes-On-Primary text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  placeholder,
  isRequired = false,
  type = "text",
}: {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  type?: string;
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">
      {label}
      {isRequired && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-3 bg-white rounded-xl border ${
        isRequired ? "border-orange-500" : "border-gray-200"
      } text-right`}
    />
  </div>
);

const SelectField = ({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options: Governorate[];
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <select className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-right appearance-none">
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default PersonalSettings;
