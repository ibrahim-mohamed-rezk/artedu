import Login from "@/components/auth/Login";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/login/loginBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex items-center justify-center overflow-hidden py-8">
        <div className="bg-white rounded-3xl w-full max-w-[534px] mx-4 md:mx-auto flex items-center justify-center flex-col p-4 md:p-8">
          {/* login header */}
          <div className="flex w-full items-center justify-center flex-col gap-4 md:gap-8">
            {/* logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" className="max-w-full h-auto" />
            </Link>

            <div className="flex flex-col items-center gap-2 md:gap-3">
              {/* title */}
              <h1 className="text-black text-2xl md:text-3xl font-bold font-['SST Arabic'] leading-[1.3] text-center">
                ابدأ تفوقكك الآن
              </h1>
              <p className="text-black text-xs font-normal font-['SST Arabic'] text-center">
                مُعلم اللغة العربية للثانوية العامة
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-14 w-full mt-4 md:mt-[30px]">
            <div className="w-full flex flex-col items-center gap-4 md:gap-6">
              {/* switch between login and register */}
              <div
                className="w-full p-[2px] md:p-1 rounded-full bg-[#F5F6F9] border border-gray-100 flex"
                style={{ boxShadow: "0px 4.41px 8.81px 0px #00000005 inset" }}
              >
                <Link
                  href="/signup"
                  className="flex-1 px-2 md:px-5 py-3 md:py-4 flex justify-center items-center"
                >
                  <span className="text-[#7D7D91] text-sm md:text-xl font-medium font-['SST Arabic']">
                    مستخدم جديد
                  </span>
                </Link>
                <Link
                  href="/login"
                  className="flex-1 px-2 md:px-5 py-3 md:py-4 bg-white rounded-tr-[73.44px] rounded-tl-[8.81px] rounded-br-[73.44px] rounded-bl-[8.81px] shadow-inner border border-gray-100/50 flex justify-center items-center"
                >
                  <span className="text-[#232447] text-sm md:text-xl font-medium font-['SST Arabic']">
                    تسجيل الدخول
                  </span>
                </Link>
              </div>

              {/* login form */}
              <Login className="w-full [&_input:focus]:ring-2 [&_input:focus]:ring-[var(--color-primary)] [&_input:focus]:border-[var(--color-primary)] [&_select:focus]:ring-2 [&_select:focus]:ring-[var(--color-primary)] [&_select:focus]:border-[var(--color-primary)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
