"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/libs/store/hooks";
import { useCart } from "@/libs/hooks/useCart";
import { clearCartItems } from "@/libs/store/slices/cartSlice";

// Loads the current user's cart into the store once a token is available, and
// clears it on logout so a previous user's cart never leaks into a guest/next
// session. Mirrors the AutoLogin pattern so the cart badge is ready app-wide.
const CartHydrator = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { fetchCart } = useCart();

  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      dispatch(clearCartItems());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return null;
};

export default CartHydrator;
