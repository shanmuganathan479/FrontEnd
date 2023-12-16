// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

// const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCake: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfCake--;
    },
    restock: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;

export default cakeSlice.reducer
export const {order,restock} = cakeSlice.actions