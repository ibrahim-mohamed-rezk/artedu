"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCart } from "@/libs/hooks/useCart";
import { useAppSelector } from "@/libs/store/hooks";
import { postData } from "@/libs/axios/backendServer";
import { getApiErrorMessage } from "@/libs/helpers/apiError";
import { formatPrice, isFreePrice } from "@/libs/utils/formatPrice";
import { CartItem } from "@/libs/types/tpes";

const productPath = (item: CartItem) =>
  item.purchastable_type === "books" || item.purchastable_type === "book"
    ? `/books/${item.purchastable_id}`
    : `/courses/${item.purchastable_id}`;

const itemTitle = (item: CartItem) =>
  item.details?.title || item.details?.name || "منتج";

const itemImage = (item: CartItem) =>
  item.details?.cover || item.details?.image || "https://placehold.co/120x120";

const Cart = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.user);
  const { items, loaded, fetchCart, removeFromCart, clearCart } = useCart();

  const [coupon, setCoupon] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  // CartHydrator (mounted app-wide in the layout) already loads the cart when a
  // token becomes available, so no per-page fetch is needed here.

  const total = items.reduce(
    (sum, item) => sum + Number(item.details?.price ?? 0),
    0
  );

  const handleRemove = async (item: CartItem) => {
    setRemovingId(item.id);
    try {
      await removeFromCart(item.purchastable_type, item.purchastable_id);
    } finally {
      setRemovingId(null);
    }
  };

  const handleCheckout = async () => {
    if (submitting || items.length === 0) return;

    setSubmitting(true);
    try {
      // POST /cart/checkout creates a single Paymob intention for all cart
      // items and returns a unified checkout URL. The backend configures the
      // Paymob integration and returns `payment_url`; the frontend only sends
      // an optional coupon (`cobon_code`) and redirects to that URL.
      const res = await postData(
        "cart/checkout",
        {
          cobon_code: coupon || undefined,
        },
        { Authorization: `Bearer ${token}` }
      );
      const data = res?.data || {};

      if (data.direct_activation) {
        toast.success(res.msg || "تم تفعيل مشترياتك بنجاح");
        // The items are now purchased and removed from the cart server-side;
        // resync so the cart list and navbar badge reflect the empty cart.
        await fetchCart();
        router.push("/cart");
        return;
      }
      if (data.payment_url) {
        window.location.href = data.payment_url;
        return;
      }
      toast.error("تعذر بدء عملية الدفع");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "تعذر بدء عملية الدفع"));
    } finally {
      setSubmitting(false);
    }
  };

  if (!loaded) {
    return (
      <div className="w-full flex items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e55604]"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-5 py-16">
        <div className="text-black text-[18px] font-bold font-sst-arabic">
          سلة المشتريات فارغة
        </div>
        <div className="flex gap-3">
          <Link href="/courses">
            <button className="px-4 py-2 bg-[#e55604] text-white rounded-md hover:bg-[#e55604]/80 transition-colors font-sst-arabic">
              تصفح الكورسات
            </button>
          </Link>
          <Link href="/books">
            <button className="px-4 py-2 bg-[#26577c] text-white rounded-md hover:bg-[#26577c]/80 transition-colors font-sst-arabic">
              تصفح الكتب
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:px-[50px] mt-4">
      <div className="flex flex-col w-[95%] mx-auto lg:flex-row gap-8">
        {/* Items list */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => clearCart()}
              className="text-sm text-[#ff1212] font-sst-arabic hover:underline"
            >
              تفريغ السلة
            </button>
            <h3 className="text-lg font-bold font-sst-arabic">
              المنتجات ({items.length})
            </h3>
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-4 flex items-center gap-4"
            >
              <button
                onClick={() => handleRemove(item)}
                disabled={removingId === item.id}
                aria-label="إزالة"
                className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-[#fff2eb] text-[#ff1212] hover:bg-[#ffe0d0] transition-colors disabled:opacity-60"
              >
                {removingId === item.id ? (
                  <span className="w-4 h-4 border-2 border-current border-b-transparent rounded-full animate-spin" />
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7h16M10 11v6M14 11v6M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <div className="flex-1 flex flex-col items-end text-right gap-1">
                <span className="text-[#26577c] text-sm">
                  {item.purchastable_type === "books" ||
                  item.purchastable_type === "book"
                    ? "كتاب"
                    : "كورس"}
                  {item.details?.teacher_name
                    ? ` • ${item.details.teacher_name}`
                    : ""}
                </span>
                <Link
                  href={productPath(item)}
                  className="text-lg font-bold hover:text-[#e55604] transition-colors line-clamp-1"
                >
                  {itemTitle(item)}
                </Link>
                {isFreePrice(item.details?.price) ? (
                  <span className="text-[#26577c] font-bold">
                    {formatPrice(item.details?.price)}
                  </span>
                ) : (
                  <span className="text-[#26577c] font-bold">
                    {formatPrice(item.details?.price)} جنيه
                  </span>
                )}
              </div>

              <img
                className="w-[80px] h-[80px] rounded-2xl object-cover shrink-0"
                src={itemImage(item)}
                alt={itemTitle(item)}
              />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-[20px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-[#f1f1f2] p-6 sticky top-4">
            <h4 className="text-lg font-bold mb-4 text-right">ملخص الطلب</h4>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>{total} جنيه</span>
                <span>الإجمالي الفرعي</span>
              </div>
              <div className="flex justify-between">
                <span>0.00 جنيه</span>
                <span>ضريبة</span>
              </div>
            </div>

            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full text-end px-4 py-3 border border-[#f1f1f2] rounded-[15px] mb-4"
              placeholder="كوبون الخصم"
            />

            <div className="border-t border-[#f1f1f2] pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#26577c]">
                  {total === 0 ? "مجاني" : `${total} جنيه`}
                </span>
                <span className="font-medium">الإجمالي</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={submitting}
              className="w-full bg-[#e55604] text-white py-3 rounded-[15px] font-bold flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? (
                <span className="w-5 h-5 border-2 border-white border-b-transparent rounded-full animate-spin" />
              ) : (
                "الدفع"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
