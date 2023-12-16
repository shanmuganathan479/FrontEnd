const { createSlice } = require("@reduxjs/toolkit");
const { briyaniActions } = require("../briyani/briyaniSlice");


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
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(briyaniActions.briyaniOrdered ,(state)=>{
       state.chickenQuantity --
    })
 }
});

module.exports = chicken65Slice.reducer;

module.exports.chickenActions = chicken65Slice.actions;
