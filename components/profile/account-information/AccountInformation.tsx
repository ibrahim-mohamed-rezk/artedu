"use client";

import { useState } from "react";
import ProfileHeader from "../ProfileHeader";
import PersonalSettings from "./PersonalSettings";
import Password from "./Password";

const AccountInformation = () => {
  const [page, setpage] = useState("Personal-settings");
  const [notifications, setNotifications] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        {/* header */}
        <ProfileHeader title="معلومات الحساب" />
        {/* body */}
        <div className="px-4 md:px-[50px] w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto flex flex-col-reverse md:flex-row items-start gap-[20px] pt-[50px] justify-center">
          {page === "Personal-settings" && <PersonalSettings />}
          {page === "Password" && <Password />}
          {/* menue */}
          <div className=" w-full md:w-[clamp(100px,16.6666664vw,1000px)] mb-6 md:mb-0 flex-col justify-start items-start gap-[5px] inline-flex">
            <div
              onClick={() => setpage("Personal-settings")}
              className="w-full cursor-pointer h-[50px] px-[15px] py-3 bg-white rounded-[15px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] justify-between items-center inline-flex"
            >
              <div data-svg-wrapper className="relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
              <div className="text-gray-400 text-sm font-normal font-['SST Arabic'] leading-tight">
                الاعدادات الشخصية
              </div>
            </div>
            <div
              onClick={() => setpage("Password")}
              className="self-stretch h-[50px] cursor-pointer px-[15px] py-3 bg-white rounded-[15px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] justify-between items-center inline-flex"
            >
              <div data-svg-wrapper className="relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4881 4.43056C15.8026 4.70012 15.839 5.1736 15.5694 5.48809L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5694C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.5119C14.7001 4.19741 15.1736 4.16099 15.4881 4.43056Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
              <div className="text-gray-400 text-sm font-normal font-['SST Arabic'] leading-tight">
                كلمة المرور
              </div>
            </div>
            <div className="self-stretch h-[50px] px-[15px] py-3 bg-white rounded-[15px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] justify-between items-center inline-flex">
              <div
                onClick={() => setNotifications((prev) => !prev)}
                className="w-[52px] h-8 px-1 py-0.5 bg-[#e55604] rounded-[100px] justify-end items-center flex cursor-pointer"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="w-6 h-6 bg-white rounded-full transition-all duration-300"
                    style={{
                      transform: notifications
                        ? "translateX(0px)"
                        : "translateX(20px)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-gray-400 text-sm font-normal font-['SST Arabic'] leading-tight">
                الاشعارات
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
