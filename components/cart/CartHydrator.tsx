"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/libs/store/hooks";
import { useCart } from "@/libs/hooks/useCart";

// Loads the current user's cart into the store once a token is available.
// Mirrors the AutoLogin pattern so the cart badge is ready app-wide.
const CartHydrator = () => {
  const { token } = useAppSelector((state) => state.user);
  const { fetchCart } = useCart();

  useEffect(() => {
    if (token) fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return null;
};

export default CartHydrator;
