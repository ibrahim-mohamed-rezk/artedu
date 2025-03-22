import { getData } from "@/libs/axios/backendServer";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  homeData: {},
};

// Create an async thunk for auto login
export const getHomeData = createAsyncThunk(
  "home/getHomeData",
  async (token: string) => {
    try {
      const response = await getData(
        `home-api`,
        {},
        { Authorization: `Bearer ${token}` }
      );

      return response;
    } catch (error) {
      console.error("Error fetching home data:", error);
      throw error;
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.homeData = action.payload.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const {  } = homeSlice.actions;
export default homeSlice.reducer;
