const { createSlice } = require("@reduxjs/toolkit");
const {cakeActions} = require("../cake/cakeSlice")

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
           builder.addCase(cakeActions.order,(state)=>{
               state.numOfIceCream --
           })  
        },
})

module.exports = iceCreamSlice.reducer

module.exports.iceCreamActions = iceCreamSlice.actions