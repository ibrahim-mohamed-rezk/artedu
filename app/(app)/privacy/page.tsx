import React from "react";

const PrivacyPage = () => {
  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)]">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[30px]">
          <section className="w-full flex flex-col gap-3 items-end text-right">
            <h1 className="text-[#0F2137] text-2xl md:text-3xl font-sst-arabic font-bold">
              سياسة الخصوصية
            </h1>
            <p className="text-[#4E4F5D] text-base md:text-lg font-sst-arabic max-w-[80ch]">
              نحن في ArtEdu نلتزم بحماية خصوصيتك. يرجى قراءة هذه السياسة بعناية
              لفهم كيفية جمع واستخدام وحماية معلوماتك الشخصية.
            </p>
          </section>

          <div className="w-full h-[1px] bg-[#f1f1f2]"></div>

          <article className="w-full bg-white border border-[#f1f1f2] rounded-[16px] p-5 md:p-7 text-right font-sst-arabic flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">
                المعلومات التي نجمعها
              </h2>
              <p className="text-[#4E4F5D] leading-8">
                نجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل في المنصة، مثل
                الاسم والبريد الإلكتروني ورقم الهاتف. كما نجمع معلومات تلقائياً
                عند استخدامك للمنصة، مثل عنوان IP ونوع المتصفح.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">
                كيفية استخدام المعلومات
              </h2>
              <p className="text-[#4E4F5D] leading-8">
                نستخدم معلوماتك لتقديم وتحسين خدماتنا التعليمية، ومعالجة
                المدفوعات، وإرسال التحديثات والإشعارات المهمة. لا نبيع معلوماتك
                الشخصية لأطراف ثالثة.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">
                حماية المعلومات
              </h2>
              <p className="text-[#4E4F5D] leading-8">
                نستخدم تقنيات أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح
                به أو التغيير أو الكشف. ومع ذلك، لا يمكن ضمان الأمان المطلق
                لأي بيانات عبر الإنترنت.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">ملفات تعريف الارتباط</h2>
              <p className="text-[#4E4F5D] leading-8">
                نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على المنصة
                وتذكر تفضيلاتك. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات
                المتصفح، لكن قد يؤثر ذلك على وظائف معينة في المنصة.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">حقوقك</h2>
              <p className="text-[#4E4F5D] leading-8">
                لديك الحق في الوصول إلى معلوماتك الشخصية وتعديلها أو حذفها في
                أي وقت. يمكنك أيضاً طلب نسخة من بياناتك أو إلغاء الاشتراك من
                رسائلنا الإخبارية.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">
                التغييرات على سياسة الخصوصية
              </h2>
              <p className="text-[#4E4F5D] leading-8">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات
                جوهرية عبر البريد الإلكتروني أو إشعار على المنصة.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">التواصل</h2>
              <p className="text-[#4E4F5D] leading-8">
                لأي استفسارات حول سياسة الخصوصية أو ممارساتنا، يُرجى التواصل
                عبر صفحة
                <a href="/contact-us" className="text-[#26577c] underline mx-1">
                  اتصل بنا
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

