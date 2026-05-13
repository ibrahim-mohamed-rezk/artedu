import Link from "next/link";
import { getData } from "@/libs/axios/backendServer";
import {
  type WorkItem,
  getWorksFromResponse,
} from "@/libs/helpers/works";

const JoinUsPage = async () => {
  let jobs: WorkItem[] = [];

  try {
    const response = await getData("works-api");
    jobs = getWorksFromResponse(response);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)] direction-rtl">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[24px]">
          <section className="w-full bg-[#fff2eb] rounded-[18px] py-8 px-4 text-center">
            <h1 className="text-[#e55604] text-2xl md:text-3xl font-sst-arabic font-bold">
              {jobs.length} وظيفة متاحة لدينا
            </h1>
          </section>

          <section className="w-full bg-white border border-[#E6E7EB] rounded-[16px] p-4 md:p-6 flex flex-col gap-5">
            {jobs.length === 0 && (
              <article className="w-full border border-[#F0F1F4] rounded-[14px] p-6 text-right font-sst-arabic text-[#4E4F5D]">
                لا توجد وظائف متاحة حالياً.
              </article>
            )}

            {jobs.map((job) => {
              return (
                <article
                  key={job.id}
                  className="w-full border border-[#F0F1F4] rounded-[14px] p-4 md:p-5"
                >
                  <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between gap-4">
                    <div className="w-full md:w-auto flex gap-3">
                      <Link
                        href={`/join-us/${job.id}`}
                        className="min-w-[96px] px-4 py-2 rounded-[10px] border border-[#BFC7D3] text-[#4E4F5D] bg-[#EFF3F7] font-sst-arabic text-sm flex items-center justify-center"
                      >
                        التفاصيل
                      </Link>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-end text-right gap-2">
                      <h2 className="text-[#0F2137] text-lg md:text-xl font-sst-arabic font-bold">
                        {job.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {job.location && (
                          <span className="px-3 py-1 rounded-full bg-[#F6F7FA] border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                            {job.location}
                          </span>
                        )}
                        {job.type && (
                          <span className="px-3 py-1 rounded-full bg-[#F6F7FA] border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                            {job.type}
                          </span>
                        )}
                        {job.salary && (
                          <span className="px-3 py-1 rounded-full bg-[#F6F7FA] border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                            الراتب: {job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-4 text-right text-[#252C3A] text-sm md:text-base font-sst-arabic leading-8 space-y-2">
                    <p className="whitespace-pre-line">
                      {job.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
