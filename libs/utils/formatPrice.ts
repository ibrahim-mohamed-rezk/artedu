/**
 * Format price display - shows "مجاني لفترة محدودة" for zero prices
 * @param price - The price value
 * @returns Formatted price string
 */
export const formatPrice = (price: number | string | undefined | null): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (!numPrice || numPrice === 0) {
    return "مجاني لفترة محدودة";
  }
  
  return numPrice.toString();
};

/**
 * Check if price is free (zero or null/undefined)
 * @param price - The price value
 * @returns true if price is free
 */
export const isFreePrice = (price: number | string | undefined | null): boolean => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return !numPrice || numPrice === 0;
};
