import { redirect } from "next/navigation";
import ProfileHeader from "../profile/ProfileHeader";
import { cookies } from "next/headers";
import { getData } from "@/libs/axios/backendServer";
import PaymentCourse from "./PaymentCourse";
import PaymentBook from "./PaymentBook";
import BankCard from "../cards/BankCard";
import PaymentBank from "./PaymentBank";

const Payments = async ({
  params,
}: {
  params: { type: string; itemId: string };
}) => {
  const cookiesData = await cookies();
  const token = cookiesData.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const fetchCartData = async () => {
    try {
      const response = await getData(
        `${params.type}/show/${params.itemId}`,
        {},
        { Authorization: `Bearer ${token}` }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const cartData = await fetchCartData();

  console.log(cartData);

  return (
    <div className="w-full">
      <div className="w-full mx-auto ">
        <ProfileHeader title="العربة " />
        <div className="flex flex-col w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto lg:flex-row gap-8 md:px-[50px] mt-4">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2]">
              {params.type === "course" ? (
                <PaymentCourse cartData={cartData} />
              ) : params.type === "bank" ? (
                <PaymentBank cartData={cartData} />
              ) : params.type === "book" ? (
                <PaymentBook cartData={cartData} />
              ) : (
                redirect("/")
              )}
            </div>

            <div className="bg-white rounded-[20px] mt-[10px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#e55604] text-sm mb-2 w-full text-end">
                    الاسم كامل
                  </label>
                  <input
                    type="text"
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
                      className="flex-1 px-4 py-2 text-end"
                      placeholder="10 182 608 56"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    المحافظة
                  </label>
                  <select className="w-full text-end px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white">
                    <option>ادخل محافظتك</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    المنطقة
                  </label>
                  <select className="w-full text-end px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white">
                    <option>ادخل منطقتك</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2 w-full text-end">
                    تفاصيل العنوان
                  </label>
                  <input
                    type="text"
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
                    <span>250.00 جنية</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ضريبه</span>
                    <span>0.00 جنية</span>
                  </div>
                </div>
                <div className="border-t border-[#f1f1f2] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">الاجمالي</span>
                    <span className="text-lg font-bold">250.00 جنية</span>
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
