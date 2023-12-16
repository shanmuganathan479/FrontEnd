import { configureStore } from "@reduxjs/toolkit";
import briyaniReducer from "../feature/briyani/BriyaniSlice";
import chicken65Reducer from "../feature/chicken65/Chicken65Slice";

const store = configureStore({
  reducer:{
    briyani : briyaniReducer,
    chicken65: chicken65Reducer
  }
});

export default store;
