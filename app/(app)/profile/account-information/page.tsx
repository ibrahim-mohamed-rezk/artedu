import AccountInformation from "@/components/profile/account-information/AccountInformation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const cookiesData = await cookies();
  const token = cookiesData.get("token")?.value;

  if (!token) {
    redirect("/login");
  }
  return (
    <div className="w-full">
      <AccountInformation />
    </div>
  );
};

export default page;
