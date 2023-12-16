const { configureStore } = require("@reduxjs/toolkit");
const briyaniReducer = require("./features/briyani/briyaniSlice")
const chicken65Reducer = require("./features/chicken65/chicken65Slice")

const store =configureStore({
    reducer:{
        briyani: briyaniReducer,
        chicken65: chicken65Reducer
    }
})

module.exports = store