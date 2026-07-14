"use client";

import { useState } from "react";
import { useCart } from "@/libs/hooks/useCart";
import { CartProductType } from "@/libs/types/tpes";

interface Props {
  productType: CartProductType;
  productId: number | string;
  // "icon" for compact cards, "full" for detail pages / wide buttons
  variant?: "icon" | "full";
  className?: string;
  // Prevent parent <Link> navigation when the button lives inside a card link
  stopPropagation?: boolean;
}

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 3.5h2l1.5 12.5a2 2 0 0 0 2 1.75h9.2a2 2 0 0 0 1.97-1.64l1.4-7.36H6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
    <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
  </svg>
);

const AddToCartButton = ({
  productType,
  productId,
  variant = "full",
  className = "",
  stopPropagation = false,
}: Props) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [loading, setLoading] = useState(false);
  const inCart = isInCart(productType, productId);

  const handleClick = async (e: React.MouseEvent) => {
    if (stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (loading) return;
    setLoading(true);
    try {
      if (inCart) {
        await removeFromCart(productType, productId);
      } else {
        await addToCart(productType, productId);
      }
    } finally {
      setLoading(false);
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label={inCart ? "إزالة من السلة" : "أضف إلى السلة"}
        title={inCart ? "إزالة من السلة" : "أضف إلى السلة"}
        className={`w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-colors disabled:opacity-60 ${
          inCart
            ? "bg-[#e55604] text-white"
            : "bg-white text-[#26577c] hover:bg-[#fff2eb]"
        } ${className}`}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-b-transparent rounded-full animate-spin" />
        ) : (
          <CartIcon />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`flex items-center justify-center gap-2 py-3 px-5 rounded-[15px] font-bold font-sst-arabic transition-colors disabled:opacity-60 ${
        inCart
          ? "bg-[#26577c] text-white hover:bg-[#26577c]/90"
          : "bg-[#e55604] text-white hover:bg-[#e55604]/90"
      } ${className}`}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-white border-b-transparent rounded-full animate-spin" />
      ) : (
        <>
          <CartIcon />
          {inCart ? "في السلة — إزالة" : "أضف إلى السلة"}
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
