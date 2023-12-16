// const createSlice = require("@reduxjs/toolkit").createSlice
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
// const axios = require("axios")

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Intial state
const initialState={
    loading: false,
    users: [],
    error: ""
}

// create slice
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
           state.loading= false
           state.users= action.payload
           state.error= ""
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
          state.loading = false,
          state.users= [],
          state.error= action.error.message
        })
    }
})

// createAsyncThunk
export const fetchUsers= createAsyncThunk("user/fetchUsers",()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
    // return axios.get("https://jsonplaceholder.typicode.com/us")

    .then((response)=>
    response.data
    )
})

// module.exports = userSlice.reducer
// module.exports.fetchUsers =fetchUsers 

export default userSlice.reducer