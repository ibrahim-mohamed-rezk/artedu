import { getData } from "@/libs/axios/backendServer";
import React from "react";

const TermsAndConditionsPage = async () => {
  const feachTermsAndConditions = async () => {
    try {
      const res = await getData("get-settings");
      return res.data.support;
    } catch (error) {
      console.log(error);
    }
  };

  const termsAndConditions = await feachTermsAndConditions();

  console.log(termsAndConditions);
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

          <article
            dangerouslySetInnerHTML={{ __html: termsAndConditions }}
            className="w-full bg-white border border-[#f1f1f2] rounded-[16px] p-5 md:p-7 text-right font-sst-arabic flex flex-col gap-6"
          />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
