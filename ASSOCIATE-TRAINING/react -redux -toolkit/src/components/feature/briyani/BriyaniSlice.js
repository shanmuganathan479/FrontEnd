import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  briyaniQuantity: 100,
};
const briyaniSlice = createSlice({
  name: "briyani",
  initialState,
  reducers: {
    ordered: (state) => {
      state.briyaniQuantity--;
      // state.briyaniQuantity += 150
    },
    cancelled: (state) => {
      state.briyaniQuantity++;
      // state.briyaniQuantity -= 150
    },
  },
});

export default briyaniSlice.reducer;
export const { ordered, cancelled } = briyaniSlice.actions;
