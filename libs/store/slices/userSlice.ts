import { getData } from "@/libs/axios/backendServer";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  userData: {},
  token: null,
};

// Create an async thunk for auto login
export const autoLogin = createAsyncThunk(
  "user/autoLogin",
  async (token: string) => {
    const response = await getData(
      `autoLogin`,
      {},
      { Authorization: `Bearer ${token}` }
    );
    return response; // Return the response to use it in the reducer
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuserData: (state, action) => {
      state.userData = action.payload.data;
      state.token = action.payload.token;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
    updateUserData: (state, action) => {
      state.userData = action.payload.data;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setuserData, setToken, updateUserData } = userSlice.actions;
export default userSlice.reducer;
