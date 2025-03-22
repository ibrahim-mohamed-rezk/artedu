"use client";

import { getData, postData } from "@/libs/axios/backendServer";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { updateUserData } from "@/libs/store/slices/userSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Governorate {
  id: number;
  name: string;
}

const PersonalSettings = () => {
  const { userData, token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [governorate, setGovernorate] = useState<Governorate[]>([]);
  const [areas, setAreas] = useState<Governorate[]>([]);
  const [selectedGovernorate, setSelectedGovernorate] = useState<
    Governorate | undefined
  >();
  const [levels, setLevels] = useState<Governorate[]>([]);

  const [updatedData, setUpdatedData] = useState({
    full_name: userData?.full_name,
    father_phone: userData?.father_phone,
    phone: userData?.phone,
    school_name: userData?.school_name,
    governorate_id: userData?.governorate_id,
    area_id: userData?.area_id,
    level_id: userData?.level_id,
  });

  useEffect(() => {
    setUpdatedData({
      full_name: userData?.full_name,
      father_phone: userData?.father_phone,
      phone: userData?.phone,
      school_name: userData?.school_name,
      governorate_id: userData?.governorate_id,
      area_id: userData?.area_id,
      level_id: userData?.level_id,
    });
  }, [userData]);

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

  // get levels
  useEffect(() => {
    const fetchLevels = async () => {
      const response = await getData(`levels-api`);
      setLevels(response.data);
    };

    fetchLevels();
  }, []);

  const updateProfile = async () => {
    try {
      await postData("update-profile-api", updatedData, {
        Authorization: `Bearer ${token}`,
      });
      toast.success("تم تحديث البيانات بنجاح");
      dispatch(updateUserData(updatedData));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.msg);
      } else {
        toast.error("حدث خطأ أثناء تحديث البيانات");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputField
            label="الاسم كامل"
            placeholder="ادخل اسمك الكامل"
            value={updatedData.full_name}
            isRequired={true}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, full_name: e.target.value })
            }
          />
          <InputField
            label="رقم الهاتف"
            placeholder="ادخل رقم الهاتف"
            value={updatedData.phone}
            type="tel"
            onChange={(e) =>
              setUpdatedData({ ...updatedData, phone: e.target.value })
            }
          />
          <InputField
            label="رقم هاتف ولي الامر"
            placeholder="ادخل رقم هاتف ولي الامر"
            value={updatedData.father_phone}
            type="tel"
            onChange={(e) =>
              setUpdatedData({ ...updatedData, father_phone: e.target.value })
            }
          />
          <InputField
            label="اسم المدرسة"
            placeholder="ادخل اسم المدرسة"
            value={updatedData.school_name}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, school_name: e.target.value })
            }
          />
          <SelectField
            options={areas}
            label="المنطقة"
            placeholder="ادخل منطقتك"
            value={updatedData.area_id}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, area_id: e.target.value })
            }
          />
          <SelectField
            options={governorate}
            label="المحافظة"
            placeholder="ادخل محافظتك"
            value={updatedData.governorate_id}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, governorate_id: e.target.value })
            }
          />
          <SelectField
            options={levels}
            label="المستوى"
            placeholder="ادخل مستواك"
            value={updatedData.level_id}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, level_id: e.target.value })
            }
          />
        </div>
        <div className="w-full mt-[50px] flex justify-center items-center">
          <button
            onClick={updateProfile}
            className="text-center text-white rounded-2xl self-stretch px-10 py-2.5 bg-State-Layers-On-Primary-Opacity-08/10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] bg-orange-600  justify-center text-Schemes-On-Primary text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight"
          >
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
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">
      {label}
      {isRequired && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: Governorate[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <select
      onChange={onChange}
      value={value}
      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-right appearance-none"
    >
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
