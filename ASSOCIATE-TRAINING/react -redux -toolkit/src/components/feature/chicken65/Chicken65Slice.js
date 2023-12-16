import { createSlice } from "@reduxjs/toolkit";
// import { cancelled as chickenCancelled, ordered as chickenOrdered } from "../briyani/BriyaniSlice";

const initialState = {
  chickenQuantity: 65,
};

const chicken65Slice = createSlice({
  name: "chicken65",
  initialState,
  reducers: {
    ordered: (state) => {
      state.chickenQuantity--;
    },
    restocked: (state, action) => {
      state.chickenQuantity += action.payload;
                              // payload
    },

  },
  // extraReducers: (builder)=>{
  //   builder.addCase(chickenOrdered,state=>{
  //     state.chickenQuantity --
  //   })
  //   builder.addCase(chickenCancelled,state=>{
  //     state.chickenQuantity ++
  //   })
  // }
});

export default chicken65Slice.reducer

export const {ordered,restocked} = chicken65Slice.actions