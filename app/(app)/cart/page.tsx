import ProfileHeader from "@/components/profile/ProfileHeader";
import { cookies } from "next/headers";
import Link from "next/link";
import Purchase from "@/components/purchase/Purchase";

const page = async () => {
  const cookiesData = await cookies();
  const token = cookiesData.get("token")?.value;
  if (!token) {
    return (
      <div className="w-full">
        <ProfileHeader title="المشتريات " />
        <div className="text-center py-10 w-full flex items-center justify-center flex-col mt-8">
          <h1 className="text-2xl font-bold mb-3">تسجيل الدخول مطلوب</h1>
          <p className="mb-6">يرجى تسجيل الدخول للوصول إلى مشترياتك</p>
          <Link
            href="/login"
            className="bg-primary bg-[#e55604] text-white rounded-lg px-6 py-2 hover:bg-[#e55604]/80 transition-colors"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <ProfileHeader title="المشتريات " />
      <Purchase />
    </div>
  );
};

export default page;
