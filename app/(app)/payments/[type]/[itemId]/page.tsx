import Payments from "@/components/payments/Payments";

const page = async ({
  params,
}: {
  params: Promise<{ type: string; itemId: string }>;
}) => {
  const paramsData = await params;

  return (
    <div className="w-full">
      <Payments params={paramsData} />
    </div>
  );
};

export default page;
