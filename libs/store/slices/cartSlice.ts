import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/libs/types/tpes";

interface CartState {
  items: CartItem[];
  // Whether the cart has been fetched at least once for the current session
  loaded: boolean;
}

const initialState: CartState = {
  items: [],
  loaded: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload || [];
      state.loaded = true;
    },
    clearCartItems: (state) => {
      state.items = [];
      state.loaded = true;
    },
    // Mark the cart as loaded without changing items (e.g. after a failed fetch)
    // so consumers don't stay stuck on a loading state.
    setCartLoaded: (state) => {
      state.loaded = true;
    },
  },
});

export const { setCartItems, clearCartItems, setCartLoaded } = cartSlice.actions;
export default cartSlice.reducer;
