"use client";

import { useAppDispatch } from "@/libs/store/hooks";
import { autoLogin, setToken } from "@/libs/store/slices/userSlice";
import { useEffect } from "react";

const AutoLogin = ({ token }: { token: string | null }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(autoLogin(token));
      dispatch(setToken(token));
    }
  }, [token]);

  return null;
};

export default AutoLogin;
