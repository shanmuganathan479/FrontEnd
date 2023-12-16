import React,{useReducer} from 'react'

const intialState=0;

const reducer=(state,action)=>{

  switch (action) { 

     case "increment":
      return state + 1
     
      case "decrement":
        return state - 1
          
      case "reset":
      return intialState
      
      default:
        return state
  
  
  }

}
function SimpleExample() {

   const[count,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
        <h1>Simple Example for state & action</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <br/>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <br/>
        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default SimpleExample