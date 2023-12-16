import React from 'react'

const ExtraReducer = () => {
  return (
    <div>
        <h1>ExtraReducer</h1>
        <h2>In toolkit we dont need a combineReducers()</h2>
        <h2>If u want to access the another slice action extrareducers will helps u</h2>
        <h2 className='note'>Note: - mistake :Always use object extraReducer :()=() outside the reducer</h2>

        {/* extraReducers: (builder)=>{
           builder.addCase(cakeActions.order,(state)=>{
               state.numOfIceCream --
           })  
        }, */}
      <ol>
        <li>extraReducer (builder)is object that return function</li>
        <li>it take builder as an args</li>
        <li>by using builder we  can addCase</li>
        <li>addCase(Action.type , state)</li>
        <li>(state)= state.state -1</li>
        <li>by using state we can mutatestate</li>
      </ol>
    </div>
  )
}

export default ExtraReducer