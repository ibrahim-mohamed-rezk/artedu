"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { userMenueItems } from "@/libs/helpers/userMenueItems";

const ProfileMenue = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full md:w-80 flex flex-col justify-start items-start gap-2">
      {userMenueItems.map((item, index) => {
        const isActive = pathname === item.url;
        if (item.badge) {
          return (
            <div
              onClick={() => {
                if (item.fun) {
                  item.fun();
                }
                router.push(item.url || "");
              }}
              key={index}
              className={`self-stretch h-12 p-3 bg-white rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-start items-center gap-3 w-full transition-colors hover:bg-red-50`}
            >
              <div className="flex-1 flex justify-end items-center gap-2 rtl">
                <div
                  className={`text-right text-base font-medium font-['SST_Arabic'] leading-normal text-red-600`}
                >
                  {item.text}
                </div>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
              </div>
            </div>
          );
        }

        return (
          <button
            key={index}
            onClick={() => {
              if (item.fun) {
                item.fun();
              }
              router.push(item.url || "");
            }}
            className={`self-stretch h-12 p-3 rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-start items-center gap-3 w-full transition-colors ${
              isActive
                ? "bg-cyan-800"
                : item.badge
                ? "hover:bg-red-50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex-1 flex justify-end items-center gap-2 rtl">
              <div
                className={`text-right text-base font-medium font-['SST_Arabic'] leading-normal ${
                  isActive
                    ? "text-white"
                    : item.badge
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {item.text}
              </div>
              <div className={`origin-center`}>
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProfileMenue;
