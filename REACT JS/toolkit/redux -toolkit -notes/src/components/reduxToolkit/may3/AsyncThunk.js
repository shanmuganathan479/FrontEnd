import React from 'react'

function AsyncThunk() {
  return (
    <div>
        <h1>AsyncThunk</h1>
        <h3 className='note'>For more Please refer the code</h3>
        <ol>
            <li>Import createSlice,createAsyncThunk,axios</li>
            <li>set IntialState</li>
            <li>userSlice=createSlice(name,intialState,extraReducer)</li>
            <li>fetchUsers=createAsyncThunk("user/fetchUsers",()=(return axios))</li>
            <li>extraReducer((builder),=())</li>
            <li>builder.addCase(pending)</li>
            <li>builder.addCase(fullfilled)</li>
            <li>builder.addCase(rejectred)</li>
            <li>export reducer,asyncThunk()</li>
            <li>configure reducer in store</li>
            <li>dispatch(fetchUsers())</li>
        </ol>
    </div>
  )
}

export default AsyncThunk