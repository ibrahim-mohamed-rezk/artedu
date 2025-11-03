import React from "react";

const ContactUsPage = () => {
  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)]">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[30px]">
          <section className="w-full flex flex-col gap-3 items-end text-right">
            <h1 className="text-[#0F2137] text-2xl md:text-3xl font-sst-arabic font-bold">
              اتصل بنا
            </h1>
            <p className="text-[#4E4F5D] text-base md:text-lg font-sst-arabic max-w-[80ch]">
              يسعدنا تواصلك معنا لأي استفسارات أو اقتراحات تتعلق بالخدمات
              التعليمية على منصة ArtEdu.
            </p>
          </section>

          <div className="w-full h-[1px] bg-[#f1f1f2]"></div>

          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="order-2 lg:order-1 w-full bg-[#fff] border border-[#f1f1f2] rounded-[16px] p-5 md:p-7 flex flex-col gap-4">
              <h2 className="text-[#0F2137] text-xl font-sst-arabic font-semibold text-right">
                أرسل رسالة
              </h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-right text-[#0F2137] font-sst-arabic">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="اكتب اسمك"
                    className="w-full text-right px-3 py-2 bg-white rounded-[10px] border border-[#e5e7eb] focus:border-[#26577c] outline-none font-sst-arabic"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-right text-[#0F2137] font-sst-arabic">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full text-right px-3 py-2 bg-white rounded-[10px] border border-[#e5e7eb] focus:border-[#26577c] outline-none font-sst-arabic"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-right text-[#0F2137] font-sst-arabic">
                    الرسالة
                  </label>
                  <textarea
                    placeholder="اكتب رسالتك هنا"
                    rows={5}
                    className="w-full text-right px-3 py-2 bg-white rounded-[10px] border border-[#e5e7eb] focus:border-[#26577c] outline-none font-sst-arabic"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-5 py-2 bg-[#26577c] text-white rounded-[10px] font-sst-arabic"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            </div>

            <div className="order-1 lg:order-2 w-full bg-[#fff2eb] rounded-[16px] p-5 md:p-7 flex flex-col gap-4 items-end text-right">
              <h2 className="text-[#0F2137] text-xl font-sst-arabic font-semibold">
                معلومات التواصل
              </h2>
              <div className="flex flex-col gap-3 text-[#02073e] font-sst-arabic">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-base md:text-lg">info@artedu365.com</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-base md:text-lg">+201557705100</span>
                </div>
                {/* <div className="flex items-center justify-end gap-2">
                  <span className="text-base md:text-lg">القاهرة، مصر</span>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;


