import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import homeSlice from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    home: homeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
