import { getData } from "@/libs/axios/backendServer";

const AboutPage = async () => {
  const feachAbout = async () => {
    try {
      const res = await getData("get-settings");
      return res.data.about_us;
    } catch (error) {
      console.log(error);
    }
  };

  const about = await feachAbout();

  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)]">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[30px]">
          <section className="w-full flex flex-col gap-3 items-end text-right">
            <h1 className="text-[#0F2137] text-2xl md:text-3xl font-sst-arabic font-bold">
              من نحن
            </h1>
          </section>

          <div className="w-full h-[1px] bg-[#f1f1f2]"></div>

          <article
            dangerouslySetInnerHTML={{ __html: about }}
            className="w-full bg-white border border-[#f1f1f2] rounded-[16px] p-5 md:p-7 text-right font-sst-arabic flex flex-col gap-6"
          ></article>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
