"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

const RedirectProfile = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/profile/account-information");
  }, []);
  return null;
};

export default RedirectProfile;
