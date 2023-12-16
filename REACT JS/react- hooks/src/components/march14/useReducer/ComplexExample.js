import React,{useReducer} from 'react'

const intialState={
    firstValue : 0,
    secondValue: 100
}
const reducer=(state,action)=>{
switch (action.type) {
    case "increment":
    return {...state,firstValue : state.firstValue + action.value}
        
    case"decrement":
    return {...state,firstValue : state.firstValue -action.value}

    case "reset":
    return intialState

    case "increment5":
    return {...state,firstValue : state.firstValue + action.value}

    case "increment2":
    return {...state,secondValue : state.secondValue + action.value}
        
    case"decrement2":
    return {...state,secondValue : state.secondValue -action.value}
}
}
function ComplexExample() {

    const [count,dispatch]=useReducer(reducer,intialState);
  return (
    <div>
        <h1>ComplexExample</h1>
        <h2 className='note'>State & action as object</h2>
        <h2 className='note'>By using action as an object we can pass additional data</h2>
        <h2 className='note'>By using state as an object we can keep track of multiple state </h2>

        <h2>First counter - {count.firstValue}</h2>
        <h2>Second counter -{count.secondValue}</h2>


        <button onClick={()=>dispatch({type:"increment", value: 1})}>Increment</button>
        <br/>
        <button onClick={()=>dispatch({type: "decrement", value: 1})}>Decrement</button>
        <br/>
        <button onClick={()=>dispatch({type: "reset"})}>Reset</button>
        <br/>
        <button onClick={()=>dispatch({type:"increment5", value: 5})}>Increment5</button>
        <br/>
        
        <button onClick={()=>dispatch({type:"increment2", value: 2})}>Increment2</button>
        <br/>
        <button onClick={()=>dispatch({type: "decrement2", value: 2})}>Decrement2</button>
        <br/>


    </div>
  )
}

export default ComplexExample