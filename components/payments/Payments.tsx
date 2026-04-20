"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfileHeader from "../profile/ProfileHeader";
import { getData } from "@/libs/axios/backendServer";
import PaymentCourse from "./PaymentCourse";
import PaymentBook from "./PaymentBook";
import PaymentBank from "./PaymentBank";
import { useAppSelector } from "@/libs/store/hooks";
import { formatPrice, isFreePrice } from "@/libs/utils/formatPrice";

interface Governorate {
  id: number;
  name: string;
}

const Payments = ({
  params,
}: {
  params: { type: string; itemId: string };
}) => {
  const router = useRouter();
  const { userData, token } = useAppSelector((state) => state.user);
  
  const [cartData, setCartData] = useState<any>(null);
  const [governorates, setGovernorates] = useState<Governorate[]>([]);
  const [areas, setAreas] = useState<Governorate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  
  // Form state with user data
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    father_phone: "",
    governorate_id: "",
    area_id: "",
    address_details: "",
  });

  // Check authentication status with a delay to allow AutoLogin to complete
  useEffect(() => {
    const checkAuth = async () => {
      // Wait a bit for AutoLogin to populate the store
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Check if we have a token in cookies
      const hasToken = document.cookie.includes('token=');
      
      if (!hasToken && !token) {
        router.push("/login");
        return;
      }
      
      setIsAuthChecking(false);
    };

    checkAuth();
  }, [token, router]);

  useEffect(() => {
    if (isAuthChecking || !token) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch cart data
        const response = await getData(
          `${params.type}/show/${params.itemId}`,
          {},
          { Authorization: `Bearer ${token}` }
        );
        setCartData(response.data);

        // Fetch governorates
        const govResponse = await getData("governorates-api");
        setGovernorates(govResponse.data);

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token, params.type, params.itemId, isAuthChecking]);

  // Auto-fill form with user data
  useEffect(() => {
    if (userData) {
      setFormData({
        full_name: userData.full_name || "",
        phone: userData.phone || "",
        father_phone: userData.father_phone || "",
        governorate_id: userData.governorate_id?.toString() || "",
        area_id: userData.area_id?.toString() || "",
        address_details: userData.school_name || "",
      });
    }
  }, [userData]);

  // Fetch areas when governorate changes
  useEffect(() => {
    const fetchAreas = async () => {
      if (formData.governorate_id) {
        try {
          const response = await getData(`areas-api/${formData.governorate_id}`);
          setAreas(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchAreas();
  }, [formData.governorate_id]);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (isAuthChecking || isLoading || !cartData) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }


  return (
    <div className="w-full">
      <div className="w-full mx-auto ">
        <ProfileHeader title="الدفع" />
        <div className="flex flex-col w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto lg:flex-row gap-8 md:px-[50px] mt-4">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2]">
              {params.type === "course" ? (
                <PaymentCourse cartData={cartData} />
              ) : params.type === "bank" ? (
                <PaymentBank cartData={cartData} />
              ) : params.type === "book" ? (
                <PaymentBook cartData={cartData} />
              ) : null}
            </div>

            <div className="bg-white rounded-[20px] mt-[10px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#e55604] text-sm mb-2 w-full text-end">
                    الاسم كامل
                  </label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange("full_name", e.target.value)}
                    className="w-full text-end px-4 py-2 border border-[#e55604] rounded-[15px]"
                    placeholder="نور محمد"
                  />
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    رقم الهاتف
                  </label>
                  <div className="flex items-center border border-[#f1f1f2] rounded-[15px] overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-r border-[#f1f1f2]">
                      <img
                        className="w-[25px] h-[18px] rounded"
                        src="https://placehold.co/25x18"
                        alt="Flag"
                      />
                      <span className="text-black text-sm">+20</span>
                      <svg
                        width="11"
                        height="6"
                        viewBox="0 0 11 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 0.9925L4.79332 4.68286C4.98166 4.89089 5.23551 5.0075 5.5 5.0075C5.76449 5.0075 6.01835 4.89089 6.20669 4.68286L9.5 0.9925"
                          stroke="#8B8B8B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="flex-1 px-4 py-2 text-end"
                      placeholder="10 182 608 56"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    رقم هاتف احطياطي
                  </label>
                  <div className="flex items-center border border-[#f1f1f2] rounded-[15px] overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-r border-[#f1f1f2]">
                      <img
                        className="w-[25px] h-[18px] rounded"
                        src="https://placehold.co/25x18"
                        alt="Flag"
                      />
                      <span className="text-black text-sm">+20</span>
                      <svg
                        width="11"
                        height="6"
                        viewBox="0 0 11 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 0.9925L4.79332 4.68286C4.98166 4.89089 5.23551 5.0075 5.5 5.0075C5.76449 5.0075 6.01835 4.89089 6.20669 4.68286L9.5 0.9925"
                          stroke="#8B8B8B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      value={formData.father_phone}
                      onChange={(e) => handleInputChange("father_phone", e.target.value)}
                      className="flex-1 px-4 py-2 text-end"
                      placeholder="10 182 608 56"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    المحافظة
                  </label>
                  <select 
                    value={formData.governorate_id}
                    onChange={(e) => handleInputChange("governorate_id", e.target.value)}
                    className="w-full text-end px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white"
                  >
                    <option value="">ادخل محافظتك</option>
                    {governorates.map((gov) => (
                      <option key={gov.id} value={gov.id}>
                        {gov.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    المنطقة
                  </label>
                  <select 
                    value={formData.area_id}
                    onChange={(e) => handleInputChange("area_id", e.target.value)}
                    className="w-full text-end px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white"
                    disabled={!formData.governorate_id}
                  >
                    <option value="">ادخل منطقتك</option>
                    {areas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    تفاصيل العنوان
                  </label>
                  <input
                    type="text"
                    value={formData.address_details}
                    onChange={(e) => handleInputChange("address_details", e.target.value)}
                    className="w-full text-end px-4 py-2 border border-[#f1f1f2] rounded-[15px]"
                    placeholder="ادخل اسم المدرسه"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <span className="w-3 h-4 bg-[#ffc529] rounded-tl rounded-bl mr-2"></span>
                  طريقة الدفع :
                </h3>
                <div className="p-4 bg-[#26577c]/20 rounded-[26.88px] border border-[#26577c] text-center">
                  <span className="text-lg font-medium">بطاقة بنكية</span>
                </div>
              </div>
              <div className="border-t border-[#f1f1f2] pt-6">
                <h4 className="text-lg font-bold mb-4">ملخص الطلب</h4>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>سعر الكورس</span>
                    {isFreePrice(cartData.price) ? (
                      <span className="text-[#26577c] font-bold">{formatPrice(cartData.price)}</span>
                    ) : (
                      <span>{formatPrice(cartData.price)} جنية</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>ضريبه</span>
                    <span>0.00 جنية</span>
                  </div>
                </div>
                <div className="border-t border-[#f1f1f2] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">الاجمالي</span>
                    {isFreePrice(cartData.price) ? (
                      <span className="text-lg font-bold text-[#26577c]">{formatPrice(cartData.price)}</span>
                    ) : (
                      <span className="text-lg font-bold">{formatPrice(cartData.price)} جنية</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <input
                  type="text"
                  className="w-full text-end px-4 py-3 border border-[#f1f1f2] rounded-[15px] mb-4"
                  placeholder="كوبون الخصم"
                />
                <button className="w-full bg-[#e55604] text-white py-3 rounded-[15px] font-bold">
                  الدفع
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
