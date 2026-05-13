import Link from "next/link";
import { notFound } from "next/navigation";
import { getData } from "@/libs/axios/backendServer";
import { getWorkFromResponse } from "@/libs/helpers/works";

type JoinUsDetailsPageProps = {
  params: { id: string };
};

const JoinUsDetailsPage = async ({ params }: JoinUsDetailsPageProps) => {
  const { id } = params;

  let job = null;

  try {
    const response = await getData(`work/show/${id}`);
    job = getWorkFromResponse(response);
  } catch (error) {
    console.log(error);
  }

  if (!job) {
    notFound();
  }

  const hasHtmlDescription = /<[^>]+>/g.test(job.description || "");

  return (
    <div className="w-full pt-[clamp(10px,2.6041667vw,100px)] direction-rtl">
      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto">
        <div className="w-full flex flex-col items-center justify-start gap-[24px]">
          <section className="w-full bg-[#fff2eb] rounded-[18px] py-8 px-4 text-right">
            <h1 className="text-[#0F2137] text-2xl md:text-3xl font-sst-arabic font-bold">
              {job.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2 justify-end">
              {job.location && (
                <span className="px-3 py-1 rounded-full bg-white border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                  {job.location}
                </span>
              )}
              {job.type && (
                <span className="px-3 py-1 rounded-full bg-white border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                  {job.type}
                </span>
              )}
              {job.salary && (
                <span className="px-3 py-1 rounded-full bg-white border border-[#E2E5EA] text-[#667085] text-xs font-sst-arabic">
                  الراتب: {job.salary}
                </span>
              )}
            </div>
          </section>

          <section className="w-full bg-white border border-[#E6E7EB] rounded-[16px] p-5 md:p-7">

            {job.description ? (
              hasHtmlDescription ? (
                <article
                  className="w-full text-right text-[#252C3A] text-sm md:text-base font-sst-arabic leading-8"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              ) : (
                <article className="w-full text-right text-[#252C3A] text-sm md:text-base font-sst-arabic leading-8 whitespace-pre-line">
                  {job.description}
                </article>
              )
            ) : (
              <article className="w-full text-right text-[#4E4F5D] text-sm md:text-base font-sst-arabic leading-8">
                لا توجد تفاصيل متاحة لهذه الوظيفة حالياً.
              </article>
            )}

            <div className="w-full mt-6 flex flex-wrap items-center justify-end gap-3">
              <Link
                href="/join-us"
                className="min-w-[110px] px-5 py-2 rounded-[10px] border border-[#BFC7D3] text-[#4E4F5D] bg-[#EFF3F7] font-sst-arabic text-sm flex items-center justify-center"
              >
                العودة للوظائف
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUsDetailsPage;
