"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/libs/helpers/profileMenueItems";
import { useRouter } from "next/navigation";

const ProfileMenue = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full md:w-80 flex flex-col justify-start items-start gap-2">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;
        if (item.isLogout) {
          return (
            <div
              onClick={() => {
                item.fun();
                router.push("/login");
              }}
              key={index}
              className={`self-stretch h-12 p-3 bg-white rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-start items-center gap-3 w-full transition-colors hover:bg-red-50`}
            >
              <div className="flex-1 flex justify-end items-center gap-2 rtl">
                <div
                  className={`text-right text-base font-medium font-['SST_Arabic'] leading-normal text-red-600`}
                >
                  {item.name}
                </div>
                <div>{item.icon}</div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={index}
            href={item.path || ""}
            className={`self-stretch h-12 p-3 bg-white rounded-lg shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-start items-center gap-3 w-full transition-colors ${
              isActive
                ? "bg-cyan-800"
                : item.isLogout
                ? "hover:bg-red-50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex-1 flex justify-end items-center gap-2 rtl">
              <div
                className={`text-right text-base font-medium font-['SST_Arabic'] leading-normal ${
                  isActive
                    ? "text-white"
                    : item.isLogout
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </div>
              <div className={`origin-center ${isActive ? "rotate-180" : ""}`}>
                {item.icon}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileMenue;
