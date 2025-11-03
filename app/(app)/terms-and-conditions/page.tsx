import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)]">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[30px]">
          <section className="w-full flex flex-col gap-3 items-end text-right">
            <h1 className="text-[#0F2137] text-2xl md:text-3xl font-sst-arabic font-bold">
              الشروط والأحكام
            </h1>
            <p className="text-[#4E4F5D] text-base md:text-lg font-sst-arabic max-w-[80ch]">
              يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة ArtEdu.
              باستخدامك للموقع فإنك توافق على الالتزام بهذه الشروط.
            </p>
          </section>

          <div className="w-full h-[1px] bg-[#f1f1f2]"></div>

          <article className="w-full bg-white border border-[#f1f1f2] rounded-[16px] p-5 md:p-7 text-right font-sst-arabic flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">التعريفات</h2>
              <p className="text-[#4E4F5D] leading-8">
                تشير كلمات مثل &quot;المنصة&quot; و &quot;نحن&quot; و &quot;لنا&quot; إلى ArtEdu. وتشير كلمة
                &quot;المستخدم&quot; إلى أي شخص يقوم بزيارة أو استخدام خدمات المنصة.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">استخدام المنصة</h2>
              <p className="text-[#4E4F5D] leading-8">
                يلتزم المستخدم باستخدام المنصة للأغراض التعليمية المشروعة فقط،
                والامتناع عن أي نشاط قد يسبب ضرراً بالخدمات أو بالمستخدمين الآخرين.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">الملكية الفكرية</h2>
              <p className="text-[#4E4F5D] leading-8">
                جميع الحقوق والمواد التعليمية والمحتوى المنشور على المنصة محميّة
                بموجب قوانين حقوق النشر والعلامات التجارية. لا يجوز نسخ المحتوى
                أو إعادة توزيعه دون إذن كتابي مسبق.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">المدفوعات والاسترجاع</h2>
              <p className="text-[#4E4F5D] leading-8">
                تُطبّق سياسات الاسترجاع المعلنة عند الشراء. تحتفظ ArtEdu بالحق في
                تعديل الأسعار أو العروض دون إشعار مسبق.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">تعديل الشروط</h2>
              <p className="text-[#4E4F5D] leading-8">
                قد نقوم بتحديث هذه الشروط من وقت لآخر. يسري أي تعديل بمجرد نشره
                على هذه الصفحة.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-[#0F2137] text-xl font-semibold">التواصل</h2>
              <p className="text-[#4E4F5D] leading-8">
                لأي استفسارات تخص هذه الشروط، يُرجى التواصل عبر صفحة
                <a href="/contact-us" className="text-[#26577c] underline mx-1">اتصل بنا</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;


