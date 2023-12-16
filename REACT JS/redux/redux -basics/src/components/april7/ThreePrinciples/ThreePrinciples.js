//  eslint-disable-next-line
import React from 'react'
import ovr from "../assests/Screenshot from 2023-04-07 10-04-10.png"

const ThreePrinciples = () => {
  return (
    <div>
        <h1>ThreePrinciples</h1>

        <h2 className='note'>First</h2>
        <h3>All of your state stored in single object tree</h3>

        <h2 className='note'>Second</h2>
        <h3>The only way to change the the state is to dispatch an action, an object described what happened (Not allowed to modify directly)</h3>


        <h2 className='note'>Three</h2>
        <h3>To specify how state is changed , you write pure reducers 
            (Reducer=(state,action)= newState)
        </h3>

        <h2>Overview</h2>
        <img src={ovr} alt="oops"/>
    </div>
  )
}

export default ThreePrinciples