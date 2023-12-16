const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  briyaniStock: 100,
};

const briyaniSlice = createSlice({
  name: "briyani",
  initialState,
  reducers: {
    briyaniOrdered: (state) => {
      state.briyaniStock--;
    },
    briyaniCancelled: (state) => {
      state.briyaniStock++;
    },
  },
});

module.exports = briyaniSlice.reducer;
module.exports.briyaniActions = briyaniSlice.actions;
