import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getData, postData } from "../axios/backendServer";
import {
  setCartItems,
  clearCartItems,
  setCartLoaded,
} from "../store/slices/cartSlice";
import { toast } from "react-toastify";
import { getApiErrorMessage } from "../helpers/apiError";
import { CartProductType } from "../types/tpes";

// Map a stored (plural) purchastable_type to the singular product_type the API expects
const toProductType = (type: string): CartProductType =>
  type === "courses" || type === "course" ? "course" : "book";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const { items, loaded } = useAppSelector((state) => state.cart);

  const authHeader = () => ({ Authorization: `Bearer ${token}` });

  const fetchCart = async () => {
    if (!token) return;
    try {
      const res = await getData("cart", {}, authHeader());
      dispatch(setCartItems(res.data || []));
    } catch (error) {
      console.error("Error fetching cart:", error);
      // Ensure consumers gated on `loaded` (e.g. the cart page spinner) don't
      // hang forever when the fetch fails.
      dispatch(setCartLoaded());
    }
  };

  const addToCart = async (
    productType: CartProductType,
    productId: number | string
  ) => {
    if (!token) {
      toast.error("يرجى تسجيل الدخول");
      return { success: false };
    }
    try {
      const res = await postData(
        "cart/add",
        { product_type: toProductType(productType), product_id: productId },
        authHeader()
      );
      dispatch(setCartItems(res.data || []));
      toast.success(res.msg || "تمت الإضافة إلى السلة");
      return { success: true, data: res };
    } catch (error) {
      toast.error(getApiErrorMessage(error, "تعذر الإضافة إلى السلة"));
      return { success: false };
    }
  };

  const removeFromCart = async (
    productType: CartProductType | string,
    productId: number | string
  ) => {
    if (!token) return { success: false };
    try {
      const res = await postData(
        "cart/remove",
        { product_type: toProductType(productType), product_id: productId },
        authHeader()
      );
      dispatch(setCartItems(res.data || []));
      toast.success(res.msg || "تمت الإزالة من السلة");
      return { success: true, data: res };
    } catch (error) {
      toast.error(getApiErrorMessage(error, "تعذر الإزالة من السلة"));
      return { success: false };
    }
  };

  const clearCart = async () => {
    if (!token) return { success: false };
    try {
      const res = await postData("cart/clear", {}, authHeader());
      dispatch(clearCartItems());
      toast.success(res.msg || "تم تفريغ السلة");
      return { success: true, data: res };
    } catch (error) {
      toast.error(getApiErrorMessage(error, "تعذر تفريغ السلة"));
      return { success: false };
    }
  };

  const isInCart = (
    productType: CartProductType | string,
    productId: number | string
  ) => {
    const singular = toProductType(productType);
    return items.some(
      (i) =>
        toProductType(i.purchastable_type) === singular &&
        Number(i.purchastable_id) === Number(productId)
    );
  };

  return {
    items,
    count: items.length,
    loaded,
    fetchCart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
  };
};
