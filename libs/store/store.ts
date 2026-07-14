import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import homeSlice from "./slices/homeSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    home: homeSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
