import React from "react";

const PersonalSettings = () => {
  return (
    <div className="w-full max-w-[1187px] mx-auto p-4">
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
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
          <SelectField label="المرحلة الدراسية" placeholder="انت في سنة كم ؟" />
          <InputField label="اسم المدرسة" placeholder="ادخل اسم المدرسه" />
          <SelectField label="المنطقة" placeholder="ادخل منطقتك" />
          <SelectField label="المحافظة" placeholder="ادخل محافظتك" />
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
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <select className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-right appearance-none">
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
    </select>
  </div>
);

export default PersonalSettings;
