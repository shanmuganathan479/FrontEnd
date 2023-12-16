// const { createSlice } = require("@reduxjs/toolkit");
// const {cakeActions} = require("../cake/cakeSlice")

import { createSlice } from "@reduxjs/toolkit"
import {order as cakeOrder} from "../cake/cakeSlice"

const initialState ={
    numOfIceCream :50
}
const iceCreamSlice = createSlice({
     name: "iceCream",
     initialState,
     reducers:{
        order :(state)=>{
          state.numOfIceCream --
        },
        restock :(state,action)=>{
          state.numOfIceCream += action.payload
        },
     },

    //  extraReducers: {
    //     ['cake/order']: (state)=>{
    //       state.numOfIceCream --
    //     },
    // },

     extraReducers: (builder)=>{
           builder.addCase(cakeOrder,(state)=>{
               state.numOfIceCream --
           })  
        },
})

// module.exports = iceCreamSlice.reducer
// module.exports.iceCreamActions = iceCreamSlice.actions

export default iceCreamSlice.reducer
export const {order,restock} = iceCreamSlice.actions