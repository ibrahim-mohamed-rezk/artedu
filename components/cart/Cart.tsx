import React from "react";
import ProfileHeader from "../profile/ProfileHeader";

const Cart = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <ProfileHeader title="العربة " />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  className="w-full md:w-1/3 rounded-3xl"
                  src="https://placehold.co/183x106"
                  alt="Product"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#26577c] text-sm mb-2">
                      <span>لغة عربية</span>
                      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.87943 1.84144C7.01014 1.95348 7.02528 2.15026 6.91324 2.28098L4.59337 4.98749L6.91324 7.694C7.02528 7.82471 7.01014 8.0215 6.87943 8.13354C6.74871 8.24557 6.55193 8.23044 6.43989 8.09973L3.94614 5.19035C3.84608 5.07362 3.84608 4.90136 3.94614 4.78462L6.43989 1.87525C6.55193 1.74454 6.74871 1.7294 6.87943 1.84144Z" fill="#26577C"/>
                      </svg>
                      <span>ا.وائل عيسي</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">بنك اسئلة الباب الاول</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#26577c] text-lg font-bold">350 جنيه</span>
                    <span className="text-black text-lg">السعر :</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#e55604] text-sm mb-2">الاسم كامل</label>
                  <input type="text" className="w-full px-4 py-2 border border-[#e55604] rounded-[15px]" placeholder="نور محمد" />
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2">رقم الهاتف</label>
                  <div className="flex items-center border border-[#f1f1f2] rounded-[15px] overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-r border-[#f1f1f2]">
                      <img className="w-[25px] h-[18px] rounded" src="https://placehold.co/25x18" alt="Flag" />
                      <span className="text-black text-sm">+20</span>
                      <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.9925L4.79332 4.68286C4.98166 4.89089 5.23551 5.0075 5.5 5.0075C5.76449 5.0075 6.01835 4.89089 6.20669 4.68286L9.5 0.9925" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <input type="tel" className="flex-1 px-4 py-2" placeholder="10 182 608 56" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2">رقم هاتف احطياطي</label>
                  <div className="flex items-center border border-[#f1f1f2] rounded-[15px] overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-r border-[#f1f1f2]">
                      <img className="w-[25px] h-[18px] rounded" src="https://placehold.co/25x18" alt="Flag" />
                      <span className="text-black text-sm">+20</span>
                      <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.9925L4.79332 4.68286C4.98166 4.89089 5.23551 5.0075 5.5 5.0075C5.76449 5.0075 6.01835 4.89089 6.20669 4.68286L9.5 0.9925" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <input type="tel" className="flex-1 px-4 py-2" placeholder="10 182 608 56" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2">المحافظة</label>
                  <select className="w-full px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white">
                    <option>ادخل محافظتك</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2">المنطقة</label>
                  <select className="w-full px-4 py-2 border border-[#f1f1f2] rounded-[15px] appearance-none bg-white">
                    <option>ادخل منطقتك</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#6c7278] text-sm mb-2">تفاصيل العنوان</label>
                  <input type="text" className="w-full px-4 py-2 border border-[#f1f1f2] rounded-[15px]" placeholder="ادخل اسم المدرسه" />
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
                <input type="text" className="w-full px-4 py-3 border border-[#f1f1f2] rounded-[15px] mb-4" placeholder="كوبون الخصم" />
                <button className="w-full bg-[#e55604] text-white py-3 rounded-[15px] font-bold">الدفع</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
