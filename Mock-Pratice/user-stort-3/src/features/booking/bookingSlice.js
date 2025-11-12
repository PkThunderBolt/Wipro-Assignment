import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: { userData: {} },
  reducers: {
    setBookingData: (state, action) => {
      state.userData = action.payload;
    },
    clearBookingData: (state) => {
      state.userData = {};
    },
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
