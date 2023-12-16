import React from 'react'

const Counter = () => {

    // let countValue = 0

    // document.getElementById("increment").onclick= function(){
    //  countValue+=1
    //  document.getElementById("value").innerHTML=countValue
    // }
    // document.getElementById("value").innerHTML=0
     
  return (
    <div>
        <h1>Counter</h1>
        <p id='value'>0</p>
        <button id='increment'>+</button>
        <button id="decrement">-</button>
    </div>
  )
}

export default Counter