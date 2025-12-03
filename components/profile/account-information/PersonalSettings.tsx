"use client";

import { getData, postData } from "@/libs/axios/backendServer";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { updateUserData } from "@/libs/store/slices/userSlice";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

interface Governorate {
  id: number;
  name: string;
}

interface FormErrors {
  full_name?: string;
  phone?: string;
  father_phone?: string;
  [key: string]: string | undefined;
}

interface ProfileFormData {
  full_name?: string;
  father_phone?: string;
  phone?: string;
  school_name?: string;
  governorate_id?: number | string;
  area_id?: number | string;
  level_id?: number | string;
  image?: string;
}

interface SubscriptionCode {
  code?: string;
  subscription_code?: string;
  status?: string | boolean | number;
  is_active?: boolean | number;
  valid_to?: string;
  price?: number | string;
}

const PersonalSettings = () => {
  const { userData, token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [governorate, setGovernorate] = useState<Governorate[]>([]);
  const [areas, setAreas] = useState<Governorate[]>([]);
  const [levels, setLevels] = useState<Governorate[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Enhanced state management
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDirty, setIsDirty] = useState(false);
  const [originalData, setOriginalData] = useState<ProfileFormData | null>(
    null
  );

  const [updatedData, setUpdatedData] = useState<ProfileFormData>({
    full_name: userData?.full_name,
    father_phone: userData?.father_phone,
    phone: userData?.phone,
    school_name: userData?.school_name,
    governorate_id: userData?.governorate_id,
    area_id: userData?.area_id,
    level_id: userData?.level_id,
    image: userData?.image,
  });

  useEffect(() => {
    const newData = {
      full_name: userData?.full_name,
      father_phone: userData?.father_phone,
      phone: userData?.phone,
      school_name: userData?.school_name,
      governorate_id: userData?.governorate_id,
      area_id: userData?.area_id,
      level_id: userData?.level_id,
      image: userData?.image,
    };
    setUpdatedData(newData);
    setOriginalData(newData);

    // Set initial profile image preview if exists
    if (userData?.image) {
      setImagePreview(userData.image);
    }
  }, [userData]);

  // Track dirty state
  useEffect(() => {
    if (!originalData) return;

    const hasChanges =
      JSON.stringify(updatedData) !== JSON.stringify(originalData) ||
      profileImage !== null;

    setIsDirty(hasChanges);
  }, [updatedData, profileImage, originalData]);

  // Validation functions
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const egyptianPhoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    return egyptianPhoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!updatedData.full_name?.trim()) {
      newErrors.full_name = "الاسم الكامل مطلوب";
    }

    // Phone validation
    if (updatedData.phone && !validatePhone(updatedData.phone)) {
      newErrors.phone =
        "رقم الهاتف غير صحيح (يجب أن يبدأ بـ 01 ويتكون من 11 رقم)";
    }

    // Father phone validation
    if (updatedData.father_phone && !validatePhone(updatedData.father_phone)) {
      newErrors.father_phone =
        "رقم هاتف ولي الأمر غير صحيح (يجب أن يبدأ بـ 01 ويتكون من 11 رقم)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // get governorates
  const fetchGovernorate = async () => {
    const response = await getData("governorates-api");
    setGovernorate(response.data);
    if (!updatedData.governorate_id && response.data.length > 0) {
      setUpdatedData({ ...updatedData, governorate_id: response.data[0].id });
    }
  };

  // get levels
  const fetchLevels = async () => {
    const response = await getData(`levels-api`);
    setLevels(response.data);
  };

  // get areas
  const fetchAreas = async () => {
    if (updatedData.governorate_id) {
      const response = await getData(`areas-api/${updatedData.governorate_id}`);
      setAreas(response.data);
    }
  };

  // get governorates and levels
  useEffect(() => {
    fetchLevels();
    fetchGovernorate();
  }, [userData]);

  // get areas based on governorate id
  useEffect(() => {
    fetchAreas();
  }, [updatedData.governorate_id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        toast.error("يرجى اختيار صورة بصيغة PNG أو JPG");
        return;
      }

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error("حجم الصورة يجب أن يكون أقل من 5 ميجابايت");
        return;
      }

      setProfileImage(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    if (!isDirty) return;

    if (originalData) {
      setUpdatedData(originalData);
      setProfileImage(null);
      setImagePreview(userData?.image || null);
      setErrors({});
      setIsDirty(false);
    }
  };

  const updateProfile = async () => {
    // Validate form before submission
    if (!validateForm()) {
      toast.error("يرجى تصحيح الأخطاء قبل الحفظ");
      return;
    }

    setIsLoading(true);
    const previousData = { ...userData };

    try {
      // Optimistic update
      dispatch(updateUserData(updatedData));

      const formData = new FormData();

      // Append all form fields
      formData.append("full_name", updatedData.full_name || "");
      formData.append("father_phone", updatedData.father_phone || "");
      formData.append("phone", updatedData.phone || "");
      formData.append("school_name", updatedData.school_name || "");
      formData.append(
        "governorate_id",
        updatedData.governorate_id?.toString() || ""
      );
      formData.append("area_id", updatedData.area_id?.toString() || "");
      formData.append("level_id", updatedData.level_id?.toString() || "");

      // Append profile image if selected
      if (profileImage) {
        formData.append("image", profileImage);
      }

      const response = await postData("update-profile-api", formData, {
        Authorization: `Bearer ${token}`,
      });

      toast.success("تم تحديث البيانات بنجاح");

      // Update user data in store with response data
      dispatch(updateUserData(response.data));

      const newData = {
        full_name: response.data.full_name,
        father_phone: response.data.father_phone,
        phone: response.data.phone,
        school_name: response.data.school_name,
        governorate_id: response.data.governorate_id,
        area_id: response.data.area_id,
        level_id: response.data.level_id,
        image: response.data.image,
      };

      setUpdatedData(newData);
      setOriginalData(newData);
      setProfileImage(null);
      setIsDirty(false);
      setErrors({});

      // Update image preview if new image was uploaded
      if (response.data.image) {
        setImagePreview(response.data.image);
      }
    } catch (error: unknown) {
      // Revert optimistic update on error
      dispatch(updateUserData(previousData));

      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.msg || "حدث خطأ أثناء تحديث البيانات";
        toast.error(errorMsg);

        // Handle field-specific errors from backend
        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        }
      } else {
        toast.error("حدث خطأ في الاتصال بالخادم");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setUpdatedData({ ...updatedData, [field]: value });

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-lg p-4">
        {/* Profile Image Upload Section */}
        <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-200">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-orange-500 shadow-lg">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      fill="#E55604"
                    />
                    <path
                      d="M12 14C6.47715 14 2 18.4772 2 24H22C22 18.4772 17.5228 14 12 14Z"
                      fill="#E55604"
                    />
                  </svg>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className={`absolute bottom-0 right-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-700"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleImageChange}
            disabled={isLoading}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InputField
            label="الاسم كامل"
            placeholder="ادخل اسمك الكامل"
            value={updatedData.full_name}
            isRequired={true}
            disabled={isLoading}
            error={errors.full_name}
            onChange={(e) => handleInputChange("full_name", e.target.value)}
          />
          <InputField
            label="رقم الهاتف"
            placeholder="ادخل رقم الهاتف"
            value={updatedData.phone}
            type="tel"
            disabled={isLoading}
            error={errors.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          <InputField
            label="رقم هاتف ولي الامر"
            placeholder="ادخل رقم هاتف ولي الامر"
            value={updatedData.father_phone}
            type="tel"
            disabled={isLoading}
            error={errors.father_phone}
            onChange={(e) => handleInputChange("father_phone", e.target.value)}
          />
          <InputField
            label="اسم المدرسة"
            placeholder="ادخل اسم المدرسة"
            value={updatedData.school_name}
            disabled={isLoading}
            onChange={(e) => handleInputChange("school_name", e.target.value)}
          />
          <SelectField
            options={areas}
            label="المنطقة"
            placeholder="ادخل منطقتك"
            value={updatedData.area_id}
            disabled={isLoading}
            onChange={(e) => handleInputChange("area_id", e.target.value)}
          />
          <SelectField
            options={governorate}
            label="المحافظة"
            placeholder="ادخل محافظتك"
            value={updatedData.governorate_id}
            disabled={isLoading}
            onChange={(e) =>
              handleInputChange("governorate_id", e.target.value)
            }
          />
          <SelectField
            options={levels}
            label="المستوى"
            placeholder="ادخل مستواك"
            value={updatedData.level_id}
            disabled={isLoading}
            onChange={(e) => handleInputChange("level_id", e.target.value)}
          />
        </div>

        <div className="w-full mt-[50px] flex justify-center items-center gap-4">
          {isDirty && (
            <button
              onClick={handleReset}
              disabled={isLoading}
              className={`text-center text-orange-600 rounded-2xl px-10 py-2.5 border border-orange-600 bg-white justify-center text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight transition-colors ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              }`}
            >
              إلغاء التغييرات
            </button>
          )}
          <button
            onClick={updateProfile}
            disabled={isLoading || !isDirty}
            className={`text-center text-white rounded-2xl px-10 py-2.5 bg-orange-600 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] justify-center text-sm font-medium font-['SST_Arabic'] leading-tight tracking-tight transition-all flex items-center gap-2 ${
              isLoading || !isDirty
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orange-700"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                جاري الحفظ...
              </>
            ) : (
              "حفظ"
            )}
          </button>
        </div>
      </div>

      {/* Subscription Codes Section */}
      {userData?.subscription_codes &&
        userData.subscription_codes.length > 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                {`${userData.subscription_codes.length} :  عدد الاكواد `}
              </span>
              <h2 className="text-xl font-bold text-gray-800">
                أكواد الاشتراك
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
              {userData.subscription_codes.map(
                (code: SubscriptionCode | string, index: number) => (
                  <SubscriptionCodeCard key={index} code={code} />
                )
              )}
            </div>
          </div>
        )}
    </div>
  );
};

const SubscriptionCodeCard = ({
  code,
}: {
  code: SubscriptionCode | string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy =
      typeof code === "string"
        ? code
        : code.code || code.subscription_code || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.success("تم نسخ الكود بنجاح");
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle if code is just a string
  const codeValue =
    typeof code === "string" ? code : code.code || code.subscription_code;
  const status =
    typeof code === "string" ? undefined : code.status || code.is_active;
  const expiryDate = typeof code === "string" ? undefined : code.valid_to;
  const price = typeof code === "string" ? undefined : code.price;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex w-full items-center justify-between">
          <span>السعر: {price ? price : "مجاني"}</span>
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={handleCopy}
              className="text-orange-600 hover:text-orange-700 transition-colors"
              title="نسخ الكود"
            >
              {copied ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4V16C8 17.1046 8.89543 18 10 18H18C19.1046 18 20 17.1046 20 16V7.24162C20 6.7034 19.7831 6.18789 19.3982 5.81161L16.6569 3.11612C16.2842 2.75246 15.7873 2.54895 15.2687 2.54895H10C8.89543 2.54895 8 3.44438 8 4.54895V4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 18V20C16 21.1046 15.1046 22 14 22H6C4.89543 22 4 21.1046 4 20V9C4 7.89543 4.89543 7 6 7H8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
            <code className="bg-white px-3 py-1.5 rounded-lg border border-orange-300 text-orange-600 font-mono text-sm font-semibold">
              {codeValue}
            </code>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        {status !== undefined && (
          <span
            className={`px-2 py-1 rounded-full font-medium ${
              status === "active" || status === true || status === 1
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status === "true" || status === true || status === 1
              ? "نشط"
              : "غير نشط"}
          </span>
        )}
        {expiryDate && (
          <span className="text-gray-500 text-right">
            ينتهي: {new Date(expiryDate).toLocaleDateString("en-US")}
          </span>
        )}
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
  disabled = false,
  error,
  onChange,
}: {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  type?: string;
  value?: string | number;
  disabled?: boolean;
  error?: string;
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
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-4 py-3 bg-white rounded-xl border text-right transition-colors ${
        error
          ? "border-red-500 focus:border-red-600"
          : isRequired
          ? "border-orange-500 focus:border-orange-600"
          : "border-gray-200 focus:border-orange-500"
      } ${disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""}`}
    />
    {error && (
      <span className="text-xs text-red-500 text-right w-full">{error}</span>
    )}
  </div>
);

const SelectField = ({
  label,
  placeholder,
  options,
  value,
  disabled = false,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: Governorate[];
  value?: string | number;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <div className="flex flex-col items-end gap-2">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <select
      onChange={onChange}
      value={value || ""}
      disabled={disabled}
      className={`w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-right appearance-none transition-colors focus:border-orange-500 ${
        disabled ? "opacity-50 cursor-not-allowed bg-gray-50" : ""
      }`}
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
