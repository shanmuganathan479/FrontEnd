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
function MultipleReducer() {

   const[count,dispatch] = useReducer(reducer,intialState)
   const[count2,dispatch2] = useReducer(reducer,intialState)

   

  return (
    <div>
        <h1>Multiple Reducer</h1>
        <h2>Reducer 1={count}</h2>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <br/>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <br/>
        <button onClick={()=>dispatch("reset")}>Reset</button>
        <div>
         <h2>Reducer 2={count2}</h2>
        <button onClick={()=>dispatch2("increment")}>Increment</button>
        <br/>
        <button onClick={()=>dispatch2("decrement")}>Decrement</button>
        <br/>
        <button onClick={()=>dispatch2("reset")}>Reset</button>
        </div>
    </div>
  )
}

export default MultipleReducer