"use client";

const Footer = () => {
  if (window.location.pathname.startsWith("/auth")) return null;

  return (
    <div className="w-full max-w-[1870px] mx-auto p-8 bg-[#fff2eb] rounded-[25px] flex flex-col items-start overflow-hidden">
      <div className="w-full h-auto relative">
        <div className="w-full h-auto flex flex-col items-start">
          {/* footer top */}
          <div className="flex flex-wrap justify-between items-start mt-4">
            <div className="w-full sm:w-[214px] mb-4">
              <div className="text-right text-[#0f2136] text-lg font-medium font-['SST Arabic'] leading-[30px]">
                التواصل
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2.5">
                  <div className="text-[#02073e] text-[15px] font-normal font-['DM Sans'] leading-[37.50px]">
                    Facebook
                  </div>
                  <div className="w-5 h-5 px-[7px] py-[3px] bg-[#3b5998] rounded-[17px] flex"></div>
                </div>
                <div className="text-[#02073e] text-[15px] font-normal font-['DM Sans'] leading-[37.50px]">
                  Twitter
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[161px] mb-4">
              <div className="text-right text-[#0f2136] text-lg font-medium font-['SST Arabic'] leading-[30px]">
                الصفحة الرئيسية
              </div>
              <div className="opacity-80 text-right text-[#02073e] text-[15px] font-normal font-['SST Arabic'] leading-[37.50px]">
                مدرسينا
                <br />
                انضم الينا
                <br />
                مقالات
                <br />
                التوظيف
              </div>
            </div>
            <div className="w-full sm:w-[164px] mb-4">
              <div className="text-right text-[#0f2136] text-lg font-medium font-['SST Arabic'] leading-[30px]">
                معلومات عنا
              </div>
              <div className="opacity-80 text-right text-[#02073e] text-[15px] font-normal font-['SST Arabic'] leading-[37.50px]">
                مركز الدعم
                <br />
                دعم العملاء
                <br />
                نبذة عنا
                <br />
                حقوق النشر
              </div>
            </div>
          </div>

          {/* footer bottom */}
          <div className="w-full flex justify-between items-center mt-4">
            <div className="opacity-60">
              <span className="text-[#0f2136] text-sm font-normal font-['DM Sans']">
                Copyright by 2019{" "}
              </span>
              <span className="text-[#0f2136] text-sm font-normal font-['DM Sans'] underline">
                devunity
              </span>
              <span className="text-[#0f2136] text-sm font-normal font-['DM Sans']">
                , Inc
              </span>
            </div>
            <div className="text-[#0f2136] text-sm font-normal font-['SST Arabic']">
              شروط الاستخدام | الخصوصية
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
